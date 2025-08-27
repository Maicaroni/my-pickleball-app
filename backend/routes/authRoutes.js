const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Log = require("../models/Log");

// Helper: Create Log Entry
const createLog = async (user, action) => {
  try {
    await Log.create({
      userId: user._id,
      email: user.email,
      role: user.roles,
      action,
    });
    console.log(`✅ Log created: ${action} for ${user.email}`);
  } catch (err) {
    console.error(`❌ Log error (${action}):`, err);
  }
};

// Register Route
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, birthDate, gender, roles } = req.body;

    // Validate required fields upfront (optional)
    if (!firstName || !lastName || !email || !password || !birthDate || !gender) {
      return res.status(400).json({ message: "Please fill all required fields." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already registered" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      birthDate,
      gender,
      roles: roles?.length ? roles : ["player"],
    });

    await newUser.save();
    await createLog(newUser, "register");

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET || "pickleballSecret",
      { expiresIn: "7d" }
    );

    res.status(201).json({
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        birthDate: newUser.birthDate,
        gender: newUser.gender,
        roles: newUser.roles,
      },
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email and password are required." });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    await createLog(user, "login");

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || "pickleballSecret",
      { expiresIn: "7d" }
    );

    res.status(200).json({
      token,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        birthDate: user.birthDate,
        gender: user.gender,
        roles: user.roles,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

// Logout Route (expects JWT token in headers)
router.post("/logout", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization token missing or invalid" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "pickleballSecret");

    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    await createLog(user, "logout");

    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).json({ message: "Server error during logout" });
  }
});

module.exports = router;