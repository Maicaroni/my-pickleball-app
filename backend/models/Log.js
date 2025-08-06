const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  email: String,
  role: [String],
  action: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Log", logSchema);
