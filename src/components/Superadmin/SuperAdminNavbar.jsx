import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import '../../pages/SuperAdmin/style.css'

const SuperAdminNavbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const toggleProfileMenu = () => setIsProfileOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
  try {
    const adminId = localStorage.getItem("superadminId");

    // Send logout log to backend
    await axios.post("http://localhost:5000/api/superadmin/logout", { adminId });

    // ✅ Clear ALL stored session data
    localStorage.removeItem("superadminToken");
    localStorage.removeItem("superadminId");
    localStorage.removeItem("superadminEmail");

    // ✅ Remove default auth header in case it's set globally
    delete axios.defaults.headers.common["Authorization"];

    message.success("Logged out successfully!");

    // Redirect to login
    navigate("/superadmin/login");
  } catch (error) {
    console.error("Logout error:", error);
    message.error("Logout failed");
  }
};

  return (
    <nav className="flex items-center justify-between">
      {/* Left: Sidebar toggle & Search */}
      <div className="flex items-center gap-6">
        <div className="toggle-sidebar">
          <i className="fas fa-bars"></i>
        </div>

        <form>
          <div className="form-group">
            <input type="text" placeholder="Search..." />
            <i className="icon fas fa-search"></i>
          </div>
        </form>
      </div>

      {/* Right: Profile Info */}
      <div className="divider"></div>

      <div className="profile ml-auto" onClick={toggleProfileMenu} ref={profileRef}>
        <span className="welcome-message">Welcome, Admin</span>
        <i className="fas fa-user-circle text-2xl ml-2"></i> {/* FontAwesome profile icon */}

        <div className={`profile-link ${isProfileOpen ? "show" : ""}`}>
          <Link to="/superadmin/profile">
            <i className="fas fa-user"></i> Profile
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
            style={{ border: "none", background: "transparent", cursor: "pointer" }}
          >
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SuperAdminNavbar;
