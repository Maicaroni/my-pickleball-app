// routes/forgotPassword.js
const express = require("express");
const router = express.Router();
const { requestOtp, verifyOtp, resetPassword } = require("../controllers/forgotPasswordController");

router.post("/send-otp", requestOtp); // Step 1
router.post("/verify-otp", verifyOtp);   // Step 2
router.post("/reset-password", resetPassword); // Step 3

module.exports = router;
