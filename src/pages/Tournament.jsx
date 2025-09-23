import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from '../components/AuthModal';

// Helper function to compute age
const getAge = (birthDate) => {
  if (!birthDate) return "N/A";
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  if (
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
  ) {
    age--;
  }
  return age;
};

// Detailed View Styled Components - Convert from Modal to Full Page
const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e0;
    color: #475569;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

// EditTournamentButton removed - not needed for player view

const TournamentDetailContent = styled.div`
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Tournament Detail View Components
const TournamentDetailContainer = styled.div`
  animation: fadeIn 0.3s ease;
  margin-top: 24px;
  
  @media (max-width: 768px) {
    margin-top: 16px;
    padding: 0 5px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const TournamentDetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 16px;
    padding-bottom: 12px;
  }
`;

const TournamentDetailBanner = styled.div`
  position: relative;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 24px;
  background: linear-gradient(135deg, #29ba9b, #239b83);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
  }
  
  @media (max-width: 768px) {
    height: 200px;
    border-radius: 12px;
  }
`;

const TournamentDetailStatusBadge = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  backdrop-filter: blur(10px);
  z-index: 10;
  
  ${props => {
    switch (props.$status.toLowerCase()) {
      case 'open':
        return `
          background: rgba(220, 252, 231, 0.95);
          color: #166534;
          border: 1px solid #86efac;
        `;
      case 'closed':
        return `
          background: rgba(254, 226, 226, 0.95);
          color: #991b1b;
          border: 1px solid #fca5a5;
        `;
      case 'upcoming':
        return `
          background: rgba(224, 242, 254, 0.95);
          color: #0369a1;
          border: 1px solid #7dd3fc;
        `;
      default:
        return `
          background: rgba(241, 245, 249, 0.95);
          color: #475569;
          border: 1px solid #e2e8f0;
        `;
    }
  }}

  @media (max-width: 768px) {
    top: 16px;
    right: 16px;
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const TournamentDetailBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    gap: 48px;
  }
`;

const TournamentDetailLeft = styled.div``;

const TournamentDetailRight = styled.div``;

const TournamentDetailTitle = styled.div`
  margin-bottom: 32px;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #234255;
    margin: 0 0 16px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const TournamentDetailType = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${props => {
    switch (props.type) {
      case 'beginner': return '#f0fdf4';
      case 'intermediate': return '#fef3c7';
      case 'advanced': return '#fef2f2';
      case 'open': return '#f0f9ff';
      default: return '#f8fafc';
    }
  }};
  border-radius: 25px;
  color: ${props => {
    switch (props.type) {
      case 'beginner': return '#15803d';
      case 'intermediate': return '#d97706';
      case 'advanced': return '#dc2626';
      case 'open': return '#0369a1';
      default: return '#475569';
    }
  }};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px;
  border: 1px solid ${props => {
    switch (props.type) {
      case 'beginner': return '#bbf7d0';
      case 'intermediate': return '#fde68a';
      case 'advanced': return '#fecaca';
      case 'open': return '#bae6fd';
      default: return '#e2e8f0';
    }
  }};

  svg {
    width: 16px;
    height: 16px;
  }
`;

const TournamentDetailDescription = styled.p`
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 24px;
  }
`;

const TournamentDetailSection = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const TournamentDetailSectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 20px;
    height: 20px;
    color: #29ba9b;
  }
`;

const TournamentDetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  background: #f8fafc;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
`;

const TournamentDetailsItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e2e8f0;
  transition: all 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f1f5f9;
  }

  @media (max-width: 768px) {
    padding: 16px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const DetailItemIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #29ba9b;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
    color: white;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 4px;
  }
`;

const DetailItemContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

const DetailItemLabel = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 2px;
`;

const DetailItemValue = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: #334155;
  text-align: right;

  &.price {
    font-size: 1.1rem;
    color: #334155;
  }

  &.deadline {
    color: #334155;
  }

  @media (max-width: 768px) {
    text-align: left;
    font-size: 1.1rem;
    
    &.price {
      font-size: 1.1rem;
    }
  }
`;

const DetailItemSubtext = styled.div`
  font-size: 0.85rem;
  color: #64748b;
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const LocationCard = styled.div`
  background: #f8fafc;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
`;

const LocationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #334155;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      width: 20px;
      height: 20px;
      color: #29ba9b;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const LocationActions = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LocationButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 16px;
    height: 16px;
  }

  ${props => props.$primary ? `
    background: #29ba9b;
    color: white;
    border: none;

    &:hover {
      background: #239b83;
    }
  ` : `
    background: white;
    color: #475569;
    border: 1px solid #e2e8f0;

    &:hover {
      background: #f8fafc;
      border-color: #cbd5e1;
    }
  `}

  @media (max-width: 768px) {
    flex: 1;
    justify-content: center;
  }
`;

const LocationInfo = styled.div`
  margin-bottom: 16px;

  .venue-name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #234255;
    margin-bottom: 4px;
  }

  .venue-address {
    color: #64748b;
    margin-bottom: 8px;
  }

  .coordinates {
    font-size: 12px;
    color: #94a3b8;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 14px;
  border: 2px dashed #94a3b8;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: linear-gradient(135deg, #cbd5e1, #94a3b8);
    border-color: #64748b;
  }

  &::before {
    content: '📍';
    font-size: 3rem;
    margin-bottom: 8px;
  }

  .map-text {
    text-align: center;
    
    .main-text {
      font-weight: 600;
      margin-bottom: 4px;
    }
    
    .sub-text {
      font-size: 12px;
      opacity: 0.7;
    }
  }
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RegisterButtonMain = styled.button`
  flex: 1;
  background: #29ba9b;
  color: white;
  padding: 16px 24px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: #239b83;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #e2e8f0;
    cursor: not-allowed;
    color: #94a3b8;
  }
`;

const ShareButtonMain = styled.button`
  background: #f1f5f9;
  color: #475569;
  padding: 16px 24px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 120px;

  &:hover {
    background: #e2e8f0;
    border-color: #cbd5e1;
  }
`;

// Tab Components
const TabNavigation = styled.div`
  display: flex;
  background: #f8fafc;
  border-radius: 12px;
  padding: 6px;
  margin-bottom: 32px;
  border: 1px solid #e2e8f0;
  width: 100%;
  
  @media (max-width: 768px) {
    margin-bottom: 24px;
    padding: 4px;
  }
`;

const TabButton = styled.button`
  flex: 1;
  padding: 12px 20px;
  border: none;
  background: ${props => props.$active ? 'white' : 'transparent'};
  color: ${props => props.$active ? '#234255' : '#64748b'};
  font-weight: ${props => props.$active ? '600' : '500'};
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 8px;
  white-space: nowrap;
  position: relative;
  box-shadow: ${props => props.$active ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
  outline: none;
  text-align: center;

  &:hover {
    color: ${props => props.$active ? '#234255' : '#29ba9b'};
    background: ${props => props.$active ? 'white' : '#ffffff80'};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 0.85rem;
  }
`;

const TabContent = styled.div`
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const EventCard = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
  }
`;

const EventTime = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #29ba9b;
  margin-bottom: 8px;
`;

const EventTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 8px;
`;

const EventDescription = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.4;
`;

const BracketPlayersContainer = styled.div`
  background: #f8fafc;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
`;

const BracketTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 16px;
  text-align: center;
`;

const BracketStatus = styled.div`
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 20px;
  text-align: center;
`;

const BracketsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

const BracketCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const BracketCardTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 16px;
  text-align: center;
  padding: 8px 12px;
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  position: relative;
  
  &::before {
    content: '🏆';
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.9rem;
  }
`;

const PlayersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PlayerCard = styled.div`
  background: #f8fafc;
  border-radius: 8px;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  font-size: 0.9rem;
  font-weight: 500;
  color: #334155;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
  }

  .player-info {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
  }

  .player-details {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
  }

  .player-name {
    font-weight: 600;
    color: #334155;
    font-size: 0.9rem;
  }

  .player-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    color: #64748b;
  }

  .player-rating {
    background: #29ba9b;
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 600;
  }

  .player-team {
    font-style: italic;
  }

  .player-number {
    background: #29ba9b;
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .player-status {
    font-size: 0.8rem;
    padding: 4px 8px;
    border-radius: 12px;
    font-weight: 500;
    
    &.approved {
      background: #dcfce7;
      color: #166534;
    }
    
    &.pending {
      background: #fef3c7;
      color: #d97706;
    }
  }
`;

const EmptySlot = styled.div`
  background: #f8fafc;
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  padding: 12px 16px;
  text-align: center;
  color: #94a3b8;
  font-size: 0.9rem;
  font-style: italic;
  position: relative;

  &::before {
    content: '⏳';
    margin-right: 6px;
    opacity: 0.6;
  }
`;

const RegistrationsList = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  margin-top: 24px;
`;

const RegistrationsTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    width: 16px;
    height: 16px;
    color: #29ba9b;
  }
`;

const RegistrationItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }

  .registration-info {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .registration-details {
    .player-name {
      font-weight: 500;
      color: #334155;
      font-size: 0.9rem;
    }
    
    .registration-date {
      font-size: 0.8rem;
      color: #64748b;
    }

    .registration-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 2px;
      font-size: 0.75rem;
      color: #64748b;
    }

    .reg-rating {
      background: #f1f5f9;
      color: #475569;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: 600;
    }

    .reg-team {
      font-style: italic;
    }
  }

  .registration-status {
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
    
    &.approved {
      background: #dcfce7;
      color: #166534;
    }
    
    &.pending {
      background: #fef3c7;
      color: #d97706;
    }
    
    &.rejected {
      background: #fee2e2;
      color: #dc2626;
    }
  }
`;

const SponsorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`;

const SponsorCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const SponsorLogo = styled.div`
  width: 80px;
  height: 80px;
  background: #f1f5f9;
  border-radius: 12px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const SponsorName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 8px;
`;

const SponsorDescription = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.4;
`;

// Tournament Bracket Components
const TournamentBracket = styled.div`
  background: white;
  border-radius: 16px;
  padding: 12px;
  border: 1px solid #e2e8f0;
  width: 100%;

  @media (min-width: 768px) {
    padding: 16px;
  }
`;

const BracketContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;




const GroupStageSection = styled.div`
  margin-bottom: 32px;

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #334155;
    margin: 0 0 20px 0;
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      width: 20px;
      height: 20px;
      color: #29ba9b;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 24px;

    h3 {
      font-size: 1.2rem;
    }
  }
`;

const BracketColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;

  @media (min-width: 768px) {
    gap: 12px;
  }
`;

const BracketRound = styled.div`
  text-align: left;
  margin-bottom: 6px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
  
  h4 {
    font-size: 0.85rem;
    font-weight: 600;
    color: #334155;
    margin: 0 0 3px;
    line-height: 1.2;
    text-align: left;

    @media (min-width: 768px) {
      font-size: 1rem;
      margin: 0 0 4px;
    }
  }
  
  .round-subtitle {
    font-size: 0.7rem;
    color: #64748b;
    line-height: 1.1;
    text-align: left;

    @media (min-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

const MatchCard = styled.div`
  background: ${props => props.$isWinner ? '#dcfce7' : '#f8fafc'};
  border: 2px solid ${props => props.$isWinner ? '#16a34a' : '#e2e8f0'};
  border-radius: 8px;
  padding: 8px 10px;
  margin: 2px 0;
  transition: all 0.2s;
  position: relative;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .match-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
  }

  .player-name {
    font-weight: 600;
    color: ${props => props.$isWinner ? '#166534' : '#334155'};
    font-size: 0.8rem;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    text-align: left;

    @media (min-width: 768px) {
      font-size: 0.85rem;
    }
  }

  .player-seed {
    background: #29ba9b;
    color: white;
    padding: 1px 4px;
    border-radius: 3px;
    font-size: 0.65rem;
    font-weight: 600;
    margin-right: 4px;
    flex-shrink: 0;

    @media (min-width: 768px) {
      padding: 2px 6px;
      font-size: 0.7rem;
      margin-right: 6px;
    }
  }

  .match-score {
    font-weight: 700;
    color: ${props => props.$isWinner ? '#166534' : '#64748b'};
    font-size: 0.75rem;
    flex-shrink: 0;

    @media (min-width: 768px) {
      font-size: 0.8rem;
    }
  }

  .match-result {
    font-size: 0.7rem;
    color: ${props => props.$isWinner ? '#15803d' : '#94a3b8'};
    text-align: left;
    margin-top: 2px;
    line-height: 1.1;

    @media (min-width: 768px) {
      font-size: 0.75rem;
      margin-top: 4px;
    }
  }
`;

const EmptyMatch = styled.div`
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  padding: 12px 16px;
  margin: 4px 0;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  font-size: 0.85rem;
  font-style: italic;
`;

const BracketConnector = styled.div`
  position: absolute;
  border: 2px solid #cbd5e1;
  
  &.horizontal {
    height: 2px;
    width: 40px;
  }
  
  &.vertical {
    width: 2px;
    height: ${props => props.height}px;
  }
  
  &.corner-right {
    border-left: none;
    border-bottom: none;
    border-top-right-radius: 8px;
  }
  
  &.corner-left {
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 8px;
  }
`;

const ChampionshipSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 0;
  
  .championship-trophy {
    font-size: 2rem;
    margin-bottom: 6px;

    @media (min-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 8px;
    }
  }
  
  .championship-match {
    margin: 6px 0;
    width: 100%;

    @media (min-width: 768px) {
      margin: 8px 0;
    }
  }
`;

const GroupCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 16px;
    margin-bottom: 16px;
  }
`;

const GroupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e2e8f0;

  h4 {
    font-size: 1.1rem;
    font-weight: 400;
    color: #334155;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .group-status {
    font-size: 0.8rem;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: 500;
    background: #f0fdf4;
    color: #166534;
    border: 1px solid #bbf7d0;
  }
  .bracket-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .bracket-btn {
    padding: 6px 8px;
    border: none;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .edit-btn {
    background: #f0f9ff;
    color: #0369a1;
    border: 1px solid #bae6fd;
  }

  .edit-btn:hover {
    background: #e0f2fe;
    border-color: #7dd3fc;
  }

  .delete-btn {
    background: #fef2f2;
    color: #dc2626;
    border: 1px solid #fecaca;
  }

  .delete-btn:hover {
    background: #fee2e2;
    border-color: #fca5a5;
  }
  @media (max-width: 768px) {
    h4 {
      font-size: 1rem;
    }
    
    .bracket-btn {
      padding: 4px 6px;
      font-size: 0.7rem;
    }
  }
`;

const StandingsTable = styled.div`
  .standings-header {
    display: grid;
    grid-template-columns: 60px 1fr 120px 120px;
    gap: 12px;
    padding: 18px 16px;
    background: linear-gradient(135deg, #234255 0%, #29ba9b 100%);
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
    margin-bottom: 16px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    div:nth-child(2) {
      text-align: left;
    }

    @media (max-width: 1200px) {
      grid-template-columns: 50px 1fr 100px 100px;
      font-size: 0.7rem;
      gap: 6px;
      padding: 14px 14px;
    }
    
    @media (max-width: 768px) {
      grid-template-columns: 40px 1fr 80px 80px;
      font-size: 0.65rem;
      gap: 4px;
      padding: 12px 12px;
    }
  }
`;

const StandingsRow = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 120px 120px;
  gap: 12px;
  padding: 20px 16px;
  border-radius: 8px;
  font-size: 0.8rem;
  margin-bottom: 16px;
  background: ${props => props.$qualified ? '#dcfce7' : 'white'};
  border: 1px solid ${props => props.$qualified ? '#bbf7d0' : '#e2e8f0'};
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  &:hover {
    background: ${props => props.$qualified ? '#dcfce7' : '#f8fafc'};
    border-color: #29ba9b;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 50px 1fr 100px 100px;
    gap: 6px;
    padding: 14px 14px;
    font-size: 0.75rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 40px 1fr 80px 80px;
    gap: 4px;
    padding: 12px 12px;
    font-size: 0.7rem;
  }

  .rank-number {
    text-align: center;
    font-weight: 700;
    color: #29ba9b;
    font-size: 1.1em;
  }

  .player-info {
    display: flex;
    align-items: center;
    text-align: left;
    
    .player-name {
      font-weight: 500;
      color: #1e293b;
    }
  }

  .round-wins,
  .round-losses,
  .win-points,
  .loss-points {
    text-align: center;
    font-weight: 600;
    color: #1e293b;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .matches-record {
    text-align: center;
    font-weight: 600;
    color: #1e293b;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .points-record {
    text-align: center;
    font-weight: 600;
    color: #1e293b;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MatchTable = styled.div`
  margin-top: 20px;
  max-width: 100%;
  
  
  .match-schedule-header {
    display: grid;
    grid-template-columns: 45px 5fr 55px 60px 75px 85px 85px;
    gap: 12px;
    padding: 18px 16px;
    background: linear-gradient(135deg, #234255 0%, #29ba9b 100%);
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
    margin-bottom: 16px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 1200px) {
      grid-template-columns: 40px 4fr 50px 50px 65px 70px 70px;
      font-size: 0.7rem;
      gap: 6px;
      padding: 14px 14px;
    }
    
    @media (max-width: 768px) {
      grid-template-columns: 35px 3fr 45px 40px 55px 60px 60px;
      font-size: 0.65rem;
      gap: 4px;
      padding: 12px 12px;
    }
  }
`;

const MatchRow = styled.div`
  display: grid;
  grid-template-columns: 45px 5fr 55px 60px 75px 85px 85px;
  gap: 12px;
  padding: 20px 16px;
  border-radius: 8px;
  font-size: 0.8rem;
  margin-bottom: 16px;
  background: white;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  &:hover {
    background: #f8fafc;
    border-color: #29ba9b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: 40px 4fr 50px 50px 65px 70px 70px;
    font-size: 0.75rem;
    gap: 6px;
    padding: 16px 14px;
    margin-bottom: 12px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 35px 3fr 45px 40px 55px 60px 60px;
    font-size: 0.7rem;
    gap: 4px;
    padding: 14px 12px;
    margin-bottom: 10px;
  }
  
  .match-number {
    background: linear-gradient(135deg, #234255, #29ba9b);
    color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.7rem;
    box-shadow: 0 1px 2px rgba(59, 130, 246, 0.3);
    
    @media (max-width: 768px) {
      font-size: 0.6rem;
    }
  }
  
  .teams-horizontal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 0 4px;
    
    .team-column {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: center;
      min-width: 0;
      
      .team-name {
        font-weight: 500;
        color: #374151;
        font-size: 0.8rem;
        line-height: 1.4;
        display: block;
        width: 100%;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
        @media (max-width: 768px) {
          font-size: 0.75rem;
        }
      }
    }
    
    .vs-divider {
      margin: 0 8px;
      font-weight: 700;
      color:hsl(0, 78.80%, 52.00%);
      font-size: 0.9rem;
      
      @media (max-width: 768px) {
        margin: 0 4px;
        font-size: 0.8rem;
      }
    }
`;

const StickyActionBar = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: static;

  @media (max-width: 1023px) {
    margin-top: 32px;
  }
`;



// Category Card Components
const CategoryCard = styled.div`
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  margin-bottom: 16px;
  overflow: hidden;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: #cbd5e1;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

const CategoryHeader = styled.div`
  padding: 16px 20px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  border-bottom: ${props => props.$expanded ? '1px solid #e2e8f0' : 'none'};

  &:hover {
    background: #f8fafc;
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

const CategoryHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CategoryHeaderIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  flex-shrink: 0;
  background: ${props => {
    switch (props.category) {
      case 'mens-singles': return 'linear-gradient(135deg, #3b82f6, #1e40af)';
      case 'womens-singles': return 'linear-gradient(135deg, #ec4899, #be185d)';
      case 'mens-doubles': return 'linear-gradient(135deg, #10b981, #047857)';
      case 'womens-doubles': return 'linear-gradient(135deg, #f59e0b, #d97706)';
      case 'mixed-doubles': return 'linear-gradient(135deg, #8b5cf6, #7c3aed)';
      case 'senior-doubles': return 'linear-gradient(135deg, #ef4444, #dc2626)';
      default: return 'linear-gradient(135deg, #64748b, #475569)';
    }
  }};
  color: white;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const CategoryHeaderInfo = styled.div`
  flex: 1;
  min-width: 0;
  
  .category-title {
    font-size: 1.2rem;
    font-weight: 700;
    color: #334155;
    margin-bottom: 6px;
    line-height: 1.3;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
  
  .category-subtitle {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 0.9rem;
    color: #64748b;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      font-size: 0.85rem;
    }
  }
  
  .category-stats {
    display: flex;
    align-items: center;
    gap: 16px;
    
    @media (max-width: 768px) {
      gap: 12px;
    }
  }
  
  .stat-badge {
    display: flex;
    align-items: center;
    gap: 4px;
    background: #f1f5f9;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 500;
    
    svg {
      width: 14px;
      height: 14px;
      color: #29ba9b;
    }

    @media (max-width: 768px) {
      font-size: 0.75rem;
      padding: 3px 6px;
    }
  }
`;

const CategoryExpandIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
  
  svg {
    width: 16px;
    height: 16px;
    color: #64748b;
    transition: transform 0.2s ease;
    transform: ${props => props.$expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  }

  ${CategoryHeader}:hover & {
    background: #e2e8f0;
    border-color: #cbd5e1;
  }
`;

const CategoryBracketContent = styled.div`
  padding: 16px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  animation: ${props => props.$expanded ? 'slideDown 0.3s ease' : 'slideUp 0.3s ease'};
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const BracketPlaceholder = styled.div`
  text-align: center;
  padding: 32px 20px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  
  .placeholder-icon {
    font-size: 2.5rem;
    margin-bottom: 12px;
  }
  
  .placeholder-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #334155;
    margin-bottom: 8px;
  }
  
  .placeholder-text {
    font-size: 0.9rem;
    color: #64748b;
    line-height: 1.5;
    margin-bottom: 16px;
  }
  
  .bracket-info {
    background: #f8fafc;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    display: inline-block;
    min-width: 200px;
    
    .info-title {
      color: #29ba9b;
      font-weight: 600;
      margin-bottom: 8px;
      font-size: 0.9rem;
    }
    
    .info-details {
      font-size: 0.8rem;
      color: #64748b;
      line-height: 1.4;
      
      div {
        margin-bottom: 2px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 24px 16px;
    
    .placeholder-icon {
      font-size: 2rem;
    }
    
    .placeholder-title {
      font-size: 1rem;
    }
    
    .placeholder-text {
      font-size: 0.85rem;
    }
  }
`;

const StickyActionTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 16px;
`;

const PriceDisplay = styled.div`
  text-align: center;
  margin-bottom: 20px;

  .price {
    font-size: 2rem;
    font-weight: 800;
    color: #29ba9b;
    margin-bottom: 4px;
  }

  .prize-pool {
    font-size: 14px;
    color: #64748b;
  }
`;

const ParticipantInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #f8fafc;
  border-radius: 8px;
  margin-bottom: 20px;

  .label {
    font-size: 14px;
    color: #64748b;
  }

  .count {
    font-weight: 600;
    color: #234255;
  }
`;

// Remove the old modal components and update the main tournament list styled components
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 72px 16px 40px;
  animation: fadeIn 0.3s ease;

  @media (min-width: 768px) {
    padding: 90px 24px 48px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const PageTitle = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 2rem;
  color: #234255;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 800;
  letter-spacing: -0.5px;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
  }
`;

const PageDescription = styled.p`
  text-align: center;
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 3rem;
  padding: 0 16px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    padding: 0 8px;
  }
`;

const TournamentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 0;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`;

const TournamentCard = styled.div`
  background: white;
  border: 1px solid #f1f5f9;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: #e2e8f0;
  }
`;

const TournamentBanner = styled.div`
  position: relative;
  height: 160px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
  }
`;

const StatusBadge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  backdrop-filter: blur(8px);
  z-index: 1;
  
  ${props => {
    switch (props.$status.toLowerCase()) {
      case 'open':
        return `
          background: rgba(220, 252, 231, 0.9);
          color: #166534;
          border: 1px solid #86efac;
        `;
      case 'closed':
        return `
          background: rgba(254, 226, 226, 0.9);
          color: #991b1b;
          border: 1px solid #fca5a5;
        `;
      case 'upcoming':
        return `
          background: rgba(224, 242, 254, 0.9);
          color: #0369a1;
          border: 1px solid #7dd3fc;
        `;
      default:
        return `
          background: rgba(241, 245, 249, 0.9);
          color: #475569;
          border: 1px solid #e2e8f0;
        `;
    }
  }}
`;

const TournamentInfo = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TournamentName = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 12px;
  line-height: 1.3;
`;

const TournamentTypeDisplay = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #ecfdf5;
  border-radius: 25px;
  color: #059669;
  border: 1px solid #6ee7b7;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: #d1fae5;
    border-color: #34d399;
  }
  }};
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 16px;
  border: 1px solid ${props => {
    switch (props.type) {
      case 'beginner': return '#bbf7d0';
      case 'intermediate': return '#fde68a';
      case 'advanced': return '#fecaca';
      case 'open': return '#bae6fd';
      default: return '#e2e8f0';
    }
  }};
`;

const TournamentDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 8px;
  
  svg {
    width: 16px;
    height: 16px;
    color: #29ba9b;
    flex-shrink: 0;
  }
`;

const TournamentLocation = styled(TournamentDate)`
  margin-bottom: 8px;
`;

const TournamentSkillLevels = styled(TournamentDate)`
  margin-bottom: 8px;
  color: #64748b;
  font-size: 0.9rem;
  
  svg {
    width: 16px;
    height: 16px;
    color: #29ba9b;
    flex-shrink: 0;
  }
`;

const TournamentStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ParticipantCount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 0.9rem;

  svg {
    width: 18px;
    height: 18px;
    color: #29ba9b;
    flex-shrink: 0;
  }

  div {
    font-weight: 600;
    color: #234255;
  }
`;

const RegistrationFee = styled(ParticipantCount)`
  div {
    display: flex;
    align-items: center;
    gap: 4px;

    span:first-child {
      color: #234255;
      font-weight: 600;
    }

    /* remove this block */
    /* span:last-child {
      display: none;
    } */
  }
`;


const RegisterButton = styled.div`
  width: 100%;
  padding: 16px 24px;
  background: #e2e8f0;
  color: #94a3b8;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: not-allowed;
  transition: all 0.2s ease;
  opacity: 0.6;
  margin-top: 20px;
  position: relative;
  text-align: center;

  &:hover {
    &::after {
      content: 'Will be available in future implementation';
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 0.8rem;
      white-space: nowrap;
      z-index: 1000;
      margin-bottom: 8px;
    }
    
    &::before {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: 4px solid transparent;
      border-top-color: rgba(0, 0, 0, 0.8);
      margin-bottom: 4px;
    }
  }
`;

const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  color: #64748b;
  font-size: 1rem;

  @media (min-width: 768px) {
    min-height: 400px;
    font-size: 1.1rem;
  }
`;

const ErrorState = styled.div`
  text-align: center;
  padding: 16px;
  margin: 16px;
  background: #fee;
  color: #c00;
  border-radius: 8px;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    padding: 24px;
    margin: 24px;
    font-size: 1rem;
  }
`;

const SearchSection = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

const SearchBar = styled.div`
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

  input {
    width: 100%;
    padding: 12px 16px 12px 48px;
    border: 1.5px solid #e2e8f0;
    border-radius: 12px;
    font-size: 1rem;
    color: #1a1a1a;
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      border-color: #29ba9b;
      box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
    }

    &::placeholder {
      color: #94a3b8;
    }
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const Select = styled.select`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-size: 0.95rem;
  color: #1a1a1a;
  background: white;
  cursor: pointer;
  min-width: 140px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 48px 24px;
  background: #f8fafc;
  border-radius: 16px;
  border: 1px dashed #e2e8f0;
  color: #64748b;
  margin-top: 16px;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #334155;
    margin-bottom: 8px;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

function TrophyIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="#29ba9b"
      fillOpacity="0.1"
      stroke="#29ba9b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10" />
      <path d="M17 4v8a5 5 0 0 1-10 0V4" />
      <path d="M7 4c-3 0-4 2-4 3v1c0 2 2 3 4 3" />
      <path d="M17 4c3 0 4 2 4 3v1c0 2-2 3-4 3" />
    </svg>
  );
  }

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 13a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MoneyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
      <text x="12" y="14.5" dominantBaseline="middle" textAnchor="middle" fontSize="14" stroke="none" fill="currentColor" style={{fontWeight: "bold"}}>₱</text>
    </svg>
  );
}

function ParticipantIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/**
 * Database Schema Required:
 * 
 * Table: tournaments
 * - id: string (PK)
 * - name: string
 * - date: timestamp
 * - location: string
 * - status: enum ('UPCOMING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED')
 * - registrationFee: decimal
 * - maxParticipants: integer (8, 12, 16, 20, or 24 - organizer selected)
 * - currentParticipants: integer
 * - registrationDeadline: timestamp
 * - bannerUrl: string
 * - createdAt: timestamp
 * - updatedAt: timestamp
 * 
 * Table: tournament_divisions
 * - id: string (PK)
 * - tournamentId: string (FK to tournaments)
 * - name: string (e.g., "Men's Singles")
 * - maxParticipants: integer
 * - currentParticipants: integer
 * 
 * Table: tournament_registrations
 * - id: string (PK)
 * - tournamentId: string (FK to tournaments)
 * - divisionId: string (FK to tournament_divisions)
 * - playerId: string (FK to users/players)
 * - status: enum ('PENDING', 'APPROVED', 'REJECTED', 'CANCELLED')
 * - paymentStatus: enum ('PENDING', 'PAID', 'REFUNDED')
 * - registeredAt: timestamp
 * - approvedAt: timestamp (nullable)
 * - bracketId: string (FK to tournament_brackets, nullable)
 * 
 * Table: tournament_brackets
 * - id: string (PK)
 * - tournamentId: string (FK to tournaments)
 * - name: string (e.g., "Bracket A")
 * - maxPlayers: integer (default 6)
 * - currentPlayers: integer (default 0)
 * - createdAt: timestamp
 * 
 * Table: bracket_assignments
 * - id: string (PK)
 * - bracketId: string (FK to tournament_brackets)
 * - registrationId: string (FK to tournament_registrations)
 * - position: integer (1-6, player position in bracket)
 * - assignedAt: timestamp
 * 
 * API Endpoints Required:
 * GET /api/tournaments
 * - Query params: status (optional)
 * - Returns: List of tournaments with their divisions
 * 
 * GET /api/tournaments/:id
 * - Returns: Detailed tournament info with registrations
 * 
 * POST /api/tournaments/register
 * - Body: { tournamentId, divisionId, playerId }
 * - Returns: Registration confirmation
 */

/**
 * Tournament Page Component
 * 
 * Displays available tournaments with registration functionality
 * 
 * API Endpoints needed:
 * - GET /api/tournaments - Fetch tournaments with filters
 * - GET /api/tournaments/:id - Get tournament details
 * - POST /api/tournaments/:id/register - Register for tournament
 * - GET /api/tournaments/:id/participants - Get tournament participants
 * 
 * Query Parameters:
 * - status: Filter by tournament status
 * - division: Filter by division
 * - search: Search tournaments
 * - page: Pagination
 * - limit: Items per page
 */

const getTournamentStatus = (tournamentDate, registrationDeadline, currentParticipants, maxParticipants) => {
  const now = new Date();
  const tournamentTime = new Date(tournamentDate);
  const registrationTime = new Date(registrationDeadline);
  
  if (tournamentTime < now) {
    return 'Completed';
  } else if (now > registrationTime || currentParticipants >= maxParticipants) {
    return 'Closed';
  } else {
    return 'Open';
  }
};

// Registration Modal Styled Components
const RegistrationModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const RegistrationModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 0;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const RegistrationModalHeader = styled.div`
  padding: 24px 32px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RegistrationModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #234255;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #64748b;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f1f5f9;
    color: #334155;
  }
`;

const RegistrationModalBody = styled.div`
  padding: 32px;
  overflow-y: auto;
  flex: 1;
`;

const RegistrationFormSection = styled.div`
  margin-bottom: 24px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const RegistrationSectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #234255;
  margin-bottom: 16px;
  position: relative;
  padding-bottom: 8px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: #29ba9b;
  }
`;

const RegistrationFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const RegistrationLabel = styled.label`
  font-weight: 500;
  color: #374151;
  margin-bottom: 6px;
  font-size: 0.9rem;
`;

const RegistrationInput = styled.input`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
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

const RegistrationSelect = styled.select`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &:hover {
    border-color: #cbd5e0;
  }
`;

const RegistrationFormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FeeInfoBox = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const FeeInfoTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #234255;
  margin: 0 0 8px 0;
`;

const FeeInfoText = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
`;

const BankDetailsBox = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BankDetailsTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #234255;
  margin: 0 0 16px 0;
`;

const BankDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child {
    border-bottom: none;
  }
`;

const BankDetailLabel = styled.span`
  font-weight: 500;
  color: #64748b;
  font-size: 0.85rem;
  margin-bottom: 4px;
`;

const BankDetailValue = styled.span`
  font-weight: 600;
  color: #234255;
  font-size: 1rem;
`;

const FileUploadArea = styled.div`
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  background: #f8fafc;
  transition: all 0.2s ease;
  cursor: pointer;
`;

const ImagePreviewContainer = styled.div`
  position: relative;
  margin-top: 16px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
`;

const PreviewImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  display: block;
`;

const DeleteImageButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(239, 68, 68, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(239, 68, 68, 1);
    transform: scale(1.1);
  }
`;

const FileName = styled.div`
  padding: 8px 12px;
  background: #f1f5f9;
  font-size: 0.875rem;
  color: #64748b;
  border-top: 1px solid #e2e8f0;
`;

const PaymentMethodsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const QRCodeSection = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const QRCodeHeader = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #234255;
  margin: 0 0 16px 0;
`;

const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

const QRCodePlaceholder = styled.div`
  width: 200px;
  height: 200px;
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #64748b;
`;

const QRCodeIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 8px;
`;

const QRCodeText = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  margin: 4px 0;
  color: #64748b;
`;

const QRCodeSubtext = styled.p`
  font-size: 0.8rem;
  margin: 0;
  color: #94a3b8;
  text-align: center;
  line-height: 1.3;
  
  &:hover {
    border-color: #29ba9b;
    background: #f0fffe;
  }
`;

const FileUploadText = styled.p`
  color: #64748b;
  margin: 0;
  font-size: 0.9rem;
`;

const RegistrationSubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 24px;
  transition: all 0.2s ease;
  font-size: 1rem;
  
  &:hover:not(:disabled) {
    background: #25a589;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(41, 186, 155, 0.2);
  }
  
  &:disabled {
    background: #f1f5f9;
    cursor: not-allowed;
    color: #94a3b8;
  }
`;

// Player Selection Components
const PlayerSlot = styled.div`
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.$filled ? '#f0fffe' : '#f8fafc'};
  border-color: ${props => props.$filled ? '#29ba9b' : '#e2e8f0'};
  
  &:hover {
    border-color: #29ba9b;
    background: #f0fffe;
  }
`;

const PlayerSlotContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemovePlayerButton = styled.button`
  background: transparent;
  color: #ef4444;
  border: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.2s ease;
  margin-left: 8px;
  
  &:hover {
    color: #dc2626;
    transform: scale(1.1);
  }
`;

const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayerName = styled.span`
  font-weight: 600;
  color: #234255;
  font-size: 0.95rem;
`;

const PlayerDetails = styled.span`
  font-size: 0.85rem;
  color: #64748b;
  margin-top: 2px;
`;

const PlayerSlotLabel = styled.span`
  font-size: 0.9rem;
  color: #64748b;
  font-style: italic;
`;

const AddPlayerIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #29ba9b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`;

const PlayerSelectionModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  padding: 20px;
`;

const PlayerSelectionContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 0;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const PlayerSelectionHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlayerSelectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #234255;
  margin: 0;
`;

const PlayerSelectionBody = styled.div`
  padding: 20px 24px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const PlayerSearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  margin-bottom: 16px;
  flex-shrink: 0;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
`;

const PlayerListItem = styled.div`
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #29ba9b;
    background: #f0fffe;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const PlayerListInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const PlayerListName = styled.span`
  font-weight: 600;
  color: #234255;
`;

const PlayerListMeta = styled.div`
  display: block;
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.4;
`;

const PlayerListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const GenderBadge = styled.span`
  background: ${props => props.$gender === 'male' ? '#dbeafe' : '#fce7f3'};
  color: ${props => props.$gender === 'male' ? '#1e40af' : '#be185d'};
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
`;

const RequiredBadge = styled.span`
  background: #fef3c7;
  color: #92400e;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const TournamentActionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ActionButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant'
})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid;
  min-width: 100px;
  justify-content: center;
  
  svg {
    width: 14px;
    height: 14px;
  }
  
  ${props => props.variant === 'primary' ? `
    background: #29ba9b;
    color: white;
    border-color: #29ba9b;
    
    &:hover {
      background: #239b83;
      transform: translateY(-1px);
    }
  ` : `
    background: #f1f5f9;
    color: #475569;
    border-color: #e2e8f0;
    
    &:hover {
      background: #e2e8f0;
      border-color: #cbd5e1;
    }
  `}
