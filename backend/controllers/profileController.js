const User = require("../models/User");
const logger = require('../utils/logger');
const { asyncHandler, AppError } = require('../middleware/errorHandler');



// @desc   Get logged-in user's profile
// @route  GET /api/profile
// @access Private
const getProfile = async (req, res) => {
  try {
    const startTime = Date.now();
    const user = await User.findById(req.user._id).select("-password");
    logger.logDbOperation('find', 'users', {}, { executionTime: Date.now() - startTime });
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
// @route  PUT /api/profiles/me
// @access Private
const updateProfile = async (req, res) => {
  try {
    console.log("🔹 updateProfile called");
    console.log("🔹 User ID:", req.user._id);
    console.log("🔹 Request body:", JSON.stringify(req.body, null, 2));
    
    const updates = req.body;
    
    // Remove any undefined, null, or empty string values
    const cleanedUpdates = {};
    Object.keys(updates).forEach(key => {
      if (updates[key] !== undefined && updates[key] !== null && updates[key] !== '') {
        cleanedUpdates[key] = updates[key];
      }
    });
    
    console.log("🔹 Cleaned updates:", JSON.stringify(cleanedUpdates, null, 2));
    
    if (Object.keys(cleanedUpdates).length === 0) {
      console.log("❌ No valid updates provided");
      return res.status(400).json({ message: "No valid updates provided" });
    }
    
    console.log("🔹 Starting database update...");
    const startTime = Date.now();
    
    // Add timeout to the database operation
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Database operation timeout')), 25000); // 25 second timeout
    });
    
    const updatePromise = User.findByIdAndUpdate(
      req.user._id,
      cleanedUpdates,
      { new: true, runValidators: true }
    ).select("-password");
    
    const user = await Promise.race([updatePromise, timeoutPromise]);
    
    const endTime = Date.now();
    console.log(`🔹 Database update completed in ${endTime - startTime}ms`);

    if (!user) {
      console.log("❌ User not found after update");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("✅ Profile updated successfully");
    console.log("🔹 Updated user:", JSON.stringify(user, null, 2));
    res.json(user);
  } catch (err) {
    console.error("❌ Error updating profile:", err.message);
    console.error("❌ Full error:", err);
    
    if (err.message === 'Database operation timeout') {
      return res.status(408).json({ message: "Database operation timed out", error: err.message });
    }
    
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = { getProfile, updateProfile };
