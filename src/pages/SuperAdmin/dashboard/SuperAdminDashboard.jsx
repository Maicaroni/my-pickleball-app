import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaUserShield,
  FaFileAlt,
} from "react-icons/fa";

const SuperAdminDashboard = () => {
  const [stats, setStats] = useState({
    players: 0,
    coaches: 0,
    admins: 0,
    reports: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [players, coaches, admins, reports] = await Promise.all([
          axios.get("/api/players/count"),
          axios.get("/api/coaches/count"),
          axios.get("/api/club-admins/count"),
          axios.get("/api/reports/count"),
        ]);

        setStats({
          players: players.data.count || 0,
          coaches: coaches.data.count || 0,
          admins: admins.data.count || 0,
          reports: reports.data.count || 0,
        });
      } catch (err) {
        console.error("Error fetching dashboard stats:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="pt-4 pb-10 px-6">
      <h1 className="text-2xl font-bold text-nuBlue mb-6">
        Welcome, Super Admin 👋
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<FaUsers />}
          title="Total Players"
          count={stats.players}
        />
        <StatCard
          icon={<FaChalkboardTeacher />}
          title="Active Coaches"
          count={stats.coaches}
        />
        <StatCard
          icon={<FaUserShield />}
          title="Club Admins"
          count={stats.admins}
        />
        <StatCard
          icon={<FaFileAlt />}
          title="Reports"
          count={stats.reports}
        />
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, count }) => (
  <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 hover:shadow-lg transition-all duration-200">
    <div className="text-3xl text-nuBlue">{icon}</div>
    <div>
      <p className="text-gray-500">{title}</p>
      <h3 className="text-xl font-bold text-nuBlue">{count}</h3>
    </div>
  </div>
);

export default SuperAdminDashboard;