`;

function Tournament() {
  const { isAuthenticated, user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState('');
  const [selectedFeeRange, setSelectedFeeRange] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
const [selectedTournament, setSelectedTournament] = useState(null);

  // Add state for detailed view
  const [showDetailedView, setShowDetailedView] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  
  // Add state for expanded categories (multiple can be open)
  const [expandedCategories, setExpandedCategories] = useState({});
  
  // Add state for round robin and elimination categories
  const [roundRobinCategories, setRoundRobinCategories] = useState({});
  const [eliminationCategories, setEliminationCategories] = useState({});
  const [availableBrackets, setAvailableBrackets] = useState({});
  const [bracketMode, setBracketMode] = useState({}); // 4 or 8 brackets per category
  const [selectedBrackets, setSelectedBrackets] = useState({}); // Selected bracket per category
  const [showBracketModal, setShowBracketModal] = useState(false);
  const [pendingBracketChange, setPendingBracketChange] = useState({ categoryId: null, newMode: null });
  const [isEditingBracket, setIsEditingBracket] = useState({});

  // Add state for players search
  const [playersSearchTerm, setPlayersSearchTerm] = useState('');
  
  // Add state for player tabs (pending/approved)
  const [activePlayerTab, setActivePlayerTab] = useState('approved');
  
  // Add state for selected category in players section
  const [selectedPlayerCategory, setSelectedPlayerCategory] = useState('all');
  
  // Registration modal state
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [registrationTournament, setRegistrationTournament] = useState(null);
  
  // View form modal state (for profile view)
  const [showViewFormModal, setShowViewFormModal] = useState(false);
  const [viewFormTournament, setViewFormTournament] = useState(null);
// OR, if it's derived from tournament data
const topPlayers = selectedTournament?.topPlayers || {};


  
  // Player selection state
  const [showPlayerSelectionModal, setShowPlayerSelectionModal] = useState(false);
  const [playerSelectionType, setPlayerSelectionType] = useState(''); // 'partner', 'team-0', 'team-1', etc.
  const [playerSearchTerm, setPlayerSearchTerm] = useState('');
const feeRanges = [
  { label: "FREE", min: 0, max: 0 },
  { label: "₱1–₱500", min: 1, max: 500 },
  { label: "₱501–₱1000", min: 501, max: 1000 },
  { label: "₱1001+", min: 1001, max: Infinity },
];


  useEffect(() => {
  fetchTournaments();
}, []);

const fetchTournaments = async () => {
  try {
    setLoading(true);
    setError(null);

    const res = await fetch("/api/tournaments"); // hits backend
    if (!res.ok) throw new Error("Failed to fetch tournaments");

    const data = await res.json();
    setTournaments(data);
  } catch (err) {
    console.error("Error fetching tournaments:", err);
    setError("Unable to load tournaments.");
  } finally {
    setLoading(false);
  }
};

// Helper function to check if a category is allowed for the player


  // Get registered players from selected tournament
  const registeredPlayers = selectedTournament?.registrations?.filter(reg => reg.status === 'approved') || [];
  const [registrationForm, setRegistrationForm] = useState({
    category: '',
    // Player information
    primaryPlayer: {
      pplId: '',
      name: '',
      gender: 'male',
      duprRatings: {
        singles: '',
        doubles: ''
      }
    },
    partner: {
      pplId: '',
      name: '',
      gender: ''
    },
    teamMembers: [
      { pplId: '', name: '', gender: 'male', required: true, label: 'Team Player 1' },
      { pplId: '', name: '', gender: 'female', required: true, label: 'Team Player 2' },
      { pplId: '', name: '', gender: 'male', required: true, label: 'Team Player 3' },
      { pplId: '', name: '', gender: 'female', required: false, label: 'Additional Player 1 (Optional)' },
      { pplId: '', name: '', gender: 'male', required: false, label: 'Additional Player 2 (Optional)' }
    ],
    // Contact information
    teamName: '',
    email: '',
    contactNumber: '',
    proofOfPayment: null
  });

  // Calculate standings from match data
  const calculateStandings = (matches, players) => {
    console.log('🔢 calculateStandings called with:', { matches, players });
    
    // Initialize standings for all players
    const standings = players.map(player => ({
      player,
      wins: 0,
      losses: 0,
      pointsFor: 0,
      pointsAgainst: 0,
      pointDifferential: 0
    }));
    
    // Process each match
    Object.entries(matches || {}).forEach(([matchKey, match]) => {
      const player1 = match.player1;
      const player2 = match.player2;
      const score1 = parseInt(match.game1Player1) || 0;
      const score2 = parseInt(match.game1Player2) || 0;
      
      if (player1 && player2) {
        const p1Standing = standings.find(s => s.player === player1);
        const p2Standing = standings.find(s => s.player === player2);
        
        if (p1Standing && p2Standing) {
          // Update points
          p1Standing.pointsFor += score1;
          p1Standing.pointsAgainst += score2;
          p2Standing.pointsFor += score2;
          p2Standing.pointsAgainst += score1;
          
          // Update wins/losses
          if (score1 > score2) {
            p1Standing.wins++;
            p2Standing.losses++;
          } else if (score2 > score1) {
            p2Standing.wins++;
            p1Standing.losses++;
          }
        }
      }
    });
    
    // Calculate point differentials and sort
    standings.forEach(standing => {
      standing.pointDifferential = standing.pointsFor - standing.pointsAgainst;
    });
    
    // Sort by wins (descending), then by point differential (descending)
    standings.sort((a, b) => {
      if (b.wins !== a.wins) return b.wins - a.wins;
      return b.pointDifferential - a.pointDifferential;
    });
    
    console.log('📊 Calculated standings:', standings);
    return standings;
  };
  
  // Initialize user's gender in registration form
  useEffect(() => {
    if (user && user.gender) {
      setRegistrationForm(prev => ({
        ...prev,
        primaryPlayer: {
          ...prev.primaryPlayer,
          gender: user.gender
        }
      }));
    }
  }, [user]);
  
  // Force re-render of category dropdown when player ages or DUPR ratings change
  const [categoryFilterKey, setCategoryFilterKey] = useState(0);
  useEffect(() => {
    // Trigger re-render of category dropdown when player information changes
    setCategoryFilterKey(prev => prev + 1);
  }, [
    registrationForm.primaryPlayer?.age,
    registrationForm.primaryPlayer?.duprRatings,
    registrationForm.partner?.age,
    registrationForm.partner?.duprRatings,
    registrationForm.teamMembers
  ]);
  

const filteredTournaments = tournaments.filter((tournament) => {
  // 1️⃣ Search by name or location
  const search = (searchTerm || "").toLowerCase();
  const name = (tournament.tournamentName || "").toLowerCase();
  const location = ((tournament.venueCity || "") + " " + (tournament.venueState || "")).toLowerCase();
  const matchesSearch = name.includes(search) || location.includes(search);

  // 2️⃣ Tier/category filter
  const matchesTier = !selectedTier || tournament.tournamentCategories?.some((category) => {
    if (!category || !category.skillLevel) return false;

    if (selectedTier.startsWith("open-")) {
      const targetTier = parseInt(selectedTier.split("-")[1]);
      const skillLevel = category.skillLevel.toLowerCase();
      const categoryTier = Number(category.tier) || 1;
      return skillLevel === "open" && categoryTier === targetTier;
    } else {
      return category.skillLevel.toLowerCase() === selectedTier.toLowerCase();
    }
  });

  // 3️⃣ Fee range filter
  const matchesFeeRange = !selectedFeeRange || (() => {
    const minFee = tournament.entryFeeMin ?? 0;
    const maxFee = tournament.entryFeeMax ?? minFee;
    const range = feeRanges[parseInt(selectedFeeRange)];
    if (!range) return true;
    return maxFee >= range.min && minFee <= range.max;
  })();

  return matchesSearch && matchesTier && matchesFeeRange;
});


  useEffect(() => {
    fetchTournaments();
  }, []);

  // Handle incoming tournament data from navigation (e.g., from Profile page)
  useEffect(() => {
    if (location.state?.selectedTournament) {
      const tournament = location.state.selectedTournament;
      setSelectedTournament(tournament);
      setShowDetailedView(true);
      
      // Optionally expand first category by default
      if (tournament.tournamentCategories) {
        const firstCategory = Object.keys(tournament.tournamentCategories)[0];
        if (firstCategory) {
          setExpandedCategories({ [firstCategory]: true });
        }
      }
    }
  }, [location.state]);

  
useEffect(() => {
  const params = new URLSearchParams(location.search);
  if (params.get("showRegistration") === "true") {
    setShowRegistrationForm(true);
  }
}, [location.search]);

  // Handle tournament card click to show detailed view
  const handleRegisterClick = (tournament) => {
  // Registration temporarily disabled
  console.log('Registration is temporarily disabled');
  return;
  
  // 1️⃣ Set the selected tournament
  setSelectedTournament(tournament);

  // 2️⃣ Show tournament details
  setShowDetailedView(true);

  // 3️⃣ Expand the first category by default (optional)
  if (tournament.tournamentCategories) {
    const firstCategory = Object.keys(tournament.tournamentCategories)[0];
    if (firstCategory) {
      setExpandedCategories({ [firstCategory]: true });
    }
  }

  // 4️⃣ Open registration form/modal
  setShowRegistrationForm(true); // <-- your registration form state
};


  // Handle closing detailed view
  const handleCloseDetailedView = () => {
    // Check if we came from Profile page
    if (location.state?.fromProfile) {
      // Navigate back to Profile page
      navigate('/profile', { state: { activeTab: 'tournaments' } });
    } else {
      // Regular close for tournaments accessed from tournament list
      setShowDetailedView(false);
      setSelectedTournament(null);
      setActiveTab('details'); // Reset to details tab
      setExpandedCategories({}); // Reset expanded categories
      setPlayersSearchTerm(''); // Reset players search
    }
  };

  // Toggle category expansion
  const toggleCategoryExpansion = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // Bracket editing functions
  const handleEditBracket = (categoryId, bracket) => {
    const editKey = `${categoryId}-${bracket}`;
    setIsEditingBracket(prev => ({
      ...prev,
      [editKey]: !prev[editKey]
    }));
  };

  // saveChanges function removed - not needed for player view

  // Get category icon for cards
  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case 'mens-singles': return '👨';
      case 'womens-singles': return '👩';
      case 'mens-doubles': return '👥';
      case 'womens-doubles': return '👭';
      case 'mixed-doubles': return '👫';
      case 'senior-doubles': return '🎖️';
      default: return '🏓';
    }
  };

  /**
   * Handles tournament registration
   * @param {string} tournamentId - Tournament identifier
   */
const handleRegister = async (tournamentId) => {
  // Registration temporarily disabled
  console.log('Registration is temporarily disabled');
  return;
  
  // Wait for auth loading to complete
  if (authLoading) return;

  // Check auth state
  if (!isAuthenticated) {
    setShowAuthModal(true);
    return;
  }

  // Find the tournament
  let tournament = tournaments.find(t => t.id === tournamentId);
  if (!tournament && selectedTournament && selectedTournament.id === tournamentId) {
    tournament = selectedTournament;
  }

  if (tournament) {
    setRegistrationTournament(tournament);
    setShowRegistrationModal(true);

    // Reset form with primary player info from user
    setRegistrationForm({
      category: '',
      primaryPlayer: {
        pplId: user.pplId || 'PPL999',
        name: user.name || `${user.firstName} ${user.lastName}` || '',
        gender: user.gender || 'male',
        age: user.birthDate ? new Date().getFullYear() - new Date(user.birthDate).getFullYear() : 25,
        duprId: user.duprId || '',
      },
      partner: { pplId: '', name: '', gender: '' },
      teamMembers: [
        { pplId: '', name: '', gender: 'male', required: true, label: 'Male Player 2' },
        { pplId: '', name: '', gender: 'female', required: true, label: 'Female Player 1' },
        { pplId: '', name: '', gender: 'female', required: true, label: 'Female Player 2' },
        { pplId: '', name: '', gender: 'male', required: false, label: 'Optional Player 1' },
        { pplId: '', name: '', gender: 'female', required: false, label: 'Optional Player 2' }
      ],
      name: user.name || '',
      email: user.email || '',
      contactNumber: user.contactNumber || '',
      proofOfPayment: null,
      status: 'pending'
    });
  }
};

  /**
   * Handle viewing tournament registration form (read-only preview for profile)
   * @param {string} tournamentId - Tournament identifier
   */
  const handleViewForm = async (tournamentId) => {
  try {
    const res = await axios.get(`/api/tournaments/${tournamentId}`);
    setViewFormTournament(res.data); // This is the actual tournament from backend
    setShowViewFormModal(true);
  } catch (err) {
    console.error(err);
    showNotification("Failed to load tournament form", "error");
  }
};



  // Close view form modal
  const closeViewFormModal = () => {
    setShowViewFormModal(false);
    setViewFormTournament(null);
  };
// Inside your Tournament.jsx component
const handleTournamentClick = (tournament) => {
  setSelectedTournament(tournament);       // Set the clicked tournament
  setShowDetailedView(true);               // Open tournament details view
  setExpandedCategories({});               // Optional: collapse all categories initially
};

  // Registration form handlers
  const handleRegistrationFormChange = (field, value) => {
    setRegistrationForm(prev => {
      const updated = {
        ...prev,
        [field]: value
      };
      
      // Check if the current category is still valid when player ages change
      const ageRelatedFields = ['primaryPlayer', 'partner', 'teamMembers'];
      if (ageRelatedFields.some(f => field.startsWith(f)) && prev.category && registrationTournament) {
        const selectedCategory = Object.values(registrationTournament?.tournamentCategories || {})
          .find(cat => cat.id === prev.category);
        
        if (selectedCategory) {
          // Create a temporary form state to check age eligibility
          const tempForm = { ...prev, [field]: value };
          const tempAges = [];
          
          // Get all player ages from the temporary form
          if (tempForm.primaryPlayer?.age) {
            tempAges.push(tempForm.primaryPlayer.age);
          } else if (user?.age) {
            tempAges.push(user.age);
          }
          
          if (tempForm.partner?.age) {
            tempAges.push(tempForm.partner.age);
          }
          
          if (Array.isArray(tempForm.teamMembers)) {
            tempForm.teamMembers.forEach(member => {
              if (member.age) {
                tempAges.push(member.age);
              }
            });
          }
          
          // Check if all players still meet the age requirement
          const categoryAgeRequirement = selectedCategory.ageGroup || selectedCategory.ageCategory;
          if (categoryAgeRequirement && tempAges.length > 0) {
            const allPlayersEligible = tempAges.every(age => isAgeEligibleForCategory(age, categoryAgeRequirement));
            if (!allPlayersEligible) {
              console.log(`🚫 Clearing category "${selectedCategory.name}" - players no longer meet age requirement (${categoryAgeRequirement}). Player ages: [${tempAges.join(', ')}]`);
              updated.category = ''; // Clear the invalid category
            }
          }
          
          // Check if all players still meet the DUPR requirement
          const skillLevel = selectedCategory.skillLevel;
          if (skillLevel && updated.category) { // Only check if category wasn't already cleared
            const tempDuprRatings = [];
            
            // Get all player DUPR ratings from the temporary form
            if (tempForm.primaryPlayer?.duprRatings) {
              const categoryType = getCategoryType(selectedCategory.name);
              let ratingType = 'singles';
              if (categoryType === 'doubles') {
                ratingType = 'doubles'; // DUPR uses one doubles rating for all doubles play
              }
              const rating = tempForm.primaryPlayer.duprRatings[ratingType];
              if (rating) tempDuprRatings.push(parseFloat(rating));
            } else if (user?.duprRatings) {
              const categoryType = getCategoryType(selectedCategory.name);
              let ratingType = 'Singles';
              if (categoryType === 'doubles') {
                ratingType = 'Doubles'; // DUPR uses one doubles rating for all doubles play
              }
              const userRating = user.duprRatings.find(r => r.type === ratingType);
              if (userRating?.rating) tempDuprRatings.push(parseFloat(userRating.rating));
            }
            
            if (tempForm.partner?.duprRatings) {
              const categoryType = getCategoryType(selectedCategory.name);
              let ratingType = categoryType === 'doubles' ? 'doubles' : 'singles';
              const rating = tempForm.partner.duprRatings[ratingType];
              if (rating) tempDuprRatings.push(parseFloat(rating));
            }
            
            if (Array.isArray(tempForm.teamMembers)) {
              tempForm.teamMembers.forEach(member => {
                if (member.duprRatings) {
                  const ratingType = 'singles'; // Team events typically use singles ratings
                  const rating = member.duprRatings[ratingType];
                  if (rating) tempDuprRatings.push(parseFloat(rating));
                }
              });
            }
            
            // Check if all players meet the DUPR requirement
            if (tempDuprRatings.length > 0) {
              const allPlayersDuprEligible = tempDuprRatings.every(rating => isDuprEligibleForSkillLevel(rating, skillLevel));
              if (!allPlayersDuprEligible) {
                console.log(`🚫 Clearing category "${selectedCategory.name}" - players no longer meet DUPR requirement for ${skillLevel} level. Player DUPR ratings: [${tempDuprRatings.join(', ')}]`);
                updated.category = ''; // Clear the invalid category
              }
            }
          }
        }
      }
      
      // Reset team composition when category changes
      if (field === 'category' && value && registrationTournament) {
        try {
          const selectedCategory = Object.values(registrationTournament?.tournamentCategories || {})
            .find(cat => cat.id === value);
          const categoryType = getCategoryType(selectedCategory?.name || '');
          
          // Auto-adjust primary player gender for gendered categories
          if (selectedCategory?.name) {
            const categoryName = selectedCategory.name.toLowerCase();
            if (categoryName.includes("women's") || categoryName.includes("female")) {
              updated.primaryPlayer = {
                ...prev.primaryPlayer,
                gender: 'female'
              };
            } else if (categoryName.includes("men's") || categoryName.includes("male")) {
              updated.primaryPlayer = {
                ...prev.primaryPlayer,
                gender: 'male'
              };
            }
            // Mixed categories keep current gender
          }
          
          if (categoryType === 'team') {
            const composition = getTeamComposition(updated.primaryPlayer?.gender || prev.primaryPlayer?.gender || 'male');
            if (Array.isArray(composition)) {
              updated.teamMembers = composition.map(comp => ({
                pplId: '',
                name: '',
                gender: comp.gender || 'male',
                required: comp.required || false,
                label: comp.label || 'Team Member'
              }));
            }
          }
          
          // Reset partner for doubles
          if (categoryType === 'doubles') {
            updated.partner = {
              pplId: '',
              name: '',
              gender: ''
            };
          }
        } catch (error) {
          console.error('Error updating registration form:', error);
          // Keep the original teamMembers if there's an error
        }
      }
      
      return updated;
    });
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type and size
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a valid image (JPG, PNG) or PDF file');
        return;
      }
      
      if (file.size > maxSize) {
        alert('File size must be less than 5MB');
        return;
      }
      
      setRegistrationForm(prev => ({
        ...prev,
        proofOfPayment: file
      }));
    }
  };

  const handleDeleteProofOfPayment = () => {
    setRegistrationForm(prev => ({
      ...prev,
      proofOfPayment: null
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // TODO: Replace with actual API call
      // const formData = new FormData();
      // formData.append('tournamentId', registrationTournament.id);
      // formData.append('category', registrationForm.category);
      // formData.append('division', registrationForm.division);
      // formData.append('level', registrationForm.level);
      // formData.append('name', registrationForm.name);
      // formData.append('email', registrationForm.email);
      // formData.append('contactNumber', registrationForm.contactNumber);
      // if (registrationForm.proofOfPayment) {
      //   formData.append('proofOfPayment', registrationForm.proofOfPayment);
      // }
      // await api.post('/tournaments/register', formData);
      
      console.log('Registration submitted:', {
        tournament: registrationTournament.name,
        form: registrationForm
      });
      
      // Close modal and show success message
      setShowRegistrationModal(false);
      alert('Registration submitted successfully! You will receive a confirmation email shortly.');
      
    } catch (err) {
      console.error('Registration failed:', err);
      alert('Registration failed. Please try again.');
    }
  };

  const closeRegistrationModal = () => {
    setShowRegistrationModal(false);
    setRegistrationTournament(null);
  };

  // Helper function to check if a player's age meets the category age requirement
  const isAgeEligibleForCategory = (playerAge, categoryAgeRequirement) => {
    if (!categoryAgeRequirement || !playerAge) {
      return true; // No age restriction or age not specified
    }
    
    // Parse age requirement (e.g., "18+", "35+", "50+")
    const minAge = parseInt(categoryAgeRequirement.replace('+', ''));
    return playerAge >= minAge;
  };

  // Helper function to get all player ages for the current registration
  const getAllPlayerAges = () => {
    const ages = [];
    
    // Add primary player age
    if (registrationForm.primaryPlayer?.age) {
      ages.push(registrationForm.primaryPlayer.age);
    } else if (user?.age) {
      ages.push(user.age);
    }
    
    // Add partner age for doubles
    if (registrationForm.partner?.age) {
      ages.push(registrationForm.partner.age);
    }
    
    // Add team member ages for team categories
    if (Array.isArray(registrationForm.teamMembers)) {
      registrationForm.teamMembers.forEach(member => {
        if (member.age) {
          ages.push(member.age);
        }
      });
    }
    
    return ages;
  };

  // Helper function to check if a player's DUPR rating meets the skill level requirement
  const isDuprEligibleForSkillLevel = (duprRating, skillLevel) => {
    if (!skillLevel) {
      return true; // No skill level restriction
    }
    
    // Convert DUPR rating to number, handle empty/null values
    const rating = duprRating ? parseFloat(duprRating) : null;
    
    switch (skillLevel.toLowerCase()) {
      case 'beginner':
        // Beginner: no DUPR to 3.0
        return rating === null || rating <= 3.0;
      case 'intermediate':
        // Intermediate: 2.0 to 3.9 (no DUPR needed)
        return rating === null || (rating >= 2.0 && rating <= 3.9);
      case 'advanced':
        // Advanced: 3.5 to 4.5 (no DUPR needed)
        return rating === null || (rating >= 3.5 && rating <= 4.5);
      case 'open':
      case 'open-tier-1':
      case 'open-tier-2':
      case 'open-tier-3':
        // Open: 4.0 & above (no DUPR needed)
        return rating === null || rating >= 4.0;
      default:
        return true; // Unknown skill level, allow by default
    }
  };

  // Helper function to get all player DUPR ratings for the current registration
  const getAllPlayerDuprRatings = (categoryType) => {
    const ratings = [];
    
    // Determine which DUPR rating type to check based on category
    let duprType = 'singles';
    if (categoryType && categoryType.toLowerCase().includes('doubles')) {
      duprType = 'doubles'; // DUPR uses one doubles rating for all doubles play
    }
    
    // Add primary player DUPR rating
    if (registrationForm.primaryPlayer?.duprRatings?.[duprType]) {
      ratings.push(parseFloat(registrationForm.primaryPlayer.duprRatings[duprType]));
    } else if (user?.duprRatings) {
      // Handle user DUPR ratings from Profile structure
      const ratingTypeMap = {
        'singles': 'Singles',
        'doubles': 'Doubles'
      };
      const userRating = user.duprRatings.find(r => r.type === ratingTypeMap[duprType]);
      if (userRating?.rating) {
        ratings.push(parseFloat(userRating.rating));
      }
    }
    
    // Add partner DUPR rating for doubles
    if (registrationForm.partner?.duprRatings?.[duprType]) {
      ratings.push(parseFloat(registrationForm.partner.duprRatings[duprType]));
    }
    
    // Add team member DUPR ratings for team categories
    if (Array.isArray(registrationForm.teamMembers)) {
      registrationForm.teamMembers.forEach(member => {
        if (member.duprRatings?.[duprType]) {
          ratings.push(parseFloat(member.duprRatings[duprType]));
        }
      });
    }
    
    return ratings;
  };

  // Helper function to check if a category is allowed for the user's gender
  const isCategoryAllowedForGender = (categoryName, userGender) => {
    console.log(`🔍 Gender Filter Debug: categoryName="${categoryName}", userGender="${userGender}" (type: ${typeof userGender})`);
    
    if (!categoryName || !userGender) {
      console.log(`⚠️ Missing data: categoryName=${!!categoryName}, userGender=${!!userGender} - returning true`);
      return true; // Allow if no restrictions
    }
    
    const categoryLower = categoryName.toLowerCase();
    const userGenderLower = userGender.toLowerCase().trim();
    
    console.log(`🔍 Processing: categoryLower="${categoryLower}", userGenderLower="${userGenderLower}"`);
    
    // For male users: only allow men's, mixed, and team categories
    if (userGenderLower === 'male') {
      console.log(`👨 Male user detected - checking category: "${categoryLower}"`);
      
      // Allow team categories
      if (categoryLower.includes("team")) {
        console.log(`✅ Male: Team category allowed`);
        return true;
      }
      
      // Allow mixed categories
      if (categoryLower.includes("mixed")) {
        console.log(`✅ Male: Mixed category allowed`);
        return true;
      }
      
      // First check if it's a women's category (to avoid false positive with "men" inside "women")
      if (categoryLower.includes("women's") || categoryLower.includes("women") || categoryLower.includes("female")) {
        console.log(`❌ Male: Women's category denied - "${categoryLower}"`);
        return false;
      }
      
      // Allow men's categories (now safe to check after excluding women's)
      if (categoryLower.includes("men's") || categoryLower.includes("men") || categoryLower.includes("male")) {
        console.log(`✅ Male: Men's category allowed`);
        return true;
      }
      
      // Deny all other categories (unmarked categories)
      console.log(`❌ Male: Category denied - "${categoryLower}"`);
      return false;
    }
    
    // For female users: only allow women's, mixed, and team categories
    if (userGenderLower === 'female') {
      console.log(`👩 Female user detected - checking category: "${categoryLower}"`);
      
      // Allow team categories
      if (categoryLower.includes("team")) {
        console.log(`✅ Female: Team category allowed`);
        return true;
      }
      
      // Allow mixed categories
      if (categoryLower.includes("mixed")) {
        console.log(`✅ Female: Mixed category allowed`);
        return true;
      }
      
      // Allow women's categories
      if (categoryLower.includes("women's") || categoryLower.includes("women") || categoryLower.includes("female")) {
        console.log(`✅ Female: Women's category allowed`);
        return true;
      }
      
      // Deny all other categories (including men's and unmarked categories)
      console.log(`❌ Female: Category denied - "${categoryLower}"`);
      return false;
    }
    
    // Default: allow if no specific gender provided (for safety)
    console.log(`⚠️ Unknown gender "${userGenderLower}" - returning true by default`);
    return true;
  };

  // Enhanced function to check if a category is allowed based on both gender and age
  const isCategoryAllowed = (category, userGender) => {
    // First check gender eligibility
    const genderAllowed = isCategoryAllowedForGender(category.name, userGender);
    if (!genderAllowed) {
      console.log(`❌ Category "${category.name}" denied due to gender restriction`);
      return false;
    }
    
    // Check age eligibility for all players
    const playerAges = getAllPlayerAges();
    const categoryAgeRequirement = category.ageGroup || category.ageCategory;
    
    // Check age requirement if specified
    if (categoryAgeRequirement && playerAges.length > 0) {
      const allPlayersAgeEligible = playerAges.every(age => isAgeEligibleForCategory(age, categoryAgeRequirement));
      if (!allPlayersAgeEligible) {
        console.log(`❌ Category "${category.name}" denied - some players don't meet age requirement (${categoryAgeRequirement}). Player ages: [${playerAges.join(', ')}]`);
        return false;
      }
    }
    
    // Check DUPR eligibility for all players based on skill level
    const skillLevel = category.skillLevel;
    if (skillLevel) {
      const playerDuprRatings = getAllPlayerDuprRatings(category.name);
      
      // If players have DUPR ratings, check eligibility
      if (playerDuprRatings.length > 0) {
        const allPlayersDuprEligible = playerDuprRatings.every(rating => isDuprEligibleForSkillLevel(rating, skillLevel));
        if (!allPlayersDuprEligible) {
          console.log(`❌ Category "${category.name}" denied - some players don't meet DUPR requirement for ${skillLevel} level. Player DUPR ratings: [${playerDuprRatings.join(', ')}]`);
          return false;
        }
      }
    }
    
    console.log(`✅ Category "${category.name}" allowed - all eligibility checks passed`);
    return true;
  };



  // Helper function to get tournament type icon
  const getTournamentTypeIcon = (type) => {
    switch (type) {
      case 'beginner': return '🌱';
      case 'intermediate': return '⚡';
      case 'advanced': return '🔥';
      case 'open': return '🏆';
      default: return '🏓';
    }
  };

  // Helper function to format date range
  const formatDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (start.toDateString() === end.toDateString()) {
      return start.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } else {
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      return `${start.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric' 
      })} - ${end.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      })} (${diffDays} days)`;
    }
  };

  // Helper function to determine category type
  const getCategoryType = (categoryName) => {
    if (!categoryName) return 'singles';
    const name = categoryName.toLowerCase();
    if (name.includes('doubles')) return 'doubles';
    if (name.includes('team')) return 'team';
    return 'singles';
  };

  // Function to get DUPR rating based on category type
  const getDuprRatingForCategory = (categoryName, duprRatings) => {
    if (!categoryName || !duprRatings) return '';
    
    const name = categoryName.toLowerCase();
    if (name.includes('doubles')) {
      // DUPR uses one doubles rating for all doubles play
      return duprRatings.doubles || '';
    } else {
      // Singles category
      return duprRatings.singles || '';
    }
  };

  // Helper function to get allowed genders for player selection
  const getAllowedGenders = (categoryName, primaryPlayerGender) => {
    if (!categoryName) return ['male', 'female'];
    const name = categoryName.toLowerCase();
    
    if (name.includes("men's") && !name.includes('mixed')) return ['male'];
    if (name.includes("women's") && !name.includes('mixed')) return ['female'];
    if (name.includes('mixed')) {
      // For mixed categories, only allow opposite gender partners
      return primaryPlayerGender === 'male' ? ['female'] : ['male'];
    }
    
    return ['male', 'female'];
  };

  // Helper function to get required team composition
  const getTeamComposition = (primaryPlayerGender) => {
    try {
      // Check if current tournament has specific team composition rules
      if (registrationTournament && registrationTournament.id === 'team-championship-2024') {
        // Team Championship 2024: 1 male primary + 1 male teammate + 2 females + 2 optional = 6 total
        if (primaryPlayerGender === 'male') {
          return [
            { gender: 'male', required: true, label: 'Required Male Player' },
            { gender: 'female', required: true, label: 'Required Female Player 1' },
            { gender: 'female', required: true, label: 'Required Female Player 2' },
            { gender: 'any', required: false, label: 'Optional Player 1' },
            { gender: 'any', required: false, label: 'Optional Player 2' }
          ];
        } else {
          return [
            { gender: 'female', required: true, label: 'Required Female Player' },
            { gender: 'male', required: true, label: 'Required Male Player 1' },
            { gender: 'male', required: true, label: 'Required Male Player 2' },
            { gender: 'any', required: false, label: 'Optional Player 1' },
            { gender: 'any', required: false, label: 'Optional Player 2' }
          ];
        }
      }
      
      // Default team composition for other tournaments
      if (primaryPlayerGender === 'male') {
        // Male primary (1 male) + 1 male teammate + 2 females + 2 optional = 6 total
        return [
          { gender: 'male', required: true, label: 'Required Male Player' },
          { gender: 'female', required: true, label: 'Required Female Player 1' },
          { gender: 'female', required: true, label: 'Required Female Player 2' },
          { gender: 'any', required: false, label: 'Optional Player 1' },
          { gender: 'any', required: false, label: 'Optional Player 2' }
        ];
      } else {
        // Female primary (1 female) + 1 female teammate + 2 males + 2 optional = 6 total
        return [
          { gender: 'female', required: true, label: 'Required Female Player' },
          { gender: 'male', required: true, label: 'Required Male Player 1' },
          { gender: 'male', required: true, label: 'Required Male Player 2' },
          { gender: 'any', required: false, label: 'Optional Player 1' },
          { gender: 'any', required: false, label: 'Optional Player 2' }
        ];
      }
    } catch (error) {
      console.error('Error in getTeamComposition:', error);
      // Return default composition if there's an error
      return [
        { gender: 'male', required: true, label: 'Player 2' },
        { gender: 'female', required: true, label: 'Player 3' },
        { gender: 'male', required: false, label: 'Optional Player 1' },
        { gender: 'female', required: false, label: 'Optional Player 2' }
      ];
    }
  };

  // Handle player selection
  const handlePlayerSelection = (type) => {
    setPlayerSelectionType(type);
    setPlayerSearchTerm(''); // Reset search term
    setShowPlayerSelectionModal(true);
  };

  // Handle removing a selected player
  const handleRemovePlayer = (type, index = null) => {
    if (type === 'partner') {
      setRegistrationForm(prev => ({
        ...prev,
        partner: null
      }));
    } else if (type === 'team' && index !== null) {
      setRegistrationForm(prev => ({
        ...prev,
        teamMembers: prev.teamMembers.map((member, i) => 
          i === index ? {
            ...member,
            pplId: null,
            name: null,
            gender: member.gender,
            duprRatings: null,
            age: null
          } : member
        )
      }));
    }
  };

  // Handle player selection from modal
  const handleSelectPlayer = (player) => {
  setRegistrationForm(prev => {
    const updatedForm = { ...prev };

    if (playerSelectionType === 'partner') {
      updatedForm.partner = {
        pplId: player.pplId,
        duprId: player.duprId,
        name: player.name,
        gender: player.gender,
        age: player.age,
        duprRatings: player.duprRatings || {}
      };
    } else if (typeof playerSelectionType === 'number') {
      // For team members
      updatedForm.teamMembers[playerSelectionType] = {
        pplId: player.pplId,
        duprId: player.duprId,
        name: player.name,
        gender: player.gender,
        age: player.age,
        duprRatings: player.duprRatings || {},
        required: updatedForm.teamMembers[playerSelectionType]?.required || false,
        label: updatedForm.teamMembers[playerSelectionType]?.label || ''
      };
    }

    return updatedForm;
  });

  setShowPlayerSelectionModal(false); // Close modal after selection
};

  // Filter players based on category and selection type
  const getFilteredPlayers = () => {
    if (!registrationForm.category || !registrationTournament) return registeredPlayers;
    
    const selectedCategory = Object.values(registrationTournament?.tournamentCategories || {})
      .find(cat => cat.id === registrationForm.category);
    
    if (!selectedCategory) return registeredPlayers;
    
    const allowedGenders = getAllowedGenders(selectedCategory.name, registrationForm.primaryPlayer?.gender || 'male');
    
    let filteredPlayers = registeredPlayers;
    
    // For team selection, filter by specific slot requirements
    if (playerSelectionType.startsWith('team-')) {
      const index = parseInt(playerSelectionType.split('-')[1]);
      const composition = getTeamComposition(registrationForm.primaryPlayer?.gender || 'male');
      const slotRequirement = composition[index];
      
      if (slotRequirement) {
        // If gender is 'any', don't filter by gender (allow all genders)
        if (slotRequirement.gender !== 'any') {
          filteredPlayers = filteredPlayers.filter(player => player.gender === slotRequirement.gender);
        }
      }
    } else {
      // For partner selection, filter by allowed genders
      filteredPlayers = filteredPlayers.filter(player => allowedGenders.includes(player.gender));
    }
    
    // Apply search filter
    if (playerSearchTerm) {
      const searchLower = playerSearchTerm.toLowerCase();
      filteredPlayers = filteredPlayers.filter(player => 
        player.name.toLowerCase().includes(searchLower) ||
        player.pplId.toLowerCase().includes(searchLower)
      );
    }
    
    // Exclude the primary player from selection (only if PPLID is set)
    if (registrationForm.primaryPlayer?.pplId) {
      filteredPlayers = filteredPlayers.filter(player => 
        player.pplId !== registrationForm.primaryPlayer.pplId
      );
    }
    
    return filteredPlayers;
  };

  if (loading) return <LoadingState>Loading tournaments...</LoadingState>;
  if (error) return <ErrorState>{error}</ErrorState>;

  // Show tournament details page if a tournament is selected
  if (showDetailedView && selectedTournament) {
    const isHostView = location.state?.fromProfile;
    
    return (
      <PageContainer>
        <TournamentDetailContent>
          <TournamentDetailContainer>
            <TournamentDetailHeader>
              <BackButton onClick={handleCloseDetailedView}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {location.state?.fromProfile ? 'Back to Profile' : 'Back to Tournaments'}
              </BackButton>
            </TournamentDetailHeader>

            <TournamentDetailBanner>
             {selectedTournament.tournamentPicture ? (
    <img 
      src={`http://localhost:5000${selectedTournament.tournamentPicture}`} 
      alt={selectedTournament.tournamentName} 
      style={{ width: "100%", objectFit: "cover" }}
    />
  ) : (
    <div style={{padding: "40px", textAlign: "center", color: "#888"}}>No Image</div>
  )}
            <TournamentDetailStatusBadge $status={selectedTournament.status}>
              {selectedTournament.status}
            </TournamentDetailStatusBadge>
            </TournamentDetailBanner>

          <TournamentDetailBody>
            <TournamentDetailLeft>
                <TournamentDetailTitle>
                  <h1>{selectedTournament.name}</h1>
                </TournamentDetailTitle>
                <TournamentDetailDescription>
                  {selectedTournament.description}
                </TournamentDetailDescription>              {/* Tab Navigation */}
              <TabNavigation>
                <TabButton 
                  $active={activeTab === 'details'} 
                  onClick={() => setActiveTab('details')}
                >
                  Details
                </TabButton>
                <TabButton 
                  $active={activeTab === 'guidelines'} 
                  onClick={() => setActiveTab('guidelines')}
                >
                  Guidelines
                </TabButton>
                <TabButton 
                  $active={activeTab === 'events'} 
                  onClick={() => setActiveTab('events')}
                >
                  Events
                </TabButton>
                <TabButton 
                  $active={activeTab === 'players'} 
                  onClick={() => setActiveTab('players')}
                >
                  Players
                </TabButton>
                <TabButton 
                  $active={activeTab === 'brackets'} 
                  onClick={() => setActiveTab('brackets')}
                >
                  Brackets
                </TabButton>
              </TabNavigation>

              {/* Tab Content */}
              <TabContent>
                {activeTab === 'details' && (
                  <>
                    <TournamentDetailSection>
                      <TournamentDetailSectionTitle>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Tournament Information
                      </TournamentDetailSectionTitle>
                      
                      <TournamentDetailsList>
                        <TournamentDetailsItem>
                          <DetailItemIcon>
                            <MoneyIcon />
                          </DetailItemIcon>
                          <DetailItemContent>
                            <div>
<DetailItemLabel>Registration Fee</DetailItemLabel>
</div>
<DetailItemValue className="price">
  ₱
  {selectedTournament.entryFeeMin != null
    ? selectedTournament.entryFeeMin.toLocaleString()
    : "0"}
</DetailItemValue>
</DetailItemContent>
</TournamentDetailsItem>

<TournamentDetailsItem>
  <DetailItemIcon>
    <CalendarIcon />
  </DetailItemIcon>
  <DetailItemContent>
    <div>
      <DetailItemLabel>Tournament Date</DetailItemLabel>
    </div>
    <DetailItemValue>
      {(() => {
        const dates = selectedTournament?.tournamentDates || [];
        if (!dates.length) return "TBA";

        // Sort dates ascending
        const sortedDates = dates.map(d => new Date(d)).sort((a, b) => a - b);

        const ranges = [];
        let start = sortedDates[0];
        let end = sortedDates[0];

        for (let i = 1; i <= sortedDates.length; i++) {
          const current = sortedDates[i];
          const prev = sortedDates[i - 1];

          if (
            current &&
            (current - prev) / (1000 * 60 * 60 * 24) === 1 // consecutive day
          ) {
            end = current;
          } else {
            ranges.push([start, end]);
            start = current;
            end = current;
          }
        }

        const formatted = ranges
          .map(([s, e]) => {
            const sameMonth = s.getMonth() === e.getMonth();
            if (sameMonth) {
              return ` ${s.toLocaleDateString("en-US", {
                month: "short",
              })} ${s.getDate()}–${e.getDate()}`;
            } else {
              return ` ${s.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}–${e.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}`;
            }
          })
          .join(" & ");

        return `${formatted}, ${sortedDates[0].getFullYear()}`;
      })()}
    </DetailItemValue>
  </DetailItemContent>
</TournamentDetailsItem>


                        <TournamentDetailsItem>
                          <DetailItemIcon>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </DetailItemIcon>
                          <DetailItemContent>
                            <div>
                              <DetailItemLabel>Registration Deadline</DetailItemLabel>
                            </div>
                            <DetailItemValue className="deadline">
                              {new Date(selectedTournament.registrationDeadline).toLocaleDateString('en-US', { 
                                year: 'numeric',
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </DetailItemValue>
                          </DetailItemContent>
                        </TournamentDetailsItem>

                        <TournamentDetailsItem>
                          <DetailItemIcon>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78Z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </DetailItemIcon>
                          <DetailItemContent>
                            <div>
                              <DetailItemLabel>Skill Levels</DetailItemLabel>
                            </div>
                            <DetailItemValue>
{selectedTournament?.tournamentCategories?.length > 0
    ? (() => {
        const skillLevels = new Set();
        selectedTournament.tournamentCategories.forEach(category => {
          const level = category.skillLevel?.toLowerCase();
          if (!level) return;

          if (level === 'open') {
            skillLevels.add(`Open - Tier ${category.tier || 1}`);
          } else if (['beginner', 'intermediate', 'advanced'].includes(level)) {
            // capitalize first letter
            skillLevels.add(category.skillLevel.charAt(0).toUpperCase() + category.skillLevel.slice(1));
          }
        });
        return skillLevels.size > 0 ? Array.from(skillLevels).sort().join(', ') : 'Not specified';
      })()
    : selectedTournament?.tournamentType
    ? `${selectedTournament.tournamentType.charAt(0).toUpperCase() + selectedTournament.tournamentType.slice(1)}${
        selectedTournament.tournamentType.toLowerCase() === 'open' ? ` - Tier ${selectedTournament.tier || 1}` : ''
      }`
    : 'Not specified'}
                            </DetailItemValue>
                          </DetailItemContent>
                        </TournamentDetailsItem>

                        {/* Contact Email - only show if provided */}
                        {selectedTournament.contactEmail && (
                          <TournamentDetailsItem>
                            <DetailItemIcon>
                              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                              </svg>
                            </DetailItemIcon>
                            <DetailItemContent>
                              <div>
                                <DetailItemLabel>Contact Email</DetailItemLabel>
                              </div>
                              <DetailItemValue>
                                <a 
                                  href={`mailto:${selectedTournament.contactEmail}`}
                                  style={{ 
                                    color: '#334155', 
                                    textDecoration: 'none',
                                    cursor: 'pointer'
                                  }}
                                  onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                  onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                                >
                                  {selectedTournament.contactEmail}
                                </a>
                              </DetailItemValue>
                            </DetailItemContent>
                          </TournamentDetailsItem>
                        )}

                        {/* Contact Phone - only show if provided */}
                        {selectedTournament.contactPhone && (
                          <TournamentDetailsItem>
                            <DetailItemIcon>
                              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                              </svg>
                            </DetailItemIcon>
                            <DetailItemContent>
                              <div>
                                <DetailItemLabel>Contact Phone</DetailItemLabel>
                              </div>
                              <DetailItemValue>
                                <a 
                                  href={`tel:${selectedTournament.contactPhone}`}
                                  style={{ 
                                    color: '#334155', 
                                    textDecoration: 'none',
                                    cursor: 'pointer'
                                  }}
                                  onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                                  onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                                >
                                  {selectedTournament.contactPhone}
                                </a>
                              </DetailItemValue>
                            </DetailItemContent>
                          </TournamentDetailsItem>
                        )}
                      </TournamentDetailsList>
                    </TournamentDetailSection>

                    <TournamentDetailSection>
                      <TournamentDetailSectionTitle>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Tournament Categories
                      </TournamentDetailSectionTitle>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {selectedTournament.tournamentCategories ? (
                          Object.values(selectedTournament.tournamentCategories).map((category) => (
                            <div 
                              key={category.id}
                              style={{
                                background: 'white',
                                border: '1px solid #e2e8f0',
                                borderRadius: '12px',
                                padding: '16px 20px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                  width: '8px',
                                  height: '8px',
                                  borderRadius: '50%',
                                  backgroundColor: '#29ba9b'
                                }} />
                                <div>
                                  <div style={{
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    color: '#1e293b',
                                    marginBottom: '2px'
                                  }}>
                                    {(() => {
                                      // Extract division from name, removing skill level and age
                                      let division = category?.name ?? "";
                                      
                                      // Remove age categories first (including at the end of strings)
    const ageCategories = ['18+', '35+', '50+'];

if (typeof division === "string") {
  ageCategories.forEach(age => {
    // Remove age category anywhere in the string, including at the end
    division = division.replace(
      new RegExp(`\\s*${age.replace('+', '\\+')}\\s*`, 'gi'),
      ' '
    );
    // Also remove if it's at the very end
    division = division.replace(
      new RegExp(`\\s*${age.replace('+', '\\+')}$`, 'gi'),
      ''
    );
  });
}
// Always start division as a safe string


// Remove skill level words only if not empty
if (division) {
  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Open'];
  skillLevels.forEach(skill => {
    division = division.replace(new RegExp(`\\s*${skill}\\s*`, 'gi'), ' ');
  });

  // Clean spaces
  division = division.replace(/\s+/g, ' ').trim();
}

let skillLevel = category?.skillLevel ?? '';

if (skillLevel === 'Open' && category?.tier) {
  skillLevel = `Open Tier ${category.tier}`;
}

                                      
                                      const age = category.ageGroup || '';
                                      
                                      // Format as "division | skill level | age"
                                      const parts = [division, skillLevel, age].filter(part => part);
                                      return parts.join(' | ');
                                    })()}
                                  </div>
                                  <div style={{
                                    fontSize: '0.875rem',
                                    color: '#64748b'
                                  }}>
                                    {(() => {
                                      const categoryApprovedCount = selectedTournament?.registrations?.filter(reg => 
                                        reg.status === 'approved' && reg.category === category.division
                                      ).length || 0;
                                      return `${categoryApprovedCount}/${category.maxParticipants} participants`;
                                    })()} 
                                    {category.prizePool && category.prizePool > 0 && (
                                      <span style={{ marginLeft: '12px', color: '#29ba9b', fontWeight: '500' }}>
                                        Prize: ₱{category.prizePool.toLocaleString()}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div style={{
                                fontSize: '0.875rem',
                                fontWeight: '500',
                                color: (() => {
                                  const categoryApprovedCount = selectedTournament?.registrations?.filter(reg => 
                                    reg.status === 'approved' && reg.category === category.division
                                  ).length || 0;
                                  return categoryApprovedCount >= category.maxParticipants ? '#ef4444' : '#29ba9b';
                                })(),
                                background: (() => {
                                  const categoryApprovedCount = selectedTournament?.registrations?.filter(reg => 
                                    reg.status === 'approved' && reg.category === category.division
                                  ).length || 0;
                                  return categoryApprovedCount >= category.maxParticipants ? '#fef2f2' : '#f0fdf4';
                                })(),
                                padding: '4px 8px',
                                borderRadius: '6px',
                                border: (() => {
                                  const categoryApprovedCount = selectedTournament?.registrations?.filter(reg => 
                                    reg.status === 'approved' && reg.category === category.division
                                  ).length || 0;
                                  return `1px solid ${categoryApprovedCount >= category.maxParticipants ? '#fecaca' : '#bbf7d0'}`;
                                })()
                              }}>
                                {(() => {
                                  const categoryApprovedCount = selectedTournament?.registrations?.filter(reg => 
                                    reg.status === 'approved' && reg.category === category.division
                                  ).length || 0;
                                  return categoryApprovedCount >= category.maxParticipants ? 'Full' : 'Open';
                                })()}
                              </div>
                            </div>
                          ))
                        ) : (
                          // Fallback for old data structure
                          <div 
                            style={{
                              background: 'white',
                              border: '1px solid #e2e8f0',
                              borderRadius: '12px',
                              padding: '16px 20px',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <div style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: '#29ba9b'
                              }} />
                              <div>
                                <div style={{
                                  fontSize: '1rem',
                                  fontWeight: '600',
                                  color: '#1e293b',
                                  marginBottom: '2px'
                                }}>
                                  {selectedTournament.tournamentType.charAt(0).toUpperCase() + selectedTournament.tournamentType.slice(1)}
                                  {selectedTournament.tournamentType === 'open' && selectedTournament.tier && ` - Tier ${selectedTournament.tier}`}
                                </div>
                                <div style={{
                                  fontSize: '0.875rem',
                                  color: '#64748b'
                                }}>
                                  {(() => {
                                    const approvedCount = selectedTournament?.registrations?.filter(reg => reg.status === 'approved').length || 0;
                                    const totalMaxParticipants = selectedTournament?.tournamentCategories?.reduce((sum, cat) => sum + (parseInt(cat.maxParticipants) || 0), 0) || selectedTournament?.maxParticipants || 0;
                                    return `${approvedCount}/${totalMaxParticipants} participants`;
                                  })()} 
                                </div>
                              </div>
                            </div>
                            <div style={{
                              fontSize: '0.875rem',
                              fontWeight: '500',
                              color: (() => {
                                const approvedCount = selectedTournament?.registrations?.filter(reg => reg.status === 'approved').length || 0;
                                const totalMaxParticipants = selectedTournament?.tournamentCategories?.reduce((sum, cat) => sum + (parseInt(cat.maxParticipants) || 0), 0) || selectedTournament?.maxParticipants || 0;
                                return approvedCount >= totalMaxParticipants ? '#ef4444' : '#29ba9b';
                              })(),
                              background: (() => {
                                const approvedCount = selectedTournament?.registrations?.filter(reg => reg.status === 'approved').length || 0;
                                const totalMaxParticipants = selectedTournament?.tournamentCategories?.reduce((sum, cat) => sum + (parseInt(cat.maxParticipants) || 0), 0) || selectedTournament?.maxParticipants || 0;
                                return approvedCount >= totalMaxParticipants ? '#fef2f2' : '#f0fdf4';
                              })(),
                              padding: '4px 8px',
                              borderRadius: '6px',
                              border: (() => {
                                const approvedCount = selectedTournament?.registrations?.filter(reg => reg.status === 'approved').length || 0;
                                const totalMaxParticipants = selectedTournament?.tournamentCategories?.reduce((sum, cat) => sum + (parseInt(cat.maxParticipants) || 0), 0) || selectedTournament?.maxParticipants || 0;
                                return `1px solid ${approvedCount >= totalMaxParticipants ? '#fecaca' : '#bbf7d0'}`;
                              })()
                            }}>
                              {(() => {
                                const approvedCount = selectedTournament?.registrations?.filter(reg => reg.status === 'approved').length || 0;
                                const totalMaxParticipants = selectedTournament?.tournamentCategories?.reduce((sum, cat) => sum + (parseInt(cat.maxParticipants) || 0), 0) || selectedTournament?.maxParticipants || 0;
                                return approvedCount >= totalMaxParticipants ? 'Full' : 'Open';
                              })()}
                            </div>
                          </div>
                        )}
                      </div>
                    </TournamentDetailSection>

<TournamentDetailSection>
  <TournamentDetailSectionTitle>
    <LocationIcon />
    Tournament Location & Map
  </TournamentDetailSectionTitle>

  <LocationCard>
    <LocationHeader>
      {/* <LocationActions>
        <LocationButton 
          $primary 
          onClick={() => window.open(`https://maps.google.com/?q=${selectedTournament.latitude},${selectedTournament.longitude}`, '_blank')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Get Directions
        </LocationButton>
        <LocationButton onClick={() => navigator.share?.({ 
          title: `Location: ${selectedTournament.location}`,
          text: selectedTournament.address,
          url: `https://maps.google.com/?q=${selectedTournament.latitude},${selectedTournament.longitude}` 
        })}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="15,3 21,3 21,9" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Share
        </LocationButton>
      </LocationActions>*/}
    </LocationHeader>


    {/* Embedded map */}
<MapContainer
  onClick={() =>
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${selectedTournament.venueName}, ${selectedTournament.venueAddress}, ${selectedTournament.venueCity}, ${selectedTournament.venueState} ${selectedTournament.venueZip}`
      )}`,
      "_blank"
    )
  }
>
  <iframe
    width="100%"
    height="400"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    src={`https://www.google.com/maps/embed/v1/place?key=GOOGLEAPI=${encodeURIComponent(
      `${selectedTournament.venueName}, ${selectedTournament.venueAddress}, ${selectedTournament.venueCity}, ${selectedTournament.venueState} ${selectedTournament.venueZip}`
    )}`}
  ></iframe>

  <div className="map-text">
    <div className="main-text">Interactive Map View</div>
    <div className="sub-text">Click to open in Google Maps</div>
    <div className="venue-details">
      <p>{selectedTournament.venueName}</p>
      <p>{selectedTournament.venueAddress}</p>
      <p>
        {selectedTournament.venueCity}, {selectedTournament.venueState} {selectedTournament.venueZip}
      </p>
    </div>
  </div>
</MapContainer>
  </LocationCard>
</TournamentDetailSection>
</>
                )}

                {activeTab === 'events' && (
                  <TournamentDetailSection>
                    <TournamentDetailSectionTitle>
                      <CalendarIcon />
                      Tournament Events Schedule
                    </TournamentDetailSectionTitle>
                    <div style={{
                      background: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '24px'
                    }}>
                      <div style={{
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        color: '#334155',
                        whiteSpace: 'pre-wrap'
                      }}
  dangerouslySetInnerHTML={{ __html: selectedTournament.events || 'No events available.' }}
/>
    </div>
                    
                  </TournamentDetailSection>
                )}

                {activeTab === 'brackets' && (
                  <TournamentDetailSection>
                    <TournamentDetailSectionTitle>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Tournament Brackets
                    </TournamentDetailSectionTitle>

{/* Display all categories as expandable cards */}
{selectedTournament.tournamentCategories ? (
  <div>
    {selectedTournament.tournamentCategories
      .filter(category => selectedPlayerCategory === 'all' || category.division === selectedPlayerCategory)
      .map((category) => (
        <CategoryCard key={category.division}>
          <CategoryHeader 
            $expanded={!!expandedCategories[category.division]}
            onClick={() => toggleCategoryExpansion(category.division)}
          >
            <CategoryHeaderContent>
              <CategoryHeaderInfo>
                <div
                  className="category-title"
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#1e293b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span>{(() => {
                    let division = category.division;

                    // Remove age categories
                    const ageCategories = ['18+', '35+', '50+'];
                    ageCategories.forEach(age => {
                      division = division.replace(new RegExp(`\\s*${age.replace('+', '\\+')}\\s*`, 'gi'), ' ');
                    });

                    // Remove skill level words
                    const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Open'];
                    skillLevels.forEach(skill => {
                      division = division.replace(new RegExp(`\\s*${skill}\\s*`, 'gi'), ' ');
                    });

                    return division.replace(/\s+/g, ' ').trim();
                  })()}</span>
                  <span style={{ color: '#64748b', fontSize: '1rem' }}>|</span>
                  <span style={{ color: '#059669' }}>
                    {category.skillLevel === 'Open' && category.tier
                      ? `Open Tier ${category.tier}`
                      : category.skillLevel}
                  </span>
                  <span style={{ color: '#64748b', fontSize: '1rem' }}>|</span>
                  <span>{category.ageCategory}</span>
                </div>
              </CategoryHeaderInfo>
              <CategoryExpandIcon $expanded={!!expandedCategories[category.division]}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </CategoryExpandIcon>
            </CategoryHeaderContent>
          </CategoryHeader>
          
          {expandedCategories[category.division] && (
            <CategoryBracketContent $expanded={expandedCategories[category.division]}>
              {category.groupStage && (
                                  <GroupStageSection>
                                    {/* Tournament Format Selection */}
                                    <div style={{
                                      display: 'flex',
                                      gap: '12px',
                                      marginBottom: '0px',
                                      justifyContent: 'center',
                                      padding: '16px',
                                      borderRadius: '12px',
                                    }}>
                                      <button
                                        style={{
                                          padding: '12px 24px',
                                          backgroundColor: '#3b82f6',
                                          color: 'white',
                                          border: 'none',
                                          borderRadius: '8px',
                                          fontSize: '0.875rem',
                                          fontWeight: '600',
                                          cursor: 'pointer',
                                          transition: 'all 0.2s ease',
                                          boxShadow: '0 2px 4px rgba(59, 130, 246, 0.2)',
                                          minWidth: '140px',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          gap: '8px'
                                        }}
                                        onMouseEnter={(e) => {
                                          e.target.style.backgroundColor = '#2563eb';
                                          e.target.style.transform = 'translateY(-1px)';
                                          e.target.style.boxShadow = '0 4px 8px rgba(59, 130, 246, 0.3)';
                                        }}
                                        onMouseLeave={(e) => {
                                          e.target.style.backgroundColor = '#3b82f6';
                                          e.target.style.transform = 'translateY(0)';
                                          e.target.style.boxShadow = '0 2px 4px rgba(59, 130, 246, 0.2)';
                                        }}
                                        onClick={() => {
                                          console.log('Generate Round Robin for category:', category.name);
                                          
                                          // Always enable Round Robin and reset elimination when clicked
                                          setRoundRobinCategories(prev => ({
                                            ...prev,
                                            [category.id]: true
                                          }));
                                          setEliminationCategories(prev => ({
                                            ...prev,
                                            [category.id]: false
                                          }));
                                          // Initialize available brackets with default A, B, C, D
                                          setAvailableBrackets(prev => ({
                                            ...prev,
                                            [category.id]: ['A', 'B', 'C', 'D']
                                          }));
                                        }}
                                      >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                          <circle cx="12" cy="12" r="10"/>
                                          <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"/>
                                        </svg>
                                        Round Robin
                                      </button>
                                      <button 
                                        style={{ 
                                          padding: '12px 24px', 
                                          backgroundColor: '#f59e0b', 
                                          color: 'white', 
                                          border: 'none', 
                                          borderRadius: '8px', 
                                          fontSize: '0.875rem', 
                                          fontWeight: '600', 
                                          cursor: 'pointer', 
                                          transition: 'all 0.2s ease', 
                                          boxShadow: '0 2px 4px rgba(245, 158, 11, 0.2)', 
                                          minWidth: '140px', 
                                          display: 'flex', 
                                          alignItems: 'center', 
                                          justifyContent: 'center', 
                                          gap: '8px' 
                                        }} 
                                        onMouseEnter={(e) => { 
                                          e.target.style.backgroundColor = '#d97706'; 
                                          e.target.style.transform = 'translateY(-1px)'; 
                                          e.target.style.boxShadow = '0 4px 8px rgba(245, 158, 11, 0.3)'; 
                                        }} 
                                        onMouseLeave={(e) => { 
                                          e.target.style.backgroundColor = '#f59e0b'; 
                                          e.target.style.transform = 'translateY(0)'; 
                                          e.target.style.boxShadow = '0 2px 4px rgba(245, 158, 11, 0.2)'; 
                                        }} 
                                        onClick={() => { 
                                          console.log('Generate Elimination Draw for category:', category.name); 
                                          
                                          // Always enable Elimination and reset round robin when clicked
                                          setEliminationCategories(prev => ({ 
                                            ...prev, 
                                            [category.id]: true 
                                          })); 
                                          setRoundRobinCategories(prev => ({ 
                                            ...prev, 
                                            [category.id]: false 
                                          })); 
                                        }} 
                                      > 
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"> 
                                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/> 
                                          <polyline points="7.5,4.21 12,6.81 16.5,4.21"/> 
                                          <polyline points="7.5,19.79 7.5,14.6 3,12"/> 
                                          <polyline points="21,12 16.5,14.6 16.5,19.79"/> 
                                          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/> 
                                          <line x1="12" y1="22.08" x2="12" y2="12"/> 
                                        </svg> 
                                        Elimination Draw 
                                      </button> 
                                    </div>

                                    {/* Round Robin Bracket Buttons */}
                                    {roundRobinCategories[category.id] && !eliminationCategories[category.id] && (
                                      <div style={{
                                        display: 'flex',
                                        gap: '8px',
                                        marginBottom: '16px',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                      }}>
                                                                                
                                        {/* 4/8 Bracket Toggle Switch */}
                                        <div style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '12px',
                                          marginRight: '20px'
                                        }}>
                                          <span style={{
                                            fontSize: '0.875rem',
                                            fontWeight: '600',
                                            color: '#64748b'
                                          }}>Brackets:</span>
                                          <div 
                                            onClick={() => {
                                              const currentMode = bracketMode[category.id] || 4;
                                              const newMode = currentMode === 4 ? 8 : 4;
                                              setShowBracketModal(true);
                                              setPendingBracketChange({ categoryId: category.id, newMode });
                                            }}
                                            style={{
                                              position: 'relative',
                                              width: '60px',
                                              height: '30px',
                                              backgroundColor: '#e2e8f0',
                                              borderRadius: '15px',
                                              cursor: 'pointer',
                                              transition: 'all 0.3s ease',
                                              border: '2px solid #cbd5e1'
                                            }}
                                          >
                                            <div style={{
                                              position: 'absolute',
                                              top: '2px',
                                              left: (bracketMode[category.id] || 4) === 8 ? '32px' : '2px',
                                              width: '24px',
                                              height: '24px',
                                              backgroundColor: '#3b82f6',
                                              borderRadius: '50%',
                                              transition: 'all 0.3s ease'
                                            }}></div>
                                            <div style={{
                                              position: 'absolute',
                                              top: '50%',
                                              left: '10px',
                                              transform: 'translateY(-50%)',
                                              fontSize: '0.75rem',
                                              fontWeight: '600',
                                              color: (bracketMode[category.id] || 4) === 4 ? 'white' : '#64748b',
                                              zIndex: 2
                                            }}>4</div>
                                            <div style={{
                                              position: 'absolute',
                                              top: '50%',
                                              right: '10px',
                                              transform: 'translateY(-50%)',
                                              fontSize: '0.75rem',
                                              fontWeight: '600',
                                              color: (bracketMode[category.id] || 4) === 8 ? 'white' : '#64748b',
                                              zIndex: 2
                                            }}>8</div>
                                          </div>
                                        </div>
                                        {/* Bracket Buttons */}
                                        {(availableBrackets[category.id] || ['A', 'B', 'C', 'D'])
                                          .map((bracket) => (
                                            <button
                                              key={bracket}
                                              style={{
                                                padding: '8px 16px',
                                                backgroundColor: '#3b82f6',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '6px',
                                                fontSize: '0.875rem',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease',
                                                minWidth: '80px'
                                              }}
                                              onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = '#2563eb';
                                                e.target.style.transform = 'translateY(-1px)';
                                              }}
                                              onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = '#3b82f6';
                                                e.target.style.transform = 'translateY(0)';
                                              }}
                                              onClick={() => {
                                                console.log(`Generate Bracket ${bracket} for category:`, category.name);
                                                setSelectedBrackets(prev => ({
                                                  ...prev,
                                                  [category.id]: bracket
                                                }));
                                              }}
                                            >
                                              Bracket {bracket}
                                            </button>
                                        ))}
                                        
                                        {/* Auto-set brackets based on bracket mode */}
                                        {(() => {
                                          const currentMode = bracketMode[category.id] || 4;
                                          const targetBrackets = currentMode === 8 
                                            ? ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
                                            : ['A', 'B', 'C', 'D'];
                                          const currentBrackets = availableBrackets[category.id] || ['A', 'B', 'C', 'D'];
                                          
                                          // Auto-update brackets if they don't match the required count
                                          if (JSON.stringify(currentBrackets) !== JSON.stringify(targetBrackets)) {
                                            setAvailableBrackets(prev => ({
                                              ...prev,
                                              [category.id]: targetBrackets
                                            }));
                                            console.log(`Auto-set to ${targetBrackets.length} brackets for category ${category.name} (mode: ${currentMode})`);
                                          }
                                          
                                          return null; // No button needed - automatic behavior
                                        })()}
                                      </div>
                                    )}

                                    {/* Round Robin Content - Show when Round Robin is selected */}
                                    {roundRobinCategories[category.id] && (
                                      <div style={{
                                        marginTop: '24px',
                                        padding: '20px',
                                        background: '#f8fafc',
                                        
                                      }}>
                                        <h4 style={{
                                          color: '#1e293b',
                                          marginBottom: '16px',
                                          fontSize: '1.1rem',
                                          fontWeight: '300',
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '8px'
                                        }}>
                                          
                                          
                                        </h4>
                                        
                                        {(() => {
                                          // Use real tournament data from category.groupStage.groups
                                          const expectedGroupId = selectedBrackets[category.id] ? `group-${selectedBrackets[category.id].toLowerCase()}` : null;
                                          const selectedGroup = expectedGroupId ? category.groupStage?.groups?.find(group => group.id === expectedGroupId) : null;

                                          // Get real match data from selected group
                                          const groupMatches = selectedGroup?.matches ? Object.values(selectedGroup.matches) : [];

                                          // Auto-select first available bracket if none is selected
                                          if (!selectedBrackets[category.id] && availableBrackets[category.id]?.length > 0) {
                                            const firstBracket = availableBrackets[category.id][0];
                                            setSelectedBrackets(prev => ({
                                              ...prev,
                                              [category.id]: firstBracket
                                            }));
                                            return null; // Will re-render with bracket selected
                                          }
                                          
                                          // If no bracket is selected and no available brackets, show instruction message
                                          if (!selectedBrackets[category.id]) {
                                            return (
                                              <div style={{ 
                                                textAlign: 'center', 
                                                padding: '48px 24px',
                                                background: 'white',
                                                borderRadius: '12px',
                                                border: '1px solid #e2e8f0',
                                                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                                              }}>
                                                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎯</div>
                                                <h3 style={{ color: '#334155', marginBottom: '8px', fontSize: '1.1rem' }}>
                                                  Select a Bracket
                                                </h3>
                                                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                                                  Choose a bracket above to view group stage matches
                                                </p>
                                              </div>
                                            );
                                          }

                                          return (
                                            <>
                                              {/* Bracket Cards - Only show selected bracket */}
                                              {selectedBrackets[category.id] && selectedGroup ? (
                                                (() => {
                                                    const groupName = selectedBrackets[category.id];
                                                    const players = selectedGroup?.standings ? selectedGroup.standings.map(s => s.player) : [];
                                                    
                                                    // Create enhanced matches with player names
                                                    const enhancedMatches = {};
                                                    Object.keys(selectedGroup?.matches || {}).forEach(key => {
                                                      const match = selectedGroup.matches[key];
                                                      const [playerIndex, opponentIndex] = key.split('-').map(Number);
                                                      const player1 = selectedGroup.standings[playerIndex]?.player;
                                                      const player2 = selectedGroup.standings[playerIndex + 1 + opponentIndex]?.player;
                                                      
                                                      enhancedMatches[key] = {
                                                        ...match,
                                                        player1: player1,
                                                        player2: player2
                                                      };
                                                    });
                                                    
                                                    // Calculate current standings from match results
                                                    const currentStandings = calculateStandings(enhancedMatches, players);
                                                    
                                                    return (
                                                      <>
                                                        {/* Player Standings Container */}
                                                        <div style={{
                                                          marginBottom: '24px',
                                                          padding: '20px',
                                                          background: 'white',
                                                          borderRadius: '12px',
                                                          border: '1px solid #e2e8f0',
                                                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                                                        }}>
                                                          <h5 style={{
                                                            color: '#1e293b',
                                                            fontSize: '1.1rem',
                                                            fontWeight: '600',
                                                            marginBottom: '16px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px'
                                                          }}>
                                                            
                                                            Bracket {selectedBrackets[category.id]}
                                                          </h5>
                                                          <StandingsTable>
                                                            <div className="standings-header">
                                                              <div>Rank</div>
                                                              <div>Player</div>
                                                              <div>Matches<br/>(W-L)</div>
                                                              <div>Points<br/>(PF-PA)</div>
                                                            </div>
                                                            {currentStandings.map((player, index) => (
                                                              <StandingsRow key={index}>
                                                                <div className="rank-number">{index + 1}</div>
                                                                <div className="player-info">
                                                                  <div className="player-name">
                                                                    {player.player && player.player.includes('/') ? (
                                                                      player.player.split('/').map((name, nameIndex) => (
                                                                        <div key={nameIndex}>{name.trim()}</div>
                                                                      ))
                                                                    ) : (
                                                                      player.player || 'Unknown Player'
                                                                    )}
                                                                  </div>
                                                                </div>
                                                                <div className="matches-record">
                                                                  {player.wins}-{player.losses}
                                                                </div>
                                                                <div className="points-record">
                                                                  {player.pointsFor}-{player.pointsAgainst}
                                                                </div>
                                                              </StandingsRow>
                                                            ))}
                                                          </StandingsTable>
                                                        </div>

                                                        {/* Match Schedule Container */}
                                                        <div style={{
                                                          padding: '20px',
                                                          background: 'white',
                                                          borderRadius: '12px',
                                                          border: '1px solid #e2e8f0',
                                                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                                                        }}>
                                                          <h6 style={{
                                                            color: '#1e293b',
                                                            fontSize: '1rem',
                                                            fontWeight: '600',
                                                            marginBottom: '12px',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px'
                                                          }}>
                                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                                                              <line x1="16" x2="16" y1="2" y2="6"/>
                                                              <line x1="8" x2="8" y1="2" y2="6"/>
                                                              <line x1="3" x2="21" y1="10" y2="10"/>
                                                            </svg>
                                                            Match Schedule
                                                          </h6>
                                                          <MatchTable>
                                                            <div className="match-schedule-header">
                                                              <div>Match</div>
                                                              <div>Players</div>
                                                              <div>Time</div>
                                                              <div>Court</div>
                                                              <div>Date</div>
                                                              <div>Score</div>
                                                              <div>Standing</div>
                                                            </div>
                                                            {selectedGroup?.standings?.map((player, playerIndex) =>
                                                              selectedGroup.standings.slice(playerIndex + 1).map((opponent, opponentIndex) => {
                                                                const matchIndex = `${playerIndex}-${opponentIndex}`;
                                                                const matchNumber = `G${playerIndex + 1}`;
                                                                const key = String(matchIndex);
                                                                const matchData = selectedGroup.matches?.[key] || {};
                                                                
                                                                const timeValue = matchData.time || "08:00";
                                                                const courtValue = matchData.court || "1";
                                                                const dateValue = matchData.date || "2024-05-30";
                                                                const player1Score = matchData.game1Player1 || "0";
                                                                const player2Score = matchData.game1Player2 || "0";
                                                                
                                                                // Determine standing based on scores
                                                                let standing = 'TBD';
                                                                if (player1Score !== "0" || player2Score !== "0") {
                                                                  if (parseInt(player1Score) > parseInt(player2Score)) {
                                                                    standing = '1-0';
                                                                  } else if (parseInt(player2Score) > parseInt(player1Score)) {
                                                                    standing = '0-1';
                                                                  } else {
                                                                    standing = '0-0';
                                                                  }
                                                                }
                                                                
                                                                return (
                                                                  <MatchRow key={`${matchIndex}-${player.player}-${opponent.player}`}>
                                                                    <div className="match-number">{matchNumber}</div>
                                                                    <div className="teams-horizontal">
                                                                      <div className="team-column"><span>{player.player}</span></div>
                                                                      <span className="vs-divider">vs</span>
                                                                      <div className="team-column"><span>{opponent.player}</span></div>
                                                                    </div>
                                                                    <div className="match-time">{timeValue}</div>
                                                                    <div className="court-number">{courtValue}</div>
                                                                    <div className="match-date">{new Date(dateValue).toLocaleDateString()}</div>
                                                                    <div className="game-score">{player1Score}-{player2Score}</div>
                                                                    <div className="match-standing" style={{
                                                                      fontWeight: '600',
                                                                      color: standing.includes('1-0') ? '#059669' : standing.includes('0-1') ? '#dc2626' : '#64748b',
                                                                      backgroundColor: standing.includes('1-0') ? '#d1fae5' : standing.includes('0-1') ? '#fee2e2' : 'transparent',
                                                                      padding: '4px 8px',
                                                                      borderRadius: '4px',
                                                                      fontSize: '0.8rem'
                                                                    }}>
                                                                      {standing}
                                                                    </div>
                                                                  </MatchRow>
                                                                );
                                                              })
                                                            ) || (
                                                              <div style={{
                                                                padding: '20px',
                                                                textAlign: 'center',
                                                                color: '#64748b',
                                                                background: 'white'
                                                              }}>
                                                                No matches scheduled
                                                              </div>
                                                            )}
                                                          </MatchTable>
                                                        </div>
                                                      </>
                                                    );
                                                  })()
                                              ) : (
                                                <div style={{
                                                  padding: '40px',
                                                  textAlign: 'center',
                                                  color: '#64748b',
                                                  background: 'white',
                                                  borderRadius: '8px',
                                                  border: '1px solid #e2e8f0'
                                                }}>
                                                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: '0 auto 16px', display: 'block', opacity: 0.5 }}>
                                                    <circle cx="12" cy="12" r="10"/>
                                                    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"/>
                                                  </svg>
                                                  <h4 style={{ margin: '0 0 8px', color: '#374151', fontSize: '1.1rem', fontWeight: '600' }}>Select a Bracket</h4>
                                                  <p style={{ margin: 0, fontSize: '0.9rem' }}>Click on a bracket button above to view the standings and match schedule.</p>
                                                </div>
                                              )}
                                            </>
                                          );
                                        })()}
                                      </div>
                                    )}

                                    {/* Elimination Draw Content - Show when Elimination Draw is selected */}
                                    {eliminationCategories[category.id] && (
                                      <div style={{
                                        marginTop: '24px',
                                        padding: '20px',
                                        background: '#f8fafc',
                                        borderRadius: '12px',
                                        border: '1px solid #e2e8f0'
                                      }}>
                                        <h4 style={{
                                          color: '#1e293b',
                                          marginBottom: '16px',
                                          fontSize: '1.1rem',
                                          fontWeight: '600',
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '8px'
                                        }}>
                                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                            <polyline points="7.5,4.21 12,6.81 16.5,4.21"/>
                                            <polyline points="7.5,19.79 7.5,14.6 3,12"/>
                                            <polyline points="21,12 16.5,14.6 16.5,19.79"/>
                                            <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                                            <line x1="12" y1="22.08" x2="12" y2="12"/>
                                          </svg>
                                          Elimination Draw - Knockout Stage
                                        </h4>

                                        {(() => {
                                          // Create elimination matches based on cross-bracket pairing
                                          const currentMode = bracketMode[category.id] || 4;
                                          const persistedElimination = Array.isArray(category?.eliminationMatches?.matches)
                                            ? category.eliminationMatches.matches
                                            : (Array.isArray(category.eliminationMatches) ? category.eliminationMatches : []);
                                          let eliminationMatches = [];
                                          
                                          if (currentMode === 4) {
                                            console.log('Category groupStage:', category.groupStage);
                                            console.log('Top players:', topPlayers);
                                            
                                            // 4 bracket elimination - Quarter Finals matchups: a1 vs b2, d1 vs c2, c1 vs d2, b1 vs a2
                                            eliminationMatches = [
                                              {
                                                id: 'quarter1',
                                                title: 'Quarter-Final 1: A1 vs B2',
                                                player1: topPlayers.A?.first ? { 
                                                  name: topPlayers.A.first.name, 
                                                  bracket: 'A', 
                                                  position: '1st', 
                                                  points: topPlayers.A.first.points || 0 
                                                } : { name: 'TBD', bracket: 'A', position: '1st', points: '' },
                                                player2: topPlayers.B?.second ? { 
                                                  name: topPlayers.B.second.name, 
                                                  bracket: 'B', 
                                                  position: '2nd', 
                                                  points: topPlayers.B.second.points || 0 
                                                } : { name: 'TBD', bracket: 'B', position: '2nd', points: '' }
                                              },
                                              {
                                                id: 'quarter2',
                                                title: 'Quarter-Final 2: D1 vs C2',
                                                player1: topPlayers.D?.first ? { 
                                                  name: topPlayers.D.first.name, 
                                                  bracket: 'D', 
                                                  position: '1st', 
                                                  points: topPlayers.D.first.points || 0 
                                                } : { name: 'TBD', bracket: 'D', position: '1st', points: '' },
                                                player2: topPlayers.C?.second ? { 
                                                  name: topPlayers.C.second.name, 
                                                  bracket: 'C', 
                                                  position: '2nd', 
                                                  points: topPlayers.C.second.points || 0 
                                                } : { name: 'TBD', bracket: 'C', position: '2nd', points: '' }
                                              },
                                              {
                                                id: 'quarter3',
                                                title: 'Quarter-Final 3: C1 vs D2',
                                                player1: topPlayers.C?.first ? { 
                                                  name: topPlayers.C.first.name, 
                                                  bracket: 'C', 
                                                  position: '1st', 
                                                  points: topPlayers.C.first.points || 0 
                                                } : { name: 'TBD', bracket: 'C', position: '1st', points: '' },
                                                player2: topPlayers.D?.second ? { 
                                                  name: topPlayers.D.second.name, 
                                                  bracket: 'D', 
                                                  position: '2nd', 
                                                  points: topPlayers.D.second.points || 0 
                                                } : { name: 'TBD', bracket: 'D', position: '2nd', points: '' }
                                              },
                                              {
                                                id: 'quarter4',
                                                title: 'Quarter-Final 4: B1 vs A2',
                                                player1: topPlayers.B?.first ? { 
                                                  name: topPlayers.B.first.name, 
                                                  bracket: 'B', 
                                                  position: '1st', 
                                                  points: topPlayers.B.first.points || 0 
                                                } : { name: 'TBD', bracket: 'B', position: '1st', points: '' },
                                                player2: topPlayers.A?.second ? { 
                                                  name: topPlayers.A.second.name, 
                                                  bracket: 'A', 
                                                  position: '2nd', 
                                                  points: topPlayers.A.second.points || 0 
                                                } : { name: 'TBD', bracket: 'A', position: '2nd', points: '' }
                                              },
                                              {
                                                id: 'semi1',
                                                title: 'Semi-Final 1',
                                                player1: { name: 'Winner QF1', bracket: 'QF1 Winner', position: 'Winner', points: '' },
                                                player2: { name: 'Winner QF2', bracket: 'QF2 Winner', position: 'Winner', points: '' }
                                              },
                                              {
                                                id: 'semi2',
                                                title: 'Semi-Final 2',
                                                player1: { name: 'Winner QF3', bracket: 'QF3 Winner', position: 'Winner', points: '' },
                                                player2: { name: 'Winner QF4', bracket: 'QF4 Winner', position: 'Winner', points: '' }
                                              },
                                              {
                                                id: 'final',
                                                title: 'Final',
                                                player1: { name: 'Winner SF1', bracket: 'SF1 Winner', position: 'Finalist', points: '' },
                                                player2: { name: 'Winner SF2', bracket: 'SF2 Winner', position: 'Finalist', points: '' }
                                              },
                                              {
                                                id: 'bronze',
                                                title: 'Bronze Battle',
                                                player1: { name: 'Loser SF1', bracket: 'SF1 Loser', position: '3rd Place', points: '' },
                                                player2: { name: 'Loser SF2', bracket: 'SF2 Loser', position: '3rd Place', points: '' }
                                              }
                                            ];
                                          } else if (eliminationMatches.length === 0) {
                                            // 8 bracket elimination - Round of 16 matches
                                            const brackets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
                                            
                                            // Generate Round of 16 matches: A1 vs E2, B1 vs F2, C1 vs G2, D1 vs H2, E1 vs A2, F1 vs B2, G1 vs C2, H1 vs D2
                                            const round16Matches = [
                                              { bracket1: 'A', pos1: 'first', bracket2: 'E', pos2: 'second', title: 'Round of 16 - Match 1: A1 vs E2' },
                                              { bracket1: 'B', pos1: 'first', bracket2: 'F', pos2: 'second', title: 'Round of 16 - Match 2: B1 vs F2' },
                                              { bracket1: 'C', pos1: 'first', bracket2: 'G', pos2: 'second', title: 'Round of 16 - Match 3: C1 vs G2' },
                                              { bracket1: 'D', pos1: 'first', bracket2: 'H', pos2: 'second', title: 'Round of 16 - Match 4: D1 vs H2' },
                                              { bracket1: 'E', pos1: 'first', bracket2: 'A', pos2: 'second', title: 'Round of 16 - Match 5: E1 vs A2' },
                                              { bracket1: 'F', pos1: 'first', bracket2: 'B', pos2: 'second', title: 'Round of 16 - Match 6: F1 vs B2' },
                                              { bracket1: 'G', pos1: 'first', bracket2: 'C', pos2: 'second', title: 'Round of 16 - Match 7: G1 vs C2' },
                                              { bracket1: 'H', pos1: 'first', bracket2: 'D', pos2: 'second', title: 'Round of 16 - Match 8: H1 vs D2' }
                                            ];
                                            
                                            eliminationMatches = [
                                              ...round16Matches.map((match, index) => ({
                                                id: `round16_${index + 1}`,
                                                title: match.title,
                                                player1: topPlayers[match.bracket1]?.[match.pos1] ? {
                                                  name: topPlayers[match.bracket1][match.pos1].name,
                                                  bracket: match.bracket1,
                                                  position: match.pos1 === 'first' ? '1st' : '2nd',
                                                  points: topPlayers[match.bracket1][match.pos1].points || 0
                                                } : { name: 'TBD', bracket: match.bracket1, position: match.pos1 === 'first' ? '1st' : '2nd', points: '' },
                                                player2: topPlayers[match.bracket2]?.[match.pos2] ? {
                                                  name: topPlayers[match.bracket2][match.pos2].name,
                                                  bracket: match.bracket2,
                                                  position: match.pos2 === 'first' ? '1st' : '2nd',
                                                  points: topPlayers[match.bracket2][match.pos2].points || 0
                                                } : { name: 'TBD', bracket: match.bracket2, position: match.pos2 === 'first' ? '1st' : '2nd', points: '' }
                                              })),
                                              // Quarter Finals
                                              {
                                                id: 'quarter1',
                                                title: 'Quarter-Final 1',
                                                player1: { name: 'Winner R16-1', bracket: 'R16-1 Winner', position: 'QF', points: '' },
                                                player2: { name: 'Winner R16-2', bracket: 'R16-2 Winner', position: 'QF', points: '' }
                                              },
                                              {
                                                id: 'quarter2',
                                                title: 'Quarter-Final 2',
                                                player1: { name: 'Winner R16-3', bracket: 'R16-3 Winner', position: 'QF', points: '' },
                                                player2: { name: 'Winner R16-4', bracket: 'R16-4 Winner', position: 'QF', points: '' }
                                              },
                                              {
                                                id: 'quarter3',
                                                title: 'Quarter-Final 3',
                                                player1: { name: 'Winner R16-5', bracket: 'R16-5 Winner', position: 'QF', points: '' },
                                                player2: { name: 'Winner R16-6', bracket: 'R16-6 Winner', position: 'QF', points: '' }
                                              },
                                              {
                                                id: 'quarter4',
                                                title: 'Quarter-Final 4',
                                                player1: { name: 'Winner R16-7', bracket: 'R16-7 Winner', position: 'QF', points: '' },
                                                player2: { name: 'Winner R16-8', bracket: 'R16-8 Winner', position: 'QF', points: '' }
                                              },
                                              // Semi Finals
                                              {
                                                id: 'semi1',
                                                title: 'Semi-Final 1',
                                                player1: { name: 'Winner QF1', bracket: 'QF1 Winner', position: 'Semifinalist', points: '' },
                                                player2: { name: 'Winner QF2', bracket: 'QF2 Winner', position: 'Semifinalist', points: '' }
                                              },
                                              {
                                                id: 'semi2',
                                                title: 'Semi-Final 2',
                                                player1: { name: 'Winner QF3', bracket: 'QF3 Winner', position: 'Semifinalist', points: '' },
                                                player2: { name: 'Winner QF4', bracket: 'QF4 Winner', position: 'Semifinalist', points: '' }
                                              },
                                              // Final
                                              {
                                                id: 'final',
                                                title: 'Final',
                                                player1: { name: 'Winner SF1', bracket: 'SF1 Winner', position: 'Finalist', points: '' },
                                                player2: { name: 'Winner SF2', bracket: 'SF2 Winner', position: 'Finalist', points: '' }
                                              },
                                              // Bronze Battle
                                              {
                                                id: 'bronze',
                                                title: 'Bronze Battle',
                                                player1: { name: 'Loser SF1', bracket: 'SF1 Loser', position: '3rd Place', points: '' },
                                                player2: { name: 'Loser SF2', bracket: 'SF2 Loser', position: '3rd Place', points: '' }
                                              }
                                            ];
                                          }

                                          // Overlay persisted schedule fields if available
                                          if (persistedElimination.length) {
                                            eliminationMatches = eliminationMatches.map((m, i) => ({
                                              ...m,
                                              court: persistedElimination[i]?.court || m.court,
                                              date: persistedElimination[i]?.date || m.date,
                                              time: persistedElimination[i]?.time || m.time,
                                              winner: persistedElimination[i]?.winner || m.winner,
                                              scores: persistedElimination[i]?.scores || m.scores
                                            }));
                                          }

                                          // Reusable MatchCard component
                                          const MatchCard = ({ match, matchNumber, isChampionship = false, isBronze = false }) => (
                                            <div style={{
                                              background: 'white',
                                              border: isChampionship ? '2px solid #fbbf24' : isBronze ? '2px solid #cd7c0f' : '1px solid #e2e8f0',
                                              borderRadius: '8px',
                                              padding: '0',
                                              marginBottom: '12px',
                                              boxShadow: isChampionship ? '0 4px 12px rgba(251, 191, 36, 0.2)' : isBronze ? '0 4px 12px rgba(205, 124, 15, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.1)',
                                              position: 'relative',
                                              display: 'flex',
                                              minWidth: '200px'
                                            }}>
                                              {isChampionship && (
                                                <div style={{
                                                  position: 'absolute',
                                                  top: '-8px',
                                                  left: '50%',
                                                  transform: 'translateX(-50%)',
                                                  background: '#fbbf24',
                                                  color: 'white',
                                                  padding: '4px 12px',
                                                  borderRadius: '12px',
                                                  fontSize: '0.75rem',
                                                  fontWeight: '600'
                                                }}>
                                                  🏆 CHAMPIONSHIP
                                                </div>
                                              )}
                                              {isBronze && (
                                                <div style={{
                                                  position: 'absolute',
                                                  top: '-8px',
                                                  left: '50%',
                                                  transform: 'translateX(-50%)',
                                                  background: '#cd7c0f',
                                                  color: 'white',
                                                  padding: '4px 12px',
                                                  borderRadius: '12px',
                                                  fontSize: '0.75rem',
                                                  fontWeight: '600'
                                                }}>
                                                  🥉 BRONZE BATTLE
                                                </div>
                                              )}
                                              
                                              {/* Match Number */}
                                              <div style={{
                                                background: '#f8fafc',
                                                padding: '16px 12px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRight: '1px solid #e2e8f0',
                                                fontSize: '1.25rem',
                                                fontWeight: '600',
                                                color: '#334155',
                                                minWidth: '50px'
                                              }}>
                                                {matchNumber}
                                              </div>
                                              
                                              {/* Match Content */}
                                              <div style={{
                                                flex: 1,
                                                padding: '12px 16px',
                                                display: 'flex',
                                                flexDirection: 'column'
                                              }}>
                                                {/* Players and Scores Row */}
                                                <div style={{
                                                  display: 'flex',
                                                  alignItems: 'stretch',
                                                  flex: 1
                                                }}>
                                                  {/* Players Column */}
                                                  <div style={{
                                                    flex: 1,
                                                    display: 'flex',
                                                    flexDirection: 'column'
                                                  }}>
                                                    {/* Player 1 */}
                                                    <div style={{
                                                      padding: '8px 0',
                                                      borderBottom: '1px solid #f1f5f9',
                                                      fontWeight: match.winner === match.player1 ? '700' : '500',
                                                      color: match.winner === match.player1 ? '#059669' : '#334155',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      gap: '8px',
                                                      fontSize: '0.9rem',
                                                      flex: 1
                                                    }}>
                                                      {match.winner === match.player1 && '🏆'}
                                                      {match.player1 || 'TBD'}
                                                    </div>
                                                    
                                                    {/* Player 2 */}
                                                    <div style={{
                                                      padding: '8px 0',
                                                      fontWeight: match.winner === match.player2 ? '700' : '500',
                                                      color: match.winner === match.player2 ? '#059669' : '#334155',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      gap: '8px',
                                                      fontSize: '0.9rem',
                                                      flex: 1
                                                    }}>
                                                      {match.winner === match.player2 && '🏆'}
                                                      {match.player2 || 'TBD'}
                                                    </div>
                                                  </div>
                                                  
                                                  {/* Score Columns */}
                                                  <div style={{
                                                    display: 'flex',
                                                    borderLeft: '1px solid #f1f5f9',
                                                    marginLeft: '12px'
                                                  }}>
                                                    {/* Set 1 */}
                                                    <div style={{
                                                      width: '30px',
                                                      display: 'flex',
                                                      flexDirection: 'column',
                                                      borderRight: '1px solid #f1f5f9'
                                                    }}>
                                                      <div style={{
                                                        padding: '8px 4px',
                                                        textAlign: 'center',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600',
                                                        borderBottom: '1px solid #f1f5f9',
                                                        flex: 1,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                      }}>
                                                        {match.scores?.[0]?.[0] || '-'}
                                                      </div>
                                                      <div style={{
                                                        padding: '8px 4px',
                                                        textAlign: 'center',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600',
                                                        flex: 1,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                      }}>
                                                        {match.scores?.[0]?.[1] || '-'}
                                                      </div>
                                                    </div>
                                                    
                                                    {/* Set 2 */}
                                                    <div style={{
                                                      width: '30px',
                                                      display: 'flex',
                                                      flexDirection: 'column',
                                                      borderRight: '1px solid #f1f5f9'
                                                    }}>
                                                      <div style={{
                                                        padding: '8px 4px',
                                                        textAlign: 'center',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600',
                                                        borderBottom: '1px solid #f1f5f9',
                                                        flex: 1,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                      }}>
                                                        {match.scores?.[1]?.[0] || '-'}
                                                      </div>
                                                      <div style={{
                                                        padding: '8px 4px',
                                                        textAlign: 'center',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600',
                                                        flex: 1,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                      }}>
                                                        {match.scores?.[1]?.[1] || '-'}
                                                      </div>
                                                    </div>
                                                    
                                                    {/* Set 3 */}
                                                    <div style={{
                                                      width: '30px',
                                                      display: 'flex',
                                                      flexDirection: 'column'
                                                    }}>
                                                      <div style={{
                                                        padding: '8px 4px',
                                                        textAlign: 'center',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600',
                                                        borderBottom: '1px solid #f1f5f9',
                                                        flex: 1,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                      }}>
                                                        {match.scores?.[2]?.[0] || '-'}
                                                      </div>
                                                      <div style={{
                                                        padding: '8px 4px',
                                                        textAlign: 'center',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600',
                                                        flex: 1,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                      }}>
                                                        {match.scores?.[2]?.[1] || '-'}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                
                                                {/* Court and Time */}
                                                <div style={{
                                                  marginTop: '8px',
                                                  padding: '8px 0',
                                                  borderTop: '1px solid #f1f5f9',
                                                  display: 'flex',
                                                  justifyContent: 'space-between',
                                                  alignItems: 'center',
                                                  fontSize: '0.75rem',
                                                  color: '#64748b'
                                                }}>
                                                  <span>Court: {match.court || 'TBD'}</span>
                                                  <span>{match.date || 'Aug 22'} - {match.time || 'TBD'}</span>
                                                </div>
                                              </div>
                                            </div>
                                          );

                                          // Determine current mode based on number of brackets
                                          
                                          return (
                                            <div style={{
                                              overflowX: 'auto',
                                              padding: '20px 0'
                                            }}>
                                              {currentMode === 4 ? (
                                                // 4-bracket tournament tree - Complete elimination draw
                                                <div style={{
                                                  display: 'flex',
                                                  alignItems: 'center',
                                                  gap: '60px',
                                                  width: 'max-content'
                                                }}>
                                                  {/* Quarter Finals */}
                                                  <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '30px'
                                                  }}>
                                                    <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Quarter Finals</div>
                                                    <MatchCard match={eliminationMatches[0]} matchNumber={1} />
                                                <MatchCard match={eliminationMatches[1]} matchNumber={2} />
                                                <MatchCard match={eliminationMatches[2]} matchNumber={3} />
                                                <MatchCard match={eliminationMatches[3]} matchNumber={4} />
                                                  </div>
                                                  
                                                  {/* Connecting lines to Semi Finals */}
                                                  <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-around',
                                                    height: '100%',
                                                    minHeight: '500px'
                                                  }}>
                                                    {/* Connection for QF1 and QF2 to SF1 */}
                                                    <div style={{
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      gap: '0',
                                                      marginTop: '40px'
                                                    }}>
                                                      <div style={{
                                                        width: '20px',
                                                        height: '2px',
                                                        background: '#d1d5db'
                                                      }}></div>
                                                      <div style={{
                                                        width: '2px',
                                                        height: '60px',
                                                        background: '#d1d5db'
                                                      }}></div>
                                                      <div style={{
                                                        width: '20px',
                                                        height: '2px',
                                                        background: '#d1d5db'
                                                      }}></div>
                                                    </div>
                                                    
                                                    {/* Connection for QF3 and QF4 to SF2 */}
                                                    <div style={{
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      gap: '0',
                                                      marginBottom: '40px'
                                                    }}>
                                                      <div style={{
                                                        width: '20px',
                                                        height: '2px',
                                                        background: '#d1d5db'
                                                      }}></div>
                                                      <div style={{
                                                        width: '2px',
                                                        height: '60px',
                                                        background: '#d1d5db'
                                                      }}></div>
                                                      <div style={{
                                                        width: '20px',
                                                        height: '2px',
                                                        background: '#d1d5db'
                                                      }}></div>
                                                    </div>
                                                  </div>
                                                  
                                                  {/* Semi Finals */}
                                                  <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '80px',
                                                    justifyContent: 'center'
                                                  }}>
                                                    <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Semi Finals</div>
                                                    <MatchCard match={eliminationMatches[4]} matchNumber={5} />
                                                <MatchCard match={eliminationMatches[5]} matchNumber={6} />
                                                  </div>
                                                  
                                                  {/* Connecting lines to Final */}
                                                  <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '20px'
                                                  }}>
                                                    <div style={{
                                                      width: '40px',
                                                      height: '2px',
                                                      background: '#d1d5db',
                                                      marginTop: '60px'
                                                    }}></div>
                                                    <div style={{
                                                      width: '2px',
                                                      height: '80px',
                                                      background: '#d1d5db'
                                                    }}></div>
                                                    <div style={{
                                                      width: '40px',
                                                      height: '2px',
                                                      background: '#d1d5db',
                                                      marginBottom: '60px'
                                                    }}></div>
                                                  </div>
                                                  
                                                  {/* Final and Bronze Battle Column */}
                                                  <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    gap: '40px'
                                                  }}>
                                                    {/* Final */}
                                                    <div style={{
                                                      display: 'flex',
                                                      flexDirection: 'column',
                                                      justifyContent: 'center'
                                                    }}>
                                                      <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Final</div>
                                                      <MatchCard match={eliminationMatches[6]} matchNumber={7} isChampionship={true} />
                                                    </div>
                                                    
                                                    {/* Bronze Battle */}
                                                    <div style={{
                                                      display: 'flex',
                                                      flexDirection: 'column',
                                                      justifyContent: 'center'
                                                    }}>
                                                      <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Bronze Battle</div>
                                                      <MatchCard match={eliminationMatches[7]} matchNumber={8} isBronze={true} />
                                                    </div>
                                                  </div>
                                                </div>
                                              ) : (
                                                // 8-bracket tournament tree (Round of 16)
                                                <div style={{
                                                  display: 'flex',
                                                  alignItems: 'center',
                                                  gap: '60px',
                                                  width: 'max-content'
                                                }}>
                                                  {/* Round of 16 */}
                                                  <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '20px'
                                                  }}>
                                                    <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Round of 16</div>
                                                    {eliminationMatches.slice(0, 8).map((match, index) => (
                                      <MatchCard key={match.id} match={match} matchNumber={index + 1} />
                                    ))}
                                                  </div>
                                                  
                                                  {/* Connecting lines */}
                                                  <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-around',
                                                    height: '100%',
                                                    minHeight: '600px'
                                                  }}>
                                                    {[...Array(4)].map((_, i) => (
                                                      <div key={i} style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0'
                                                      }}>
                                                        <div style={{
                                                          width: '20px',
                                                          height: '2px',
                                                          background: '#d1d5db'
                                                        }}></div>
                                                        <div style={{
                                                          width: '2px',
                                                          height: '40px',
                                                          background: '#d1d5db'
                                                        }}></div>
                                                        <div style={{
                                                          width: '20px',
                                                          height: '2px',
                                                          background: '#d1d5db'
                                                        }}></div>
                                                      </div>
                                                    ))}
                                                  </div>
                                                  
                                                  {/* Quarter Finals */}
                                                  <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '40px',
                                                    justifyContent: 'center'
                                                  }}>
                                                    <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Quarter Finals</div>
                                                    {eliminationMatches.slice(8, 12).map((match, index) => (
                                      <MatchCard key={match.id} match={match} matchNumber={index + 9} />
                                    ))}
                                                  </div>
                                                  
                                                  {/* Connecting lines to Semi Finals */}
                                                  <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-around',
                                                    height: '100%',
                                                    minHeight: '300px'
                                                  }}>
                                                    {[...Array(2)].map((_, i) => (
                                                      <div key={i} style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0'
                                                      }}>
                                                        <div style={{
                                                          width: '20px',
                                                          height: '2px',
                                                          background: '#d1d5db'
                                                        }}></div>
                                                        <div style={{
                                                          width: '2px',
                                                          height: '80px',
                                                          background: '#d1d5db'
                                                        }}></div>
                                                        <div style={{
                                                          width: '20px',
                                                          height: '2px',
                                                          background: '#d1d5db'
                                                        }}></div>
                                                      </div>
                                                    ))}
                                                  </div>
                                                  
                                                  {/* Semi Finals */}
                                                  <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '80px',
                                                    justifyContent: 'center'
                                                  }}>
                                                    <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Semi Finals</div>
                                                    {eliminationMatches.slice(12, 14).map((match, index) => (
                                      <MatchCard key={match.id} match={match} matchNumber={index + 13} />
                                    ))}
                                                  </div>
                                                  
                                                  {/* Connecting lines to Final */}
                                                  <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '20px'
                                                  }}>
                                                    <div style={{
                                                      width: '40px',
                                                      height: '2px',
                                                      background: '#d1d5db',
                                                      marginTop: '60px'
                                                    }}></div>
                                                    <div style={{
                                                      width: '2px',
                                                      height: '80px',
                                                      background: '#d1d5db'
                                                    }}></div>
                                                    <div style={{
                                                      width: '40px',
                                                      height: '2px',
                                                      background: '#d1d5db',
                                                      marginBottom: '60px'
                                                    }}></div>
                                                  </div>
                                                  
                                                  {/* Final and Bronze Battle Column */}
                                                  <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    gap: '40px'
                                                  }}>
                                                    {/* Final */}
                                                    <div style={{
                                                      display: 'flex',
                                                      flexDirection: 'column',
                                                      justifyContent: 'center'
                                                    }}>
                                                      <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Final</div>
                                                      <MatchCard match={eliminationMatches[14]} matchNumber={15} isChampionship={true} />
                                                    </div>
                                                    
                                                    {/* Bronze Battle */}
                                                    <div style={{
                                                      display: 'flex',
                                                      flexDirection: 'column',
                                                      justifyContent: 'center'
                                                    }}>
                                                      <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Bronze Battle</div>
                                                      <MatchCard match={eliminationMatches[15]} matchNumber={16} isBronze={true} />
                                                    </div>
                                                  </div>
                                                </div>
                                              )}
                                            </div>
                                          );
                                        })()}
                                      </div>
                                    )}
                                  </GroupStageSection>
                                )}

                                {/* Knockout Stage Bracket - Show if exists */}
                                {category.knockoutStage ? (
                                  <div>
                                    {/* Knockout stage content would go here */}
                                  </div>
                                ) : (
                                  // Show bracket logic for determining top players
                                  <div style={{ padding: '24px' }}>
                                    {(() => {
                                      // Reusable Match Card Component
                                      const MatchCard = ({ match, matchNumber }) => (
                                        <div style={{
                                          background: 'white',
                                          border: '1px solid #e2e8f0',
                                          borderRadius: '8px',
                                          minWidth: '400px',
                                          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                                          display: 'flex',
                                          position: 'relative'
                                        }}>
                                          {/* Match Number as first cell */}
                                          <div style={{
                                            background: '#f8fafc',
                                            borderRight: '1px solid #e2e8f0',
                                            width: '40px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                            color: '#1e293b',
                                            borderTopLeftRadius: '8px',
                                            borderBottomLeftRadius: '8px'
                                          }}>{matchNumber}</div>
                                          
                                          <div style={{
                                            flex: 1,
                                            position: 'relative'
                                          }}>
                                            {/* Refresh Icon */}
                                            <div style={{
                                              position: 'absolute',
                                              top: '8px',
                                              right: '8px',
                                              cursor: 'pointer',
                                              padding: '2px'
                                            }}>
                                             
                                            </div>
                                          
                                          {/* Player 1 */}
                                          <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'stretch',
                                            borderBottom: '1px solid #f1f5f9'
                                          }}>
                                            <div style={{
                                              display: 'flex',
                                              alignItems: 'center',
                                              padding: '12px',
                                              flex: 1
                                            }}>
                                              <span style={{ 
                                                fontWeight: '600', 
                                                color: '#1e293b',
                                                fontSize: '16px'
                                              }}>{match.player1.name}</span>
                                            </div>
                                            <div style={{
                                              display: 'flex',
                                              borderLeft: '1px solid #e2e8f0'
                                            }}>
                                              <div style={{
                                                background: match.player1.points === 11 ? '#dcfce7' : 'transparent',
                                                color: match.player1.points === 11 ? '#166534' : '#64748b',
                                                padding: '12px',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                minWidth: '50px',
                                                textAlign: 'center',
                                                borderRight: '1px solid #e2e8f0',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                              }}>{match.player1.points}</div>
                                              <div style={{
                                                background: match.player1.points === 11 ? '#dcfce7' : 'transparent',
                                                color: match.player1.points === 11 ? '#166534' : '#64748b',
                                                padding: '12px',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                minWidth: '50px',
                                                textAlign: 'center',
                                                borderRight: '1px solid #e2e8f0',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                              }}>{match.player1.points}</div>
                                              <div style={{
                                                background: match.player1.points === 11 ? '#dcfce7' : 'transparent',
                                                color: match.player1.points === 11 ? '#166534' : '#64748b',
                                                padding: '12px',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                minWidth: '50px',
                                                textAlign: 'center',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                              }}>{match.player1.points}</div>
                                            </div>
                                          </div>
                                          
                                          {/* Player 2 */}
                                          <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'stretch',
                                            borderBottom: '1px solid #f1f5f9'
                                          }}>
                                            <div style={{
                                              display: 'flex',
                                              alignItems: 'center',
                                              padding: '12px',
                                              flex: 1
                                            }}>
                                              <span style={{ 
                                                fontWeight: '600', 
                                                color: '#1e293b',
                                                fontSize: '16px'
                                              }}>{match.player2.name}</span>
                                            </div>
                                            <div style={{
                                              display: 'flex',
                                              borderLeft: '1px solid #e2e8f0'
                                            }}>
                                              <div style={{
                                                background: match.player2.points === 11 ? '#dcfce7' : 'transparent',
                                                color: match.player2.points === 11 ? '#166534' : '#64748b',
                                                padding: '12px',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                minWidth: '50px',
                                                textAlign: 'center',
                                                borderRight: '1px solid #e2e8f0',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                              }}>{match.player2.points}</div>
                                              <div style={{
                                                background: match.player2.points === 11 ? '#dcfce7' : 'transparent',
                                                color: match.player2.points === 11 ? '#166534' : '#64748b',
                                                padding: '12px',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                minWidth: '50px',
                                                textAlign: 'center',
                                                borderRight: '1px solid #e2e8f0',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                              }}>{match.player2.points}</div>
                                              <div style={{
                                                background: match.player2.points === 11 ? '#dcfce7' : 'transparent',
                                                color: match.player2.points === 11 ? '#166534' : '#64748b',
                                                padding: '12px',
                                                fontSize: '16px',
                                                fontWeight: '600',
                                                minWidth: '50px',
                                                textAlign: 'center',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                              }}>{match.player2.points}</div>
                                            </div>
                                          </div>
                                          
                                            {/* Court and Date Info */}
                                            <div style={{
                                              display: 'flex',
                                              justifyContent: 'space-between',
                                              alignItems: 'center',
                                              padding: '8px 12px',
                                              fontSize: '12px',
                                              color: '#64748b'
                                            }}>
                                              <span>Court: CC</span>
                                              <span>Aug 22 - 09:19 AM +08</span>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                      
                                      // Get top 2 players from each bracket
                                      const getTopPlayersFromBrackets = () => {
                                        const currentMode = 4; // Default to 4 brackets since no switch button
                                        const brackets = currentMode === 8 
                                          ? ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
                                          : ['A', 'B', 'C', 'D'];
                                        const topPlayers = {};
                                        
                                        brackets.forEach(bracket => {
                                          const expectedGroupId = `group-${bracket.toLowerCase()}`;
                                          const group = category.groupStage?.groups?.find(g => g.id === expectedGroupId);
                                          
                                          if (group && group.standings) {
                                            // Sort players by points (wins), then by games won
                                            const sortedPlayers = [...group.standings].sort((a, b) => {
                                              if (b.points !== a.points) return b.points - a.points;
                                              return b.gamesWon - a.gamesWon;
                                            });
                                            
                                            topPlayers[bracket] = {
                                              first: sortedPlayers[0] || null,
                                              second: sortedPlayers[1] || null
                                            };
                                          } else {
                                            topPlayers[bracket] = { first: null, second: null };
                                          }
                                        });
                                        
                                        return topPlayers;
                                      };
                                      
                                      const currentMode = 4; // Default to 4 brackets
                                      let eliminationMatches = [];
                                      
                                      if (currentMode === 4) {
                                        // Get top 2 players from each bracket for proper quarterfinals matchups
                                        const topPlayers = getTopPlayersFromBrackets();
                                        console.log('Category groupStage:', category.groupStage);
                                        console.log('Top players:', topPlayers);
                                        
                                        // 4 bracket elimination - Quarter Finals matchups: a1 vs b2, d1 vs c2, c1 vs d2, b1 vs a2
                                        eliminationMatches = [
                                          {
                                            id: 'quarter1',
                                            title: 'Quarter-Final 1: A1 vs B2',
                                            player1: topPlayers.A?.first ? { 
                                              name: topPlayers.A.first.name, 
                                              bracket: 'A', 
                                              position: '1st', 
                                              points: topPlayers.A.first.points || 0 
                                            } : { name: 'TBD', bracket: 'A', position: '1st', points: '' },
                                            player2: topPlayers.B?.second ? { 
                                              name: topPlayers.B.second.name, 
                                              bracket: 'B', 
                                              position: '2nd', 
                                              points: topPlayers.B.second.points || 0 
                                            } : { name: 'TBD', bracket: 'B', position: '2nd', points: '' }
                                          },
                                          {
                                            id: 'quarter2',
                                            title: 'Quarter-Final 2: D1 vs C2',
                                            player1: topPlayers.D?.first ? { 
                                              name: topPlayers.D.first.name, 
                                              bracket: 'D', 
                                              position: '1st', 
                                              points: topPlayers.D.first.points || 0 
                                            } : { name: 'TBD', bracket: 'D', position: '1st', points: '' },
                                            player2: topPlayers.C?.second ? { 
                                              name: topPlayers.C.second.name, 
                                              bracket: 'C', 
                                              position: '2nd', 
                                              points: topPlayers.C.second.points || 0 
                                            } : { name: 'TBD', bracket: 'C', position: '2nd', points: '' }
                                          },
                                          {
                                            id: 'quarter3',
                                            title: 'Quarter-Final 3: C1 vs D2',
                                            player1: topPlayers.C?.first ? { 
                                              name: topPlayers.C.first.name, 
                                              bracket: 'C', 
                                              position: '1st', 
                                              points: topPlayers.C.first.points || 0 
                                            } : { name: 'TBD', bracket: 'C', position: '1st', points: '' },
                                            player2: topPlayers.D?.second ? { 
                                              name: topPlayers.D.second.name, 
                                              bracket: 'D', 
                                              position: '2nd', 
                                              points: topPlayers.D.second.points || 0 
                                            } : { name: 'TBD', bracket: 'D', position: '2nd', points: '' }
                                          },
                                          {
                                            id: 'quarter4',
                                            title: 'Quarter-Final 4: B1 vs A2',
                                            player1: topPlayers.B?.first ? { 
                                              name: topPlayers.B.first.name, 
                                              bracket: 'B', 
                                              position: '1st', 
                                              points: topPlayers.B.first.points || 0 
                                            } : { name: 'TBD', bracket: 'B', position: '1st', points: '' },
                                            player2: topPlayers.A?.second ? { 
                                              name: topPlayers.A.second.name, 
                                              bracket: 'A', 
                                              position: '2nd', 
                                              points: topPlayers.A.second.points || 0 
                                            } : { name: 'TBD', bracket: 'A', position: '2nd', points: '' }
                                          },
                                          {
                                            id: 'semi1',
                                            title: 'Semi-Final 1',
                                            player1: { name: 'Winner QF1', bracket: 'QF1 Winner', position: 'Winner', points: '' },
                                            player2: { name: 'Winner QF2', bracket: 'QF2 Winner', position: 'Winner', points: '' }
                                          },
                                          {
                                            id: 'semi2',
                                            title: 'Semi-Final 2',
                                            player1: { name: 'Winner QF3', bracket: 'QF3 Winner', position: 'Winner', points: '' },
                                            player2: { name: 'Winner QF4', bracket: 'QF4 Winner', position: 'Winner', points: '' }
                                          },
                                          {
                                            id: 'final',
                                            title: 'Final',
                                            player1: { name: 'Winner SF1', bracket: 'SF1 Winner', position: 'Finalist', points: '' },
                                            player2: { name: 'Winner SF2', bracket: 'SF2 Winner', position: 'Finalist', points: '' }
                                          },
                                          {
                                            id: 'bronze',
                                            title: 'Bronze Battle',
                                            player1: { name: 'Loser SF1', bracket: 'SF1 Loser', position: '3rd Place', points: '' },
                                            player2: { name: 'Loser SF2', bracket: 'SF2 Loser', position: '3rd Place', points: '' }
                                          }
                                        ];
                                      } else {
                                        // 8 bracket elimination - automatically starts at Round of 16
                                        eliminationMatches = [
                                          {
                                            id: 'round16_1',
                                            title: 'Round of 16 - Match 1',
                                            player1: { name: 'John Doe', bracket: 'A', position: '1st', points: 44 },
                                            player2: { name: 'Carmen Lopez', bracket: 'E', position: '2nd', points: 29 }
                                          },
                                          {
                                            id: 'round16_2',
                                            title: 'Round of 16 - Match 2',
                                            player1: { name: 'Carlos Rodriguez', bracket: 'A', position: '2nd', points: 28 },
                                            player2: { name: 'Elena Cruz', bracket: 'E', position: '1st', points: 44 }
                                          },
                                          {
                                            id: 'round16_3',
                                            title: 'Round of 16 - Match 3',
                                            player1: { name: 'Michael Johnson', bracket: 'B', position: '1st', points: 44 },
                                            player2: { name: 'Rachel Gonzalez', bracket: 'F', position: '2nd', points: 31 }
                                          },
                                          {
                                            id: 'round16_4',
                                            title: 'Round of 16 - Match 4',
                                            player1: { name: 'Luis Chen', bracket: 'B', position: '2nd', points: 35 },
                                            player2: { name: 'Andrea Martinez', bracket: 'F', position: '1st', points: 37 }
                                          },
                                          {
                                            id: 'round16_5',
                                            title: 'Round of 16 - Match 5',
                                            player1: { name: 'Jason Park', bracket: 'C', position: '1st', points: 37 },
                                            player2: { name: 'Michelle Yang', bracket: 'G', position: '2nd', points: 25 }
                                          },
                                          {
                                            id: 'round16_6',
                                            title: 'Round of 16 - Match 6',
                                            player1: { name: 'Anthony Chen', bracket: 'C', position: '2nd', points: 31 },
                                            player2: { name: 'Maria Santos', bracket: 'G', position: '1st', points: 35 }
                                          },
                                          {
                                            id: 'round16_7',
                                            title: 'Round of 16 - Match 7',
                                            player1: { name: 'Patrick Lim', bracket: 'D', position: '1st', points: 32 },
                                            player2: { name: 'Victoria Huang', bracket: 'H', position: '2nd', points: 19 }
                                          },
                                          {
                                            id: 'round16_8',
                                            title: 'Round of 16 - Match 8',
                                            player1: { name: 'Jonathan Wu', bracket: 'D', position: '2nd', points: 29 },
                                            player2: { name: 'Sarah Kim', bracket: 'H', position: '1st', points: 36 }
                                          },
                                          // Quarter Finals
                                          {
                                            id: 'quarter1',
                                            title: 'Quarter-Final 1',
                                            player1: { name: 'Winner R16-1', bracket: 'R16-1 Winner', position: 'QF', points: '' },
                                            player2: { name: 'Winner R16-2', bracket: 'R16-2 Winner', position: 'QF', points: '' }
                                          },
                                          {
                                            id: 'quarter2',
                                            title: 'Quarter-Final 2',
                                            player1: { name: 'Winner R16-3', bracket: 'R16-3 Winner', position: 'QF', points: '' },
                                            player2: { name: 'Winner R16-4', bracket: 'R16-4 Winner', position: 'QF', points: '' }
                                          },
                                          {
                                            id: 'quarter3',
                                            title: 'Quarter-Final 3',
                                            player1: { name: 'Winner R16-5', bracket: 'R16-5 Winner', position: 'QF', points: '' },
                                            player2: { name: 'Winner R16-6', bracket: 'R16-6 Winner', position: 'QF', points: '' }
                                          },
                                          {
                                            id: 'quarter4',
                                            title: 'Quarter-Final 4',
                                            player1: { name: 'Winner R16-7', bracket: 'R16-7 Winner', position: 'QF', points: '' },
                                            player2: { name: 'Winner R16-8', bracket: 'R16-8 Winner', position: 'QF', points: '' }
                                          },
                                          // Semi Finals
                                          {
                                            id: 'semi1',
                                            title: 'Semi-Final 1',
                                            player1: { name: 'Winner QF1', bracket: 'QF1 Winner', position: 'Semifinalist', points: '' },
                                            player2: { name: 'Winner QF2', bracket: 'QF2 Winner', position: 'Semifinalist', points: '' }
                                          },
                                          {
                                            id: 'semi2',
                                            title: 'Semi-Final 2',
                                            player1: { name: 'Winner QF3', bracket: 'QF3 Winner', position: 'Semifinalist', points: '' },
                                            player2: { name: 'Winner QF4', bracket: 'QF4 Winner', position: 'Semifinalist', points: '' }
                                          },
                                          // Final
                                          {
                                            id: 'final',
                                            title: 'Final',
                                            player1: { name: 'Winner SF1', bracket: 'SF1 Winner', position: 'Finalist', points: '' },
                                            player2: { name: 'Winner SF2', bracket: 'SF2 Winner', position: 'Finalist', points: '' }
                                          },
                                          // Bronze Battle
                                          {
                                            id: 'bronze',
                                            title: 'Bronze Battle',
                                            player1: { name: 'Loser SF1', bracket: 'SF1 Loser', position: '3rd Place', points: '' },
                                            player2: { name: 'Loser SF2', bracket: 'SF2 Loser', position: '3rd Place', points: '' }
                                          }
                                        ];
                                      }
                                      
                                      if (currentMode === 4) {
                                        
                                        // Show placeholder if no knockout stage yet
                                        return (
                                          <div style={{ 
                                            textAlign: 'center', 
                                            padding: '32px 24px',
                                            background: 'white',
                                            borderRadius: '12px',
                                            border: '1px solid #e2e8f0',
                                            marginTop: '16px'
                                          }}>
                                            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🏆</div>
                                            <h3 style={{ color: '#334155', marginBottom: '8px', fontSize: '1.1rem' }}>Knockout Bracket Coming Soon</h3>
                                            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '16px' }}>
                                              The knockout bracket will be generated once the group stage is complete.
                                            </p>
                                           {Object.keys(topPlayers).length > 0 && (
  <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '16px' }}>
    <p>Top players from each bracket:</p>
    {Object.entries(topPlayers).map(([bracket, players]) => (
      <div key={bracket} style={{ margin: '4px 0' }}>
        Bracket {bracket}: {players.first?.name || 'TBD'} (1st), {players.second?.name || 'TBD'} (2nd)
      </div>
    ))}
  </div>
)}
                                          </div>
                                        );
                                      }
                                      
                                      return null;
                                    })()
                                    }
                                  </div>
                                )}
                              </CategoryBracketContent>
                            )}
                          </CategoryCard>
                        ))}
                      </div>
                    ) : (
                      // Fallback for tournaments without categories
                      <>
                        {selectedTournament.tournamentBracket ? (
                          <>
                            {/* Original bracket display logic here */}
                          </>
                        ) : (
                          <div style={{ 
                            textAlign: 'center', 
                            padding: '48px 24px',
                            background: '#f8fafc',
                            borderRadius: '16px',
                            border: '1px dashed #e2e8f0'
                          }}>
                            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏆</div>
                            <h3 style={{ color: '#334155', marginBottom: '8px' }}>Tournament Bracket Not Available</h3>
                            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                              The tournament bracket will be generated once the group stage is complete and knockout matches begin.
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </TournamentDetailSection>
                )}

                {activeTab === 'players' && (
                  <TournamentDetailSection>
                    <TournamentDetailSectionTitle>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Players
                    </TournamentDetailSectionTitle>
                    
                    {/* Category Selection Dropdown */}
                    <div style={{ marginBottom: '20px' }}>
                      <select
                        value={selectedPlayerCategory}
                        onChange={(e) => {
                          setSelectedPlayerCategory(e.target.value);
                          setPlayersSearchTerm(''); // Reset search when category changes
                        }}
                        style={{
                          width: '100%',
                          maxWidth: '300px',
                          padding: '12px 16px',
                          border: '1.5px solid #e2e8f0',
                          borderRadius: '8px',
                          fontSize: '0.95rem',
                          backgroundColor: 'white',
                          color: '#334155',
                          cursor: 'pointer',
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#29ba9b'}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      >
                        <option value="all">All Categories</option>
                       {selectedTournament.tournamentCategories &&
  selectedTournament.tournamentCategories.map((category, index) => (
    <option key={index} value={category.division}>
      {category.division} {category.skillLevel ? `- ${category.skillLevel}` : ''}
    </option>
  ))}

                      </select>
                    </div>
                    
                    {/* Player Tabs Navigation */}
                    <TabNavigation>
                      <TabButton 
                        $active={activePlayerTab === 'approved'}
                        onClick={() => setActivePlayerTab('approved')}
                      >
                        Approved Players
                      </TabButton>
                      <TabButton 
                        $active={activePlayerTab === 'pending'}
                        onClick={() => setActivePlayerTab('pending')}
                      >
                        Pending Players
                      </TabButton>
                    </TabNavigation>
                    
                    {/* Approved Players Tab Content */}
                    {activePlayerTab === 'approved' && (
                      selectedTournament.registrations && selectedTournament.registrations.filter(reg => {
                        console.log('Approved player filter - Player:', reg.player?.firstName, reg.player?.lastName, 'Category:', reg.category, 'Selected:', selectedPlayerCategory, 'Status:', reg.status);
                        return reg && reg.status === 'approved';
                      }).filter(reg => {
                        const shouldShow = selectedPlayerCategory === 'all' || reg.category === selectedPlayerCategory;
                        console.log('Category filter - Player:', reg.player?.firstName, reg.player?.lastName, 'Category:', reg.category, 'Selected:', selectedPlayerCategory, 'Should show:', shouldShow);
                        return reg && shouldShow;
                      }).length > 0 ? (
                      <div>
                        {/* Search Bar */}
                        <div style={{ marginBottom: '24px' }}>
                          <div style={{
                            position: 'relative',
                            maxWidth: '400px',
                            margin: '0 auto'
                          }}>
                            <input
                              type="text"
                              placeholder="Search players by name..."
                              value={playersSearchTerm}
                              onChange={(e) => setPlayersSearchTerm(e.target.value)}
                              style={{
                                width: '100%',
                                padding: '12px 16px 12px 44px',
                                border: '1.5px solid #e2e8f0',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                color: '#1a1a1a',
                                background: 'white',
                                transition: 'all 0.2s ease',
                                outline: 'none'
                              }}
                              onFocus={(e) => {
                                e.target.style.borderColor = '#29ba9b';
                                e.target.style.boxShadow = '0 0 0 3px rgba(41, 186, 155, 0.1)';
                              }}
                              onBlur={(e) => {
                                e.target.style.borderColor = '#e2e8f0';
                                e.target.style.boxShadow = 'none';
                              }}
                            />
                            <div style={{
                              position: 'absolute',
                              left: '14px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              color: '#94a3b8'
                            }}>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px' }}>
                                <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="m21 21-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div style={{ 
                          background: '#f8fafc', 
                          padding: '16px', 
                          borderRadius: '8px', 
                          border: '1px solid #e2e8f0',
                          marginBottom: '24px',
                          textAlign: 'center'
                        }}>
                          <span style={{ color: '#64748b', fontSize: '0.9rem' }}>
                            {(() => {
                              // Get approved players in this category
                              const approvedPlayers = selectedTournament.registrations
                                .filter(reg => reg.status === 'approved')
                                .filter(reg => selectedPlayerCategory === 'all' || reg.category === selectedPlayerCategory);

                              // Filter by search term using firstName + lastName
                              const filteredPlayers = approvedPlayers.filter(reg => {
                                const fullName = reg.player 
                                  ? `${reg.player.firstName || ""} ${reg.player.lastName || ""}`.trim() 
                                  : "";
                                return fullName.toLowerCase().includes((playersSearchTerm || "").toLowerCase());
                              });

                              return playersSearchTerm 
                                ? `Showing ${filteredPlayers.length} of ${approvedPlayers.length} approved players`
                                : `Total Approved Players: ${approvedPlayers.length}`;
                            })()}
                          </span>
                        </div>
                        
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                          gap: '16px'
                        }}>
                          {selectedTournament.registrations
                            .filter(reg => {
                              const fullName = reg.player 
                                ? `${reg.player.firstName || ""} ${reg.player.lastName || ""}`.trim() 
                                : "";
                              return reg.status === 'approved';
                            })
                            .filter(reg => {
                              const shouldShow = selectedPlayerCategory === 'all' || reg.category === selectedPlayerCategory;
                              return shouldShow;
                            })
                            .filter(player => {
                              const fullName = player.player 
                                ? `${player.player.firstName || ""} ${player.player.lastName || ""}`.trim() 
                                : "";
                              return fullName.toLowerCase().includes((playersSearchTerm || "").toLowerCase());
                            })
                            .sort((a, b) => {
                              const fullNameA = a.player 
                                ? `${a.player.firstName || ""} ${a.player.lastName || ""}`.trim() 
                                : "";
                              const fullNameB = b.player 
                                ? `${b.player.firstName || ""} ${b.player.lastName || ""}`.trim() 
                                : "";
                              
                              return fullNameA.localeCompare(fullNameB);
                            })
                            .map((player, index) => (
                              <div key={player.id} style={{
                                background: 'white',
                                border: '1px solid #e2e8f0',
                                borderRadius: '12px',
                                padding: '20px',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                              }}>
                                <div style={{
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: '12px',
                                  marginBottom: '16px'
                                }}>
                                  <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #29ba9b, #1e40af)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    flexShrink: 0
                                  }}>
                                    {player.player ? `${(player.player.firstName || '')[0]}${(player.player.lastName || '')[0]}`.toUpperCase() : '?'}
                                  </div>
                                  <div style={{ flex: 1 }}>
                                {/* Player Name - Left Aligned */}
                                <div style={{
                                  fontWeight: '700',
                                  color: '#334155',
                                  fontSize: '1.1rem',
                                  marginBottom: '12px',
                                  textAlign: 'left'
                                }}>
                                  {player.player ? `${player.player.firstName} ${player.player.lastName}` : 'Unknown Player'}
                                </div>
                                
                                {/* Player Details in One Row */}
                                <div style={{
                                  display: 'grid',
                                  gridTemplateColumns: '1fr 1fr 1fr 1fr',
                                  gap: '12px',
                                  marginBottom: '16px'
                                }}>
                                  <div style={{
                                    background: '#FFFFFF',
                                    padding: '0px',
                                    borderRadius: '6px',
                                    textAlign: 'center'
                                  }}>
                                    <div style={{
                                      fontSize: '0.7rem',
                                      color: '#64748b',
                                      fontWeight: '500',
                                      marginBottom: '2px'
                                    }}>
                                      PPL ID
                                    </div>
                                    <div style={{
                                      fontSize: '0.85rem',
                                      fontWeight: '600',
                                      color: '#29ba9b'
                                    }}>
                                      {player.player?.pplId || 'N/A'}
                                    </div>
                                  </div>
                                  <div style={{
                                    background: '#FFFFFF',
                                    padding: '0px',
                                    borderRadius: '6px',
                                    textAlign: 'center'
                                  }}>
                                    <div style={{
                                      fontSize: '0.7rem',
                                      color: '#64748b',
                                      fontWeight: '500',
                                      marginBottom: '2px'
                                    }}>
                                      GENDER
                                    </div>
                                    <div style={{
                                      fontSize: '0.85rem',
                                      fontWeight: '500',
                                      color: '#334155',
                                      textTransform: 'capitalize'
                                    }}>
                                      {player.player?.gender || 'N/A'}
                                    </div>
                                  </div>
                                  <div style={{
                                    background: '#FFFFFF',
                                    padding: '0px',
                                    borderRadius: '6px',
                                    textAlign: 'center'
                                  }}>
                                    <div style={{
                                      fontSize: '0.7rem',
                                      color: '#64748b',
                                      fontWeight: '500',
                                      marginBottom: '2px'
                                    }}>
                                      Age
                                    </div>
                                    <div style={{
                                      fontSize: '0.85rem',
                                      fontWeight: '500',
                                      color: '#334155'
                                    }}>
                                      <span>{getAge(player.player?.birthDate)}</span>
                                    </div>
                                  </div>
                                  <div style={{
                                    background: '#FFFFFF',
                                    padding: '0px',
                                    borderRadius: '6px',
                                    textAlign: 'center'
                                  }}>
                                    <div style={{
                                      fontSize: '0.7rem',
                                      color: '#64748b',
                                      fontWeight: '500',
                                      marginBottom: '2px'
                                    }}>
                                      DUPR ID
                                    </div>
                                    <div style={{
                                      fontSize: '0.85rem',
                                      fontWeight: '700',
                                      color: '#29ba9b'
                                    }}>
                                      {player.player?.duprId || 'N/A'}
                                    </div>
                                  </div>
                                </div>
                                </div>
                                </div>
                                
                                {/* Category Display */}
                                {selectedPlayerCategory === 'all' && (
                                  <div style={{
                                    fontSize: '0.75rem',
                                    color: '#29ba9b',
                                    fontWeight: '500',
                                    marginTop: '8px',
                                    textAlign: 'center',
                                    background: '#f0fdf4',
                                    padding: '4px 8px',
                                    borderRadius: '4px'
                                  }}>
                                    {(() => {
                                      const category = selectedTournament.tournamentCategories && 
                                        Object.values(selectedTournament.tournamentCategories).find(cat => cat._id.toString() === player.category);
                                      return category ? category.division : '';
                                    })()}
                                  </div>
                                )}
                              </div>
                            ))}
                        </div>
                        
                        {/* No results message */}
                        {playersSearchTerm && 
                         selectedTournament.registrations
                           .filter(reg => reg.status === 'approved')
                           .filter(reg => selectedPlayerCategory === 'all' || reg.category === selectedPlayerCategory)
                           .filter(player => {
                             const fullName = player.player 
                               ? `${player.player.firstName || ""} ${player.player.lastName || ""}`.trim() 
                               : "";
                             return fullName.toLowerCase().includes(playersSearchTerm.toLowerCase());
                           }).length === 0 && (
                          <div style={{ 
                            textAlign: 'center', 
                            padding: '48px 24px',
                            background: '#f8fafc',
                            borderRadius: '16px',
                            border: '1px dashed #e2e8f0',
                            marginTop: '24px'
                          }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🔍</div>
                            <h3 style={{ color: '#334155', marginBottom: '8px' }}>No Players Found</h3>
                            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                              No approved players match your search for "{playersSearchTerm}".
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div style={{ 
                        textAlign: 'center', 
                        padding: '48px 24px',
                        background: '#f8fafc',
                        borderRadius: '16px',
                        border: '1px dashed #e2e8f0'
                      }}>
                        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>👥</div>
                        <h3 style={{ color: '#334155', marginBottom: '8px' }}>No Approved Players Yet</h3>
                        <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                          Players will appear here once their registration is approved by the tournament organizer.
                        </p>
                      </div>
                      )
                    )}

                    {/* Pending Players Tab Content */}
                    {activePlayerTab === 'pending' && (
                      selectedTournament.registrations && selectedTournament.registrations.filter(reg => {
                        console.log('Pending player filter - Player:', reg.playerName, 'CategoryId:', reg.category, 'Selected:', selectedPlayerCategory, 'Status:', reg.status);
                        return reg.status === 'pending';
                      }).filter(reg => {
                        const shouldShow = selectedPlayerCategory === 'all' || reg.category === selectedPlayerCategory;
                        console.log('Pending category filter check - Player:', reg.playerName, 'CategoryId:', reg.category, 'Selected:', selectedPlayerCategory, 'Should show:', shouldShow);
                        return shouldShow;
                      }).length > 0 ? (
                        <div>
                          {/* Search Bar */}
                          <div style={{ marginBottom: '24px' }}>
                            <div style={{
                              position: 'relative',
                              maxWidth: '400px',
                              margin: '0 auto'
                            }}>
                              <input
                                type="text"
                                placeholder="Search pending players..."
                                value={playersSearchTerm}
                                onChange={(e) => setPlayersSearchTerm(e.target.value)}
                                style={{
                                  width: '100%',
                                  padding: '12px 16px 12px 44px',
                                  border: '1.5px solid #e2e8f0',
                                  borderRadius: '8px',
                                  fontSize: '1rem',
                                  color: '#1a1a1a',
                                  background: 'white',
                                  transition: 'all 0.2s ease',
                                  outline: 'none'
                                }}
                                onFocus={(e) => {
                                  e.target.style.borderColor = '#29ba9b';
                                  e.target.style.boxShadow = '0 0 0 3px rgba(41, 186, 155, 0.1)';
                                }}
                                onBlur={(e) => {
                                  e.target.style.borderColor = '#e2e8f0';
                                  e.target.style.boxShadow = 'none';
                                }}
                              />
                              <div style={{
                                position: 'absolute',
                                left: '14px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#94a3b8'
                              }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px' }}>
                                  <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="m21 21-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div style={{ 
                            background: '#fef3c7', 
                            padding: '16px', 
                            borderRadius: '8px', 
                            border: '1px solid #f59e0b',
                            marginBottom: '24px',
                            textAlign: 'center'
                          }}>
                            <span style={{ color: '#92400e', fontSize: '0.9rem' }}>
                              {(() => {
                                const pendingPlayers = selectedTournament.registrations
                                  .filter(reg => reg.status === 'pending')
                                  .filter(reg => selectedPlayerCategory === 'all' || reg.category === selectedPlayerCategory);
                                const filteredPlayers = pendingPlayers.filter(player => {
                                  const cleanName = player.playerName.replace(/["'].*?["']/g, '').trim();
                                  return cleanName.toLowerCase().includes(playersSearchTerm.toLowerCase());
                                });
                                return playersSearchTerm 
                                  ? `Showing ${filteredPlayers.length} of ${pendingPlayers.length} pending players`
                                  : `Total Pending Players: ${pendingPlayers.length}`;
                              })()} 
                            </span>
                          </div>
                          
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '16px'
                          }}>
                            {selectedTournament.registrations
                              .filter(reg => {
                                console.log('Rendering pending - Player:', reg.playerName, 'CategoryId:', reg.category, 'Status:', reg.status);
                                return reg.status === 'pending';
                              })
                              .filter(reg => {
                                const shouldShow = selectedPlayerCategory === 'all' || reg.category === selectedPlayerCategory;
                                console.log('Pending category filter - Player:', reg.playerName, 'CategoryId:', reg.category, 'Selected:', selectedPlayerCategory, 'Should show:', shouldShow);
                                return shouldShow;
                              })
                              .filter(player => {
                                const cleanName = player.playerName.replace(/["'].*?["']/g, '').trim();
                                return cleanName.toLowerCase().includes(playersSearchTerm.toLowerCase());
                              })
                              .sort((a, b) => {
                                const cleanNameA = a.playerName.replace(/["'].*?["']/g, '').trim();
                                const cleanNameB = b.playerName.replace(/["'].*?["']/g, '').trim();
                                return cleanNameA.localeCompare(cleanNameB);
                              })
                              .map((player, index) => (
                                <div key={player.id} style={{
                                  background: 'white',
                                  border: '1px solid #f59e0b',
                                  borderRadius: '12px',
                                  padding: '20px',
                                  transition: 'all 0.2s ease',
                                  boxShadow: '0 1px 3px rgba(245, 158, 11, 0.2)'
                                }}>
                                  <div style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '16px',
                                    marginBottom: '16px'
                                  }}>
                                    <div style={{
                                      width: '50px',
                                      height: '50px',
                                      borderRadius: '50%',
                                      background: '#f59e0b',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      color: 'white',
                                      fontWeight: '600',
                                      fontSize: '16px',
                                      flexShrink: 0
                                    }}>
                                      {player.playerName.replace(/["'].*?["']/g, '').trim().split(' ').map(n => n[0]).join('').toUpperCase()}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                  {/* Player Name - Left Aligned */}
                                  <div style={{
                                    fontWeight: '700',
                                    color: '#334155',
                                    fontSize: '1.1rem',
                                    marginBottom: '12px',
                                    textAlign: 'left'
                                  }}>
                                    {player.playerName.replace(/["'].*?["']/g, '').trim()}
                                  </div>
                                  
                                  {/* Player Details in One Row */}
                                  <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                                    gap: '12px',
                                    marginBottom: '16px'
                                  }}>
                                    <div style={{
                                      background: '#FFFFFF',
                                      padding: '8px',
                                      borderRadius: '6px',
                                      textAlign: 'center'
                                    }}>
                                      <div style={{
                                        fontSize: '0.7rem',
                                        color: '#64748b',
                                        fontWeight: '500',
                                        marginBottom: '2px'
                                      }}>
                                        PPL ID
                                      </div>
                                      <div style={{
                                        fontSize: '0.85rem',
                                        fontWeight: '600',
                                        color: '#f59e0b'
                                      }}>
                                        {player.pplId || 'PPL' + String(Math.floor(Math.random() * 9000) + 1000)}
                                      </div>
                                    </div>
                                    <div style={{
                                      background: '#FFFFFF',
                                      padding: '8px',
                                      borderRadius: '6px',
                                      textAlign: 'center'
                                    }}>
                                      <div style={{
                                        fontSize: '0.7rem',
                                        color: '#64748b',
                                        fontWeight: '500',
                                        marginBottom: '2px'
                                      }}>
                                        GENDER
                                      </div>
                                      <div style={{
                                        fontSize: '0.85rem',
                                        fontWeight: '500',
                                        color: '#334155',
                                        textTransform: 'capitalize'
                                      }}>
                                        {player.gender || 'Not specified'}
                                      </div>
                                    </div>
                                    <div style={{
                                      background: '#FFFFFF',
                                      padding: '8px',
                                      borderRadius: '6px',
                                      textAlign: 'center'
                                    }}>
                                      <div style={{
                                        fontSize: '0.7rem',
                                        color: '#64748b',
                                        fontWeight: '500',
                                        marginBottom: '2px'
                                      }}>
                                        AGE
                                      </div>
                                      <div style={{
                                        fontSize: '0.85rem',
                                        fontWeight: '500',
                                        color: '#334155'
                                      }}>
                                        {player.age || 'Not specified'}
                                      </div>
                                    </div>
                                    <div style={{
                                      background: '#FFFFFF',
                                      padding: '8px',
                                      borderRadius: '6px',
                                      textAlign: 'center'
                                    }}>
                                      <div style={{
                                        fontSize: '0.7rem',
                                        color: '#64748b',
                                        fontWeight: '500',
                                        marginBottom: '2px'
                                      }}>
                                        DUPR 
                                      </div>
                                      <div style={{
                                        fontSize: '0.85rem',
                                        fontWeight: '700',
                                        color: '#f59e0b'
                                      }}>
                                        {(() => {
                                          const category = selectedTournament.tournamentCategories && 
                                            Object.values(selectedTournament.tournamentCategories).find(cat => cat._id.toString() === player.category);
                                          const categoryType = category ? category.name.toLowerCase() : '';
                                          if (categoryType.includes('singles')) {
                                            return player.duprRatings?.singles || '4.2';
                                          } else if (categoryType.includes('doubles') || categoryType.includes('mixed')) {
                                            return player.duprRatings?.doubles || '4.1';
                                          }
                                          return player.duprRatings?.doubles || '4.1';
                                        })()} 
                                      </div>
                                    </div>
                                  </div>
                                  </div>
                                  </div>

                                  {/* Category Display */}
                                  {selectedPlayerCategory === 'all' && (
                                    <div style={{
                                      fontSize: '0.75rem',
                                      color: '#f59e0b',
                                      fontWeight: '500',
                                      marginTop: '8px',
                                      textAlign: 'center',
                                      background: '#fef3c7',
                                      padding: '4px 8px',
                                      borderRadius: '4px'
                                    }}>
                                      {(() => {
                                        const category = selectedTournament.tournamentCategories && 
                                          Object.values(selectedTournament.tournamentCategories).find(cat => cat._id.toString() === player.category);
                                        return category ? category.division : 'Category N/A';
                                      })()}
                                    </div>
                                  )}
                                  
                                  {/* Action Buttons */}
                                  
                                </div>
                              ))}
                          </div>
                          
                          {/* No results message */}
                          {playersSearchTerm && 
                           selectedTournament.registrations
                             .filter(reg => reg.status === 'pending')
                             .filter(reg => selectedPlayerCategory === 'all' || reg.category === selectedPlayerCategory)
                             .filter(player => {
                               const cleanName = player.playerName.replace(/["'].*?["']/g, '').trim();
                               return cleanName.toLowerCase().includes(playersSearchTerm.toLowerCase());
                             }).length === 0 && (
                            <div style={{ 
                              textAlign: 'center', 
                              padding: '48px 24px',
                              background: '#fef3c7',
                              borderRadius: '16px',
                              border: '1px dashed #f59e0b',
                              marginTop: '24px'
                            }}>
                              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🔍</div>
                              <h3 style={{ color: '#334155', marginBottom: '8px' }}>No Pending Players Found</h3>
                              <p style={{ color: '#92400e', fontSize: '0.95rem' }}>
                                No pending players match your search for "{playersSearchTerm}".
                              </p>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div style={{ 
                          textAlign: 'center', 
                          padding: '48px 24px',
                          background: '#fef3c7',
                          borderRadius: '16px',
                          border: '1px dashed #f59e0b'
                        }}>
                          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⏳</div>
                          <h3 style={{ color: '#334155', marginBottom: '8px' }}>No Pending Players</h3>
                          <p style={{ color: '#92400e', fontSize: '0.95rem' }}>
                            There are currently no players awaiting approval for this tournament.
                          </p>
                        </div>
                      )
                    )}
                  </TournamentDetailSection>
                )}

                {activeTab === 'guidelines' && (
                  <TournamentDetailSection>
                    <TournamentDetailSectionTitle>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Tournament Guidelines
                    </TournamentDetailSectionTitle>
                    
                    {selectedTournament.rules && selectedTournament.rules.trim() ? (
      <div>
        <div style={{ 
          background: '#fef3c7', 
          padding: '16px', 
          borderRadius: '8px', 
          border: '1px solid #f59e0b',
          marginBottom: '24px'
        }}>
          <div style={{ 
            color: '#92400e', 
            fontWeight: '600', 
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span>⚠️</span>
            Important Notice
          </div>
          <div style={{ color: '#92400e', fontSize: '0.9rem', lineHeight: '1.5' }}>
            Please read and understand all tournament guidelines before participating. 
            Violations may result in disqualification.
          </div>
        </div>

        <div style={{
          background: 'white',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '24px'
        }}>
          <div
            style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#334155',
            }}
            dangerouslySetInnerHTML={{ __html: selectedTournament.rules }}
          />
        </div>
      </div>
    ) : (
      <div style={{ 
        textAlign: 'center', 
        padding: '48px 24px',
        background: '#f8fafc',
        borderRadius: '16px',
        border: '1px dashed #e2e8f0'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📋</div>
        <h3 style={{ color: '#334155', marginBottom: '8px' }}>No Guidelines Available</h3>
        <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
          Tournament guidelines will be posted by the organizer before the event begins.
        </p>
      </div>
    )}
                  </TournamentDetailSection>
                )}


              </TabContent>
            </TournamentDetailLeft>

            <TournamentDetailRight>
              <StickyActionBar>
                <StickyActionTitle>Tournament Registration</StickyActionTitle>
  <PriceDisplay>
  <div className="price">
    ₱{selectedTournament?.entryFee != null 
        ? selectedTournament.entryFee.toLocaleString() 
        : "0"}
  </div>
</PriceDisplay>

{/* Action Buttons */}
<TournamentActionButtons>
  {(user && selectedTournament && (user.name !== selectedTournament.clubadmin || isHostView)) && (
    <ActionButton
      variant="primary"
      onClick={() => {
        // 1️⃣ Ensure the tournament is selected
        setSelectedTournament(selectedTournament);

        // 2️⃣ Open the registration form/modal
        setShowRegistrationForm(true);
      }}
      disabled={
        (selectedTournament?.registrations?.filter(reg => reg.status === 'approved').length || 0) >= selectedTournament.maxParticipants || !isAuthenticated
      }
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Register Now
    </ActionButton>
  )}

  <ActionButton
    variant="secondary"
    onClick={() => {
      if (!selectedTournament) return;

      if (navigator.share) {
        navigator.share({
          title: selectedTournament.tournamentName,
          text: `Check out this tournament: ${selectedTournament.tournamentName}`,
          url: window.location.href
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        // optional: show a notification here
      }
    }}
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    Share
  </ActionButton>
</TournamentActionButtons>


              </StickyActionBar>

              {/* Tournament Sponsors Section */}
              <div style={{ marginTop: '32px' }}>
                <TournamentDetailSection>
                  <TournamentDetailSectionTitle>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l7 7z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Tournament Sponsors
                  </TournamentDetailSectionTitle>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 0' }}>
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" 
                        alt="Nike"
                        style={{ 
                          width: '45px', 
                          height: '45px', 
                          objectFit: 'contain', 
                          borderRadius: '8px',
                          background: 'white',
                          padding: '6px',
                          border: '1px solid #e2e8f0'
                        }}
                      />
                      <SponsorName style={{ fontSize: '1rem', margin: '0', color: '#334155' }}>Nike Philippines</SponsorName>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 0' }}>
                      <div style={{ 
                        width: '45px', 
                        height: '45px', 
                        background: 'linear-gradient(135deg, #ff6600, #ff8800)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                        border: '1px solid #e2e8f0'
                      }}>
                        G
                      </div>
                      <SponsorName style={{ fontSize: '1rem', margin: '0', color: '#334155' }}>Gatorade</SponsorName>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 0' }}>
                      <div style={{ 
                        width: '45px', 
                        height: '45px', 
                        background: 'linear-gradient(135deg, #003d7a, #0066cc)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                        border: '1px solid #e2e8f0'
                      }}>
                        BDO
                      </div>
                      <SponsorName style={{ fontSize: '1rem', margin: '0', color: '#334155' }}>BDO Unibank</SponsorName>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 0' }}>
                      <div style={{ 
                        width: '45px', 
                        height: '45px', 
                        background: 'linear-gradient(135deg, #e31837, #ff4444)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                        border: '1px solid #e2e8f0'
                      }}>
                        🐝
                      </div>
                      <SponsorName style={{ fontSize: '1rem', margin: '0', color: '#334155' }}>Jollibee</SponsorName>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 0' }}>
                      <img 
                        src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=400&fit=crop&crop=center" 
                        alt="Sports Equipment"
                        style={{ 
                          width: '45px', 
                          height: '45px', 
                          objectFit: 'cover', 
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0'
                        }}
                      />
                      <SponsorName style={{ fontSize: '1rem', margin: '0', color: '#334155' }}>Metro Sports Hub</SponsorName>
                    </div>


                  </div>
                </TournamentDetailSection>
              </div>
            </TournamentDetailRight>
          </TournamentDetailBody>
          </TournamentDetailContainer>
        </TournamentDetailContent>

        {showAuthModal && (
          <AuthModal
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            title="Join the Tournament!"
            message="Sign in or register to participate in tournaments"
          />
        )}


{showRegistrationModal && registrationTournament && (
  <RegistrationModal onClick={closeRegistrationModal}>
    <RegistrationModalContent onClick={e => e.stopPropagation()}>
      <RegistrationModalHeader>
        <RegistrationModalTitle>Register for {registrationTournament.tournamentName}</RegistrationModalTitle>
        <CloseButton onClick={closeRegistrationModal}>×</CloseButton>
      </RegistrationModalHeader>

      <RegistrationModalBody>
        <form onSubmit={handleRegistrationSubmit}>
          {/* Category/Division/Level Selection */}
          <RegistrationFormSection>
            <RegistrationSectionTitle>Tournament Category</RegistrationSectionTitle>

            <RegistrationFormRow>
              <RegistrationFormGroup>
                <RegistrationSelect
  key={categoryFilterKey}
  value={registrationForm.category}
  onChange={(e) => handleRegistrationFormChange('category', e.target.value)}
  required
>
  <option value="">Select Tournament Category</option>

  {registrationTournament?.tournamentCategories?.map((category) => {
    const division = category.division || '';
    const skillLevel = category.skillLevel === 'Open' && category.tier
      ? `Open Tier ${category.tier}`
      : category.skillLevel || '';
    const ageCategory = category.ageCategory || '';
    const displayName = [division, skillLevel, ageCategory].filter(Boolean).join(' | ') || 'Unknown Category';

    // Use logged-in user info
    const primaryPlayer = {
      gender: user?.gender || 'male',
      age: user?.birthDate ? new Date().getFullYear() - new Date(user.birthDate).getFullYear() : 25,
    };

    const isAllowed = isCategoryAllowed(category, primaryPlayer);

    return (
      <option
        key={category._id}
        value={category._id}
        disabled={!isAllowed}
        style={{
          color: isAllowed ? 'inherit' : '#9ca3af',
          fontStyle: isAllowed ? 'normal' : 'italic',
        }}
      >
        {displayName}
      </option>
    );
  })}
</RegistrationSelect>
              </RegistrationFormGroup>
            </RegistrationFormRow>
          </RegistrationFormSection>

                  {/* Personal Information */}
<RegistrationFormSection>
  <RegistrationSectionTitle>Personal Information</RegistrationSectionTitle>

  {/* Player Information based on category type */}
  {registrationForm.category && (() => {
    const selectedCategory = registrationTournament?.tournamentCategories?.find(
      cat => cat._id === registrationForm.category
    );
    const categoryType = getCategoryType(selectedCategory?.name || '');

    // Pre-fill primary player info from logged-in user
    const primaryPlayer = {
      name: registrationForm.primaryPlayer?.name || `${user.firstName} ${user.lastName}` || '',
      pplId: registrationForm.primaryPlayer?.pplId || user.pplId || 'PPL999',
      duprId: registrationForm.primaryPlayer?.duprId || user.duprId || '',
      gender: registrationForm.primaryPlayer?.gender || user.gender || 'male',
      age: registrationForm.primaryPlayer?.age || (user.birthDate ? new Date().getFullYear() - new Date(user.birthDate).getFullYear() : 25),
      duprRatings: registrationForm.primaryPlayer?.duprRatings || {}
    };

    // Get DUPR rating for selected category
    const duprRating = getDuprRatingForCategory(selectedCategory?.name, primaryPlayer.duprRatings);

    return (
      <div style={{ marginBottom: '20px' }}>
        {/* Primary Player (always shown) */}
        <div style={{ marginBottom: '16px' }}>
          <RegistrationLabel style={{ marginBottom: '8px', display: 'block' }}>
            Primary Player (You)
          </RegistrationLabel>
          <PlayerSlot>
            <PlayerSlotContent>
              <PlayerInfo>
                <PlayerName>{primaryPlayer.name || 'Enter your name'}</PlayerName>
                <PlayerDetails>
                  PPLID: {primaryPlayer.pplId} | 
                  Gender: {primaryPlayer.gender} | 
                  Age: {primaryPlayer.age}
                  DUPRID: {primaryPlayer.duprId}
                </PlayerDetails>
              </PlayerInfo>
            </PlayerSlotContent>
          </PlayerSlot>
          </div>
                         {/* Partner for Doubles */}
{categoryType === 'doubles' && (
  <RegistrationFormSection>
    <RegistrationLabel style={{ marginBottom: '8px', display: 'block' }}>
      Partner
    </RegistrationLabel>

    <PlayerSlot 
      onClick={() => handlePlayerSelection('partner')}
      style={{ cursor: 'pointer' }}
    >
      <PlayerSlotContent>
        {registrationForm.partner?.pplId ? (
          <>
            <PlayerInfo>
              <PlayerName>{registrationForm.partner.name}</PlayerName>
              <PlayerDetails>
                PPLID: {registrationForm.partner.pplId} | 
                Gender: {registrationForm.partner.gender} | 
                Age: {registrationForm.partner.age || 'Not specified'}
                {(() => {
                  const selectedCategory = registrationTournament?.tournamentCategories?.find(
                    cat => cat._id === registrationForm.category
                  );
                  const duprRating = getDuprRatingForCategory(
                    selectedCategory?.name, 
                    registrationForm.partner?.duprRatings
                  );
                  return duprRating ? ` | DUPR: ${duprRating}` : '';
                })()}
              </PlayerDetails>
            </PlayerInfo>
            <RemovePlayerButton
              onClick={(e) => {
                e.stopPropagation(); // prevent opening selection modal
                handleRemovePlayer('partner');
              }}
              title="Remove partner"
            >
              ×
            </RemovePlayerButton>
          </>
        ) : (
          <>
            <AddPlayerIcon>+</AddPlayerIcon>
            <PlayerSlotLabel>Click to select partner</PlayerSlotLabel>
          </>
        )}
      </PlayerSlotContent>
    </PlayerSlot>
  </RegistrationFormSection>
)}

                          {/* Team Members for Team categories */}
                          {categoryType === 'team' && (
                            <div style={{ marginBottom: '16px' }}>
                              <RegistrationLabel style={{ marginBottom: '8px', display: 'block' }}>
                                Team Members
                              </RegistrationLabel>
                              {Array.isArray(registrationForm.teamMembers) && registrationForm.teamMembers?.map((member, index) => (
                                <div key={index} style={{ marginBottom: '8px' }}>
                                  <PlayerSlot 
                                    onClick={() => handlePlayerSelection(`team-${index}`)}
                                    style={{ cursor: 'pointer' }}
                                  >
                                    <PlayerSlotContent>
                                      {member.pplId ? (
                                        <>
                                          <PlayerInfo>
                                            <PlayerName>{member.name}</PlayerName>
                                            <PlayerDetails>
                                              PPLID: {member.pplId} | 
                                              Gender: {member.gender} | 
                                              Age: {member.age || 'Not specified'}
                                              {(() => {
                                                const selectedCategory = Object.values(registrationTournament?.tournamentCategories || {})
                                                  .find(cat => cat.id === registrationForm.category);
                                                const duprRating = getDuprRatingForCategory(
                                                  selectedCategory?.name, 
                                                  member?.duprRatings
                                                );
                                                return duprRating ? ` | DUPR: ${duprRating}` : '';
                                              })()} 
                                              {member.required && <RequiredBadge>Required</RequiredBadge>}
                                            </PlayerDetails>
                                          </PlayerInfo>
                                          <RemovePlayerButton
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              handleRemovePlayer('team', index);
                                            }}
                                            title="Remove player"
                                          >
                                            ×
                                          </RemovePlayerButton>
                                        </>
                                      ) : (
                                        <>
                                          <AddPlayerIcon>+</AddPlayerIcon>
                                          <PlayerSlotLabel>
                                            Click to select {member.label}
                                            {member.required && <RequiredBadge>Required</RequiredBadge>}
                                          </PlayerSlotLabel>
                                        </>
                                      )}
                                    </PlayerSlotContent>
                                  </PlayerSlot>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })()}
                    
                    {/* Contact Information */}
                    <RegistrationFormRow>
                      <RegistrationFormGroup>
                        <RegistrationLabel>Team Name</RegistrationLabel>
                        <RegistrationInput
                          type="text"
                          value={registrationForm.teamName}
                          onChange={(e) => handleRegistrationFormChange('teamName', e.target.value)}
                          placeholder="Enter your team name"
                        />
                      </RegistrationFormGroup>
                    </RegistrationFormRow>
                    
                    <RegistrationFormRow>
                      <RegistrationFormGroup>
                        <RegistrationLabel>Email Address</RegistrationLabel>
                        <RegistrationInput
                          type="email"
                          value={registrationForm.email}
                          onChange={(e) => handleRegistrationFormChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </RegistrationFormGroup>
                      
                      <RegistrationFormGroup>
                        <RegistrationLabel>Contact Number</RegistrationLabel>
                        <RegistrationInput
                          type="tel"
                          value={registrationForm.contactNumber}
                          onChange={(e) => handleRegistrationFormChange('contactNumber', e.target.value)}
                          placeholder="+63 912 345 6789"
                          required
                        />
                      </RegistrationFormGroup>
                    </RegistrationFormRow>
                  </RegistrationFormSection>

                  {/* Fee Information */}
                  <RegistrationFormSection>
                    <RegistrationSectionTitle>Registration Fee</RegistrationSectionTitle>
                    
                    <FeeInfoBox>
                      <FeeInfoTitle>Tournament Entry Fee</FeeInfoTitle>
                      <FeeInfoText>₱{registrationTournament.entryFee} - Registration fee is required to secure your spot in the tournament.</FeeInfoText>
                    </FeeInfoBox>
                  </RegistrationFormSection>

                  {/* Payment Section */}
                  <RegistrationFormSection>
                    <RegistrationSectionTitle>Payment Details</RegistrationSectionTitle>
                    
                    <PaymentMethodsContainer>
                      <BankDetailsBox>
                        <BankDetailsTitle>Bank Transfer Details</BankDetailsTitle>
                        <BankDetail>
                          <BankDetailLabel>Bank Name:</BankDetailLabel>
                          <BankDetailValue>BDO Unibank</BankDetailValue>
                        </BankDetail>
                        <BankDetail>
                          <BankDetailLabel>Account Name:</BankDetailLabel>
                          <BankDetailValue>John Doe Tournament</BankDetailValue>
                        </BankDetail>
                        <BankDetail>
                          <BankDetailLabel>Account Number:</BankDetailLabel>
                          <BankDetailValue>1234-5678-9012</BankDetailValue>
                        </BankDetail>
                      </BankDetailsBox>
                      
                      <QRCodeSection>
                        <QRCodeHeader>Quick Payment</QRCodeHeader>
                        <QRCodeContainer>
                          <QRCodePlaceholder>
                            <QRCodeIcon>📱</QRCodeIcon>
                            <QRCodeText>GCash QR Code</QRCodeText>
                            <QRCodeSubtext>Scan to pay registration fee</QRCodeSubtext>
                          </QRCodePlaceholder>
                        </QRCodeContainer>
                        <QRCodeSubtext>Scan with GCash or any QR payment app</QRCodeSubtext>
                      </QRCodeSection>
                    </PaymentMethodsContainer>
                    
                    <RegistrationFormGroup>
                      <RegistrationLabel>Proof of Payment</RegistrationLabel>
                      {!registrationForm.proofOfPayment ? (
                        <FileUploadArea>
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            onChange={handleFileUpload}
                            style={{ display: 'none' }}
                            id="proof-upload"
                            required
                          />
                          <label htmlFor="proof-upload" style={{ cursor: 'pointer' }}>
                            <FileUploadText>
                              Click to upload proof of payment (Image or PDF)
                            </FileUploadText>
                          </label>
                        </FileUploadArea>
                      ) : (
                        <ImagePreviewContainer>
                          {registrationForm.proofOfPayment.type.startsWith('image/') ? (
                            <PreviewImage 
                              src={URL.createObjectURL(registrationForm.proofOfPayment)} 
                              alt="Proof of Payment Preview" 
                            />
                          ) : (
                            <div style={{ padding: '40px', textAlign: 'center', background: '#f8fafc' }}>
                              <div style={{ fontSize: '48px', marginBottom: '12px' }}>📄</div>
                              <div style={{ color: '#64748b', fontSize: '14px' }}>PDF File</div>
                            </div>
                          )}
                          <DeleteImageButton 
                            type="button"
                            onClick={handleDeleteProofOfPayment}
                            title="Delete file"
                          >
                            ×
                          </DeleteImageButton>
                          <FileName>{registrationForm.proofOfPayment.name}</FileName>
                        </ImagePreviewContainer>
                      )}
                    </RegistrationFormGroup>
                  </RegistrationFormSection>

                  <RegistrationSubmitButton type="submit">
                    Submit Registration
                  </RegistrationSubmitButton>
                </form>
              </RegistrationModalBody>
            </RegistrationModalContent>
          </RegistrationModal>
        )}

        {/* Player Selection Modal */}
        {showPlayerSelectionModal && (
          <PlayerSelectionModal onClick={() => setShowPlayerSelectionModal(false)}>
            <PlayerSelectionContent onClick={e => e.stopPropagation()}>
              <PlayerSelectionHeader>
                <PlayerSelectionTitle>Select Player</PlayerSelectionTitle>
                <CloseButton onClick={() => setShowPlayerSelectionModal(false)}>×</CloseButton>
              </PlayerSelectionHeader>
              
              <PlayerSelectionBody>
                <PlayerSearchInput
                  type="text"
                  placeholder="Search players by name or PPLID..."
                  value={playerSearchTerm}
                  onChange={(e) => setPlayerSearchTerm(e.target.value)}
                />
                
                <PlayerListContainer>
                  {getFilteredPlayers().map((player) => (
                    <PlayerListItem 
                      key={player.pplId}
                      onClick={() => handleSelectPlayer(player)}
                    >
                      <PlayerListInfo>
                        <PlayerListName>{player.name}</PlayerListName>
                        <PlayerListMeta>
                          PPLID: {player.pplId} | Gender: {player.gender} | Age: {player.age || 'Not specified'}
                          {(() => {
                            const selectedCategory = Object.values(registrationTournament?.tournamentCategories || {})
                              .find(cat => cat.id === registrationForm.category);
                            const duprRating = getDuprRatingForCategory(
                              selectedCategory?.name, 
                              player?.duprRatings
                            );
                            return duprRating ? ` | DUPR: ${duprRating}` : '';
                          })()}
                        </PlayerListMeta>
                      </PlayerListInfo>
                    </PlayerListItem>
                  ))}
                  
                  {getFilteredPlayers().length === 0 && (
                    <div style={{ 
                      textAlign: 'center', 
                      padding: '40px 20px', 
                      color: '#64748b' 
                    }}>
                      No players found matching your criteria
                    </div>
                  )}
                </PlayerListContainer>
              </PlayerSelectionBody>
            </PlayerSelectionContent>
          </PlayerSelectionModal>
        )}
      </PageContainer>
    );
  }

  // Show main tournament list
  return (
    <PageContainer>
      <PageTitle>Tournaments</PageTitle>
      <PageDescription>
        Discover and join exciting pickleball tournaments across the Philippines. From intermediate-level competitions to professional championships, find the perfect competition to showcase your skills.
      </PageDescription>
      
      <SearchSection>
        <SearchBar>
          <SearchIcon />
          <input
            type="text"
            placeholder="Search tournaments by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>
        
        <FiltersContainer>
          <Select
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value)}
          >
            <option value="">All Tiers</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="open-1">Open - Tier 1</option>
            <option value="open-2">Open - Tier 2</option>
            <option value="open-3">Open - Tier 3</option>
          </Select>

          <Select
            value={selectedFeeRange}
            onChange={(e) => setSelectedFeeRange(e.target.value)}
          >
            <option value="">All Fees</option>
            {feeRanges.map((range, index) => (
              <option key={index} value={index}>{range.label}</option>
            ))}
          </Select>
        </FiltersContainer>
      </SearchSection>
{filteredTournaments.length > 0 ? (
  <TournamentGrid>
    {filteredTournaments.map((tournament) => (
      <TournamentCard 
        key={tournament._id} 
        onClick={() => handleTournamentClick(tournament)}
        style={{ cursor: 'pointer' }}
      >
<TournamentBanner>
  {tournament.tournamentPicture ? (
    <img 
      src={`http://localhost:5000${tournament.tournamentPicture}`} 
      alt={tournament.tournamentName} 
      style={{ width: "100%", height: "150px", objectFit: "cover" }}
    />
  ) : (
    <div style={{padding: "40px", textAlign: "center", color: "#888"}}>No Image</div>
  )}
  <StatusBadge $status={tournament.status}>
    {tournament.status}
  </StatusBadge>
</TournamentBanner>

        <TournamentInfo>
          <TournamentName>{tournament.tournamentName}</TournamentName>
<TournamentDate>
  <CalendarIcon />
  {(() => {
    const dates = tournament.tournamentDates || [];
    if (!dates.length) return "TBA";

    const sortedDates = dates.map(d => new Date(d)).sort((a, b) => a - b);
    const ranges = [];
    let start = sortedDates[0];
    let end = sortedDates[0];

    for (let i = 1; i <= sortedDates.length; i++) {
      const current = sortedDates[i];
      const prev = sortedDates[i - 1];

      if (current && (current - prev) / (1000 * 60 * 60 * 24) === 1) {
        end = current; // consecutive day
      } else {
        ranges.push([start, end]);
        start = current;
        end = current;
      }
    }

    const formatted = ranges
      .map(([s, e]) => {
        const sameMonth = s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear();
        const sameDay = s.getTime() === e.getTime();
        const monthFormat = { month: "short" };

        if (sameDay) return s.toLocaleDateString("en-US", { ...monthFormat, day: "numeric" });

        if (sameMonth) return `${s.toLocaleDateString("en-US", monthFormat)} ${s.getDate()}–${e.getDate()}`;

        return `${s.toLocaleDateString("en-US", { month: "short", day: "numeric" })}–${e.toLocaleDateString(
          "en-US",
          { month: "short", day: "numeric" }
        )}`;
      })
      .join(" & ");

    return `${formatted}, ${sortedDates[0].getFullYear()}`;
  })()}
</TournamentDate>
          <TournamentLocation>
            <LocationIcon />
            {tournament.venueCity}, {tournament.venueState}
          </TournamentLocation>

          <TournamentSkillLevels>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
           {tournament.tournamentCategories
  ?.map(cat => {
    if (cat.skillLevel.toLowerCase() === 'open') {
      return `Open - Tier ${cat.tier || 1}`;
    }
    return cat.skillLevel;
  })
  .join(', ')
  .toUpperCase()}
</TournamentSkillLevels>

<TournamentStats>
  <RegistrationFee>
    <MoneyIcon />
    <div>
      <span>
        {tournament
          ? (() => {
              const min = tournament.entryFeeMin ?? 0;
              const max = tournament.entryFeeMax;

              if (min === 0 && (!max || max === 0)) return "FREE";

              if (max != null && max !== min) {
                return `₱${min.toLocaleString()} – ₱${max.toLocaleString()}`;
              }

              return `₱${min.toLocaleString()}`;
            })()
          : "Loading..."}
      </span>
    </div>
  </RegistrationFee>
</TournamentStats>

<RegisterButton
  onClick={(e) => {
    e.stopPropagation(); // Prevent card click
    // Registration temporarily disabled
    console.log('Registration is temporarily disabled');
  }}
  disabled={true}
>
  {tournament.currentParticipants >= tournament.maxParticipants
    ? "Full"
    : !isAuthenticated
    ? "Sign In to Register"
    : "Register Now"}
</RegisterButton>

            </TournamentInfo>
          </TournamentCard>
        ))}
      </TournamentGrid>
      ) : (
        <NoResults>
          <h3>No Tournaments Found</h3>
          <p>
            {searchTerm || selectedTier || selectedFeeRange
              ? "Try adjusting your search criteria or filters to find more tournaments."
              : "There are no tournaments available at the moment. Please check back later."}
          </p>
        </NoResults>
      )}

      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          title="Join the Tournament!"
          message="Sign in or register to participate in tournaments"
        />
      )}

     {showRegistrationForm && selectedTournament && (
  <RegistrationForm
    tournament={selectedTournament}
    onClose={() => setShowRegistrationForm(false)}
  />
)}

      
{showViewFormModal && viewFormTournament && (
  <RegistrationModal onClick={closeViewFormModal}>
    <RegistrationModalContent onClick={e => e.stopPropagation()}>
      <RegistrationModalHeader>
        <RegistrationModalTitle>
          Registration Form Preview - {viewFormTournament.tournamentName}
        </RegistrationModalTitle>
        <CloseButton onClick={closeViewFormModal}>×</CloseButton>
      </RegistrationModalHeader>

      <RegistrationModalBody>
        {/* Tournament Categories */}
        <RegistrationFormSection>
          <RegistrationSectionTitle>Available Tournament Categories</RegistrationSectionTitle>
          {viewFormTournament.tournamentCategories.map(category => (
            <div key={category._id} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px', marginBottom: '12px', background: '#fafafa' }}>
              <div style={{ fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>{category.division}</div>
              <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>
                <strong>Skill Level:</strong> {category.skillLevel.toLowerCase() === 'open' ? `Open - Tier ${category.tier || 1}` : category.skillLevel}
              </div>
              {category.ageCategory && (
                <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>
                  <strong>Age Category:</strong> {category.ageCategory}
                </div>
              )}
              <div style={{ fontSize: '14px', color: '#64748b' }}>
                <strong>Max Participants:</strong> {category.maxParticipants}
              </div>
            </div>
          ))}
        </RegistrationFormSection>

        {/* Required Information */}
        <RegistrationFormSection>
          <RegistrationSectionTitle>Required Information from Participants</RegistrationSectionTitle>
          <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px' }}>
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ color: '#1e293b' }}>Player Information:</strong>
              <ul style={{ margin: '8px 0', paddingLeft: '20px', color: '#64748b' }}>
                <li>Full Name</li>
                <li>Gender</li>
                <li>Age</li>
                <li>DUPR ID</li>
              </ul>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <strong style={{ color: '#1e293b' }}>Contact Information:</strong>
              <ul style={{ margin: '8px 0', paddingLeft: '20px', color: '#64748b' }}>
                <li>Email Address</li>
                <li>Contact Number</li>
              </ul>
            </div>
          </div>
        </RegistrationFormSection>

        {/* Payment Details */}
        <RegistrationFormSection>
          <RegistrationSectionTitle>Payment Details</RegistrationSectionTitle>
          {viewFormTournament.paymentMethods.map((pm, index) => (
            <div key={index} style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', marginBottom: '12px' }}>
              <div><strong>Bank Name:</strong> {pm.bankName}</div>
              <div><strong>Account Name:</strong> {pm.accountName}</div>
              <div><strong>Account Number:</strong> {pm.accountNumber}</div>
              {pm.qrCodeImage && <img src={pm.qrCodeImage} alt="QR Code" style={{ width: '120px', marginTop: '8px' }} />}
            </div>
          ))}
        </RegistrationFormSection>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <button 
            onClick={closeViewFormModal}
            style={{
              background: '#29ba9b',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Close Preview
          </button>
        </div>
      </RegistrationModalBody>
    </RegistrationModalContent>
  </RegistrationModal>
)}

      {/* Bracket Mode Confirmation Modal */}
      {showBracketModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            maxWidth: '400px',
            width: '90%',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '24px'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '16px'
              }}>⚠️</div>
              <h3 style={{
                color: '#334155',
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '8px'
              }}>
                Are you sure?
              </h3>
              <p style={{
                color: '#64748b',
                fontSize: '0.95rem',
                lineHeight: '1.5'
              }}>
                Your tournament will now generate {pendingBracketChange.newMode} brackets. 
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center'
            }}>
              <button
                onClick={() => {
                  setShowBracketModal(false);
                  setPendingBracketChange({ categoryId: null, newMode: null });
                }}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  background: 'white',
                  color: '#64748b',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Update bracket mode
                  setBracketMode(prev => ({
                    ...prev,
                    [pendingBracketChange.categoryId]: pendingBracketChange.newMode
                  }));
                  
                  // Close modal
                  setShowBracketModal(false);
                  setPendingBracketChange({ categoryId: null, newMode: null });
                }}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

    </PageContainer>
  );
}

export default Tournament;