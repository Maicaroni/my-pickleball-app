import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SuperAdminRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/superadmin/register", {
        email,
        password,
      });
      setSuccess("SuperAdmin registered successfully!");
      setError("");
      setTimeout(() => navigate("/superadmin/login"), 2000); // Redirect after success
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      setSuccess("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem", textAlign: "center" }}>
      <h2>SuperAdmin Registration</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "1rem" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "1rem" }}
        />
        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          Register
        </button>
      </form>
      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
      {success && <p style={{ color: "green", marginTop: "1rem" }}>{success}</p>}
    </div>
  );
};

export default SuperAdminRegister;
