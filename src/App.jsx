import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Forum from './pages/Forum';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Forum />} />
        <Route path="/forum" element={<Forum />} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
