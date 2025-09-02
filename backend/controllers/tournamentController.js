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


// ✅ Update Tournament (only author can edit)
exports.updateTournament = async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id);

    if (!tournament) {
      return res.status(404).json({ message: "Tournament not found" });
    }

    // Only the author (clubadmin who created it) can edit
    if (tournament.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "You can only edit your own tournaments" });
    }

    // Parse JSON fields if sent as strings
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

    if (tournamentDates && typeof tournamentDates === "string") {
      tournamentDates = JSON.parse(tournamentDates).map(d => new Date(d));
    }
    if (tournamentCategories && typeof tournamentCategories === "string") {
      tournamentCategories = JSON.parse(tournamentCategories);
    }
    if (paymentMethods && typeof paymentMethods === "string") {
      paymentMethods = JSON.parse(paymentMethods);
    }

    // Update paymentMethods QR codes
    if (req.files?.paymentMethodsFiles) {
      req.files.paymentMethodsFiles.forEach((file, i) => {
        if (paymentMethods[i]) {
          paymentMethods[i].qrCodeImage = `/uploads/tournaments/${file.filename}`;
        }
      });
    }

    // Update picture if new one uploaded
    if (req.files?.tournamentPicture) {
      tournament.tournamentPicture = `/uploads/tournaments/${req.files.tournamentPicture[0].filename}`;
    }

    // Apply updates (fallback to existing values)
    tournament.tournamentName = tournamentName || tournament.tournamentName;
    tournament.description = description || tournament.description;
    tournament.registrationInstructions = registrationInstructions || tournament.registrationInstructions;
    tournament.registrationDeadline = registrationDeadline ? new Date(registrationDeadline) : tournament.registrationDeadline;
    tournament.tournamentDates = tournamentDates || tournament.tournamentDates;
    tournament.category = category || tournament.category;
    tournament.skillLevel = skillLevel || tournament.skillLevel;
    tournament.entryFeeMin = entryFeeMin ? Number(entryFeeMin) : tournament.entryFeeMin;
    tournament.entryFeeMax = entryFeeMax ? Number(entryFeeMax) : tournament.entryFeeMax;
    tournament.prizePool = prizePool || tournament.prizePool;
    tournament.venueName = venueName || tournament.venueName;
    tournament.venueAddress = venueAddress || tournament.venueAddress;
    tournament.venueCity = venueCity || tournament.venueCity;
    tournament.venueState = venueState || tournament.venueState;
    tournament.venueZip = venueZip || tournament.venueZip;
    tournament.contactEmail = contactEmail || tournament.contactEmail;
    tournament.contactPhone = contactPhone || tournament.contactPhone;
    tournament.rules = rules || tournament.rules;
    tournament.events = events || tournament.events;
    tournament.paymentMethods = paymentMethods || tournament.paymentMethods;
    tournament.additionalInfo = additionalInfo || tournament.additionalInfo;
    tournament.tournamentCategories = tournamentCategories || tournament.tournamentCategories;

    await tournament.save();

    res.json({ message: "Tournament updated successfully", tournament });
  } catch (error) {
    console.error("Error updating tournament:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
// ✅ Delete Tournament (only author can delete)
exports.deleteTournament = async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id);

    if (!tournament) {
      return res.status(404).json({ message: "Tournament not found" });
    }

    // Only the author can delete
    if (tournament.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "You can only delete your own tournaments" });
    }

    await tournament.deleteOne();

    res.json({ message: "Tournament deleted successfully" });
  } catch (error) {
    console.error("Error deleting tournament:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
