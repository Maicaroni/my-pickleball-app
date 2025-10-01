const User = require("../models/User");

const logger = require('../utils/logger');
const { asyncHandler, AppError } = require('../middleware/errorHandler');



// ✅ Get all club admin requests (pending/approved)
// Get all club admin requests (pending/approved)
exports.getClubAdmins = asyncHandler(async (req, res) => {
  try {
    const status = req.query.status || "pending"; // "pending" | "approved"

    let users;
    if (status === "pending") {
      const startTime = Date.now();
      users = await User.find({
        "clubAdminRequest.requested": true,   // Only users who actually requested
        "clubAdminRequest.status": "pending"  // And status is pending
      }).select("-password");
      logger.logDbOperation('find', 'users', {}, { executionTime: Date.now() - startTime });
    } else if (status === "approved") {
      const startTime2 = Date.now();
      users = await User.find({
        roles: { $in: ["clubadmin"] },
        "clubAdminRequest.status": "approved"
      }).select("-password");
      logger.logDbOperation('find', 'users', {}, { executionTime: Date.now() - startTime2 });
    }

    res.json({ users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


// ✅ Promote any player to clubadmin (even if they didn’t request)
exports.promoteToClubAdmin = asyncHandler(async (req, res) => {
  
    const { id } = req.params;
    const startTime = Date.now();
    const user = await User.findById(id);
    logger.logDbOperation('find', 'users', {}, { executionTime: Date.now() - startTime });

    if (!user) return res.status(404).json({ message: "User not found" });

    // Add clubadmin role if not already present
    if (!user.roles.includes("clubadmin")) {
      user.roles.push("clubadmin");
    }

    // Mark request as approved even if they never requested
    user.clubAdminRequest.status = "approved";
    user.clubAdminRequest.requested = true; // set requested = true for consistency

    await user.save();

    res.json({ message: "User promoted to Club Admin", user });
  
});



// ✅ Delete clubadmin / user
exports.deleteClubAdmin = asyncHandler(async (req, res) => {
  
    const { id } = req.params;

    const startTime = Date.now();
    const user = await User.findById(id);
    logger.logDbOperation('find', 'users', {}, { executionTime: Date.now() - startTime });
    if (!user) return res.status(404).json({ message: "User not found" });

    await user.remove();

    res.json({ message: "User deleted successfully" });
  
});

// ✅ Optional: Edit clubadmin info
exports.editClubAdmin = asyncHandler(async (req, res) => {
  
    const { id } = req.params;
    const updates = req.body; // { firstName, lastName, email, etc }

    const user = await User.findByIdAndUpdate(id, updates, { new: true }).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User updated", user });
  
});
// Reject a club admin request
exports.rejectClubAdminRequest = asyncHandler(async (req, res) => {
  
    const { id } = req.params;
    const startTime = Date.now();
    const user = await User.findById(id);
    logger.logDbOperation('find', 'users', {}, { executionTime: Date.now() - startTime });

    if (!user) return res.status(404).json({ message: "User not found" });

    // Mark request as rejected and reset requested flag
    user.clubAdminRequest.status = "rejected";
    user.clubAdminRequest.requested = false;

    await user.save();

    res.json({ message: "Club admin request rejected", user });
  
});

// Revert approved club admin back to player
exports.revertClubAdmin = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const startTime = Date.now();
    const user = await User.findById(id);
    logger.logDbOperation('find', 'users', {}, { executionTime: Date.now() - startTime });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Remove "clubadmin" role if it exists
    user.roles = user.roles.filter(role => role !== "clubadmin");
    await user.save();

    res.json({ message: `${user.firstName} reverted to player`, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

exports.promoteToOrganizer = asyncHandler(async (req, res) => {
  
    const { id } = req.params;
    const startTime = Date.now();
    const user = await User.findById(id);
    logger.logDbOperation('find', 'users', {}, { executionTime: Date.now() - startTime });

    if (!user) return res.status(404).json({ message: "User not found" });

    // Add organizer role if not already present
    if (!user.roles.includes("organizer")) {
      user.roles.push("organizer");
    }

    // Mark request as approved even if they never requested
    user.clubAdminRequest.status = "approved";
    user.clubAdminRequest.requested = true; // set requested = true for consistency

    await user.save();

    res.json({ message: "User promoted to Club Admin", user });
  
});


exports.demoteFromOrganizer = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const startTime = Date.now();
    const user = await User.findById(id);
    logger.logDbOperation('find', 'users', {}, { executionTime: Date.now() - startTime });

    if (!user) return res.status(404).json({ message: "User not found" });

    // Remove organizer role
    user.roles = user.roles.filter(role => role !== "organizer");
    await user.save();

    res.json({ message: `${user.firstName} reverted to player`, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

exports.demoteFromClubAdmin = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const startTime = Date.now();
    const user = await User.findById(id);
    logger.logDbOperation('find', 'users', {}, { executionTime: Date.now() - startTime });

    if (!user) return res.status(404).json({ message: "User not found" });

    // Remove clubadmin role
    user.roles = user.roles.filter(role => role !== "clubadmin");
    await user.save();

    res.json({ message: `${user.firstName} reverted to player`, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
