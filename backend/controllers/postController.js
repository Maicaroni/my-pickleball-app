const Post = require('../models/Post');
const Profile = require('../models/Profile');
const Notification = require('../models/Notifications');

// =========================
// Helper: Attach avatarUrl consistently
// =========================
const attachAvatars = async (docs) => {
  if (!Array.isArray(docs)) docs = [docs];

  const authorIds = [];
  docs.forEach(doc => {
    if (doc.author?._id) authorIds.push(doc.author._id);
    if (doc.comments) {
      doc.comments.forEach(c => {
        if (c.author?._id) authorIds.push(c.author._id);
        if (c.replies) {
          c.replies.forEach(r => {
            if (r.author?._id) authorIds.push(r.author._id);
          });
        }
      });
    }
  });

  if (authorIds.length === 0) return docs;

  const profiles = await Profile.find({ user: { $in: authorIds } }).select("user avatar");
  const profileMap = {};
  profiles.forEach(p => {
    profileMap[p.user.toString()] = p.avatar;
  });

  const mapAuthor = (author) =>
    author
      ? { ...author, avatarUrl: profileMap[author._id?.toString()] || null }
      : { firstName: "Unknown", lastName: "" };

  docs.forEach(doc => {
    doc.author = mapAuthor(doc.author);
    if (doc.comments) {
      doc.comments.forEach(c => {
        c.author = mapAuthor(c.author);
        if (c.replies) {
          c.replies.forEach(r => {
            r.author = mapAuthor(r.author);
          });
        }
      });
    }
  });

  return docs;
};

// =========================
// Get posts
// =========================
exports.getPosts = async (req, res) => {
  console.log('🚀 GET POSTS CALLED:', {
    method: req.method,
    url: req.url,
    query: req.query,
    hasAuthHeader: !!req.headers.authorization,
    authHeaderLength: req.headers.authorization?.length || 0,
    timestamp: new Date().toISOString()
  });

  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const status = req.query.status || "approved";
    const query = { status };

    const posts = await Post.find(query)
      .populate("author", "firstName lastName initials username email")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const withAvatars = await attachAvatars(posts);
    
    // Better user ID extraction with more robust checking
    let userId = null;
    if (req.user && req.user._id) {
      userId = req.user._id.toString();
    }

    console.log('📊 GET POSTS DEBUG:', {
      hasUser: !!req.user,
      userId: userId,
      authHeader: req.headers.authorization ? 'Present' : 'Missing',
      postsCount: withAvatars.length,
      timestamp: new Date().toISOString()
    });

    const formattedPosts = withAvatars.map((post, index) => {
      const likedBy = post.likedBy || [];
      const isLiked = userId && Array.isArray(likedBy) 
        ? likedBy.some(uid => uid.toString() === userId)
        : false;
      
      // Debug first post's like status
      if (index === 0) {
        console.log('🔍 FIRST POST LIKE DEBUG:', {
          postId: post._id,
          likedByArray: likedBy,
          userId: userId,
          isLiked: isLiked,
          likeCount: likedBy.length
        });
      }
      
      return {
        ...post,
        images: post.images || [],
        content: post.content || "",
        likedBy: likedBy,
        isLiked: isLiked,
        likeCount: likedBy.length || 0,
        commentCount: post.comments?.length || 0,
      };
    });

    console.log('✅ GET POSTS RESPONSE:', {
      postsReturned: formattedPosts.length,
      firstPostIsLiked: formattedPosts[0]?.isLiked,
      timestamp: new Date().toISOString()
    });

    const totalCount = await Post.countDocuments(query);
    res.json({ success: true, posts: formattedPosts, totalCount, page, limit });
  } catch (error) {
    console.error("Get posts error:", error);
    res.status(500).json({ message: "Server error fetching posts" });
  }
};

