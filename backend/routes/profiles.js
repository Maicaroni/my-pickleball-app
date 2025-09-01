const express = require("express");
const router = express.Router();
const multer = require("multer");
const auth = require("../middleware/authMiddleware");
const Profile = require("../models/Profile");
const sharp = require("sharp");

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

/**
 * ✅ Helper to generate a random PPL ID
 */
const generatePplId = () => {
  return `PPL-${Math.floor(100000 + Math.random() * 900000)}`; // 6-digit random number
};

// ✅ GET current user profile
router.get("/me", auth, async (req, res) => {
  try {
    let profile = await Profile.findOne({ user: req.user._id }).populate("user", [
      "firstName",
      "lastName",
      "email",
      "birthDate",
      "gender",
      "avatarUrl",
    ]);

    // If profile doesn't exist, create it
    if (!profile) {
      profile = new Profile({ user: req.user._id });
      await profile.save();
      profile = await Profile.findOne({ user: req.user._id }).populate("user", [
        "firstName",
        "lastName",
        "email",
        "birthDate",
        "gender",
        "avatarUrl",
      ]);
    }

    // ✅ Ensure pplId exists
    if (!profile.pplId) {
      profile.pplId = generatePplId();
      await profile.save();
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// ✅ PUT update current user profile (e.g., bio)
router.put("/me", auth, async (req, res) => {
  try {
    const { bio } = req.body;
    const profile = await Profile.findOne({ user: req.user._id });
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    if (bio !== undefined) profile.bio = bio;

    await profile.save();
    res.json({ bio: profile.bio });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update profile" });
  }
});

// ✅ POST avatar upload with resizing
// ✅ POST avatar upload with resizing
router.post("/avatar", auth, upload.single("avatar"), async (req, res) => {
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
