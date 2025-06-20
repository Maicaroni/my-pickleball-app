import { useState, useEffect } from 'react';
import styled from 'styled-components';

/**
 * @typedef {Object} PlayerRank
 * @property {string} id - Unique identifier
 * @property {string} name - Player's name
 * @property {string} avatarUrl - Player's avatar URL
 * @property {number} rank - Current numerical rank
 * @property {number} points - Total ranking points
 * @property {number} gamesPlayed - Total games played
 * @property {number} wins - Total wins
 * @property {number} losses - Total losses
 * @property {string} winRate - Win rate percentage
 * @property {string} club - Player's affiliated club
 */

/**
 * @typedef {Object} RankingCategory
 * @property {string} id - Category identifier
 * @property {string} name - Category name (e.g., "Men's Singles")
 * @property {PlayerRank[]} rankings - List of player rankings
 * @property {string} lastUpdated - ISO date string
 */

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
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #234255;
  margin-bottom: 12px;
  font-weight: 800;
  letter-spacing: -0.5px;
`;

const PageDescription = styled.p`
  color: #64748b;
  font-size: 1.1rem;
  max-width: 600px;
  line-height: 1.6;
  margin: 0 auto;
  text-align: center;
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
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(50px, auto) minmax(200px, 2fr) minmax(60px, auto) minmax(80px, auto) minmax(100px, auto);
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
    padding: 12px 16px;
    font-size: 0.75rem;
    min-height: 50px;
    & > div {
      padding-right: 12px;
    }
  }
`;

const ListRow = styled.div`
  display: grid;
  grid-template-columns: minmax(50px, auto) minmax(200px, 2fr) minmax(60px, auto) minmax(80px, auto) minmax(100px, auto);
  padding: 16px 24px;
  align-items: center;
  border-bottom: 1px solid #e2e8f0;
  transition: background-color 0.2s ease;
  min-height: 72px;
  min-width: min-content;
  width: 100%;
  
  & > div {
    display: flex;
    align-items: center;
    height: 100%;
    white-space: nowrap;
    padding-right: 16px;
  }
  
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f8fafc;
  }
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 0.875rem;
    min-height: 64px;
    & > div {
      padding-right: 12px;
    }
  }
`;

const ListPlayerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const ListPlayerName = styled.div`
  font-weight: 500;
  color: #234255;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  
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

