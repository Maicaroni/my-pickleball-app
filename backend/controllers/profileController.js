const User = require("../models/User");

// @desc   Get logged-in user's profile
// @route  GET /api/profile
// @access Private
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error("Error fetching profile:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc   Update logged-in user's profile
// @route  PUT /api/profile
// @access Private
const updateProfile = async (req, res) => {
  try {
    const updates = req.body; // e.g., { firstName, lastName, bio, gender, avatarUrl }
    const user = await User.findByIdAndUpdate(
      req.user._id,
      updates,
      { new: true, runValidators: true }
    ).select("-password");

    res.json(user);
  } catch (err) {
    console.error("Error updating profile:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getProfile, updateProfile };
