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
import Profile from './pages/Profile';
import './App.css';

function AppContent() {
  const { notification, hideNotification } = useAuth();
  
  return (
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/ranks" element={<Ranks />} />
          <Route path="/clubs-courts" element={<ClubsCourts />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
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
