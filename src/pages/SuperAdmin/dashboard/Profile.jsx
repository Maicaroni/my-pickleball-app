import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SuperAdminProfile = () => {
  const superAdminId = localStorage.getItem('superadminId'); // adjust to how you store it
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`/api/superadmin/profile/${superAdminId}`);
        setEmail(res.data.email);
      } catch (err) {
        console.error("Error fetching superadmin profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [superAdminId]);

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post(`/api/superadmin/change-password/${superAdminId}`, {
        newPassword: password,
      });

      alert(res.data.message || "Password updated successfully!");
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.error("Failed to update password:", err);
      alert("Failed to change password.");
    }
  };

  if (loading) return <p className="text-center mt-8">Loading profile...</p>;

  const derivedUsername = email.split('@')[0];

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col items-center gap-4">
        <img
          src="/admin-profile.png"
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-nuBlue"
        />
        <div className="text-center">
          <p className="text-lg font-semibold text-nuBlue">Username</p>
          <p className="text-gray-700 mb-2">{derivedUsername}</p>

          <p className="text-lg font-semibold text-nuBlue">Email</p>
          <p className="text-gray-700">{email}</p>
        </div>
      </div>

      <hr className="my-6" />

      <form onSubmit={handlePasswordChange}>
        <h3 className="text-lg font-semibold text-nuBlue mb-3">Change Password</h3>
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">New Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-1">Confirm New Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-nuBlue text-white px-4 py-2 rounded hover:bg-nuYellow hover:text-nuBlue transition"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default SuperAdminProfile;
