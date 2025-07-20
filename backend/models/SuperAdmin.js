const mongoose = require('mongoose');

const superAdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: String,
});

module.exports = mongoose.model('SuperAdmin', superAdminSchema);
