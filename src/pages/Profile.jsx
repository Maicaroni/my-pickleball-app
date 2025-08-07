import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

// Styled Components
const ProfileContainer = styled.div`
  min-height: calc(100vh - 140px);
  padding: 50px 20px 40px 20px;
  max-width: 1100px;
  margin: 0 auto;
  background: #ffffff;
`;

// ProfileGrid component removed as it's no longer needed
const ProfileGrid = styled.div`
  // Keeping the component definition for potential future use
  margin-bottom: 40px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
`;

const AvatarContainer = styled.div`
  position: relative;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #29ba9b;
`;

const AvatarUploadButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #29ba9b;
  border: 1px solid white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const UserName = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #475569;
  margin: 0;
  letter-spacing: -0.2px;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

const UserDetail = styled.div`
  font-size: 0.9rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const DuprSection = styled.div`
  width: 100%;
  border: 1px solid #e9ecef;
  padding: 16px;
`;

const DuprTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: #234255;
  margin: 0 0 16px 0;
  text-align: center;
`;

const DuprGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const DuprCard = styled.div`
  border: 1px solid #e9ecef;
  padding: 12px;
  text-align: center;
`;

const DuprScore = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #29ba9b;
  margin-bottom: 4px;
`;

const DuprLabel = styled.div`
  font-size: 0.9rem;
  color: #6b7280;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// SectionHeader component kept for potential future use
const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0f0f0;
`;

// SectionTitle is still used in TabContainer
const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: #234255;
  margin: 0;
  position: relative;
  padding-bottom: 8px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: #29ba9b;
  }
`;

// The following components are no longer used after removing the Player Rankings section
// They are kept for potential future use

const RankingsTable = styled.div`
  width: 100%;
  margin-top: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #f8f9fa;
  padding: 14px 20px;
  font-weight: 600;
  color: #234255;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.85rem;
`;

const TableBody = styled.div`
  background: white;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 12px 16px;
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.div`
  font-size: 0.9rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  
  &:nth-child(2) {
    font-weight: 600;
    color: #29ba9b;
  }
