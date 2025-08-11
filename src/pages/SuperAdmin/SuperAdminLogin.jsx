import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SuperAdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/superadmin/login", {
        email,
        password,
      });

      // ✅ Save all required details
      localStorage.setItem("superadminToken", res.data.token);
      localStorage.setItem("superadminId", res.data.admin._id); // <-- Added this line
      localStorage.setItem("superadminEmail", res.data.admin.email);

      navigate("/superadmin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "2rem", textAlign: "center" }}>
      <h2>SuperAdmin Login</h2>
      <form onSubmit={handleLogin}>
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
          Login
        </button>
      </form>
      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
    </div>
  );
};

export default SuperAdminLogin;
