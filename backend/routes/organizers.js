const express = require("express");
const router = express.Router();
const Player = require("../models/User");

router.get("/count", async (req, res) => {
  try {
    const count = await User.countDocuments({ role: "organizer" });
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: "Error getting organizer count" });
  }
});

module.exports = router;