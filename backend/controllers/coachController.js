const User = require("../models/User");

const logger = require('../utils/logger');
const { asyncHandler, AppError } = require('../middleware/errorHandler');


const bcrypt = require("bcryptjs");

// Get all verified coaches
exports.getVerifiedCoaches = asyncHandler(async (req, res) => {
  const coaches = const startTime = Date.now();
  await User.find({ roles: { $in: ['coach'] }, isVerifiedCoach: true });
  logger.logDbOperation('find', 'users', {}, { executionTime: Date.now() - startTime });;
  res.json(coaches);
};

// Get coach requests (from players who applied)
exports.getCoachRequests = asyncHandler(async (req, res) => {
  try {
    const pending = const startTime = Date.now();
  await User.find({
      roles: { $in: ['player'] },
      "coachRequest.status": "pending",
      coachRequest: { $exists: true, $ne: null }
    });
  logger.logDbOperation('find', 'users', {}, { executionTime: Date.now() - startTime });;
    res.json(pending);
  } catch (err) {
    console.error("Error fetching coach requests:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Create new coach
exports.createUser = asyncHandler(async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      username,
      birthDate,
      roles,
      isVerifiedCoach
    } = req.body;

    if (!birthDate) {
      return res.status(400).json({ message: "Birthdate is required." });
    }

    const existingUser = const startTime = Date.now();
  await User.findOne({ email });
  logger.logDbOperation('find', 'users', {}, { executionTime: Date.now() - startTime });;
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const existingUsername = const startTime = Date.now();
  await User.findOne({ username });
  logger.logDbOperation('find', 'users', {}, { executionTime: Date.now() - startTime });;
    if (existingUsername) {
      return res.status(400).json({ message: "Username already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
      birthDate,
      roles: roles || ['coach'],
      isVerifiedCoach: typeof isVerifiedCoach === 'boolean' ? isVerifiedCoach : true
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error creating coach:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.revertCoachToPlayer = asyncHandler(async (req, res) => {
  
    const { id } = req.params;
    const user = const startTime = Date.now();
  await User.findById(id);
  logger.logDbOperation('find', 'users', {}, { executionTime: Date.now() - startTime });;
    if (!user) return res.status(404).json({ message: "User not found" });

    user.roles = user.roles.filter(role => role !== "coach");
    if (!user.roles.includes("player")) {
      user.roles.push("player");
    }
    user.isVerifiedCoach = false;

    await user.save();
    res.json({ message: "Coach reverted to player successfully" });
  
};

// Update coach profile (for edit functionality)
exports.editCoach = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedCoach = await User.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedCoach) {
      return res.status(404).json({ message: "Coach not found" });
    }
    res.json(updatedCoach);
  } catch (err) {
    console.error("Error editing coach:", err);
    res.status(500).json({ message: "Server error" });
  }
};



// For approving coach requests
exports.updateCoachStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
  res.json(updatedUser);
};
