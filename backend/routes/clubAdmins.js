const express = require("express");
const router = express.Router();
const {
  getClubAdmins,
  promoteToClubAdmin,
  deleteClubAdmin,
  editClubAdmin,
  rejectClubAdminRequest,
  revertClubAdmin,
} = require("../controllers/clubAdminController");

// ✅ Superadmin only
router.get("/", getClubAdmins);
// ✅ Promote pending player to clubadmin
router.patch("/:id/promote", promoteToClubAdmin);
// ✅ Delete clubadmin
router.delete("/:id",  deleteClubAdmin);
// ✅ Edit clubadmin info
router.patch("/:id",  editClubAdmin);
router.patch("/:id/reject", rejectClubAdminRequest);
// Revert club admin back to player
router.patch("/:id/revert", revertClubAdmin);

module.exports = router;
