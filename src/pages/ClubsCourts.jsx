import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import AuthModal from '../components/AuthModal';

/**
 * @typedef {Object} Venue
 * @property {string} id - Unique identifier
 * @property {string} name - Venue name
 * @property {string} description - Venue description
 * @property {string} address - Physical address
 * @property {string} type - Venue type ('club' | 'club_and_courts')
 * @property {number} [courts] - Number of courts (required if type is 'club_and_courts')
 * @property {string} [hours] - Operating hours (required if type is 'club_and_courts')
 * @property {number} [members] - Member count (required if type is 'club')
 * @property {string} createdAt - Creation timestamp
 * @property {string} updatedAt - Last update timestamp
 * @property {string} ownerId - User ID of venue owner
 * @property {string} contactEmail - Contact email
 * @property {string} contactPhone - Contact phone number
 * @property {string} [website] - Optional website URL
 * @property {string[]} [amenities] - List of available amenities
 * @property {string[]} [images] - List of image URLs
 * @property {boolean} isVerified - Whether the venue is verified by admins
 */

const Container = styled.div`
  padding: 72px 16px 24px;
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeIn 0.3s ease;
  background: white;
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 90px 24px 24px;
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

const Header = styled.div`
  margin-bottom: 32px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  
  h1 {
    color: #234255;
    font-size: 2rem;
    margin-bottom: 12px;
    font-weight: 800;
    letter-spacing: -0.5px;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    color: #64748b;
    font-size: 1rem;
    line-height: 1.6;
    
    @media (min-width: 768px) {
    font-size: 1.1rem;
    }
  }
`;

const SearchSection = styled.div`
  margin: 0 auto 32px;
  display: flex;
  gap: 16px;
  max-width: 1200px;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 20px;
    margin-bottom: 40px;
  }
`;

const SearchInputContainer = styled.div`
  position: relative;
  flex: 1;
  min-width: 200px;

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

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  height: 44px;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;

  @media (min-width: 768px) {
    gap: 10px;
  }
`;

const FilterButton = styled.button`
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid ${props => props.$active ? '#29ba9b' : '#e2e8f0'};
  background: ${props => props.$active ? '#29ba9b' : 'white'};
  color: ${props => props.$active ? 'white' : '#64748b'};
  white-space: nowrap;
  height: 44px;
  
  @media (min-width: 768px) {
    padding: 10px 20px;
    font-size: 0.95rem;
  }
  
  &:hover {
    border-color: #29ba9b;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(41, 186, 155, 0.1);
  }
`;

const VenueGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 24px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`;

const VenueCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
  }
`;

const VenueImage = styled.div`
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
    background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5));
  }

  @media (min-width: 768px) {
    height: 180px;
  }
`;

const VenueInfo = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  
  h3 {
    color: #234255;
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 6px;
    letter-spacing: -0.5px;
  }
  
  p {
    color: #64748b;
    font-size: 0.9rem;
    margin-bottom: 12px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const VenueDetails = styled.div`
  display: flex;
  gap: 12px;
  font-size: 0.85rem;
  color: #64748b;
  flex-wrap: wrap;
  margin-bottom: 70px;
  
  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: #29ba9b;
  }
`;

const VenueType = styled.span`
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 8px;
  background: ${props => props.type === 'club' ? '#e0f2fe' : '#dcfce7'};
  color: ${props => props.type === 'club' ? '#0369a1' : '#166534'};
