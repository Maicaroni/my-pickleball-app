const Comment = require('../models/Comment');

exports.createReply = async (req, res) => {
  try {
    const userId = req.user.id;
    const { commentId } = req.params;
    const { content } = req.body;

    if (!content || content.trim() === '') {
      return res.status(400).json({ message: 'Reply content is required' });
    }

    // Create reply as a Comment with a parent comment reference
    const newReply = new Comment({
      author: userId,
      content,
      parentComment: commentId
    });

    const savedReply = await newReply.save();

    // Populate author info for response
    const populatedReply = await Comment.findById(savedReply._id)
      .populate('author', 'firstName lastName avatarUrl initials')
      .lean();

    res.status(201).json(populatedReply);
  } catch (error) {
    console.error('Create reply error:', error);
    res.status(500).json({ message: 'Server error creating reply' });
  }
};