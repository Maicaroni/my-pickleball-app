const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  player: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  partner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  teamMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  category: { type: String, required: true },
  proofOfPayment: { type: String },
  contactNumber: { type: String },
  email: { type: String },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" }
}, { timestamps: true });

// Match schema for elimination brackets
const matchSchema = new mongoose.Schema({
  id: { type: String, required: true },
  player1: { type: String, default: 'TBD' },
  player2: { type: String, default: 'TBD' },
  score1: { type: Number, default: 0 },
  score2: { type: Number, default: 0 },
  winner: { type: String, default: null },
  round: { type: String, required: true },
  court: { type: String, default: '' },
  date: { type: String, default: '' },
  time: { type: String, default: '' }
});

// Standing schema for group stage
const standingSchema = new mongoose.Schema({
  player: { type: String, required: true },
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  pointsFor: { type: Number, default: 0 },
  pointsAgainst: { type: Number, default: 0 },
  pointDifferential: { type: Number, default: 0 }
});

// Group schema for group stage
const groupSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  standings: [standingSchema],
  matches: { type: mongoose.Schema.Types.Mixed, default: {} }
});

// Group stage schema
const groupStageSchema = new mongoose.Schema({
  groups: [groupSchema]
});

// Elimination matches schema
const eliminationMatchesSchema = new mongoose.Schema({
  matches: [matchSchema]
});

const tournamentCategorySchema = new mongoose.Schema({
  division: { type: String, required: true },
  ageCategory: { type: String },
  skillLevel: { type: String, required: true },
  maxParticipants: { type: Number, required: true },
  groupStage: { type: groupStageSchema, default: null },
  eliminationMatches: { type: eliminationMatchesSchema, default: null }
});

const paymentMethodSchema = new mongoose.Schema({
  bankName: String,
  accountName: String,
  accountNumber: String,
  qrCodeImage: { type: String, default: null } // default null avoids empty object errors
});

const tournamentSchema = new mongoose.Schema({
  tournamentName: { type: String, required: true },
  description: { type: String, required: true },
  tournamentPicture: { type: String },
  registrationInstructions: { type: String, required: true },
  registrationDeadline: { type: Date, required: true },
  tournamentDates: [{ type: Date, required: true }],
  category: { type: String, required: true },
  skillLevel: { type: String, required: true },
  entryFeeMin: { type: Number },
  entryFeeMax: { type: Number },
  prizePool: { type: String },
  venueName: { type: String },
  venueAddress: { type: String },
  venueCity: { type: String },
  venueState: { type: String },
  venueZip: { type: String },
  contactEmail: { type: String, required: true },
  contactPhone: { type: String },
  rules: { type: String },
  events: { type: String },
  paymentMethods: {
    type: [paymentMethodSchema],
    validate: [val => val.length <= 3, 'Only up to 3 payment methods allowed']
  },
  additionalInfo: { type: String },
  tournamentCategories: [tournamentCategorySchema],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["Upcoming", "Ongoing", "Completed"], default: "Upcoming" },

    // ✅ Add registrations here
  registrations: [registrationSchema]
}, { timestamps: true });

module.exports = mongoose.model("Tournament", tournamentSchema);
