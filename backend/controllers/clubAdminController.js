const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Get all verified club admins
exports.getVerifiedClubAdmins = async (req, res) => {
  const admins = await User.find({ roles: { $in: ['clubadmin'] }, isVerifiedClubAdmin: true });
  res.json(admins);
};

// Get club admin requests (from players who applied)
exports.getClubAdminRequests = async (req, res) => {
  try {
    const pending = await User.find({
      roles: { $in: ['player'] },
      "clubAdminRequest.status": "pending",
      clubAdminRequest: { $exists: true, $ne: null }
    });
    res.json(pending);
  } catch (err) {
    console.error("Error fetching club admin requests:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Create new club admin
exports.createClubAdmin = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      username,
      birthDate,
      roles,
      isVerifiedClubAdmin
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
      roles: roles || ['clubadmin'],
      isVerifiedClubAdmin: typeof isVerifiedClubAdmin === 'boolean' ? isVerifiedClubAdmin : true
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error creating club admin:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Revert club admin to player
exports.revertClubAdminToPlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.roles = user.roles.filter(role => role !== "clubadmin");
    if (!user.roles.includes("player")) {
      user.roles.push("player");
    }
    user.isVerifiedClubAdmin = false;

    await user.save();
    res.json({ message: "Club admin reverted to player successfully" });
  } catch (err) {
    console.error("Error reverting club admin:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update club admin profile
exports.editClubAdmin = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedAdmin = await User.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedAdmin) {
      return res.status(404).json({ message: "Club admin not found" });
    }
    res.json(updatedAdmin);
  } catch (err) {
    console.error("Error editing club admin:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Approve club admin requests
exports.updateClubAdminStatus = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
  res.json(updatedUser);
};
