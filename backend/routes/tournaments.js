const express = require("express");
const router = express.Router();
const {
  createTournament,
  getTournaments,
  getUserTournaments,
} = require("../controllers/tournamentController");
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");
const path = require("path");

// File Upload Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/tournaments/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, "_"))
});

const upload = multer({ storage });

// Public Route: Get All Tournaments
router.get("/", getTournaments);
// routes/tournamentRoutes.js
router.get("/my-tournaments", authMiddleware, getUserTournaments);

// Protected Route: Create Tournament
router.post("/", 
  authMiddleware, 
  upload.fields([
    { name: "tournamentPicture", maxCount: 1 },
    { name: "paymentMethodsFiles", maxCount: 2 }
  ]), 
  createTournament
);

module.exports = router;
