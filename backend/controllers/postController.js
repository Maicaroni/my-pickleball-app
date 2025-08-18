const Post = require('../models/Post');

// =========================
// Get posts with pagination
// =========================
// =========================
// Get posts with pagination
// =========================
exports.getPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const status = req.query.status; // pending | approved | rejected
    const query = {};
    if (status) query.status = status.toLowerCase(); // ensure lowercase

    const posts = await Post.find(query)
      .populate('author', 'firstName lastName avatarUrl initials username')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const userId = req.user?.id;

    // Format posts safely
    const formattedPosts = posts.map(post => ({
      ...post,
      author: post.author || { firstName: 'Unknown', lastName: '' },
      images: post.images || [],
      content: post.content || '',
      likedBy: post.likedBy || [],
      isLiked: Array.isArray(post.likedBy) && userId
        ? post.likedBy.some(uid => uid.toString() === userId)
        : false,
      likeCount: (post.likedBy?.length) || 0,
      commentCount: (post.comments?.length) || 0,
    }));

    const totalCount = await Post.countDocuments(query);

    res.json({ success: true, posts: formattedPosts, totalCount, page, limit });
  } catch (error) {
    console.error('Get posts error:', error);
    res.status(500).json({ message: 'Server error fetching posts' });
  }
};


// =========================
// Create new post
// =========================
exports.createPost = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const { content, images } = req.body;
    if (!content?.trim()) return res.status(400).json({ message: 'Content is required' });

    const newPost = new Post({
      author: userId,
      content,
      images: images || [],
      status: 'pending'
    });

    const savedPost = await newPost.save();

    const populatedPost = await Post.findById(savedPost._id)
      .populate('author', 'firstName lastName avatarUrl initials username')
      .lean();

    populatedPost.isLiked = false;
    populatedPost.likeCount = 0;
    populatedPost.commentCount = 0;

    res.status(201).json({ success: true, post: populatedPost });
  } catch (error) {
    console.error('Create post error:', error);
    res.status(500).json({ message: 'Server error creating post' });
  }
};

// =========================
// Toggle like/unlike
// =========================
exports.toggleLikePost = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const likedIndex = post.likedBy.findIndex(uid => uid.toString() === userId);
    let isLiked = false;

    if (likedIndex === -1) {
      post.likedBy.push(userId);
      isLiked = true;
    } else {
      post.likedBy.splice(likedIndex, 1);
    }
    post.likeCount = post.likedBy.length;

    await post.save();
    res.json({ success: true, likeCount: post.likeCount, isLiked });
  } catch (error) {
    console.error('Toggle like error:', error);
    res.status(500).json({ message: 'Server error toggling like' });
  }
};

// =========================
// Comments & Replies
// =========================
exports.getComments = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
      .populate('comments.author', 'firstName lastName avatarUrl initials username')
      .populate('comments.replies.author', 'firstName lastName avatarUrl initials username') // ✅ populate reply authors
      .lean();

    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json({ success: true, comments: post.comments || [] });
  } catch (error) {
    console.error('Get comments error:', error);
    res.status(500).json({ message: 'Server error fetching comments' });
  }
};


exports.addComment = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const { content } = req.body;
    if (!content?.trim()) return res.status(400).json({ message: 'Comment content is required' });

    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const newComment = { author: userId, content, createdAt: new Date(), replies: [] };
    post.comments.push(newComment);
    post.commentCount = post.comments.length;
    await post.save();
    await post.populate('comments.author', 'firstName lastName avatarUrl initials username');

    res.status(201).json({ success: true, comment: post.comments[post.comments.length - 1] });
  } catch (error) {
    console.error('Add comment error:', error);
    res.status(500).json({ message: 'Server error adding comment' });
  }
};

exports.addReply = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const { content } = req.body;
    if (!content?.trim()) return res.status(400).json({ message: 'Reply content is required' });

    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const comment = post.comments.id(req.params.commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    const newReply = { author: userId, content, createdAt: new Date() };
    comment.replies.push(newReply);

    await post.save();

    // Populate only the newly added reply author
    const populatedPost = await Post.findById(req.params.postId)
      .populate('comments.replies.author', 'firstName lastName avatarUrl initials username')
      .lean();

    const latestReply = populatedPost.comments
      .find(c => c._id.toString() === req.params.commentId)
      .replies.slice(-1)[0];

    res.status(201).json({ success: true, reply: latestReply });
  } catch (error) {
    console.error('Add reply error:', error);
    res.status(500).json({ message: 'Server error adding reply' });
  }
};


// =========================
// Delete post, comment, reply
// =========================
exports.deletePost = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    if (post.author.toString() !== userId) return res.status(403).json({ message: 'Not authorized' });

    await post.deleteOne();
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const comment = post.comments.id(req.params.commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    // Allow deletion if comment author or post author
    if (comment.author.toString() !== userId && post.author.toString() !== userId)
      return res.status(403).json({ message: 'Not authorized' });

    post.comments = post.comments.filter(c => c._id.toString() !== req.params.commentId);
    post.commentCount = post.comments.length;
    await post.save();

    res.json({ message: 'Comment deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteReply = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const comment = post.comments.id(req.params.commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    const reply = comment.replies.id(req.params.replyId);
    if (!reply) return res.status(404).json({ message: 'Reply not found' });

    // Allow deletion if reply author, comment author, or post author
    if (
      reply.author.toString() !== userId &&
      comment.author.toString() !== userId &&
      post.author.toString() !== userId
    ) return res.status(403).json({ message: 'Not authorized' });

    comment.replies = comment.replies.filter(r => r._id.toString() !== req.params.replyId);
    await post.save();

    res.json({ message: 'Reply deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


// =========================
// SuperAdmin delete post
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

// =========================
// Approve / Reject posts
// =========================
exports.approvePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    post.status = 'approved';
    await post.save();

    res.json({ success: true, message: 'Post approved' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error approving post' });
  }
};

exports.rejectPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    post.status = 'rejected';
    await post.save();

    res.json({ success: true, message: 'Post rejected' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error rejecting post' });
  }
};