const Report = require('../models/Report');
const Post = require('../models/Post');

// User reports a post
// User reports a post
exports.reportPost = async (req, res) => {
  try {
    const { reason, customReason } = req.body;
    const { postId } = req.params;
    const userId = req.user.id; // ✅ authMiddleware ensures this exists

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const report = await Report.create({
      post: postId,
      reportedBy: userId,
      reason,
      customReason: customReason || '',
    });

    res.status(201).json({ message: 'Report submitted successfully', report });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Superadmin: get all reports
exports.getAllReports = async (req, res) => {
  console.log('Fetching reports for user:', req.user);
  try {
    const reports = await Report.find()
      .populate('reportedBy', 'firstName lastName email')
      .populate('post', 'content');

    console.log('Reports fetched:', reports);
    res.status(200).json(reports);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch reports' });
  }
};



// Superadmin: resolve report
exports.resolveReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(
      req.params.id,
      { resolved: true },
      { new: true }
    );
    if (!report) return res.status(404).json({ message: 'Report not found' });
    res.status(200).json(report);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to resolve report' });
  }
};

// Superadmin: delete report
exports.deleteReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);
    if (!report) return res.status(404).json({ message: 'Report not found' });
    res.status(200).json({ message: 'Report deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete report' });
  }
};
