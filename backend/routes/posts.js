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
} = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getPosts);
router.post('/', authMiddleware, createPost);
router.put('/:id/like', authMiddleware, toggleLikePost);

// Comments routes
router.get('/:postId/comments', authMiddleware, getComments);
router.post('/:postId/comments', authMiddleware, addComment);
// Replies route
router.post('/:postId/comments/:commentId/replies', authMiddleware, addReply);

//Delete route
router.delete('/:id', authMiddleware, deletePost);



module.exports = router;
