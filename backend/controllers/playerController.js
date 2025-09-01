// controllers/playerController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Get all users (with optional role filter)
exports.getAllUsers = async (req, res) => {
  try {
    const role = req.query.role;

    const users = role
      ? await User.find({ roles: { $in: [role] } })
          .select('firstName lastName email gender birthDate pplId duprId username roles')
      : await User.find()
          .select('firstName lastName email gender birthDate pplId duprId username roles');

    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, username, birthDate, gender, pplId, duprId, roles } = req.body;

    if (!birthDate) {
      return res.status(400).json({ message: "Birthdate is required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already in use" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
      birthDate,
      gender,
      pplId,
      duprId,
      roles: roles || ["player"], // default to player
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update an existing user
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Only allow these fields to be updated
    const allowedUpdates = ['firstName', 'lastName', 'email', 'birthDate', 'gender', 'pplId', 'duprId', 'username', 'roles'];
    const filteredUpdates = {};
    allowedUpdates.forEach(field => {
      if (updates[field] !== undefined) filteredUpdates[field] = updates[field];
    });

    const updatedUser = await User.findByIdAndUpdate(id, filteredUpdates, {
      new: true,
    });

    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ message: "Server error" });
  }
};
