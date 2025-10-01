const Comment = require('../models/Comment');

const logger = require('../utils/logger');
const { asyncHandler, AppError } = require('../middleware/errorHandler');



exports.createReply = asyncHandler(async (req, res) => {
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
    const startTime = Date.now();
    const populatedReply = await Comment.findById(savedReply._id)
      .populate('author', 'firstName lastName avatarUrl initials')
      .lean();
    logger.logDbOperation('find', 'collection', {}, { executionTime: Date.now() - startTime });

    res.status(201).json(populatedReply);
  } catch (error) {
    console.error('Create reply error:', error);
    res.status(500).json({ message: 'Server error creating reply' });
  }
});