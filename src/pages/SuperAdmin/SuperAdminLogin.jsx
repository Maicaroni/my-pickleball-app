import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const SuperAdminLogin = () => {
  const { setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/superadmin/login", {
        email,
        password,
      });

      const { token, admin } = res.data;
      setAuth({ ...admin, role: "superadmin" }, token);

      navigate("/superadmin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="h-screen w-screen flex">
      {/* LEFT: Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-8 md:px-16 bg-white relative z-10">
        {/* Logo / Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <span className="text-6xl">🏆</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#234255]">
            PPL SuperAdmin
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Manage tournaments, clubs & players
          </p>
        </div>

        {/* Card Form */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="email"
              placeholder="Superadmin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#29ba9b] focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#29ba9b] focus:outline-none"
            />

            {error && (
              <p className="text-red-600 text-sm font-medium text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#29ba9b] hover:bg-[#234255] text-white font-semibold py-3 rounded-xl shadow-lg transition transform hover:scale-[1.02]"
            >
              Login
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 text-center mt-8">
          Philippine Pickleball League © {new Date().getFullYear()}
        </p>
      </div>

      {/* RIGHT: Visuals */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#29ba9b] via-[#234255] to-[#a3e635] items-center justify-center relative overflow-hidden">
        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

        {/* Centered Visual */}
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Philippine Pickleball League
          </h2>
          <p className="text-lg opacity-90 mb-6">
            Elevating tournaments to the next level ✨
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Pickleball_Paddle_and_Ball.png"
            alt="Pickleball Visual"
            className="w-64 mx-auto drop-shadow-2xl animate-bounce-slow"
          />
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 4s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default SuperAdminLogin;
