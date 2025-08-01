import React from 'react';
import { NavLink } from 'react-router-dom';

const tabs = [
  { name: 'Dashboard', path: '/superadmin/dashboard' },
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
    <aside id="sidebar">
      <div className="brand">
        <span className="icon"><i className="fas fa-table-tennis-paddle-ball"></i></span>
        <span className="text">PickleAdmin</span>
      </div>
      <ul className="side-menu">
        {tabs.map((tab) => (
          <li key={tab.name}>
            <NavLink
              to={tab.path}
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              <span className="icon"><i className="fas fa-chevron-right"></i></span>
              {tab.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SuperAdminSidebar;
