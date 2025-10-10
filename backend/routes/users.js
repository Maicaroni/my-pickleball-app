const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getPlayersByGender,
} = require("../controllers/playerController");

const authMiddleware = require("../middleware/authMiddleware");

// Debug logging
console.log("🔹 Users route file loaded");

// Test route to verify router is working
router.get("/test", (req, res) => {
  res.json({ message: "Users router is working!" });
});

// 👇 require login to see users
router.get("/", authMiddleware(["superadmin", "clubadmin"]), getAllUsers);

// 👇 get players by gender for team member selection (accessible to all authenticated users)
router.get("/players", authMiddleware(["player", "coach", "organizer", "clubadmin", "superadmin"]), getPlayersByGender);

// 👇 allow clubadmin OR superadmin to create players
router.post("/", authMiddleware(["superadmin", "clubadmin"]), createUser);

// 👇 maybe only superadmin can update/delete users?
router.put("/:id", authMiddleware(["superadmin"]), updateUser);
router.delete("/:id", authMiddleware(["superadmin"]), deleteUser);

console.log("🔹 Users routes defined:", router.stack.map(layer => layer.route?.path || 'middleware'));

module.exports = router;
