import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 90px 24px 48px;
  animation: fadeIn 0.3s ease;

  @media (max-width: 768px) {
    padding: 72px 12px 32px;
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

const PageHeader = styled.div`
  margin-bottom: 40px;
  text-align: center;
  position: relative;
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
  position: relative;
  display: inline-block;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
  }
`;

const PageDescription = styled.p`
  color: #64748b;
  font-size: 1.1rem;
  max-width: 600px;
  line-height: 1.6;
  margin: 0 auto;
  text-align: center;
`;

const QuestionButton = styled.button`
  position: absolute;
  top: -8px;
  right: -30px;
  width: 22px;
  height: 22px;
  border-radius: 11px;
  background: #29ba9b;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(41, 186, 155, 0.2);

  &:hover {
    background: #22a085;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(41, 186, 155, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    font-size: 0.65rem;
    right: -25px;
    top: -6px;
  }
`;

const ModalOverlay = styled.div`
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
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: modalSlideIn 0.3s ease;

  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 768px) {
    padding: 24px;
    margin: 20px;
    max-width: calc(100vw - 40px);
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e2e8f0;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #234255;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: #f1f5f9;
  color: #64748b;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &:hover {
    background: #e2e8f0;
    color: #475569;
  }
`;

const PointsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const TableHeader = styled.th`
  background: #f8fafc;
  padding: 12px 8px;
  text-align: center;
  font-weight: 600;
  color: #475569;
  border: 1px solid #e2e8f0;
  font-size: 0.875rem;

  @media (max-width: 768px) {
    padding: 8px 4px;
    font-size: 0.75rem;
  }
`;

const TableCell = styled.td`
  padding: 12px 8px;
  text-align: center;
  border: 1px solid #e2e8f0;
  color: #334155;

  @media (max-width: 768px) {
    padding: 8px 4px;
    font-size: 0.8rem;
  }
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f8fafc;
  }

  &:hover {
    background: #f1f5f9;
  }
`;

const StageCell = styled(TableCell)`
  font-weight: 500;
  text-align: left;
  color: #234255;
`;

const LastUpdated = styled.div`
  color: #64748b;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 8px;
`;

const SearchContainer = styled.div`
  margin: 32px auto;
  max-width: 800px;
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const SearchBarWrapper = styled.div`
  position: relative;
  flex: 1;
  min-width: 250px;

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

const AgeFilterContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
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
  transition: all 0.2s ease;
  min-width: 120px;

  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  color: #1a1a1a;
  transition: all 0.2s ease;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  border-bottom: 1px solid #e2e8f0;
  overflow-x: auto;
  padding-bottom: 1px;
  -webkit-overflow-scrolling: touch;
  margin: 0 -12px 32px;
  padding: 0 12px 16px;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 4px;
    margin-bottom: 24px;
    padding-bottom: 12px;
  }
`;

const CategoryTab = styled.button`
  padding: 12px 24px;
  background: ${props => props.$active ? '#f8fafc' : 'transparent'};
  border: none;
  border-bottom: 2px solid ${props => props.$active ? '#29ba9b' : 'transparent'};
  color: ${props => props.$active ? '#29ba9b' : '#64748b'};
  font-weight: ${props => props.$active ? '600' : '500'};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  border-radius: 8px 8px 0 0;
  outline: none;
  
  &:hover {
    color: #29ba9b;
    background: ${props => props.$active ? '#f8fafc' : '#f1f5f9'};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px #29ba9b33;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 0.875rem;
  }
`;

const RankingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TopRankingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    margin-bottom: 12px;
  }
`;

const RankingsList = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  
  @media (max-width: 768px) {
    overflow-x: visible;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(50px, auto) minmax(200px, 2fr) minmax(60px, auto) minmax(80px, auto);
  padding: 16px 24px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
    font-weight: 600;
  color: #64748b;
  font-size: 0.875rem;
  align-items: center;
  min-height: 60px;
  min-width: min-content;
  width: 100%;
  
  & > div {
    display: flex;
    align-items: center;
    height: 100%;
    white-space: nowrap;
    padding-right: 16px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 40px 1fr 50px 60px;
    padding: 12px 8px;
    font-size: 0.75rem;
    min-height: 50px;
    min-width: auto;
    & > div {
      padding-right: 4px;
    }
  }
`;

const ListRow = styled.div`
  display: grid;
  grid-template-columns: minmax(50px, auto) minmax(200px, 2fr) minmax(60px, auto) minmax(80px, auto);
  padding: 16px 24px;
  align-items: flex-start;
  border-bottom: 1px solid #e2e8f0;
  transition: background-color 0.2s ease;
  min-height: 72px;
  min-width: min-content;
  width: 100%;
  
  & > div {
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 16px;
  }
  
  /* Apply nowrap only to non-player-info columns */
  & > div:not(:nth-child(2)) {
    white-space: nowrap;
  }
  
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f8fafc;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 40px 1fr 50px 60px;
    padding: 12px 8px;
    font-size: 0.875rem;
    min-height: 64px;
    min-width: auto;
    & > div {
      padding-right: 4px;
    }
  }
