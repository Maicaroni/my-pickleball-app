import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style.css";

const SuperAdminProfile = () => {
  const superAdminId = localStorage.getItem("superadminId");
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!superAdminId) return;

    axios
      .get(`/api/superadmins/${superAdminId}`)
      .then((res) => setProfile(res.data))
      .catch((err) => console.error(err));
  }, [superAdminId]);

  if (!profile) {
    return <p style={{ padding: "20px" }}>Loading profile...</p>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          backgroundColor: "#f8f9fa",
          display: "flex",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {/* Left - Profile Picture */}
        <div
          style={{
            backgroundColor: "#0056b3",
            padding: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={profile.image || "https://via.placeholder.com/150"}
            alt="Profile"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              border: "4px solid white",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Right - Info */}
        <div style={{ padding: "30px", flex: 1 }}>
          <h2 style={{ marginBottom: "10px", color: "#333" }}>
            {profile.firstName} {profile.lastName}
          </h2>
          <p style={{ margin: "5px 0" }}>
            <strong>Email:</strong> {profile.email}
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Role:</strong> {profile.role}
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Joined:</strong>{" "}
            {new Date(profile.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminProfile;
