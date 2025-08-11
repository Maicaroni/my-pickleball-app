import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardRoleCards from "./analytics/DashboardRoleCards"; // adjust path if needed

const SuperAdminDashboard = () => {
  const [roleCounts, setRoleCounts] = useState({
    players: 0,
    coaches: 0,
    organizers: 0,
    clubAdmins: 0,
  });

  useEffect(() => {
    async function fetchRoleCounts() {
      try {
        const { data } = await axios.get("/api/analytics");
        setRoleCounts({
          players: data.totalPlayers ?? 0,
          coaches: data.totalCoaches ?? 0,
          organizers: data.totalOrganizers ?? 0,
          clubAdmins: data.totalClubAdmins ?? 0,
        });
      } catch (error) {
        console.error("Failed to fetch role counts", error);
      }
    }
    fetchRoleCounts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome, Super Admin 👋</h1>

      {/* Role cards */}
      <DashboardRoleCards
        players={roleCounts.players}
        coaches={roleCounts.coaches}
        organizers={roleCounts.organizers}
        clubAdmins={roleCounts.clubAdmins}
      />
    </div>
  );
};

export default SuperAdminDashboard;
