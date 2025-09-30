const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
const authMiddleware = require("../middleware/authMiddleware");

// GET all feedbacks (for admin purposes)
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate('userId', 'firstName lastName email');
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch feedbacks" });
  }
});

// POST create new feedback
router.post("/", authMiddleware(), async (req, res) => {
  console.log("🔹 POST /api/feedbacks hit");
  console.log("Request body:", req.body);
  console.log("User:", req.user);
  try {
    const { rating, message } = req.body;

    // Validate rating
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }

    const feedback = new Feedback({
      userId: req.user._id,
      rating: Number(rating),
      message: message || ""
    });

    await feedback.save();
    
    res.status(201).json({ 
      message: "Feedback submitted successfully",
      feedback: {
        id: feedback._id,
        rating: feedback.rating,
        message: feedback.message,
        createdAt: feedback.createdAt
      }
    });
  } catch (err) {
    console.error("Feedback submission error:", err);
    res.status(500).json({ error: "Failed to submit feedback" });
  }
});

module.exports = router;