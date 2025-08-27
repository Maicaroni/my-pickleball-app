const mongoose = require("mongoose");

const tournamentCategorySchema = new mongoose.Schema({
  division: { type: String, required: true },
  ageCategory: { type: String },
  skillLevel: { type: String, required: true },
  maxParticipants: { type: Number, required: true },
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
    validate: [val => val.length <= 2, 'Only up to 2 payment methods allowed']
  },
  additionalInfo: { type: String },
  tournamentCategories: [tournamentCategorySchema],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["Upcoming", "Ongoing", "Completed"], default: "Upcoming" },
}, { timestamps: true });

module.exports = mongoose.model("Tournament", tournamentSchema);
