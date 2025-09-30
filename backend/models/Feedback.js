const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, required: true, min: 1, max: 5 },
  message: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);