import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Forum from './pages/Forum';
import Tournament from './pages/Tournament';
import Ranks from './pages/Ranks';
import ClubsCourts from './pages/ClubsCourts';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import './App.css';

function App() {
  return (
    <AuthProvider>
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
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
