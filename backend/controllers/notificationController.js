const Notification = require('../models/Notifications');

// ✅ Get all notifications for the logged-in user
const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user.id })
      .sort({ createdAt: -1 });

    res.json({ success: true, data: { notifications } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ✅ Mark one as read
const markAsRead = async (req, res) => {
  try {
    await Notification.findByIdAndUpdate(req.params.id, { isRead: true });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ✅ Mark all as read
const markAllAsRead = async (req, res) => {
  try {
    await Notification.updateMany(
      { user: req.user.id, isRead: false },
      { $set: { isRead: true } }
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ✅ Create notification (use when post is approved)
const createNotification = async ({ userId, type, message, postId, metadata, partnerInvitation }) => {
  try {
    const newNotif = new Notification({
      user: userId,
      type,
      message,
      postId,
      metadata,
      partnerInvitation
    });
    await newNotif.save();
    return newNotif;
  } catch (err) {
    console.error('Create notification failed:', err);
  }
};

// ✅ Respond to partner invitation (accept or decline)
const respondToPartnerInvitation = async (req, res) => {
  try {
    const { notificationId, response } = req.body; // response: 'accepted' or 'declined'
    
    if (!['accepted', 'declined'].includes(response)) {
      return res.status(400).json({ success: false, message: 'Invalid response. Must be "accepted" or "declined".' });
    }

    // Find the notification
    const notification = await Notification.findById(notificationId);
    if (!notification) {
      return res.status(404).json({ success: false, message: 'Notification not found' });
    }

    // Verify the notification belongs to the current user
    if (notification.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Unauthorized' });
    }

    // Verify it's a partner invitation
    if (notification.type !== 'partner_invitation') {
      return res.status(400).json({ success: false, message: 'Not a partner invitation' });
    }

    // Update the invitation status
    notification.partnerInvitation.status = response;
    notification.isRead = true;
    await notification.save();

    // If accepted, we might need to update the tournament registration
    // This would require additional logic to find and update the registration
    
    // Create a notification for the person who sent the invitation
    const responseMessage = response === 'accepted' 
      ? `${req.user.firstName} ${req.user.lastName} has accepted your partner invitation for "${notification.metadata.tournamentName}".`
      : `${req.user.firstName} ${req.user.lastName} has declined your partner invitation for "${notification.metadata.tournamentName}".`;

    await createNotification({
      userId: notification.partnerInvitation.invitedBy,
      type: 'tournament',
      message: responseMessage,
      metadata: {
        ...notification.metadata,
        partnerResponse: response,
        respondedBy: req.user._id
      }
    });

    res.json({ 
      success: true, 
      message: `Partner invitation ${response} successfully`,
      data: { notification }
    });
  } catch (err) {
    console.error('Partner invitation response error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = {
  getNotifications,
  markAsRead,
  markAllAsRead,
  createNotification,
  respondToPartnerInvitation
};
