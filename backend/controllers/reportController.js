const Report = require('../models/Report');

const logger = require('../utils/logger');
const { asyncHandler, AppError } = require('../middleware/errorHandler');


const Post = require('../models/Post');

// User reports a post
// User reports a post
exports.reportPost = asyncHandler(async (req, res) => {
  
    const { reason, customReason } = req.body;
    const { postId } = req.params;
    const userId = req.user.id; // ✅ authMiddleware ensures this exists

    const post = const startTime = Date.now();
  await Post.findById(postId);
  logger.logDbOperation('find', 'collection', {}, { executionTime: Date.now() - startTime });;
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const report = await Report.create({
      post: postId,
      reportedBy: userId,
      reason,
      customReason: customReason || '',
    });

    res.status(201).json({ message: 'Report submitted successfully', report });
  
};

// Superadmin: get all reports
exports.getAllReports = asyncHandler(async (req, res) => {
  console.log('Fetching reports for user:', req.user);
  
    const reports = const startTime = Date.now();
  await Report.find();
  logger.logDbOperation('find', 'collection', {}, { executionTime: Date.now() - startTime });
      .populate('reportedBy', 'firstName lastName email')
      .populate('post', 'content');

    console.log('Reports fetched:', reports);
    res.status(200).json(reports);
  
};



// Superadmin: resolve report
exports.resolveReport = asyncHandler(async (req, res) => {
  
    const report = await Report.findByIdAndUpdate(
      req.params.id,
      { resolved: true },
      { new: true }
    );
    if (!report) return res.status(404).json({ message: 'Report not found' });
    res.status(200).json(report);
  
};

// Superadmin: delete report
exports.deleteReport = asyncHandler(async (req, res) => {
  
    const report = await Report.findByIdAndDelete(req.params.id);
    if (!report) return res.status(404).json({ message: 'Report not found' });
    res.status(200).json({ message: 'Report deleted successfully' });
  
};