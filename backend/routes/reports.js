const express = require('express');
const router = express.Router();
const {
  reportPost,
  getAllReports,
  resolveReport,
  deleteReport
} = require('../controllers/reportController');
const authMiddleware = require('../middleware/authMiddleware');
// User reports a post
router.post('/:postId', authMiddleware(), reportPost);

// Superadmin routes (no superAdminMiddleware for now)
router.get('/', getAllReports);
router.put('/:id/resolve', resolveReport);
router.delete('/:id', deleteReport);

module.exports = router;