// =========================
// Create post
// =========================
exports.createPost = async (req, res) => {
  try {
    const userId = req.user._id;
    const { content, images } = req.body;

    if (!content?.trim())
      return res.status(400).json({ message: "Content is required" });

    const newPost = new Post({
      author: userId,
      content,
      images: images || [],
      status: "pending",
    });

    const savedPost = await newPost.save();
    let populatedPost = await Post.findById(savedPost._id)
      .populate("author", "firstName lastName initials username email")
      .lean();

    [populatedPost] = await attachAvatars(populatedPost);

    populatedPost.isLiked = false;
    populatedPost.likeCount = 0;
    populatedPost.commentCount = 0;

    res.status(201).json({ success: true, post: populatedPost });
  } catch (error) {
    console.error("Create post error:", error);
    res.status(500).json({ message: "Server error creating post" });
  }
};

// =========================
// Like/unlike post
// =========================
exports.toggleLikePost = async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const post = await Post.findById(req.params.id).populate('author', 'firstName lastName');
    if (!post) return res.status(404).json({ message: "Post not found" });

    const likedIndex = post.likedBy.findIndex(uid => uid.toString() === userId);
    let isLiked = false;

    if (likedIndex === -1) {
      post.likedBy.push(userId);
      isLiked = true;
      
      // Create notification for the post author (only when liking, not unliking)
      // Don't notify if user is liking their own post
      if (post.author._id.toString() !== userId) {
        try {
          await Notification.create({
            user: post.author._id,
            type: 'like',
            message: `liked your post "${post.content?.slice(0, 30)}..."`,
            postId: post._id,
            isRead: false
          });
          console.log('✅ Like notification created');
        } catch (notificationError) {
          console.error('❌ Error creating like notification:', notificationError);
        }
      }
    } else {
      post.likedBy.splice(likedIndex, 1);
    }

    post.likeCount = post.likedBy.length;
    await post.save();
    res.json({ success: true, likeCount: post.likeCount, isLiked });
  } catch (error) {
    console.error("Toggle like error:", error);
    res.status(500).json({ message: "Server error toggling like" });
  }
};

// =========================
// Comments & Replies
// =========================
exports.getComments = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
      .populate("comments.author", "firstName lastName initials username email")
      .populate("comments.replies.author", "firstName lastName initials username email")
      .lean();

    if (!post) return res.status(404).json({ message: "Post not found" });

    const [withAvatars] = await attachAvatars(post);
    res.json({ success: true, comments: withAvatars.comments || [] });
  } catch (error) {
    console.error("Get comments error:", error);
    res.status(500).json({ message: "Server error fetching comments" });
  }
};

// =========================
// Add comment
// =========================
exports.addComment = async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const { content } = req.body;
    if (!content?.trim())
      return res.status(400).json({ message: "Comment content is required" });

    const post = await Post.findById(req.params.postId).populate('author', 'firstName lastName');
    if (!post) return res.status(404).json({ message: "Post not found" });

    const newComment = { author: userId, content, createdAt: new Date(), replies: [] };
    post.comments.push(newComment);
    post.commentCount = post.comments.length;
    await post.save();

    // Create notification for the post author (only if commenter is not the post author)
    if (post.author._id.toString() !== userId) {
      try {
        await Notification.create({
          user: post.author._id,
          type: 'comment',
          message: `commented on your post "${post.content?.slice(0, 30)}..."`,
          postId: post._id,
          isRead: false
        });
        console.log('✅ Comment notification created');
      } catch (notificationError) {
        console.error('❌ Error creating comment notification:', notificationError);
      }
    }

    let populatedPost = await Post.findById(req.params.postId)
      .populate("comments.author", "firstName lastName initials username email")
      .lean();

    [populatedPost] = await attachAvatars(populatedPost);
    const latestComment = populatedPost.comments[populatedPost.comments.length - 1];

    res.status(201).json({ success: true, comment: latestComment });
  } catch (error) {
    console.error("Add comment error:", error);
    res.status(500).json({ message: "Server error adding comment" });
  }
};


