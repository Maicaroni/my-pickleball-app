const mongoose = require("mongoose");

const ClubAdminSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  club: { type: mongoose.Schema.Types.ObjectId, ref: "ClubsAndCourts", required: true },
  status: { 
    type: String, 
    enum: ["pending", "approved", "rejected"], 
    default: "pending" 
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ClubAdmin", ClubAdminSchema);
