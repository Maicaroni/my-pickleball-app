import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Forum from './pages/Forum';
import Tournament from './pages/Tournament';
import Profile from './pages/Profile';
import ClubsCourts from './pages/ClubsCourts';
import Ranks from './pages/Ranks';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Home from './pages/Home';
import HostTournament from './pages/HostTournament';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Notification from './components/Notification';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import './styles/App.css';

function AppContent() {
  const { notification, hideNotification } = useAuth();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/ranks" element={<Ranks />} />
          <Route path="/clubs-courts" element={<ClubsCourts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/host-tournament" element={<HostTournament />} />
        </Routes>
      </main>
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
