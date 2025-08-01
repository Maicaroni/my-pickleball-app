const express = require("express");
const router = express.Router();
const Report = require("../models/Report");

router.get("/count", async (req, res) => {
  try {
    const count = await Report.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: "Error getting report count" });
  }
});

router.get("/", async (req, res) => {
  try {
    const reports = await Report.find()
      .populate("reportedUser", "email")
      .populate("reportedBy", "email");
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reports" });
  }
});

router.put("/:id/resolve", async (req, res) => {
  try {
    await Report.findByIdAndUpdate(req.params.id, { resolved: true });
    res.json({ message: "Report marked as resolved" });
  } catch (err) {
    res.status(500).json({ error: "Failed to resolve report" });
  }
});

module.exports = router;