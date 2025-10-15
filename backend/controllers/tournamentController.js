const Tournament = require("../models/Tournament");
const { createNotification } = require("./notificationController");



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
        teamName: pendingRegistration.teamName,
        hasTeamName: !!pendingRegistration.teamName,
        teamNameType: typeof pendingRegistration.teamName,
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
        partner: pendingRegistration.partner,
        teamMembers: pendingRegistration.teamMembers,
        teamName: pendingRegistration.teamName, // ✅ CRITICAL FIX: Include teamName in initial object
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

      // 🔍 CRITICAL FIX: Explicitly handle teamName and partner to ensure they're preserved
      if (pendingRegistration.teamName !== undefined && pendingRegistration.teamName !== null) {
        approvedRegistration.teamName = pendingRegistration.teamName;
        console.log('✅ EXPLICIT TEAMNAME ASSIGNMENT:', {
          pendingTeamName: pendingRegistration.teamName,
          assignedTeamName: approvedRegistration.teamName,
          teamNameType: typeof approvedRegistration.teamName
        });
      } else {
        console.log('⚠️ PENDING REGISTRATION HAS NO TEAMNAME:', {
          teamNameValue: pendingRegistration.teamName,
          teamNameType: typeof pendingRegistration.teamName,
          hasTeamNameProperty: pendingRegistration.hasOwnProperty('teamName')
        });
      }

      if (pendingRegistration.partner !== undefined && pendingRegistration.partner !== null) {
        approvedRegistration.partner = pendingRegistration.partner;
        console.log('✅ EXPLICIT PARTNER ASSIGNMENT:', {
          pendingPartner: pendingRegistration.partner,
          assignedPartner: approvedRegistration.partner,
          partnerType: typeof approvedRegistration.partner
        });
      } else {
        console.log('⚠️ PENDING REGISTRATION HAS NO PARTNER:', {
          partnerValue: pendingRegistration.partner,
          partnerType: typeof pendingRegistration.partner,
          hasPartnerProperty: pendingRegistration.hasOwnProperty('partner')
        });
      }

      console.log('🔍 TEAM NAME PRESERVATION DEBUG:', {
        pendingTeamName: pendingRegistration.teamName,
        approvedTeamName: approvedRegistration.teamName,
        teamNamePreserved: pendingRegistration.teamName === approvedRegistration.teamName
      });

      console.log('🔍 PARTNER PRESERVATION DEBUG:', {
        pendingPartner: pendingRegistration.partner,
        approvedPartner: approvedRegistration.partner,
        partnerPreserved: pendingRegistration.partner === approvedRegistration.partner
      });
      
      tournament.registrations.push(approvedRegistration);
      
      console.log('🔍 APPROVED REGISTRATION CREATED:', {
        hasPartner: !!approvedRegistration.partner,
        partnerValue: approvedRegistration.partner,
        partnerType: typeof approvedRegistration.partner,
        teamName: approvedRegistration.teamName,
        hasTeamName: !!approvedRegistration.teamName,
        teamNameType: typeof approvedRegistration.teamName,
        fullApprovedReg: JSON.stringify(approvedRegistration, null, 2)
      });
      
      console.log('✅ Converted pending registration to approved with preserved partner data');
    } else {
      console.log('❌ No pending registration found - cannot approve non-existent registration');
      return res.status(404).json({ 
        message: "No pending registration found for this player and category" 
      });
    }

    // 🔍 CRITICAL DEBUG: Log tournament state BEFORE save
    console.log('🔍 BEFORE SAVE DEBUG - Tournament registrations:');
    tournament.registrations.forEach((reg, index) => {
      if (reg.player.toString() === playerId && reg.status === 'approved') {
        console.log(`BEFORE SAVE - Approved Registration ${index + 1}:`, {
          _id: reg._id,
          player: reg.player,
          status: reg.status,
          category: reg.category,
          teamName: reg.teamName,
          hasTeamName: !!reg.teamName,
          teamNameType: typeof reg.teamName,
          teamNameValue: JSON.stringify(reg.teamName),
          allKeys: Object.keys(reg),
          fullRegistration: JSON.stringify(reg, null, 2)
        });
      }
    });

    console.log('🔍 SAVING TOURNAMENT TO DATABASE...');
    await tournament.save();
    console.log('✅ TOURNAMENT SAVED TO DATABASE');

    // 🔔 Create notification for the approved player
    try {
      // Determine the category name for the notification
      let categoryName = category;
      if (tournament.tournamentCategories && tournament.tournamentCategories.length > 0) {
        const categoryObj = tournament.tournamentCategories.find(cat => {
          const catIdString = cat._id ? cat._id.toString() : '';
          const categoryString = category ? category.toString() : '';
          return catIdString === categoryString;
        });
        
        if (categoryObj) {
          // Create display name from category parts
          const division = categoryObj.division || '';
          const skillLevel = categoryObj.skillLevel === 'Open' && categoryObj.tier 
            ? `Open Tier ${categoryObj.tier}` 
            : categoryObj.skillLevel || '';
          const age = categoryObj.ageCategory || '';
          
          const parts = [division, skillLevel, age].filter(part => part && part.trim());
          categoryName = parts.length > 0 ? parts.join(' | ') : 'Tournament Category';
          
          console.log('✅ APPROVAL NOTIFICATION - Category resolved:', {
            division,
            skillLevel,
            age,
            parts,
            finalCategoryName: categoryName
          });
        }
      }

      // Determine registration type for notification message
      let registrationType = 'single';
      if (pendingRegistration.partner) {
        registrationType = 'doubles';
      } else if (pendingRegistration.teamMembers && pendingRegistration.teamMembers.length > 0) {
        registrationType = 'team';
      }

      const notificationMessage = `Your ${registrationType} registration for "${tournament.tournamentName}" in ${categoryName} has been approved! You can now participate in the tournament.`;

      await createNotification({
        userId: playerId,
        type: 'tournament',
        message: notificationMessage,
        metadata: {
          tournamentId: tournament._id,
          tournamentName: tournament.tournamentName,
          category: categoryName,
          registrationStatus: 'approved',
          registrationType: registrationType
        }
      });

      console.log('✅ APPROVAL NOTIFICATION - Created for player:', playerId);
      console.log('✅ APPROVAL NOTIFICATION - Registration type:', registrationType);
      console.log('✅ APPROVAL NOTIFICATION - Category:', categoryName);

      // If this is a doubles registration, notify the partner
      if (pendingRegistration.partner) {
        console.log('🔔 PARTNER APPROVAL NOTIFICATION - Creating notification for partner:', pendingRegistration.partner);
        
        try {
          await createNotification({
            userId: pendingRegistration.partner,
            type: 'tournament',
            message: notificationMessage,
            metadata: {
              tournamentId: tournament._id,
              tournamentName: tournament.tournamentName,
              category: categoryName,
              registrationStatus: 'approved',
              registrationType: registrationType
            }
          });
          console.log('✅ PARTNER APPROVAL NOTIFICATION - Created for partner:', pendingRegistration.partner);
        } catch (error) {
          console.error('❌ PARTNER APPROVAL NOTIFICATION ERROR - Failed to create notification for partner:', pendingRegistration.partner, error);
        }
      }

      // If this is a team registration, notify all team members (except the registrant who already got notified)
      if (pendingRegistration.teamMembers && Array.isArray(pendingRegistration.teamMembers) && pendingRegistration.teamMembers.length > 0) {
        console.log('🔔 TEAM APPROVAL NOTIFICATIONS - Creating notifications for team members:', pendingRegistration.teamMembers);
        
        // Create approval notifications for each team member, excluding the registrant to avoid duplicates
        for (const teamMemberId of pendingRegistration.teamMembers) {
          // Skip the registrant since they already received a notification
          if (teamMemberId.toString() === playerId.toString()) {
            console.log('⏭️ TEAM APPROVAL NOTIFICATION - Skipping registrant to avoid duplicate:', teamMemberId);
            continue;
          }
          
          try {
            await createNotification({
              userId: teamMemberId,
              type: 'tournament',
              message: notificationMessage,
              metadata: {
                tournamentId: tournament._id,
                tournamentName: tournament.tournamentName,
                category: categoryName,
                registrationStatus: 'approved',
                registrationType: registrationType
              }
            });
            console.log('✅ TEAM APPROVAL NOTIFICATION - Created for team member:', teamMemberId);
          } catch (error) {
            console.error('❌ TEAM APPROVAL NOTIFICATION ERROR - Failed to create notification for team member:', teamMemberId, error);
          }
        }
        
        console.log('🔔 TEAM APPROVAL NOTIFICATIONS - Completed creating notifications for all team members');
      }
    } catch (error) {
      console.error('❌ APPROVAL NOTIFICATION ERROR - Failed to create notification:', error);
      // Don't fail the entire request if notification creation fails
    }

    // 🔍 CRITICAL DEBUG: Log tournament state AFTER save
    console.log('🔍 AFTER SAVE DEBUG - Tournament registrations:');
    tournament.registrations.forEach((reg, index) => {
      if (reg.player.toString() === playerId && reg.status === 'approved') {
        console.log(`AFTER SAVE - Approved Registration ${index + 1}:`, {
          _id: reg._id,
          player: reg.player,
          status: reg.status,
          category: reg.category,
          teamName: reg.teamName,
          hasTeamName: !!reg.teamName,
          teamNameType: typeof reg.teamName,
          teamNameValue: JSON.stringify(reg.teamName),
          allKeys: Object.keys(reg),
          fullRegistration: JSON.stringify(reg, null, 2)
        });
      }
    });

    console.log('🔍 AFTER SAVE DEBUG - Tournament registrations:');
    tournament.registrations.forEach((reg, index) => {
      if (reg.player.toString() === playerId) {
        console.log(`Registration ${index + 1} for player ${playerId}:`, {
          status: reg.status,
          category: reg.category,
          hasPartner: !!reg.partner,
          partnerValue: reg.partner,
          partnerType: typeof reg.partner,
          teamName: reg.teamName,
          hasTeamName: !!reg.teamName,
          teamNameType: typeof reg.teamName
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

    // Find the pending registration
    const registrationIndex = tournament.registrations.findIndex(
      r => r.player.toString() === playerId && r.category === category && r.status === "pending"
    );

    if (registrationIndex === -1) {
      return res.status(404).json({ message: "Pending registration not found" });
    }

    // Get the registration data before removing it (for notifications)
    const rejectedRegistration = tournament.registrations[registrationIndex];

    // Determine the category name for the notification
    let categoryName = category;
    if (tournament.tournamentCategories && tournament.tournamentCategories.length > 0) {
      const categoryObj = tournament.tournamentCategories.find(cat => {
        const catIdString = cat._id ? cat._id.toString() : '';
        const categoryString = category ? category.toString() : '';
        return catIdString === categoryString;
      });
      
      if (categoryObj) {
        // Create display name from category parts
        const division = categoryObj.division || '';
        const skillLevel = categoryObj.skillLevel === 'Open' && categoryObj.tier 
          ? `Open Tier ${categoryObj.tier}` 
          : categoryObj.skillLevel || '';
        const age = categoryObj.ageCategory || '';
        
        const parts = [division, skillLevel, age].filter(part => part && part.trim());
        categoryName = parts.length > 0 ? parts.join(' | ') : 'Tournament Category';
        
        console.log('✅ REJECTION NOTIFICATION - Category resolved:', {
          division,
          skillLevel,
          age,
          parts,
          finalCategoryName: categoryName
        });
      }
    }

    // Determine registration type for notification message
    let registrationType = 'single';
    if (rejectedRegistration.partner) {
      registrationType = 'doubles';
    } else if (rejectedRegistration.teamMembers && rejectedRegistration.teamMembers.length > 0) {
      registrationType = 'team';
    }

    // Create rejection notification message
    const rejectionMessage = `Your ${registrationType} registration for "${tournament.tournamentName}" in ${categoryName} has been rejected. ${reason ? `Reason: ${reason}` : ''}`;

    // Remove the registration from the tournament
    tournament.registrations.splice(registrationIndex, 1);
    await tournament.save();

    // 🔔 Create rejection notifications
    try {
      // Always notify the main player
      await createNotification({
        userId: playerId,
        type: 'tournament',
        message: rejectionMessage,
        metadata: {
          tournamentId: tournament._id,
          tournamentName: tournament.tournamentName,
          category: categoryName,
          registrationStatus: 'rejected',
          registrationType: registrationType,
          rejectionReason: reason || 'No reason provided'
        }
      });

      console.log('✅ REJECTION NOTIFICATION - Created for player:', playerId);
      console.log('✅ REJECTION NOTIFICATION - Registration type:', registrationType);
      console.log('✅ REJECTION NOTIFICATION - Category:', categoryName);

      // If this is a doubles registration, notify the partner
      if (rejectedRegistration.partner) {
        console.log('🔔 PARTNER REJECTION NOTIFICATION - Creating notification for partner:', rejectedRegistration.partner);
        
        try {
          await createNotification({
            userId: rejectedRegistration.partner,
            type: 'tournament',
            message: rejectionMessage,
            metadata: {
              tournamentId: tournament._id,
              tournamentName: tournament.tournamentName,
              category: categoryName,
              registrationStatus: 'rejected',
              registrationType: registrationType,
              rejectionReason: reason || 'No reason provided'
            }
          });
          console.log('✅ PARTNER REJECTION NOTIFICATION - Created for partner:', rejectedRegistration.partner);
        } catch (error) {
          console.error('❌ PARTNER REJECTION NOTIFICATION ERROR - Failed to create notification for partner:', rejectedRegistration.partner, error);
        }
      }

      // If this is a team registration, notify all team members (except the registrant who already got notified)
      if (rejectedRegistration.teamMembers && Array.isArray(rejectedRegistration.teamMembers) && rejectedRegistration.teamMembers.length > 0) {
        console.log('🔔 TEAM REJECTION NOTIFICATIONS - Creating notifications for team members:', rejectedRegistration.teamMembers);
        
        // Create rejection notifications for each team member, excluding the registrant to avoid duplicates
        for (const teamMemberId of rejectedRegistration.teamMembers) {
          // Skip the registrant since they already received a notification
          if (teamMemberId.toString() === playerId.toString()) {
            console.log('⏭️ TEAM REJECTION NOTIFICATION - Skipping registrant to avoid duplicate:', teamMemberId);
            continue;
          }
          
          try {
            await createNotification({
              userId: teamMemberId,
              type: 'tournament',
              message: rejectionMessage,
              metadata: {
                tournamentId: tournament._id,
                tournamentName: tournament.tournamentName,
                category: categoryName,
                registrationStatus: 'rejected',
                registrationType: registrationType,
                rejectionReason: reason || 'No reason provided'
              }
            });
            console.log('✅ TEAM REJECTION NOTIFICATION - Created for team member:', teamMemberId);
          } catch (error) {
            console.error('❌ TEAM REJECTION NOTIFICATION ERROR - Failed to create notification for team member:', teamMemberId, error);
          }
        }
        
        console.log('🔔 TEAM REJECTION NOTIFICATIONS - Completed creating notifications for all team members');
      }
    } catch (error) {
      console.error('❌ REJECTION NOTIFICATION ERROR - Failed to create notification:', error);
      // Don't fail the entire request if notification creation fails
    }

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

    // First, get the tournament and the registration to be deleted
    const tournament = await Tournament.findById(tournamentId);
    if (!tournament) {
      return res.status(404).json({ message: "Tournament not found" });
    }

    // Find the registration to get player info before deletion
    const registrationToDelete = tournament.registrations.find(reg => reg._id.toString() === registrationId);
    if (!registrationToDelete) {
      return res.status(404).json({ message: "Registration not found" });
    }

    // Get player name for bracket cleanup
    const playerName = registrationToDelete.playerName || 
                      `${registrationToDelete.firstName} ${registrationToDelete.lastName}` ||
                      registrationToDelete.teamName;

    // Remove the registration
    const result = await Tournament.updateOne(
      { _id: tournamentId },
      { $pull: { registrations: { _id: registrationId } } }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "Failed to remove registration" });
    }

    // Now clean up bracket references
    if (playerName && tournament.tournamentCategories) {
      const updatedCategories = tournament.tournamentCategories.map(category => {
        const updatedCategory = { ...category.toObject() };

        // Clean up group stage standings and matches
        if (updatedCategory.groupStage?.groups) {
          updatedCategory.groupStage.groups = updatedCategory.groupStage.groups.map(group => {
            // Remove from standings
            if (group.standings) {
              group.standings = group.standings.filter(standing => standing.player !== playerName);
            }

            // Clean up matches - replace player name with 'TBD'
            if (group.matches) {
              Object.keys(group.matches).forEach(matchKey => {
                const match = group.matches[matchKey];
                if (match.player1 === playerName) {
                  match.player1 = 'TBD';
                  match.score1 = 0;
                  if (match.winner === playerName) match.winner = null;
                }
                if (match.player2 === playerName) {
                  match.player2 = 'TBD';
                  match.score2 = 0;
                  if (match.winner === playerName) match.winner = null;
                }
              });
            }

            return group;
          });
        }

        // Clean up elimination matches
        if (updatedCategory.eliminationMatches?.matches) {
          updatedCategory.eliminationMatches.matches = updatedCategory.eliminationMatches.matches.map(match => {
            if (match.player1 === playerName) {
              match.player1 = 'TBD';
              match.score1 = 0;
              if (match.winner === playerName) match.winner = null;
            }
            if (match.player2 === playerName) {
              match.player2 = 'TBD';
              match.score2 = 0;
              if (match.winner === playerName) match.winner = null;
            }
            return match;
          });
        }

        return updatedCategory;
      });

      // Update the tournament with cleaned categories
      await Tournament.updateOne(
        { _id: tournamentId },
        { $set: { tournamentCategories: updatedCategories } }
      );
    }

    return res.status(200).json({ message: "Player removed from category and brackets updated" });
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

    // 🔍 COMPREHENSIVE TEAM NAME DEBUG
    console.log('🔍 TEAM NAME EXTRACTION DEBUG:', {
      teamNameFromDestructuring: teamName,
      teamNameType: typeof teamName,
      teamNameDirect: req.body.teamName,
      teamNameDirectType: typeof req.body.teamName,
      allBodyKeys: Object.keys(req.body),
      teamRelatedKeys: Object.keys(req.body).filter(key => key.toLowerCase().includes('team')),
      fullRequestBody: JSON.stringify(req.body, null, 2)
    });

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
      console.log('✅ TEAM NAME ADDED TO REGISTRATION:', teamName);
    } else {
      console.log('❌ NO TEAM NAME TO ADD - teamName value:', teamName);
      console.log('❌ TEAM NAME DEBUG - Checking all possible sources:', {
        fromDestructuring: teamName,
        fromBodyDirect: req.body.teamName,
        fromBodyTeamName: req.body['teamName'],
        allTeamKeys: Object.keys(req.body).filter(key => key.toLowerCase().includes('team'))
      });
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

    // Create notifications for the user and team members about successful registration
    const notificationData = {
      type: 'tournament',
      message: `Your registration for "${tournament.tournamentName}" has been submitted and is pending approval.`,
      metadata: {
        tournamentId: tournament._id,
        tournamentName: tournament.tournamentName,
        category: category,
        registrationStatus: 'pending'
      }
    };

    // Always notify the registrant
    await createNotification({
      userId: req.user._id,
      ...notificationData
    });

    // If this is a partner registration, create partner invitation notification
    if (registration.partner) {
      try {
        // Find the saved registration to get its ID
        const savedRegistration = tournament.registrations[tournament.registrations.length - 1];
        
        // Resolve category ObjectId to category name
        let categoryName = category;
        console.log('🔍 CATEGORY RESOLUTION DEBUG:', {
          originalCategory: category,
          categoryType: typeof category,
          tournamentCategoriesCount: tournament.tournamentCategories ? tournament.tournamentCategories.length : 0,
          tournamentCategories: tournament.tournamentCategories
        });
        
        if (tournament.tournamentCategories && tournament.tournamentCategories.length > 0) {
          const categoryObj = tournament.tournamentCategories.find(cat => {
            const catIdString = cat._id ? cat._id.toString() : '';
            const categoryString = category ? category.toString() : '';
            console.log('🔍 Comparing category IDs:', { catIdString, categoryString, match: catIdString === categoryString });
            return catIdString === categoryString;
          });
          
          console.log('🔍 Found category object:', categoryObj);
          
          if (categoryObj) {
            // Create display name from category parts
            const division = categoryObj.division || '';
            const skillLevel = categoryObj.skillLevel === 'Open' && categoryObj.tier 
              ? `Open Tier ${categoryObj.tier}` 
              : categoryObj.skillLevel || '';
            const age = categoryObj.ageCategory || '';
            
            const parts = [division, skillLevel, age].filter(part => part && part.trim());
            categoryName = parts.length > 0 ? parts.join(' | ') : 'Tournament Category';
            
            console.log('✅ CATEGORY RESOLVED:', {
              division,
              skillLevel,
              age,
              parts,
              finalCategoryName: categoryName
            });
          } else {
            console.log('❌ CATEGORY NOT FOUND - Using fallback');
            categoryName = 'Tournament Category';
          }
        } else {
          console.log('❌ NO TOURNAMENT CATEGORIES FOUND');
          categoryName = 'Tournament Category';
        }
        
        await createNotification({
          userId: registration.partner,
          type: 'partner_invitation',
          message: `${req.user.firstName} ${req.user.lastName} has invited you to be their partner for "${tournament.tournamentName}" in the ${categoryName} category.`,
          metadata: {
            tournamentId: tournament._id,
            tournamentName: tournament.tournamentName,
            category: categoryName,
            registrationId: savedRegistration._id,
            invitedBy: req.user._id
          },
          partnerInvitation: {
            status: 'pending',
            tournamentId: tournament._id,
            registrationId: savedRegistration._id,
            invitedBy: req.user._id
          }
        });
        console.log('✅ PARTNER INVITATION - Notification created for partner:', registration.partner);
        console.log('✅ PARTNER INVITATION - Category resolved:', { originalCategory: category, resolvedCategory: categoryName });
      } catch (error) {
        console.error('❌ PARTNER INVITATION ERROR - Failed to create notification:', error);
      }
    }

    // If this is a team registration, notify all team members (except the registrant who already got notified)
    if (registration.teamMembers && Array.isArray(registration.teamMembers) && registration.teamMembers.length > 0) {
      console.log('🔔 TEAM NOTIFICATIONS - Creating notifications for team members:', registration.teamMembers);
      
      // Create notifications for each team member, excluding the registrant to avoid duplicates
      for (const teamMemberId of registration.teamMembers) {
        // Skip the registrant since they already received a notification
        if (teamMemberId.toString() === req.user._id.toString()) {
          console.log('⏭️ TEAM NOTIFICATION - Skipping registrant to avoid duplicate:', teamMemberId);
          continue;
        }
        
        try {
          await createNotification({
            userId: teamMemberId,
            ...notificationData
          });
          console.log('✅ TEAM NOTIFICATION - Created for team member:', teamMemberId);
        } catch (error) {
          console.error('❌ TEAM NOTIFICATION ERROR - Failed to create notification for team member:', teamMemberId, error);
        }
      }
      
      console.log('🔔 TEAM NOTIFICATIONS - Completed creating notifications for all team members');
    }

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
