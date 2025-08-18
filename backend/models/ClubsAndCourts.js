const mongoose = require('mongoose');

const candcSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['club', 'club_and_courts'], 
    required: true 
  },
  courts: {
    type: Number,
    required: function() { return this.type === 'club_and_courts'; }
  },
  hours: {
    type: String,
    required: function() { return this.type === 'club_and_courts'; }
  },
  members: {
    type: Number,
    required: function() { return this.type === 'club'; }
  },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  contactEmail: { type: String, required: true },
  contactPhone: { type: String, required: true },
  website: { type: String },
  amenities: [{ type: String }],
  images: [{ type: String }],
  isVerified: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('ClubsAndCourts', candcSchema);