const Log = require("../models/Log");

exports.getAllLogs = async (req, res) => {
  try {
    const logs = await Log.find().populate("user", "firstName lastName email roles").sort({ timestamp: -1 });
    res.json(logs);
  } catch (err) {
    console.error("Error fetching logs:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createLog = async (userId, action, description) => {
  try {
    const log = new Log({
      user: userId,
      action,
      description,
    });
    await log.save();
  } catch (err) {
    console.error("Error saving log:", err);
  }
};
