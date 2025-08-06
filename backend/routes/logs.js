// routes/logs.js
const express = require("express");
const router = express.Router();
const Log = require("../models/Log");

router.get("/", async (req, res) => {
  try {
    const logs = await Log.find().sort({ timestamp: -1 }).populate("userId", "firstName lastName email");
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching logs" });
  }
});
// POST log
router.post("/", async (req, res) => {
  const { userId, role, action } = req.body;
  try {
    const log = await Log.create({ userId, role, action });
    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({ message: "Failed to create log" });
  }
});

module.exports = router;
