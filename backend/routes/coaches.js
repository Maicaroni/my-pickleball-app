const express = require("express");
const router = express.Router();
const Player = require("../models/User"); // assuming coaches are just flagged players

router.get("/count", async (req, res) => {
  try {
    const count = await User.countDocuments({ role: "coach" });
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: "Error getting coach count" });
  }
});

module.exports = router;