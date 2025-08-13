const Post = require('../models/Post');

// Get posts with pagination
exports.getPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const posts = await Post.find()
      .populate('author', 'firstName lastName avatarUrl initials username')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    if (req.user) {
      posts.forEach(post => {
        post.isLiked = Array.isArray(post.likedBy)
          ? post.likedBy.some(userId => userId.toString() === req.user.id)
          : false;
      });
    }

    const totalCount = await Post.countDocuments();

    res.json({ posts, totalCount });
  } catch (error) {
    console.error('Get posts error:', error);
    res.status(500).json({ message: 'Server error fetching posts' });
  }
};

// Create new post
exports.createPost = async (req, res) => {
  try {
    const userId = req.user.id;
    const { content, images } = req.body;

    if (!content || content.trim() === '') {
      return res.status(400).json({ message: 'Content is required' });
    }

    const newPost = new Post({
      author: userId,
      content,
      images: images || []
    });

    const savedPost = await newPost.save();

    const populatedPost = await Post.findById(savedPost._id)
      .populate('author', 'firstName lastName avatarUrl initials username')
      .lean();

    res.status(201).json(populatedPost);
  } catch (error) {
    console.error('Create post error:', error);
    res.status(500).json({ message: 'Server error creating post' });
  }
};

// Like/unlike post toggle
exports.toggleLikePost = async (req, res) => {
  try {
    const userId = req.user.id;
    const postId = req.params.id;

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const likedIndex = post.likedBy.findIndex(uid => uid.toString() === userId);

    if (likedIndex === -1) {
      // Like
      post.likedBy.push(userId);
      post.likeCount++;
    } else {
      // Unlike
      post.likedBy.splice(likedIndex, 1);
      post.likeCount--;
    }

    await post.save();

    res.json({ likeCount: post.likeCount, isLiked: likedIndex === -1 });
  } catch (error) {
    console.error('Toggle like error:', error);
    res.status(500).json({ message: 'Server error toggling like' });
  }
};

// Fetch comments for a post
exports.getComments = async (req, res) => {
  console.log('getComments postId:', req.params.postId);

  try {
    const post = await Post.findById(req.params.postId)
      .populate('comments.author', 'firstName lastName avatarUrl initials username')
      .lean();

    if (!post) return res.status(404).json({ message: 'Post not found' });

    res.json(post.comments || []);
  } catch (error) {
    console.error('Get comments error:', error);
    res.status(500).json({ message: 'Server error fetching comments' });
  }
};

// Add a comment to a post (embedded comment)
exports.addComment = async (req, res) => {
  try {
    const userId = req.user.id;
    const postId = req.params.postId;
    const { content } = req.body;

    if (!content || content.trim() === '') {
      return res.status(400).json({ message: 'Comment content is required' });
    }

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const newComment = {
      author: userId,
      content,
      createdAt: new Date(),
      replies: [], // Initialize replies array
    };

    post.comments.push(newComment);

    post.commentCount = post.comments.length;

    await post.save();

    await post.populate('comments.author', 'firstName lastName avatarUrl initials username');

    res.status(201).json(post.comments[post.comments.length - 1]);
  } catch (error) {
    console.error('Add comment error:', error);
    res.status(500).json({ message: 'Server error adding comment' });
  }
};

// Add a reply to a comment (nested reply)
exports.addReply = async (req, res) => {
  try {
    const userId = req.user.id;
    const { postId, commentId } = req.params;
    const { content } = req.body;

    if (!content || content.trim() === '') {
      return res.status(400).json({ message: 'Reply content is required' });
    }

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const comment = post.comments.id(commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    if (!comment.replies) comment.replies = [];

    const newReply = {
      author: userId,
      content,
      createdAt: new Date(),
    };

    comment.replies.push(newReply);

    await post.save();

    await post.populate('comments.replies.author', 'firstName lastName avatarUrl initials username');

    res.status(201).json(comment.replies[comment.replies.length - 1]);
  } catch (error) {
    console.error('Add reply error:', error);
    res.status(500).json({ message: 'Server error adding reply' });
  }
};
exports.addReply = async (req, res) => {
  try {
    const userId = req.user.id;
    const { postId, commentId } = req.params;
    const { content } = req.body;

    if (!content || content.trim() === '') {
      return res.status(400).json({ message: 'Reply content is required' });
    }

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const comment = post.comments.id(commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    if (!comment.replies) comment.replies = [];

    comment.replies.push({
      author: userId,
      content,
      createdAt: new Date()
    });

    await post.save();

    // Populate the newly added reply's author info
    await post.populate({
      path: 'comments.replies.author',
      select: 'firstName lastName avatarUrl initials username'
    });

    const newReply = comment.replies[comment.replies.length - 1];

    res.status(201).json(newReply);
  } catch (error) {
    console.error('Add reply error:', error);
    res.status(500).json({ message: 'Server error adding reply' });
  }
};
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Make sure to use 'author' instead of 'user'
    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this post' });
    }

    await post.deleteOne();
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error); // log the real error
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
