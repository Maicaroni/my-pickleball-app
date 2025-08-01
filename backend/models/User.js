const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  birthDate: { type: Date, required: true },
  roles: {
    type: [String],
    enum: ['player', 'organizer', 'clubadmin', 'coach'],
    default: ['player']
  },
  isConfirmed: { type: Boolean, default: false },      // for organizer/clubadmin approval
  isVerifiedCoach: { type: Boolean, default: false },  // for verified coaches
  createdAt: { type: Date, default: Date.now }
});

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("User", UserSchema);