`;

const EditButton = styled.button`
  background: white;
  color: #29ba9b;
  border: none;
  padding: 10px 18px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  &:hover {
    background: #f0fffe;
    color: #249e85;
  }
  
  &:before {
    content: '✏️';
    margin-right: 6px;
    font-size: 0.9rem;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

// Tab Components
const TabContainer = styled.div`
  margin-top: -70px;
  width: 100%;
  padding: 30px;
`;

const TabHeader = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  position: relative;
  gap: 20px;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 10px 20px;
  background: transparent;
  color: ${props => props.active ? '#29ba9b' : '#234255'};
  border: none;
  border-bottom: 3px solid ${props => props.active ? '#29ba9b' : 'transparent'};
  border-left: ${props => props.active ? '1px solid #e5e7eb' : 'none'};
  border-right: ${props => props.active ? '1px solid #e5e7eb' : 'none'};
  font-weight: ${props => props.active ? '600' : '500'};
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: -1px;
  transition: all 0.2s ease;
  text-align: center;
  position: relative;
  
  &:not(:last-child):after {
    content: '|';
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    color: #e5e7eb;
    font-weight: 300;
    font-size: 1.5rem;
    pointer-events: none;
  }
  
  &:hover {
    color: ${props => props.active ? '#29ba9b' : '#1a2e3a'};
  }
`;

const TabContent = styled.div`
  padding: 20px 0;
  min-height: 250px;
`;

const TabSection = styled.div`
  margin-bottom: 30px;
  padding-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TabSectionTitle = styled.h3`
  font-size: 1.2rem;
  color: #234255;
  margin-bottom: 15px;
  font-weight: 600;
  position: relative;
  display: block;
  text-align: left;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: #29ba9b;
  }
`;

const TabText = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 0.95rem;
  text-align: left;
  
  strong {
    color: #234255;
    font-weight: 600;
  }
`;

const ClubCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9fafb;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
`;

const ClubName = styled.h4`
  font-size: 1.2rem;
  color: #234255;
  margin-bottom: 15px;
  font-weight: 600;
`;

const ClubDetail = styled.div`
  margin-bottom: 10px;
  color: #6b7280;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  
  strong {
    color: #234255;
    font-weight: 600;
  }
`;

const TournamentCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9fafb;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
`;

const TournamentInfo = styled.div`
  flex: 1;
`;

const TournamentName = styled.h4`
  font-size: 1.2rem;
  color: #234255;
  margin-bottom: 12px;
  font-weight: 600;
`;

const TournamentDate = styled.div`
  color: #6b7280;
  margin-bottom: 8px;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:before {
    content: '📅';
    font-size: 0.9rem;
  }
`;

const TournamentLocation = styled.div`
  color: #6b7280;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  
  &:before {
    content: '📍';
    font-size: 0.9rem;
  }
`;

const TournamentStatus = styled.div`
  padding: 3px 8px;
  border-radius: 2px;
  font-size: 0.75rem;
  font-weight: 400;
  background: ${props => {
    switch(props.status) {
      case 'upcoming': return '#f3f4f6';
      case 'active': return '#ecfdf5';
      case 'completed': return '#eff6ff';
      default: return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch(props.status) {
      case 'upcoming': return '#4b5563';
      case 'active': return '#047857';
      case 'completed': return '#2563eb';
      default: return '#4b5563';
    }
  }};
  display: inline-block;
  text-align: center;
  min-width: 70px;
`;

// New tournament card styled components (similar to club cards)
const TournamentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProfileTournamentCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  border: 1px solid #f1f5f9;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    border-color: #e2e8f0;
  }
`;

const ProfileTournamentImage = styled.div`
  height: 160px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => {
    switch(props.$imageIndex) {
      case 0:
        return 'url("https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1170&auto=format&fit=crop")';
      case 1:
        return 'url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1170&auto=format&fit=crop")';
      case 2:
        return 'url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1170&auto=format&fit=crop")';
      default:
        return 'url("https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1170&auto=format&fit=crop")';
    }
  }};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.1);
  }

  @media (min-width: 768px) {
    height: 180px;
  }
`;

const ProfileTournamentInfo = styled.div`
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  
  h3 {
    color: #0f172a;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 8px;
    line-height: 1.3;
  }
`;

const ProfileTournamentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 16px;
  
  div {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 400;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: #94a3b8;
  }
`;

const TournamentResultInfo = styled.div`
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
  font-size: 0.875rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 6px;
  
  svg {
    width: 14px;
    height: 14px;
    color: #94a3b8;
  }
`;

const TournamentStatusBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  backdrop-filter: blur(4px);
  background: ${props => {
    switch(props.status) {
      case 'upcoming': return 'rgba(59, 130, 246, 0.9)';
      case 'active': return 'rgba(34, 197, 94, 0.9)';
      case 'completed': return 'rgba(107, 114, 128, 0.9)';
      default: return 'rgba(107, 114, 128, 0.9)';
    }
  }};
  color: white;
`;

// Club search styled components
const ClubSearchSection = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

const ClubSearchInputContainer = styled.div`
  position: relative;
  flex: 1;

  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: #64748b;
  }
`;

const ClubSearchInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
  
  &:hover {
    border-color: #cbd5e0;
  }
`;

const CreateClubButton = styled.button`
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1.5px solid #29ba9b;
  background: #29ba9b;
  color: white;
  white-space: nowrap;
  min-width: 140px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: #26a085;
    border-color: #26a085;
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

// Club card styled components (similar to ClubsCourts)
const ClubGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProfileClubCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  border: 1px solid #f1f5f9;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    border-color: #e2e8f0;
  }
`;

const ProfileClubImage = styled.div`
  height: 160px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => {
    switch(props.$imageIndex) {
      case 0:
        return 'url("https://images.unsplash.com/photo-1686721135030-e2ab79e27b16?q=80&w=1170&auto=format&fit=crop")';
      case 1:
        return 'url("https://images.unsplash.com/photo-1515017804404-92b19fdfe6ac?q=80&w=1440&auto=format&fit=crop")';
      case 2:
        return 'url("https://plus.unsplash.com/premium_photo-1709932754899-5c36599fface?q=80&w=1209&auto=format&fit=crop")';
      default:
        return 'url("https://images.unsplash.com/photo-1686721135030-e2ab79e27b16?q=80&w=1170&auto=format&fit=crop")';
    }
  }};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.1);
  }

  @media (min-width: 768px) {
    height: 180px;
  }
