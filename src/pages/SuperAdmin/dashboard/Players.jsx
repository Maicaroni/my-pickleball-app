// src/pages/SuperAdmin/dashboard/Players.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../../components/Superadmin/SuperAdminSidebar';
import Navbar from '../../../components/Superadmin/SuperAdminNavbar';

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const res = await axios.get('/api/users?role=player');
        setPlayers(res.data);
      } catch (err) {
        console.error('Error fetching players:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this player?')) {
      try {
        await axios.delete(`/api/users/${id}`);
        setPlayers(players.filter((player) => player._id !== id));
        alert('Player deleted');
      } catch (err) {
        console.error('Error deleting player:', err);
        alert('Failed to delete player');
      }
    }
  };

  return (
    <div className="app">
      <Sidebar />
      <section id="content">
        <Navbar />
        <main className="p-6">
          <h1 className="text-2xl font-bold text-nuBlue mb-6">Players</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded shadow-md">
                <thead className="bg-nuBlue text-white">
                  <tr>
                    <th className="py-2 px-4 text-left">User</th>
                    <th className="py-2 px-4 text-left">Username</th>
                    <th className="py-2 px-4 text-left">ID Number</th>
                    <th className="py-2 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player) => (
                    <tr key={player._id} className="border-b">
                      <td className="py-2 px-4">{player.firstName} {player.lastName}</td>
                      <td className="py-2 px-4">{player.email.split('@')[0]}</td>
                      <td className="py-2 px-4">{player._id}</td>
                      <td className="py-2 px-4">
                        <button
                          onClick={() => handleDelete(player._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </section>
    </div>
  );
};

export default Players;
