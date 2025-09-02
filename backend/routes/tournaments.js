const express = require("express");
const router = express.Router();
const {
  createTournament,
  getTournaments,
  getUserTournaments,
  updateTournament,
   deleteTournament 
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
// Delete Tournament
router.delete(
  "/:id",
  authMiddleware(["clubadmin"]),
  deleteTournament
);
module.exports = router;
