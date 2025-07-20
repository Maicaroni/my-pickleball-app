const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const rankingRoutes = require('./routes/rankings');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));


// Routes
app.use("/api/auth", authRoutes);
app.use('/api/rankings', rankingRoutes);

// Default route
app.get("/", (req, res) => res.send("Pickleball backend is running"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
