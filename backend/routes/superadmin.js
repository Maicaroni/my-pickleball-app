const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const SuperAdmin = require("../models/SuperAdmin");
const Log = require("../models/Log");

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

    await Log.create({
      userId: admin._id,
      action: 'SuperAdmin Login',
      role: 'superadmin',
    });

    res.status(200).json({ 
      token, 
      admin: { 
        _id: admin._id, // ✅ send _id so frontend can save it
        email: admin.email 
      } 
    });
  } catch (error) {
    console.error("SuperAdmin login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// LOGOUT
router.post("/logout", async (req, res) => {
  const { adminId } = req.body;

  try {
    if (mongoose.Types.ObjectId.isValid(adminId)) {
      await Log.create({
        userId: adminId,
        action: 'SuperAdmin Logout',
        role: 'superadmin',
      });
    }

    res.json({ message: "SuperAdmin logged out successfully" });
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).json({ message: "Logout failed" });
  }
});

// GET PROFILE
router.get('/profile/:id', async (req, res) => {
  const { id } = req.params;

  // ✅ Prevent CastError
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid superadmin ID" });
  }

  try {
    const superadmin = await SuperAdmin.findById(id).select('email');
    if (!superadmin) {
      return res.status(404).json({ message: "SuperAdmin not found" });
    }
    res.json(superadmin);
  } catch (err) {
    console.error("Profile fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// CHANGE PASSWORD
router.post('/change-password/:id', async (req, res) => {
  const { id } = req.params;
  const { newPassword } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid superadmin ID" });
  }

  try {
    const hashed = await bcrypt.hash(newPassword, 10);
    const updated = await SuperAdmin.findByIdAndUpdate(id, { password: hashed });

    if (!updated) {
      return res.status(404).json({ message: "SuperAdmin not found" });
    }

    await Log.create({
      userId: id,
      action: 'SuperAdmin Password Change',
      role: 'superadmin',
    });

    res.json({ message: "Password changed successfully" });
  } catch (err) {
    console.error("Password change error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
