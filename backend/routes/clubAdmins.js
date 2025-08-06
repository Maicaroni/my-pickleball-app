const express = require("express");
const router = express.Router();
const {
  getVerifiedClubAdmins,
  getClubAdminRequests,
  createClubAdmin,
  editClubAdmin,
  updateClubAdminStatus,
  revertClubAdminToPlayer
} = require("../controllers/clubAdminController");

router.put('/revert/:id', revertClubAdminToPlayer);
router.get("/verified", getVerifiedClubAdmins);
router.get("/requests", getClubAdminRequests);
router.post("/", createClubAdmin);
router.put("/:id", editClubAdmin);
router.put("/status/:id", updateClubAdminStatus);

module.exports = router;