`;

const ProfileClubInfo = styled.div`
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  
  h3 {
    color: #0f172a;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 8px;
    line-height: 1.3;
  }
  
  p {
    color: #64748b;
    font-size: 0.95rem;
    margin-bottom: 16px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const ProfileClubDetails = styled.div`
  display: flex;
  gap: 12px;
  font-size: 0.875rem;
  color: #64748b;
  flex-wrap: wrap;
  margin-bottom: 16px;
  
  div {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 400;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: #94a3b8;
  }
`;

const ProfileClubType = styled.span`
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 12px;
  background: ${props => props.type === 'club' ? '#f0f9ff' : '#f0fdf4'};
  color: ${props => props.type === 'club' ? '#0369a1' : '#166534'};
`;

const ProfileClubCategories = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const CategoryBadge = styled.span`
  padding: 2px 8px;
  background: #f1f5f9;
  color: #475569;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const UserPlacementBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 12px;
  background: rgba(41, 186, 155, 0.9);
  color: white;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  backdrop-filter: blur(4px);
`;

const MemberSinceInfo = styled.div`
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
  font-size: 0.875rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 6px;
  
  svg {
    width: 14px;
    height: 14px;
    color: #94a3b8;
  }
`;

// Tournament search styled components
const TournamentSearchSection = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

const TournamentSearchInputContainer = styled.div`
  position: relative;
  flex: 1;

  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: #64748b;
  }
`;

const TournamentSearchInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
  
  &:hover {
    border-color: #cbd5e0;
  }
`;

const HostTournamentButton = styled.button`
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1.5px solid #29ba9b;
  background: #29ba9b;
  color: white;
  white-space: nowrap;
  min-width: 160px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: #26a085;
    border-color: #26a085;
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Profile = () => {
  const { user, showNotification } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [activeTab, setActiveTab] = useState('about');
  const [isLoading, setIsLoading] = useState(true);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bioText, setBioText] = useState("I've been playing pickleball for 3 years and love the sport! Looking to improve my game and meet new players.");
  const [clubSearchTerm, setClubSearchTerm] = useState('');
  const [tournamentSearchTerm, setTournamentSearchTerm] = useState('');

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Here you would typically upload the file
      showNotification('Profile picture updated!', 'success');
    }
  };

  const handleEdit = () => {
    showNotification('Edit functionality coming soon!', 'info');
  };

  const handleEditBio = () => {
    setIsEditingBio(true);
  };

  const handleSaveBio = () => {
    setIsEditingBio(false);
    showNotification('Bio updated successfully!', 'success');
  };

  const handleCancelBio = () => {
    setBioText("I've been playing pickleball for 3 years and love the sport! Looking to improve my game and meet new players.");
    setIsEditingBio(false);
  };

  const handleCreateClub = () => {
    showNotification('Create Club functionality coming soon!', 'info');
  };

  const handleHostTournament = () => {
    navigate('/host-tournament');
  };

  // SearchIcon component for the club search
  const SearchIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // PlusIcon component for the create club button
  const PlusIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14m-7-7h14" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // TrophyIcon component for the host tournament button
  const TrophyIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 22h16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 9c0 4.97-4.03 9-9 9s-9-4.03-9-9V6h18v3Z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // LocationIcon component for club cards
  const LocationIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // CalendarIcon component for club cards
  const CalendarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Dummy user data for demonstration
  const userAge = 28;
  const pplId = 'PPL-001234';

  const rankData = [
    { category: 'Singles', rank: '4' },
    { category: 'Doubles', rank: '5' },
    { category: 'Mixed', rank: '4' }
  ];

  const duprRatings = [
    { type: 'Singles', rating: '5.502' },
    { type: 'Doubles', rating: '5.952' }
  ];

  if (!user) {
    return (
      <ProfileContainer>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h2 style={{ color: '#234255', marginBottom: '16px', fontSize: '1.3rem', fontWeight: '500' }}>Sign in to view your profile</h2>
          <p style={{ color: '#6b7280', marginBottom: '20px', fontSize: '0.9rem' }}>You need to be logged in to access your profile information.</p>
          <button 
            style={{ 
              background: '#29ba9b', 
              color: 'white', 
              border: 'none', 
              padding: '8px 16px', 
              borderRadius: '4px', 
              fontSize: '0.9rem', 
              fontWeight: '500',
              cursor: 'pointer'
            }}
            onClick={() => window.location.href = '/signin'}
          >
            Sign In
          </button>
        </div>
      </ProfileContainer>
    );
  }
  
  if (isLoading) {
    return (
      <ProfileContainer>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <div style={{ 
            display: 'inline-block',
            width: '30px',
            height: '30px',
            border: '2px solid #f3f3f3',
            borderTop: '2px solid #29ba9b',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '16px'
          }} />
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Loading profile...</p>
        </div>
      </ProfileContainer>
    );
  }

  // Dummy data for tabs
  const aboutData = {
    bio: bioText,
    playingStyle: "Aggressive baseliner with a strong forehand",
    preferredPaddle: "Selkirk AMPED Invikta"
  };

  const clubData = [
    {
      id: 1,
      name: "Riverside Pickleball Club",
      location: "123 Main St, Riverside, CA",
      memberSince: "January 2022",
      userPlacement: "Active Member",
      categories: ["Singles", "Doubles", "Mixed"],
      type: "club",
      imageIndex: 0,
      description: "Premier pickleball club with professional coaching and competitive leagues."
    },
    {
      id: 2,
      name: "Downtown Recreation Center",
      location: "456 Oak Ave, Riverside, CA", 
      memberSince: "March 2023",
      userPlacement: "Casual Player",
      categories: ["Recreational", "Doubles"],
      type: "club_and_courts",
      imageIndex: 1,
      description: "Community recreation center offering casual play and beginner-friendly programs."
    },
    {
      id: 3,
      name: "Elite Pickleball Academy",
      location: "789 Sports Blvd, Riverside, CA",
      memberSince: "June 2023", 
      userPlacement: "Tournament Player",
      categories: ["Singles", "Doubles", "Mixed", "Tournament"],
      type: "club",
      imageIndex: 2,
      description: "High-performance training facility for competitive players and tournaments."
    }
  ];

  const tournamentData = [
    {
      name: "Summer Smash Tournament",
      date: "July 15-16, 2023",
      location: "Riverside Courts",
      status: "completed",
      result: "Quarter-finalist (Mixed Doubles)",
      imageIndex: 0
    },
    {
      name: "Fall Classic Open",
      date: "October 8-9, 2023",
      location: "Central Park Courts",
      status: "completed",
      result: "Semi-finalist (Men's Doubles)",
      imageIndex: 1
    },
    {
      name: "Spring Championship",
      date: "April 22-23, 2024",
      location: "Lakeside Recreation Center",
      status: "upcoming",
      imageIndex: 2
    }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'about':
        return (
          <TabContent>
            <TabSection>
              <TabSectionTitle>Bio</TabSectionTitle>
              <BioContainer>
                {!isEditingBio && (
                  <EditBioButton onClick={handleEditBio}>
                    ✏️ Edit
                  </EditBioButton>
                )}
                {isEditingBio ? (
                  <>
                    <BioTextArea
                      value={bioText}
                      onChange={(e) => setBioText(e.target.value)}
                      placeholder="Tell us about yourself, your pickleball journey, goals, or anything you'd like other players to know..."
                      autoFocus
                    />
                    <BioEditButtons>
                      <BioButton onClick={handleCancelBio}>
                        Cancel
                      </BioButton>
                      <BioButton variant="save" onClick={handleSaveBio}>
                        Save
                      </BioButton>
                    </BioEditButtons>
                  </>
                ) : (
                  <TabText>{aboutData.bio || "Click 'Edit' to add your bio..."}</TabText>
                )}
              </BioContainer>
            </TabSection>
          </TabContent>
        );
      case 'club':
        return (
          <TabContent>
            <ClubSearchSection>
              <ClubSearchInputContainer>
                <SearchIcon />
                <ClubSearchInput
                  type="text"
                  placeholder="Search clubs by name or location..."
                  value={clubSearchTerm}
                  onChange={(e) => setClubSearchTerm(e.target.value)}
                />
              </ClubSearchInputContainer>
              <CreateClubButton onClick={handleCreateClub}>
                <PlusIcon />
                Create Club
              </CreateClubButton>
            </ClubSearchSection>
            
            <ClubGrid>
              {clubData
                .filter(club => 
                  club.name.toLowerCase().includes(clubSearchTerm.toLowerCase()) ||
                  club.location.toLowerCase().includes(clubSearchTerm.toLowerCase())
                )
                .map((club) => (
                <ProfileClubCard key={club.id}>
                  <ProfileClubImage $imageIndex={club.imageIndex} />
                  <ProfileClubInfo>
                    <h3>{club.name}</h3>
                    
                    <ProfileClubDetails>
                      <div>
                        <LocationIcon />
                        {club.location}
                      </div>
                    </ProfileClubDetails>
                    
                    <MemberSinceInfo>
                      <CalendarIcon />
                      Joined {club.memberSince}
                    </MemberSinceInfo>
                  </ProfileClubInfo>
                </ProfileClubCard>
              ))}
            </ClubGrid>
          </TabContent>
        );
      case 'tournaments':
        return (
          <TabContent>
            <TournamentSearchSection>
              <TournamentSearchInputContainer>
                <SearchIcon />
                <TournamentSearchInput
                  type="text"
                  placeholder="Search tournaments by name or location..."
                  value={tournamentSearchTerm}
                  onChange={(e) => setTournamentSearchTerm(e.target.value)}
                />
              </TournamentSearchInputContainer>
              <HostTournamentButton onClick={handleHostTournament}>
                <TrophyIcon />
                Host a Tournament
              </HostTournamentButton>
            </TournamentSearchSection>
            
            <TournamentGrid>
              {tournamentData
                .filter(tournament => 
                  tournament.name.toLowerCase().includes(tournamentSearchTerm.toLowerCase()) ||
                  tournament.location.toLowerCase().includes(tournamentSearchTerm.toLowerCase())
                )
                .map((tournament, index) => (
                <ProfileTournamentCard key={index}>
                  <ProfileTournamentImage $imageIndex={tournament.imageIndex} />
                  <TournamentStatusBadge status={tournament.status}>
                    {tournament.status === 'upcoming' ? 'Upcoming' : 
                     tournament.status === 'active' ? 'Active' : 'Completed'}
                  </TournamentStatusBadge>
                  <ProfileTournamentInfo>
                    <h3>{tournament.name}</h3>
                    
                    <ProfileTournamentDetails>
                      <div>
                        <CalendarIcon />
                        {tournament.date}
                      </div>
                      <div>
                        <LocationIcon />
                        {tournament.location}
                      </div>
                    </ProfileTournamentDetails>
                    
                    {tournament.result && (
                      <TournamentResultInfo>
                        <TrophyIcon />
                        {tournament.result}
                      </TournamentResultInfo>
                    )}
                  </ProfileTournamentInfo>
                </ProfileTournamentCard>
              ))}
            </TournamentGrid>
          </TabContent>
        );
      default:
        return <TabContent>Select a tab</TabContent>;
    }
  };

  // New styled components for the profile header
  const ProfileHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    margin-top: 60px;
    padding-bottom: 30px;
  `;

  const TopSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  `;

  const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  `;

  const PlayerInfoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  `;

  const PlayerDetails = styled.div`
    margin-left: 30px;
    
    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 20px;
    }
  `;

  const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    flex: 1;
    max-width: 600px;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      width: 100%;
      margin-top: 20px;
    }
  `;

  const StatBox = styled.div`
    text-align: center;
    padding: 25px 20px;
    background-color: #f9fafb;
    border-radius: 8px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const StatCategory = styled.div`
    font-weight: 600;
    color: #234255;
    margin-bottom: 5px;
  `;

  const StatValue = styled.div`
    font-size: 1.8rem;
    font-weight: 700;
    color: #29ba9b;
  `;

  const StatLabel = styled.div`
    font-size: 0.8rem;
    color: #6b7280;
    text-transform: uppercase;
  `;

  const PlayerInfoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 20px;
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `;

  const InfoItem = styled.div`
    text-align: center;
    padding: 10px;
  `;

  const InfoLabel = styled.div`
    font-size: 0.8rem;
    color: #6b7280;
    margin-bottom: 5px;
  `;

  const InfoValue = styled.div`
  font-weight: 500;
  color: #234255;
