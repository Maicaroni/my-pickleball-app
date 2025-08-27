const express = require("express");
const router = express.Router();
const {
  getVerifiedCoaches,
  getCoachRequests,
  createUser,
  editCoach,
  updateCoachStatus,
  revertCoachToPlayer
} = require("../controllers/coachController");
router.put('/revert/:id', revertCoachToPlayer);
router.get("/verified", getVerifiedCoaches);
router.get("/requests", getCoachRequests);
router.post("/", createUser);
router.put("/:id", editCoach);
router.put("/status/:id", updateCoachStatus);


module.exports = router;