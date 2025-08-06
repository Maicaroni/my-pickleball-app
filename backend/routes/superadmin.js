const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SuperAdmin = require("../models/SuperAdmin");
const Log = require("../models/Log"); // ✅ for logging

// REGISTER
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingAdmin = await SuperAdmin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new SuperAdmin({ email, password: hashedPassword });
    await newAdmin.save();

    // ✅ Log registration
    await Log.create({
      userId: newAdmin._id,
      action: 'SuperAdmin Registration',
      role: 'superadmin',
    });

    res.status(201).json({ message: "SuperAdmin registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during registration" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await SuperAdmin.findOne({ email });
    if (!admin) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { adminId: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // ✅ Log login
    await Log.create({
      userId: admin._id,
      action: 'SuperAdmin Login',
      role: 'superadmin',
    });

    res.status(200).json({ token, admin: { email: admin.email } });
  } catch (error) {
    console.error("SuperAdmin login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ LOGOUT route
router.post("/logout", async (req, res) => {
  const { adminId } = req.body;

  try {
    await Log.create({
      userId: adminId,
      action: 'SuperAdmin Logout',
      role: 'superadmin',
    });

    res.json({ message: "SuperAdmin logged out successfully" });
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).json({ message: "Logout failed" });
  }
});

// GET profile
router.get('/profile/:id', async (req, res) => {
  const superadmin = await SuperAdmin.findById(req.params.id).select('email');
  res.json(superadmin);
});

// Change password
router.post('/change-password/:id', async (req, res) => {
  const { newPassword } = req.body;
  const hashed = await bcrypt.hash(newPassword, 10);
  await SuperAdmin.findByIdAndUpdate(req.params.id, { password: hashed });

  // ✅ Log password change
  await Log.create({
    userId: req.params.id,
    action: 'SuperAdmin Password Change',
    role: 'superadmin',
  });

  res.json({ message: "Password changed successfully" });
});

module.exports = router;
