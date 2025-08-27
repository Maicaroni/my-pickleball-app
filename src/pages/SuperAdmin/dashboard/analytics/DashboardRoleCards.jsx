import React from "react";
import { FaUsers, FaChalkboardTeacher, FaUserShield, FaTrophy } from "react-icons/fa";

const DashboardRoleCards = ({ players, coaches, organizers, clubAdmins }) => {
  const cards = [
    { title: "Players", count: players, icon: <FaUsers />, color: "text-green-600" },
    { title: "Coaches", count: coaches, icon: <FaChalkboardTeacher />, color: "text-blue-600" },
    { title: "Organizers", count: organizers, icon: <FaUserShield />, color: "text-purple-600" },
    { title: "Club Admins", count: clubAdmins, icon: <FaTrophy />, color: "text-yellow-600" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {cards.map(({ title, count, icon, color }) => (
        <div
          key={title}
          className="bg-white shadow-md rounded-lg p-5 flex items-center gap-4 hover:shadow-lg transition-shadow"
        >
          <div className={`text-3xl ${color}`}>{icon}</div>
          <div>
            <p className="text-gray-500">{title}</p>
            <h3 className="text-xl font-bold">{count}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardRoleCards;
