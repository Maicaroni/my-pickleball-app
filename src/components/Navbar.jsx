import { useState, useEffect } from 'react';
import styled from 'styled-components';
import logoImg from '../../ppl-logo.svg';
import axios from 'axios';
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";



const InitialsFallback = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
`;

const GlobalReset = styled.div`
  * {
    &:focus {
      outline: none;
    }
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background: rgba(255, 255, 255, 0.98);
  padding: 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(8px);
  z-index: 1000;
  transition: transform 0.3s ease;

  ${props => props.$hidden && `
    transform: translateY(-100%);
  `}

  @media (max-width: 768px) {
    height: 64px;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Logo = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  flex-shrink: 0;
  margin-right: auto;


  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: 4px;
    border-radius: 4px;
  }

  img {
    height: 65px;
    width: auto;
  
  @media (max-width: 768px) {
      height: 50px;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-left: auto;
  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MainLinks = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-right: 12px;

  @media (max-width: 1024px) {
    gap: 24px;
  }
`;

const NavLink = styled.button`
  color: #475569;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  padding: 8px 4px;
  position: relative;
  letter-spacing: -0.2px;
  background: none;
  border: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 2px;
    background: #29ba9b;
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #234255;
    
    &:after {
      transform: scaleX(1);
    }
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: 4px;
    border-radius: 4px;
    color: #234255;
    
    &:after {
      transform: scaleX(1);
    }
  }

  ${props => props.$active && `
    color: #234255;
    &:after {
      transform: scaleX(1);
    }
  `}
`;

const AuthSection = styled.div`
  display: flex;
  gap: 12px;
`;

const AuthButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }
  
  ${props => props.$primary ? `
    background: #29ba9b;
    color: white;
    
    &:hover {
      background: #239b83;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(41, 186, 155, 0.2);
    }

    &:focus-visible {
      outline: 2px solid #29ba9b;
      outline-offset: 2px;
      background: #239b83;
    }
  ` : `
    color: #475569;
    border: 1.5px solid #e2e8f0;
    background: transparent;
    
    &:hover {
      background: #f8fafc;
      color: #234255;
      border-color: #cbd5e1;
    }

    &:focus-visible {
      outline: 2px solid #475569;
      outline-offset: 2px;
      background: #f8fafc;
      color: #234255;
    }
  `}

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const MobileProfileButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 8px;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  gap: 8px;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    ${props => props.$show && `
      display: flex;
    `}
  }

  &:hover {
    color: #29ba9b;
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: 2px;
    border-radius: 4px;
    color: #29ba9b;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }

  svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
    stroke-width: 2;
  }
`;

const MobileNotificationButton = styled.button`
  display: none;
  position: relative;
  background: none;
  border: none;
  padding: 6px;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
  -webkit-tap-highlight-color: transparent;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    color: #29ba9b;
    background: #f8fafc;
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: 2px;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    stroke-width: 2;
  }
`;

const MobileAuthContainer = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const MobileAuthButton = styled(AuthButton)`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const MobileBottomNav = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e2e8f0;
  padding: 4px 4px 8px 4px; /* Reduced container padding */
  z-index: 1000;
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
  min-height: 55px; /* Reduced container height */

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  /* iOS safe area support */
  padding-bottom: calc(8px + env(safe-area-inset-bottom));
`;

const MobileNavButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px; /* Increased gap for bigger buttons */
  padding: 8px 6px; /* Increased padding for bigger buttons */
  border: none;
  background: none;
  color: #64748b;
  font-size: 11px; /* Bigger font */
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 60px; /* Bigger width */
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  svg {
    width: 24px; /* Bigger icons */
    height: 24px;
    stroke: currentColor;
    stroke-width: 2;
  }

  ${props => props.$active && `
    color: #29ba9b;
  `}

  &:hover {
    color: #29ba9b;
  }
`;

const ProfileMenu = styled.div`
  display: none;
  position: fixed;
  top: 64px;
  right: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  min-width: 200px;
  overflow: hidden;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    display: block;
    ${props => props.$isOpen && `
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    `}
  }
`;

const ProfileMenuItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: white;
  text-align: left;
  color: #475569;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    background: #f8fafc;
    color: #234255;
  }

  &:focus {
    outline: none;
    background: #f8fafc;
    color: #234255;
  }

  &.logout {
    border-top: 1px solid #e2e8f0;
    color: #ef4444;

    &:hover {
      background: #fef2f2;
      color: #dc2626;
    }
  }
`;

const MobileMenu = styled.div`
  display: none;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

const MobileNavLink = styled.button`
  color: #475569;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #f8fafc;
    color: #234255;
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: -2px;
    background: #f8fafc;
    color: #234255;
  }

  ${props => props.$active && `
    color: #29ba9b;
    background: #f0fdf4;
  `}
