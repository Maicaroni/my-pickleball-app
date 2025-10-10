const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require('./routes/authRoutes');
const rankingRoutes = require('./routes/rankings');
const superAdminRoutes = require("./routes/superadmin");
const analyticsRoutes = require('./routes/analytics');
const coachRoutes = require("./routes/coaches");
const organizerRoutes = require("./routes/organizers");
const clubAdminRoutes = require("./routes/clubAdmins");
const feedbackRoutes = require("./routes/feedbacks");
const logRoutes = require("./routes/logs");
const userRoutes = require("./routes/users");
const postRoutes = require('./routes/posts');
const reportRoutes = require('./routes/reports');
const profileRoutes = require("./routes/profiles");
const tournamentRoutes = require('./routes/tournaments');
const verificationRoutes = require('./routes/verifications');
const forgotPasswordRoutes = require('./routes/forgotPassword');

const app = express();

// CSP for dev (unsafe-eval allowed)
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' 'unsafe-eval'"
  );
  next();
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Debug middleware to log all requests
app.use((req, res, next) => {
  console.log(`🔹 ${req.method} ${req.url}`);
  next();
});

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Test routes first
app.get('/debug-simple', (req, res) => {
  console.log("🔹 Debug route hit!");
  res.json({ 
    message: "Debug route working",
    expressVersion: require('express/package.json').version,
    timestamp: new Date().toISOString()
  });
});

app.get('/test-basic', (req, res) => {
  console.log("🔹 Basic test route hit!");
  res.send("Basic route working");
});

// API Routes
console.log("🔹 Registering routes...");
app.use("/api/auth", authRoutes);
app.use('/api/rankings', rankingRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use("/api/superadmin", superAdminRoutes);
app.use("/api/coaches", coachRoutes);
app.use("/api/organizers", organizerRoutes);
app.use("/api/clubadmins", clubAdminRoutes);
console.log("🔹 Registering feedbacks route...");
app.use("/api/feedbacks", feedbackRoutes);
console.log("🔹 Feedbacks route registered");
app.use("/api/logs", logRoutes);
console.log("🔹 Registering users route...");
app.use("/api/users", userRoutes);
console.log("🔹 Users route registered");
app.use('/api/posts', postRoutes);
app.use('/api/reports', reportRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/tournaments", tournamentRoutes);
app.use("/api/verifications", verificationRoutes);
app.use("/api/forgotPassword", forgotPasswordRoutes);
app.use("/uploads", express.static("uploads"));

// Default route
app.get("/", (req, res) => res.send("Pickleball backend is running"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});