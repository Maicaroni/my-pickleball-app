
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { SuperAdminAuthProvider } from './contexts/SuperAdminAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import SuperAdminRoute from './components/SuperAdminRoute';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Forum from './pages/Forum';
import Tournament from './pages/Tournament';
import Ranks from './pages/Ranks';
import ClubsCourts from './pages/ClubsCourts';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Profile from './pages/Profile';
import HostTournament from './pages/HostTournament';
import Feedback from './pages/Feedback';
import ForgotPassword from './pages/ForgotPassword';
import Settings from './pages/Settings';

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
import AdminProfile from './pages/SuperAdmin/dashboard/Profile';
import ForumAnalytics from './pages/SuperAdmin/dashboard/ForumAnalytics';
import ClubsAndCourts from './pages/SuperAdmin/dashboard/ClubsAndCourts';
import Rankings from './pages/SuperAdmin/dashboard/Rankings';

import './index.css';
import 'antd/dist/reset.css'; // Ant Design v5 and up



function AppContent() {
  // Global scroll handler for mobile scrollbar
  useEffect(() => {
    let scrollTimer = null;
    
    const handleScroll = () => {
      // Add scrolling class when scrolling starts
      document.body.classList.add('scrolling');
      
      // Clear existing timer
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      
      // Remove scrolling class after scrolling stops
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 1000); // Hide scrollbar 1 second after scrolling stops
    };

    // Only add scroll listener on mobile
    if (window.innerWidth <= 768) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Handle window resize to check mobile state
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        window.addEventListener('scroll', handleScroll, { passive: true });
      } else {
        window.removeEventListener('scroll', handleScroll);
        document.body.classList.remove('scrolling');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      document.body.classList.remove('scrolling');
    };
  }, []);

  return (
    <div className="app">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="/forum" element={<><Navbar /><Forum /><Footer /></>} />
        <Route path="/tournament" element={<><Navbar /><Tournament /><Footer /></>} />
        <Route path="/tournament/:tournamentId" element={<><Navbar /><Tournament /><Footer /></>} />
        <Route path="/ranks" element={<><Navbar /><Ranks /><Footer /></>} />
        <Route path="/clubs-courts" element={<><Navbar /><ClubsCourts /><Footer /></>} />
        <Route path="/signin" element={<><Navbar /><SignIn /><Footer /></>} />
        <Route path="/register" element={<><Navbar /><Register /><Footer /></>} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <><Navbar /><Profile /><Footer /></>
          </ProtectedRoute>
        } />
        <Route path="/host-tournament" element={<><Navbar /><HostTournament /><Footer /></>} />
        <Route path="/feedback" element={<><Navbar /><Feedback /><Footer /></>} />
        <Route path="/forgot-password" element={<><Navbar /><ForgotPassword /><Footer /></>} />
        <Route path="/settings" element={
          <ProtectedRoute>
            <><Navbar /><Settings /><Footer /></>
          </ProtectedRoute>
        } />

        {/* SuperAdmin Auth Pages */}
        <Route path="/superadmin/register" element={
          <SuperAdminAuthProvider>
            <SuperAdminRegister />
          </SuperAdminAuthProvider>
        } />
        <Route path="/superadmin/login" element={
          <SuperAdminAuthProvider>
            <SuperAdminLogin />
          </SuperAdminAuthProvider>
        } />

        {/* SuperAdmin Layout with Nested Routes */}
       <Route path="/superadmin" element={
         <SuperAdminRoute>
           <SuperAdminLayout />
         </SuperAdminRoute>
       }>
        <Route path="dashboard" element={<SuperAdminDashboard />} />
        <Route path="admintournament" element={<AdminTournament />} />
        <Route path="forumanalytics" element={<ForumAnalytics />} />
        <Route path="clubsandcourts" element={<ClubsAndCourts />} />
        <Route path="rankings" element={<Rankings />} />
        <Route path="players" element={<Players />} />
        <Route path="coaches" element={<Coaches />} />
        <Route path="organizers" element={<Organizers />} />
        <Route path="club-admins" element={<ClubAdmins />} />
        <Route path="reports" element={<Reports />} />
        <Route path="feedbacks" element={<Feedbacks />} />
        <Route path="system-updates" element={<SystemUpdates />} />
        <Route path="logs" element={<Logs />} />
        <Route path="profile" element={<AdminProfile />} />
        </Route>
      </Routes>

      <Toaster />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <SuperAdminAuthProvider>
        <AppContent />
      </SuperAdminAuthProvider>
    </AuthProvider>
  );
}

export default App;