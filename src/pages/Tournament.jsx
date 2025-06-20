import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AuthModal from '../components/AuthModal';

/**
 * @typedef {Object} Tournament
 * @property {string} id - Unique identifier
 * @property {string} name - Tournament name
 * @property {string} date - Tournament date (ISO string)
 * @property {string} location - Venue location
 * @property {string} status - Tournament status (UPCOMING, ONGOING, COMPLETED)
 * @property {number} entryFee - Entry fee amount
 * @property {number} prizePool - Total prize pool
 * @property {string} description - Tournament description
 * @property {number} maxParticipants - Maximum allowed participants
 * @property {number} currentParticipants - Current participant count
 * @property {string} registrationDeadline - Registration deadline (ISO string)
 * @property {string} bannerUrl - Tournament banner image URL
 * @property {string[]} divisions - Available divisions (e.g., ["Men's Singles", "Mixed Doubles"])
 */

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
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
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
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TournamentName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px;
  line-height: 1.3;
`;

const TierDisplay = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: #f0fdf4;
  border-radius: 20px;
  color: #166534;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 16px;
  border: 1px solid #bbf7d0;

  svg {
    color: #22c55e;
  }
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
  padding: 12px;
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  
  &:hover:not(:disabled) {
    background: #25a589;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: #e2e8f0;
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
 * - maxParticipants: integer
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
 * - status: enum ('PENDING', 'CONFIRMED', 'CANCELLED')
 * - paymentStatus: enum ('PENDING', 'PAID', 'REFUNDED')
 * - registeredAt: timestamp
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
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState('');
  const [selectedFeeRange, setSelectedFeeRange] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);
  
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

      // BACKEND INTEGRATION REQUIRED:
      // 1. Connect to the database using your ORM of choice
      // 2. Fetch tournaments with their divisions and registration counts
      // 3. Implement proper date handling for tournaments
      // 4. Add sorting by date (upcoming first)
      // 5. Consider adding filters by status, division, etc.
      
      // TODO: Replace this example data with actual API call
      // const response = await fetch('/api/tournaments');
      // if (!response.ok) throw new Error('Failed to fetch tournaments');
      // const data = await response.json();
      // setTournaments(data.tournaments);
      
      // Example data - matches the database schema above
      const tournamentData = [
        {
          id: '1',
          name: 'PPL Summer Championship 2025',
          date: '2025-08-15T09:00:00Z',
          location: 'Manila Pickleball Center',
          entryFee: 1500,
          prizePool: 50000,
          maxParticipants: 64,
          currentParticipants: 42,
          registrationDeadline: '2025-07-01T00:00:00Z',
          bannerUrl: 'https://images.unsplash.com/photo-1686721135036-22ac6cbb8ce8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          tier: 3
        },
        {
          id: '2',
          name: 'Beginners Welcome Tournament',
          date: '2025-07-20T09:00:00Z',
          location: 'Quezon City Sports Complex',
          entryFee: 800,
          prizePool: 20000,
          maxParticipants: 32,
          currentParticipants: 32,
          registrationDeadline: '2025-05-10T00:00:00Z',
          bannerUrl: 'https://images.unsplash.com/photo-1723004714201-cf224222b897?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          tier: 2
        },
        {
          id: '3',
          name: 'Indoor Championship Series',
          date: '2025-07-01T09:00:00Z',
          location: 'BGC Indoor Sports Complex',
          entryFee: 2000,
          prizePool: 75000,
          maxParticipants: 128,
          currentParticipants: 85,
          registrationDeadline: '2025-06-30T00:00:00Z',
          bannerUrl: 'https://plus.unsplash.com/premium_photo-1709048991290-1d36455a2895?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          tier: 3
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

  /**
   * Handles tournament registration
   * @param {string} tournamentId - Tournament identifier
   */
  const handleRegister = async (tournamentId) => {
    // Check auth state
    const isAuthenticated = false; // TODO: Replace with actual auth check
    
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    try {
      // TODO: Replace with actual API call
      // await api.post(`/tournaments/${tournamentId}/register`);
      // Refresh tournaments after registration
      // await fetchTournaments();
    } catch (err) {
      // Handle error
    }
  };

  if (loading) return <div>Loading tournaments...</div>;
  if (error) return <div>{error}</div>;

  return (
    <PageContainer>
      <PageTitle>Tournaments</PageTitle>
      <PageDescription>
        Discover and join exciting pickleball tournaments across the Philippines. From beginner-friendly events to professional championships, find the perfect competition to showcase your skills.
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
          <TournamentCard key={tournament.id}>
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
              <TierDisplay>
                <TrophyIcon />
                Tier {tournament.tier}
              </TierDisplay>
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
                onClick={() => handleRegister(tournament.id)}
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