// components/Superadmin/SuperAdminSidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const tabs = [
  { name: 'Dashboard', path: '/superadmin/dashboard' },
  { name: 'My Profile', path: '/superadmin/profile' },
  { name: 'Players', path: '/superadmin/players' },
  { name: 'Coaches', path: '/superadmin/coaches' },
  { name: 'Organizers', path: '/superadmin/organizers' },
  { name: 'Club Admins', path: '/superadmin/club-admins' },
  { name: 'Reports', path: '/superadmin/reports' },
  { name: 'Feedbacks', path: '/superadmin/feedbacks' },
  { name: 'System Updates', path: '/superadmin/system-updates' },
  { name: 'Logs', path: '/superadmin/logs' },
];

const SuperAdminSidebar = () => {
  return (
    <aside className="h-screen w-64 bg-nuYellow text-nuBlue p-4 shadow-md fixed left-0 top-0 pt-20">
      <nav className="flex flex-col gap-4">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-base font-medium hover:bg-nuBlue hover:text-nuWhite ${
                isActive ? 'bg-nuBlue text-nuWhite' : ''
              }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default SuperAdminSidebar;
