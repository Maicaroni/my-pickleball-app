const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SuperAdmin = require("../models/SuperAdmin");

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

    res.status(201).json({ message: "SuperAdmin registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during registration" });
  }
});


// POST /api/superadmin/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await SuperAdmin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { adminId: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token, admin: { email: admin.email } });
  } catch (error) {
    console.error("SuperAdmin login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});
// GET profile
router.get('/profile/:id', async (req, res) => {
  const superadmin = await SuperAdmin.findById(req.params.id).select('email');
  res.json(superadmin);
});

// POST change password
router.post('/change-password/:id', async (req, res) => {
  const { newPassword } = req.body;
  const hashed = await bcrypt.hash(newPassword, 10); // add bcrypt
  await SuperAdmin.findByIdAndUpdate(req.params.id, { password: hashed });
  res.json({ message: "Password changed successfully" });
});

module.exports = router;
