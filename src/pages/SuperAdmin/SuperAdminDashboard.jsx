import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SuperAdminSidebar from '../../components/Superadmin/SuperAdminSidebar';
import SuperAdminNavbar from '../../components/Superadmin/SuperAdminNavbar';

import Analytics from '../dashboard/Analytics';
import Players from '../dashboard/Players';
import Coaches from '../dashboard/Coaches';
import Organizers from '../dashboard/Organizers';
import ClubAdmins from '../dashboard/ClubAdmins';
import Reports from '../dashboard/Reports';
import Feedbacks from '../dashboard/Feedbacks';
import SystemUpdates from '../dashboard/SystemUpdates';
import Logs from '../dashboard/Logs';
import Profile from '../dashboard/Profile';

import '../../styles/superadmin.css'; // optional CSS for layout

const SuperAdminDashboard = () => {
  return (
    <div className="superadmin-dashboard">
      <SuperAdminSidebar />
      <div className="main-content">
        <SuperAdminNavbar />
        <div className="dashboard-pages">
          <Routes>
            <Route path="/" element={<Navigate to="analytics" />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="players" element={<Players />} />
            <Route path="coaches" element={<Coaches />} />
            <Route path="organizers" element={<Organizers />} />
            <Route path="club-admins" element={<ClubAdmins />} />
            <Route path="reports" element={<Reports />} />
            <Route path="feedbacks" element={<Feedbacks />} />
            <Route path="system-updates" element={<SystemUpdates />} />
            <Route path="logs" element={<Logs />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
