const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createReply } = require('../controllers/commentController');

// POST /api/comments/:commentId/replies
router.post('/:commentId/replies', authMiddleware, createReply);

module.exports = router;
