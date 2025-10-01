const Log = require("../models/Log");

const logger = require('../utils/logger');
const { asyncHandler, AppError } = require('../middleware/errorHandler');



exports.getAllLogs = asyncHandler(async (req, res) => {
  
    const startTime = Date.now();
    const logs = await Log.find()
      .populate("user", "firstName lastName email roles")
      .sort({ timestamp: -1 });
    logger.logDbOperation('find', 'collection', {}, { executionTime: Date.now() - startTime });
    res.json(logs);

});

exports.createLog = async (userId, action, description) => {
  try {
    const log = new Log({
      user: userId,
      action,
      description,
    }
    await log.save();
  });
