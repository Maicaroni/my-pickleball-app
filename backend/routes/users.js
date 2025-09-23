const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/playerController");

const authMiddleware = require("../middleware/authMiddleware");

// 👇 require login to see users
router.get("/", authMiddleware(["superadmin", "clubadmin"]), getAllUsers);

// 👇 allow clubadmin OR superadmin to create players
router.post("/", authMiddleware(["superadmin", "clubadmin"]), createUser);

// 👇 maybe only superadmin can update/delete users?
router.put("/:id", authMiddleware(["superadmin"]), updateUser);
router.delete("/:id", authMiddleware(["superadmin"]), deleteUser);

module.exports = router;
