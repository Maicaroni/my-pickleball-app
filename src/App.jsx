import { Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Toaster } from 'react-hot-toast';
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

import SuperAdminLogin from "./pages/SuperAdmin/SuperAdminLogin";
import SuperAdminRegister from "./pages/SuperAdmin/SuperAdminRegister";
import SuperAdminLayout from './layout/SuperAdminLayout';

import SuperAdminDashboard from './pages/SuperAdmin/dashboard/SuperAdminDashboard';
import AdminTournament from './pages/SuperAdmin/dashboard/AdminTournament';
import Players from './pages/SuperAdmin/dashboard/Players';
import Coaches from './pages/SuperAdmin/dashboard/Coaches';
import Organizers from './pages/SuperAdmin/dashboard/Organizers';
import ClubAdmins from './pages/SuperAdmin/dashboard/ClubAdmins';
import Reports from './pages/SuperAdmin/dashboard/Reports';
import Feedbacks from './pages/SuperAdmin/dashboard/Feedbacks';
import SystemUpdates from './pages/SuperAdmin/dashboard/SystemUpdates';
import Logs from './pages/SuperAdmin/dashboard/Logs';
import Profile from './pages/SuperAdmin/dashboard/Profile';

import './App.css';
import './index.css';
import 'antd/dist/reset.css'; // Ant Design v5 and up




function AppContent() {
  const { notification, hideNotification } = useAuth();

  return (
    <div className="app">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="/forum" element={<><Navbar /><Forum /><Footer /></>} />
        <Route path="/tournament" element={<><Navbar /><Tournament /><Footer /></>} />
        <Route path="/ranks" element={<><Navbar /><Ranks /><Footer /></>} />
        <Route path="/clubs-courts" element={<><Navbar /><ClubsCourts /><Footer /></>} />
        <Route path="/signin" element={<><Navbar /><SignIn /><Footer /></>} />
        <Route path="/register" element={<><Navbar /><Register /><Footer /></>} />

        {/* SuperAdmin Auth Pages */}
        <Route path="/superadmin/register" element={<SuperAdminRegister />} />
        <Route path="/superadmin/login" element={<SuperAdminLogin />} />

        {/* SuperAdmin Layout with Nested Routes */}
       <Route path="/superadmin" element={<SuperAdminLayout />}>
        <Route path="dashboard" element={<SuperAdminDashboard />} />
        <Route path="admintournament" element={<AdminTournament />} />
        <Route path="players" element={<Players />} />
        <Route path="coaches" element={<Coaches />} />
        <Route path="organizers" element={<Organizers />} />
        <Route path="club-admins" element={<ClubAdmins />} />
        <Route path="reports" element={<Reports />} />
        <Route path="feedbacks" element={<Feedbacks />} />
        <Route path="system-updates" element={<SystemUpdates />} />
        <Route path="logs" element={<Logs />} />
        <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>

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
