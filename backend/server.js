const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const rankingRoutes = require('./routes/rankings');
const superAdminRoutes = require("./routes/superadmin");
const analyticsRoutes = require('./routes/analytics');
const coachRoutes = require("./routes/coaches");
const organizerRoutes = require("./routes/organizers");
const clubAdminRoutes = require("./routes/clubAdmins");
const feedbackRoutes = require("./routes/feedbacks");
const logRoutes = require("./routes/logs");
const userRoutes = require("./routes/users"); // ✅ this must match the filename
const postRoutes = require('./routes/posts');
const reportRoutes = require('./routes/reports');
const profileRoutes = require("./routes/profiles");
const tournamentRoutes = require("./routes/tournaments");


const app = express();

// ✅ CSP for dev (unsafe-eval allowed)
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

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use('/api/rankings', rankingRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use("/api/superadmin", superAdminRoutes);
app.use("/api/coaches", coachRoutes);
app.use("/api/organizers", organizerRoutes);
app.use("/api/clubadmins", clubAdminRoutes);
app.use("/api/feedbacks", feedbackRoutes);
app.use("/api/logs", logRoutes);
app.use("/api/users", userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/reports', reportRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/tournaments", tournamentRoutes);
app.use("/uploads", express.static("uploads"));


// Default route
app.get("/", (req, res) => res.send("Pickleball backend is running"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});