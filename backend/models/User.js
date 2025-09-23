const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },

  // Optional email (use sparse so duplicates of null/undefined don’t break unique index)
  email:     { type: String, required: false, unique: true, sparse: true },

  password:  { type: String, required: true },

  // Birthdate is optional now
  birthDate: { type: Date, required: false },

  // Gender still required
  gender:    { type: String, enum: ['male', 'female'], required: true },

  pplId: { type: String, unique: true, sparse: true },
  duprId: { type: String, unique: true, sparse: true },

  avatarUrl: { type: String, default: null },
  initials: { type: String },
  bio: { type: String, default: "Tell us about yourself..." },

  roles: {
    type: [String],
    enum: ['player', 'organizer', 'clubadmin', 'coach'],
    default: ['player']
  },

  isConfirmed: { type: Boolean, default: false },
  isVerifiedCoach: { type: Boolean, default: false },
  isVerifiedOrganizer: { type: Boolean, default: false },
  isVerifiedClubAdmin: { type: Boolean, default: false },

  coachRequest: {
    status: { type: String, enum: ['pending', 'approved', 'rejected'] },
    attachment: { type: String },
    requested: { type: Boolean, default: false }
  },
  organizerRequest: {
    status: { type: String, enum: ['pending', 'approved', 'rejected'] },
    attachment: { type: String },
    requested: { type: Boolean, default: false }
  },
  clubAdminRequest: { 
    status: { type: String, enum: ['pending', 'approved', 'rejected'] },
    attachment: { type: String },
    requested: { type: Boolean, default: false }
  },

  // For OTP (Forgot Password)
  otpCode: { type: String },
  otpExpires: { type: Date },

  createdAt: { type: Date, default: Date.now }
});

// Middleware to auto-generate initials if missing
UserSchema.pre("save", function(next) {
  if (!this.initials && this.firstName) {
    this.initials = this.firstName.charAt(0).toUpperCase();
  }
  next();
});

module.exports = mongoose.model("User", UserSchema);
