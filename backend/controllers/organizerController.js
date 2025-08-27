// controllers/organizerController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Get all verified organizers
exports.getVerifiedOrganizers = async (req, res) => {
  const organizers = await User.find({ roles: { $in: ['organizer'] }, isVerifiedOrganizer: true });
  res.json(organizers);
};

// Get organizer requests (from players who applied)
exports.getOrganizerRequests = async (req, res) => {
  try {
    const pending = await User.find({
      roles: { $in: ['player'] },
      "organizerRequest.status": "pending",
      organizerRequest: { $exists: true, $ne: null }
    });
    res.json(pending);
  } catch (err) {
    console.error("Error fetching organizer requests:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Create new organizer
exports.createOrganizer = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      username,
      birthDate,
      roles,
      isVerifiedOrganizer
    } = req.body;

    if (!birthDate) {
      return res.status(400).json({ message: "Birthdate is required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const existingUsername = await User.findOne({ username });
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
      roles: roles || ['organizer'],
      isVerifiedOrganizer: typeof isVerifiedOrganizer === 'boolean' ? isVerifiedOrganizer : true
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error creating organizer:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Revert organizer to player
exports.revertOrganizerToPlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.roles = user.roles.filter(role => role !== "organizer");
    if (!user.roles.includes("player")) {
      user.roles.push("player");
    }
    user.isVerifiedOrganizer = false;

    await user.save();
    res.json({ message: "Organizer reverted to player successfully" });
  } catch (err) {
    console.error("Error reverting organizer:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update organizer profile
exports.editOrganizer = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedOrganizer = await User.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedOrganizer) {
      return res.status(404).json({ message: "Organizer not found" });
    }
    res.json(updatedOrganizer);
  } catch (err) {
    console.error("Error editing organizer:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Approve organizer requests
exports.updateOrganizerStatus = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
  res.json(updatedUser);
};
