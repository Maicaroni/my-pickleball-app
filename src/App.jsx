import { Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Notification from './components/Notification';

import Home from './pages/Home';
import Forum from './pages/Forum';
import Tournament from './pages/Tournament';
import Ranks from './pages/Ranks';
import ClubsCourts from './pages/ClubsCourts';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

// SuperAdmin main and dashboard pages
import SuperAdminDashboard from './pages/SuperAdmin/SuperAdminDashboard';
import Profile from './pages/SuperAdmin/dashboard/Profile';
import Analytics from './pages/SuperAdmin/dashboard/Analytics';
import Players from './pages/SuperAdmin/dashboard/Players';
import Coaches from './pages/SuperAdmin/dashboard/Coaches';
import Organizers from './pages/SuperAdmin/dashboard/Organizers';
import ClubAdmins from './pages/SuperAdmin/dashboard/ClubAdmins';
import Reports from './pages/SuperAdmin/dashboard/Reports';
import Feedbacks from './pages/SuperAdmin/dashboard/Feedbacks';
import SystemUpdates from './pages/SuperAdmin/dashboard/SystemUpdates';
import Logs from './pages/SuperAdmin/dashboard/Logs';

import './App.css';

function AppContent() {
  const { notification, hideNotification } = useAuth();

  return (
    <div className="app">
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/ranks" element={<Ranks />} />
        <Route path="/clubs-courts" element={<ClubsCourts />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />

        {/* Super Admin Routes */}
        <Route path="/superadmin" element={<SuperAdminDashboard />} />
        <Route path="/superadmin/profile" element={<Profile />} />
        <Route path="/superadmin/analytics" element={<Analytics />} />
        <Route path="/superadmin/players" element={<Players />} />
        <Route path="/superadmin/coaches" element={<Coaches />} />
        <Route path="/superadmin/organizers" element={<Organizers />} />
        <Route path="/superadmin/clubadmins" element={<ClubAdmins />} />
        <Route path="/superadmin/reports" element={<Reports />} />
        <Route path="/superadmin/feedbacks" element={<Feedbacks />} />
        <Route path="/superadmin/systemupdates" element={<SystemUpdates />} />
        <Route path="/superadmin/logs" element={<Logs />} />
      </Routes>
      <Footer />
      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
