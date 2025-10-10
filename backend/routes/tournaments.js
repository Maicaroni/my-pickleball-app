const express = require("express");
const router = express.Router();
const {
  createTournament,
  getTournaments,
  getTournamentById,
  getUserTournaments,
  updateTournament,
  deleteTournament,
  deleteRegistration,
  addApprovedPlayer,
  rejectPlayerRegistration,
  registerForTournament,
} = require("../controllers/tournamentController");
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");
const path = require("path");

// =======================
// Multer File Upload Setup
// =======================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/tournaments/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + "-" + file.originalname.replace(/\s+/g, "_")
    );
  },
});

const upload = multer({ storage });

// =======================
// Tournament Routes
// =======================

// ✅ Public: Get all tournaments
router.get("/", getTournaments);

// ✅ Protected: Get logged-in user's tournaments
router.get("/my-tournaments", authMiddleware(), getUserTournaments);

// ✅ Public: Get single tournament by ID
router.get("/:id", getTournamentById);

// ✅ Create tournament (clubadmins only)
router.post(
  "/",
  authMiddleware(["clubadmin"]), // only clubadmins
  upload.fields([
    { name: "tournamentPicture", maxCount: 1 },
    { name: "paymentMethodsFiles", maxCount: 3 },
  ]),
  createTournament
);

// ✅ Edit tournament (only author can edit)
router.put(
  "/:id",
  authMiddleware(["clubadmin"]),
  upload.fields([
    { name: "tournamentPicture", maxCount: 1 },
    { name: "paymentMethodsFiles", maxCount: 3 },
  ]),
  updateTournament
);
// ✅ Register for tournament (players only)
router.post(
  "/register",
  authMiddleware(["player"]),
  upload.single("proofOfPayment"),
  registerForTournament
);

// Delete Tournament
router.delete(
  "/:id",
  authMiddleware(["clubadmin"]),
  deleteTournament
);

// ✅ Add approved player to a tournament category
router.post(
  "/:id/registrations/approve",
  authMiddleware(["clubadmin"]),
  addApprovedPlayer
);

// ✅ Reject player registration
router.post(
  "/:id/registrations/reject",
  authMiddleware(["clubadmin"]),
  rejectPlayerRegistration
);

// DELETE player registration
router.delete("/:tournamentId/registrations/:registrationId", deleteRegistration);

module.exports = router;


