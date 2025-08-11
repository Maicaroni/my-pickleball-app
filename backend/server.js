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
const reportRoutes = require("./routes/reports");
const logRoutes = require("./routes/logs");
const userRoutes = require("./routes/users"); // ✅ this must match the filename

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
app.use(express.json());


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
app.use("/api/clubAdmins", clubAdminRoutes);
app.use("/api/feedbacks", feedbackRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/logs", logRoutes);
app.use("/api/users", userRoutes);

// Default route
app.get("/", (req, res) => res.send("Pickleball backend is running"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
