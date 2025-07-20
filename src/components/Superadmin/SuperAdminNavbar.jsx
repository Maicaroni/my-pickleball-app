// components/Superadmin/SuperAdminNavbar.jsx
import React from 'react';

const SuperAdminNavbar = () => {
  return (
    <nav className="w-full h-16 bg-nuBlue text-nuWhite flex items-center justify-between px-6 shadow-md">
      <div className="text-xl font-bold tracking-wide">SuperAdmin Panel</div>
      <div className="flex gap-4 items-center">
        <span className="text-sm">Welcome, Admin</span>
        <img
          src="/admin-profile.png"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover border border-nuWhite"
        />
      </div>
    </nav>
  );
};

export default SuperAdminNavbar;
