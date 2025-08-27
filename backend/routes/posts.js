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


router.patch('/:id/approve', authMiddleware, approvePost);
router.patch('/:id/reject', authMiddleware, rejectPost);

// Delete a comment
router.delete('/:postId/comments/:commentId', authMiddleware, deleteComment);

// Delete a reply
router.delete('/:postId/comments/:commentId/replies/:replyId', authMiddleware, deleteReply);
// Get posts
router.get('/', authMiddleware, getPosts);


// Create a new post
router.post('/', authMiddleware, createPost);

// Toggle like on a post
router.put('/:id/like', authMiddleware, toggleLikePost);

// Get comments for a post
router.get('/:postId/comments', authMiddleware, getComments);

// Add a comment
router.post('/:postId/comments', authMiddleware, addComment);

// Add a reply to a comment
router.post('/:postId/comments/:commentId/replies', authMiddleware, addReply);

// Delete a post
router.delete('/:id', authMiddleware, deletePost);
router.delete('/superadmin/:id', authMiddleware, deletePostSuperAdmin);
module.exports = router;