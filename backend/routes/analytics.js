// routes/analytics.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Existing route here ...

// New route for role counts
router.get("/roles", async (req, res) => {
  try {
    const [totalPlayers, totalCoaches, totalOrganizers, totalClubAdmins] = await Promise.all([
      User.countDocuments({ role: "player" }),
      User.countDocuments({ role: "coach" }),
      User.countDocuments({ role: "organizer" }),
      User.countDocuments({ role: "clubadmin" }),
    ]);

    res.json({
      players: totalPlayers,
      coaches: totalCoaches,
      organizers: totalOrganizers,
      clubAdmins: totalClubAdmins,
    });
  } catch (err) {
    console.error("Failed to get role counts:", err);
    res.status(500).json({ message: "Failed to fetch role counts" });
  }
});

module.exports = router;
