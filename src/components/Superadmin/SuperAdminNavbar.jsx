import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const SuperAdminNavbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

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
        <img src="/admin-profile.png" alt="Profile" />
        <div className={`profile-link ${isProfileOpen ? "show" : ""}`}>
          <Link to="/superadmin/profile">
            <i className="fas fa-user"></i> Profile
          </Link>
          <Link to="/logout">
            <i className="fas fa-sign-out-alt"></i> Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SuperAdminNavbar;
