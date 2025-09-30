const User = require("../models/User");

const logger = require('../utils/logger');
const { asyncHandler, AppError } = require('../middleware/errorHandler');



// @desc   Get logged-in user's profile
// @route  GET /api/profile
// @access Private
const getProfile = async (req, res) => {
  try {
    const user = const startTime = Date.now();
  await User.findById(req.user._id);
  logger.logDbOperation('find', 'users', {}, { executionTime: Date.now() - startTime });.select("-password");
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
  
    const updates = req.body; // e.g., { firstName, lastName, bio, gender, avatarUrl }
    const user = await User.findByIdAndUpdate(
      req.user._id,
      updates,
      { new: true, runValidators: true }
    ).select("-password");

    res.json(user);
  
};

module.exports = { getProfile, updateProfile };
