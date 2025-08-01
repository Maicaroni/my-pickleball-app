const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  actor: { type: mongoose.Schema.Types.ObjectId, refPath: 'actorModel' },
  actorModel: {
    type: String,
    enum: ['User', 'SuperAdmin'],
    required: true
  },
  action: String,
  description: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', logSchema);