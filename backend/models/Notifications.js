const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // who receives it
  type: { 
    type: String, 
    enum: ['like', 'comment', 'reply', 'club_request', 'club_accepted', 'tournament', 'other'], 
    required: true 
  },
  user: { type: String, required: true }, // user who triggered the notification (e.g. 'Sarah Chen')
  message: { type: String, required: true },
  unread: { type: Boolean, default: true },

  // optional fields depending on notification type:
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', default: null },
  clubId: { type: mongoose.Schema.Types.ObjectId, ref: 'Venue', default: null },
  tournamentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament', default: null },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', NotificationSchema);