`;

const ListPlayerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const ListPlayerName = styled.div`
  font-weight: 500;
  color: #234255;
  min-width: 0;
  line-height: 1.3;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  max-width: 100%;
  text-align: left;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const ListPlayerAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #29ba9b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  flex-shrink: 0;
  margin-top: 2px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 0.8125rem;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 0.75rem;
  }
`;

const ListPlayerDetails = styled.div``;

const ListPlayerClub = styled.div`
  font-size: 0.75rem;
  color: #64748b;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const ListStat = styled.div`
  font-weight: 500;
  color: #234255;
  display: flex;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const ListStatPoints = styled.div`
  font-weight: 500;
  color: #000000;
  display: flex;
  align-items: center;
  height: 100%;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const ListRank = styled.div`
  font-weight: 600;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const PlayerCard = styled.div`
  background: #234255;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 12px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50,25 C45,25 35,30 35,50 C35,70 45,75 50,75 C55,75 65,70 65,50 C65,30 55,25 50,25 Z" fill="%23ffffff" opacity="0.1"/></svg>') no-repeat center center;
    background-size: 80% auto;
    opacity: 0.1;
  }

  ${props => props.$rank === 1 && `
    background: linear-gradient(135deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), linear-gradient(135deg, #CC8400 0%, #DAB000 50%, #CC8400 100%);
  `}

  ${props => props.$rank === 2 && `
    background: linear-gradient(135deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), linear-gradient(135deg, #5A6B73 0%, #9A9A9A 50%, #5A6B73 100%);
  `}

  ${props => props.$rank === 3 && `
    background: linear-gradient(135deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), linear-gradient(135deg, #6B3410 0%, #A66529 50%, #6B3410 100%);
  `}
`;

const RankBadge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  font-weight: 700;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.9);
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  margin-top: 8px;
`;

const PlayerAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 48px;
  color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 40px;
  }
`;

const PlayerDetails = styled.div`
  text-align: center;
`;

const PlayerName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin: 0 0 4px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const PlayerClub = styled.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 768px) {
    gap: 6px;
    margin-top: 12px;
  }
`;

const StatBox = styled.div`
  padding: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 6px;
  }
`;

const StatValue = styled.div`
  font-size: ${props => props.$large ? '1.25rem' : '1rem'};
  font-weight: 600;
  color: white;
  margin-bottom: 2px;
  
  @media (max-width: 768px) {
    font-size: ${props => props.$large ? '1.1rem' : '0.9rem'};
  }
`;

const StatLabel = styled.div`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const WinRateBar = styled.div`
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  margin-top: 8px;
  overflow: hidden;
`;

const WinRateFill = styled.div`
  height: 100%;
  background: #29ba9b;
  border-radius: 2px;
  width: ${props => props.$percentage}%;
  transition: width 1s ease;
`;

const LoadingState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: #64748b;
  font-size: 1.1rem;
`;

const ErrorState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  color: #ef4444;
  font-size: 1.1rem;
  text-align: center;
  flex-direction: column;
  gap: 16px;
`;

const RetryButton = styled.button`
  padding: 8px 16px;
  background: #fee2e2;
  color: #ef4444;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #fecaca;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
  padding: 16px;
`;

const PaginationButton = styled.button`
  padding: 8px 16px;
  background: ${props => props.$active ? '#29ba9b' : 'white'};
  color: ${props => props.$active ? 'white' : '#64748b'};
  border: 1px solid ${props => props.$active ? '#29ba9b' : '#e2e8f0'};
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    background: ${props => props.$active ? '#29ba9b' : '#f8fafc'};
    border-color: #29ba9b;
    color: ${props => props.$active ? 'white' : '#29ba9b'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      background: ${props => props.$active ? '#29ba9b' : 'white'};
      border-color: ${props => props.$active ? '#29ba9b' : '#e2e8f0'};
      color: ${props => props.$active ? 'white' : '#64748b'};
    }
  }
  
  @media (max-width: 768px) {
    width: auto;
    max-width: 120px;
    padding: 8px 12px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const PaginationInfo = styled.div`
  color: #64748b;
  font-size: 0.875rem;
  margin: 0 8px;
