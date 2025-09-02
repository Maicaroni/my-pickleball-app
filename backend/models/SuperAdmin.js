const mongoose = require("mongoose");
const superAdminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: { type: [String], default: ['superadmin'] } // array version
});


module.exports = mongoose.model("SuperAdmin", superAdminSchema);