const express = require("express");
const { sendOtp, verifyOtp } = require("../controllers/verificationController");

const router = express.Router();

// 📩 Send OTP
router.post("/send-otp", sendOtp);

// ✅ Verify OTP
router.post("/verify-otp", verifyOtp);

module.exports = router;