`;

const MobileAuthSection = styled(AuthSection)`
  flex-direction: column;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
`;

const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: none;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid #e2e8f0;
  color: #475569;
  font-weight: 600;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: 2px;
  }
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserName = styled.span`
  font-size: 15px;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ProfileDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  min-width: 200px;
  overflow: hidden;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;

  ${props => props.$isOpen && `
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  `}
`;

const ProfileDropdownItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: white;
  text-align: left;
  color: #475569;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    background: #f8fafc;
    color: #234255;
  }

  &:focus {
    outline: none;
    background: #f8fafc;
    color: #234255;
  }

  &.logout {
    border-top: 1px solid #e2e8f0;
    color: #ef4444;

    &:hover {
      background: #fef2f2;
      color: #dc2626;
    }
  }
`;

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NotificationButton = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 8px;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #29ba9b;
    background: #f8fafc;
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: 2px;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    stroke-width: 2;
  }
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  border: 2px solid white;

  ${props => props.$count > 0 && `
    width: 16px;
    height: 16px;
    font-size: 10px;
  `}

  ${props => props.$count > 99 && `
    width: 20px;
    font-size: 9px;
  `}
`;

const NotificationDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  min-width: 320px;
  max-width: 380px;
  max-height: 400px;
  overflow: hidden;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    right: -60px;
    min-width: 280px;
    max-width: 320px;
  }

  ${props => props.$isOpen && `
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  `}
`;

const NotificationHeader = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8fafc;

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #1e293b;
  }

  button {
    background: none;
    border: none;
    color: #64748b;
    font-size: 12px;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    transition: all 0.2s ease;

    &:hover {
      color: #29ba9b;
      background: rgba(41, 186, 155, 0.1);
    }
  }
`;

const NotificationList = styled.div`
  max-height: 320px;
  overflow-y: auto;
  
  /* Prevent scrolling the main page when scrolling notifications */
  overscroll-behavior: contain;
  
  /* Custom scrollbar styling - clean and minimal */
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  
  /* Hide scrollbar by default, show on hover */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 3px;
    transition: background 0.2s ease;
  }
  
  /* Remove arrow buttons */
  &::-webkit-scrollbar-button {
    display: none;
  }
  
  /* Show scrollbar on hover */
  &:hover {
    scrollbar-color: #cbd5e1 #f1f5f9;
    
    &::-webkit-scrollbar-track {
      background: #f1f5f9;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      
      &:hover {
        background: #94a3b8;
      }
    }
  }
`;

const NotificationItem = styled.div`
  padding: 12px 20px;
  border-bottom: 1px solid #f1f5f9;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  position: relative;

  &:hover {
    background: #f8fafc;
  }

  &:last-child {
    border-bottom: none;
  }

  ${props => props.$unread && `
    background: #f0f9ff;
    border-left: 3px solid #29ba9b;

    &:hover {
      background: #e0f2fe;
    }
  `}
`;

const NotificationIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;

  ${props => {
    switch (props.$type) {
      case 'like':
        return `background: #fef2f2; color: #ef4444;`;
      case 'comment':
      case 'reply':
        return `background: #f0f9ff; color: #3b82f6;`;
      case 'club_request':
      case 'club_accepted':
        return `background: #f0fdf4; color: #22c55e;`;
      case 'tournament':
        return `background: #fefce8; color: #eab308;`;
      default:
        return `background: #f1f5f9; color: #64748b;`;
    }
  }}

  svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
    stroke-width: 2;
  }
