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
 * @property {string} tournamentType - Tournament type ("intermediate", "advanced", "open")
 * @property {number} tier - Tournament tier (1, 2, 3)
 * @property {string} contactEmail - Contact email for inquiries
 * @property {string} contactPhone - Contact phone number
 * @property {string[]} rules - Tournament rules and regulations
 * @property {string[]} amenities - Available amenities at venue
 * @property {string} createdAt - Creation timestamp
 * @property {string} updatedAt - Last update timestamp
 * @property {Object[]} brackets - Tournament brackets with approved players
 * @property {Object[]} registrations - Player registrations with status
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
      case 'intermediate': return '#fef3c7';
      case 'advanced': return '#fef2f2';
      case 'open': return '#f0f9ff';
      default: return '#f8fafc';
    }
  }};
  border-radius: 25px;
  color: ${props => {
    switch (props.type) {
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
  overflow-x: auto;
  border: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    margin-bottom: 24px;
    padding: 4px;
  }
`;

const TabButton = styled.button`
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
  padding: 16px;
  border: 1px solid #e2e8f0;
  width: 100%;

  @media (min-width: 768px) {
    padding: 24px;
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
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-bottom: 12px;
  }
  
  h4 {
    font-size: 0.85rem;
    font-weight: 600;
    color: #334155;
    margin: 0 0 4px;
    line-height: 1.2;
    text-align: left;

    @media (min-width: 768px) {
      font-size: 1rem;
      margin: 0 0 6px;
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
  margin: 4px 0;
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
  margin: 8px 0;
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
    margin-bottom: 8px;

    @media (min-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 12px;
    }
  }
  
  .championship-match {
    margin: 8px 0;
    width: 100%;

    @media (min-width: 768px) {
      margin: 12px 0;
    }
  }
`;

const GroupStageSection = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
  
  .section-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #334155;
    margin-bottom: 16px;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 1.2rem;
      margin-bottom: 20px;
    }
  }
  
  .groups-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
      margin-bottom: 32px;
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
  padding: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const GroupHeader = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #334155;
  margin: 0 0 16px;
  text-align: center;
  padding: 8px 12px;
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`;

const StandingsTable = styled.div`
  .standings-header {
    display: grid;
    grid-template-columns: 1fr 60px 60px;
    gap: 8px;
    padding: 8px 12px;
    background: #f8fafc;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #64748b;
    margin-bottom: 8px;
  }
`;

const StandingsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px 60px;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  margin-bottom: 4px;
  background: ${props => props.$qualified ? '#dcfce7' : '#f8fafc'};
  border: 1px solid ${props => props.$qualified ? '#bbf7d0' : '#e2e8f0'};
  
  .player-info {
    display: flex;
    align-items: center;
    gap: 8px;
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
  }
  
  .player-name {
    font-weight: 500;
    color: ${props => props.$qualified ? '#166534' : '#334155'};
    text-align: left;
  }
  
  .wins, .points {
    text-align: center;
    font-weight: 600;
    color: ${props => props.$qualified ? '#166534' : '#334155'};
  }
`;

const StickyActionBar = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 90px;

  @media (max-width: 1023px) {
    position: relative;
    top: 0;
    margin-top: 32px;
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
  background: ${props => {
    switch (props.type) {
      case 'intermediate': return '#fef3c7';
      case 'advanced': return '#fef2f2';
      case 'open': return '#f0f9ff';
      default: return '#f8fafc';
    }
  }};
  border-radius: 25px;
  color: ${props => {
    switch (props.type) {
      case 'intermediate': return '#d97706';
      case 'advanced': return '#dc2626';
      case 'open': return '#0369a1';
      default: return '#475569';
    }
  }};
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 16px;
  border: 1px solid ${props => {
    switch (props.type) {
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
  
  // Fee ranges
  const feeRanges = [
    { label: '₱0 - ₱3,000', min: 0, max: 3000 },
    { label: '₱3,001 - ₱6,000', min: 3001, max: 6000 },
    { label: '₱6,001 - ₱10,000', min: 6001, max: 10000 }
  ];

  const filteredTournaments = tournaments.filter(tournament => {
    const matchesSearch = tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tournament.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = !selectedTier || tournament.tier === parseInt(selectedTier);
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
       * BACKEND INTEGRATION REQUIRED:
       * 
       * Database Schema - Add these fields to tournaments table:
       * - endDate: timestamp (for multi-day tournaments)
       * - address: text (full venue address)
       * - latitude: decimal(10,8) (for map pin location)
       * - longitude: decimal(11,8) (for map pin location)
       * - tournamentType: enum('intermediate', 'advanced', 'open')
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
                { id: '8', name: 'Elena "Blade" Cruz', status: 'approved', rating: '3.9', team: 'Alabang Aces' },
                { id: '13', name: 'James "Comet" Taylor', status: 'approved', rating: '3.6', team: 'Paranaque Phoenix' },
                { id: '16', name: 'Sarah "Whirlwind" Kim', status: 'approved', rating: '3.4', team: 'Valenzuela Vipers' },
                { id: '17', name: 'Alex "Thunder" Martinez', status: 'approved', rating: '3.2', team: 'Caloocan Cobras' }
              ]
            },
            {
              id: 'bracket-2',
              name: 'Bracket B',
              maxPlayers: 5,
              players: [
                { id: '2', name: 'Maria "Lightning" Santos', status: 'approved', rating: '4.3', team: 'QC Warriors' },
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
                { id: '5', name: 'Miguel "Storm" Torres', status: 'approved', rating: '4.6', team: 'Ortigas Eagles' },
                { id: '6', name: 'Sofia "Ice" Garcia', status: 'approved', rating: '4.1', team: 'Taguig Thunder' },
                { id: '10', name: 'Carmen "Flash" Lopez', status: 'approved', rating: '3.8', team: 'Marikina Mavericks' },
                { id: '18', name: 'Rachel "Storm" Gonzalez', status: 'approved', rating: '3.3', team: 'Malabon Mako' }
              ]
            }
          ],
          registrations: [
            // Approved players in brackets
            { id: '1', playerName: 'John "The Ace" Doe', registeredAt: '2025-01-10T10:30:00Z', status: 'approved', bracketId: 'bracket-1', rating: '4.5', team: 'Manila Smashers' },
            { id: '2', playerName: 'Maria "Lightning" Santos', registeredAt: '2025-01-10T11:15:00Z', status: 'approved', bracketId: 'bracket-1', rating: '4.3', team: 'QC Warriors' },
            { id: '3', playerName: 'Carlos "The Wall" Rodriguez', registeredAt: '2025-01-10T14:20:00Z', status: 'approved', bracketId: 'bracket-1', rating: '4.4', team: 'BGC Titans' },
            { id: '4', playerName: 'Ana "Fire" Reyes', registeredAt: '2025-01-11T09:45:00Z', status: 'approved', bracketId: 'bracket-1', rating: '4.2', team: 'Makati Sharks' },
            { id: '5', playerName: 'Miguel "Storm" Torres', registeredAt: '2025-01-11T13:10:00Z', status: 'approved', bracketId: 'bracket-1', rating: '4.6', team: 'Ortigas Eagles' },
            { id: '6', playerName: 'Sofia "Ice" Garcia', registeredAt: '2025-01-12T08:30:00Z', status: 'approved', bracketId: 'bracket-1', rating: '4.1', team: 'Taguig Thunder' },
            { id: '7', playerName: 'Luis "Rocket" Chen', registeredAt: '2025-01-12T16:45:00Z', status: 'approved', bracketId: 'bracket-2', rating: '4.0', team: 'Pasig Panthers' },
            { id: '8', playerName: 'Elena "Blade" Cruz', registeredAt: '2025-01-13T12:00:00Z', status: 'approved', bracketId: 'bracket-2', rating: '3.9', team: 'Alabang Aces' },
            { id: '9', playerName: 'Roberto "Hammer" Kim', registeredAt: '2025-01-13T15:20:00Z', status: 'approved', bracketId: 'bracket-2', rating: '4.1', team: 'Greenhills Gladiators' },
            { id: '10', playerName: 'Carmen "Flash" Lopez', registeredAt: '2025-01-14T10:10:00Z', status: 'approved', bracketId: 'bracket-2', rating: '3.8', team: 'Marikina Mavericks' },
            { id: '11', playerName: 'David "Spike" Park', registeredAt: '2025-01-14T14:30:00Z', status: 'approved', bracketId: 'bracket-2', rating: '4.0', team: 'Cubao Crushers' },
            { id: '12', playerName: 'Patricia "Viper" Wong', registeredAt: '2025-01-15T09:00:00Z', status: 'approved', bracketId: 'bracket-2', rating: '3.7', team: 'Mandaluyong Meteors' },
            { id: '13', playerName: 'James "Comet" Taylor', registeredAt: '2025-01-15T11:30:00Z', status: 'approved', bracketId: 'bracket-3', rating: '3.6', team: 'Paranaque Phoenix' },
            { id: '14', playerName: 'Lisa "Arrow" Johnson', registeredAt: '2025-01-15T16:15:00Z', status: 'approved', bracketId: 'bracket-3', rating: '3.5', team: 'Las Pinas Lions' },
            { id: '15', playerName: 'Michael "Bolt" Chang', registeredAt: '2025-01-16T09:20:00Z', status: 'approved', bracketId: 'bracket-3', rating: '3.8', team: 'Muntinlupa Mustangs' },
            { id: '16', playerName: 'Sarah "Whirlwind" Kim', registeredAt: '2025-01-16T14:45:00Z', status: 'approved', bracketId: 'bracket-3', rating: '3.4', team: 'Valenzuela Vipers' },
            { id: '17', playerName: 'Alex "Thunder" Martinez', registeredAt: '2025-01-17T10:30:00Z', status: 'approved', bracketId: 'bracket-4', rating: '3.2', team: 'Caloocan Cobras' },
            { id: '18', playerName: 'Rachel "Storm" Gonzalez', registeredAt: '2025-01-17T15:20:00Z', status: 'approved', bracketId: 'bracket-4', rating: '3.3', team: 'Malabon Mako' },
            // Pending approvals
            { id: '19', playerName: 'Kevin "Dash" Lim', registeredAt: '2025-01-18T09:15:00Z', status: 'pending', bracketId: null, rating: '3.1', team: 'Pasay Predators' },
            { id: '20', playerName: 'Nina "Swift" Cruz', registeredAt: '2025-01-18T11:30:00Z', status: 'pending', bracketId: null, rating: '3.4', team: 'Quezon Quakes' },
            { id: '21', playerName: 'Tony "Blast" Reyes', registeredAt: '2025-01-18T14:45:00Z', status: 'pending', bracketId: null, rating: '3.6', team: 'Masinag Magic' },
            { id: '22', playerName: 'Grace "Speed" Tan', registeredAt: '2025-01-18T16:20:00Z', status: 'pending', bracketId: null, rating: '3.2', team: 'Fairview Falcons' },
            // Rejected applications
            { id: '23', playerName: 'Mark "Novice" Brown', registeredAt: '2025-01-19T10:00:00Z', status: 'rejected', bracketId: null, rating: '2.5', team: 'Independent', note: 'Rating below minimum requirement' },
            { id: '24', playerName: 'Jenny "Beginner" Davis', registeredAt: '2025-01-19T13:15:00Z', status: 'rejected', bracketId: null, rating: '2.8', team: 'Independent', note: 'Incomplete documentation' }
          ],
          // Tournament Bracket Data
          tournamentBracket: {
            groupStage: {
              bracketA: [
                { id: '1', name: 'John Doe', rating: '4.5', wins: 4, points: 12, position: 1 },
                { id: '8', name: 'Elena Cruz', rating: '3.9', wins: 3, points: 9, position: 2 },
                { id: '13', name: 'James Taylor', rating: '3.6', wins: 2, points: 6, position: 3 },
                { id: '16', name: 'Sarah Kim', rating: '3.4', wins: 1, points: 3, position: 4 },
                { id: '17', name: 'Alex Martinez', rating: '3.2', wins: 0, points: 0, position: 5 }
              ],
              bracketB: [
                { id: '2', name: 'Maria Santos', rating: '4.3', wins: 3, points: 9, position: 1 },
                { id: '7', name: 'Luis Chen', rating: '4.0', wins: 3, points: 9, position: 2 },
                { id: '12', name: 'Patricia Wong', rating: '3.7', wins: 2, points: 6, position: 3 },
                { id: '14', name: 'Lisa Johnson', rating: '3.5', wins: 1, points: 3, position: 4 }
              ],
              bracketC: [
                { id: '3', name: 'Carlos Rodriguez', rating: '4.4', wins: 4, points: 12, position: 1 },
                { id: '9', name: 'Roberto Kim', rating: '4.1', wins: 2, points: 6, position: 2 },
                { id: '11', name: 'David Park', rating: '4.0', wins: 2, points: 6, position: 3 },
                { id: '15', name: 'Michael Chang', rating: '3.8', wins: 1, points: 3, position: 4 }
              ],
              bracketD: [
                { id: '4', name: 'Ana Reyes', rating: '4.2', wins: 3, points: 9, position: 1 },
                { id: '5', name: 'Miguel Torres', rating: '4.6', wins: 3, points: 9, position: 2 },
                { id: '6', name: 'Sofia Garcia', rating: '4.1', wins: 2, points: 6, position: 3 },
                { id: '10', name: 'Carmen Lopez', rating: '3.8', wins: 1, points: 3, position: 4 },
                { id: '18', name: 'Rachel Gonzalez', rating: '3.3', wins: 0, points: 0, position: 5 }
              ]
            },
            knockoutStage: {
              quarterFinals: [
                { 
                  id: 'qf1', 
                  player1: { name: 'John Doe', seed: 'A1' }, 
                  player2: { name: 'Roberto Kim', seed: 'C2' },
                  score: '11-8, 11-6',
                  winner: 'player1',
                  completed: true
                },
                { 
                  id: 'qf2', 
                  player1: { name: 'Maria Santos', seed: 'B1' }, 
                  player2: { name: 'Miguel Torres', seed: 'D2' },
                  score: '11-9, 9-11, 11-7',
                  winner: 'player1',
                  completed: true
                },
                { 
                  id: 'qf3', 
                  player1: { name: 'Carlos Rodriguez', seed: 'C1' }, 
                  player2: { name: 'Elena Cruz', seed: 'A2' },
                  score: '11-5, 11-3',
                  winner: 'player1',
                  completed: true
                },
                { 
                  id: 'qf4', 
                  player1: { name: 'Ana Reyes', seed: 'D1' }, 
                  player2: { name: 'Luis Chen', seed: 'B2' },
                  score: '11-7, 11-9',
                  winner: 'player1',
                  completed: true
                }
              ],
              semiFinals: [
                { 
                  id: 'sf1', 
                  player1: { name: 'John Doe', seed: 'QF1' }, 
                  player2: { name: 'Maria Santos', seed: 'QF2' },
                  score: '11-9, 11-13, 11-8',
                  winner: 'player1',
                  completed: true
                },
                { 
                  id: 'sf2', 
                  player1: { name: 'Carlos Rodriguez', seed: 'QF3' }, 
                  player2: { name: 'Ana Reyes', seed: 'QF4' },
                  score: '11-6, 11-4',
                  winner: 'player1',
                  completed: true
                }
              ],
              final: {
                id: 'final',
                player1: { name: 'John Doe', seed: 'SF1' },
                player2: { name: 'Carlos Rodriguez', seed: 'SF2' },
                score: '11-8, 9-11, 11-9',
                winner: 'player1',
                completed: true
              },
              thirdPlace: {
                id: 'thirdPlace',
                player1: { name: 'Maria Santos', seed: 'SF1-L' },
                player2: { name: 'Ana Reyes', seed: 'SF2-L' },
                score: '11-6, 11-8',
                winner: 'player1',
                completed: true
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
  };

  // Handle closing detailed view
  const handleCloseDetailedView = () => {
    setShowDetailedView(false);
    setSelectedTournament(null);
    setActiveTab('details'); // Reset to details tab
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

    try {
      // TODO: Replace with actual API call
      // await api.post(`/tournaments/${tournamentId}/register`);
      // Refresh tournaments after registration
      // await fetchTournaments();
      console.log('Registering for tournament:', tournamentId);
    } catch (err) {
      // Handle error
      console.error('Registration failed:', err);
    }
  };

  // Helper function to get tournament type icon
  const getTournamentTypeIcon = (type) => {
    switch (type) {
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
              <TournamentDetailTitle>
                <h1>{selectedTournament.name}</h1>
                <TournamentDetailType type={selectedTournament.tournamentType}>
                  <span>{getTournamentTypeIcon(selectedTournament.tournamentType)}</span>
                  {selectedTournament.tournamentType.charAt(0).toUpperCase() + selectedTournament.tournamentType.slice(1)} Tournament
                </TournamentDetailType>
              </TournamentDetailTitle>

              <TournamentDetailDescription>
                {selectedTournament.description}
              </TournamentDetailDescription>

              {/* Tab Navigation */}
              <TabNavigation>
                <TabButton 
                  $active={activeTab === 'details'} 
                  onClick={() => setActiveTab('details')}
                >
                  Tournament Details
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
                  Tournament Bracket
                </TabButton>
                <TabButton 
                  $active={activeTab === 'sponsors'} 
                  onClick={() => setActiveTab('sponsors')}
                >
                  Sponsors
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
                      Tournament Bracket
                    </TournamentDetailSectionTitle>
                    
                    {selectedTournament.tournamentBracket ? (
                      <>
                        {/* Group Stage Section */}
                        <GroupStageSection>
                          <div className="section-title">Group Stage Results</div>
                          <div className="groups-grid">
                            {Object.entries(selectedTournament.tournamentBracket.groupStage).map(([bracketKey, players]) => (
                              <GroupCard key={bracketKey}>
                                <GroupHeader>Bracket {bracketKey.slice(-1).toUpperCase()}</GroupHeader>
                                <StandingsTable>
                                  <div className="standings-header">
                                    <div>Player</div>
                                    <div>Wins</div>
                                    <div>Pts</div>
                                  </div>
                                  {players.map((player) => (
                                    <StandingsRow key={player.id} $qualified={player.position <= 2}>
                                      <div className="player-info">
                                        <div className="position">{player.position}</div>
                                        <div className="player-name">{player.name}</div>
                                      </div>
                                      <div className="wins">{player.wins}</div>
                                      <div className="points">{player.points}</div>
                                    </StandingsRow>
                                  ))}
                                </StandingsTable>
                              </GroupCard>
                            ))}
                          </div>
                          <div className="qualification-note">
                            ✅ Top 2 players from each bracket advance to Quarter-Finals
                          </div>
                        </GroupStageSection>

                        {/* Knockout Stage Bracket */}
                        <TournamentBracket>
                    <BracketContainer style={{ marginTop: '-100px' }}>
                            {/* Quarter Finals */}
                            <BracketColumn>
                              <BracketRound>
                                <h4>Quarter-Finals</h4>
                                <div className="round-subtitle">Top 8 Players</div>
                              </BracketRound>
                              {selectedTournament.tournamentBracket.knockoutStage.quarterFinals.map((match) => (
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
                              {selectedTournament.tournamentBracket.knockoutStage.semiFinals.map((match, index) => (
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <div className="championship-trophy">🏆</div>
                <BracketRound style={{ margin: 0 }}>
                  <h4>Championship</h4>
                  <div className="round-subtitle">Final Match</div>
                </BracketRound>
              </div>
                              {selectedTournament.tournamentBracket.knockoutStage.final && (
                                <MatchCard 
                                  className="championship-match" 
                                  $isWinner={selectedTournament.tournamentBracket.knockoutStage.final.completed}
                                >
                                  <div className="match-info">
                                    <div className="player-name">
                                      <span className="player-seed">W{selectedTournament.tournamentBracket.knockoutStage.final.player1.seed}</span>
                                      {selectedTournament.tournamentBracket.knockoutStage.final.player1.name}
                                    </div>
                                    {selectedTournament.tournamentBracket.knockoutStage.final.completed && (
                                      <div className="match-score">
                                        {selectedTournament.tournamentBracket.knockoutStage.final.winner === 'player1' ? '🥇' : '🥈'}
                                      </div>
                                    )}
                                  </div>
                                  <div className="match-info">
                                    <div className="player-name">
                                      <span className="player-seed">W{selectedTournament.tournamentBracket.knockoutStage.final.player2.seed}</span>
                                      {selectedTournament.tournamentBracket.knockoutStage.final.player2.name}
                                    </div>
                                    {selectedTournament.tournamentBracket.knockoutStage.final.completed && (
                                      <div className="match-score">
                                        {selectedTournament.tournamentBracket.knockoutStage.final.winner === 'player2' ? '🥇' : '🥈'}
                                      </div>
                                    )}
                                  </div>
                                  {selectedTournament.tournamentBracket.knockoutStage.final.completed && (
                                    <div className="match-result" style={{ fontWeight: 'bold', color: '#16a34a' }}>
                                      {selectedTournament.tournamentBracket.knockoutStage.final.score}
                                    </div>
                                  )}
                                </MatchCard>
                                            )}

              {/* Third Place Match */}
              {selectedTournament.tournamentBracket.knockoutStage.thirdPlace && (
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
                    $isWinner={selectedTournament.tournamentBracket.knockoutStage.thirdPlace.completed}
                    style={{ width: '100%' }}
                  >
                    <div className="match-info">
                      <div className="player-name">
                        <span className="player-seed">L{selectedTournament.tournamentBracket.knockoutStage.thirdPlace.player1.seed}</span>
                        {selectedTournament.tournamentBracket.knockoutStage.thirdPlace.player1.name}
                      </div>
                      {selectedTournament.tournamentBracket.knockoutStage.thirdPlace.completed && (
                        <div className="match-score">
                          {selectedTournament.tournamentBracket.knockoutStage.thirdPlace.winner === 'player1' ? '🥉' : ''}
                        </div>
                      )}
                    </div>
                    <div className="match-info">
                      <div className="player-name">
                        <span className="player-seed">L{selectedTournament.tournamentBracket.knockoutStage.thirdPlace.player2.seed}</span>
                        {selectedTournament.tournamentBracket.knockoutStage.thirdPlace.player2.name}
                      </div>
                      {selectedTournament.tournamentBracket.knockoutStage.thirdPlace.completed && (
                        <div className="match-score">
                          {selectedTournament.tournamentBracket.knockoutStage.thirdPlace.winner === 'player2' ? '🥉' : ''}
                        </div>
                      )}
                    </div>
                    {selectedTournament.tournamentBracket.knockoutStage.thirdPlace.completed && (
                      <div className="match-result" style={{ fontWeight: 'bold', color: '#16a34a' }}>
                        {selectedTournament.tournamentBracket.knockoutStage.thirdPlace.score}
                      </div>
                    )}
                  </MatchCard>
                </div>
              )}
                            </ChampionshipSection>
                    </BracketContainer>
                        </TournamentBracket>
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
                  </TournamentDetailSection>
                )}

                {activeTab === 'sponsors' && (
                  <TournamentDetailSection>
                    <TournamentDetailSectionTitle>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l7 7z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Tournament Sponsors
                    </TournamentDetailSectionTitle>
                    
                    <SponsorsGrid>
                      <SponsorCard>
                        <SponsorLogo>🏓</SponsorLogo>
                        <SponsorName>Pro Paddle Sports</SponsorName>
                        <SponsorDescription>Premium pickleball equipment and gear for players of all levels.</SponsorDescription>
                      </SponsorCard>
                      
                      <SponsorCard>
                        <SponsorLogo>⚡</SponsorLogo>
                        <SponsorName>Energy Plus</SponsorName>
                        <SponsorDescription>Sports nutrition and energy drinks to keep you performing at your best.</SponsorDescription>
                      </SponsorCard>
                      
                      <SponsorCard>
                        <SponsorLogo>🏥</SponsorLogo>
                        <SponsorName>SportsMed Clinic</SponsorName>
                        <SponsorDescription>Sports medicine and injury prevention services for athletes.</SponsorDescription>
                      </SponsorCard>
                      
                      <SponsorCard>
                        <SponsorLogo>👕</SponsorLogo>
                        <SponsorName>Athletic Wear Co.</SponsorName>
                        <SponsorDescription>High-performance athletic apparel and accessories for competitive sports.</SponsorDescription>
                      </SponsorCard>
                    </SponsorsGrid>
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
            <option value="1">Tier 1</option>
            <option value="2">Tier 2</option>
            <option value="3">Tier 3</option>
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
                <TournamentTypeDisplay type={tournament.tournamentType}>
                  {tournament.tournamentType.charAt(0).toUpperCase() + tournament.tournamentType.slice(1)} Tournament
                  {tournament.tournamentType === 'open' && ` - Tier ${tournament.tier}`}
                </TournamentTypeDisplay>
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
    </PageContainer>
  );
}

export default Tournament; 