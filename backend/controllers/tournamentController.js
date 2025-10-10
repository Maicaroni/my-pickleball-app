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

    // 🔍 DEBUG: Check team member data in all registrations
    console.log('🔍 TEAM MEMBERS DEBUG - All registrations:');
    tournament.registrations.forEach((reg, index) => {
      console.log(`Registration ${index + 1}:`, {
        playerId: reg.player,
        status: reg.status,
        category: reg.category,
        hasPartner: !!reg.partner,
        partnerValue: reg.partner,
        partnerType: typeof reg.partner,
        playerName: reg.playerName,
        teamName: reg.teamName,
        hasTeamMembers: !!reg.teamMembers,
        teamMembersValue: reg.teamMembers,
        teamMembersType: typeof reg.teamMembers,
        teamMembersLength: reg.teamMembers?.length || 0,
        teamMembersArray: Array.isArray(reg.teamMembers),
        fullRegistration: JSON.stringify(reg, null, 2)
      });
    });

    // 🔍 DEBUG: Check partner data AFTER population
    console.log('🔍 AFTER POPULATION DEBUG - All registrations:');
    tournament.registrations.forEach((reg, index) => {
      console.log(`Registration ${index + 1} AFTER POPULATION:`, {
        playerId: reg.player?._id || reg.player,
        playerName: reg.player?.firstName + ' ' + reg.player?.lastName,
        status: reg.status,
        category: reg.category,
        hasPartner: !!reg.partner,
        partnerValue: reg.partner,
        partnerType: typeof reg.partner,
        partnerIsPopulated: reg.partner && typeof reg.partner === 'object' && reg.partner.firstName,
        partnerName: reg.partner?.firstName + ' ' + reg.partner?.lastName,
        teamName: reg.teamName,
        hasTeamMembers: !!reg.teamMembers,
        teamMembersValue: reg.teamMembers,
        teamMembersType: typeof reg.teamMembers,
        teamMembersLength: reg.teamMembers?.length || 0,
        teamMembersArray: Array.isArray(reg.teamMembers),
        teamMembersPopulated: reg.teamMembers?.map(member => ({
          id: member._id || member,
          name: member.firstName ? `${member.firstName} ${member.lastName}` : 'Not populated',
          isPopulated: !!member.firstName
        }))
      });
    });

    // 🔍 DEBUG: Check partner data in all registrations
    console.log('🔍 REGISTRATION DEBUG - All registrations:');
    tournament.registrations.forEach((reg, index) => {
      console.log(`Registration ${index + 1}:`, {
        playerId: reg.player,
        status: reg.status,
        category: reg.category,
        hasPartner: !!reg.partner,
        partnerValue: reg.partner,
        partnerType: typeof reg.partner,
        playerName: reg.playerName,
        fullRegistration: JSON.stringify(reg, null, 2)
      });
    });

    // 🔍 DEBUG: Check partner data AFTER population
    console.log('🔍 AFTER POPULATION DEBUG - All registrations:');
    tournament.registrations.forEach((reg, index) => {
      console.log(`Registration ${index + 1} AFTER POPULATION:`, {
        playerId: reg.player?._id || reg.player,
        playerName: reg.player?.firstName + ' ' + reg.player?.lastName,
        status: reg.status,
        category: reg.category,
        hasPartner: !!reg.partner,
        partnerValue: reg.partner,
        partnerType: typeof reg.partner,
        partnerIsPopulated: reg.partner && typeof reg.partner === 'object' && reg.partner.firstName,
        partnerName: reg.partner?.firstName + ' ' + reg.partner?.lastName
      });
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
  
  // Validate required fields
  if (!playerId || !category) {
    return res.status(400).json({ 
      message: "Missing required fields: playerId and category are required" 
    });
  }
  
  try {
    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) return res.status(404).json({ message: "Tournament not found" });

    // Only the creator can approve players
    if (tournament.createdBy.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "You can only manage your own tournaments" });

    // 🔍 COMPREHENSIVE DEBUG: Log all registrations in the tournament
    console.log('🔍 COMPREHENSIVE DEBUG - All tournament registrations:');
    tournament.registrations.forEach((reg, index) => {
      console.log(`Registration ${index + 1}:`, {
        _id: reg._id,
        player: reg.player.toString(),
        category: reg.category,
        status: reg.status,
        hasPartner: !!reg.partner,
        partnerValue: reg.partner
      });
    });

    console.log('🔍 SEARCH CRITERIA:', {
      searchingForPlayerId: playerId,
      searchingForCategory: category,
      searchingForStatus: 'pending'
    });

    // Find the specific pending registration for this player and category
    const pendingRegistration = tournament.registrations.find(
      r => r.player.toString() === playerId && r.category === category && r.status === "pending"
    );

    // Check if there's already an approved registration for this player and category
    const existingApprovedRegistration = tournament.registrations.find(
      r => r.player.toString() === playerId && r.category === category && r.status === "approved"
    );

    // 🔍 DETAILED SEARCH RESULTS
    console.log('🔍 SEARCH RESULTS:', {
      foundPending: !!pendingRegistration,
      foundApproved: !!existingApprovedRegistration,
      pendingRegistrationId: pendingRegistration?._id,
      approvedRegistrationId: existingApprovedRegistration?._id
    });

    // 🔍 Check for any registration with this player (regardless of status/category)
    const anyPlayerRegistration = tournament.registrations.filter(
      r => r.player.toString() === playerId
    );
    console.log('🔍 ALL REGISTRATIONS FOR THIS PLAYER:', anyPlayerRegistration.map(reg => ({
      _id: reg._id,
      category: reg.category,
      status: reg.status
    })));

    // 🔍 Check for any registration with this category (regardless of player/status)
    const anyCategoryRegistration = tournament.registrations.filter(
      r => r.category === category
    );
    console.log('🔍 ALL REGISTRATIONS FOR THIS CATEGORY:', anyCategoryRegistration.map(reg => ({
      _id: reg._id,
      player: reg.player.toString(),
      status: reg.status
    })));

    console.log('🔍 BACKEND DEBUG - Looking for registrations:', {
      playerId,
      category,
      foundPending: !!pendingRegistration,
      foundApproved: !!existingApprovedRegistration,
      pendingPartner: pendingRegistration?.partner,
      pendingPartnerType: typeof pendingRegistration?.partner
    });

    // If already approved, return success message instead of error
    if (existingApprovedRegistration) {
      console.log('✅ Player already has approved registration for this category - returning success');
      
      // Get the populated tournament to return consistent data
      const populatedTournament = await Tournament.findById(req.params.id)
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

      // Compute age for all registered players
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

      return res.json({ 
        message: "Player is already approved for this category", 
        tournament: populatedTournament 
      });
    }

    if (pendingRegistration) {
      console.log('🔍 BACKEND DEBUG - Pending Registration Found:', {
        hasPartner: !!pendingRegistration.partner,
        partnerValue: pendingRegistration.partner,
        partnerType: typeof pendingRegistration.partner,
        fullRegistration: JSON.stringify(pendingRegistration, null, 2)
      });
      
      // Remove the pending registration
      tournament.registrations = tournament.registrations.filter(
        r => r._id.toString() !== pendingRegistration._id.toString()
      );
      
      // Create approved registration preserving all original data
      const approvedRegistration = {
        player: playerId,
        category,
        status: "approved",
        // Preserve all original registration data
        teamMembers: pendingRegistration.teamMembers,
        proofOfPayment: pendingRegistration.proofOfPayment,
        contactNumber: pendingRegistration.contactNumber,
        email: pendingRegistration.email,
        playerName: pendingRegistration.playerName,
        playerEmail: pendingRegistration.playerEmail,
        playerPhone: pendingRegistration.playerPhone,
        emergencyContact: pendingRegistration.emergencyContact,
        emergencyPhone: pendingRegistration.emergencyPhone,
        registrationDate: pendingRegistration.registrationDate
      };

      // Preserve partner data if it exists
      if (pendingRegistration.partner) {
        approvedRegistration.partner = pendingRegistration.partner;
        console.log('✅ PARTNER PRESERVED:', pendingRegistration.partner);
      } else {
        console.log('❌ NO PARTNER TO PRESERVE - partner value:', pendingRegistration.partner);
      }
      
      tournament.registrations.push(approvedRegistration);
      
      console.log('🔍 APPROVED REGISTRATION CREATED:', {
        hasPartner: !!approvedRegistration.partner,
        partnerValue: approvedRegistration.partner,
        partnerType: typeof approvedRegistration.partner,
        fullApprovedReg: JSON.stringify(approvedRegistration, null, 2)
      });
      
      console.log('✅ Converted pending registration to approved with preserved partner data');
    } else {
      console.log('❌ No pending registration found - cannot approve non-existent registration');
      return res.status(404).json({ 
        message: "No pending registration found for this player and category" 
      });
    }

    await tournament.save();

    console.log('🔍 AFTER SAVE DEBUG - Tournament registrations:');
    tournament.registrations.forEach((reg, index) => {
      if (reg.player.toString() === playerId) {
        console.log(`Registration ${index + 1} for player ${playerId}:`, {
          status: reg.status,
          category: reg.category,
          hasPartner: !!reg.partner,
          partnerValue: reg.partner,
          partnerType: typeof reg.partner
        });
      }
    });

    // Populate registrations.player with required fields
    const populatedTournament = await Tournament.findById(tournament._id)
      .populate({
        path: "registrations.player",
        select: "firstName lastName birthDate gender duprRatings pplId duprId",
        options: { lean: true }
      })
      .populate({
        path: "registrations.partner",
        select: "firstName lastName birthDate gender duprRatings pplId duprId",
        options: { lean: true }
      })
      .populate({
        path: "registrations.teamMembers",
        select: "firstName lastName birthDate gender duprRatings pplId duprId",
        options: { lean: true }
      });

    console.log('🔍 AFTER POPULATION DEBUG - Populated registrations:');
    populatedTournament.registrations.forEach((reg, index) => {
      if (reg.player._id.toString() === playerId) {
        console.log(`Populated Registration ${index + 1} for player ${playerId}:`, {
          status: reg.status,
          category: reg.category,
          hasPartner: !!reg.partner,
          partnerValue: reg.partner,
          partnerType: typeof reg.partner,
          partnerName: reg.partner ? `${reg.partner.firstName} ${reg.partner.lastName}` : 'No partner'
        });
      }
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

// ✅ Reject Player Registration
exports.rejectPlayerRegistration = async (req, res) => {
  const { playerId, category, reason } = req.body;
  try {
    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) return res.status(404).json({ message: "Tournament not found" });

    // Only the creator can reject players
    if (tournament.createdBy.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "You can only manage your own tournaments" });

    // Find and remove the pending registration
    const registrationIndex = tournament.registrations.findIndex(
      r => r.player.toString() === playerId && r.category === category && r.status === "pending"
    );

    if (registrationIndex === -1) {
      return res.status(404).json({ message: "Pending registration not found" });
    }

    // Remove the registration from the tournament
    tournament.registrations.splice(registrationIndex, 1);

    await tournament.save();

    res.json({ 
      message: "Player registration rejected successfully",
      rejectionReason: reason
    });
  } catch (error) {
    console.error("Error rejecting player:", error);
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

// ✅ Register for tournament
const registerForTournament = async (req, res) => {
  try {
    console.log('🔹 Tournament registration request received');
    console.log('🔹 Request body:', req.body);
    console.log('🔹 Request user:', req.user);
    console.log('🔹 Request file:', req.file);
    
    const { 
      tournamentId, 
      category, 
      partnerId, 
      playerName, 
      playerEmail, 
      playerPhone, 
      emergencyContact, 
      emergencyPhone,
      teamName,
      teamMembers
    } = req.body;

    // Validate required fields
    if (!tournamentId || !category || !playerName || !playerEmail) {
      console.log('❌ Missing required fields:', { tournamentId, category, playerName, playerEmail });
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if user is authenticated
    if (!req.user || !req.user._id) {
      console.log('❌ User not authenticated');
      return res.status(401).json({ message: "User not authenticated" });
    }

    // Find the tournament
    const tournament = await Tournament.findById(tournamentId);
    if (!tournament) {
      return res.status(404).json({ message: "Tournament not found" });
    }

    // Check if player is already registered in this category
    const alreadyRegistered = tournament.registrations.some(
      r => r.player.toString() === req.user._id.toString() && r.category === category
    );
    if (alreadyRegistered) {
      return res.status(400).json({ message: "You are already registered in this category" });
    }

    // Handle proof of payment file
    let proofOfPaymentPath = null;
    if (req.file) {
      proofOfPaymentPath = `/uploads/tournaments/${req.file.filename}`;
    }

    // Create registration object
    const registration = {
      player: req.user._id,
      category,
      status: "pending",
      playerName,
      playerEmail,
      playerPhone,
      emergencyContact,
      emergencyPhone,
      proofOfPayment: proofOfPaymentPath,
      registrationDate: new Date()
    };

    // Add partner if provided (for doubles categories)
    if (partnerId) {
      registration.partner = partnerId;
    }

    // Add team data if provided (for team categories)
    if (teamName) {
      registration.teamName = teamName;
    }
    
    // 🔍 DEBUG: Log all request body data for team registration debugging
    console.log('🔍 REGISTRATION DEBUG - Full request body:', JSON.stringify(req.body, null, 2));
    console.log('🔍 REGISTRATION DEBUG - Request body keys:', Object.keys(req.body));
    console.log('🔍 REGISTRATION DEBUG - Team-related data:', {
      teamName,
      hasTeamMembers: !!req.body.teamMembers,
      teamMembersValue: req.body.teamMembers,
      teamMembersType: typeof req.body.teamMembers,
      teamMemberKeys: Object.keys(req.body).filter(key => key.startsWith('teamMembers[')),
      allTeamMemberKeys: Object.keys(req.body).filter(key => key.includes('teamMember'))
    });

    // Handle teamMembers - can come as individual array items from FormData or as an object
    if (req.body.teamMembers || Object.keys(req.body).some(key => key.startsWith('teamMembers['))) {
      let teamMemberIds = [];
      
      console.log('🔍 TEAM MEMBERS PROCESSING - Starting team member processing');
      console.log('🔍 TEAM MEMBERS - teamMembers type:', typeof req.body.teamMembers);
      console.log('🔍 TEAM MEMBERS - teamMembers value:', req.body.teamMembers);
      
      // Check if teamMembers is sent as a JSON string (old format)
      if (req.body.teamMembers && typeof req.body.teamMembers === 'string') {
        console.log('🔍 TEAM MEMBERS - Processing as JSON string:', req.body.teamMembers);
        try {
          teamMemberIds = JSON.parse(req.body.teamMembers);
          console.log('🔍 TEAM MEMBERS - Parsed JSON result:', teamMemberIds);
        } catch (error) {
          console.error('❌ Error parsing teamMembers JSON:', error);
          return res.status(400).json({ message: "Invalid team members data format" });
        }
      }
      // Check if teamMembers is sent as an object with numeric keys (FormData format)
      else if (req.body.teamMembers && typeof req.body.teamMembers === 'object' && !Array.isArray(req.body.teamMembers)) {
        console.log('🔍 TEAM MEMBERS - Processing as FormData object:', req.body.teamMembers);
        // Extract values from the object, filtering out empty strings
        teamMemberIds = Object.values(req.body.teamMembers).filter(id => id && id !== '');
        console.log('🔍 TEAM MEMBERS - Extracted from object:', teamMemberIds);
      }
      // Check if teamMembers is sent as individual array items (legacy format)
      else {
        const teamMemberKeys = Object.keys(req.body).filter(key => key.startsWith('teamMembers['));
        console.log('🔍 TEAM MEMBERS - Processing as FormData array:', teamMemberKeys);
        teamMemberIds = teamMemberKeys.map(key => req.body[key]).filter(id => id && id !== '');
        console.log('🔍 TEAM MEMBERS - Extracted IDs:', teamMemberIds);
      }
      
      console.log('🔍 TEAM MEMBERS - Final team member IDs before validation:', teamMemberIds);
      
      // Validate that all team member IDs are valid ObjectIds
      if (Array.isArray(teamMemberIds) && teamMemberIds.length > 0) {
        const mongoose = require('mongoose');
        const validIds = teamMemberIds.filter(id => mongoose.Types.ObjectId.isValid(id));
        console.log('🔍 TEAM MEMBERS - Validation results:', {
          originalCount: teamMemberIds.length,
          validCount: validIds.length,
          originalIds: teamMemberIds,
          validIds: validIds
        });
        
        if (validIds.length !== teamMemberIds.length) {
          console.log('❌ TEAM MEMBERS - Invalid IDs detected');
          return res.status(400).json({ message: "Invalid team member IDs provided" });
        }
        registration.teamMembers = validIds;
        console.log('✅ TEAM MEMBERS - Successfully added to registration:', validIds);
      } else {
        console.log('⚠️ TEAM MEMBERS - No valid team member IDs found');
      }
    } else {
      console.log('⚠️ TEAM MEMBERS - No team member data found in request');
    }

    // Add registration to tournament
    tournament.registrations.push(registration);
    await tournament.save();

    res.status(201).json({ 
      message: "Registration submitted successfully. Awaiting club admin approval.",
      registration 
    });

  } catch (error) {
    console.error("Tournament registration error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
};

// Export the new function
exports.registerForTournament = registerForTournament;
