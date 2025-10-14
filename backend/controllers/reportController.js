const Report = require('../models/Report');
const Notification = require('../models/Notifications');

const logger = require('../utils/logger');
const { asyncHandler, AppError } = require('../middleware/errorHandler');


const Post = require('../models/Post');

// User reports a post
// User reports a post
exports.reportPost = asyncHandler(async (req, res) => {
  
    const { reason, customReason } = req.body;
    const { postId } = req.params;
    const userId = req.user.id; // ✅ authMiddleware ensures this exists

    const startTime = Date.now();
    const post = await Post.findById(postId);
    logger.logDbOperation('find', 'collection', {}, { executionTime: Date.now() - startTime });
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const report = await Report.create({
      post: postId,
      reportedBy: userId,
      reason,
      customReason: customReason || '',
    });

    res.status(201).json({ message: 'Report submitted successfully', report });
  
});

// Superadmin: get all reports
exports.getAllReports = asyncHandler(async (req, res) => {
  console.log('Fetching reports for user:', req.user);
  
    const startTime2 = Date.now();
    const reports = await Report.find()
      .populate('reportedBy', 'firstName lastName email')
      .populate('post', 'content images');
    logger.logDbOperation('find', 'collection', {}, { executionTime: Date.now() - startTime2 });

    console.log('Reports fetched:', reports);
    res.status(200).json(reports);
  
});



// Superadmin: resolve report
exports.resolveReport = asyncHandler(async (req, res) => {
  
    console.log('=== RESOLVE REPORT DEBUG START ===');
    console.log('Report ID:', req.params.id);
    
    const report = await Report.findById(req.params.id).populate('post');
    if (!report) return res.status(404).json({ message: 'Report not found' });

    console.log('Found report:', {
      id: report._id,
      hasPost: !!report.post,
      postId: report.post?._id,
      resolved: report.resolved
    });

    // Get custom reason from request body
    const customReason = req.body.reason || 'Community guidelines violation';

    // Update report status to resolved
    report.resolved = true;
    await report.save();
    console.log('Report marked as resolved');

    // If the report has an associated post, notify the post author and delete the post
    if (report.post && report.post.author) {
      console.log('Post exists, proceeding with deletion...');
      console.log('Post ID to delete:', report.post._id);
      
      // Debug: Log the post data to see what we're working with
      console.log('Post data for notification:', {
        content: report.post.content,
        author: report.post.author,
        createdAt: report.post.createdAt,
        images: report.post.images
      });
      
      // Create notification for the post author
      const notification = await Notification.create({
        user: report.post.author,
        type: 'post_removed',
        message: `Your post has been removed: ${customReason}`,
        postId: report.post._id,
        metadata: {
          reason: customReason,
          reportCount: await Report.countDocuments({ post: report.post._id }),
          postContent: report.post.content,
          postAuthor: report.post.author,
          postCreatedAt: report.post.createdAt,
          postImages: report.post.images
        }
      });
      
      console.log('Created notification with metadata:', notification.metadata);

      // Delete the reported post from the database
      try {
        const deletedPost = await Post.findByIdAndDelete(report.post._id);
        console.log('Post deletion result:', deletedPost ? 'SUCCESS' : 'FAILED - Post not found');
        console.log('Deleted post ID:', deletedPost?._id);
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    } else {
      console.log('No post associated with this report or no author found');
    }

    console.log('=== RESOLVE REPORT DEBUG END ===');
    res.status(200).json(report);
  
});

// Superadmin: archive report
exports.archiveReport = asyncHandler(async (req, res) => {
  
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).json({ message: 'Report not found' });

    // Update report status to archived
    report.archived = true;
    await report.save();

    res.status(200).json(report);
  
});

// Superadmin: revert report (change from resolved back to pending)
exports.revertReport = asyncHandler(async (req, res) => {
  
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).json({ message: 'Report not found' });

    // Update report status back to pending
    report.resolved = false;
    await report.save();

    res.status(200).json(report);
  
});

// Superadmin: delete report
exports.deleteReport = asyncHandler(async (req, res) => {
  
    const report = await Report.findByIdAndDelete(req.params.id);
    if (!report) return res.status(404).json({ message: 'Report not found' });
    res.status(200).json({ message: 'Report deleted successfully' });
  
});