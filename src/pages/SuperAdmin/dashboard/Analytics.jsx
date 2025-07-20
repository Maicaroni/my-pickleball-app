import React, { useEffect, useState } from 'react';
import './DashboardStyles.css'; // Optional: Your custom styling
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Simulate fetching SuperAdmin profile data
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/superadmin/profile');
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Super Admin Profile</h2>
      {profile ? (
        <div className="profile-card">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Role:</strong> {profile.role}</p>
          <p><strong>Joined:</strong> {new Date(profile.createdAt).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