`;

function getInitials(name) {
  const nameParts = name.split(' ');
  let initials = nameParts[0][0]; // First letter of first name
  if (nameParts.length > 1) {
    initials += nameParts[1][0]; // First letter of second name if exists
  }
  return initials.toUpperCase();
}

function formatNumber(num) {
  return new Intl.NumberFormat().format(num);
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function Ranks() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('mens-singles');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const ITEMS_PER_PAGE = 17; // Show ranks 4-20 on first page (17 items)
  const adultAgeGroups = ['18+', '35+', '50+'];

  const isInAgeGroup = (playerAge, selectedGroup) => {
    if (!selectedGroup) return true;
    const minAge = parseInt(selectedGroup.replace('+', ''));
    return playerAge >= minAge;
  };

  const filterRankings = (rankings) => {
    if (!rankings) return [];
  
    // Normalize data to prevent undefined values
    const normalized = rankings.map(player => ({
      ...player,
      points: player.points ?? 0,
      wins: player.wins ?? 0,
      losses: player.losses ?? 0,
      gamesPlayed: player.gamesPlayed ?? 0,
      age: player.age ?? 0,
      name: player.name ?? '',
    }));
  
    // Check if this is a doubles category
    const currentCategory = categories.find(c => c.id === selectedCategory || c._id === selectedCategory);
    const isDoublesCategory = currentCategory?.name?.toLowerCase().includes('doubles');
  
    // Step 1: Filter by adult age (19+) - skip for doubles categories
    let filtered = isDoublesCategory ? normalized : normalized.filter(player => player.age >= 19);
  
    // Step 2: Filter by search + age group (skip age group filtering for doubles)
    filtered = filtered.filter(player => {
      const matchesSearch = !searchQuery || player.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesAgeGroup = isDoublesCategory ? true : isInAgeGroup(player.age, ageGroup);
      return matchesSearch && matchesAgeGroup;
    });
  
    // Step 3: Sort by points (highest first), but preserve existing ranks for tied players
    const sorted = [...filtered].sort((a, b) => {
      // If both players have the same points, preserve their existing rank order
      if (a.points === b.points) {
        return (a.rank || 0) - (b.rank || 0);
      }
      return b.points - a.points;
    });
  
    // Step 4: Assign rank only if not already assigned (preserve tied rankings)
    return sorted.map((player, index) => ({
      ...player,
      rank: player.rank || (index + 1)
    }));
  };
  
  useEffect(() => {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));

    fetchRankings();
  }, []);

  const fetchRankings = async () => {
    try {
      // Dummy data for all categories
      const dummyData = [
        {
          id: 'mens-singles',
          _id: 'mens-singles',
          name: "Men's Singles",
          rankings: [
            // Rank 1 - Juan Paulo Fermin (1725 points)
            {
              _id: '1',
              id: '1',
              rank: 1,
              name: 'Juan Paulo Fermin',
              age: 33,
              points: 1725,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/juan-paulo-fermin.jpg'
            },
            // Rank 2 - Patrick Jovino Flojo (1275 points)
            {
              _id: '2',
              id: '2',
              rank: 2,
              name: 'Patrick Jovino Flojo',
              age: 29,
              points: 1275,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/patrick-flojo.jpg'
            },
            // Rank 3 - Ken Unique Dela Cruz (1025 points)
            {
              _id: '3',
              id: '3',
              rank: 3,
              name: 'Ken Unique Dela Cruz',
              age: 25,
              points: 1025,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/ken-delacruz.JPG'
            },
            // Rank 4 - Cesar Malacaman (750 points)
            {
              _id: '4',
              id: '4',
              rank: 4,
              name: 'Ceasar Ian Malacaman',
              age: 24,
              points: 750,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 5 - Christian Josua Luna & Joma Pague (625 points) - tied
            {
              _id: '5',
              id: '5',
              rank: 5,
              name: 'Christian Josua Luna',
              age: 25,
              points: 625,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '6',
              id: '6',
              rank: 5,
              name: 'Joma Pague',
              age: 25,
              points: 625,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 6 - Bernard Kyle Valenzuela & Tim Polero (550 points) - tied
            {
              _id: '7',
              id: '7',
              rank: 6,
              name: 'Bernard Kyle Valenzuela',
              age: 25,
              points: 550,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '8',
              id: '8',
              rank: 6,
              name: 'Tim Polero',
              age: 32,
              points: 550,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 7 - Ck Marcelino, Elijah Arevalo & Ian Paulo Cortez (425 points) - tied
            {
              _id: '9',
              id: '9',
              rank: 7,
              name: 'Ck Marcelino',
              age: 20,
              points: 425,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '10',
              id: '10',
              rank: 7,
              name: 'Elijah Arevalo',
              age: 27,
              points: 425,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '11',
              id: '11',
              rank: 7,
              name: 'Ian Paulo Cortez',
              age: 26,
              points: 425,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 8 - King B. Veradio, Dino Jimenez, Von Carlo S. Saraza & Ryandhian Aquino (350 points) - tied
            {
              _id: '12',
              id: '12',
              rank: 8,
              name: 'King Veradio',
              age: 26,
              points: 350,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '13',
              id: '13',
              rank: 8,
              name: 'Dino Jimenez',
              age: 48,
              points: 350,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '14',
              id: '14',
              rank: 8,
              name: 'Von Carlo Saraza',
              age: 20,
              points: 350,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '15',
              id: '15',
              rank: 8,
              name: 'Ryandhian Aquino',
              age: 40,
              points: 350,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 9 - Aldus Dela Cruz & Dino Jimenez (150 points) - tied
            {
              _id: '16',
              id: '16',
              rank: 9,
              name: 'Aldus Dela Cruz',
              age: 27,
              points: 150,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '17',
              id: '17',
              rank: 9,
              name: 'Dino Jimenez',
              age: 48,
              points: 150,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 10 - Multiple players with 75 points - tied
            {
              _id: '18',
              id: '18',
              rank: 10,
              name: 'Raemon Oscar Bingcang',
              age: 26,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '19',
              id: '19',
              rank: 10,
              name: 'Pj San Felipe, Jr',
              age: 50,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '20',
              id: '20',
              rank: 10,
              name: 'Moses Dazo',
              age: 28,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '21',
              id: '21',
              rank: 10,
              name: 'Elvin Dela Cruz',
              age: 19,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '22',
              id: '22',
              rank: 10,
              name: 'Paolo De Dios',
              age: 27,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '23',
              id: '23',
              rank: 10,
              name: 'Simon Casutt',
              age: 39,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '24',
              id: '24',
              rank: 10,
              name: 'Chris Heirney Keefe Samriento',
              age: 15,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '25',
              id: '25',
              rank: 10,
              name: 'Nikko Almario',
              age: 26,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            }
          ]
        },
        {
          id: 'womens-singles',
          _id: 'womens-singles',
          name: "Women's Singles",
          rankings: [
            // Rank 1 - Noelle Nikki Camille Zoleta (1650 points)
            {
              _id: '1',
              id: '1',
              rank: 1,
              name: 'Noelle Nikki Camille Zoleta',
              age: 33,
              points: 1650,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/noelle-zoleta.JPG'
            },
            // Rank 2 - Winona P. Cabardo (1275 points)
            {
              _id: '2',
              id: '2',
              rank: 2,
              name: 'Winona P. Cabardo',
              age: 24,
              points: 1275,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/winona-cabardo.JPG'
            },
            // Rank 3 - Pat Raymundo (1025 points)
            {
              _id: '3',
              id: '3',
              rank: 3,
              name: 'Pat Raymundo',
              age: 23,
              points: 1025,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/pat-raymundo.JPG'
            },
            // Rank 4 - Tracy Santos (900 points)
            {
              _id: '4',
              id: '4',
              rank: 4,
              name: 'Tracy Santos',
              age: 45,
              points: 900,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 5 - Theresa Claire Nacito (150 points)
            {
              _id: '5',
              id: '5',
              rank: 5,
              name: 'Theresa Claire Nacito',
              age: 21,
              points: 150,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 6 - Melanie V. Cadag & Grace Woo (75 points) - tied
            {
              _id: '6',
              id: '6',
              rank: 6,
              name: 'Melanie Cadag',
              age: 44,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '7',
              id: '7',
              rank: 6,
              name: 'Grace Woo',
              age: 41,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            }
          ]
        },
        {
          id: 'mens-doubles',
          _id: 'mens-doubles',
          name: "Men's Doubles",
          rankings: [
            // Rank 1 - Kim Saraza & Davis Alano (1800 points)
            { id: 'md-1', rank: 1, name: 'Kim Saraza', age: 33, points: 1800, gamesPlayed: 0, profilePicture: '/kim-saraza.JPG' },
            { id: 'md-2', rank: 1, name: 'Davis Alano', age: 35, points: 1800, gamesPlayed: 0, profilePicture: '/davis-alano.JPG' },
            
            // Rank 2 - Ken Unique Dela Cruz & Nik Isagan (1275 points)
            { id: 'md-3', rank: 2, name: 'Ken Unique Dela Cruz', age: 25, points: 1275, gamesPlayed: 0, profilePicture: '/ken-delacruz.JPG' },
            { id: 'md-4', rank: 2, name: 'Nik Isagan', age: 24, points: 1275, gamesPlayed: 0, profilePicture: '/nik-isagan.JPG' },
            
            // Rank 3 - Juan Paulo Fermin & Cesar Malacaman (1100 points)
            { id: 'md-5', rank: 3, name: 'Juan Paulo Fermin', age: 33, points: 1200, gamesPlayed: 0, profilePicture: '/juan-paulo-fermin.jpg' },
            { id: 'md-6', rank: 3, name: 'Ceasar Ian Malacaman', age: 24, points: 1100, gamesPlayed: 0, profilePicture: '/cesar-malacaman.JPG' },
            
            // Rank 4 - Jed Cyrus Juario & Kent Octavio (825 points)
            { id: 'md-7', rank: 4, name: 'Jed Cyrus Juario', age: 22, points: 825, gamesPlayed: 0 },
            { id: 'md-8', rank: 4, name: 'Kent Octavo', age: 28, points: 825, gamesPlayed: 0 },
            
            // Rank 5 - Jules Quezada & Joma Pague (625 points)
            { id: 'md-9', rank: 5, name: 'Jules Quezada', age: 31, points: 625, gamesPlayed: 0 },
            { id: 'md-10', rank: 5, name: 'Joma Pague', age: 25, points: 625, gamesPlayed: 0 },
            
            // Rank 5 - Elijah S Arevalo & Kyle Valenzuela (625 points) - tied
            { id: 'md-11', rank: 5, name: 'Elijah Arevalo', age: 27, points: 625, gamesPlayed: 0 },
            { id: 'md-12', rank: 5, name: 'Kyle Valenzuela', age: 25, points: 625, gamesPlayed: 0 },
            
            // Rank 5 - Luis Angelo Peña & Francis Al Lera (625 points) - tied
            { id: 'md-13', rank: 5, name: 'Luis Angelo Peña', age: 27, points: 625, gamesPlayed: 0 },
            { id: 'md-14', rank: 5, name: 'Francis Al Lera', age: 27, points: 625, gamesPlayed: 0 },
            
            // Rank 5 - Christian Josua Luna & Paulo Ian Cortez (625 points) - tied
            { id: 'md-15', rank: 5, name: 'Christian Josua Luna', age: 25, points: 625, gamesPlayed: 0 },
            { id: 'md-16', rank: 5, name: 'Paulo Ian Cortez', age: 26, points: 625, gamesPlayed: 0 },
            
            // Rank 6 - Aldus Dela Cruz & Gee Serino (225 points)
            { id: 'md-17', rank: 6, name: 'Aldus Dela Cruz', age: 27, points: 225, gamesPlayed: 0 },
            { id: 'md-18', rank: 6, name: 'Gee Serino', age: 24, points: 225, gamesPlayed: 0 },
            
            // Rank 6 - Moses Dazo & CK Marcelino (225 points) - tied
            { id: 'md-19', rank: 6, name: 'Moses Dazo', age: 28, points: 225, gamesPlayed: 0 },
            { id: 'md-20', rank: 6, name: 'CK Marcelino', age: 20, points: 225, gamesPlayed: 0 },
            
            // Rank 7 - Dino Jimenez & Tim Polero (150 points)
            { id: 'md-21', rank: 7, name: 'Dino Jimenez', age: 48, points: 150, gamesPlayed: 0 },
            { id: 'md-22', rank: 7, name: 'Tim Polero', age: 32, points: 150, gamesPlayed: 0 },
            
            // Rank 7 - Austin Tecson & Johny Aniana (150 points) - tied
            { id: 'md-23', rank: 7, name: 'Austin Tecson', age: 31, points: 150, gamesPlayed: 0 },
            { id: 'md-24', rank: 7, name: 'Johny Aniana', age: 31, points: 150, gamesPlayed: 0 },
            
            // Rank 8 - Banjo Oliver & Ben Romualdez (75 points)
            { id: 'md-25', rank: 8, name: 'Banjo Oliver', age: 27, points: 75, gamesPlayed: 0 },
            { id: 'md-26', rank: 8, name: 'Ben Romualdez', age: 27, points: 75, gamesPlayed: 0 },
            
            // Rank 8 - Jeff Gonzales & Luca Romualdez (75 points) - tied
            { id: 'md-27', rank: 8, name: 'Jeff Gonzales', age: 36, points: 75, gamesPlayed: 0 },
            { id: 'md-28', rank: 8, name: 'Luca Romualdez', age: 24, points: 75, gamesPlayed: 0 },
            
            // Rank 8 - Andy Aala & Angelo Bauso (75 points) - tied
            { id: 'md-29', rank: 8, name: 'Andy Aala', age: 40, points: 75, gamesPlayed: 0 },
            { id: 'md-30', rank: 8, name: 'Angelo Bauso', age: 41, points: 75, gamesPlayed: 0 },
            
            // Rank 8 - Patrick Jovino Flojo & Jed Justin Labasano (75 points) - tied
            { id: 'md-31', rank: 8, name: 'Patrick Jovino Flojo', age: 29, points: 75, gamesPlayed: 0 },
            { id: 'md-32', rank: 8, name: 'Jed Justin Labasano', age: 23, points: 75, gamesPlayed: 0 }
          ]
        },
        {
          id: 'womens-doubles',
          _id: 'womens-doubles',
          name: "Women's Doubles",
          rankings: [
            // Rank 1 - Patricia Raymundo & Medelene Ramos-Saraza (1875 points) - tied
            {
              _id: '1',
              id: '1',
              rank: 1,
              name: 'Patricia Raymundo',
              age: 23,
              points: 1875,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/pat-raymundo.JPG'
            },
            {
              _id: '2',
              id: '2',
              rank: 1,
              name: 'Medelene Ramos-Saraza',
              age: 32,
              points: 1875,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/medelene-saraza.JPG'
            },
            // Rank 2 - Honey Mae Gilles & Hizen Melendez (1350 points) - tied
            {
              _id: '3',
              id: '3',
              rank: 2,
              name: 'Honey Mae Gilles',
              age: 33,
              points: 1350,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/honey-gilles.JPG'
            },
            {
              _id: '4',
              id: '4',
              rank: 2,
              name: 'Hizen Melendez',
              age: 24,
              points: 1350,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/hizen-melendez.JPG'
            },
            // Rank 3 - Mikhyla Julianne Cruz & Winona Cabardo (1025 points) - tied
            {
              _id: '5',
              id: '5',
              rank: 3,
              name: 'Mikhyla Julianne Cruz',
              age: 38,
              points: 1025,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/mikhyla-cruz.JPG'
            },
            {
              _id: '6',
              id: '6',
              rank: 3,
              name: 'Winona Cabardo',
              age: 24,
              points: 1025,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/winona-cabardo.JPG'
            },
            // Rank 4 - Tracy Santos & Julie Ebio (750 points) - tied
            {
              _id: '7',
              id: '7',
              rank: 4,
              name: 'Tracy Santos',
              age: 45,
              points: 750,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '8',
              id: '8',
              rank: 4,
              name: 'Julie Ebio',
              age: 47,
              points: 750,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 5 - Niña Jessa Marie Ladera & Junnelyn Polito (75 points) - tied
            {
              _id: '9',
              id: '9',
              rank: 5,
              name: 'Niña Jessa Marie Ladera',
              age: 32,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '10',
              id: '10',
              rank: 5,
              name: 'Junnelyn Polito',
              age: 30,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            }
          ]
        },
        {
          id: 'mens-mixed-doubles',
          _id: 'mens-mixed-doubles',
          name: "Men's Mixed Doubles",
          rankings: [
            // Rank 1 - Ken Unique Dela Cruz (1725 points)
            {
              _id: '1',
              id: '1',
              rank: 1,
              name: 'Ken Unique Dela Cruz',
              age: 25,
              points: 1725,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/ken-delacruz.JPG'
            },
            // Rank 2 - Davis Alano (1275 points)
            {
              _id: '2',
              id: '2',
              rank: 2,
              name: 'Davis Alano',
              age: 35,
              points: 1275,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/davis-alano.JPG'
            },
            // Rank 3 - Kim Saraza (1025 points)
            {
              _id: '3',
              id: '3',
              rank: 3,
              name: 'Kim Saraza',
              age: 33,
              points: 1025,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/kim-saraza.JPG'
            },
            // Rank 4 - Gee Serino (825 points)
            {
              _id: '4',
              id: '4',
              rank: 4,
              name: 'Gee Serino',
              age: 24,
              points: 825,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 5 - Ceasar Ian Malacaman, Moses Dazo, Jed Juario, Elijah Arevalo (550 points) - tied
            {
              _id: '5',
              id: '5',
              rank: 5,
              name: 'Ceasar Ian Malacaman',
              age: 24,
              points: 550,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '6',
              id: '6',
              rank: 5,
              name: 'Moses Dazo',
              age: 28,
              points: 550,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '7',
              id: '7',
              rank: 5,
              name: 'Jed Cyrus Juario',
              age: 22,
              points: 550,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '8',
              id: '8',
              rank: 5,
              name: 'Elijah Arevalo',
              age: 27,
              points: 550,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 6 - Juan Paulo Fermin, Jerome Nathan A. Silva, Jules Simeon, Aldus Dela Cruz (75 points) - tied
            {
              _id: '9',
              id: '9',
              rank: 6,
              name: 'Juan Paulo Fermin',
              age: 33,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              avatar: '/backend/uploads/profile-pictures/juan-paulo-fermin.jpg'
            },
            {
              _id: '10',
              id: '10',
              rank: 6,
              name: 'Jerome Nathan Silva',
              age: 28,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '11',
              id: '11',
              rank: 6,
              name: 'Jules Simeon',
              age: 50,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            {
              _id: '12',
              id: '12',
              rank: 6,
              name: 'Aldus Dela Cruz',
              age: 27,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            }
          ]
        },
        {
          id: 'womens-mixed-doubles',
          _id: 'womens-mixed-doubles',
          name: "Women's Mixed Doubles",
          rankings: [
            // Rank 1 - Patricia Raymundo (1725 points)
            {
              _id: '1',
              id: '1',
              rank: 1,
              name: 'Patricia Raymundo',
              age: 23,
              points: 1725,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/pat-raymundo.JPG'
            },
            // Rank 2 - Medelene Ramos-Saraza (1275 points)
            {
              _id: '2',
              id: '2',
              rank: 2,
              name: 'Medelene Ramos-Saraza',
              age: 32,
              points: 1275,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/medelene-saraza.JPG'
            },
            // Rank 3 - Noelle Nikki Camille Zoleta (1025 points)
            {
              _id: '3',
              id: '3',
              rank: 3,
              name: 'Noelle Nikki Camille Zoleta',
              age: 33,
              points: 1025,
              wins: 0,
              losses: 0,
              gamesPlayed: 0,
              profilePicture: '/noelle-zoleta.JPG'
            },
            // Rank 4 - Niña Jessa Marie Ladera (825 points)
            {
              _id: '4',
              id: '4',
              rank: 4,
              name: 'Niña Jessa Marie Ladera',
              age: 32,
              points: 825,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 5 (tied) - Winona P. Cabardo (550 points)
            {
              _id: '5',
              id: '5',
              rank: 5,
              name: 'Winona P. Cabardo',
              age: 24,
              points: 550,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 5 (tied) - Sofia Nipa (550 points)
            {
              _id: '6',
              id: '6',
              rank: 5,
              name: 'Sofia Nipa',
              age: 22,
              points: 550,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 5 (tied) - Novi Melendez (550 points)
            {
              _id: '7',
              id: '7',
              rank: 5,
              name: 'Hizen Novi Melendez',
              age: 24,
              points: 550,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 5 (tied) - Mikhyla Julianne Ebriega Cruz (550 points)
            {
              _id: '8',
              id: '8',
              rank: 5,
              name: 'Mikhyla Julianne Ebriega Cruz',
              age: 38,
              points: 550,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 6 (tied) - Honey Mae Gilles (75 points)
            {
              _id: '9',
              id: '9',
              rank: 6,
              name: 'Honey Mae Gilles',
              age: 33,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 6 (tied) - Theresa Claire Nacito (75 points)
            {
              _id: '10',
              id: '10',
              rank: 6,
              name: 'Theresa Claire Nacito',
              age: 21,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 6 (tied) - Tracy Santos (75 points)
            {
              _id: '11',
              id: '11',
              rank: 6,
              name: 'Tracy Santos',
              age: 45,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            },
            // Rank 6 (tied) - Chloe Mae Saraza (75 points)
            {
              _id: '12',
              id: '12',
              rank: 6,
              name: 'Chloe Mae Saraza',
              age: 24,
              points: 75,
              wins: 0,
              losses: 0,
              gamesPlayed: 0
            }
          ]
        }
      ];

      setCategories(dummyData);
      setSelectedCategory(dummyData[0]?.id || dummyData[0]?._id);
    } catch (err) {
      console.error("Ranking fetch error:", err);
      setError("Failed to fetch rankings. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const renderRankingsList = (rankings) => {
    const filteredRankings = filterRankings(rankings);
    // Filter out players that are already shown in the top cards (rank <= 3)
    const remainingPlayers = filteredRankings.filter(player => player.rank > 3);
    
    if (filteredRankings.length === 0) {
      return (
        <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
          No players found matching your search criteria.
        </div>
      );
    }

    // Calculate pagination
    const totalPages = Math.ceil(remainingPlayers.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentPagePlayers = remainingPlayers.slice(startIndex, endIndex);

    const handlePreviousPage = () => {
      setCurrentPage(prev => Math.max(1, prev - 1));
    };

    const handleNextPage = () => {
      setCurrentPage(prev => Math.min(totalPages, prev + 1));
    };

    return (
      <>
        <RankingsList>
          <ListHeader>
            <div>Rank</div>
            <div>Player</div>
            <div>Age</div>
            <div>Points</div>
          </ListHeader>
          {currentPagePlayers.map((player) => (
            <ListRow key={player._id || player.id}>
              <ListRank>{player.rank}</ListRank>
              <ListPlayerInfo>
                <ListPlayerAvatar>
                  {player.profilePicture ? (
                    <img src={player.profilePicture} alt={player.name} />
                  ) : (
                    getInitials(player.name)
                  )}
                </ListPlayerAvatar>
                <ListPlayerName>{player.name}</ListPlayerName>
              </ListPlayerInfo>
              <ListStat>{player.age ?? '—'}</ListStat>
               <ListStatPoints>{player.points === 0 ? '—' : formatNumber(player.points ?? 0)}</ListStatPoints>
            </ListRow>
          ))}
        </RankingsList>
        
        {totalPages > 1 && (
          <PaginationContainer>
            <PaginationButton 
              onClick={handlePreviousPage} 
              disabled={currentPage === 1}
            >
              Previous
            </PaginationButton>
            
            <PaginationInfo>
              Page {currentPage} of {totalPages}<br />({remainingPlayers.length} players)
            </PaginationInfo>
            
            <PaginationButton 
              onClick={handleNextPage} 
              disabled={currentPage === totalPages}
            >
              Next
            </PaginationButton>
          </PaginationContainer>
        )}
      </>
    );
  };
  
  if (loading) {
    return (
      <PageContainer>
        <LoadingState>Loading rankings...</LoadingState>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <ErrorState>
          <div>{error}</div>
          <RetryButton onClick={fetchRankings}>Try Again</RetryButton>
        </ErrorState>
      </PageContainer>
    );
  }

  const currentCategory = categories.find(c => c.id === selectedCategory || c._id === selectedCategory);
  const filteredRankings = currentCategory ? filterRankings(currentCategory.rankings) : [];
  
  // Get all players with rank 3 or lower for the top display
  const topRankPlayers = filteredRankings.filter(player => player.rank <= 3);

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>
          Player Rankings
          <QuestionButton onClick={() => setShowModal(true)}>
            ?
          </QuestionButton>
        </PageTitle>
        <PageDescription>
          Track the performance and standings of pickleball players across different categories.
        </PageDescription>
        <LastUpdated>Last Updated: {currentDate}</LastUpdated>
        <SearchContainer>
          <SearchBarWrapper>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Search by player name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchBarWrapper>
          <AgeFilterContainer>
            <Select
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
            >
              <option value="">All Ages</option>
              {adultAgeGroups.map(age => (
                <option key={age} value={age}>{age}</option>
              ))}
            </Select>
          </AgeFilterContainer>
        </SearchContainer>
      </PageHeader>

      <CategoryTabs>
        {categories.map(category => (
          <CategoryTab
            key={category.id || category._id}
            $active={category.id === selectedCategory || category._id === selectedCategory}
            onClick={() => setSelectedCategory(category.id || category._id)}
          >
            {category.name}
          </CategoryTab>
        ))}
      </CategoryTabs>

      <RankingsContainer>
        <TopRankingsGrid>
          {topRankPlayers.map((player) => (
            <PlayerCard key={player.id} $rank={player.rank}>
              <RankBadge>{player.rank}</RankBadge>
              <PlayerInfo>
                <PlayerAvatar>
                  {player.profilePicture ? (
                    <img src={player.profilePicture} alt={player.name} />
                  ) : (
                    getInitials(player.name)
                  )}
                </PlayerAvatar>
                <PlayerDetails>
                  <PlayerName>{player.name}</PlayerName>
                </PlayerDetails>
              </PlayerInfo>
              <StatsGrid>
                <StatBox>
                  <StatValue>{player.age ?? '—'}</StatValue>
                  <StatLabel>Age</StatLabel>
                </StatBox>
                <StatBox>
                  <StatValue>{player.points === 0 ? '—' : formatNumber(player.points ?? 0)}</StatValue>
                  <StatLabel>Points</StatLabel>
                </StatBox>
              </StatsGrid>
            </PlayerCard>
          ))}
        </TopRankingsGrid>

        {renderRankingsList(currentCategory?.rankings || [])}
      </RankingsContainer>

      {/* Modal for PPL Tournament Point System */}
      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>PPL Sanctioned Tournament Point System</ModalTitle>
              <CloseButton onClick={() => setShowModal(false)}>
                ×
              </CloseButton>
            </ModalHeader>
            
            <p style={{ color: '#64748b', marginBottom: '16px', textAlign: 'center' }}>
              Points are awarded based on tournament tier and final placement (Open Category Only)
            </p>
            
            <PointsTable>
              <thead>
                <tr>
                  <TableHeader>Stage</TableHeader>
                  <TableHeader>Tier 3 (Nationals)</TableHeader>
                  <TableHeader>Tier 2 (Regionals)</TableHeader>
                  <TableHeader>Tier 1 (Locals)</TableHeader>
                </tr>
              </thead>
              <tbody>
                <TableRow>
                  <StageCell>Champion</StageCell>
                  <TableCell>2000 pts</TableCell>
                  <TableCell>1500 pts</TableCell>
                  <TableCell>1000 pts</TableCell>
                </TableRow>
                <TableRow>
                  <StageCell>1st Runner-Up</StageCell>
                  <TableCell>1400 pts</TableCell>
                  <TableCell>1050 pts</TableCell>
                  <TableCell>700 pts</TableCell>
                </TableRow>
                <TableRow>
                  <StageCell>2nd Runner-up</StageCell>
                  <TableCell>1000 pts</TableCell>
                  <TableCell>800pts</TableCell>
                  <TableCell>500 pts</TableCell>
                </TableRow>
                <TableRow>
                  <StageCell>Semifinalist</StageCell>
                  <TableCell>800 pts</TableCell>
                  <TableCell>600 pts</TableCell>
                  <TableCell>400 pts</TableCell>
                </TableRow>
                <TableRow>
                  <StageCell>Quarterfinalist</StageCell>
                  <TableCell>600 pts</TableCell>
                  <TableCell>400 pts</TableCell>
                  <TableCell>200 pts</TableCell>
                </TableRow>
                <TableRow>
                  <StageCell>Round of 16</StageCell>
                  <TableCell>300pts</TableCell>
                  <TableCell>200pts</TableCell>
                  <TableCell>—</TableCell>
                </TableRow>
                <TableRow>
                  <StageCell>RR Win</StageCell>
                  <TableCell>100 pts</TableCell>
                  <TableCell>75 pts</TableCell>
                  <TableCell>50 pts</TableCell>
                </TableRow>
              </tbody>
            </PointsTable>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
  );
}

export default Ranks;