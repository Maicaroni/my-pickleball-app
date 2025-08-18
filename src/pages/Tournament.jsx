import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from '../components/AuthModal';

/**
 * @typedef {Object} Tournament
 * @property {string} id - Unique identifier
 * @property {string} name - Tournament name
 * @property {string} date - Tournament date (ISO string)
 * @property {string} endDate - Tournament end date (ISO string) - for multi-day tournaments
 * @property {string} location - Venue location
 * @property {string} address - Full venue address
 * @property {number} latitude - Location latitude for map pin
 * @property {number} longitude - Location longitude for map pin
 * @property {string} status - Tournament status (UPCOMING, ONGOING, COMPLETED)
 * @property {number} entryFee - Entry fee amount
 * @property {number} prizePool - Total prize pool
 * @property {string} description - Tournament description
 * @property {number} maxParticipants - Maximum allowed participants (organizer-selected: 8, 12, 16, 20, 24)
 * @property {number} currentParticipants - Current participant count
 * @property {string} registrationDeadline - Registration deadline (ISO string)
 * @property {string} bannerUrl - Tournament banner image URL
 * @property {string[]} divisions - Available divisions (e.g., ["Men's Singles", "Mixed Doubles"])
 * @property {string} tournamentType - Tournament type ("beginner", "intermediate", "advanced", "open")
 * @property {number} tier - Tournament tier (1, 2, 3)
 * @property {string} contactEmail - Contact email for inquiries
 * @property {string} contactPhone - Contact phone number
 * @property {string[]} rules - Tournament rules and regulations
 * @property {string[]} amenities - Available amenities at venue
 * @property {string} createdAt - Creation timestamp
 * @property {string} updatedAt - Last update timestamp
 * @property {Object[]} brackets - Tournament brackets with approved players
 * @property {Object[]} registrations - Player registrations with status
 * @property {Object} tournamentCategories - Multiple tournament categories with brackets
 */

// Detailed View Styled Components - Convert from Modal to Full Page
const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 12px 20px;
  color: #475569;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #e2e8f0;
    border-color: #cbd5e1;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`;

const EditTournamentButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #29ba9b;
  border: 2px solid #29ba9b;
  border-radius: 12px;
  padding: 12px 20px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #26a085;
    border-color: #26a085;
    transform: translateY(-1px);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`;

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

const TournamentDetailHeader = styled.div`
  position: relative;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    height: 300px;
    border-radius: 16px;
    margin-bottom: 24px;
  }
`;

const TournamentDetailBanner = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #29ba9b, #239b83);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

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
    height: 120px;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
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

const GroupStageSection = styled.div`
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
  
  .section-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #334155;
    margin-bottom: 12px;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 1.2rem;
      margin-bottom: 16px;
    }
  }
  
  .groups-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 16px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
      gap: 24px;
    }
  }
  
  .qualification-note {
    background: #f0f9ff;
    border: 1px solid #bae6fd;
    border-radius: 8px;
    padding: 12px;
    text-align: center;
    color: #0369a1;
    font-size: 0.85rem;
    font-weight: 500;

    @media (min-width: 768px) {
      border-radius: 12px;
      padding: 16px;
      font-size: 0.9rem;
    }
  }
`;

const GroupCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-color: #cbd5e1;
  }

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const GroupHeader = styled.h4`
  font-size: 1.05rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 12px;
  text-align: center;
  padding: 10px 14px;
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    font-size: 1.1rem;
    padding: 12px 16px;
    margin: 0 0 16px;
  }
`;

const StandingsTable = styled.div`
  .standings-header {
    display: grid;
    grid-template-columns: 1fr 60px 60px 70px 70px;
    gap: 8px;
    padding: 12px 16px;
    background: #f8fafc;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #64748b;
    margin-bottom: 12px;
    text-align: center;
    border: 1px solid #e2e8f0;
    
    div:first-child {
      text-align: left;
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr 70px 70px 80px 80px;
      gap: 10px;
      padding: 14px 18px;
      font-size: 0.85rem;
    }
  }
`;

const StandingsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px 60px 70px 70px;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  margin-bottom: 6px;
  background: ${props => props.$qualified ? '#dcfce7' : '#f8fafc'};
  border: 1px solid ${props => props.$qualified ? '#bbf7d0' : '#e2e8f0'};
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.$qualified ? '#bbf7d0' : '#f1f5f9'};
    border-color: ${props => props.$qualified ? '#86efac' : '#cbd5e1'};
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 70px 70px 80px 80px;
    gap: 10px;
    padding: 14px 18px;
    font-size: 0.9rem;
    margin-bottom: 8px;
  }
  
  .player-info {
    display: flex;
    align-items: center;
    gap: 10px;

    @media (min-width: 768px) {
      gap: 12px;
    }
  }
  
  .position {
    background: ${props => props.$qualified ? '#16a34a' : '#64748b'};
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 600;
    flex-shrink: 0;

    @media (min-width: 768px) {
      width: 22px;
      height: 22px;
      font-size: 0.8rem;
    }
  }
  
  .player-name {
    font-weight: 500;
    color: ${props => props.$qualified ? '#166534' : '#334155'};
    text-align: left;
    font-size: 0.85rem;
    line-height: 1.3;

    @media (min-width: 768px) {
      font-size: 0.9rem;
    }
  }
  
  .round-wins, .round-losses, .win-points, .loss-points {
    text-align: center;
    font-weight: 600;
    color: ${props => props.$qualified ? '#166534' : '#334155'};
    font-size: 0.85rem;

    @media (min-width: 768px) {
      font-size: 0.9rem;
    }
  }
  
  /* Legacy support */
  .wins, .points {
    text-align: center;
    font-weight: 600;
    color: ${props => props.$qualified ? '#166534' : '#334155'};
    font-size: 0.85rem;

    @media (min-width: 768px) {
      font-size: 0.9rem;
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

    span:last-child {
      display: none;
    }
  }
`;

const RegisterButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  
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

