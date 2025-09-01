const nodemailer = require("nodemailer");

// In-memory OTP store (⚠️ will reset if server restarts, better to use DB/Redis later)
let otpStore = {};

// 📩 Setup Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,   // set in .env
    pass: process.env.GMAIL_PASS,   // App Password (not Gmail password)
  },
});

// Send OTP
exports.sendOtp = async (req, res) => {
  let { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  email = email.trim().toLowerCase(); // normalize email

  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes

  otpStore[email] = { code: otp, expiresAt };

  try {
    await transporter.sendMail({
      from: `"Philippine Pickleball League" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "PPL - Registration OTP",
      replyTo: "no-reply@pickleballleague.com",
      html: `
        <div style="font-family: Arial, sans-serif; color: #234255; line-height: 1.5;">
          <h2 style="color:#29ba9b;">Hi Champs,</h2>
          <p>You requested a verification code for your Philippine Pickleball League account.</p>
          <div style="margin: 20px 0;">
            <span style="display:inline-block; background:#29ba9b; color:white; font-size: 24px; padding: 12px 24px; border-radius: 8px; letter-spacing: 2px;">
              ${otp}
            </span>
          </div>
          <p>This code will expire in 5 minutes. Please do not share this code with anyone.</p>
          <p style="font-size: 12px; color: #64748b;">
            This is an automated message. Do not reply to this email.<br>
            For assistance, contact <a href="mailto:phpickleballleague@gmail.com">phpickleballleague@gmail.com</a>
          </p>
          <p>Thank you,<br>Philippine Pickleball League Team</p>
        </div>
      `,
    });

    res.json({ message: "OTP sent successfully" });
  } catch (err) {
    console.error("Error sending OTP:", err);
    res.status(500).json({ message: "Failed to send OTP" });
  }
};

// Verify OTP
exports.verifyOtp = (req, res) => {
  let { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ message: "Email and OTP are required" });

  email = email.trim().toLowerCase();
  otp = otp.trim();

  const record = otpStore[email];
  if (!record) return res.status(400).json({ message: "No OTP found for this email" });

  const { code, expiresAt } = record;

  if (Date.now() > expiresAt) {
    delete otpStore[email];
    return res.status(400).json({ message: "OTP expired" });
  }

  if (parseInt(otp) !== code) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  // ✅ success
  delete otpStore[email];
  return res.json({ success: true, message: "OTP verified successfully" });
};
