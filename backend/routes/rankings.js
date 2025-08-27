const express = require('express');
const router = express.Router();
const RankingCategory = require('../models/Rankings');

// GET all ranking categories
router.get('/', async (req, res) => {
  try {
    const categories = await RankingCategory.find();
    res.json(categories);
  } catch (err) {
    console.error('Error fetching rankings:', err);
    res.status(500).json({ message: 'Server error fetching rankings' });
  }
});

// POST new rankings for a category
router.post('/', async (req, res) => {
  try {
    let { name, rankings } = req.body;  

    // Ranking logic: wins - losses
    rankings.sort((a, b) => {
      const netA = a.wins - a.losses;
      const netB = b.wins - b.losses;

      if (netB !== netA) return netB - netA;
      if (b.wins !== a.wins) return b.wins - a.wins;
      return a.losses - b.losses;
    });

    // Update rank and winRate
    // Sanitize and rank players
rankings = rankings.map((player, index) => {
    const gamesPlayed = player.gamesPlayed ?? (player.wins ?? 0) + (player.losses ?? 0);
    const wins = player.wins ?? 0;
    const losses = player.losses ?? 0;
  
    const winRate = gamesPlayed > 0
      ? ((wins / gamesPlayed) * 100).toFixed(1) + '%'
      : '0%';
  
    return {
      ...player,
      points: player.points ?? 0,
      wins,
      losses,
      gamesPlayed,
      winRate,
      rank: index + 1
    };
  });  

    // Upsert the category (update if exists, or create)
    const updated = await RankingCategory.findOneAndUpdate(
      { name },
      {
        name,
        rankings,
        lastUpdated: new Date()
      },
      { upsert: true, new: true }
    );

    res.status(200).json(updated);
  } catch (err) {
    console.error('Error saving rankings:', err);
    res.status(500).json({ message: 'Failed to save rankings' });
  }
});

module.exports = router;