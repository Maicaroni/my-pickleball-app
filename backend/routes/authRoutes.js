const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Profile = require("../models/Profile");
const Log = require("../models/Log");
const Counter = require("../models/Counter");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

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

// ------------------- GOOGLE REGISTER -------------------
router.post("/google/register", async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(400).json({ message: "Token missing" });

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, given_name, family_name } = payload;

    let user = await User.findOne({ email });
    if (!user) {
      const counter = await Counter.findOneAndUpdate(
        { name: "pplId" },
        { $inc: { value: 1 } },
        { new: true, upsert: true }
      );
      const pplId = counter.value.toString().padStart(6, "0");

      user = await User.create({
        firstName: given_name,
        lastName: family_name,
        email,
        password: null,
        roles: ["player"],
        pplId,
      });

      await Profile.create({
        user: user._id,
        pplId,
        duprRatings: { singles: 0, doubles: 0, mixedDoubles: 0 },
      });

      await createLog(user, "register-google");
    }

    const jwtToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || "pickleballSecret",
      { expiresIn: "7d" }
    );

    res.json({ user: user.toObject(), token: jwtToken });
  } catch (err) {
    console.error("Google signup error:", err);
    res.status(500).json({ message: "Google signup failed" });
  }
});

// ------------------- REGISTER -------------------
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, birthDate, gender, roles, duprId } = req.body;
    if (!firstName || !lastName || !email || !password || !birthDate || !gender || !duprId) {
      return res.status(400).json({ message: "Please fill all required fields." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already registered" });

    const counter = await Counter.findOneAndUpdate(
      { name: "pplId" },
      { $inc: { value: 1 } },
      { new: true, upsert: true }
    );
    const pplId = counter.value.toString().padStart(6, "0");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      birthDate,
      gender,
      roles: roles?.length ? roles : ["player"],
      pplId,
      duprId,
    });

    const newProfile = await Profile.create({
      user: newUser._id,
      pplId,
      duprRatings: { singles: 0, doubles: 0, mixedDoubles: 0 },
    });

    await createLog(newUser, "register");

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET || "pickleballSecret",
      { expiresIn: "7d" }
    );

    res.status(201).json({
      token,
      user: newUser.toObject(),
      profile: newProfile.toObject(),
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

// ------------------- LOGIN -------------------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password are required." });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const profile = await Profile.findOne({ user: user._id });

    await createLog(user, "login");

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || "pickleballSecret",
      { expiresIn: "7d" }
    );

    res.json({
      token,
      user: user.toObject(),
      profile: profile ? profile.toObject() : null,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

// ------------------- LOGOUT -------------------
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

    res.json({ message: "Logged out successfully" });
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).json({ message: "Server error during logout" });
  }
});
// ------------------- ADMIN REGISTER -------------------
router.post("/playerregister", async (req, res) => {
  try {
    let { firstName, lastName, email, password, birthDate, gender, roles, duprId } = req.body;

    // ✅ Validate required fields
    if (!firstName || !lastName) {
      return res.status(400).json({ message: "First name and last name are required." });
    }

    // Defaults for optional fields
    email = email && email.trim() !== "" ? email.trim() : `noemail_${Date.now()}@example.com`;
    gender = gender && gender.trim() !== "" ? gender : "N/A";
    duprId = duprId && duprId.trim() !== "" ? duprId : "N/A";
    birthDate = birthDate ? new Date(birthDate) : null;

    // Auto-generate password if missing
    if (!password || password.trim() === "") {
      const birthStr = birthDate ? birthDate.toISOString().split("T")[0].replace(/-/g, "") : "00000000";
      password = `${firstName}${lastName}${birthStr}`;
    }

    // Generate pplId
    const counter = await Counter.findOneAndUpdate(
      { name: "pplId" },
      { $inc: { value: 1 } },
      { new: true, upsert: true }
    );
    const pplId = counter.value.toString().padStart(6, "0");

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      birthDate,
      gender,
      roles: Array.isArray(roles) && roles.length ? roles : ["player"],
      duprId,
      pplId,
    });

    // Create Profile safely
    await Profile.create({
      user: newUser._id,
      pplId,
      duprRatings: { singles: 0, doubles: 0, mixedDoubles: 0 },
    });

    // Log the registration
    await createLog(newUser, "admin-register");

    res.status(201).json({ message: "Player registered successfully", newUser });
  } catch (err) {
    console.error("Admin register error:", err);
    res.status(500).json({
      message: "Server error during player registration",
      error: err.message, // ✅ Send actual error for debugging
    });
  }
});
module.exports = router; 