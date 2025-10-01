const Tournament = require("../models/Tournament");



// ✅ Get all tournaments
exports.getTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find()
      .sort({ createdAt: -1 })
      .populate({
        path: "registrations.player",
        select: "firstName lastName birthDate gender duprRatings pplId duprId"
      })
      .populate({
        path: "registrations.partner",
        select: "firstName lastName birthDate gender duprRatings pplId duprId"
      })
      .populate({
        path: "registrations.teamMembers",
        select: "firstName lastName birthDate gender duprRatings pplId duprId"
      });

    // ✅ Compute age for each registered player
    tournaments.forEach(tournament => {
      tournament.registrations = tournament.registrations.map(r => {
        if (r.player && r.player.birthDate) {
          const today = new Date();
          const birth = new Date(r.player.birthDate);
          let age = today.getFullYear() - birth.getFullYear();
          const monthDiff = today.getMonth() - birth.getMonth();
          if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
          }
          r.player.age = age;
        } else {
          r.player.age = null;
        }
        return r;
      });
    });

    res.json(tournaments);
  } catch (error) {
    console.error("Error fetching tournaments:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Get single tournament by ID
exports.getTournamentById = async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id)
      .populate({
        path: "registrations.player",
        select: "firstName lastName birthDate gender duprRatings pplId duprId"
      })
      .populate({
        path: "registrations.partner",
        select: "firstName lastName birthDate gender duprRatings pplId duprId"
      })
      .populate({
        path: "registrations.teamMembers",
        select: "firstName lastName birthDate gender duprRatings pplId duprId"
      });

    if (!tournament) {
      return res.status(404).json({ message: "Tournament not found" });
    }

    console.log('📖 BACKEND: Fetching tournament by ID:', {
      tournamentId: req.params.id,
      categoriesCount: tournament.tournamentCategories?.length || 0,
      timestamp: new Date().toISOString(),
      fetchedBracketData: JSON.stringify(tournament.tournamentCategories, null, 2)
    });

    // ✅ Compute age for each registered player
    tournament.registrations = tournament.registrations.map(r => {
      if (r.player && r.player.birthDate) {
        const today = new Date();
        const birth = new Date(r.player.birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
          age--;
        }
        r.player.age = age;
      } else {
        r.player.age = null;
      }
      return r;
    });

    res.json(tournament);
  } catch (error) {
    console.error("Error fetching tournament:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Get tournaments created by logged-in user
exports.getUserTournaments = async (req, res) => {
  try {
    const userId = req.user._id;
    const tournaments = await Tournament.find({ createdBy: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "registrations.player",
        select: "firstName lastName birthDate gender duprRatings pplId duprId"
      })
      .populate({
        path: "registrations.partner",
        select: "firstName lastName birthDate gender duprRatings pplId duprId"
      })
      .populate({
        path: "registrations.teamMembers",
        select: "firstName lastName birthDate gender duprRatings pplId duprId"
      });

    // ✅ Compute age for each registered player
    tournaments.forEach(tournament => {
      tournament.registrations = tournament.registrations.map(r => {
        if (r.player && r.player.birthDate) {
          const today = new Date();
          const birth = new Date(r.player.birthDate);
          let age = today.getFullYear() - birth.getFullYear();
          const monthDiff = today.getMonth() - birth.getMonth();
          if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
          }
          r.player.age = age;
        } else {
          r.player.age = null;
        }
        return r;
      });
    });

    res.json(tournaments);
  } catch (error) {
    console.error("Error fetching user tournaments:", error.message);
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

// ✅ Update Tournament (only author)
// ✅ Update Tournament (only author)
exports.updateTournament = async (req, res) => {
  try {
    console.log('Update tournament request received:', {
      tournamentId: req.params.id,
      userId: req.user._id,
    });

    let body = { ...req.body };

    // Parse fields if stringified
    if (body.tournamentDates && typeof body.tournamentDates === "string") {
      body.tournamentDates = JSON.parse(body.tournamentDates).map(d => new Date(d));
    }
    if (body.tournamentCategories && typeof body.tournamentCategories === "string") {
      body.tournamentCategories = JSON.parse(body.tournamentCategories);
    }
    if (body.paymentMethods && typeof body.paymentMethods === "string") {
      body.paymentMethods = JSON.parse(body.paymentMethods);
    }

    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) return res.status(404).json({ message: "Tournament not found" });

    if (tournament.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "You can only edit your own tournaments" });
    }

    // ✅ Apply updates safely
    Object.assign(tournament, {
      tournamentName: body.tournamentName || tournament.tournamentName,
      description: body.description || tournament.description,
      registrationInstructions: body.registrationInstructions || tournament.registrationInstructions,
      registrationDeadline: body.registrationDeadline ? new Date(body.registrationDeadline) : tournament.registrationDeadline,
      tournamentDates: body.tournamentDates || tournament.tournamentDates,
      category: body.category || tournament.category,
      skillLevel: body.skillLevel || tournament.skillLevel,
      entryFeeMin: body.entryFeeMin ? Number(body.entryFeeMin) : tournament.entryFeeMin,
      entryFeeMax: body.entryFeeMax ? Number(body.entryFeeMax) : tournament.entryFeeMax,
      prizePool: body.prizePool || tournament.prizePool,
      venueName: body.venueName || tournament.venueName,
      venueAddress: body.venueAddress || tournament.venueAddress,
      venueCity: body.venueCity || tournament.venueCity,
      venueState: body.venueState || tournament.venueState,
      venueZip: body.venueZip || tournament.venueZip,
      contactEmail: body.contactEmail || tournament.contactEmail,
      contactPhone: body.contactPhone || tournament.contactPhone,
      rules: body.rules || tournament.rules,
      events: body.events || tournament.events,
      paymentMethods: body.paymentMethods || tournament.paymentMethods,
      additionalInfo: body.additionalInfo || tournament.additionalInfo,
    });

    // ✅ Update brackets (with matches & standings)
    if (body.tournamentCategories) {
      console.log('🔄 BACKEND DEBUG - Received tournamentCategories:', {
        count: body.tournamentCategories.length,
        firstCategory: JSON.stringify(body.tournamentCategories[0], null, 2),
        bracketModeData: body.tournamentCategories.map(cat => ({ id: cat._id, division: cat.division, bracketMode: cat.bracketMode }))
      });
      
      tournament.tournamentCategories = body.tournamentCategories.map((updatedCat, i) => {
        const existingCat = tournament.tournamentCategories[i] || {};
        const existingPlain = typeof existingCat.toObject === 'function' ? existingCat.toObject() : existingCat;

        console.log(`🔄 BACKEND DEBUG - Processing category ${i}:`, {
          existingId: existingPlain._id,
          updatedId: updatedCat._id,
          hasGroupStage: !!updatedCat.groupStage,
          hasEliminationMatches: !!updatedCat.eliminationMatches
        });

        // Merge existing with incoming, incoming wins when defined
        const merged = {
          ...existingPlain,
          ...updatedCat,
        };

        // Always preserve the original subdocument _id so frontend keys remain stable
        if (existingPlain && existingPlain._id && !merged._id) {
          merged._id = existingPlain._id;
        }

        console.log(`✅ BACKEND DEBUG - Merged category ${i}:`, {
          id: merged._id,
          hasGroupStage: !!merged.groupStage,
          hasEliminationMatches: !!merged.eliminationMatches,
          groupStageGroups: merged.groupStage?.groups?.length || 0
        });
        
        // 🔍 DEBUG: Log specific match data being saved
        if (merged.groupStage?.groups) {
          merged.groupStage.groups.forEach((group, groupIndex) => {
            if (group.matches) {
              console.log(`🎯 BACKEND DEBUG - Group ${groupIndex} (${group.id}) matches:`, {
                matchCount: Object.keys(group.matches).length,
                matches: group.matches
              });
            }
          });
        }

        return merged;
      });
    }


    // Handle file uploads
    if (req.files?.paymentMethodsFiles) {
      req.files.paymentMethodsFiles.forEach((file, i) => {
        if (tournament.paymentMethods[i]) {
          tournament.paymentMethods[i].qrCodeImage = `/uploads/tournaments/${file.filename}`;
        }
      });
    }
    if (req.files?.tournamentPicture) {
      tournament.tournamentPicture = `/uploads/tournaments/${req.files.tournamentPicture[0].filename}`;
    }

    // Debug what's being saved
    console.log('💾 BACKEND DEBUG - About to save tournament with bracketMode:', {
      tournamentId: tournament._id,
      categoriesWithBracketMode: tournament.tournamentCategories.map(cat => ({ 
        id: cat._id, 
        division: cat.division, 
        bracketMode: cat.bracketMode 
      }))
    });

    await tournament.save();

    console.log('✅ BACKEND: Tournament updated with brackets:', {
      tournamentId: tournament._id,
      categoriesCount: tournament.tournamentCategories?.length || 0,
      savedBracketModes: tournament.tournamentCategories.map(cat => ({ 
        id: cat._id, 
        division: cat.division, 
        bracketMode: cat.bracketMode 
      }))
    });

    res.json({ message: "Tournament updated successfully", tournament });
  } catch (error) {
    console.error("Error updating tournament:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Delete Tournament (only author)
exports.deleteTournament = async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) return res.status(404).json({ message: "Tournament not found" });

    if (tournament.createdBy.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "You can only delete your own tournaments" });

    await tournament.deleteOne();
    res.json({ message: "Tournament deleted successfully" });
  } catch (error) {
    console.error("Error deleting tournament:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Approve & Add Player (with age)
exports.addApprovedPlayer = async (req, res) => {
  const { playerId, category } = req.body;
  try {
    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) return res.status(404).json({ message: "Tournament not found" });

    // Only the creator can approve players
    if (tournament.createdBy.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "You can only manage your own tournaments" });

    // Check if player is already registered in this category
    const alreadyRegistered = tournament.registrations.some(
      r => r.player.toString() === playerId && r.category === category
    );
    if (alreadyRegistered) 
      return res.status(400).json({ message: "Player already registered in this category" });

    // Add player to registrations
    tournament.registrations.push({
      player: playerId,
      category,
      status: "approved"
    });

    await tournament.save();

    // Populate registrations.player with required fields
    const populatedTournament = await Tournament.findById(tournament._id)
      .populate({
        path: "registrations.player",
        select: "firstName lastName birthDate gender duprRatings pplId duprId",
        options: { lean: true }
      });

    // ✅ Compute age for all registered players
    populatedTournament.registrations = populatedTournament.registrations.map(r => {
      if (r.player && r.player.birthDate) {
        const today = new Date();
        const birth = new Date(r.player.birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
          age--;
        }
        r.player.age = age;
      } else {
        r.player.age = null;
      }
      return r;
    });

    res.json({ message: "Player approved successfully", tournament: populatedTournament });
  } catch (error) {
    console.error("Error approving player:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// ✅ Delete Registration
exports.deleteRegistration = async (req, res) => {
  try {
    const { tournamentId, registrationId } = req.params;

    const result = await Tournament.updateOne(
      { _id: tournamentId },
      { $pull: { registrations: { _id: registrationId } } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Tournament not found" });
    }
    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "Registration not found" });
    }

    return res.status(200).json({ message: "Player removed from category" });
  } catch (err) {
    console.error("Delete registration error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
