const mongoose = require('mongoose');

const PlayerRankingSchema = new mongoose.Schema({
  playerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },  // e.g. 'mens-singles', 'womens-doubles'
  age: { type: Number, required: true },

  points: { type: Number, default: 0 },
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  gamesPlayed: { type: Number, default: 0 },

  updatedAt: { type: Date, default: Date.now }
});

// Optional: Index category + points for fast ranking queries
PlayerRankingSchema.index({ category: 1, points: -1 });

module.exports = mongoose.model('PlayerRanking', PlayerRankingSchema);