// routes/posts.js
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

// routes/posts.js
// Public: get approved posts
router.get('/', getPosts);

// Protected: create / like / comment / approve / reject
router.post('/', authMiddleware, createPost);
router.put('/:id/like', authMiddleware, toggleLikePost);
router.get('/:postId/comments', authMiddleware, getComments);
router.post('/:postId/comments', authMiddleware, addComment);
router.post('/:postId/comments/:commentId/replies', authMiddleware, addReply);
router.patch('/:id/approve', authMiddleware, approvePost);
router.patch('/:id/reject', authMiddleware, rejectPost);

// Delete a comment
router.delete('/:postId/comments/:commentId', authMiddleware, deleteComment);
// Delete a reply
router.delete('/:postId/comments/:commentId/replies/:replyId', authMiddleware, deleteReply);
// Get posts
router.get('/', authMiddleware, getPosts);
// Delete a post
router.delete('/:id', authMiddleware, deletePost);
router.delete('/superadmin/:id', authMiddleware, deletePostSuperAdmin);
module.exports = router;