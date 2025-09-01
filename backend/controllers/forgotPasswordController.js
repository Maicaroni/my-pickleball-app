// controllers/forgotPasswordController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

// In-memory OTP store (⚠️ resets if server restarts, can be replaced with DB)
let otpStore = {};

// Gmail transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,   // Gmail in .env
    pass: process.env.GMAIL_PASS,   // App Password
  },
});

// -------------------
// Step 1: Request OTP
// -------------------
exports.requestOtp = async (req, res) => {
  let { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  email = email.trim().toLowerCase();
  const user = await User.findOne({ email });

  if (user) {
    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes
    otpStore[email] = { code: otp, expiresAt };

    try {
      await transporter.sendMail({
        from: `"Philippine Pickleball League" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "PPL - Password Reset OTP",
        replyTo: "no-reply@pickleballleague.com",
        html: `
          <div style="font-family: Arial, sans-serif; color: #234255; line-height: 1.5;">
            <h2 style="color:#29ba9b;">Hi Champion,</h2>
            <p>You requested a password reset for your Philippine Pickleball League account.</p>
            <div style="margin: 20px 0;">
              <span style="display:inline-block; background:#29ba9b; color:white; font-size: 24px; padding: 12px 24px; border-radius: 8px; letter-spacing: 2px;">
                ${otp}
              </span>
            </div>
            <p>This code will expire in 5 minutes. Please do not share it with anyone.</p>
            <p style="font-size: 12px; color: #64748b;">
              This is an automated message. Do not reply.<br>
              For assistance, contact <a href="mailto:phpickleballleague@gmail.com">phpickleballleague@gmail.com</a>
            </p>
            <p>Thank you,<br>Philippine Pickleball League Team</p>
          </div>
        `,
      });
    } catch (err) {
      console.error("Error sending OTP:", err);
      // still respond 200 for security
    }
  }

  // Always respond 200 to prevent email enumeration
  return res.json({
    success: true,
    message: "If an account with this email exists, an OTP has been sent."
  });
};

// -------------------
// Step 2: Verify OTP
// -------------------
exports.verifyOtp = (req, res) => {
  let { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ message: "Email and OTP are required" });

  email = email.trim().toLowerCase();
  otp = otp.trim();

  const record = otpStore[email];
  if (!record) return res.status(400).json({ message: "Invalid or expired OTP" });

  if (Date.now() > record.expiresAt) {
    delete otpStore[email];
    return res.status(400).json({ message: "OTP expired" });
  }

  if (parseInt(otp) !== record.code) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  // OTP verified
  delete otpStore[email];
  return res.json({ success: true, message: "OTP verified successfully" });
};

// -------------------
// Step 3: Reset Password
// -------------------
exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;
  if (!email || !newPassword) return res.status(400).json({ message: "Email and new password are required" });

  const user = await User.findOne({ email: email.trim().toLowerCase() });
  if (!user) return res.status(404).json({ message: "User not found" });

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();

  return res.json({ success: true, message: "Password reset successfully" });
};