const ListRank = styled.div`
  font-weight: 600;
  color: #64748b;
  display: flex;
  align-items: center;
  height: 100%;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const PlayerCard = styled.div`
  background: #234255;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 16px;
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
    background: linear-gradient(135deg, #234255 0%, #29ba9b 100%);
  `}

  ${props => props.$rank === 2 && `
    background: linear-gradient(135deg, #234255 0%, #64748b 100%);
  `}

  ${props => props.$rank === 3 && `
    background: linear-gradient(135deg, #234255 0%, #cd7f32 100%);
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
  gap: 12px;
  margin-top: 12px;
`;

const PlayerAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 8px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  font-size: 24px;
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
  grid-template-columns: repeat(3, 1fr);
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

function getInitials(name) {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
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

/**
 * Ranks Component
 * 
 * Displays player rankings by category
 * 
 * API Endpoints needed:
 * - GET /api/rankings - Get rankings for all categories
 * - GET /api/rankings/:categoryId - Get rankings for specific category
 * - GET /api/players/:id/history - Get player's ranking history
 * 
 * Query Parameters:
 * - category: Filter by category
 * - search: Search players
 * - limit: Items per page
 * - page: Pagination
 */
function Ranks() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('mens-singles');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [ageCategory, setAgeCategory] = useState('adult');
  const [ageGroup, setAgeGroup] = useState('');

  const adultAgeGroups = ['19+', '35+', '50+', '60+', '70+', '75+', '80+'];
  const juniorAgeGroups = ['18 and Under', '16 and Under', '14 and Under', '12 and Under'];

  // Helper function to check if a player's age matches the selected age group
  const isInAgeGroup = (playerAge, selectedGroup) => {
    if (!selectedGroup) return true; // If no age group selected, include all
    
    if (ageCategory === 'adult') {
      const minAge = parseInt(selectedGroup.replace('+', '')); // Remove the '+' and parse
      return playerAge >= minAge;
    } else {
      // For junior category
      if (!selectedGroup) return playerAge <= 18;
      const maxAge = parseInt(selectedGroup.split(' ')[0]);
      return playerAge <= maxAge;
    }
  };

  const filterRankings = (rankings) => {
    if (!rankings) return [];
    
    // First filter by age category (adult/junior)
    let filtered = rankings.filter(player => {
      if (ageCategory === 'adult') {
        return player.age >= 19;
      } else {
        return player.age <= 18;
      }
    });

    // Then filter by specific age group and search query
    filtered = filtered.filter(player => {
      const matchesSearch = !searchQuery || 
        player.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesAgeGroup = isInAgeGroup(
        player.age,
        ageGroup
      );

      return matchesSearch && matchesAgeGroup;
    });

    // Sort by points (assuming higher points = better rank)
    const sorted = [...filtered].sort((a, b) => b.points - a.points);

    // Update ranks based on filtered and sorted order
    return sorted.map((player, index) => ({
      ...player,
      rank: index + 1
    }));
  };

  useEffect(() => {
    // Set current date in the format "Month DD, YYYY"
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));
    
    fetchRankings();
  }, []);

  /**
   * Fetches rankings data
   * @async
   */
  const fetchRankings = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = [
        {
          id: 'mens-singles',
          name: "MEN'S SINGLES",
          lastUpdated: '2024-01-20T10:00:00Z',
          rankings: [
            {
              id: '1',
              name: 'Juan Dela Cruz',
              age: 28,
              rank: 1,
              points: 2500,
              gamesPlayed: 45,
              wins: 38,
              losses: 7,
              winRate: '84.4'
            },
            {
              id: '2',
              name: 'Mike Santos',
              age: 35,
              rank: 2,
              points: 2350,
              gamesPlayed: 42,
              wins: 34,
              losses: 8,
              winRate: '81.0'
            },
            {
              id: '3',
              name: 'Carlo Garcia',
              age: 45,
              rank: 3,
              points: 2200,
              gamesPlayed: 38,
              wins: 30,
              losses: 8,
              winRate: '78.9'
            },
            {
              id: '4',
              name: 'Miguel Lopez',
              age: 61,
              rank: 4,
              points: 2100,
              gamesPlayed: 35,
              wins: 27,
              losses: 8,
              winRate: '77.1'
            },
            {
              id: 'j1',
              name: 'Alex Santos',
              age: 15,
              rank: 5,
              points: 1800,
              gamesPlayed: 30,
              wins: 25,
              losses: 5,
              winRate: '83.3'
            },
            {
              id: 'j2',
              name: 'Marco Reyes',
              age: 13,
              rank: 6,
              points: 1700,
              gamesPlayed: 28,
              wins: 22,
              losses: 6,
              winRate: '78.6'
            }
          ]
        },
        {
          id: 'womens-singles',
          name: "WOMEN'S SINGLES",
          lastUpdated: '2024-01-20T10:00:00Z',
          rankings: [
            {
              id: '1',
              name: 'Maria Santos',
              age: 28,
              rank: 1,
              points: 2450,
              gamesPlayed: 43,
              wins: 36,
              losses: 7,
              winRate: '83.7'
            },
            {
              id: '2',
              name: 'Ana Garcia',
              age: 45,
              rank: 2,
              points: 2300,
              gamesPlayed: 40,
              wins: 32,
              losses: 8,
              winRate: '80.0'
            },
            {
              id: '3',
              name: 'Sofia Reyes',
              age: 52,
              rank: 3,
              points: 2150,
              gamesPlayed: 37,
              wins: 29,
              losses: 8,
              winRate: '78.4'
            },
            {
              id: '4',
              name: 'Isabella Tan',
              age: 71,
              rank: 4,
              points: 2000,
              gamesPlayed: 30,
              wins: 22,
              losses: 8,
              winRate: '73.3'
            },
            {
              id: 'j1',
              name: 'Alexandra Santos',
              age: 15,
              rank: 5,
              points: 1850,
              gamesPlayed: 32,
              wins: 26,
              losses: 6,
              winRate: '81.3'
            },
            {
              id: 'j2',
              name: 'Diana Garcia',
              age: 17,
              rank: 6,
              points: 1750,
              gamesPlayed: 29,
              wins: 23,
              losses: 6,
              winRate: '79.3'
            }
          ]
        },
        {
          id: 'mens-doubles',
          name: "MEN'S DOUBLES",
          lastUpdated: '2024-01-20T10:00:00Z',
          rankings: [
            {
              id: '1',
              name: 'Juan Dela Cruz',
              age: 28,
              rank: 1,
              points: 2600,
              gamesPlayed: 50,
              wins: 42,
              losses: 8,
              winRate: '84.0'
            },
            {
              id: '2',
              name: 'Mike Santos',
              age: 35,
              rank: 2,
              points: 2400,
              gamesPlayed: 45,
              wins: 36,
              losses: 9,
              winRate: '80.0'
            },
            {
              id: '3',
              name: 'Carlo Garcia',
              age: 45,
              rank: 3,
              points: 2250,
              gamesPlayed: 40,
              wins: 31,
              losses: 9,
              winRate: '77.5'
            },
            {
              id: '4',
              name: 'Miguel Lopez',
              age: 61,
              rank: 4,
              points: 2150,
              gamesPlayed: 38,
              wins: 29,
              losses: 9,
              winRate: '76.3'
            },
            {
              id: 'j1',
              name: 'Alex Santos',
              age: 15,
              rank: 5,
              points: 1900,
              gamesPlayed: 35,
              wins: 27,
              losses: 8,
              winRate: '77.1'
            }
          ]
        },
        {
          id: 'womens-doubles',
          name: "WOMEN'S DOUBLES",
          lastUpdated: '2024-01-20T10:00:00Z',
          rankings: [
            {
              id: '1',
              name: 'Maria Santos',
              age: 28,
              rank: 1,
              points: 2550,
              gamesPlayed: 48,
              wins: 40,
              losses: 8,
              winRate: '83.3'
            },
            {
              id: '2',
              name: 'Ana Garcia',
              age: 45,
              rank: 2,
              points: 2350,
              gamesPlayed: 43,
              wins: 34,
              losses: 9,
              winRate: '79.1'
            },
            {
              id: '3',
              name: 'Sofia Reyes',
              age: 52,
              rank: 3,
              points: 2200,
              gamesPlayed: 40,
              wins: 31,
              losses: 9,
              winRate: '77.5'
            },
            {
              id: '4',
              name: 'Isabella Tan',
              age: 71,
              rank: 4,
              points: 2100,
              gamesPlayed: 35,
              wins: 27,
              losses: 8,
              winRate: '77.1'
            },
            {
              id: 'j1',
              name: 'Alexandra Santos',
              age: 15,
              rank: 5,
              points: 1950,
              gamesPlayed: 32,
              wins: 25,
              losses: 7,
              winRate: '78.1'
            }
          ]
        },
        {
          id: 'mixed-doubles',
          name: "MIXED DOUBLES",
          lastUpdated: '2024-01-20T10:00:00Z',
          rankings: [
            {
              id: '1',
              name: 'Juan Dela Cruz',
              age: 28,
              rank: 1,
              points: 2650,
              gamesPlayed: 52,
              wins: 44,
              losses: 8,
              winRate: '84.6'
            },
            {
              id: '2',
              name: 'Maria Santos',
              age: 28,
              rank: 2,
              points: 2600,
              gamesPlayed: 50,
              wins: 42,
              losses: 8,
              winRate: '84.0'
            },
            {
              id: '3',
              name: 'Mike Santos',
              age: 35,
              rank: 3,
              points: 2450,
              gamesPlayed: 47,
              wins: 38,
              losses: 9,
              winRate: '80.9'
            },
            {
              id: '4',
              name: 'Ana Garcia',
              age: 45,
              rank: 4,
              points: 2400,
              gamesPlayed: 45,
              wins: 36,
              losses: 9,
              winRate: '80.0'
            },
            {
              id: '5',
              name: 'Carlo Garcia',
              age: 45,
              rank: 5,
              points: 2300,
              gamesPlayed: 42,
              wins: 33,
              losses: 9,
              winRate: '78.6'
            },
            {
              id: 'j1',
              name: 'Alexandra Santos',
              age: 15,
              rank: 6,
              points: 2000,
              gamesPlayed: 35,
              wins: 27,
              losses: 8,
              winRate: '77.1'
            }
          ]
        }
      ];
      
      setCategories(data);
      setSelectedCategory(data[0]?.id);
    } catch (err) {
      setError('Failed to fetch rankings. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const renderRankingsList = (rankings) => {
    const filteredRankings = filterRankings(rankings);
    const topThree = filteredRankings.slice(0, 3);
    const remainingPlayers = filteredRankings.slice(3);
    
    if (remainingPlayers.length === 0 && topThree.length === 0) {
      return (
        <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
          No players found matching your search criteria.
        </div>
      );
    }
    
    if (remainingPlayers.length === 0) return null;
    
    return (
      <RankingsList>
        <ListHeader>
          <div>Rank</div>
          <div>Player</div>
          <div>Age</div>
          <div>Points</div>
          <div>Games (W-L)</div>
        </ListHeader>
        {remainingPlayers.slice(0, 47).map((player) => (
          <ListRow key={player.id}>
            <ListRank>{player.rank}</ListRank>
            <ListPlayerInfo>
              <ListPlayerAvatar>
                {getInitials(player.name)}
              </ListPlayerAvatar>
              <ListPlayerName>{player.name}</ListPlayerName>
            </ListPlayerInfo>
            <ListStat>{player.age}</ListStat>
            <ListStat>{formatNumber(player.points)}</ListStat>
            <ListStat>{player.wins}-{player.losses}</ListStat>
          </ListRow>
        ))}
      </RankingsList>
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
          <RetryButton onClick={fetchRankings}>
            Try Again
          </RetryButton>
        </ErrorState>
      </PageContainer>
    );
  }

  const currentCategory = categories.find(c => c.id === selectedCategory);
  const filteredRankings = currentCategory ? filterRankings(currentCategory.rankings) : [];
  const topThreePlayers = filteredRankings.slice(0, 3);

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Player Rankings</PageTitle>
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
              value={ageCategory}
              onChange={(e) => {
                setAgeCategory(e.target.value);
                setAgeGroup(''); // Reset age group when category changes
              }}
            >
              <option value="adult">Adult</option>
              <option value="junior">Junior</option>
            </Select>
            <Select
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
            >
              <option value="">All Ages</option>
              {ageCategory === 'adult' 
                ? adultAgeGroups.map(age => (
                    <option key={age} value={age}>{age}</option>
                  ))
                : juniorAgeGroups.map(age => (
                    <option key={age} value={age}>{age}</option>
                  ))
              }
            </Select>
          </AgeFilterContainer>
        </SearchContainer>
      </PageHeader>
      
      <CategoryTabs>
        {categories.map(category => (
          <CategoryTab
            key={category.id}
            $active={category.id === selectedCategory}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </CategoryTab>
        ))}
      </CategoryTabs>

      <RankingsContainer>
        <TopRankingsGrid>
          {topThreePlayers.map((player) => (
            <PlayerCard key={player.id} $rank={player.rank}>
              <RankBadge>{player.rank}</RankBadge>
              <PlayerInfo>
                <PlayerAvatar>
                  {getInitials(player.name)}
                </PlayerAvatar>
                <PlayerDetails>
                  <PlayerName>{player.name}</PlayerName>
                </PlayerDetails>
              </PlayerInfo>

              <StatsGrid>
                <StatBox>
                  <StatValue>{player.age}</StatValue>
                  <StatLabel>Age</StatLabel>
                </StatBox>
                <StatBox>
                  <StatValue>{formatNumber(player.points)}</StatValue>
                  <StatLabel>Points</StatLabel>
                </StatBox>
                <StatBox>
                  <StatValue>{player.wins}-{player.losses}</StatValue>
                  <StatLabel>Games (W-L)</StatLabel>
                </StatBox>
              </StatsGrid>
            </PlayerCard>
          ))}
        </TopRankingsGrid>

        {renderRankingsList(currentCategory?.rankings || [])}
      </RankingsContainer>
    </PageContainer>
  );
}

export default Ranks; 