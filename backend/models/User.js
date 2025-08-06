const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  birthDate: { type: Date, required: true },

  roles: {
    type: [String],
    enum: ['player', 'organizer', 'clubadmin', 'coach'],
    default: ['player']
  },

  isConfirmed: { type: Boolean, default: false },

  // ✔️ Verified flags
  isVerifiedCoach: { type: Boolean, default: false },
  isVerifiedOrganizer: { type: Boolean, default: false },
  isVerifiedClubAdmin: { type: Boolean, default: false }, // 🆕

  // ✔️ Request objects
  coachRequest: {
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending'
    },
    attachment: { type: String }
  },

  organizerRequest: {
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending'
    },
    attachment: { type: String }
  },

  clubAdminRequest: { // 🆕 Club admin request
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending'
    },
    attachment: { type: String }
  },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
