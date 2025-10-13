const express = require('express');
const {
  getNotifications,
  markAsRead,
  markAllAsRead
} = require('../controllers/notificationController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware(), getNotifications);
router.put('/mark-read/:id', authMiddleware(), markAsRead);
router.put('/mark-all-read', authMiddleware(), markAllAsRead);

module.exports = router;