`;

const NotificationContent = styled.div`
  flex: 1;
  min-width: 0;

  .notification-text {
    font-size: 14px;
    color: #1e293b;
    line-height: 1.4;
    margin: 0 0 4px 0;

    .highlight {
      font-weight: 600;
      color: #29ba9b;
    }
  }

  .notification-time {
    font-size: 12px;
    color: #64748b;
  }
`;

const EmptyNotifications = styled.div`
  padding: 40px 20px;
  text-align: center;
  color: #64748b;

  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 12px;
    opacity: 0.5;
  }

  h4 {
    margin: 0 0 8px 0;
    font-size: 16px;
    color: #475569;
  }

  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.4;
  }
`;

const MobileNotificationOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 1100;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);

  @media (max-width: 768px) {
    display: block;
    ${props => props.$isOpen && `
      opacity: 1;
      visibility: visible;
    `}
  }
`;

function MenuIcon({ isOpen }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      style={{ transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s ease' }}
    >
      {isOpen ? (
        <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ReplyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 10h10a8 8 0 0 1 8 8v2M3 10l6 6m-6-6l6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UserPlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 8v6m3-3h-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UserCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 8l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 22h16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 9H6V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BellOffIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13.73 21a2 2 0 0 1-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.63 13A17.89 17.89 0 0 1 18 8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 8a6 6 0 0 0-9.33-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1 1l22 22" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Navbar() {

const { user, isAuthenticated, logout} = useAuth(); // <-- only these two
  const [userProfile, setUserProfile] = useState(null);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // TODO: Replace with actual API call to backend
  // Backend should provide: GET /api/notifications
  // Mark as read: PUT /api/notifications/:id/read
  // Mark all as read: PUT /api/notifications/mark-all-read
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      type: 'like',
      user: 'Sarah Chen',
      message: 'liked your post about the pickleball tournament',
      time: '5m ago',
      unread: true,
      postId: 'post123'
    },
    {
      id: '2',
      type: 'comment',
      user: 'Mike Johnson',
      message: 'commented on your post: "Great shots! Can\'t wait for the next match"',
      time: '15m ago',
      unread: true,
      postId: 'post123'
    },
    {
      id: '3',
      type: 'reply',
      user: 'Anna Rodriguez',
      message: 'replied to your comment on Mike\'s post',
      time: '1h ago',
      unread: false,
      postId: 'post456'
    },
    {
      id: '4',
      type: 'club_accepted',
      user: 'Phoenix Pickleball Club',
      message: 'accepted your request to join the club',
      time: '2h ago',
      unread: true,
      clubId: 'club789'
    },
    {
      id: '5',
      type: 'club_request',
      user: 'David Kim',
      message: 'wants to join your club "Metro Pickleball"',
      time: '3h ago',
      unread: true,
      clubId: 'club123'
    },
    {
      id: '6',
      type: 'tournament',
      user: 'Maria Santos',
      message: 'joined your tournament "Summer Smash 2024"',
      time: '4h ago',
      unread: false,
      tournamentId: 'tournament456'
    }
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

useEffect(() => {
  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/profiles/me");
      setUserProfile(res.data);
    } catch (err) {
      console.error("Fetch profile error:", err.response?.data || err.message);
    }
  };

  if (isAuthenticated) {
    fetchProfile();
  }
}, [isAuthenticated]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavHidden(currentScrollY > 72 && currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close profile menu and notifications when route changes
  useEffect(() => {
    setIsProfileOpen(false);
    setIsNotificationOpen(false);
  }, [location]);

  // Prevent background scroll when mobile notification overlay is open
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    
    if (isNotificationOpen && isMobile) {
      // Store current scroll position
      const scrollY = window.scrollY;
      
      // Lock the body position
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      
      // Store scroll position for restoration
      document.body.setAttribute('data-scroll-y', scrollY.toString());
    } else if (isMobile) {
      // Restore body position and scroll
      const scrollY = document.body.getAttribute('data-scroll-y');
      
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.removeAttribute('data-scroll-y');
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY));
      }
    }

    return () => {
      // Cleanup on unmount
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.removeAttribute('data-scroll-y');
    };
  }, [isNotificationOpen]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileOpen && !event.target.closest('[data-profile-container]')) {
        setIsProfileOpen(false);
      }
      if (isNotificationOpen && !event.target.closest('[data-notification-container]')) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isProfileOpen, isNotificationOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsProfileOpen(false);
    setIsNotificationOpen(false);
    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0);
  };


  const handleLogout = () => {
    logout(); // clears user & token globally
    navigate("/"); // redirect to home page
  };

  // TODO: Replace with actual API calls
  const markNotificationAsRead = (notificationId) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === notificationId 
          ? { ...notification, unread: false }
          : notification
      )
    );
    // Backend API call: PUT /api/notifications/${notificationId}/read
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, unread: false }))
    );
    // Backend API call: PUT /api/notifications/mark-all-read
  };

  const handleNotificationClick = (notification) => {
    if (notification.unread) {
      markNotificationAsRead(notification.id);
    }
    
    // Navigate to relevant page based on notification type
    switch (notification.type) {
      case 'like':
      case 'comment':
      case 'reply':
        handleNavigation(`/forum?post=${notification.postId}`);
        break;
      case 'club_request':
      case 'club_accepted':
        handleNavigation(`/clubs-courts?club=${notification.clubId}`);
        break;
      case 'tournament':
        handleNavigation(`/tournament?id=${notification.tournamentId}`);
        break;
      default:
        break;
    }
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'like':
        return <HeartIcon />;
      case 'comment':
        return <CommentIcon />;
      case 'reply':
        return <ReplyIcon />;
      case 'club_request':
        return <UserPlusIcon />;
      case 'club_accepted':
        return <UserCheckIcon />;
      case 'tournament':
        return <TrophyIcon />;
      default:
        return <BellIcon />;
    }
  };

  return (
    <GlobalReset>
    <Nav $hidden={isNavHidden}>
      <NavContainer>
          <Logo onClick={() => handleNavigation('/')}>
            <img src={logoImg} alt="Philippine Pickleball League" />
        </Logo>

        <NavLinks>
          <MainLinks>
              <NavLink 
                onClick={() => handleNavigation('/forum')} 
                $active={location.pathname === '/forum'}
              >
                Forum
              </NavLink>
              <NavLink 
                onClick={() => handleNavigation('/tournament')} 
                $active={location.pathname === '/tournament'}
              >
                Tournaments
              </NavLink>
              <NavLink 
                onClick={() => handleNavigation('/ranks')} 
                $active={location.pathname === '/ranks'}
              >
                Ranks
              </NavLink>
              <NavLink 
                onClick={() => handleNavigation('/clubs-courts')} 
                $active={location.pathname === '/clubs-courts'}
              >
                Clubs & Courts
              </NavLink>
          </MainLinks>
          {user ? (
            <ProfileContainer data-profile-container>
              {/* Profile Button */}
              <ProfileButton onClick={() => setIsProfileOpen(!isProfileOpen)}>
  {userProfile?.avatar ? (
    <Avatar
  src={userProfile?.avatar ? `http://localhost:5000${userProfile.avatar}` : "/default-avatar.png"}
  alt={`${user.firstName} ${user.lastName}`}
/>

  ) : user?.firstName ? (
    <InitialsFallback>
      {user.firstName.charAt(0).toUpperCase()}
    </InitialsFallback>
  ) : (
    <Avatar src="/default-avatar.png" alt="Default Avatar" />
  )}
  <UserName>{user?.firstName ?? 'User'}</UserName>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
</ProfileButton>
              <ProfileDropdown $isOpen={isProfileOpen}>
                <ProfileDropdownItem onClick={() => handleNavigation('/profile')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  My Profile
                </ProfileDropdownItem>
                {/*<ProfileDropdownItem onClick={() => handleNavigation('/coaches')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Coaches
                  </ProfileDropdownItem>*/}
                <ProfileDropdownItem onClick={() => handleNavigation('/settings')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Settings
                </ProfileDropdownItem>
                <ProfileDropdownItem onClick={() => handleNavigation('/feedback')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8v4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16h.01" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Feedback
                </ProfileDropdownItem>
                <ProfileDropdownItem className="logout" onClick={handleLogout}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Log Out
                </ProfileDropdownItem>
              </ProfileDropdown>

              {/* Notification Bell - RIGHT side of profile button */}
              <div style={{ position: 'relative' }} data-notification-container>
                <NotificationButton onClick={() => setIsNotificationOpen(!isNotificationOpen)}>
                  <BellIcon />
                  {unreadCount > 0 && (
                    <NotificationBadge $count={unreadCount}>
                      {unreadCount > 99 ? '99+' : unreadCount > 0 ? unreadCount : ''}
                    </NotificationBadge>
                  )}
                </NotificationButton>
                
                <NotificationDropdown $isOpen={isNotificationOpen}>
                  <NotificationHeader>
                    <h3>Notifications</h3>
                    {unreadCount > 0 && (
                      <button onClick={markAllNotificationsAsRead}>
                        Mark all as read
                      </button>
                    )}
                  </NotificationHeader>
                  
                  <NotificationList
                    onWheel={(e) => {
                      // Prevent wheel events from bubbling to parent elements
                      e.stopPropagation();
                      
                      const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
                      const isScrolledToTop = scrollTop === 0;
                      const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight;
                      
                      // If we're at the top and trying to scroll up, or at bottom and trying to scroll down
                      // prevent the event to stop page scrolling
                      if ((isScrolledToTop && e.deltaY < 0) || (isScrolledToBottom && e.deltaY > 0)) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {notifications.length > 0 ? (
                      notifications.map(notification => (
                        <NotificationItem
                          key={notification.id}
                          $unread={notification.unread}
                          onClick={() => handleNotificationClick(notification)}
                        >
                          <NotificationIcon $type={notification.type}>
                            {getNotificationIcon(notification.type)}
                          </NotificationIcon>
                          <NotificationContent>
                            <p className="notification-text">
                              <span className="highlight">{notification.user}</span> {notification.message}
                            </p>
                            <span className="notification-time">{notification.time}</span>
                          </NotificationContent>
                        </NotificationItem>
                      ))
                    ) : (
                      <EmptyNotifications>
                        <BellOffIcon />
                        <h4>No notifications</h4>
                        <p>You're all caught up! We'll notify you when something new happens.</p>
                      </EmptyNotifications>
                    )}
                  </NotificationList>
                </NotificationDropdown>
              </div>
            </ProfileContainer>
          ) : (
          <AuthSection>
              <AuthButton onClick={() => handleNavigation('/signin')}>Sign In</AuthButton>
              <AuthButton onClick={() => handleNavigation('/register')} $primary>Register</AuthButton>
          </AuthSection>
          )}
        </NavLinks>

        {isAuthenticated ? (
          <MobileAuthContainer>
            <MobileProfileButton 
              $show={true} 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              data-profile-container
            >
              <img src={user?.avatar} alt={user?.name} />
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MobileProfileButton>
            
            {/* Mobile-only Notification Bell */}
            <MobileNotificationButton 
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              data-notification-container
            >
              <BellIcon />
              {unreadCount > 0 && (
                <NotificationBadge $count={unreadCount}>
                  {unreadCount > 99 ? '99+' : unreadCount > 0 ? unreadCount : ''}
                </NotificationBadge>
              )}
            </MobileNotificationButton>
          </MobileAuthContainer>
        ) : (
          <MobileAuthButton onClick={() => handleNavigation('/signin')}>
            Sign In
          </MobileAuthButton>
        )}
      </NavContainer>

      <ProfileMenu $isOpen={isProfileOpen}>
        <ProfileMenuItem onClick={() => handleNavigation('/profile')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          My Profile
        </ProfileMenuItem>
        <ProfileMenuItem onClick={() => handleNavigation('/coaches')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Coaches
        </ProfileMenuItem>
        <ProfileMenuItem onClick={() => handleNavigation('/settings')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Settings
        </ProfileMenuItem>
        <ProfileMenuItem onClick={() => handleNavigation('/feedback')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8v4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16h.01" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Feedback
        </ProfileMenuItem>
        <ProfileMenuItem className="logout" onClick={handleLogout}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Log Out
        </ProfileMenuItem>
      </ProfileMenu>

      {/* Mobile Notification Full Page Overlay */}
      {isNotificationOpen && (
        <MobileNotificationOverlay>
          {/* Header */}
          <div style={{
            padding: '16px 20px',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#f8fafc',
            minHeight: '64px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={() => setIsNotificationOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '8px',
                  color: '#475569',
                  cursor: 'pointer',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5m7-7l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <h3 style={{ margin: '0', fontSize: '18px', fontWeight: '600', color: '#1e293b' }}>
                Notifications
              </h3>
            </div>
            {unreadCount > 0 && (
              <button 
                onClick={markAllNotificationsAsRead}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#29ba9b',
                  fontSize: '14px',
                  cursor: 'pointer',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontWeight: '500'
                }}
              >
                Mark all read
              </button>
            )}
          </div>
          
          {/* Notification List */}
          <div style={{ 
            height: 'calc(100vh - 64px)', 
            overflowY: 'auto',
            padding: '0'
          }}>
            {notifications.length > 0 ? (
              notifications.map(notification => (
                <div
                  key={notification.id}
                  onClick={() => handleNotificationClick(notification)}
                  style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid #f1f5f9',
                    cursor: 'pointer',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start',
                    backgroundColor: notification.unread ? '#f0f9ff' : 'white',
                    borderLeft: notification.unread ? '3px solid #29ba9b' : '3px solid transparent'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: '0',
                    marginTop: '2px',
                    ...(notification.type === 'like' && { background: '#fef2f2', color: '#ef4444' }),
                    ...(notification.type === 'comment' && { background: '#f0f9ff', color: '#3b82f6' }),
                    ...(notification.type === 'reply' && { background: '#f0f9ff', color: '#3b82f6' }),
                    ...(notification.type === 'club_request' && { background: '#f0fdf4', color: '#22c55e' }),
                    ...(notification.type === 'club_accepted' && { background: '#f0fdf4', color: '#22c55e' }),
                    ...(notification.type === 'tournament' && { background: '#fefce8', color: '#eab308' })
                  }}>
                    <div style={{ width: '18px', height: '18px' }}>
                      {getNotificationIcon(notification.type)}
                    </div>
                  </div>
                  <div style={{ flex: '1', minWidth: '0' }}>
                    <p style={{
                      fontSize: '15px',
                      color: '#1e293b',
                      lineHeight: '1.4',
                      margin: '0 0 4px 0'
                    }}>
                      <span style={{ fontWeight: '600', color: '#29ba9b' }}>{notification.user}</span>{' '}
                      {notification.message}
                    </p>
                    <span style={{ fontSize: '13px', color: '#64748b' }}>
                      {notification.time}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div style={{
                padding: '60px 20px',
                textAlign: 'center',
                color: '#64748b'
              }}>
                <div style={{ marginBottom: '16px', opacity: '0.5' }}>
                  <BellOffIcon />
                </div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#475569' }}>
                  No notifications
                </h4>
                <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.4' }}>
                  You're all caught up! We'll notify you when something new happens.
                </p>
              </div>
                         )}
           </div>
         </MobileNotificationOverlay>
       )}
    </Nav>

    <MobileBottomNav>
      <MobileNavButton 
        onClick={() => handleNavigation('/')} 
        $active={location.pathname === '/'}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="9,22 9,12 15,12 15,22" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Home
      </MobileNavButton>
      
      <MobileNavButton 
              onClick={() => handleNavigation('/forum')} 
              $active={location.pathname === '/forum'}
            >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
              Forum
      </MobileNavButton>

      <MobileNavButton 
              onClick={() => handleNavigation('/tournament')} 
              $active={location.pathname === '/tournament'}
            >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M6 4v6a6 6 0 0 0 12 0V4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4h12" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 6a2 2 0 0 0 2 2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 6a2 2 0 0 1-2 2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 16v2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 16v2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 20h8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
              Tournament
      </MobileNavButton>

      <MobileNavButton 
              onClick={() => handleNavigation('/ranks')} 
              $active={location.pathname === '/ranks'}
            >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
              Ranks
      </MobileNavButton>

              <MobileNavButton 
              onClick={() => handleNavigation('/clubs-courts')} 
              $active={location.pathname === '/clubs-courts'}
            >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          C&C
        </MobileNavButton>
    </MobileBottomNav>
    </GlobalReset>
  );
}

export default Navbar; 

