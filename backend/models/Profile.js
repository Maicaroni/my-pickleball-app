const mongoose = require("mongoose");

// Utility to generate a random 6-character alphanumeric ID
function generatePplId() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bio: { type: String, default: "" },
  avatar: { type: String, default: "" },

  // Unique PPL ID
  pplId: { type: String, unique: true, default: generatePplId },

  // DUPR Ratings placeholder
  duprRatings: {
    singles: { type: Number, default: 0 },
    doubles: { type: Number, default: 0 },
  },
});

module.exports = mongoose.model("Profile", ProfileSchema);