`;

const BioContainer = styled.div`
  position: relative;
`;

const BioTextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-family: inherit;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #374151;
  background-color: #ffffff;
  resize: vertical;
  text-align: left;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const BioEditButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  justify-content: flex-end;
`;

const BioButton = styled.button`
  padding: 6px 16px;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid;
  
  ${props => props.variant === 'save' ? `
    background-color: #29ba9b;
    color: white;
    border-color: #29ba9b;
    
    &:hover {
      background-color: #249e85;
      border-color: #249e85;
    }
  ` : `
    background-color: white;
    color: #6b7280;
    border-color: #d1d5db;
    
    &:hover {
      background-color: #f9fafb;
      border-color: #9ca3af;
    }
  `}
`;

const EditBioButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  color: #29ba9b;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f0fffe;
    color: #249e85;
  }
`;

  return (
    <ProfileContainer>
      <ProfileHeader>
        <TopSection>
          <LeftSection>
            <AvatarContainer>
              <Avatar src={user.avatar} alt={user.name} />
              <AvatarUploadButton onClick={handleAvatarClick}>
                📷
              </AvatarUploadButton>
              <HiddenFileInput
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </AvatarContainer>
            
            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <UserName>{user.name}</UserName>
            </div>
          </LeftSection>
          
          <div style={{ position: 'relative', flex: 1, maxWidth: '600px' }}>
            <div style={{ position: 'absolute', top: '-50px', right: '0', zIndex: 10 }}>
              <EditButton onClick={handleEdit}>
                Edit Profile
              </EditButton>
            </div>
            
            <StatsContainer>
              {rankData.map((item, index) => (
                <StatBox key={index}>
                  <StatCategory>{item.category}</StatCategory>
                  <StatValue>#{item.rank}</StatValue>
                  <StatLabel>Rank</StatLabel>
                </StatBox>
              ))}
            </StatsContainer>
          </div>
        </TopSection>
        
        <PlayerInfoGrid>
          <InfoItem>
            <InfoLabel>PPL ID</InfoLabel>
            <InfoValue>{pplId.replace('PPL-', '')}</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>AGE</InfoLabel>
            <InfoValue>{userAge} Years</InfoValue>
          </InfoItem>
          {duprRatings.map((rating, index) => (
            <InfoItem key={index}>
              <InfoLabel>{rating.type} DUPR</InfoLabel>
              <InfoValue>{rating.rating}</InfoValue>
            </InfoItem>
          ))}
        </PlayerInfoGrid>
      </ProfileHeader>
      
      {/* Tabs section below both profile sections */}
      <TabContainer>
        <TabHeader>
          <TabButton 
            active={activeTab === 'about'} 
            onClick={() => setActiveTab('about')}
          >
            About
          </TabButton>
          <TabButton 
            active={activeTab === 'club'} 
            onClick={() => setActiveTab('club')}
          >
            My Club
          </TabButton>
          <TabButton 
            active={activeTab === 'tournaments'} 
            onClick={() => setActiveTab('tournaments')}
          >
            Tournaments
          </TabButton>
        </TabHeader>
        {renderTabContent()}
      </TabContainer>
    </ProfileContainer>
  );
};

export default Profile;