// =========================
// Add reply
// =========================
exports.addReply = async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const { content } = req.body;
    if (!content?.trim()) return res.status(400).json({ message: "Reply content is required" });

    const post = await Post.findById(req.params.postId).populate('author', 'firstName lastName');
    if (!post) return res.status(404).json({ message: "Post not found" });

    const comment = post.comments.id(req.params.commentId);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    const newReply = { author: userId, content, createdAt: new Date() };
    comment.replies.push(newReply);
    await post.save();

    // Create notification for the comment author (only if replier is not the comment author)
    if (comment.author.toString() !== userId) {
      try {
        await Notification.create({
          user: comment.author,
          type: 'reply',
          message: `replied to your comment on "${post.content?.slice(0, 30)}..."`,
          postId: post._id,
          isRead: false
        });
        console.log('✅ Reply notification created');
      } catch (notificationError) {
        console.error('❌ Error creating reply notification:', notificationError);
      }
    }

    let populatedPost = await Post.findById(req.params.postId)
      .populate("comments.author", "firstName lastName initials username email")
      .populate("comments.replies.author", "firstName lastName initials username email")
      .lean();

    [populatedPost] = await attachAvatars(populatedPost);

    const latestReply = populatedPost.comments
      .find(c => c._id.toString() === req.params.commentId)
      .replies.slice(-1)[0];

    res.status(201).json({ success: true, reply: latestReply });
  } catch (error) {
    console.error("Add reply error:", error);
    res.status(500).json({ message: "Server error adding reply" });
  }
};

// =========================
// Delete post/comment/reply (own content only)
// =========================
exports.deletePost = async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.author.toString() !== userId)
      return res.status(403).json({ message: "Not authorized" });

    await post.deleteOne();
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const comment = post.comments.id(req.params.commentId);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    if (comment.author.toString() !== userId && post.author.toString() !== userId)
      return res.status(403).json({ message: "Not authorized" });

    post.comments = post.comments.filter(c => c._id.toString() !== req.params.commentId);
    post.commentCount = post.comments.length;
    await post.save();

    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteReply = async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const comment = post.comments.id(req.params.commentId);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    const reply = comment.replies.id(req.params.replyId);
    if (!reply) return res.status(404).json({ message: "Reply not found" });

    if (
      reply.author.toString() !== userId &&
      comment.author.toString() !== userId &&
      post.author.toString() !== userId
    ) {
      return res.status(403).json({ message: "Not authorized" });
    }

    comment.replies = comment.replies.filter(r => r._id.toString() !== req.params.replyId);
    await post.save();

    res.json({ message: "Reply deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// =========================
// Superadmin actions
// =========================
exports.deletePostSuperAdmin = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) return res.status(404).json({ message: "Post not found" });

    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error("Error deleting post:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.approvePost = async (req, res) => {
  try {
    console.log('🔹 Approve route hit, Post ID:', req.params.id);
    const post = await Post.findById(req.params.id).populate('author', 'firstName lastName');
    if (!post) return res.status(404).json({ message: 'Post not found' });

    post.status = 'approved';
    await post.save();

    // ✅ Create notification for the post author
    try {
      await Notification.create({
        user: post.author._id, // receiver
        type: 'post_approved',
        message: `Your post "${post.content?.slice(0, 30)}..." has been approved!`,
        postId: post._id,
        isRead: false
      });
      console.log('✅ Notification created for post approval');
    } catch (notificationError) {
      console.error('❌ Error creating notification:', notificationError);
    }

    res.json({ success: true, message: 'Post approved', post });
  } catch (err) {
    console.error('❌ Approve post error:', err);
    res.status(500).json({ message: 'Server error approving post' });
  }
};

exports.rejectPost = async (req, res) => {
  try {
    console.log('🔹 Reject route hit, Post ID:', req.params.id);
    const post = await Post.findById(req.params.id).populate('author', 'firstName lastName');
    if (!post) return res.status(404).json({ message: 'Post not found' });

    post.status = 'rejected';
    await post.save();

    // Create notification for the post author
    try {
      await Notification.create({
        user: post.author._id,
        type: 'post_rejected',
        message: `Your post "${post.content?.slice(0, 30)}..." was not approved. Please review our community guidelines and try again.`,
        postId: post._id,
        isRead: false
      });
      console.log('✅ Notification created for post rejection');
    } catch (notificationError) {
      console.error('❌ Error creating notification:', notificationError);
      // Don't fail the rejection if notification creation fails
    }

    res.json({ success: true, message: 'Post rejected', post });
  } catch (err) {
    console.error('❌ Reject post error:', err);
    res.status(500).json({ message: 'Server error rejecting post' });
  }
};
