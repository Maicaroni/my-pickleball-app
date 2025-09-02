const express = require('express');
const router = express.Router();
const {
  getPosts,
  createPost,
  toggleLikePost,
  getComments,
  addComment,
  addReply,
  deletePost,
  approvePost,
  rejectPost,
  deleteComment,
  deleteReply,
  deletePostSuperAdmin,
} = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

// ----------------------
// Public route
// ----------------------
router.get('/', getPosts);

// ----------------------
// Protected routes (any logged-in user)
// ----------------------
router.use(authMiddleware());

router.post('/', createPost);
router.put('/:id/like', toggleLikePost);

router.get('/:postId/comments', getComments);
router.post('/:postId/comments', addComment);
router.post('/:postId/comments/:commentId/replies', addReply);

router.delete('/:id', deletePost);
router.delete('/:postId/comments/:commentId', deleteComment);
router.delete('/:postId/comments/:commentId/replies/:replyId', deleteReply);

// ----------------------
// Superadmin-only routes
// ----------------------
router.patch('/:id/approve', authMiddleware(['superadmin']), approvePost);

router.patch('/:id/reject', authMiddleware(['superadmin']), rejectPost);
router.delete('/superadmin/:id', authMiddleware(['superadmin']), deletePostSuperAdmin);

module.exports = router;