`;

const JoinButton = styled.button`
  width: calc(100% - 32px);
  padding: 10px;
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  position: absolute;
  bottom: 16px;
  left: 16px;

  &:hover {
    background: #238f77;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(41, 186, 155, 0.2);
  }

  &:disabled {
    background: #e2e8f0;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 48px 24px;
  background: white;
  border-radius: 16px;
  color: #64748b;
  font-size: 1.1rem;
  border: 2px dashed #e2e8f0;
  margin-top: 32px;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px;
  color: #29ba9b;
  font-size: 1.1rem;
  gap: 12px;

  svg {
    animation: spin 1s linear infinite;
    width: 24px;
    height: 24px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 24px;
  margin: 32px auto;
  max-width: 600px;
  background: #fef2f2;
  color: #dc2626;
  border-radius: 12px;
  font-size: 1rem;
  border: 1px solid #fee2e2;
  line-height: 1.6;
`;

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const ClubsCourts = () => {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [joinedVenues, setJoinedVenues] = useState(new Set());
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    fetchVenues();
  }, []);

  /**
   * Fetches venues from the backend API
   * @async
   */
  const fetchVenues = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // TODO: Replace with actual API call
      // const response = await fetch('/api/venues');
      // const data = await response.json();
      // if (!response.ok) throw new Error(data.message || 'Failed to fetch venues');
      // setVenues(data.venues);

      // Example data for development
      const data = [
        {
          id: '1',
          name: 'Manila Pickleball Club',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          address: 'BGC, Taguig City',
          hours: '6:00 AM - 10:00 PM',
          type: 'club_and_courts',
          members: 120,
          createdAt: '2025-06-16T08:00:00Z',
          updatedAt: '2025-06-16T08:00:00Z',
          ownerId: 'user123',
          contactEmail: 'info@manilapickleball.com',
          contactPhone: '+63 912 345 6789',
          website: 'https://manilapickleball.com',
          amenities: ['Pro Shop', 'Locker Rooms', 'Parking'],
          images: [],
          isVerified: true
        },
        {
          id: '2',
          name: 'BGC Pickleball Center',
          description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
          address: 'Bonifacio Global City, Taguig',
          hours: '7:00 AM - 11:00 PM',
          type: 'club_and_courts',
          members: 85,
          createdAt: '2025-06-15T10:00:00Z',
          updatedAt: '2025-06-15T10:00:00Z',
          ownerId: 'user456',
          contactEmail: 'info@bgcpickleball.com',
          contactPhone: '+63 917 123 4567',
          amenities: ['Air Conditioning', 'Equipment Rental'],
          images: [],
          isVerified: true
        },
        {
          id: '3',
          name: 'QC Pickleball Community',
          description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
          address: 'Katipunan Avenue, Quezon City',
          type: 'club',
          members: 45,
          createdAt: '2025-06-14T09:00:00Z',
          updatedAt: '2025-06-14T09:00:00Z',
          ownerId: 'user789',
          contactEmail: 'qcpickleball@gmail.com',
          contactPhone: '+63 918 765 4321',
          images: [],
          isVerified: true
        }
      ];
      
      setVenues(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch venues');
    } finally {
      setLoading(false);
    }
  };

  // Filter venues
  const filteredVenues = useMemo(() => {
    let filtered = venues;

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(venue =>
        venue.name.toLowerCase().includes(searchLower) ||
        venue.address.toLowerCase().includes(searchLower)
      );
    }

    // Apply type filter
    if (filter !== 'all') {
      filtered = filtered.filter(venue => {
        if (filter === 'clubs') return venue.type === 'club';
        if (filter === 'courts') return venue.type === 'club_and_courts';
        return true;
      });
    }

    return filtered;
  }, [venues, searchTerm, filter]);

  const handleJoinVenue = async (venueId) => {
    // Check auth state
    const isAuthenticated = false; // TODO: Replace with actual auth check
    
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    try {
      // TODO: Replace with actual API call when backend is ready
      // await fetch('/api/venues/join', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ venueId })
      // });
      
      setJoinedVenues(prev => new Set([...prev, venueId]));
    } catch (err) {
      console.error('Failed to join venue:', err);
      // You could add a toast notification here
    }
  };

  if (loading) {
    return (
      <Container>
        <Header>
          <h1>Clubs & Courts</h1>
          <p>Discover pickleball venues and communities across the Philippines</p>
        </Header>
        <LoadingSpinner>Loading venues...</LoadingSpinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Header>
          <h1>Clubs & Courts</h1>
          <p>Discover pickleball venues and communities across the Philippines.</p>
        </Header>
        <ErrorMessage>{error}</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <h1>Clubs & Courts</h1>
        <p>Discover pickleball venues and communities across the Philippines.</p>
      </Header>

      <SearchSection>
        <SearchInputContainer>
          <SearchIcon />
          <SearchInput
            type="text"
            placeholder="Search by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchInputContainer>
        <FilterButtons>
          <FilterButton 
            $active={filter === 'all'} 
            onClick={() => setFilter('all')}
          >
            All
          </FilterButton>
          <FilterButton 
            $active={filter === 'clubs'} 
            onClick={() => setFilter('clubs')}
          >
            Clubs Only
          </FilterButton>
          <FilterButton 
            $active={filter === 'courts'} 
            onClick={() => setFilter('courts')}
          >
            With Courts
          </FilterButton>
        </FilterButtons>
      </SearchSection>

      {filteredVenues.length === 0 ? (
        <NoResults>No venues found matching your criteria</NoResults>
      ) : (
        <VenueGrid>
          {filteredVenues.map((venue, index) => (
            <VenueCard key={venue.id}>
              <VenueImage $imageIndex={index % 3} />
              <VenueInfo>
                <h3>{venue.name}</h3>
                <div>
                  <VenueType type={venue.type === 'club' ? 'club' : 'courts'}>
                    {venue.type === 'club' ? 'Club' : 'Club & Courts'}
                  </VenueType>
                </div>
                <p>{venue.description}</p>
                <VenueDetails>
                  <div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {venue.address}
                  </div>
                  {venue.type === 'club_and_courts' && (
                    <div>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {venue.hours}
                    </div>
                  )}
                  <div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    {venue.members} Members
                  </div>
                </VenueDetails>
                <JoinButton
                  onClick={() => handleJoinVenue(venue.id)}
                  disabled={joinedVenues.has(venue.id)}
                >
                  {joinedVenues.has(venue.id) ? 'Joined' : 'Join Now'}
                </JoinButton>
              </VenueInfo>
            </VenueCard>
          ))}
        </VenueGrid>
      )}

      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          title="Join the Club!"
          message="Sign in or register to join clubs and access courts"
        />
      )}
    </Container>
  );
};

export default ClubsCourts; 