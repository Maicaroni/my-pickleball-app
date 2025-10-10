const express = require("express");
const router = express.Router();
const multer = require("multer");
const auth = require("../middleware/authMiddleware");
const Profile = require("../models/Profile");
const User = require("../models/User");
const sharp = require("sharp");
const { getProfile, updateProfile } = require("../controllers/profileController");

// Configure multer (store uploads in /uploads folder)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// ✅ GET current user profile
router.get("/me", auth(), async (req, res) => {
  try {
    // Fetch profile and populate user info including pplId and duprId
    let profile = await Profile.findOne({ user: req.user._id }).populate("user", [
      "firstName",
      "lastName",
      "email",
      "birthDate",
      "gender",
      "avatarUrl",
      "pplId",   // ✅ include PPL ID
      "duprId",  // ✅ include DUPR ID
    ]);

    // If profile doesn't exist, create it
    if (!profile) {
      profile = new Profile({
        user: req.user._id,
      });
      await profile.save();

      // Fetch again with populated user
      profile = await Profile.findOne({ user: req.user._id }).populate("user", [
        "firstName",
        "lastName",
        "email",
        "birthDate",
        "gender",
        "avatarUrl",
        "pplId",
        "duprId",
      ]);
    }

    res.json(profile);
  } catch (err) {
    console.error("Fetch profile error:", err.message);
    res.status(500).send("Server error");
  }
});



// ✅ PUT update current user profile (User model fields)
router.put("/me", auth(), updateProfile);

// ✅ POST avatar upload with resizing
// ✅ POST avatar upload with resizing
router.post("/avatar", auth(), upload.single("avatar"), async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    // ✅ Resize the uploaded image using sharp
    const resizedFilename = `uploads/resized-${Date.now()}-${req.file.originalname}`;
    await sharp(req.file.path)
      .resize(170, 170) // size for avatar
      .toFile(resizedFilename);

    // ✅ Save full URL to DB
    profile.avatar = `${req.protocol}://${req.get("host")}/${resizedFilename}`;
    await profile.save();

    res.json({ avatarUrl: profile.avatar });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to upload avatar" });
  }
});


module.exports = router;
