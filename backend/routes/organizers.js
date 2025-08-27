// routes/organizers.js
const express = require("express");
const router = express.Router();
const {
  getVerifiedOrganizers,
  getOrganizerRequests,
  createOrganizer,
  editOrganizer,
  updateOrganizerStatus,
  revertOrganizerToPlayer
} = require("../controllers/organizerController");

router.put('/revert/:id', revertOrganizerToPlayer);
router.get("/verified", getVerifiedOrganizers);
router.get("/requests", getOrganizerRequests);
router.post("/", createOrganizer);
router.put("/:id", editOrganizer);
router.put("/status/:id", updateOrganizerStatus);

module.exports = router;
