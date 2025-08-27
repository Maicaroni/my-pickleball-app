const Tournament = require("../models/Tournament");

// ✅ Get Tournaments
exports.getTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find().sort({ createdAt: -1 });
    res.json(tournaments);
  } catch (error) {
    console.error("Error fetching tournaments:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Create Tournament
exports.createTournament = async (req, res) => {
  try {
    let {
      tournamentName,
      description,
      registrationInstructions,
      registrationDeadline,
      tournamentDates,
      category,
      skillLevel,
      entryFeeMin,
      entryFeeMax,
      prizePool,
      venueName,
      venueAddress,
      venueCity,
      venueState,
      venueZip,
      contactEmail,
      contactPhone,
      rules,
      events,
      paymentMethods,
      additionalInfo,
      tournamentCategories
    } = req.body;

    // Parse JSON fields
    tournamentDates = tournamentDates ? JSON.parse(tournamentDates).map(d => new Date(d)) : [];
    tournamentCategories = tournamentCategories ? JSON.parse(tournamentCategories) : [];
    paymentMethods = paymentMethods ? JSON.parse(paymentMethods) : [];

    // Map uploaded QR files to payment methods
    if (req.files?.paymentMethodsFiles) {
      req.files.paymentMethodsFiles.forEach((file, i) => {
        if (paymentMethods[i]) {
          paymentMethods[i].qrCodeImage = `/uploads/tournaments/${file.filename}`;
        }
      });
    }

    // Tournament picture
    const tournamentPicFile = req.files?.tournamentPicture?.[0];
    const tournamentPicture = tournamentPicFile ? `/uploads/tournaments/${tournamentPicFile.filename}` : null;

    // Set primary category & skillLevel if missing
    if (tournamentCategories.length > 0) {
      category = tournamentCategories[0].division;
      skillLevel = tournamentCategories[0].skillLevel;
    }

    const newTournament = new Tournament({
      tournamentName,
      description,
      registrationInstructions,
      registrationDeadline: new Date(registrationDeadline),
      tournamentDates,
      category,
      skillLevel,
      entryFeeMin: entryFeeMin ? Number(entryFeeMin) : null,
      entryFeeMax: entryFeeMax ? Number(entryFeeMax) : null,
      prizePool,
      venueName,
      venueAddress,
      venueCity,
      venueState,
      venueZip,
      contactEmail,
      contactPhone,
      rules,
      events,
      paymentMethods,
      additionalInfo,
      tournamentCategories,
      tournamentPicture,
      createdBy: req.user._id
    });

    await newTournament.save();
    res.status(201).json({ message: "Tournament created successfully", tournament: newTournament });
  } catch (error) {
    console.error("Error creating tournament:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// controllers/tournamentController.js

exports.getUserTournaments = async (req, res) => {
  try {
    const userId = req.user._id;
    const tournaments = await Tournament.find({ createdBy: userId }).sort({ createdAt: -1 });
    res.json(tournaments);
  } catch (error) {
    console.error("Error fetching user tournaments:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
