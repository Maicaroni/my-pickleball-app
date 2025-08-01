// routes/users.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// ✅ GET all users, with optional role filter (matches roles inside array)
router.get("/", async (req, res) => {
  try {
    const role = req.query.role;
    let users;

    if (role) {
      users = await User.find({ roles: { $in: [role] } }); // ✅ match any user with that role in the array
    } else {
      users = await User.find();
    }

    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE a user
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
