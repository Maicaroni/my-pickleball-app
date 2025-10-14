const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
  {
    // 🧍 The user who receives the notification
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    // 🔔 What kind of notification this is
    type: {
      type: String,
      enum: [
        'post_approved',
        'post_rejected',
        'post_removed',
        'like',
        'comment',
        'reply',
        'club_request',
        'club_accepted',
        'tournament',
        'partner_invitation',
        'other',
      ],
      default: 'other', // ✅ makes it safer when no type is set
    },

    // 💬 The message shown in the UI
    message: {
      type: String,
      required: true,
      trim: true,
    },

    // 🧾 Optional: associated post, if any
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      default: null,
    },

    // 📦 Any extra data (like a club ID or tournament info)
    metadata: {
      type: Object,
      default: {},
    },

    // 👀 Whether the user has opened/read the notification
    isRead: {
      type: Boolean,
      default: false, // ✅ helps avoid undefined checks
    },

    // 🤝 Partner invitation specific fields
    partnerInvitation: {
      status: {
        type: String,
        enum: ['pending', 'accepted', 'declined'],
        default: 'pending'
      },
      tournamentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tournament'
      },
      registrationId: {
        type: mongoose.Schema.Types.ObjectId
      },
      invitedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    },
  },
  {
    timestamps: true, // ✅ adds createdAt & updatedAt automatically
  }
);

module.exports = mongoose.model('Notification', notificationSchema);
