const express = require("express");
const router = express.Router();
const Player = require("../models/User");

router.get("/count", async (req, res) => {
  try {
    const count = await User.countDocuments({ role: "clubadmin" });
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: "Error getting club admin count" });
  }
});

module.exports = router;