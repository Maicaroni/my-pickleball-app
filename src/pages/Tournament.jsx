import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  margin-bottom: 32px;

  &:hover {
    background: #e2e8f0;
    border-color: #cbd5e1;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    margin-bottom: 24px;
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
    switch (props.status.toLowerCase()) {
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
  font-weight: 700;
  color: #234255;
  text-align: right;

  &.price {
    font-size: 1.3rem;
    color: #29ba9b;
  }

  &.deadline {
    color: #dc2626;
  }

  @media (max-width: 768px) {
    text-align: left;
    font-size: 1rem;
    
    &.price {
      font-size: 1.2rem;
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
    switch (props.status.toLowerCase()) {
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
  margin-bottom: 16px;
`;

const TournamentStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: auto;
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
  overflow-y: auto;
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
  margin-bottom: 16px;
`;

const BankDetailsTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #234255;
  margin: 0 0 16px 0;
`;

const BankDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const BankDetailLabel = styled.span`
  font-weight: 500;
  color: #64748b;
  font-size: 0.9rem;
`;

const BankDetailValue = styled.span`
  font-weight: 600;
  color: #234255;
  font-size: 0.9rem;
`;

const FileUploadArea = styled.div`
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  background: #f8fafc;
  transition: all 0.2s ease;
  cursor: pointer;
  
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

function Tournament() {
  const { isAuthenticated } = useAuth();
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
  
  // Registration modal state
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [registrationTournament, setRegistrationTournament] = useState(null);
  const [registrationForm, setRegistrationForm] = useState({
    category: '',
    division: '',
    ageCategory: '',
    level: '',
    fullName: '',
    email: '',
    contactNumber: '',
    proofOfPayment: null
  });
  
  // Fee ranges
  const feeRanges = [
    { label: '₱0 - ₱1,000', min: 0, max: 1000 },
    { label: '₱1,001 - ₱2,000', min: 1001, max: 2000 },
    { label: '₱2,001 - ₱3,000', min: 2001, max: 3000 }
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
            'mens-singles-intermediate-18': {
              id: 'mens-singles-intermediate-18',
              name: "Men's Singles Intermediate 18+",
              ageGroup: '18+',
              skillLevel: 'Intermediate',
              participants: 16,
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
            'womens-singles-intermediate-18': {
              id: 'womens-singles-intermediate-18',
              name: "Women's Singles Intermediate 18+", 
              ageGroup: '18+',
              skillLevel: 'Intermediate',
              participants: 12,
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
          ],
          // Multiple Tournament Categories with Brackets
          tournamentCategories: {
            'mens-singles': {
              id: 'mens-singles',
              name: "Men's Singles Advanced 18+",
              ageGroup: '18+',
              skillLevel: 'Advanced',
              icon: '👨',
              participants: 16,
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
            'womens-singles': {
              id: 'womens-singles',
              name: "Women's Singles 18+ Intermediate", 
              ageGroup: '18+',
              skillLevel: 'Intermediate',
              icon: '👩',
              participants: 12,
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
            },
            'mixed-doubles-open-35': {
              id: 'mixed-doubles-open-35',
              name: "Mixed Doubles Open 35+",
              ageGroup: '35+',
              skillLevel: 'Open',
              icon: '👫',
              participants: 8,
              prizePool: 10000,
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
            }
          }
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
            'womens-doubles': {
              id: 'womens-doubles',
              name: "Women's Doubles Intermediate 18+", 
              ageGroup: '18+',
              skillLevel: 'Intermediate',
              icon: '👭',
              participants: 8,
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
              participants: 8,
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
            'womens-singles': {
              id: 'womens-singles',
              name: "Women's Singles Advanced 18+", 
              ageGroup: '18+',
              skillLevel: 'Advanced',
              icon: '👩',
              participants: 8,
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
          }
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
    setShowDetailedView(false);
    setSelectedTournament(null);
    setActiveTab('details'); // Reset to details tab
    setExpandedCategories({}); // Reset expanded categories
    setPlayersSearchTerm(''); // Reset players search
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
    // Check auth state
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    // Find the tournament
    const tournament = tournaments.find(t => t.id === tournamentId);
    if (tournament) {
      setRegistrationTournament(tournament);
      setShowRegistrationModal(true);
      // Reset form
      setRegistrationForm({
        category: '',
        division: '',
        level: '',
        name: '',
        email: '',
        contactNumber: '',
        proofOfPayment: null
      });
    }
  };

  // Registration form handlers
  const handleRegistrationFormChange = (field, value) => {
    setRegistrationForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setRegistrationForm(prev => ({
        ...prev,
        proofOfPayment: file
      }));
    }
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

  if (loading) return <LoadingState>Loading tournaments...</LoadingState>;
  if (error) return <ErrorState>{error}</ErrorState>;

  // Show tournament details page if a tournament is selected
  if (showDetailedView && selectedTournament) {
    return (
      <PageContainer>
        <TournamentDetailContent>
          <BackButton onClick={handleCloseDetailedView}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Tournaments
          </BackButton>

          <TournamentDetailHeader>
            <TournamentDetailBanner>
              {selectedTournament.bannerUrl && (
                <img src={selectedTournament.bannerUrl} alt={selectedTournament.name} />
              )}
            </TournamentDetailBanner>
            <TournamentDetailStatusBadge status={selectedTournament.status}>
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
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '8px', 
                    marginTop: '16px',
                    marginBottom: '24px' 
                  }}>
                    {selectedTournament.tournamentCategories ? (
                      (() => {
                        // Get unique categories same as card view
                        const categories = new Set();
                        Object.values(selectedTournament.tournamentCategories).forEach(category => {
                          if (category.skillLevel === 'Open') {
                            categories.add(`Open - Tier ${category.tier || 1}`);
                          } else if (['Intermediate', 'Advanced'].includes(category.skillLevel)) {
                            categories.add(category.skillLevel);
                          }
                        });
                        
                        return Array.from(categories).map((categoryName, index) => (
                          <TournamentTypeDisplay 
                            key={index}
                            style={{ 
                              fontSize: '0.9rem', 
                              padding: '8px 16px',
                              fontWeight: '600'
                            }}
                          >
                            {categoryName}
                          </TournamentTypeDisplay>
                        ));
                      })()
                    ) : (
                      // Fallback for old data structure
                      <TournamentTypeDisplay>
                        {selectedTournament.tournamentType.charAt(0).toUpperCase() + selectedTournament.tournamentType.slice(1)}
                        {selectedTournament.tournamentType === 'open' && ` - Tier ${selectedTournament.tier}`}
                      </TournamentTypeDisplay>
                    )}
                  </div>
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
                  $active={activeTab === 'events'} 
                  onClick={() => setActiveTab('events')}
                >
                  Events
                </TabButton>
                <TabButton 
                  $active={activeTab === 'brackets'} 
                  onClick={() => setActiveTab('brackets')}
                >
                  Brackets
                </TabButton>
                <TabButton 
                  $active={activeTab === 'players'} 
                  onClick={() => setActiveTab('players')}
                >
                  Players
                </TabButton>
                <TabButton 
                  $active={activeTab === 'guidelines'} 
                  onClick={() => setActiveTab('guidelines')}
                >
                  Guidelines
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
                              <DetailItemSubtext>Prize Pool: ₱{selectedTournament.prizePool.toLocaleString()}</DetailItemSubtext>
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
                              <DetailItemLabel>Tournament Duration</DetailItemLabel>
                              <DetailItemSubtext>Starts at {new Date(selectedTournament.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</DetailItemSubtext>
                            </div>
                            <DetailItemValue>{formatDateRange(selectedTournament.date, selectedTournament.endDate)}</DetailItemValue>
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
                              <DetailItemSubtext>
                                {new Date(selectedTournament.registrationDeadline).toLocaleDateString('en-US', { 
                                  weekday: 'long',
                                  year: 'numeric' 
                                })} at {new Date(selectedTournament.registrationDeadline).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                              </DetailItemSubtext>
                            </div>
                            <DetailItemValue className="deadline">
                              {new Date(selectedTournament.registrationDeadline).toLocaleDateString('en-US', { 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </DetailItemValue>
                          </DetailItemContent>
                        </TournamentDetailsItem>

                        <TournamentDetailsItem>
                          <DetailItemIcon>
                            <TrophyIcon />
                          </DetailItemIcon>
                          <DetailItemContent>
                            <div>
                              <DetailItemLabel>Tournament Tier & Type</DetailItemLabel>
                              <DetailItemSubtext>
                                {selectedTournament.tournamentType.charAt(0).toUpperCase() + selectedTournament.tournamentType.slice(1)} Level Tournament
                              </DetailItemSubtext>
                            </div>
                            <DetailItemValue>Tier {selectedTournament.tier}</DetailItemValue>
                          </DetailItemContent>
                        </TournamentDetailsItem>
                      </TournamentDetailsList>
                    </TournamentDetailSection>

                    <TournamentDetailSection>
                      <TournamentDetailSectionTitle>
                        <LocationIcon />
                        Tournament Location & Map
                      </TournamentDetailSectionTitle>
                      
                      <LocationCard>
                        <LocationHeader>
                          <h4>
                            <LocationIcon />
                            Venue Information
                          </h4>
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
                    
                    <EventsGrid>
                      <EventCard>
                        <EventTime>Day 1 - 9:00 AM</EventTime>
                        <EventTitle>Registration & Check-in</EventTitle>
                        <EventDescription>All participants must check in and complete registration process. Bring valid ID and proof of payment.</EventDescription>
                      </EventCard>
                      
                      <EventCard>
                        <EventTime>Day 1 - 10:00 AM</EventTime>
                        <EventTitle>Opening Ceremony</EventTitle>
                        <EventDescription>Welcome address, tournament rules briefing, and player introductions.</EventDescription>
                      </EventCard>
                      
                      <EventCard>
                        <EventTime>Day 1 - 11:00 AM</EventTime>
                        <EventTitle>{selectedTournament.divisions[0]} - Round 1</EventTitle>
                        <EventDescription>First round matches for {selectedTournament.divisions[0]} division.</EventDescription>
                      </EventCard>
                      
                      <EventCard>
                        <EventTime>Day 1 - 2:00 PM</EventTime>
                        <EventTitle>{selectedTournament.divisions[1] || "Mixed Doubles"} - Round 1</EventTitle>
                        <EventDescription>First round matches for {selectedTournament.divisions[1] || "Mixed Doubles"} division.</EventDescription>
                      </EventCard>
                      
                      {selectedTournament.endDate !== selectedTournament.date && (
                        <>
                          <EventCard>
                            <EventTime>Day 2 - 9:00 AM</EventTime>
                            <EventTitle>Semi-Finals</EventTitle>
                            <EventDescription>Semi-final matches across all divisions.</EventDescription>
                          </EventCard>
                          
                          <EventCard>
                            <EventTime>Day 2 - 3:00 PM</EventTime>
                            <EventTitle>Finals & Closing Ceremony</EventTitle>
                            <EventDescription>Championship matches and awards ceremony.</EventDescription>
                          </EventCard>
                        </>
                      )}
                    </EventsGrid>
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
                                    <span>{category.name.split(' ').slice(0, 2).join(' ')}</span>
                                    <span style={{ color: '#64748b', fontSize: '1rem' }}>|</span>
                                    <span>{category.ageGroup}</span>
                                    <span style={{ color: '#64748b', fontSize: '1rem' }}>|</span>
                                    <span style={{ color: '#059669' }}>
                                      {category.skillLevel}
                                      {category.skillLevel === 'Open' && ` - Tier ${category.tier || 1}`}
                                    </span>
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
                                      background: '#f8fafc',
                                      padding: '16px',
                                      borderRadius: '8px',
                                      border: '1px solid #e2e8f0',
                                      display: 'inline-block',
                                      minWidth: '200px'
                                    }}>
                                      <div style={{ color: '#29ba9b', fontWeight: '600', marginBottom: '8px', fontSize: '0.9rem' }}>
                                        Category Details
                                      </div>
                                      <div style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: '1.4' }}>
                                        <div style={{ marginBottom: '2px' }}>🎯 Skill Level: {category.skillLevel}</div>
                                        <div style={{ marginBottom: '2px' }}>👥 Total Players: {category.participants}</div>
                                        <div style={{ marginBottom: '2px' }}>🏆 Prize Pool: ₱{category.prizePool.toLocaleString()}</div>
                                        <div style={{ marginBottom: '2px' }}>📅 Age Group: {category.ageGroup}</div>
                                        <div>📝 {category.description}</div>
                                      </div>
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
                        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 4.197a4 4 0 11-3-6.18" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Approved Players
                    </TournamentDetailSectionTitle>
                    
                    {selectedTournament.registrations && selectedTournament.registrations.filter(reg => reg.status === 'approved').length > 0 ? (
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
                              const approvedPlayers = selectedTournament.registrations.filter(reg => reg.status === 'approved');
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
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                        
                        {/* No results message */}
                        {playersSearchTerm && 
                         selectedTournament.registrations
                           .filter(reg => reg.status === 'approved')
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
                    
                    {selectedTournament.rules && selectedTournament.rules.length > 0 ? (
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
                          overflow: 'hidden'
                        }}>
                          {selectedTournament.rules.map((rule, index) => (
                            <div key={index} style={{
                              padding: '20px',
                              borderBottom: index < selectedTournament.rules.length - 1 ? '1px solid #e2e8f0' : 'none',
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '16px'
                            }}>
                              <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: '#29ba9b',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: '600',
                                fontSize: '14px',
                                flexShrink: 0
                              }}>
                                {index + 1}
                              </div>
                              <div style={{
                                flex: 1,
                                fontSize: '1rem',
                                lineHeight: '1.6',
                                color: '#334155'
                              }}>
                                {rule}
                              </div>
                            </div>
                          ))}
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
                  <div className="prize-pool">Prize Pool: ₱{selectedTournament.prizePool.toLocaleString()}</div>
                </PriceDisplay>

                <ParticipantInfo>
                  <span className="label">Participants</span>
                  <span className="count">{selectedTournament.currentParticipants}/{selectedTournament.maxParticipants}</span>
                </ParticipantInfo>

                <ActionButtonsContainer>
                  <RegisterButtonMain 
                    onClick={() => handleRegister(selectedTournament.id)}
                    disabled={selectedTournament.currentParticipants >= selectedTournament.maxParticipants || !isAuthenticated}
                  >
                    {selectedTournament.currentParticipants >= selectedTournament.maxParticipants 
                      ? 'Tournament Full'
                      : !isAuthenticated 
                      ? 'Sign In to Register'
                      : 'Register Now'}
                  </RegisterButtonMain>
                  <ShareButtonMain onClick={() => navigator.share?.({ 
                    title: selectedTournament.name,
                    text: selectedTournament.description,
                    url: window.location.href 
                  })}>
                    Share
                  </ShareButtonMain>
                </ActionButtonsContainer>
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

                    <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '18px', marginTop: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 0' }}>
                        <div style={{ 
                          width: '45px', 
                          height: '45px', 
                          background: '#f8fafc', 
                          border: '2px dashed #cbd5e1', 
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.2rem',
                          color: '#64748b',
                          fontWeight: '500'
                        }}>
                          +
                        </div>
                        <SponsorName style={{ fontSize: '1rem', margin: '0', color: '#64748b', fontStyle: 'italic' }}>Become a Sponsor</SponsorName>
                      </div>
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
                        <RegistrationLabel>Category</RegistrationLabel>
                        <RegistrationSelect
                          value={registrationForm.category}
                          onChange={(e) => handleRegistrationFormChange('category', e.target.value)}
                          required
                        >
                          <option value="">Select Category</option>
                          <option value="mens-singles">Men's Singles</option>
                          <option value="womens-singles">Women's Singles</option>
                          <option value="mens-doubles">Men's Doubles</option>
                          <option value="womens-doubles">Women's Doubles</option>
                          <option value="mixed-doubles">Mixed Doubles</option>
                        </RegistrationSelect>
                      </RegistrationFormGroup>
                      
                      <RegistrationFormGroup>
                        <RegistrationLabel>Age Category</RegistrationLabel>
                        <RegistrationSelect
                          value={registrationForm.ageCategory}
                          onChange={(e) => handleRegistrationFormChange('ageCategory', e.target.value)}
                          required
                        >
                          <option value="">Select Age Category</option>
                          <option value="18+">18+</option>
                          <option value="35+">35+</option>
                          <option value="50+">50+</option>
                        </RegistrationSelect>
                      </RegistrationFormGroup>
                    </RegistrationFormRow>
                    
                    <RegistrationFormRow>
                      <RegistrationFormGroup>
                        <RegistrationLabel>Skill Level</RegistrationLabel>
                        <RegistrationSelect
                          value={registrationForm.level}
                          onChange={(e) => handleRegistrationFormChange('level', e.target.value)}
                          required
                        >
                          <option value="">Select Skill Level</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advanced">Advanced</option>
                          <option value="open-tier1">Open - Tier 1</option>
                          <option value="open-tier2">Open - Tier 2</option>
                          <option value="open-tier3">Open - Tier 3</option>
                        </RegistrationSelect>
                      </RegistrationFormGroup>
                    </RegistrationFormRow>
                  </RegistrationFormSection>

                  {/* Personal Information */}
                  <RegistrationFormSection>
                    <RegistrationSectionTitle>Personal Information</RegistrationSectionTitle>
                    
                    <RegistrationFormRow>
                      <RegistrationFormGroup>
                        <RegistrationLabel>Full Name</RegistrationLabel>
                        <RegistrationInput
                          type="text"
                          value={registrationForm.fullName}
                          onChange={(e) => handleRegistrationFormChange('fullName', e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </RegistrationFormGroup>
                      
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
                    </RegistrationFormRow>
                    
                    <RegistrationFormRow>
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
                    
                    <BankDetailsBox>
                      <BankDetailsTitle>Bank Transfer Details</BankDetailsTitle>
                      <BankDetail>
                        <BankDetailLabel>Bank Name:</BankDetailLabel>
                        <BankDetailValue>-</BankDetailValue>
                      </BankDetail>
                      <BankDetail>
                        <BankDetailLabel>Account Name:</BankDetailLabel>
                        <BankDetailValue>-</BankDetailValue>
                      </BankDetail>
                      <BankDetail>
                        <BankDetailLabel>Account Number:</BankDetailLabel>
                        <BankDetailValue>-</BankDetailValue>
                      </BankDetail>
                      <BankDetail>
                        <BankDetailLabel>Routing Number:</BankDetailLabel>
                        <BankDetailValue>-</BankDetailValue>
                      </BankDetail>
                      <BankDetail>
                        <BankDetailLabel>Reference:</BankDetailLabel>
                        <BankDetailValue>-</BankDetailValue>
                      </BankDetail>
                    </BankDetailsBox>
                    
                    <RegistrationFormGroup>
                      <RegistrationLabel>Proof of Payment</RegistrationLabel>
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
                            {registrationForm.proofOfPayment 
                              ? `Selected: ${registrationForm.proofOfPayment.name}`
                              : 'Click to upload proof of payment (Image or PDF)'
                            }
                          </FileUploadText>
                        </label>
                      </FileUploadArea>
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
              <StatusBadge status={tournament.status}>
                {tournament.status}
              </StatusBadge>
            </TournamentBanner>
                          <TournamentInfo>
                <TournamentName>{tournament.name}</TournamentName>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
                  {tournament.tournamentCategories ? (
                    (() => {
                      // Get unique categories
                      const categories = new Set();
                      console.log('All tournament categories:', tournament.tournamentCategories);
                      Object.values(tournament.tournamentCategories).forEach(category => {
                        console.log('Processing category:', {
                          skillLevel: category.skillLevel,
                          tier: category.tier,
                          fullCategory: category
                        });
                        if (category.skillLevel?.toLowerCase() === 'open') {
                          // Ensure tier is a number, default to 1 if not specified
                          const tier = Number(category.tier) || 1;
                          categories.add(`Open - Tier ${tier}`);
                        } else if (['Intermediate', 'Advanced'].includes(category.skillLevel)) {
                          categories.add(category.skillLevel);
                        }
                      });
                      
                      return Array.from(categories).map((categoryName, index) => {
                        const isOpen = categoryName.startsWith('Open');
                        const type = isOpen ? 'open' : categoryName.toLowerCase();
                        return (
                          <TournamentTypeDisplay 
                            key={index} 
                            type={type}
                            style={{ fontSize: '0.8rem', padding: '4px 10px' }}
                          >
                            {categoryName}
                          </TournamentTypeDisplay>
                        );
                      });
                    })()
                  ) : (
                    // Fallback for old data structure
                    <TournamentTypeDisplay type={tournament.tournamentType}>
                      {tournament.tournamentType.charAt(0).toUpperCase() + tournament.tournamentType.slice(1)}
                      {tournament.tournamentType === 'open' && ` - Tier ${tournament.tier}`}
                    </TournamentTypeDisplay>
                  )}
                </div>
              <TournamentDate>
                <CalendarIcon />
                {new Date(tournament.date).toLocaleDateString()}
              </TournamentDate>
              <TournamentLocation>
                <LocationIcon />
                {tournament.location}
              </TournamentLocation>
              <TournamentStats>
                <ParticipantCount>
                  <ParticipantIcon />
                  <div>
                    {tournament.currentParticipants}/{tournament.maxParticipants}
                  </div>
                </ParticipantCount>
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
                      <RegistrationLabel>Category</RegistrationLabel>
                      <RegistrationSelect
                        value={registrationForm.category}
                        onChange={(e) => handleRegistrationFormChange('category', e.target.value)}
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="mens-singles">Men's Singles</option>
                        <option value="womens-singles">Women's Singles</option>
                        <option value="mens-doubles">Men's Doubles</option>
                        <option value="womens-doubles">Women's Doubles</option>
                        <option value="mixed-doubles">Mixed Doubles</option>
                      </RegistrationSelect>
                    </RegistrationFormGroup>
                    
                    <RegistrationFormGroup>
                      <RegistrationLabel>Age Category</RegistrationLabel>
                      <RegistrationSelect
                        value={registrationForm.ageCategory}
                        onChange={(e) => handleRegistrationFormChange('ageCategory', e.target.value)}
                        required
                      >
                        <option value="">Select Age Category</option>
                        <option value="18+">18+</option>
                        <option value="35+">35+</option>
                        <option value="50+">50+</option>
                      </RegistrationSelect>
                    </RegistrationFormGroup>
                  </RegistrationFormRow>
                  
                  <RegistrationFormRow>
                    <RegistrationFormGroup>
                      <RegistrationLabel>Skill Level</RegistrationLabel>
                      <RegistrationSelect
                        value={registrationForm.level}
                        onChange={(e) => handleRegistrationFormChange('level', e.target.value)}
                        required
                      >
                        <option value="">Select Skill Level</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="open-tier1">Open - Tier 1</option>
                        <option value="open-tier2">Open - Tier 2</option>
                        <option value="open-tier3">Open - Tier 3</option>
                      </RegistrationSelect>
                    </RegistrationFormGroup>
                  </RegistrationFormRow>
                </RegistrationFormSection>

                {/* Personal Information */}
                <RegistrationFormSection>
                  <RegistrationSectionTitle>Personal Information</RegistrationSectionTitle>
                  
                  <RegistrationFormRow>
                    <RegistrationFormGroup>
                      <RegistrationLabel>Full Name</RegistrationLabel>
                      <RegistrationInput
                        type="text"
                        value={registrationForm.fullName}
                        onChange={(e) => handleRegistrationFormChange('fullName', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </RegistrationFormGroup>
                    
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
                  </RegistrationFormRow>
                  
                  <RegistrationFormRow>
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
                  
                  <BankDetailsBox>
                    <BankDetailsTitle>Bank Transfer Details</BankDetailsTitle>
                    <BankDetail>
                      <BankDetailLabel>Bank Name:</BankDetailLabel>
                      <BankDetailValue>-</BankDetailValue>
                    </BankDetail>
                    <BankDetail>
                      <BankDetailLabel>Account Name:</BankDetailLabel>
                      <BankDetailValue>-</BankDetailValue>
                    </BankDetail>
                    <BankDetail>
                      <BankDetailLabel>Account Number:</BankDetailLabel>
                      <BankDetailValue>-</BankDetailValue>
                    </BankDetail>
                    <BankDetail>
                      <BankDetailLabel>Routing Number:</BankDetailLabel>
                      <BankDetailValue>-</BankDetailValue>
                    </BankDetail>
                    <BankDetail>
                      <BankDetailLabel>Reference:</BankDetailLabel>
                      <BankDetailValue>-</BankDetailValue>
                    </BankDetail>
                  </BankDetailsBox>
                  
                  <RegistrationFormGroup>
                    <RegistrationLabel>Proof of Payment</RegistrationLabel>
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
                          {registrationForm.proofOfPayment 
                            ? `Selected: ${registrationForm.proofOfPayment.name}`
                            : 'Click to upload proof of payment (Image or PDF)'
                          }
                        </FileUploadText>
                      </label>
                    </FileUploadArea>
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
    </PageContainer>
  );
}

export default Tournament;