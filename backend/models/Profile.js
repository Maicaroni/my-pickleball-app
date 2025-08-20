const mongoose = require("mongoose");

// Utility to generate a random 6-character alphanumeric ID
function generatePplId() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bio: { type: String, default: "" },
  avatar: { type: String, default: "" },
  pplId: { type: String, unique: true, default: generatePplId },
  // add other fields as needed
});

module.exports = mongoose.model("Profile", ProfileSchema);