const ActionButton = styled.button`
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
  
  // Add state for detailed view
  const [showDetailedView, setShowDetailedView] = useState(false);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [activeTab, setActiveTab] = useState('details');
  
  // Add state for expanded categories (multiple can be open)
  const [expandedCategories, setExpandedCategories] = useState({});
  
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
  

  
  // Player selection state
  const [showPlayerSelectionModal, setShowPlayerSelectionModal] = useState(false);
  const [playerSelectionType, setPlayerSelectionType] = useState(''); // 'partner', 'team-0', 'team-1', etc.
  const [playerSearchTerm, setPlayerSearchTerm] = useState('');
  const [registeredPlayers, setRegisteredPlayers] = useState([
    { 
      pplId: 'PPL001', 
      name: 'John Doe', 
      gender: 'male',
      age: 28,
      duprRatings: {
        singles: '4.5',
        doubles: '4.3'
      }
    },
    { 
      pplId: 'PPL002', 
      name: 'Maria Santos', 
      gender: 'female',
      age: 32,
      duprRatings: {
        singles: '4.2',
        doubles: '4.3'
      }
    },
    { 
      pplId: 'PPL003', 
      name: 'Michael Johnson', 
      gender: 'male',
      age: 25,
      duprRatings: {
        singles: '3.8',
        doubles: '3.9'
      }
    },
    { 
      pplId: 'PPL004', 
      name: 'Elena Cruz', 
      gender: 'female',
      age: 29,
      duprRatings: {
        singles: '4.0',
        doubles: '4.1'
      }
    },
    { 
      pplId: 'PPL005', 
      name: 'Carlos Rodriguez', 
      gender: 'male',
      age: 35,
      duprRatings: {
        singles: '3.5',
        doubles: '3.6'
      }
    },
    { 
      pplId: 'PPL006', 
      name: 'Andrea Martinez', 
      gender: 'female',
      age: 27,
      duprRatings: {
        singles: '4.3',
        doubles: '4.4'
      }
    },
    { 
      pplId: 'PPL007', 
      name: 'Jason Park', 
      gender: 'male',
      age: 31,
      duprRatings: {
        singles: '3.9',
        doubles: '4.0'
      }
    },
    { 
      pplId: 'PPL008', 
      name: 'Sarah Kim', 
      gender: 'female',
      age: 26,
      duprRatings: {
        singles: '3.7',
        doubles: '3.8'
      }
    }
  ]);
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
    email: '',
    contactNumber: '',
    proofOfPayment: null
  });
  
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
  
  // Fee ranges
  const feeRanges = [
    { label: '₱0 - ₱1,000', min: 0, max: 1000 },
    { label: '₱1,001 - ₱3,000', min: 1001, max: 3000 },
    { label: '₱3,001 - ₱6,000', min: 3001, max: 6000 }
  ];

  const filteredTournaments = tournaments.filter(tournament => {
    // Search by name or location
    const matchesSearch = tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tournament.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Check if tournament matches selected tier/category
    const matchesTier = !selectedTier || (() => {
      console.log('Checking tournament:', tournament.name); // Debugging
      
      // Handle tournament categories structure
      if (tournament.tournamentCategories) {
        return Object.values(tournament.tournamentCategories).some(category => {
          console.log('Checking category:', category); // Debugging
          
          // Check if we have valid category data
          if (!category || !category.skillLevel) return false;
          
          if (selectedTier.startsWith('open-')) {
            // For Open tier categories
            const targetTier = parseInt(selectedTier.split('-')[1]);
            // Convert skillLevel to lowercase for case-insensitive comparison
            const skillLevel = category.skillLevel.toLowerCase();
            const categoryTier = Number(category.tier) || 1; // Default to tier 1 if not specified
            
            console.log('Comparing:', { 
              skillLevel,
              categoryTier,
              targetTier,
              matches: skillLevel === 'open' && categoryTier === targetTier
            }); // Debugging
            
            // Check if this is an Open category with matching tier
            return skillLevel === 'open' && categoryTier === targetTier;
          } else {
            // For Beginner, Intermediate and Advanced categories
            return category.skillLevel.toLowerCase() === selectedTier.toLowerCase();
          }
        });
      } else {
        // Fallback for old data structure
        if (selectedTier.startsWith('open-')) {
          const targetTier = parseInt(selectedTier.split('-')[1]);
          const tournamentTier = Number(tournament.tier) || 1; // Default to tier 1 if not specified
          return tournament.tournamentType?.toLowerCase() === 'open' && 
                 tournamentTier === targetTier;
        }
        return tournament.tournamentType?.toLowerCase() === selectedTier.toLowerCase();
      }
    })();

    // Check fee range
    const matchesFeeRange = !selectedFeeRange || (
      tournament.entryFee >= feeRanges[parseInt(selectedFeeRange)].min &&
      tournament.entryFee <= feeRanges[parseInt(selectedFeeRange)].max
    );

    return matchesSearch && matchesTier && matchesFeeRange;
  });

  const fetchTournaments = async () => {
    try {
      setLoading(true);
      setError(null);

      /**
       * CORRECT TOURNAMENT STRUCTURE:
       * 
       * Tournament Categories:
       * - Men's Singles, Women's Singles
       * - Men's Doubles, Women's Doubles, Mixed Doubles
       * 
       * Each category has:
       * - 4 Skill Levels: Beginner, Intermediate, Advanced, Open
       * - 3 Age Groups: 18+, 35+, 50+
       * 
       * Example Categories:
       * - Men's Singles Intermediate 18+, Men's Singles Advanced 35+, etc.
       * - Women's Singles Intermediate 18+, Women's Singles Advanced 35+, etc.
       * - Mixed Doubles Intermediate 18+, Mixed Doubles Advanced 35+, etc.
       * 
       * Each category shows: 
       * - First and Last Name (no stage names!)
       * - Round Wins, Round Losses, Win Points, Loss Points
       * - Top 2 advance (ranked by Round Wins, tiebreaker: Win Points - Loss Points)
       * 
       * BACKEND INTEGRATION REQUIRED:
       * Database Schema - Add these fields to tournaments table:
       * - endDate: timestamp (for multi-day tournaments)
       * - address: text (full venue address)
       * - latitude: decimal(10,8) (for map pin location)
       * - longitude: decimal(11,8) (for map pin location)
       * - tournamentType: enum('beginner', 'intermediate', 'advanced', 'open')
       * - description: text (tournament description)
       * - contactEmail: varchar(255)
       * - contactPhone: varchar(20)
       * - rules: json (array of tournament rules)
       * - amenities: json (array of available amenities)
       * 
       * API Endpoints:
       * GET /api/tournaments/:id/details - Get detailed tournament info
       * POST /api/tournaments/:id/register - Register for tournament
       * GET /api/tournaments/:id/participants - Get participants list
       * POST /api/tournaments - Create tournament (with capacity selection)
       * GET /api/tournaments/:id/brackets - Get tournament brackets with players
       * PUT /api/tournaments/:id/registrations/:registrationId/approve - Approve registration
       * PUT /api/tournaments/:id/registrations/:registrationId/reject - Reject registration
       * POST /api/tournaments/:id/brackets/assign - Randomly assign approved players to brackets
       * 
       * Tournament Capacity Logic:
       * - Organizers can select max participants: 8, 12, 16, 20, or 24
       * - 4 brackets with max 6 players each = 24 total capacity
       * - Smaller tournaments use fewer slots per bracket
       * 
       * UI for Tournament Creation:
       * - Dropdown: "Select Tournament Capacity"
       * - Options: 8 (2 per bracket), 12 (3 per bracket), 16 (4 per bracket), 20 (5 per bracket), 24 (6 per bracket - MAX)
       * - Shows preview: "This will create 4 brackets with X players each"
       * 
       * Bracket Assignment Algorithm:
       * 1. Organizer selects tournament capacity (8-24 players)
       * 2. When registration is approved, player is automatically assigned
       * 3. System randomly selects next available bracket slot
       * 4. Players distributed evenly across 4 brackets as they're approved
       * 5. Examples:
       *    - 8 players  = 2,2,2,2 distribution
       *    - 12 players = 3,3,3,3 distribution  
       *    - 16 players = 4,4,4,4 distribution
       *    - 20 players = 5,5,5,5 distribution
       *    - 24 players = 6,6,6,6 distribution (FULL)
       * 
       * Assignment Process:
       * - Player registers → Pending status
       * - Organizer approves → System auto-assigns to random bracket slot
       * - No manual bracket selection by players
       */
      
      // Enhanced tournament data with all required fields
      const tournamentData = [
        {
          id: '1',
          name: 'PPL Summer Championship 2025',
          date: '2025-08-15T09:00:00Z',
          endDate: '2025-08-17T18:00:00Z', // 3-day tournament
          location: 'Manila Pickleball Center',
          address: '123 Sports Complex Ave, Makati City, Metro Manila',
          latitude: 14.5547,
          longitude: 121.0244,
          entryFee: 1500,
          prizePool: 50000,
          maxParticipants: 20,
          currentParticipants: 18,
          registrationDeadline: '2025-07-01T23:59:59Z',
          bannerUrl: 'https://images.unsplash.com/photo-1686721135036-22ac6cbb8ce8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          tier: 3,
          tournamentType: 'open',
          description: 'Join the most prestigious pickleball tournament in the Philippines! This 3-day championship features multiple divisions and attracts the best players from across the country.',
          contactEmail: 'championship@philippinepickleball.com',
          contactPhone: '+63 912 345 6789',
          divisions: ["Men's Singles", "Women's Singles", "Men's Doubles", "Women's Doubles", "Mixed Doubles"],
          // Multiple Tournament Categories with Brackets
          tournamentCategories: {
            't1-mens-singles-intermediate-18': {
              id: 't1-mens-singles-intermediate-18',
              name: "Men's Singles Intermediate 18+",
              ageGroup: '18+',
              skillLevel: 'Intermediate',
              participants: 16,
              maxParticipants: 16,
              prizePool: 15000,
              description: 'Men\'s singles intermediate level competition for players 18 and older',
              groupStage: {
                bracketA: [
                  { id: '1', name: 'John Doe', rating: '3.5', roundWins: 3, roundLosses: 1, winPoints: 33, lossPoints: 21, position: 1, age: 24 },
                  { id: '5', name: 'Carlos Rodriguez', rating: '3.4', roundWins: 2, roundLosses: 2, winPoints: 28, lossPoints: 26, position: 2, age: 28 },
                  { id: '9', name: 'Miguel Torres', rating: '3.3', roundWins: 2, roundLosses: 2, winPoints: 24, lossPoints: 28, position: 3, age: 31 },
                  { id: '13', name: 'Alex Martinez', rating: '3.2', roundWins: 1, roundLosses: 3, winPoints: 18, lossPoints: 33, position: 4, age: 26 }
                ],
                bracketB: [
                  { id: '2', name: 'Michael Johnson', rating: '3.6', roundWins: 4, roundLosses: 0, winPoints: 44, lossPoints: 12, position: 1, age: 29 },
                  { id: '6', name: 'Luis Chen', rating: '3.5', roundWins: 3, roundLosses: 1, winPoints: 35, lossPoints: 18, position: 2, age: 25 },
                  { id: '10', name: 'Roberto Kim', rating: '3.3', roundWins: 1, roundLosses: 3, winPoints: 22, lossPoints: 33, position: 3, age: 33 },
                  { id: '14', name: 'David Park', rating: '3.1', roundWins: 0, roundLosses: 4, winPoints: 15, lossPoints: 44, position: 4, age: 27 }
                ],
                bracketC: [
                  { id: '3', name: 'Jason Park', rating: '3.7', roundWins: 3, roundLosses: 1, winPoints: 37, lossPoints: 19, position: 1, age: 30 },
                  { id: '7', name: 'Anthony Chen', rating: '3.4', roundWins: 3, roundLosses: 1, winPoints: 31, lossPoints: 22, position: 2, age: 24 },
                  { id: '11', name: 'Marcus Tan', rating: '3.2', roundWins: 2, roundLosses: 2, winPoints: 26, lossPoints: 26, position: 3, age: 32 },
                  { id: '15', name: 'Steven Wong', rating: '3.0', roundWins: 0, roundLosses: 4, winPoints: 14, lossPoints: 44, position: 4, age: 26 }
                ],
                bracketD: [
                  { id: '4', name: 'Patrick Lim', rating: '3.5', roundWins: 3, roundLosses: 1, winPoints: 32, lossPoints: 20, position: 1, age: 28 },
                  { id: '8', name: 'Jonathan Wu', rating: '3.3', roundWins: 2, roundLosses: 2, winPoints: 29, lossPoints: 25, position: 2, age: 25 },
                  { id: '12', name: 'Brandon Choi', rating: '3.1', roundWins: 2, roundLosses: 2, winPoints: 25, lossPoints: 29, position: 3, age: 29 },
                  { id: '16', name: 'Daniel Ko', rating: '2.9', roundWins: 1, roundLosses: 3, winPoints: 20, lossPoints: 32, position: 4, age: 31 }
                ]
              },
              knockoutStage: {
                quarterFinals: [
                  { 
                    id: 'qf1', 
                    player1: { name: 'John Doe', seed: 'A1' }, 
                    player2: { name: 'Anthony Chen', seed: 'C2' },
                    score: '11-8, 11-6',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf2', 
                    player1: { name: 'Michael Johnson', seed: 'B1' }, 
                    player2: { name: 'Jonathan Wu', seed: 'D2' },
                    score: '11-9, 11-7',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf3', 
                    player1: { name: 'Jason Park', seed: 'C1' }, 
                    player2: { name: 'Luis Chen', seed: 'B2' },
                    score: '11-5, 11-8',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf4', 
                    player1: { name: 'Patrick Lim', seed: 'D1' }, 
                    player2: { name: 'Carlos Rodriguez', seed: 'A2' },
                    score: '11-7, 11-9',
                    winner: 'player2',
                    completed: true
                  }
                ],
                semiFinals: [
                  { 
                    id: 'sf1', 
                    player1: { name: 'John Doe', seed: 'QF1' }, 
                    player2: { name: 'Michael Johnson', seed: 'QF2' },
                    score: '11-9, 11-8',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'sf2', 
                    player1: { name: 'Jason Park', seed: 'QF3' }, 
                    player2: { name: 'Carlos Rodriguez', seed: 'QF4' },
                    score: '11-6, 11-10',
                    winner: 'player1',
                    completed: true
                  }
                ],
                final: {
                  id: 'final',
                  player1: { name: 'John Doe', seed: 'SF1' },
                  player2: { name: 'Jason Park', seed: 'SF2' },
                  score: '11-8, 11-9',
                  winner: 'player1',
                  completed: true
                },
                thirdPlace: {
                id: 'thirdPlace',
                  player1: { name: 'Michael Johnson', seed: 'SF1-L' },
                  player2: { name: 'Carlos Rodriguez', seed: 'SF2-L' },
                  score: '11-5, 11-7',
                  winner: 'player1',
                  completed: true
                }
              }
            },
            't1-womens-singles-intermediate-18': {
              id: 't1-womens-singles-intermediate-18',
              name: "Women's Singles Intermediate 18+", 
              ageGroup: '18+',
              skillLevel: 'Intermediate',
              participants: 12,
              maxParticipants: 16,
              prizePool: 15000,
              description: 'Competitive women\'s singles for intermediate players',
              groupStage: {
                bracketA: [
                  { id: '1', name: 'Maria Santos', rating: '3.8', roundWins: 3, roundLosses: 1, winPoints: 35, lossPoints: 21, position: 1, age: 24 },
                  { id: '4', name: 'Ana Reyes', rating: '3.6', roundWins: 2, roundLosses: 2, winPoints: 28, lossPoints: 26, position: 2, age: 26 },
                  { id: '7', name: 'Sofia Garcia', rating: '3.4', roundWins: 1, roundLosses: 3, winPoints: 18, lossPoints: 33, position: 3, age: 28 }
                ],
                bracketB: [
                  { id: '2', name: 'Elena Cruz', rating: '3.7', roundWins: 4, roundLosses: 0, winPoints: 44, lossPoints: 15, position: 1, age: 25 },
                  { id: '5', name: 'Carmen Lopez', rating: '3.5', roundWins: 2, roundLosses: 2, winPoints: 29, lossPoints: 27, position: 2, age: 30 },
                  { id: '8', name: 'Patricia Wong', rating: '3.3', roundWins: 0, roundLosses: 4, winPoints: 12, lossPoints: 44, position: 3, age: 27 }
                ],
                bracketC: [
                  { id: '3', name: 'Andrea Martinez', rating: '3.9', roundWins: 3, roundLosses: 1, winPoints: 37, lossPoints: 19, position: 1, age: 23 },
                  { id: '6', name: 'Rachel Gonzalez', rating: '3.7', roundWins: 2, roundLosses: 2, winPoints: 31, lossPoints: 24, position: 2, age: 29 },
                  { id: '9', name: 'Lisa Johnson', rating: '3.5', roundWins: 1, roundLosses: 3, winPoints: 22, lossPoints: 35, position: 3, age: 31 }
                ],
                bracketD: [
                  { id: '10', name: 'Sarah Kim', rating: '3.6', roundWins: 3, roundLosses: 1, winPoints: 36, lossPoints: 18, position: 1, age: 26 },
                  { id: '11', name: 'Michelle Yang', rating: '3.4', roundWins: 2, roundLosses: 2, winPoints: 25, lossPoints: 29, position: 2, age: 28 },
                  { id: '12', name: 'Victoria Huang', rating: '3.2', roundWins: 1, roundLosses: 3, winPoints: 19, lossPoints: 36, position: 3, age: 24 }
                ]
              },
              knockoutStage: {
                quarterFinals: [
                  { 
                    id: 'qf1', 
                    player1: { name: 'Maria Santos', seed: 'A1' }, 
                    player2: { name: 'Michelle Yang', seed: 'D2' },
                    score: '11-7, 11-9',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf2', 
                    player1: { name: 'Elena Cruz', seed: 'B1' }, 
                    player2: { name: 'Rachel Gonzalez', seed: 'C2' },
                    score: '11-8, 11-6',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf3', 
                    player1: { name: 'Andrea Martinez', seed: 'C1' }, 
                    player2: { name: 'Ana Reyes', seed: 'A2' },
                    score: '11-5, 11-8',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf4', 
                    player1: { name: 'Sarah Kim', seed: 'D1' }, 
                    player2: { name: 'Carmen Lopez', seed: 'B2' },
                    score: '11-9, 11-7',
                    winner: 'player1',
                    completed: true
                  }
                ],
                semiFinals: [
                  { 
                    id: 'sf1', 
                    player1: { name: 'Maria Santos', seed: 'QF1' }, 
                    player2: { name: 'Elena Cruz', seed: 'QF2' },
                    score: '11-6, 11-8',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'sf2', 
                    player1: { name: 'Andrea Martinez', seed: 'QF3' }, 
                    player2: { name: 'Sarah Kim', seed: 'QF4' },
                    score: '11-9, 11-5',
                    winner: 'player1',
                    completed: true
                  }
                ],
                final: {
                  id: 'final',
                  player1: { name: 'Maria Santos', seed: 'SF1' },
                  player2: { name: 'Andrea Martinez', seed: 'SF2' },
                  score: '11-7, 11-9',
                  winner: 'player1',
                  completed: true
                },
                thirdPlace: {
                  id: 'thirdPlace',
                  player1: { name: 'Elena Cruz', seed: 'SF1-L' },
                  player2: { name: 'Sarah Kim', seed: 'SF2-L' },
                  score: '11-4, 11-6',
                  winner: 'player1',
                  completed: true
                }
              }
            },
            'mixed-doubles-open-18': {
              id: 'mixed-doubles-open-18',
              name: "Mixed Doubles Open 18+",
              ageGroup: '18+',
              skillLevel: 'Open',
              participants: 8,
              maxParticipants: 8,
              prizePool: 10000,
              description: 'Open-level mixed doubles competition',
              groupStage: {
                bracketA: [
                  { id: '1', name: 'John Doe & Maria Santos', rating: '4.2', roundWins: 3, roundLosses: 1, winPoints: 37, lossPoints: 21, position: 1, players: ['John Doe', 'Maria Santos'] },
                  { id: '2', name: 'Carlos Rodriguez & Ana Reyes', rating: '4.0', roundWins: 2, roundLosses: 2, winPoints: 28, lossPoints: 30, position: 2, players: ['Carlos Rodriguez', 'Ana Reyes'] }
                ],
                bracketB: [
                  { id: '3', name: 'Miguel Torres & Sofia Garcia', rating: '4.1', roundWins: 4, roundLosses: 0, winPoints: 44, lossPoints: 18, position: 1, players: ['Miguel Torres', 'Sofia Garcia'] },
                  { id: '4', name: 'Luis Chen & Elena Cruz', rating: '3.9', roundWins: 1, roundLosses: 3, winPoints: 22, lossPoints: 38, position: 2, players: ['Luis Chen', 'Elena Cruz'] }
                ],
                bracketC: [
                  { id: '5', name: 'Jason Park & Andrea Martinez', rating: '4.3', roundWins: 3, roundLosses: 1, winPoints: 35, lossPoints: 23, position: 1, players: ['Jason Park', 'Andrea Martinez'] },
                  { id: '6', name: 'Patrick Lim & Rachel Gonzalez', rating: '3.8', roundWins: 2, roundLosses: 2, winPoints: 26, lossPoints: 28, position: 2, players: ['Patrick Lim', 'Rachel Gonzalez'] }
                ],
                bracketD: [
                  { id: '7', name: 'Michael Johnson & Sarah Kim', rating: '4.0', roundWins: 2, roundLosses: 2, winPoints: 31, lossPoints: 25, position: 1, players: ['Michael Johnson', 'Sarah Kim'] },
                  { id: '8', name: 'Anthony Chen & Carmen Lopez', rating: '3.7', roundWins: 1, roundLosses: 3, winPoints: 19, lossPoints: 35, position: 2, players: ['Anthony Chen', 'Carmen Lopez'] }
                ]
              },
              knockoutStage: {
                quarterFinals: [
                  { 
                    id: 'qf1', 
                    player1: { name: 'John & Maria', seed: 'A1' }, 
                    player2: { name: 'Anthony & Carmen', seed: 'D2' },
                    score: '11-8, 11-6',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf2', 
                    player1: { name: 'Miguel & Sofia', seed: 'B1' }, 
                    player2: { name: 'Patrick & Rachel', seed: 'C2' },
                    score: '11-9, 11-7',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf3', 
                    player1: { name: 'Jason & Andrea', seed: 'C1' }, 
                    player2: { name: 'Luis & Elena', seed: 'B2' },
                    score: '11-5, 11-8',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf4', 
                    player1: { name: 'Michael & Sarah', seed: 'D1' }, 
                    player2: { name: 'Carlos & Ana', seed: 'A2' },
                    score: '11-7, 11-9',
                    winner: 'player2',
                    completed: true
                  }
                ],
                semiFinals: [
                  { 
                    id: 'sf1', 
                    player1: { name: 'John & Maria', seed: 'QF1' }, 
                    player2: { name: 'Miguel & Sofia', seed: 'QF2' },
                    score: '11-9, 11-8',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'sf2', 
                    player1: { name: 'Jason & Andrea', seed: 'QF3' }, 
                    player2: { name: 'Carlos & Ana', seed: 'QF4' },
                    score: '11-6, 11-10',
                    winner: 'player1',
                    completed: true
                  }
                ],
                final: {
                  id: 'final',
                  player1: { name: 'John & Maria', seed: 'SF1' },
                  player2: { name: 'Jason & Andrea', seed: 'SF2' },
                  score: '11-8, 11-9',
                  winner: 'player1',
                  completed: true
                },
                thirdPlace: {
                  id: 'thirdPlace',
                  player1: { name: 'Miguel & Sofia', seed: 'SF1-L' },
                  player2: { name: 'Carlos & Ana', seed: 'SF2-L' },
                  score: '11-5, 11-7',
                  winner: 'player1',
                  completed: true
                }
              }
            },
            't2-mens-singles': {
              id: 't2-mens-singles',
              name: "Men's Singles Advanced 18+",
              ageGroup: '18+',
              skillLevel: 'Advanced',
              icon: '👨',
              participants: 16,
              maxParticipants: 16,
              prizePool: 25000,
              groupStage: {
                bracketA: [
                  { id: '1', name: 'John Doe', rating: '4.8', roundWins: 4, roundLosses: 0, winPoints: 44, lossPoints: 12, position: 1, age: 24 },
                  { id: '5', name: 'Carlos Rodriguez', rating: '4.6', roundWins: 3, roundLosses: 1, winPoints: 35, lossPoints: 18, position: 2, age: 28 },
                  { id: '9', name: 'Miguel Torres', rating: '4.4', roundWins: 2, roundLosses: 2, winPoints: 28, lossPoints: 26, position: 3, age: 31 },
                  { id: '13', name: 'Alex Martinez', rating: '4.2', roundWins: 1, roundLosses: 3, winPoints: 18, lossPoints: 33, position: 4, age: 26 }
                ],
                bracketB: [
                  { id: '2', name: 'Michael Johnson', rating: '4.7', roundWins: 4, roundLosses: 0, winPoints: 44, lossPoints: 10, position: 1, age: 29 },
                  { id: '6', name: 'Luis Chen', rating: '4.5', roundWins: 3, roundLosses: 1, winPoints: 37, lossPoints: 15, position: 2, age: 25 },
                  { id: '10', name: 'Roberto Kim', rating: '4.3', roundWins: 2, roundLosses: 2, winPoints: 26, lossPoints: 28, position: 3, age: 33 },
                  { id: '14', name: 'David Park', rating: '4.1', roundWins: 1, roundLosses: 3, winPoints: 15, lossPoints: 37, position: 4, age: 27 }
                ],
                bracketC: [
                  { id: '3', name: 'Jason Park', rating: '4.6', roundWins: 4, roundLosses: 0, winPoints: 44, lossPoints: 8, position: 1, age: 30 },
                  { id: '7', name: 'Anthony Chen', rating: '4.4', roundWins: 3, roundLosses: 1, winPoints: 39, lossPoints: 12, position: 2, age: 24 },
                  { id: '11', name: 'Marcus Tan', rating: '4.2', roundWins: 2, roundLosses: 2, winPoints: 24, lossPoints: 28, position: 3, age: 32 },
                  { id: '15', name: 'Steven Wong', rating: '4.0', roundWins: 1, roundLosses: 3, winPoints: 12, lossPoints: 39, position: 4, age: 26 }
                ],
                bracketD: [
                  { id: '4', name: 'Patrick Lim', rating: '4.5', roundWins: 4, roundLosses: 0, winPoints: 44, lossPoints: 6, position: 1, age: 28 },
                  { id: '8', name: 'Jonathan Wu', rating: '4.3', roundWins: 3, roundLosses: 1, winPoints: 36, lossPoints: 15, position: 2, age: 25 },
                  { id: '12', name: 'Brandon Choi', rating: '4.1', roundWins: 2, roundLosses: 2, winPoints: 22, lossPoints: 30, position: 3, age: 29 },
                  { id: '16', name: 'Daniel Ko', rating: '3.9', roundWins: 1, roundLosses: 3, winPoints: 15, lossPoints: 36, position: 4, age: 31 }
                ]
              },
              knockoutStage: {
                quarterFinals: [
                  { 
                    id: 'qf1', 
                    player1: { name: 'John Doe', seed: 'A1' }, 
                    player2: { name: 'Anthony Chen', seed: 'C2' },
                    score: '11-8, 11-6',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf2', 
                    player1: { name: 'Michael Johnson', seed: 'B1' }, 
                    player2: { name: 'Jonathan Wu', seed: 'D2' },
                    score: '11-9, 11-7',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf3', 
                    player1: { name: 'Jason Park', seed: 'C1' }, 
                    player2: { name: 'Luis Chen', seed: 'B2' },
                    score: '11-5, 11-8',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf4', 
                    player1: { name: 'Patrick Lim', seed: 'D1' }, 
                    player2: { name: 'Carlos Rodriguez', seed: 'A2' },
                    score: '11-7, 11-9',
                    winner: 'player2',
                    completed: true
                  }
                ],
                semiFinals: [
                  { 
                    id: 'sf1', 
                    player1: { name: 'John Doe', seed: 'QF1' }, 
                    player2: { name: 'Michael Johnson', seed: 'QF2' },
                    score: '11-9, 11-8',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'sf2', 
                    player1: { name: 'Jason Park', seed: 'QF3' }, 
                    player2: { name: 'Carlos Rodriguez', seed: 'QF4' },
                    score: '11-6, 11-10',
                    winner: 'player1',
                    completed: true
                  }
                ],
                final: {
                  id: 'final',
                  player1: { name: 'John Doe', seed: 'SF1' },
                  player2: { name: 'Jason Park', seed: 'SF2' },
                  score: '11-8, 11-9',
                  winner: 'player1',
                  completed: true
                },
                thirdPlace: {
                  id: 'thirdPlace',
                  player1: { name: 'Michael Johnson', seed: 'SF1-L' },
                  player2: { name: 'Carlos Rodriguez', seed: 'SF2-L' },
                  score: '11-5, 11-7',
                  winner: 'player1',
                  completed: true
                }
              }
            },
            't2-womens-singles': {
              id: 't2-womens-singles',
              name: "Women's Singles 18+ Intermediate", 
              ageGroup: '18+',
              skillLevel: 'Intermediate',
              icon: '👩',
              participants: 12,
              maxParticipants: 12,
              prizePool: 15000,
              groupStage: {
                bracketA: [
                  { id: '1', name: 'Maria Santos', rating: '3.8', roundWins: 3, roundLosses: 1, winPoints: 35, lossPoints: 21, position: 1, age: 24 },
                  { id: '4', name: 'Ana Reyes', rating: '3.6', roundWins: 2, roundLosses: 2, winPoints: 28, lossPoints: 26, position: 2, age: 26 },
                  { id: '7', name: 'Sofia Garcia', rating: '3.4', roundWins: 1, roundLosses: 3, winPoints: 18, lossPoints: 33, position: 3, age: 28 }
                ],
                bracketB: [
                  { id: '2', name: 'Elena Cruz', rating: '3.7', roundWins: 4, roundLosses: 0, winPoints: 44, lossPoints: 15, position: 1, age: 25 },
                  { id: '5', name: 'Carmen Lopez', rating: '3.5', roundWins: 2, roundLosses: 2, winPoints: 29, lossPoints: 27, position: 2, age: 30 },
                  { id: '8', name: 'Patricia Wong', rating: '3.3', roundWins: 0, roundLosses: 4, winPoints: 12, lossPoints: 44, position: 3, age: 27 }
                ],
                bracketC: [
                  { id: '3', name: 'Andrea Martinez', rating: '3.9', roundWins: 3, roundLosses: 1, winPoints: 37, lossPoints: 19, position: 1, age: 23 },
                  { id: '6', name: 'Rachel Gonzalez', rating: '3.7', roundWins: 2, roundLosses: 2, winPoints: 31, lossPoints: 24, position: 2, age: 29 },
                  { id: '9', name: 'Lisa Johnson', rating: '3.5', roundWins: 1, roundLosses: 3, winPoints: 22, lossPoints: 35, position: 3, age: 31 }
                ],
                bracketD: [
                  { id: '10', name: 'Sarah Kim', rating: '3.6', roundWins: 3, roundLosses: 1, winPoints: 36, lossPoints: 18, position: 1, age: 26 },
                  { id: '11', name: 'Michelle Yang', rating: '3.4', roundWins: 2, roundLosses: 2, winPoints: 25, lossPoints: 29, position: 2, age: 28 },
                  { id: '12', name: 'Victoria Huang', rating: '3.2', roundWins: 1, roundLosses: 3, winPoints: 19, lossPoints: 36, position: 3, age: 24 }
                ]
              },
              knockoutStage: {
                quarterFinals: [
                  { 
                    id: 'qf1', 
                    player1: { name: 'Maria Santos', seed: 'A1' }, 
                    player2: { name: 'Michelle Yang', seed: 'D2' },
                    score: '11-7, 11-9',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf2', 
                    player1: { name: 'Elena Cruz', seed: 'B1' }, 
                    player2: { name: 'Rachel Gonzalez', seed: 'C2' },
                    score: '11-8, 11-6',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf3', 
                    player1: { name: 'Andrea Martinez', seed: 'C1' }, 
                    player2: { name: 'Ana Reyes', seed: 'A2' },
                    score: '11-5, 11-8',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf4', 
                    player1: { name: 'Sarah Kim', seed: 'D1' }, 
                    player2: { name: 'Carmen Lopez', seed: 'B2' },
                    score: '11-9, 11-7',
                    winner: 'player1',
                    completed: true
                  }
                ],
                semiFinals: [
                  { 
                    id: 'sf1', 
                    player1: { name: 'Maria Santos', seed: 'QF1' }, 
                    player2: { name: 'Elena Cruz', seed: 'QF2' },
                    score: '11-6, 11-8',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'sf2', 
                    player1: { name: 'Andrea Martinez', seed: 'QF3' }, 
                    player2: { name: 'Sarah Kim', seed: 'QF4' },
                    score: '11-9, 11-5',
                    winner: 'player1',
                    completed: true
                  }
                ],
                final: {
                  id: 'final',
                  player1: { name: 'Maria Santos', seed: 'SF1' },
                  player2: { name: 'Andrea Martinez', seed: 'SF2' },
                  score: '11-7, 11-9',
                  winner: 'player1',
                  completed: true
                },
                thirdPlace: {
                  id: 'thirdPlace',
                  player1: { name: 'Elena Cruz', seed: 'SF1-L' },
                  player2: { name: 'Sarah Kim', seed: 'SF2-L' },
                  score: '11-4, 11-6',
                  winner: 'player1',
                  completed: true
                }
              }
            }
          },
          rules: [
            'All matches follow official IFP rules',
            'Players must check in 30 minutes before their scheduled match',
            'Proper athletic attire and non-marking shoes required',
            'No coaching allowed during matches'
          ],
          amenities: ['Parking', 'Restrooms', 'Food Court', 'Pro Shop', 'Air Conditioning'],
          brackets: [
            {
              id: 'bracket-1',
              name: 'Bracket A',
              maxPlayers: 5, // 20 total capacity ÷ 4 brackets = 5 per bracket
              players: [
                { id: '1', name: 'John "The Ace" Doe', status: 'approved', rating: '4.5', team: 'Manila Smashers' },
                { id: '8', name: 'Elena Cruz', status: 'approved', rating: '3.9', team: 'Alabang Aces' },
                { id: '13', name: 'James "Comet" Taylor', status: 'approved', rating: '3.6', team: 'Paranaque Phoenix' },
                { id: '16', name: 'Sarah "Whirlwind" Kim', status: 'approved', rating: '3.4', team: 'Valenzuela Vipers' },
                                  { id: '17', name: 'Alex Martinez', status: 'approved', rating: '3.2', team: 'Caloocan Cobras' }
              ]
            },
            {
              id: 'bracket-2',
              name: 'Bracket B',
              maxPlayers: 5,
              players: [
                { id: '2', name: 'Maria Santos', status: 'approved', rating: '4.3', team: 'QC Warriors' },
                { id: '7', name: 'Luis "Rocket" Chen', status: 'approved', rating: '4.0', team: 'Pasig Panthers' },
                { id: '12', name: 'Patricia "Viper" Wong', status: 'approved', rating: '3.7', team: 'Mandaluyong Meteors' },
                { id: '14', name: 'Lisa "Arrow" Johnson', status: 'approved', rating: '3.5', team: 'Las Pinas Lions' }
              ]
            },
            {
              id: 'bracket-3',
              name: 'Bracket C',
              maxPlayers: 5,
              players: [
                { id: '3', name: 'Carlos "The Wall" Rodriguez', status: 'approved', rating: '4.4', team: 'BGC Titans' },
                { id: '9', name: 'Roberto "Hammer" Kim', status: 'approved', rating: '4.1', team: 'Greenhills Gladiators' },
                { id: '11', name: 'David "Spike" Park', status: 'approved', rating: '4.0', team: 'Cubao Crushers' },
                { id: '15', name: 'Michael "Bolt" Chang', status: 'approved', rating: '3.8', team: 'Muntinlupa Mustangs' }
              ]
            },
            {
              id: 'bracket-4',
              name: 'Bracket D',
              maxPlayers: 5,
              players: [
                { id: '4', name: 'Ana "Fire" Reyes', status: 'approved', rating: '4.2', team: 'Makati Sharks' },
                { id: '5', name: 'Miguel Torres', status: 'approved', rating: '4.6', team: 'Ortigas Eagles' },
                { id: '6', name: 'Sofia "Ice" Garcia', status: 'approved', rating: '4.1', team: 'Taguig Thunder' },
                { id: '10', name: 'Carmen "Flash" Lopez', status: 'approved', rating: '3.8', team: 'Marikina Mavericks' },
                { id: '18', name: 'Rachel Gonzalez', status: 'approved', rating: '3.3', team: 'Malabon Mako' }
              ]
            }
          ],
          registrations: [
            // Approved players in brackets
            { id: '1', playerName: 'John "The Ace" Doe', registeredAt: '2025-01-10T10:30:00Z', status: 'approved', bracketId: 'bracket-1', rating: '4.5', team: 'Manila Smashers' },
            { id: '2', playerName: 'Maria Santos', registeredAt: '2025-01-10T11:15:00Z', status: 'approved', bracketId: 'bracket-1', rating: '4.3', team: 'QC Warriors' },
            { id: '3', playerName: 'Carlos "The Wall" Rodriguez', registeredAt: '2025-01-10T14:20:00Z', status: 'approved', bracketId: 'bracket-1', rating: '4.4', team: 'BGC Titans' },
            { id: '4', playerName: 'Ana "Fire" Reyes', registeredAt: '2025-01-11T09:45:00Z', status: 'approved', bracketId: 'bracket-1', rating: '4.2', team: 'Makati Sharks' },
            { id: '5', playerName: 'Miguel Torres', registeredAt: '2025-01-11T13:10:00Z', status: 'approved', bracketId: 'bracket-1', rating: '4.6', team: 'Ortigas Eagles' },
            { id: '6', playerName: 'Sofia "Ice" Garcia', registeredAt: '2025-01-12T08:30:00Z', status: 'approved', bracketId: 'bracket-1', rating: '4.1', team: 'Taguig Thunder' },
            { id: '7', playerName: 'Luis "Rocket" Chen', registeredAt: '2025-01-12T16:45:00Z', status: 'approved', bracketId: 'bracket-2', rating: '4.0', team: 'Pasig Panthers' },
            { id: '8', playerName: 'Elena Cruz', registeredAt: '2025-01-13T12:00:00Z', status: 'approved', bracketId: 'bracket-2', rating: '3.9', team: 'Alabang Aces' },
            { id: '9', playerName: 'Roberto "Hammer" Kim', registeredAt: '2025-01-13T15:20:00Z', status: 'approved', bracketId: 'bracket-2', rating: '4.1', team: 'Greenhills Gladiators' },
            { id: '10', playerName: 'Carmen "Flash" Lopez', registeredAt: '2025-01-14T10:10:00Z', status: 'approved', bracketId: 'bracket-2', rating: '3.8', team: 'Marikina Mavericks' },
            { id: '11', playerName: 'David "Spike" Park', registeredAt: '2025-01-14T14:30:00Z', status: 'approved', bracketId: 'bracket-2', rating: '4.0', team: 'Cubao Crushers' },
            { id: '12', playerName: 'Patricia "Viper" Wong', registeredAt: '2025-01-15T09:00:00Z', status: 'approved', bracketId: 'bracket-2', rating: '3.7', team: 'Mandaluyong Meteors' },
            { id: '13', playerName: 'James "Comet" Taylor', registeredAt: '2025-01-15T11:30:00Z', status: 'approved', bracketId: 'bracket-3', rating: '3.6', team: 'Paranaque Phoenix' },
            { id: '14', playerName: 'Lisa "Arrow" Johnson', registeredAt: '2025-01-15T16:15:00Z', status: 'approved', bracketId: 'bracket-3', rating: '3.5', team: 'Las Pinas Lions' },
            { id: '15', playerName: 'Michael "Bolt" Chang', registeredAt: '2025-01-16T09:20:00Z', status: 'approved', bracketId: 'bracket-3', rating: '3.8', team: 'Muntinlupa Mustangs' },
            { id: '16', playerName: 'Sarah "Whirlwind" Kim', registeredAt: '2025-01-16T14:45:00Z', status: 'approved', bracketId: 'bracket-3', rating: '3.4', team: 'Valenzuela Vipers' },
            { id: '17', playerName: 'Alex Martinez', registeredAt: '2025-01-17T10:30:00Z', status: 'approved', bracketId: 'bracket-4', rating: '3.2', team: 'Caloocan Cobras' },
            { id: '18', playerName: 'Rachel Gonzalez', registeredAt: '2025-01-17T15:20:00Z', status: 'approved', bracketId: 'bracket-4', rating: '3.3', team: 'Malabon Mako' },
            // Pending approvals
            { id: '19', playerName: 'Kevin Lim', registeredAt: '2025-01-18T09:15:00Z', status: 'pending', bracketId: null, rating: '3.1', team: 'Pasay Predators' },
            { id: '20', playerName: 'Nina Cruz', registeredAt: '2025-01-18T11:30:00Z', status: 'pending', bracketId: null, rating: '3.4', team: 'Quezon Quakes' },
            { id: '21', playerName: 'Tony Reyes', registeredAt: '2025-01-18T14:45:00Z', status: 'pending', bracketId: null, rating: '3.6', team: 'Masinag Magic' },
            { id: '22', playerName: 'Grace Tan', registeredAt: '2025-01-18T16:20:00Z', status: 'pending', bracketId: null, rating: '3.2', team: 'Fairview Falcons' },
            // Rejected applications
            { id: '23', playerName: 'Mark Brown', registeredAt: '2025-01-19T10:00:00Z', status: 'rejected', bracketId: null, rating: '2.5', team: 'Independent', note: 'Rating below minimum requirement' },
            { id: '24', playerName: 'Jenny Davis', registeredAt: '2025-01-19T13:15:00Z', status: 'rejected', bracketId: null, rating: '2.8', team: 'Independent', note: 'Incomplete documentation' }
          ]
        },
        {
          id: '2',
          name: 'Intermediate Skills Tournament',
          date: '2025-07-20T09:00:00Z',
          endDate: '2025-07-20T17:00:00Z', // Single day
          location: 'Quezon City Sports Complex',
          address: '456 Sports St, Quezon City, Metro Manila',
          latitude: 14.6760,
          longitude: 121.0437,
          entryFee: 800,
          prizePool: 20000,
          maxParticipants: 24,
          currentParticipants: 24,
          registrationDeadline: '2025-06-20T23:59:59Z',
          bannerUrl: 'https://images.unsplash.com/photo-1723004714201-cf224222b897?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          tier: 2,
          tournamentType: 'intermediate',
          description: 'Perfect for developing players! This competitive tournament welcomes intermediate skill levels with a focus on improving gameplay and strategy.',
          contactEmail: 'intermediate@philippinepickleball.com',
          contactPhone: '+63 912 345 6788',
          divisions: ["Mixed Doubles", "Men's Doubles", "Women's Doubles"],
          // Multiple Tournament Categories with Brackets
          tournamentCategories: {
            'mens-doubles-intermediate-18': {
              id: 'mens-doubles-intermediate-18',
              name: "Men's Doubles Intermediate 18+",
              ageGroup: '18+',
              skillLevel: 'Intermediate',
              participants: 8,
              maxParticipants: 8,
              prizePool: 8000,
              description: 'Competitive men\'s doubles for intermediate-level players',
              groupStage: {
                bracketA: [
                  { id: '1', name: 'Mark Lee & Tony Yang', rating: '3.5', roundWins: 3, roundLosses: 1, winPoints: 35, lossPoints: 22, position: 1, players: ['Mark Lee', 'Tony Yang'] },
                  { id: '2', name: 'Kevin Ng & Daniel Ko', rating: '3.4', roundWins: 2, roundLosses: 2, winPoints: 28, lossPoints: 26, position: 2, players: ['Kevin Ng', 'Daniel Ko'] }
                ],
                bracketB: [
                  { id: '3', name: 'Alex Chen & Ryan Lim', rating: '3.6', roundWins: 4, roundLosses: 0, winPoints: 44, lossPoints: 18, position: 1, players: ['Alex Chen', 'Ryan Lim'] },
                  { id: '4', name: 'Chris Wang & Ben Chua', rating: '3.2', roundWins: 1, roundLosses: 3, winPoints: 20, lossPoints: 35, position: 2, players: ['Chris Wang', 'Ben Chua'] }
                ],
                bracketC: [
                  { id: '5', name: 'Jake Huang & Sam Choi', rating: '3.3', roundWins: 3, roundLosses: 1, winPoints: 33, lossPoints: 21, position: 1, players: ['Jake Huang', 'Sam Choi'] },
                  { id: '6', name: 'Eric Goh & Gary Yap', rating: '3.1', roundWins: 2, roundLosses: 2, winPoints: 25, lossPoints: 28, position: 2, players: ['Eric Goh', 'Gary Yap'] }
                ],
                bracketD: [
                  { id: '7', name: 'Ken Lai & Max Teo', rating: '3.0', roundWins: 2, roundLosses: 2, winPoints: 29, lossPoints: 27, position: 1, players: ['Ken Lai', 'Max Teo'] },
                  { id: '8', name: 'Ivan Soh & Oscar Chia', rating: '2.9', roundWins: 1, roundLosses: 3, winPoints: 18, lossPoints: 33, position: 2, players: ['Ivan Soh', 'Oscar Chia'] }
                ]
              },
              knockoutStage: {
                quarterFinals: [
                  { 
                    id: 'qf1', 
                    player1: { name: 'Mark & Tony', seed: 'A1' }, 
                    player2: { name: 'Ivan & Oscar', seed: 'D2' },
                    score: '11-6, 11-8',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf2', 
                    player1: { name: 'Alex & Ryan', seed: 'B1' }, 
                    player2: { name: 'Eric & Gary', seed: 'C2' },
                    score: '11-9, 11-7',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf3', 
                    player1: { name: 'Jake & Sam', seed: 'C1' }, 
                    player2: { name: 'Chris & Ben', seed: 'B2' },
                    score: '11-5, 11-10',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf4', 
                    player1: { name: 'Ken & Max', seed: 'D1' }, 
                    player2: { name: 'Kevin & Daniel', seed: 'A2' },
                    score: '11-8, 11-6',
                    winner: 'player2',
                    completed: true
                  }
                ],
                semiFinals: [
                  { 
                    id: 'sf1', 
                    player1: { name: 'Mark & Tony', seed: 'QF1' }, 
                    player2: { name: 'Alex & Ryan', seed: 'QF2' },
                    score: '11-7, 11-9',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'sf2', 
                    player1: { name: 'Jake & Sam', seed: 'QF3' }, 
                    player2: { name: 'Kevin & Daniel', seed: 'QF4' },
                    score: '11-6, 11-8',
                    winner: 'player1',
                    completed: true
                  }
                ],
                final: {
                  id: 'final',
                  player1: { name: 'Mark & Tony', seed: 'SF1' },
                  player2: { name: 'Jake & Sam', seed: 'SF2' },
                  score: '11-9, 11-7',
                  winner: 'player1',
                  completed: true
                },
                thirdPlace: {
                  id: 'thirdPlace',
                  player1: { name: 'Alex & Ryan', seed: 'SF1-L' },
                  player2: { name: 'Kevin & Daniel', seed: 'SF2-L' },
                  score: '11-4, 11-6',
                  winner: 'player1',
                  completed: true
                }
              }
            },
            't3-womens-doubles': {
              id: 't3-womens-doubles',
              name: "Women's Doubles Intermediate 18+", 
              ageGroup: '18+',
              skillLevel: 'Intermediate',
              icon: '👭',
              participants: 8,
              maxParticipants: 8,
              prizePool: 7000,
              description: 'Women\'s doubles competition for developing players',
              groupStage: {
                bracketA: [
                  { id: '1', name: 'Maya & Nina', rating: '3.3', wins: 1, points: 3, position: 1, players: ['Maya Patel', 'Nina Xu'] },
                  { id: '2', name: 'Grace & Amy', rating: '3.2', wins: 1, points: 3, position: 2, players: ['Grace Liu', 'Amy Zhao'] }
                ],
                bracketB: [
                  { id: '3', name: 'Jenny & Emma', rating: '3.4', wins: 1, points: 3, position: 1, players: ['Jenny Wu', 'Emma Zhou'] },
                  { id: '4', name: 'Coco & Fiona', rating: '3.0', wins: 1, points: 3, position: 2, players: ['Coco Tan', 'Fiona Ong'] }
                ],
                bracketC: [
                  { id: '5', name: 'Diana & Lisa', rating: '3.2', wins: 1, points: 3, position: 1, players: ['Diana Tan', 'Lisa Park'] },
                  { id: '6', name: 'Helen & Joy', rating: '2.9', wins: 1, points: 3, position: 2, players: ['Helen Low', 'Joy Koh'] }
                ],
                bracketD: [
                  { id: '7', name: 'Lily & Nora', rating: '2.8', wins: 1, points: 3, position: 1, players: ['Lily Sim', 'Nora Wee'] },
                  { id: '8', name: 'Sarah & Priya', rating: '3.1', wins: 1, points: 3, position: 2, players: ['Sarah Kim', 'Priya Singh'] }
                ]
              },
              knockoutStage: {
                quarterFinals: [
                  { 
                    id: 'qf1', 
                    player1: { name: 'Maya & Nina', seed: 'A1' }, 
                    player2: { name: 'Sarah & Priya', seed: 'D2' },
                    score: '11-8, 11-6',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf2', 
                    player1: { name: 'Jenny & Emma', seed: 'B1' }, 
                    player2: { name: 'Helen & Joy', seed: 'C2' },
                    score: '11-5, 11-7',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf3', 
                    player1: { name: 'Diana & Lisa', seed: 'C1' }, 
                    player2: { name: 'Coco & Fiona', seed: 'B2' },
                    score: '11-9, 11-8',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf4', 
                    player1: { name: 'Lily & Nora', seed: 'D1' }, 
                    player2: { name: 'Grace & Amy', seed: 'A2' },
                    score: '11-7, 11-9',
                    winner: 'player2',
                    completed: true
                  }
                ],
                semiFinals: [
                  { 
                    id: 'sf1', 
                    player1: { name: 'Maya & Nina', seed: 'QF1' }, 
                    player2: { name: 'Jenny & Emma', seed: 'QF2' },
                    score: '11-6, 11-9',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'sf2', 
                    player1: { name: 'Diana & Lisa', seed: 'QF3' }, 
                    player2: { name: 'Grace & Amy', seed: 'QF4' },
                    score: '11-8, 11-7',
                    winner: 'player1',
                    completed: true
                  }
                ],
                final: {
                  id: 'final',
                  player1: { name: 'Maya & Nina', seed: 'SF1' },
                  player2: { name: 'Diana & Lisa', seed: 'SF2' },
                  score: '11-9, 11-8',
                  winner: 'player1',
                  completed: true
                },
                thirdPlace: {
                  id: 'thirdPlace',
                  player1: { name: 'Jenny & Emma', seed: 'SF1-L' },
                  player2: { name: 'Grace & Amy', seed: 'SF2-L' },
                  score: '11-5, 11-7',
                  winner: 'player1',
                  completed: true
                }
              }
            },
            'mixed-doubles': {
              id: 'mixed-doubles',
              name: "Mixed Doubles Intermediate 18+",
              ageGroup: '18+',
              skillLevel: 'Intermediate',
              icon: '👫',
              participants: 8,
              maxParticipants: 8,
              prizePool: 5000,
              description: 'Fun and competitive mixed doubles for all skill levels'
              // No bracket data for recreational - just show placeholder
            }
          },
          rules: [
            'Open to players with 1-3 years experience',
            'Standard scoring system applies',
            'Limited coaching allowed between games',
            'Emphasis on competitive play and sportsmanship'
          ],
          amenities: ['Parking', 'Restrooms', 'Refreshments'],
          brackets: [
            {
              id: 'bracket-1',
              name: 'Bracket A',
              maxPlayers: 6, // 24 total capacity ÷ 4 brackets = 6 per bracket (FULL CAPACITY)
              players: [
                { id: '1', name: 'Sarah Kim', status: 'approved', rating: '3.2', team: 'QC Slammers' },
                { id: '9', name: 'Priya Singh', status: 'approved', rating: '3.1', team: 'BGC Breakers' },
                { id: '13', name: 'Grace Liu', status: 'approved', rating: '3.4', team: 'Makati Movers' },
                { id: '19', name: 'Amy Zhao', status: 'approved', rating: '3.0', team: 'Ortigas Owls' },
                { id: '21', name: 'Coco Tan', status: 'approved', rating: '3.3', team: 'Taguig Tigers' },
                { id: '24', name: 'Gary Yap', status: 'approved', rating: '3.2', team: 'Pasig Pirates' }
              ]
            },
            {
              id: 'bracket-2',
              name: 'Bracket B',
              maxPlayers: 6,
              players: [
                { id: '2', name: 'Mark Lee', status: 'approved', rating: '3.5', team: 'Manila Mayhem' },
                { id: '7', name: 'Maya Patel', status: 'approved', rating: '3.3', team: 'Alabang Aces' },
                { id: '14', name: 'Tony Yang', status: 'approved', rating: '3.1', team: 'Greenhills Giants' },
                { id: '17', name: 'Nina Xu', status: 'approved', rating: '3.4', team: 'Marikina Magic' },
                { id: '20', name: 'Ben Chua', status: 'approved', rating: '3.2', team: 'Cubao Cyclones' },
                { id: '23', name: 'Fiona Ong', status: 'approved', rating: '3.0', team: 'Mandaluyong Meteors' }
              ]
            },
            {
              id: 'bracket-3',
              name: 'Bracket C',
              maxPlayers: 6,
              players: [
                { id: '3', name: 'Jenny Wu', status: 'approved', rating: '3.3', team: 'Paranaque Panthers' },
                { id: '8', name: 'Kevin Ng', status: 'approved', rating: '3.4', team: 'Las Pinas Lions' },
                { id: '12', name: 'Daniel Ko', status: 'approved', rating: '3.1', team: 'Muntinlupa Mustangs' },
                { id: '15', name: 'Emma Zhou', status: 'approved', rating: '3.5', team: 'Valenzuela Vipers' },
                { id: '18', name: 'Sam Choi', status: 'approved', rating: '3.2', team: 'Caloocan Cobras' },
                { id: '22', name: 'Eric Goh', status: 'approved', rating: '3.3', team: 'Malabon Mako' }
              ]
            },
            {
              id: 'bracket-4',
              name: 'Bracket D',
              maxPlayers: 6,
              players: [
                { id: '4', name: 'Alex Chen', status: 'approved', rating: '3.6', team: 'Pasay Predators' },
                { id: '5', name: 'Diana Tan', status: 'approved', rating: '3.2', team: 'Quezon Quakes' },
                { id: '6', name: 'Ryan Lim', status: 'approved', rating: '3.4', team: 'Masinag Magic' },
                { id: '10', name: 'Chris Wang', status: 'approved', rating: '3.1', team: 'Fairview Falcons' },
                { id: '11', name: 'Lisa Park', status: 'approved', rating: '3.5', team: 'Antipolo Arrows' },
                { id: '16', name: 'Jake Huang', status: 'approved', rating: '3.3', team: 'San Juan Spartans' }
              ]
            }
          ],
          registrations: Array.from({ length: 32 }, (_, i) => ({
            id: (i + 1).toString(),
            playerName: [
              'Sarah Kim', 'Mark Lee', 'Jenny Wu', 'Alex Chen', 'Diana Tan', 'Ryan Lim',
              'Maya Patel', 'Kevin Ng', 'Priya Singh', 'Chris Wang', 'Lisa Park', 'Daniel Ko',
              'Grace Liu', 'Tony Yang', 'Emma Zhou', 'Jake Huang', 'Nina Xu', 'Sam Choi',
              'Amy Zhao', 'Ben Chua', 'Coco Tan', 'Eric Goh', 'Fiona Ong', 'Gary Yap',
              'Helen Low', 'Ivan Soh', 'Joy Koh', 'Ken Lai', 'Lily Sim', 'Max Teo',
              'Nora Wee', 'Oscar Chia'
            ][i],
            registeredAt: new Date(Date.now() - (32 - i) * 24 * 60 * 60 * 1000).toISOString(),
            status: i < 24 ? 'approved' : 'pending',
            bracketId: i < 24 ? `bracket-${Math.floor(i / 6) + 1}` : null
          })),
          // Tournament Bracket Data - Intermediate Level
          tournamentBracket: {
            groupStage: {
              bracketA: [
                { id: '1', name: 'Sarah Kim', rating: '3.2', wins: 5, points: 15, position: 1 },
                { id: '9', name: 'Priya Singh', rating: '3.1', wins: 4, points: 12, position: 2 },
                { id: '13', name: 'Grace Liu', rating: '3.4', wins: 3, points: 9, position: 3 },
                { id: '19', name: 'Amy Zhao', rating: '3.0', wins: 2, points: 6, position: 4 },
                { id: '21', name: 'Coco Tan', rating: '3.3', wins: 1, points: 3, position: 5 },
                { id: '24', name: 'Gary Yap', rating: '3.2', wins: 0, points: 0, position: 6 }
              ],
              bracketB: [
                { id: '2', name: 'Mark Lee', rating: '3.5', wins: 4, points: 12, position: 1 },
                { id: '7', name: 'Maya Patel', rating: '3.3', wins: 4, points: 12, position: 2 },
                { id: '14', name: 'Tony Yang', rating: '3.1', wins: 3, points: 9, position: 3 },
                { id: '17', name: 'Nina Xu', rating: '3.4', wins: 2, points: 6, position: 4 },
                { id: '20', name: 'Ben Chua', rating: '3.2', wins: 1, points: 3, position: 5 },
                { id: '23', name: 'Fiona Ong', rating: '3.0', wins: 0, points: 0, position: 6 }
              ],
              bracketC: [
                { id: '3', name: 'Jenny Wu', rating: '3.3', wins: 5, points: 15, position: 1 },
                { id: '8', name: 'Kevin Ng', rating: '3.4', wins: 3, points: 9, position: 2 },
                { id: '12', name: 'Daniel Ko', rating: '3.1', wins: 3, points: 9, position: 3 },
                { id: '15', name: 'Emma Zhou', rating: '3.5', wins: 2, points: 6, position: 4 },
                { id: '18', name: 'Sam Choi', rating: '3.2', wins: 1, points: 3, position: 5 },
                { id: '22', name: 'Eric Goh', rating: '3.3', wins: 0, points: 0, position: 6 }
              ],
              bracketD: [
                { id: '4', name: 'Alex Chen', rating: '3.6', wins: 4, points: 12, position: 1 },
                { id: '5', name: 'Diana Tan', rating: '3.2', wins: 4, points: 12, position: 2 },
                { id: '6', name: 'Ryan Lim', rating: '3.4', wins: 3, points: 9, position: 3 },
                { id: '10', name: 'Chris Wang', rating: '3.1', wins: 2, points: 6, position: 4 },
                { id: '11', name: 'Lisa Park', rating: '3.5', wins: 1, points: 3, position: 5 },
                { id: '16', name: 'Jake Huang', rating: '3.3', wins: 0, points: 0, position: 6 }
              ]
            },
            knockoutStage: {
              quarterFinals: [
                { 
                  id: 'qf1', 
                  player1: { name: 'Sarah Kim', seed: 'A1' }, 
                  player2: { name: 'Kevin Ng', seed: 'C2' },
                  score: '11-9, 11-7',
                  winner: 'player1',
                  completed: true
                },
                { 
                  id: 'qf2', 
                  player1: { name: 'Mark Lee', seed: 'B1' }, 
                  player2: { name: 'Diana Tan', seed: 'D2' },
                  score: '11-6, 11-8',
                  winner: 'player1',
                  completed: true
                },
                { 
                  id: 'qf3', 
                  player1: { name: 'Jenny Wu', seed: 'C1' }, 
                  player2: { name: 'Priya Singh', seed: 'A2' },
                  score: '11-4, 11-6',
                  winner: 'player1',
                  completed: true
                },
                { 
                  id: 'qf4', 
                  player1: { name: 'Alex Chen', seed: 'D1' }, 
                  player2: { name: 'Maya Patel', seed: 'B2' },
                  score: '11-8, 11-10',
                  winner: 'player1',
                  completed: true
                }
              ],
              semiFinals: [
                { 
                  id: 'sf1', 
                  player1: { name: 'Sarah Kim', seed: 'QF1' }, 
                  player2: { name: 'Mark Lee', seed: 'QF2' },
                  score: '11-7, 11-9',
                  winner: 'player1',
                  completed: true
                },
                { 
                  id: 'sf2', 
                  player1: { name: 'Jenny Wu', seed: 'QF3' }, 
                  player2: { name: 'Alex Chen', seed: 'QF4' },
                  score: '11-9, 11-6',
                  winner: 'player1',
                  completed: true
                }
              ],
              final: {
                id: 'final',
                player1: { name: 'Sarah Kim', seed: 'SF1' },
                player2: { name: 'Jenny Wu', seed: 'SF2' },
                score: '11-9, 11-8',
                winner: 'player1',
                completed: true
              },
              thirdPlace: {
                id: 'thirdPlace',
                player1: { name: 'Mark Lee', seed: 'SF1-L' },
                player2: { name: 'Alex Chen', seed: 'SF2-L' },
                score: '11-4, 11-7',
                winner: 'player1',
                completed: true
              }
            }
          }
        },
        {
          id: '3',
          name: 'Indoor Championship Series',
          date: '2025-07-01T09:00:00Z',
          endDate: '2025-07-02T18:00:00Z', // 2-day tournament
          location: 'BGC Indoor Sports Complex',
          address: '789 Bonifacio Global City, Taguig, Metro Manila',
          latitude: 14.5515,
          longitude: 121.0470,
          entryFee: 2000,
          prizePool: 75000,
          maxParticipants: 16,
          currentParticipants: 15,
          registrationDeadline: '2025-06-15T23:59:59Z',
          bannerUrl: 'https://plus.unsplash.com/premium_photo-1709048991290-1d36455a2895?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          tier: 3,
          tournamentType: 'advanced',
          description: 'High-level competition in a premium indoor facility. This tournament features the best players and highest prize pool of the season.',
          contactEmail: 'indoor@philippinepickleball.com',
          contactPhone: '+63 912 345 6787',
          divisions: ["Men's Singles", "Women's Singles", "Men's Doubles", "Women's Doubles", "Mixed Doubles", "Senior Doubles"],
          // Multiple Tournament Categories with Brackets
          tournamentCategories: {
            'mens-singles-advanced-35': {
              id: 'mens-singles-advanced-35',
              name: "Men's Singles Advanced 35+",
              ageGroup: '35+',
              skillLevel: 'Advanced',
              icon: '🏆',
              participants: 16,
              maxParticipants: 16,
              prizePool: 30000,
              description: 'Elite men\'s singles competition for advanced players',
              groupStage: {
                bracketA: [
                  { id: '1', name: 'Michael Johnson', rating: '4.8', roundWins: 3, roundLosses: 1, winPoints: 37, lossPoints: 19, position: 1, age: 38 },
                  { id: '2', name: 'Anthony Chen', rating: '4.5', roundWins: 2, roundLosses: 2, winPoints: 32, lossPoints: 28, position: 2, age: 42 }
                ],
                bracketB: [
                  { id: '3', name: 'Andrea Martinez', rating: '4.7', roundWins: 4, roundLosses: 0, winPoints: 44, lossPoints: 15, position: 1, age: 36 },
                  { id: '4', name: 'Marcus Tan', rating: '4.4', roundWins: 1, roundLosses: 3, winPoints: 22, lossPoints: 39, position: 2, age: 40 }
                ],
                bracketC: [
                  { id: '5', name: 'Jason Park', rating: '4.6', roundWins: 3, roundLosses: 1, winPoints: 35, lossPoints: 21, position: 1, age: 39 },
                  { id: '6', name: 'Vanessa Liu', rating: '4.4', roundWins: 2, roundLosses: 2, winPoints: 28, lossPoints: 30, position: 2, age: 37 }
                ],
                bracketD: [
                  { id: '7', name: 'Rachel Kim', rating: '4.5', roundWins: 4, roundLosses: 0, winPoints: 44, lossPoints: 12, position: 1, age: 35 },
                  { id: '8', name: 'Steven Wong', rating: '4.3', roundWins: 0, roundLosses: 4, winPoints: 18, lossPoints: 44, position: 2, age: 41 }
                ]
              },
              knockoutStage: {
                quarterFinals: [
                  { 
                    id: 'qf1', 
                    player1: { name: 'Michael Johnson', seed: 'A1' }, 
                    player2: { name: 'Steven Wong', seed: 'D2' },
                    score: '11-7, 11-9',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf2', 
                    player1: { name: 'Andrea Martinez', seed: 'B1' }, 
                    player2: { name: 'Vanessa Liu', seed: 'C2' },
                    score: '11-5, 11-8',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf3', 
                    player1: { name: 'Jason Park', seed: 'C1' }, 
                    player2: { name: 'Marcus Tan', seed: 'B2' },
                    score: '11-9, 11-6',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf4', 
                    player1: { name: 'Rachel Kim', seed: 'D1' }, 
                    player2: { name: 'Anthony Chen', seed: 'A2' },
                    score: '11-8, 11-7',
                    winner: 'player1',
                    completed: true
                  }
                ],
                semiFinals: [
                  { 
                    id: 'sf1', 
                    player1: { name: 'Michael Johnson', seed: 'QF1' }, 
                    player2: { name: 'Andrea Martinez', seed: 'QF2' },
                    score: '11-9, 11-8',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'sf2', 
                    player1: { name: 'Jason Park', seed: 'QF3' }, 
                    player2: { name: 'Rachel Kim', seed: 'QF4' },
                    score: '11-6, 11-10',
                    winner: 'player1',
                    completed: true
                  }
                ],
                final: {
                  id: 'final',
                  player1: { name: 'Michael Johnson', seed: 'SF1' },
                  player2: { name: 'Jason Park', seed: 'SF2' },
                  score: '11-8, 11-9',
                  winner: 'player1',
                  completed: true
                },
                thirdPlace: {
                  id: 'thirdPlace',
                  player1: { name: 'Andrea Martinez', seed: 'SF1-L' },
                  player2: { name: 'Rachel Kim', seed: 'SF2-L' },
                  score: '11-5, 11-9',
                  winner: 'player1',
                  completed: true
                }
              }
            },
            't4-womens-singles': {
              id: 't4-womens-singles',
              name: "Women's Singles Advanced 18+", 
              ageGroup: '18+',
              skillLevel: 'Advanced',
              icon: '👩',
              participants: 8,
              maxParticipants: 12,
              prizePool: 25000,
              description: 'High-level women\'s singles championship',
              groupStage: {
                bracketA: [
                  { id: '1', name: 'Amanda Yeh', rating: '4.3', roundWins: 3, roundLosses: 1, winPoints: 37, lossPoints: 19, position: 1, age: 25 },
                  { id: '2', name: 'Victoria Huang', rating: '4.1', roundWins: 2, roundLosses: 2, winPoints: 28, lossPoints: 30, position: 2, age: 24 }
                ],
                bracketB: [
                  { id: '3', name: 'Michelle Yang', rating: '4.1', roundWins: 4, roundLosses: 0, winPoints: 44, lossPoints: 15, position: 1, age: 28 },
                  { id: '4', name: 'Catherine Lee', rating: '4.2', roundWins: 1, roundLosses: 3, winPoints: 22, lossPoints: 38, position: 2, age: 26 }
                ],
                bracketC: [
                  { id: '5', name: 'Jonathan Wu', rating: '4.2', roundWins: 3, roundLosses: 1, winPoints: 35, lossPoints: 21, position: 1, age: 27 },
                  { id: '6', name: 'Patrick Lim', rating: '4.2', roundWins: 2, roundLosses: 2, winPoints: 26, lossPoints: 28, position: 2, age: 29 }
                ],
                bracketD: [
                  { id: '7', name: 'Brandon Choi', rating: '4.1', roundWins: 2, roundLosses: 2, winPoints: 31, lossPoints: 25, position: 1, age: 30 },
                  { id: '8', name: 'Daniel Ko', rating: '3.9', roundWins: 1, roundLosses: 3, winPoints: 19, lossPoints: 35, position: 2, age: 28 }
                ]
              },
              knockoutStage: {
                quarterFinals: [
                  { 
                    id: 'qf1', 
                    player1: { name: 'Amanda Yeh', seed: 'A1' }, 
                    player2: { name: 'Daniel Ko', seed: 'D2' },
                    score: '11-6, 11-8',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf2', 
                    player1: { name: 'Michelle Yang', seed: 'B1' }, 
                    player2: { name: 'Patrick Lim', seed: 'C2' },
                    score: '11-9, 11-7',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf3', 
                    player1: { name: 'Jonathan Wu', seed: 'C1' }, 
                    player2: { name: 'Catherine Lee', seed: 'B2' },
                    score: '11-5, 11-8',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf4', 
                    player1: { name: 'Brandon Choi', seed: 'D1' }, 
                    player2: { name: 'Victoria Huang', seed: 'A2' },
                    score: '11-7, 11-9',
                    winner: 'player1',
                    completed: true
                  }
                ],
                semiFinals: [
                  { 
                    id: 'sf1', 
                    player1: { name: 'Amanda Yeh', seed: 'QF1' }, 
                    player2: { name: 'Michelle Yang', seed: 'QF2' },
                    score: '11-8, 11-6',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'sf2', 
                    player1: { name: 'Jonathan Wu', seed: 'QF3' }, 
                    player2: { name: 'Brandon Choi', seed: 'QF4' },
                    score: '11-9, 11-7',
                    winner: 'player1',
                    completed: true
                  }
                ],
                final: {
                  id: 'final',
                  player1: { name: 'Amanda Yeh', seed: 'SF1' },
                  player2: { name: 'Jonathan Wu', seed: 'SF2' },
                  score: '11-7, 11-9',
                  winner: 'player1',
                  completed: true
                },
                thirdPlace: {
                  id: 'thirdPlace',
                  player1: { name: 'Michelle Yang', seed: 'SF1-L' },
                  player2: { name: 'Brandon Choi', seed: 'SF2-L' },
                  score: '11-4, 11-6',
                  winner: 'player1',
                  completed: true
                }
              }
            },
            'senior-doubles': {
              id: 'senior-doubles',
              name: "Mixed Doubles Open 50+",
              ageGroup: '50+',
              skillLevel: 'Open',
              icon: '🎖️',
              participants: 6,
              prizePool: 20000,
              description: 'Competitive doubles for experienced senior players',
              groupStage: {
                bracketA: [
                  { id: '1', name: 'Robert & James Sr.', rating: '4.0', wins: 2, points: 6, position: 1, players: ['Robert Senior', 'James Wilson Sr.'], ages: [45, 48] },
                  { id: '2', name: 'Frank & Thomas', rating: '3.8', wins: 1, points: 3, position: 2, players: ['Frank Miller', 'Thomas Brown'], ages: [42, 44] },
                  { id: '3', name: 'William & Charles', rating: '3.6', wins: 0, points: 0, position: 3, players: ['William Davis', 'Charles Garcia'], ages: [41, 43] }
                ],
                bracketB: [
                  { id: '4', name: 'Richard & Joseph', rating: '3.9', wins: 2, points: 6, position: 1, players: ['Richard Taylor', 'Joseph Anderson'], ages: [46, 47] },
                  { id: '5', name: 'Paul & Mark Sr.', rating: '3.7', wins: 1, points: 3, position: 2, players: ['Paul Martinez', 'Mark Rodriguez Sr.'], ages: [40, 45] },
                  { id: '6', name: 'Donald & Kenneth', rating: '3.5', wins: 0, points: 0, position: 3, players: ['Donald Wilson', 'Kenneth Lee'], ages: [44, 42] }
                ]
              },
              knockoutStage: {
                quarterFinals: [
                  { 
                    id: 'qf1', 
                    player1: { name: 'Robert & James Sr.', seed: 'A1' }, 
                    player2: { name: 'Paul & Mark Sr.', seed: 'B2' },
                    score: '11-8, 11-6',
                    winner: 'player1',
                    completed: true
                  },
                  { 
                    id: 'qf2', 
                    player1: { name: 'Richard & Joseph', seed: 'B1' }, 
                    player2: { name: 'Frank & Thomas', seed: 'A2' },
                    score: '11-9, 11-7',
                    winner: 'player1',
                    completed: true
                  }
                ],
                semiFinals: [
                  { 
                    id: 'sf1', 
                    player1: { name: 'Robert & James Sr.', seed: 'QF1' }, 
                    player2: { name: 'Richard & Joseph', seed: 'QF2' },
                    score: '11-9, 11-8',
                    winner: 'player1',
                    completed: true
                  }
                ],
                final: {
                  id: 'final',
                  player1: { name: 'Robert & James Sr.', seed: 'SF1' },
                  player2: { name: 'Richard & Joseph', seed: 'SF1-L' },
                  score: '11-7, 11-9',
                  winner: 'player1',
                  completed: true
                }
              }
            }
          },
          rules: [
            'USAPA tournament rules strictly enforced',
            'Seeded bracket based on ratings',
            'No timeouts allowed',
            'Professional referees for all matches'
          ],
          amenities: ['Valet Parking', 'VIP Lounge', 'Live Streaming', 'Professional Photography', 'Medical Support'],
          brackets: [
            {
              id: 'bracket-1',
              name: 'Bracket A',
              maxPlayers: 4, // 16 total capacity ÷ 4 brackets = 4 per bracket
              players: [
                { id: '1', name: 'Michael Johnson', status: 'approved', rating: '4.8', team: 'Elite Manila' },
                { id: '7', name: 'Anthony Chen', status: 'approved', rating: '4.5', team: 'BGC Pros' },
                { id: '14', name: 'Amanda Yeh', status: 'approved', rating: '4.3', team: 'Makati Masters' },
                { id: '18', name: 'Victoria Huang', status: 'approved', rating: '4.1', team: 'Ortigas Elite' }
              ]
            },
            {
              id: 'bracket-2',
              name: 'Bracket B',
              maxPlayers: 4,
              players: [
                { id: '2', name: 'Andrea Martinez', status: 'approved', rating: '4.7', team: 'QC Champions' },
                { id: '9', name: 'Marcus Tan', status: 'approved', rating: '4.4', team: 'Pasig Powerhouse' },
                { id: '13', name: 'Jonathan Wu', status: 'approved', rating: '4.2', team: 'Alabang All-Stars' },
                { id: '16', name: 'Michelle Yang', status: 'approved', rating: '4.1', team: 'Greenhills Gladiators' }
              ]
            },
            {
              id: 'bracket-3',
              name: 'Bracket C',
              maxPlayers: 4,
              players: [
                { id: '3', name: 'Jason Park', status: 'approved', rating: '4.6', team: 'Cubao Crushers' },
                { id: '8', name: 'Vanessa Liu', status: 'approved', rating: '4.4', team: 'Mandaluyong Meteors' },
                { id: '11', name: 'Patrick Lim', status: 'approved', rating: '4.2', team: 'Paranaque Phoenixes' },
                { id: '15', name: 'Brandon Choi', status: 'approved', rating: '4.1', team: 'Las Pinas Legends' }
              ]
            },
            {
              id: 'bracket-4',
              name: 'Bracket D',
              maxPlayers: 4,
              players: [
                { id: '4', name: 'Rachel Kim', status: 'approved', rating: '4.5', team: 'Valenzuela Vipers' },
                { id: '5', name: 'Steven Wong', status: 'approved', rating: '4.3', team: 'Caloocan Cobras' },
                { id: '6', name: 'Catherine Lee', status: 'approved', rating: '4.2', team: 'Malabon Mako' }
              ]
            }
          ],
          registrations: Array.from({ length: 85 }, (_, i) => ({
            id: (i + 1).toString(),
            playerName: `Player ${i + 1}`,
            registeredAt: new Date(Date.now() - (85 - i) * 12 * 60 * 60 * 1000).toISOString(),
            status: i < 20 ? 'approved' : i < 65 ? 'pending' : 'rejected',
            bracketId: i < 20 ? `bracket-${Math.floor(i / 6) + 1}` : null
          })),
          // Tournament Bracket Data - Advanced Level Championship
          tournamentBracket: {
            groupStage: {
              bracketA: [
                { id: '1', name: 'Michael Johnson', rating: '4.8', wins: 3, points: 9, position: 1 },
                { id: '7', name: 'Anthony Chen', rating: '4.5', wins: 3, points: 9, position: 2 },
                { id: '14', name: 'Amanda Yeh', rating: '4.3', wins: 2, points: 6, position: 3 },
                { id: '18', name: 'Victoria Huang', rating: '4.1', wins: 0, points: 0, position: 4 }
              ],
              bracketB: [
                { id: '2', name: 'Andrea Martinez', rating: '4.7', wins: 3, points: 9, position: 1 },
                { id: '9', name: 'Marcus Tan', rating: '4.4', wins: 2, points: 6, position: 2 },
                { id: '13', name: 'Jonathan Wu', rating: '4.2', wins: 2, points: 6, position: 3 },
                { id: '16', name: 'Michelle Yang', rating: '4.1', wins: 0, points: 0, position: 4 }
              ],
              bracketC: [
                { id: '3', name: 'Jason Park', rating: '4.6', wins: 3, points: 9, position: 1 },
                { id: '8', name: 'Vanessa Liu', rating: '4.4', wins: 2, points: 6, position: 2 },
                { id: '11', name: 'Patrick Lim', rating: '4.2', wins: 1, points: 3, position: 3 },
                { id: '15', name: 'Brandon Choi', rating: '4.1', wins: 0, points: 0, position: 4 }
              ],
              bracketD: [
                { id: '4', name: 'Rachel Kim', rating: '4.5', wins: 2, points: 6, position: 1 },
                { id: '5', name: 'Steven Wong', rating: '4.3', wins: 2, points: 6, position: 2 },
                { id: '6', name: 'Catherine Lee', rating: '4.2', wins: 1, points: 3, position: 3 }
              ]
            },
            knockoutStage: {
              quarterFinals: [
                { 
                  id: 'qf1', 
                  player1: { name: 'Michael Johnson', seed: 'A1' }, 
                  player2: { name: 'Vanessa Liu', seed: 'C2' },
                  score: '11-7, 11-9',
                  winner: 'player1',
                  completed: true
                },
                { 
                  id: 'qf2', 
                  player1: { name: 'Andrea Martinez', seed: 'B1' }, 
                  player2: { name: 'Steven Wong', seed: 'D2' },
                  score: '11-5, 11-8',
                  winner: 'player1',
                  completed: true
                },
                { 
                  id: 'qf3', 
                  player1: { name: 'Jason Park', seed: 'C1' }, 
                  player2: { name: 'Anthony Chen', seed: 'A2' },
                  score: '11-9, 9-11, 11-6',
                  winner: 'player1',
                  completed: true
                },
                { 
                  id: 'qf4', 
                  player1: { name: 'Rachel Kim', seed: 'D1' }, 
                  player2: { name: 'Marcus Tan', seed: 'B2' },
                  score: '11-8, 11-7',
                  winner: 'player1',
                  completed: true
                }
              ],
              semiFinals: [
                { 
                  id: 'sf1', 
                  player1: { name: 'Michael Johnson', seed: 'QF1' }, 
                  player2: { name: 'Andrea Martinez', seed: 'QF2' },
                  score: '11-9, 11-8',
                  winner: 'player1',
                  completed: true
                },
                { 
                  id: 'sf2', 
                  player1: { name: 'Jason Park', seed: 'QF3' }, 
                  player2: { name: 'Rachel Kim', seed: 'QF4' },
                  score: '11-6, 11-10',
                  winner: 'player1',
                  completed: true
                }
              ],
              final: {
                id: 'final',
                player1: { name: 'Michael Johnson', seed: 'SF1' },
                player2: { name: 'Jason Park', seed: 'SF2' },
                score: '11-8, 11-9',
                winner: 'player1',
                completed: true
              },
              thirdPlace: {
                id: 'thirdPlace',
                player1: { name: 'Andrea Martinez', seed: 'SF1-L' },
                player2: { name: 'Rachel Kim', seed: 'SF2-L' },
                score: '11-5, 11-9',
                winner: 'player1',
                completed: true
              }
            }
          }
        },
        {
          id: '4',
          name: 'Beginner Friendly Tournament',
          date: '2025-06-05T09:00:00Z',
          endDate: '2025-06-05T16:00:00Z', // Single day
          location: 'Community Recreation Center',
          address: '789 Beginner Lane, Pasig City, Metro Manila',
          latitude: 14.5696,
          longitude: 121.0874,
          entryFee: 300,
          prizePool: 5000,
          maxParticipants: 16,
          currentParticipants: 12,
          registrationDeadline: '2025-05-25T23:59:59Z',
          bannerUrl: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          tier: 1,
          tournamentType: 'beginner',
          description: 'Perfect for newcomers to pickleball! This beginner-friendly tournament welcomes players who are just learning the game. Great atmosphere for first-time competitors.',
          contactEmail: 'beginner@philippinepickleball.com',
          contactPhone: '+63 912 345 6789',
          divisions: ["Mixed Doubles", "Men's Doubles", "Women's Doubles"],
          // Multiple Tournament Categories with Brackets
          tournamentCategories: {
            'mixed-doubles-beginner-18': {
              id: 'mixed-doubles-beginner-18',
              name: "Mixed Doubles Beginner 18+",
              ageGroup: '18+',
              skillLevel: 'Beginner',
              participants: 8,
              maxParticipants: 8,
              prizePool: 3000,
              description: 'Fun and welcoming mixed doubles for beginners',
              groupStage: {
                bracketA: [
                  { name: 'James Wilson & Lisa Chen', roundWins: 2, roundLosses: 1, winPoints: 63, lossPoints: 58 },
                  { name: 'Mark Torres & Sarah Kim', roundWins: 2, roundLosses: 1, winPoints: 61, lossPoints: 59 },
                  { name: 'Alex Rivera & Emma Davis', roundWins: 1, roundLosses: 2, winPoints: 58, lossPoints: 62 },
                  { name: 'Chris Lee & Nina Lopez', roundWins: 1, roundLosses: 2, winPoints: 56, lossPoints: 64 }
                ],
                bracketB: [
                  { name: 'David Park & Amy Wong', roundWins: 3, roundLosses: 0, winPoints: 66, lossPoints: 44 },
                  { name: 'Tom Garcia & Jen Liu', roundWins: 2, roundLosses: 1, winPoints: 58, lossPoints: 56 },
                  { name: 'Ryan Ng & Kate Miller', roundWins: 1, roundLosses: 2, winPoints: 52, lossPoints: 60 },
                  { name: 'Sam Cruz & Mia Taylor', roundWins: 0, roundLosses: 3, winPoints: 48, lossPoints: 66 }
                ]
              },
              singleElimination: {
                semifinals: {
                  sf1: {
                    id: 'sf1',
                    player1: { name: 'James Wilson & Lisa Chen', seed: 'A1' },
                    player2: { name: 'Tom Garcia & Jen Liu', seed: 'B2' },
                    score: '11-8, 11-6',
                    winner: 'player1',
                    completed: true
                  },
                  sf2: {
                    id: 'sf2',
                    player1: { name: 'David Park & Amy Wong', seed: 'B1' },
                    player2: { name: 'Mark Torres & Sarah Kim', seed: 'A2' },
                    score: '11-9, 8-11, 11-7',
                    winner: 'player1',
                    completed: true
                  }
                },
                finals: {
                  id: 'finals',
                  player1: { name: 'James Wilson & Lisa Chen', seed: 'SF1-W' },
                  player2: { name: 'David Park & Amy Wong', seed: 'SF2-W' },
                  score: '11-13, 11-9, 11-8',
                  winner: 'player2',
                  completed: true
                },
                thirdPlace: {
                  id: 'thirdPlace',
                  player1: { name: 'Tom Garcia & Jen Liu', seed: 'SF1-L' },
                  player2: { name: 'Mark Torres & Sarah Kim', seed: 'SF2-L' },
                  score: '11-6, 11-4',
                  winner: 'player1',
                  completed: true
                }
              }
            },
            'mens-doubles-beginner-18': {
              id: 'mens-doubles-beginner-18',
              name: "Men's Doubles Beginner 18+",
              ageGroup: '18+',
              skillLevel: 'Beginner',
              participants: 8,
              maxParticipants: 8,
              prizePool: 2000,
              description: 'Entry-level men\'s doubles perfect for new players',
              groupStage: {
                bracketA: [
                  { name: 'John Smith & Mike Johnson', roundWins: 2, roundLosses: 1, winPoints: 59, lossPoints: 55 },
                  { name: 'Steve Davis & Paul Wilson', roundWins: 2, roundLosses: 1, winPoints: 57, lossPoints: 58 },
                  { name: 'Rich Martinez & Tony Chen', roundWins: 1, roundLosses: 2, winPoints: 54, lossPoints: 60 },
                  { name: 'Ben Lee & Dan Garcia', roundWins: 1, roundLosses: 2, winPoints: 53, lossPoints: 61 }
                ],
                bracketB: [
                  { name: 'Carlos Torres & Jim Kim', roundWins: 3, roundLosses: 0, winPoints: 66, lossPoints: 48 },
                  { name: 'Rob Taylor & Ed Liu', roundWins: 2, roundLosses: 1, winPoints: 58, lossPoints: 54 },
                  { name: 'Matt Cruz & Joe Park', roundWins: 1, roundLosses: 2, winPoints: 52, lossPoints: 58 },
                  { name: 'Sam Wong & Alex Ng', roundWins: 0, roundLosses: 3, winPoints: 46, lossPoints: 66 }
                ]
              },
              singleElimination: {
                semifinals: {
                  sf1: {
                    id: 'sf1',
                    player1: { name: 'John Smith & Mike Johnson', seed: 'A1' },
                    player2: { name: 'Rob Taylor & Ed Liu', seed: 'B2' },
                    score: '11-7, 11-9',
                    winner: 'player1',
                    completed: true
                  },
                  sf2: {
                    id: 'sf2',
                    player1: { name: 'Carlos Torres & Jim Kim', seed: 'B1' },
                    player2: { name: 'Steve Davis & Paul Wilson', seed: 'A2' },
                    score: '11-6, 11-8',
                    winner: 'player1',
                    completed: true
                  }
                },
                finals: {
                  id: 'finals',
                  player1: { name: 'John Smith & Mike Johnson', seed: 'SF1-W' },
                  player2: { name: 'Carlos Torres & Jim Kim', seed: 'SF2-W' },
                  score: '9-11, 11-7, 11-9',
                  winner: 'player2',
                  completed: true
                },
                thirdPlace: {
                  id: 'thirdPlace',
                  player1: { name: 'Rob Taylor & Ed Liu', seed: 'SF1-L' },
                  player2: { name: 'Steve Davis & Paul Wilson', seed: 'SF2-L' },
                  score: '11-8, 11-6',
                  winner: 'player1',
                  completed: true
                }
              }
            }
          },
          rules: [
           
            'Professional referees for all matches'
          ],
          amenities: []
        },
       
        {
          id: "team-championship-2024",
          name: "Team Championship 2024",
          date: "2024-06-20T09:00:00Z",
          endDate: "2024-06-21T18:00:00Z",
          location: "Metro Sports Arena",
          address: "789 Team Sports Blvd, Metro City, CA 90210",
          latitude: 34.0522,
          longitude: -118.2437,
          status: "upcoming",
          entryFee: 3000,
          prizePool: 75000,
          maxParticipants: 48,
          currentParticipants: 18,
          tournamentType: "open",
          tier: 2,
          description: "The ultimate team pickleball championship featuring 4-player teams competing in multiple formats. Teams will compete in singles, doubles, and mixed doubles matches with cumulative scoring to determine the champion team.",
          bannerUrl: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
          registrationDeadline: "2024-06-15T23:59:59Z",
          contactEmail: "teams@metropickleball.com",
          contactPhone: "+1 (555) 123-4567",
          organizer: "Metro Pickleball Association",
          organizerProfile: {
            name: "Metro Pickleball Association",
            email: "teams@metropickleball.com",
            phone: "+1 (555) 123-4567",
            bio: "Leading organizer of team-based pickleball tournaments in the metro area."
          },
          rules: [
                       "Teams must arrive 60 minutes before first scheduled match"
          ],
          amenities: [
           
          ],
          tournamentCategories: {
            "team-open": {
              id: "team-open",
              name: "Team Open Division",
              skillLevel: "Open",
              tier: 2,
              prizePool: 45000,
              participants: 12,
              maxParticipants: 16,
              ageGroup: "18+",
              registrations: [
                { id: "team1", name: "Thunder Bolts", members: ["Mike Johnson", "Sarah Davis", "Alex Chen", "Maria Rodriguez"], status: "approved", rating: "4.2", seed: 1 },
                { id: "team2", name: "Net Ninjas", members: ["David Kim", "Lisa Wong", "Carlos Martinez", "Emma Thompson"], status: "approved", rating: "4.0", seed: 2 },
                { id: "team3", name: "Court Crushers", members: ["Ryan Lee", "Jessica Park", "Antonio Garcia", "Nicole Brown"], status: "approved", rating: "3.9", seed: 3 }
              ],
              brackets: {
                "round-1": [
                  { id: "teammatch1", team1: "Thunder Bolts", team2: "Net Ninjas", score: "TBD", winner: null, court: 1, time: "9:00 AM" },
                  { id: "teammatch2", team1: "Court Crushers", team2: "TBD", score: "TBD", winner: null, court: 2, time: "9:00 AM" }
                ],
                "semifinals": [
                  { id: "teammatch3", team1: "TBD", team2: "TBD", score: "TBD", winner: null, court: 1, time: "2:00 PM" }
                ],
                "finals": [
                  { id: "teammatch4", team1: "TBD", team2: "TBD", score: "TBD", winner: null, court: 1, time: "5:00 PM" }
                ]
              }
            },
            "team-intermediate": {
              id: "team-intermediate",
              name: "Team Intermediate Division",
              skillLevel: "Intermediate",
              prizePool: 30000,
              participants: 6,
              maxParticipants: 12,
              ageGroup: "18+",
              registrations: [
                { id: "team4", name: "Paddle Power", members: ["John Smith", "Kate Johnson", "Mark Davis", "Nina Patel"], status: "approved", rating: "3.8", seed: 1 },
                { id: "team5", name: "Spin Masters", members: ["Carlos Ruiz", "Jennifer Lee", "Ryan Clark", "Sophia Wang"], status: "approved", rating: "3.6", seed: 2 }
              ],
              brackets: {
                "round-1": [
                  { id: "intteammatch1", team1: "Paddle Power", team2: "Spin Masters", score: "TBD", winner: null, court: 3, time: "10:00 AM" }
                ],
                "finals": [
                  { id: "intteammatch2", team1: "TBD", team2: "TBD", score: "TBD", winner: null, court: 3, time: "3:00 PM" }
                ]
              }
            }
          },
          events: [
            {
              id: "teamevent1",
              title: "Team Registration & Check-in",
              description: "All team members must check in together. Bring team roster and payment confirmation.",
              date: "2024-06-20T08:00:00Z",
              duration: "60 minutes",
              location: "Main Lobby"
            },
            
          ]
        }
      ];

      // Add status to each tournament based on dates and participant count
      const tournamentsWithStatus = tournamentData.map(tournament => ({
        ...tournament,
        status: getTournamentStatus(
          tournament.date, 
          tournament.registrationDeadline,
          tournament.currentParticipants,
          tournament.maxParticipants
        )
      }));

      setTournaments(tournamentsWithStatus);
    } catch (error) {
      console.error('Failed to fetch tournaments:', error);
      setError('Failed to load tournaments. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

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

  // Auto-populate primary player information when user is authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      // Create enhanced user data with pickleball-specific information
      const enhancedUser = {
        pplId: 'PPL999', // Dummy PPLID for current user
        name: user.name || `${user.firstName} ${user.lastName}` || '',
        gender: 'male', // Default - in real app this would come from user profile
        age: user.age || 25, // Use user's actual age, fallback to 25
        duprRatings: {
          singles: '4.2',
          doubles: '4.0'
        }
      };

      setRegistrationForm(prev => ({
        ...prev,
        primaryPlayer: enhancedUser
      }));
    } else {
      // Reset to empty when not authenticated
      setRegistrationForm(prev => ({
        ...prev,
        primaryPlayer: {
          pplId: '',
          name: '',
          gender: 'male',
          age: '',
          duprRatings: {
            singles: '',
            doubles: ''
          }
        }
      }));
    }
  }, [isAuthenticated, user]);

  // Handle tournament card click to show detailed view
  const handleTournamentClick = (tournament) => {
    setSelectedTournament(tournament);
    setShowDetailedView(true);
    // Optionally expand first category by default
    if (tournament.tournamentCategories) {
      const firstCategory = Object.keys(tournament.tournamentCategories)[0];
      if (firstCategory) {
        setExpandedCategories({ [firstCategory]: true });
      }
    }
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
    // Wait for auth loading to complete
    if (authLoading) {
      return;
    }
    
    // Check auth state
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    // Find the tournament - check both tournaments array and selectedTournament
    let tournament = tournaments.find(t => t.id === tournamentId);
    
    // If not found in tournaments array, check if it's the currently selected tournament
    if (!tournament && selectedTournament && selectedTournament.id === tournamentId) {
      tournament = selectedTournament;
    }
    
    if (tournament) {
      setRegistrationTournament(tournament);
      setShowRegistrationModal(true);
      // Reset form but preserve primary player information if user is authenticated
      setRegistrationForm(prev => {
        const primaryPlayerInfo = isAuthenticated && user ? {
          pplId: 'PPL999',
          name: user.name || `${user.firstName} ${user.lastName}` || '',
          gender: user.gender || 'male', // Use user's actual gender, fallback to 'male'
          age: user.age || 25, // Use user's actual age, fallback to 25
          duprRatings: {
            singles: '4.2',
            doubles: '4.0'
          }
        } : {
          pplId: '',
          name: '',
          gender: 'male', // Default for non-authenticated users
          age: '', // Empty for non-authenticated users
          duprRatings: {
            singles: '',
            doubles: ''
          }
        };

        // Auto-select the first available category for the user's gender
        const userGender = primaryPlayerInfo.gender;
        
        // Filter categories based on user gender
        const allCategories = Object.values(tournament?.tournamentCategories || {});
        const availableCategories = allCategories
          .filter(category => {
            return isCategoryAllowedForGender(category.name, userGender);
          });
            
        const autoSelectedCategory = '';

        return {
          category: autoSelectedCategory,
          primaryPlayer: primaryPlayerInfo,
          partner: {
            pplId: '',
            name: '',
            gender: ''
          },
          teamMembers: [
            { pplId: '', name: '', gender: 'male', required: true, label: 'Male Player 2' },
            { pplId: '', name: '', gender: 'female', required: true, label: 'Female Player 1' },
            { pplId: '', name: '', gender: 'female', required: true, label: 'Female Player 2' },
            { pplId: '', name: '', gender: 'male', required: false, label: 'Optional Player 1' },
            { pplId: '', name: '', gender: 'female', required: false, label: 'Optional Player 2' }
          ],
          name: '',
          email: '',
          contactNumber: '',
          proofOfPayment: null
        };
      });
    }
  };

  /**
   * Handle viewing tournament registration form (read-only preview for profile)
   * @param {string} tournamentId - Tournament identifier
   */
  const handleViewForm = (tournamentId) => {
    // Find the tournament - check both tournaments array and selectedTournament
    let tournament = tournaments.find(t => t.id === tournamentId);
    
    // If not found in tournaments array, check if it's the currently selected tournament
    if (!tournament && selectedTournament && selectedTournament.id === tournamentId) {
      tournament = selectedTournament;
    }
    
    if (tournament) {
      setViewFormTournament(tournament);
      setShowViewFormModal(true);
    }
  };

  // Close view form modal
  const closeViewFormModal = () => {
    setShowViewFormModal(false);
    setViewFormTournament(null);
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
    if (playerSelectionType === 'partner') {
      setRegistrationForm(prev => ({
        ...prev,
        partner: {
          pplId: player.pplId,
          name: player.name,
          gender: player.gender,
          duprRatings: player.duprRatings,
          age: player.age
        }
      }));
    } else if (playerSelectionType.startsWith('team-')) {
      const index = parseInt(playerSelectionType.split('-')[1]);
      setRegistrationForm(prev => ({
        ...prev,
        teamMembers: prev.teamMembers.map((member, i) => 
          i === index ? {
            ...member,
            pplId: player.pplId,
            name: player.name,
            gender: player.gender,
            duprRatings: player.duprRatings,
            age: player.age
          } : member
        )
      }));
    }
    setShowPlayerSelectionModal(false);
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <BackButton onClick={handleCloseDetailedView}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {location.state?.fromProfile ? 'Back to Profile' : 'Back to Tournaments'}
            </BackButton>
            
            {/* Show edit button if in host view or if user is authenticated and is the tournament organizer */}
            {(isHostView || (isAuthenticated && user?.name === selectedTournament.organizer)) && (
              <EditTournamentButton onClick={() => navigate('/host-tournament', { state: { editTournament: selectedTournament } })}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Edit Tournament
              </EditTournamentButton>
            )}
          </div>

          <TournamentDetailHeader>
            <TournamentDetailBanner>
              {selectedTournament.bannerUrl && (
                <img src={selectedTournament.bannerUrl} alt={selectedTournament.name} />
              )}
            </TournamentDetailBanner>
            <TournamentDetailStatusBadge $status={selectedTournament.status}>
              {selectedTournament.status}
            </TournamentDetailStatusBadge>
          </TournamentDetailHeader>

          <TournamentDetailBody>
            <TournamentDetailLeft>
                {/* 
                  Database Schema Reference:
                  Tournament {
                    id: string,
                    name: string,
                    description: string,
                    tournamentCategories: {
                      [categoryId: string]: {
                        id: string,
                        name: string,
                        skillLevel: "Beginner" | "Intermediate" | "Advanced" | "Open",
                        tier?: 1 | 2 | 3,  // Required when skillLevel is "Open"
                        prizePool: number,
                        participants: number,
                        maxParticipants: number,
                        ageGroup: string,
                        description: string,
                        groupStage?: {...},
                        knockoutStage?: {...}
                      }
                    }
                  }
                */}
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
                            <DetailItemValue className="price">₱{selectedTournament.entryFee.toLocaleString()}</DetailItemValue>
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
                                const start = new Date(selectedTournament.date);
                                const end = new Date(selectedTournament.endDate);
                                
                                if (start.toDateString() === end.toDateString()) {
                                  return start.toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                  });
                                } else {
                                  return `${start.toLocaleDateString('en-US', { 
                                    month: 'long', 
                                    day: 'numeric' 
                                  })} - ${end.toLocaleDateString('en-US', { 
                                    month: 'long', 
                                    day: 'numeric', 
                                    year: 'numeric' 
                                  })}`;
                                }
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
                              {selectedTournament.tournamentCategories ? (
                                (() => {
                                  // Get unique skill levels
                                  const skillLevels = new Set();
                                  Object.values(selectedTournament.tournamentCategories).forEach(category => {
                                    if (category.skillLevel === 'Open') {
                                      skillLevels.add(`Open - Tier ${category.tier || 1}`);
                                    } else if (['Beginner', 'Intermediate', 'Advanced'].includes(category.skillLevel)) {
                                      skillLevels.add(category.skillLevel);
                                    }
                                  });
                                  
                                  return Array.from(skillLevels).sort().join(', ');
                                })()
                              ) : (
                                // Fallback for old data structure
                                `${selectedTournament.tournamentType.charAt(0).toUpperCase() + selectedTournament.tournamentType.slice(1)}${selectedTournament.tournamentType === 'open' ? ` - Tier ${selectedTournament.tier}` : ''}`
                              )}
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
                                      let division = category.name;
                                      
                                      // Remove age categories first (including at the end of strings)
                                      const ageCategories = ['18+', '35+', '50+'];
                                      ageCategories.forEach(age => {
                                        // Remove age category anywhere in the string, including at the end
                                        division = division.replace(new RegExp(`\\s*${age.replace('+', '\\+')}\\s*`, 'gi'), ' ');
                                        // Also remove if it's at the very end
                                        division = division.replace(new RegExp(`\\s*${age.replace('+', '\\+')}$`, 'gi'), '');
                                      });
                                      
                                      // Remove skill level words from the name
                                      const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Open'];
                                      skillLevels.forEach(skill => {
                                        division = division.replace(new RegExp(`\\s*${skill}\\s*`, 'gi'), ' ');
                                      });
                                      
                                      // Clean up extra spaces and get the division
                                      division = division.replace(/\s+/g, ' ').trim();
                                      
                                      let skillLevel = category.skillLevel || '';
                                      
                                      // For Open categories, include tier information
                                      if (skillLevel === 'Open' && category.tier) {
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
                                    {category.participants || 0}/{category.maxParticipants} participants
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
                                color: category.participants >= category.maxParticipants ? '#ef4444' : '#29ba9b',
                                background: category.participants >= category.maxParticipants ? '#fef2f2' : '#f0fdf4',
                                padding: '4px 8px',
                                borderRadius: '6px',
                                border: `1px solid ${category.participants >= category.maxParticipants ? '#fecaca' : '#bbf7d0'}`
                              }}>
                                {category.participants >= category.maxParticipants ? 'Full' : 'Open'}
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
                                  {selectedTournament.currentParticipants || 0}/{selectedTournament.maxParticipants} participants
                                </div>
                              </div>
                            </div>
                            <div style={{
                              fontSize: '0.875rem',
                              fontWeight: '500',
                              color: selectedTournament.currentParticipants >= selectedTournament.maxParticipants ? '#ef4444' : '#29ba9b',
                              background: selectedTournament.currentParticipants >= selectedTournament.maxParticipants ? '#fef2f2' : '#f0fdf4',
                              padding: '4px 8px',
                              borderRadius: '6px',
                              border: `1px solid ${selectedTournament.currentParticipants >= selectedTournament.maxParticipants ? '#fecaca' : '#bbf7d0'}`
                            }}>
                              {selectedTournament.currentParticipants >= selectedTournament.maxParticipants ? 'Full' : 'Open'}
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

                          <LocationActions>
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
                          </LocationActions>
                        </LocationHeader>
                        
                        <LocationInfo>
                          <div className="venue-name">{selectedTournament.location}</div>
                          <div className="venue-address">{selectedTournament.address}</div>
                          <div className="coordinates">
                            Coordinates: {selectedTournament.latitude}, {selectedTournament.longitude}
                          </div>
                        </LocationInfo>
                        
                        <MapContainer 
                          onClick={() => window.open(`https://maps.google.com/?q=${selectedTournament.latitude},${selectedTournament.longitude}`, '_blank')}
                        >
                          <div className="map-text">
                            <div className="main-text">Interactive Map View</div>
                            <div className="sub-text">Click to open in Google Maps</div>
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
                      }}>
                        {selectedTournament.eventsText || 
                         (selectedTournament.events && selectedTournament.events.length > 0 
                           ? selectedTournament.events.map(event => 
                               `${event.title}\n${event.description}${event.location ? `\nLocation: ${event.location}` : ''}${event.duration ? `\nDuration: ${event.duration}` : ''}`
                             ).join('\n\n')
                           : 'Day 1 - 9:00 AM\nRegistration & Check-in\nAll participants must check in and complete registration process. Bring valid ID and proof of payment.\n\nDay 1 - 10:00 AM\nTournament Briefing\nMandatory rules briefing and player introductions. Tournament format explanation.\n\nDay 1 - 10:30 AM\nOpening Ceremony\nWelcome address, national anthem, and ceremonial first serve.\n\nDay 1 - 11:00 AM\nRound 1 Matches\nFirst round matches for all divisions begin. Players should be ready 15 minutes early.')}
                      </div>
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
                        {Object.values(selectedTournament.tournamentCategories).map((category) => (
                          <CategoryCard key={category.id}>
                            <CategoryHeader 
                              $expanded={expandedCategories[category.id]}
                              onClick={() => toggleCategoryExpansion(category.id)}
                            >
                              <CategoryHeaderContent>
                                <CategoryHeaderInfo>
                                  <div className="category-title" style={{
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    color: '#1e293b',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                  }}>
                                    <span>{(() => {
                                      // Extract division from name, removing skill level and age
                                      let division = category.name;
                                      
                                      // Remove age categories first (including at the end of strings)
                                      const ageCategories = ['18+', '35+', '50+'];
                                      ageCategories.forEach(age => {
                                        // Remove age category anywhere in the string, including at the end
                                        division = division.replace(new RegExp(`\\s*${age.replace('+', '\\+')}\\s*`, 'gi'), ' ');
                                        // Also remove if it's at the very end
                                        division = division.replace(new RegExp(`\\s*${age.replace('+', '\\+')}$`, 'gi'), '');
                                      });
                                      
                                      // Remove skill level words from the name
                                      const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Open'];
                                      skillLevels.forEach(skill => {
                                        division = division.replace(new RegExp(`\\s*${skill}\\s*`, 'gi'), ' ');
                                      });
                                      
                                      // Clean up extra spaces and get the division
                                      return division.replace(/\s+/g, ' ').trim();
                                    })()}</span>
                                    <span style={{ color: '#64748b', fontSize: '1rem' }}>|</span>
                                    <span style={{ color: '#059669' }}>
                                      {category.skillLevel === 'Open' && category.tier 
                                        ? `Open Tier ${category.tier}` 
                                        : category.skillLevel}
                                    </span>
                                    <span style={{ color: '#64748b', fontSize: '1rem' }}>|</span>
                                    <span>{category.ageGroup}</span>
                                  </div>
                                </CategoryHeaderInfo>
                                <CategoryExpandIcon $expanded={expandedCategories[category.id]}>
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </CategoryExpandIcon>
                              </CategoryHeaderContent>
                            </CategoryHeader>
                            
                            {expandedCategories[category.id] && (
                              <CategoryBracketContent $expanded={expandedCategories[category.id]}>
                                {/* Group Stage Section - Always show if groupStage exists */}
                                {category.groupStage && (
                                  <GroupStageSection>
                                    <div className="section-title">Group Stage Results</div>
                                    <div className="groups-grid">
                                      {Object.entries(category.groupStage).map(([bracketKey, players]) => (
                                        <GroupCard key={bracketKey}>
                                          <GroupHeader>Bracket {bracketKey.slice(-1).toUpperCase()}</GroupHeader>
                                          <StandingsTable>
                                            <div className="standings-header">
                                              <div>Player</div>
                                              <div>R.Wins</div>
                                              <div>R.Loss</div>
                                              <div>W.Pts</div>
                                              <div>L.Pts</div>
                                            </div>
                                            {players.map((player) => (
                                              <StandingsRow key={player.id} $qualified={player.position <= 2}>
                                                <div className="player-info">
                                                  <div className="position">{player.position}</div>
                                                  <div className="player-name">{player.name}</div>
                                                </div>
                                                <div className="round-wins">{player.roundWins || player.wins || 0}</div>
                                                <div className="round-losses">{player.roundLosses || 0}</div>
                                                <div className="win-points">{player.winPoints || 0}</div>
                                                <div className="loss-points">{player.lossPoints || 0}</div>
                                              </StandingsRow>
                                            ))}
                                          </StandingsTable>
                                        </GroupCard>
                                      ))}
                                    </div>
                                  </GroupStageSection>
                                )}

                                {/* Knockout Stage Bracket - Show if exists */}
                                {category.knockoutStage ? (
                                  <TournamentBracket>
                                    <BracketContainer style={{ marginTop: '-80px' }}>
                                      {/* Quarter Finals */}
                                      <BracketColumn>
                                        <BracketRound>
                                          <h4>Quarter-Finals</h4>
                                          <div className="round-subtitle">Top 8 Players</div>
                                        </BracketRound>
                                        {category.knockoutStage.quarterFinals.map((match) => (
                                          <MatchCard key={match.id} $isWinner={match.completed}>
                                            <div className="match-info">
                                              <div className="player-name">
                                                <span className="player-seed">{match.player1.seed}</span>
                                                {match.player1.name}
                                              </div>
                                              {match.completed && <div className="match-score">{match.winner === 'player1' ? '✓' : ''}</div>}
                                            </div>
                                            <div className="match-info">
                                              <div className="player-name">
                                                <span className="player-seed">{match.player2.seed}</span>
                                                {match.player2.name}
                                              </div>
                                              {match.completed && <div className="match-score">{match.winner === 'player2' ? '✓' : ''}</div>}
                                            </div>
                                            {match.completed && <div className="match-result">{match.score}</div>}
                                          </MatchCard>
                                        ))}
                                      </BracketColumn>

                                      {/* Semi Finals */}
                                      <BracketColumn>
                                        <BracketRound>
                                          <h4>Semi-Finals</h4>
                                          <div className="round-subtitle">Final 4</div>
                                        </BracketRound>
                                        {category.knockoutStage.semiFinals.map((match, index) => (
                                          <MatchCard 
                                            key={match.id} 
                                            $isWinner={match.completed} 
                                            style={{ 
                                              marginTop: index === 0 ? '0px' : '40px',
                                              '@media (min-width: 768px)': {
                                                marginTop: index === 0 ? '50px' : '30px'
                                              }
                                            }}
                                          >
                                            <div className="match-info">
                                              <div className="player-name">
                                                <span className="player-seed">W{match.player1.seed}</span>
                                                {match.player1.name}
                                              </div>
                                              {match.completed && <div className="match-score">{match.winner === 'player1' ? '✓' : ''}</div>}
                                            </div>
                                            <div className="match-info">
                                              <div className="player-name">
                                                <span className="player-seed">W{match.player2.seed}</span>
                                                {match.player2.name}
                                              </div>
                                              {match.completed && <div className="match-score">{match.winner === 'player2' ? '✓' : ''}</div>}
                                            </div>
                                            {match.completed && <div className="match-result">{match.score}</div>}
                                          </MatchCard>
                                        ))}
                                      </BracketColumn>

                                      {/* Championship */}
                                      <ChampionshipSection style={{ marginTop: '200px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '-10px' }}>
                                          <div className="championship-trophy">🏆</div>
                                          <BracketRound style={{ margin: 0 }}>
                                            <h4>Championship</h4>
                                            <div className="round-subtitle">Final Match</div>
                                          </BracketRound>
                                        </div>
                                        {category.knockoutStage.final && (
                                          <MatchCard 
                                            className="championship-match" 
                                            $isWinner={category.knockoutStage.final.completed}
                                          >
                                            <div className="match-info">
                                              <div className="player-name">
                                                <span className="player-seed">W{category.knockoutStage.final.player1.seed}</span>
                                                {category.knockoutStage.final.player1.name}
                                              </div>
                                              {category.knockoutStage.final.completed && (
                                                <div className="match-score">
                                                  {category.knockoutStage.final.winner === 'player1' ? '🥇' : '🥈'}
                                                </div>
                                              )}
                                            </div>
                                            <div className="match-info">
                                              <div className="player-name">
                                                <span className="player-seed">W{category.knockoutStage.final.player2.seed}</span>
                                                {category.knockoutStage.final.player2.name}
                                              </div>
                                              {category.knockoutStage.final.completed && (
                                                <div className="match-score">
                                                  {category.knockoutStage.final.winner === 'player2' ? '🥇' : '🥈'}
                                                </div>
                                              )}
                                            </div>
                                            {category.knockoutStage.final.completed && (
                                              <div className="match-result" style={{ fontWeight: 'bold', color: '#16a34a' }}>
                                                {category.knockoutStage.final.score}
                                              </div>
                                            )}
                                          </MatchCard>
                                        )}

                                        {/* Third Place Match */}
                                        {category.knockoutStage.thirdPlace && (
                                          <div style={{ 
                                            marginTop: '100px', 
                                            marginLeft: 'auto',
                                            marginRight: '0',
                                            width: '100%',
                                            maxWidth: '300px'
                                          }}>
                                            <BracketRound>
                                              <h4>Third Place</h4>
                                              <div className="round-subtitle">Bronze Medal Match</div>
                                            </BracketRound>
                                            <MatchCard 
                                              className="championship-match" 
                                              $isWinner={category.knockoutStage.thirdPlace.completed}
                                              style={{ width: '100%' }}
                                            >
                                              <div className="match-info">
                                                <div className="player-name">
                                                  <span className="player-seed">L{category.knockoutStage.thirdPlace.player1.seed}</span>
                                                  {category.knockoutStage.thirdPlace.player1.name}
                                                </div>
                                                {category.knockoutStage.thirdPlace.completed && (
                                                  <div className="match-score">
                                                    {category.knockoutStage.thirdPlace.winner === 'player1' ? '🥉' : ''}
                                                  </div>
                                                )}
                                              </div>
                                              <div className="match-info">
                                                <div className="player-name">
                                                  <span className="player-seed">L{category.knockoutStage.thirdPlace.player2.seed}</span>
                                                  {category.knockoutStage.thirdPlace.player2.name}
                                                </div>
                                                {category.knockoutStage.thirdPlace.completed && (
                                                  <div className="match-score">
                                                    {category.knockoutStage.thirdPlace.winner === 'player2' ? '🥉' : ''}
                                                  </div>
                                                )}
                                              </div>
                                              {category.knockoutStage.thirdPlace.completed && (
                                                <div className="match-result" style={{ fontWeight: 'bold', color: '#16a34a' }}>
                                                  {category.knockoutStage.thirdPlace.score}
                                                </div>
                                              )}
                                            </MatchCard>
                                          </div>
                                        )}
                                      </ChampionshipSection>
                                    </BracketContainer>
                                  </TournamentBracket>
                                ) : (
                                  // Show placeholder if no knockout stage yet
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
                                    <div style={{

                                    }}>


                                    </div>
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
                        {selectedTournament.tournamentCategories && Object.values(selectedTournament.tournamentCategories).map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
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
                      selectedTournament.registrations && selectedTournament.registrations.filter(reg => reg.status === 'approved').filter(reg => selectedPlayerCategory === 'all' || reg.categoryId === selectedPlayerCategory).length > 0 ? (
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
                              const approvedPlayers = selectedTournament.registrations
                                .filter(reg => reg.status === 'approved')
                                .filter(reg => selectedPlayerCategory === 'all' || reg.categoryId === selectedPlayerCategory);
                              const filteredPlayers = approvedPlayers.filter(player => {
                                const cleanName = player.playerName.replace(/["'].*?["']/g, '').trim();
                                return cleanName.toLowerCase().includes(playersSearchTerm.toLowerCase());
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
                            .filter(reg => reg.status === 'approved')
                            .filter(reg => selectedPlayerCategory === 'all' || reg.categoryId === selectedPlayerCategory)
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
                                border: '1px solid #e2e8f0',
                                borderRadius: '12px',
                                padding: '16px',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                              }}>
                                <div style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '12px',
                                  marginBottom: '12px'
                                }}>
                                  <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: '#29ba9b',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: '600',
                                    fontSize: '14px'
                                  }}>
                                    {player.playerName.replace(/["'].*?["']/g, '').trim().split(' ').map(n => n[0]).join('').toUpperCase()}
                                  </div>
                                  <div>
                                    <div style={{
                                      fontWeight: '600',
                                      color: '#334155',
                                      fontSize: '1rem'
                                    }}>
                                      {player.playerName.replace(/["'].*?["']/g, '').trim()}
                                    </div>
                                    {selectedPlayerCategory === 'all' && (
                                      <div style={{
                                        fontSize: '0.8rem',
                                        color: '#29ba9b',
                                        fontWeight: '500',
                                        marginTop: '2px'
                                      }}>
                                        {(() => {
                                          const category = selectedTournament.tournamentCategories && 
                                            Object.values(selectedTournament.tournamentCategories).find(cat => cat.id === player.categoryId);
                                          return category ? category.name : 'Category N/A';
                                        })()}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                        
                        {/* No results message */}
                        {playersSearchTerm && 
                         selectedTournament.registrations
                           .filter(reg => reg.status === 'approved')
                           .filter(reg => selectedPlayerCategory === 'all' || reg.categoryId === selectedPlayerCategory)
                           .filter(player => {
                             const cleanName = player.playerName.replace(/["'].*?["']/g, '').trim();
                             return cleanName.toLowerCase().includes(playersSearchTerm.toLowerCase());
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
                      selectedTournament.registrations && selectedTournament.registrations.filter(reg => reg.status === 'pending').filter(reg => selectedPlayerCategory === 'all' || reg.categoryId === selectedPlayerCategory).length > 0 ? (
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
                                  .filter(reg => selectedPlayerCategory === 'all' || reg.categoryId === selectedPlayerCategory);
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
                              .filter(reg => reg.status === 'pending')
                              .filter(reg => selectedPlayerCategory === 'all' || reg.categoryId === selectedPlayerCategory)
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
                                  padding: '16px',
                                  transition: 'all 0.2s ease',
                                  boxShadow: '0 1px 3px rgba(245, 158, 11, 0.2)'
                                }}>
                                  <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    marginBottom: '12px'
                                  }}>
                                    <div style={{
                                      width: '40px',
                                      height: '40px',
                                      borderRadius: '50%',
                                      background: '#f59e0b',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      color: 'white',
                                      fontWeight: '600',
                                      fontSize: '14px'
                                    }}>
                                      {player.playerName.replace(/["'].*?["']/g, '').trim().split(' ').map(n => n[0]).join('').toUpperCase()}
                                    </div>
                                    <div>
                                      <div style={{
                                        fontWeight: '600',
                                        color: '#334155',
                                        fontSize: '1rem'
                                      }}>
                                        {player.playerName.replace(/["'].*?["']/g, '').trim()}
                                      </div>
                                      {selectedPlayerCategory === 'all' && (
                                        <div style={{
                                          fontSize: '0.8rem',
                                          color: '#29ba9b',
                                          fontWeight: '500',
                                          marginBottom: '2px'
                                        }}>
                                          {(() => {
                                            const category = selectedTournament.tournamentCategories && 
                                              Object.values(selectedTournament.tournamentCategories).find(cat => cat.id === player.categoryId);
                                            return category ? category.name : 'Category N/A';
                                          })()}
                                        </div>
                                      )}
                                      <div style={{
                                        fontSize: '0.8rem',
                                        color: '#f59e0b',
                                        fontWeight: '500'
                                      }}>
                                        Pending Approval
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                          
                          {/* No results message */}
                          {playersSearchTerm && 
                           selectedTournament.registrations
                             .filter(reg => reg.status === 'pending')
                             .filter(reg => selectedPlayerCategory === 'all' || reg.categoryId === selectedPlayerCategory)
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
                    
                    {(selectedTournament.rules && selectedTournament.rules.length > 0) || selectedTournament.rulesText ? (
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
                          <div style={{
                            fontSize: '1rem',
                            lineHeight: '1.6',
                            color: '#334155',
                            whiteSpace: 'pre-wrap'
                          }}>
                            {selectedTournament.rulesText || 
                             (selectedTournament.rules && selectedTournament.rules.join('\n\n')) ||
                             'All matches follow official IFP rules\n\nPlayers must check in 30 minutes before their scheduled match\n\nProper athletic attire and non-marking shoes required\n\nNo coaching allowed during matches'}
                          </div>
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
                  <div className="price">₱{selectedTournament.entryFee.toLocaleString()}</div>
                </PriceDisplay>

                {/* Action Buttons */}
                <TournamentActionButtons>
  
                  {(user?.name !== selectedTournament.organizer || isHostView) && (
                    <ActionButton variant="primary" 
                    onClick={() => {
                      // Always open registration regardless of source
                      handleRegister(selectedTournament.id);
                    }}
                    disabled={selectedTournament.currentParticipants >= selectedTournament.maxParticipants || !isAuthenticated}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Register Now
                  </ActionButton>
                  )}
                  <ActionButton variant="secondary" onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: selectedTournament.name,
                        text: `Check out this tournament: ${selectedTournament.name}`,
                        url: window.location.href
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      // You could add a notification here
                    }
                  }}>
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
                <RegistrationModalTitle>Register for {registrationTournament.name}</RegistrationModalTitle>
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
                          {registrationTournament && Object.values(registrationTournament?.tournamentCategories || {}).map((category) => {
                            // Use the full category name as display name
                            let displayName = category.name || '';
                            
                            // If name is empty or undefined, create display name from parts
                            if (!displayName) {
                              const division = category.division || '';
                              const skillLevel = category.skillLevel === 'Open' && category.tier 
                                ? `Open Tier ${category.tier}` 
                                : category.skillLevel || '';
                              const age = category.ageGroup || '';
                              
                              const parts = [division, skillLevel, age].filter(part => part);
                              displayName = parts.join(' | ') || 'Unknown Category';
                            }
                            
                            // Check if this category is allowed for the user's gender and age
                            const userGender = user?.gender || registrationForm.primaryPlayer?.gender || 'male';
                            console.log(`🎯 DROPDOWN DEBUG: user object:`, user);
                            console.log(`🎯 DROPDOWN DEBUG: registrationForm.primaryPlayer:`, registrationForm.primaryPlayer);
                            console.log(`🎯 DROPDOWN DEBUG: Final userGender="${userGender}"`);
                            const isAllowed = isCategoryAllowed(category, userGender);
                            console.log(`📝 Dropdown: Category "${category.name}" for user "${userGender}": allowed=${isAllowed}`);
                            
                            return (
                              <option 
                                key={category.id} 
                                value={category.id}
                                disabled={!isAllowed}
                                style={{
                                  color: isAllowed ? 'inherit' : '#9ca3af',
                                  fontStyle: isAllowed ? 'normal' : 'italic'
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
                      const selectedCategory = Object.values(registrationTournament?.tournamentCategories || {})
                        .find(cat => cat.id === registrationForm.category);
                      const categoryType = getCategoryType(selectedCategory?.name || '');
                      
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
                                  <PlayerName>
                                    {registrationForm.primaryPlayer?.name || 'Enter your name'}
                                  </PlayerName>
                                  <PlayerDetails>
                                    PPLID: {registrationForm.primaryPlayer?.pplId || 'Not assigned'} | 
                                    Gender: {registrationForm.primaryPlayer?.gender || 'male'} | 
                                    Age: {registrationForm.primaryPlayer?.age || 'Not specified'}
                                    {(() => {
                                      const selectedCategory = Object.values(registrationTournament?.tournamentCategories || {})
                                        .find(cat => cat.id === registrationForm.category);
                                      const duprRating = getDuprRatingForCategory(
                                        selectedCategory?.name, 
                                        registrationForm.primaryPlayer?.duprRatings
                                      );
                                      return duprRating ? ` | DUPR: ${duprRating}` : '';
                                    })()}
                                  </PlayerDetails>
                                </PlayerInfo>
                              </PlayerSlotContent>
                            </PlayerSlot>
                          </div>

                          {/* Partner for Doubles */}
                          {categoryType === 'doubles' && (
                            <div style={{ marginBottom: '16px' }}>
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
                                        <PlayerName>{registrationForm.partner?.name}</PlayerName>
                                        <PlayerDetails>
                                          PPLID: {registrationForm.partner?.pplId} | 
                                          Gender: {registrationForm.partner?.gender} | 
                                          Age: {registrationForm.partner?.age || 'Not specified'}
                                          {(() => {
                                            const selectedCategory = Object.values(registrationTournament?.tournamentCategories || {})
                                              .find(cat => cat.id === registrationForm.category);
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
                                          e.stopPropagation();
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
                            </div>
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
            key={tournament.id}
            onClick={() => handleTournamentClick(tournament)}
            style={{ cursor: 'pointer' }}
          >
            <TournamentBanner>
              {tournament.bannerUrl && (
              <img src={tournament.bannerUrl} alt={tournament.name} />
              )}
              <StatusBadge $status={tournament.status}>
                {tournament.status}
              </StatusBadge>
            </TournamentBanner>
                          <TournamentInfo>
                <TournamentName>{tournament.name}</TournamentName>
              <TournamentDate>
                <CalendarIcon />
                {new Date(tournament.date).toLocaleDateString()}
              </TournamentDate>
              <TournamentLocation>
                <LocationIcon />
                {tournament.location}
              </TournamentLocation>
              <TournamentSkillLevels>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {tournament.tournamentCategories ? (
                  (() => {
                    // Get unique categories
                    const categories = new Set();
                    Object.values(tournament.tournamentCategories).forEach(category => {
                      if (category.skillLevel?.toLowerCase() === 'open') {
                        // Ensure tier is a number, default to 1 if not specified
                        const tier = Number(category.tier) || 1;
                        categories.add(`Open - Tier ${tier}`);
                      } else if (['Beginner', 'Intermediate', 'Advanced'].includes(category.skillLevel)) {
                        categories.add(category.skillLevel);
                      }
                    });
                    
                    return Array.from(categories).join(', ');
                  })()
                ) : (
                  // Fallback for old data structure
                  `${tournament.tournamentType.charAt(0).toUpperCase() + tournament.tournamentType.slice(1)}${tournament.tournamentType === 'open' ? ` - Tier ${tournament.tier}` : ''}`
                )}
              </TournamentSkillLevels>
              <TournamentStats>
                <RegistrationFee>
                  <MoneyIcon />
                  <div>
                    <span>₱{tournament.entryFee}</span>
                    <span></span> 
                  </div>
                </RegistrationFee>
              </TournamentStats>
              <RegisterButton 
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click when clicking register
                  handleRegister(tournament.id);
                }}
                disabled={tournament.currentParticipants >= tournament.maxParticipants}
              >
                {tournament.currentParticipants >= tournament.maxParticipants 
                  ? 'Full'
                  : !isAuthenticated 
                  ? 'Sign In to Register'
                  : 'Register Now'}
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

     
      
      {/* View Form Modal (Read-only preview for profile) */}
      {showViewFormModal && viewFormTournament && (
        <RegistrationModal onClick={closeViewFormModal}>
          <RegistrationModalContent onClick={e => e.stopPropagation()}>
            <RegistrationModalHeader>
              <RegistrationModalTitle>Registration Form Preview - {viewFormTournament.name}</RegistrationModalTitle>
              <CloseButton onClick={closeViewFormModal}>×</CloseButton>
            </RegistrationModalHeader>

            <RegistrationModalBody>
              <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px', marginBottom: '24px' }}>
                <div style={{ color: '#475569', fontSize: '14px', fontWeight: '500' }}>
                  📋 This is a preview of the registration form for this tournament. To actually register, please visit the tournament from the main tournaments page.
                </div>
              </div>

              {/* Tournament Categories Preview */}
              <RegistrationFormSection>
                <RegistrationSectionTitle>Available Tournament Categories</RegistrationSectionTitle>
                
                {viewFormTournament.tournamentCategories && Object.values(viewFormTournament.tournamentCategories).map((category) => (
                  <div key={category.id} style={{ 
                    border: '1px solid #e2e8f0', 
                    borderRadius: '8px', 
                    padding: '16px', 
                    marginBottom: '12px',
                    background: '#fafafa'
                  }}>
                    <div style={{ fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>
                      {category.name}
                    </div>
                    <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>
                      <strong>Skill Level:</strong> {category.skillLevel === 'open' ? `Open - Tier ${category.tier}` : category.skillLevel}
                    </div>
                    {category.ageRange && (
                      <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>
                        <strong>Age Range:</strong> {category.ageRange}
                      </div>
                    )}
                    <div style={{ fontSize: '14px', color: '#64748b' }}>
                      <strong>Entry Fee:</strong> ₱{viewFormTournament.entryFee}
                    </div>
                  </div>
                ))}
              </RegistrationFormSection>

              {/* Required Information Preview */}
              <RegistrationFormSection>
                <RegistrationSectionTitle>Required Information from Participants</RegistrationSectionTitle>
                
                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#1e293b' }}>Player Information:</strong>
                    <ul style={{ margin: '8px 0', paddingLeft: '20px', color: '#64748b' }}>
                      <li>Full Name</li>
                      <li>Gender</li>
                      <li>Age</li>
                      <li>DUPR Ratings (Singles & Doubles)</li>
                    </ul>
                  </div>
                  
                  <div style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#1e293b' }}>Contact Information:</strong>
                    <ul style={{ margin: '8px 0', paddingLeft: '20px', color: '#64748b' }}>
                      <li>Email Address</li>
                      <li>Contact Number</li>
                    </ul>
                  </div>
                  
                  <div>
                    <strong style={{ color: '#1e293b' }}>Payment Information:</strong>
                    <ul style={{ margin: '8px 0', paddingLeft: '20px', color: '#64748b' }}>
                      <li>Proof of Payment (Image or PDF)</li>
                      <li>Registration Fee: ₱{viewFormTournament.entryFee}</li>
                    </ul>
                  </div>
                </div>
              </RegistrationFormSection>

              {/* Payment Details Preview */}
              <RegistrationFormSection>
                <RegistrationSectionTitle>Payment Details</RegistrationSectionTitle>
                
                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '16px' }}>
                    <strong style={{ color: '#1e293b' }}>Bank Transfer Details:</strong>
                    <div style={{ marginTop: '8px', fontSize: '14px', color: '#64748b' }}>
                      <div><strong>Bank Name:</strong> BDO Unibank</div>
                      <div><strong>Account Name:</strong> John Doe Tournament</div>
                      <div><strong>Account Number:</strong> 1234-5678-9012</div>
                      <div><strong>Reference:</strong> TEAM-REG-2024</div>
                    </div>
                  </div>
                  
                  <div>
                    <strong style={{ color: '#1e293b' }}>Alternative Payment:</strong>
                    <div style={{ marginTop: '8px', fontSize: '14px', color: '#64748b' }}>
                      GCash QR Code available during registration
                    </div>
                  </div>
                </div>
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

    </PageContainer>
  );
}

export default Tournament;