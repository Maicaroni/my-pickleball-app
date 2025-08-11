import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartLine, FaTrophy, FaUsers, FaChalkboardTeacher, FaUserTie, FaBuilding, FaFileAlt, FaCommentDots, FaSyncAlt, FaList } from 'react-icons/fa';
import '../../pages/SuperAdmin/style.css'

const sidebarSections = [
  {
    title: 'Analytics',
    items: [
      { name: 'Dashboard', path: '/superadmin/dashboard', icon: <FaChartLine /> },
      { name: 'Tournaments', path: '/superadmin/admintournament', icon: <FaTrophy /> },
    ],
  },
  {
    title: 'User Management',
    items: [
      { name: 'Players', path: '/superadmin/players', icon: <FaUsers /> },
      { name: 'Coaches', path: '/superadmin/coaches', icon: <FaChalkboardTeacher /> },
      { name: 'Organizers', path: '/superadmin/organizers', icon: <FaUserTie /> },
      { name: 'Club Admins', path: '/superadmin/club-admins', icon: <FaBuilding /> },
    ],
  },
  {
    title: 'Support & Feedback',
    items: [
      { name: 'Reports', path: '/superadmin/reports', icon: <FaFileAlt /> },
      { name: 'Feedback', path: '/superadmin/feedbacks', icon: <FaCommentDots /> },
    ],
  },
  {
    title: 'System & Activity',
    items: [
      { name: 'Logs', path: '/superadmin/logs', icon: <FaList /> },
      { name: 'System Updates', path: '/superadmin/system-updates', icon: <FaSyncAlt /> },
    ],
  },
];

const SuperAdminSidebar = () => {
  return (
    <aside id="sidebar">
      <div className="brand">
        <span className="icon"><i className="fas fa-table-tennis-paddle-ball"></i></span>
        <span className="text">PickleAdmin</span>
      </div>
      {sidebarSections.map((section) => (
        <div key={section.title} className="sidebar-section">
          <div className="section-title">{section.title}</div>
          <ul className="side-menu">
            {section.items.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  <span className="icon">{item.icon}</span>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default SuperAdminSidebar;
