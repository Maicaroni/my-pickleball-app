const mongoose = require('mongoose');

const PlayerRankSchema = new mongoose.Schema({
  name: { type: String, required: true },
  avatarUrl: { type: String },
  age: { type: Number, required: true }, // ✅ ADD THIS (for age group filter)
  rank: { type: Number },
  points: { type: Number, default: 0 },
  gamesPlayed: { type: Number, default: 0 },
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  winRate: { type: String, default: '0%' }
});

const RankingCategorySchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g. "Men's Singles"
  rankings: [PlayerRankSchema],
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RankingCategory', RankingCategorySchema);
