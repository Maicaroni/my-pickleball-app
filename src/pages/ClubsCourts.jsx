import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import AuthModal from '../components/AuthModal';
import { useAuth } from '../contexts/AuthContext';

const Container = styled.div`
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

const SearchInputContainer = styled.div`
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

const SearchInput = styled.input`
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

const FilterButtons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const FilterButton = styled.button`
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1.5px solid ${props => props.$active ? '#29ba9b' : '#e2e8f0'};
  background: ${props => props.$active ? '#29ba9b' : 'white'};
  color: ${props => props.$active ? 'white' : '#64748b'};
  white-space: nowrap;
  min-width: 140px;
  
  &:hover {
    border-color: #29ba9b;
    color: ${props => props.$active ? 'white' : '#29ba9b'};
    background: ${props => props.$active ? '#26a085' : '#f8fafc'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
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
    background: rgba(0,0,0,0.1);
  }

  @media (min-width: 768px) {
    height: 180px;
  }
`;

const VenueInfo = styled.div`
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
    margin-bottom: 20px;
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
  font-size: 0.875rem;
  color: #64748b;
  flex-wrap: wrap;
  margin-bottom: 72px;
  
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

const VenueType = styled.span`
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 12px;
  background: ${props => props.type === 'club' ? '#f0f9ff' : '#f0fdf4'};
  color: ${props => props.type === 'club' ? '#0369a1' : '#166534'};
`;

const JoinButton = styled.button`
  width: calc(100% - 48px);
  padding: 12px 20px;
  background: ${props => props.$isPending ? '#f59e0b' : '#29ba9b'};
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  position: absolute;
  bottom: 24px;
  left: 24px;

  &:hover:not(:disabled) {
    background: ${props => props.$isPending ? '#d97706' : '#26a085'};
    transform: translateY(-1px);
  }

  &:disabled {
    background: ${props => props.$isPending ? '#f59e0b' : '#e2e8f0'};
    cursor: ${props => props.$isPending ? 'default' : 'not-allowed'};
    transform: none;
    opacity: 0.6;
    
    &:hover {
      background: ${props => props.$isPending ? '#f59e0b' : '#e2e8f0'};
      transform: none;
    }
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

const VenueDetailHeader = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #e2e8f0;

  @media (min-width: 768px) {
    padding: 24px 0;
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: none;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: #f8fafc;
    border-color: #29ba9b;
    color: #29ba9b;
  }
`;

const VenueDetailContent = styled.div`
  margin-top: 24px;
`;

const VenueDetailImageContainer = styled.div`
  margin-bottom: 32px;
`;

const VenueDetailMainImage = styled.div`
  width: 100%;
  height: 280px;
  background: ${props => {
    switch (props.$imageIndex) {
      case 0:
        return '#29ba9b';
      case 1:
        return '#3b82f6';
      case 2:
        return '#f59e0b';
      default:
        return '#29ba9b';
    }
  }};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3.5rem;
  font-weight: 600;

  @media (min-width: 768px) {
    height: 360px;
    font-size: 4.5rem;
  }
  
  &::before {
    content: '🏓';
    opacity: 0.9;
  }
`;

const VenueDetailBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    gap: 48px;
  }
`;

const VenueDetailLeft = styled.div``;

const VenueDetailTitle = styled.div`
  margin-bottom: 32px;

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
    line-height: 1.2;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
`;

const VenueNameContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;

  @media (min-width: 640px) {
    align-items: center;
  }
`;

const VenueDetailBadges = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
`;

const VenueVerifiedBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #10b981;
  color: white;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;

  svg {
    width: 12px;
    height: 12px;
  }
`;

const VenueDetailDescription = styled.p`
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 640px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 48px;
  }
`;

const VenueDetailSection = styled.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 56px;
  }
`;

const VenueDetailSectionTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 24px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f1f5f9;

  svg {
    width: 20px;
    height: 20px;
    color: #64748b;
  }
`;

const VenueLocationCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f9;
`;

const VenueLocationInfo = styled.div`
  padding: 20px;
  border-bottom: 1px solid #f1f5f9;

  @media (min-width: 768px) {
    padding: 24px;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 8px;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }

  p {
    color: #64748b;
    margin-bottom: 16px;
    line-height: 1.5;
    font-size: 0.9rem;

    @media (min-width: 768px) {
      font-size: 0.95rem;
      margin-bottom: 20px;
    }
  }
`;

const VenueLocationActions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media (min-width: 640px) {
    gap: 10px;
    flex-wrap: nowrap;
  }
`;

const VenueLocationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: ${props => props.$primary ? 'none' : '1px solid #e2e8f0'};
  background: ${props => props.$primary ? '#29ba9b' : 'white'};
  color: ${props => props.$primary ? 'white' : '#64748b'};
  flex: 1;

  @media (min-width: 640px) {
    flex: none;
    padding: 10px 16px;
    font-size: 0.875rem;
  }

  svg {
    width: 14px;
    height: 14px;

    @media (min-width: 640px) {
      width: 16px;
      height: 16px;
    }
  }

  &:hover {
    background: ${props => props.$primary ? '#26a085' : '#f8fafc'};
    border-color: ${props => props.$primary ? 'transparent' : '#29ba9b'};
    color: ${props => props.$primary ? 'white' : '#29ba9b'};
  }
`;

const VenueMapContainer = styled.div`
  position: relative;
  height: 300px;
  background: #f1f5f9;

  @media (min-width: 768px) {
    height: 350px;
  }
`;

const VenueMapPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VenueMapGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 2px;
  padding: 20px;
  opacity: 0.6;
`;

const VenueMapGridItem = styled.div`
  background: ${() => {
    const colors = ['#f1f5f9', '#e2e8f0', '#cbd5e0', '#f8fafc'];
    return colors[Math.floor(Math.random() * colors.length)];
  }};
  border-radius: 2px;
`;

const VenueMapOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;

const VenueMapMarker = styled.div`
  width: 32px;
  height: 32px;
  background: #ef4444;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

  svg {
    transform: rotate(45deg);
    width: 18px;
    height: 18px;
    color: white;
  }
`;

const VenueMapLabel = styled.div`
  background: rgba(15, 23, 42, 0.9);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 8px;
`;

const VenueDetailMeta = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #f1f5f9;
  padding: 16px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const VenueDetailMetaItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 16px 0;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }

  div {
    flex: 1;

    span {
      display: block;
      font-size: 0.75rem;
      font-weight: 500;
      color: #94a3b8;
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    p {
      font-size: 0.9rem;
      color: #0f172a;
      margin: 0;
      line-height: 1.4;
      font-weight: 400;
    }
  }
`;

const VenueMetaIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;

  svg {
    width: 16px;
    height: 16px;
    color: #10b981;
  }
`;

const VenueDetailAmenitiesList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const VenueDetailAmenityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: white;
  border: 1px solid #f1f5f9;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #374151;
  font-weight: 400;

  svg {
    width: 16px;
    height: 16px;
    color: #10b981;
    flex-shrink: 0;
  }
`;

const PhotoGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  border-radius: 12px;
  overflow: hidden;

  @media (min-width: 640px) {
    gap: 12px;
  }
`;

const PhotoItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  ${props => {
    if (props.$total === 1) {
      return `
        grid-column: 1 / -1;
        aspect-ratio: 16 / 9;
      `;
    } else if (props.$total === 2) {
      return `
        grid-column: span 1;
      `;
    } else if (props.$total === 3) {
      if (props.$index === 0) {
        return `
          grid-column: span 2;
          grid-row: span 2;
        `;
      }
      return `
        grid-column: span 1;
      `;
    } else if (props.$total === 4) {
      return `
        grid-column: span 1;
      `;
    } else if (props.$total === 5) {
      if (props.$index < 2) {
        return `
          grid-column: span 1;
        `;
      } else if (props.$index === 2) {
        return `
          grid-column: span 1;
          grid-row: span 2;
        `;
      }
      return `
        grid-column: span 1;
      `;
    } else if (props.$total >= 6) {
      if (props.$index < 2) {
        return `
          grid-column: span 1;
        `;
      } else if (props.$index === 2) {
        return `
          grid-column: span 1;
          grid-row: span 2;
        `;
      }
      return `
        grid-column: span 1;
      `;
    }
  }}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const PhotoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  backdrop-filter: blur(2px);
`;

const VenueDetailSidebar = styled.div``;

const VenueDetailJoinCard = styled.div`
  background: white;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    position: sticky;
    top: 24px;
    padding: 28px;
    border-radius: 20px;
  }
`;

const VenueDetailJoinButton = styled.button`
  width: 100%;
  padding: 16px 24px;
  background: ${props => props.$isPending ? '#f59e0b' : '#29ba9b'};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  opacity: ${props => props.disabled ? 0.6 : 1};
  margin-bottom: 16px;

  &:hover:not(:disabled) {
    background: ${props => props.$isPending ? '#d97706' : '#26a085'};
    transform: translateY(-1px);
  }
`;

const VenueDetailJoinNote = styled.p`
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
  text-align: center;
  padding: 12px 16px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #f1f5f9;
`;

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const ClubsCourts = () => {
  const { isAuthenticated } = useAuth();
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [joinedVenues, setJoinedVenues] = useState(new Set());
  const [pendingVenues, setPendingVenues] = useState(new Set());
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [showVenueDetails, setShowVenueDetails] = useState(false);

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
          photos: [
            {
              url: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop',
              caption: 'Main court area'
            },
            {
              url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
              caption: 'Professional courts'
            },
            {
              url: 'https://images.unsplash.com/photo-1526676037777-05a232c2b57c?w=800&h=600&fit=crop',
              caption: 'Club facilities'
            },
            {
              url: 'https://images.unsplash.com/photo-1577924111230-7f5ed91b08b8?w=800&h=600&fit=crop',
              caption: 'Equipment storage'
            },
            {
              url: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&h=600&fit=crop',
              caption: 'Locker rooms'
            },
            {
              url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
              caption: 'Outdoor courts'
            }
          ],
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
          photos: [
            {
              url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
              caption: 'Indoor courts'
            },
            {
              url: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop',
              caption: 'Court facilities'
            },
            {
              url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
              caption: 'Tournament setup'
            }
          ],
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
          photos: [
            {
              url: 'https://images.unsplash.com/photo-1577924111230-7f5ed91b08b8?w=800&h=600&fit=crop',
              caption: 'Community courts'
            }
          ],
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

  const handleJoinVenue = async (e, venueId) => {
    e.stopPropagation(); // Prevent venue details modal from opening
    
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }

    try {
      // Set to pending state immediately
      setPendingVenues(prev => new Set([...prev, venueId]));
      
      // TODO: Replace with actual API call when backend is ready
      // await fetch('/api/venues/join', {
      //   method: 'POST',
      //   headers: { 
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${localStorage.getItem('token')}`
      //   },
      //   body: JSON.stringify({ venueId })
      // });
      
      // For demo purposes, simulate API response
      console.log(`Join request submitted for venue ${venueId}`);
    } catch (err) {
      console.error('Failed to join venue:', err);
      // Remove from pending state on error
      setPendingVenues(prev => {
        const newSet = new Set(prev);
        newSet.delete(venueId);
        return newSet;
      });
    }
  };

  const handleVenueClick = (venue) => {
    setSelectedVenue(venue);
    setShowVenueDetails(true);
  };

  const closeVenueDetails = () => {
    setShowVenueDetails(false);
    setSelectedVenue(null);
  };

  if (loading) {
    return (
      <Container>
        <PageTitle>Clubs & Courts</PageTitle>
        <PageDescription>Discover pickleball venues and communities across the Philippines.</PageDescription>
        <LoadingSpinner>Loading venues...</LoadingSpinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <PageTitle>Clubs & Courts</PageTitle>
        <PageDescription>Discover pickleball venues and communities across the Philippines.</PageDescription>
        <ErrorMessage>{error}</ErrorMessage>
      </Container>
    );
  }

  // Show venue details page if a venue is selected
  if (showVenueDetails && selectedVenue) {
    return (
      <Container>
        <VenueDetailHeader>
          <BackButton onClick={closeVenueDetails}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Clubs & Courts
          </BackButton>
        </VenueDetailHeader>

        <VenueDetailContent>
          <VenueDetailImageContainer>
            <VenueDetailMainImage $imageIndex={venues.findIndex(v => v.id === selectedVenue.id) % 3} />
          </VenueDetailImageContainer>

          <VenueDetailBody>
            <VenueDetailLeft>
              <VenueDetailTitle>
                <VenueNameContainer>
                  <h1>{selectedVenue.name}</h1>
                  {selectedVenue.isVerified && (
                    <VenueVerifiedBadge>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.745 3.745 0 0 1 3.296-1.043A3.745 3.745 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z" />
                      </svg>
                      Verified
                    </VenueVerifiedBadge>
                  )}
                </VenueNameContainer>
                <VenueDetailBadges>
                  <VenueType type={selectedVenue.type === 'club' ? 'club' : 'courts'}>
                    {selectedVenue.type === 'club' ? 'Club' : 'Club & Courts'}
                  </VenueType>
                </VenueDetailBadges>
              </VenueDetailTitle>

              <VenueDetailDescription>{selectedVenue.description}</VenueDetailDescription>

              <VenueDetailSection>
                <VenueDetailSectionTitle>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Location & Map
                </VenueDetailSectionTitle>
                
                <VenueLocationCard>
                  <VenueLocationInfo>
                    <h4>{selectedVenue.address}</h4>
                    <p>Get directions to this venue and explore the surrounding area</p>
                    <VenueLocationActions>
                      <VenueLocationButton $primary>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                        Get Directions
                      </VenueLocationButton>
                      <VenueLocationButton>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15,3 21,3 21,9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Share Location
                      </VenueLocationButton>
                    </VenueLocationActions>
                  </VenueLocationInfo>
                  
                  <VenueMapContainer>
                    <VenueMapPlaceholder>
                      <VenueMapOverlay>
                        <VenueMapMarker>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </VenueMapMarker>
                        <VenueMapLabel>{selectedVenue.name}</VenueMapLabel>
                      </VenueMapOverlay>
                      <VenueMapGrid>
                        {Array.from({ length: 35 }, (_, i) => (
                          <VenueMapGridItem key={i} />
                        ))}
                      </VenueMapGrid>
                    </VenueMapPlaceholder>
                  </VenueMapContainer>
                </VenueLocationCard>
              </VenueDetailSection>

              <VenueDetailSection>
                <VenueDetailSectionTitle>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Venue Information
                </VenueDetailSectionTitle>
                
                <VenueDetailMeta>
                  {selectedVenue.type === 'club_and_courts' && (
                    <VenueDetailMetaItem>
                      <VenueMetaIcon>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12,6 12,12 16,14" />
                        </svg>
                      </VenueMetaIcon>
                      <div>
                        <span>Operating Hours</span>
                        <p>{selectedVenue.hours}</p>
                      </div>
                    </VenueDetailMetaItem>
                  )}

                  <VenueDetailMetaItem>
                    <VenueMetaIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </VenueMetaIcon>
                    <div>
                      <span>Community Size</span>
                      <p>{selectedVenue.members} Active Members</p>
                    </div>
                  </VenueDetailMetaItem>

                  {selectedVenue.contactEmail && (
                    <VenueDetailMetaItem>
                      <VenueMetaIcon>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </VenueMetaIcon>
                      <div>
                        <span>Email Contact</span>
                        <p>{selectedVenue.contactEmail}</p>
                      </div>
                    </VenueDetailMetaItem>
                  )}

                  {selectedVenue.contactPhone && (
                    <VenueDetailMetaItem>
                      <VenueMetaIcon>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </VenueMetaIcon>
                      <div>
                        <span>Phone Contact</span>
                        <p>{selectedVenue.contactPhone}</p>
                      </div>
                    </VenueDetailMetaItem>
                  )}

                  {selectedVenue.website && (
                    <VenueDetailMetaItem>
                      <VenueMetaIcon>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </VenueMetaIcon>
                      <div>
                        <span>Website</span>
                        <p>{selectedVenue.website}</p>
                      </div>
                    </VenueDetailMetaItem>
                  )}
                </VenueDetailMeta>
              </VenueDetailSection>

              {selectedVenue.amenities && selectedVenue.amenities.length > 0 && (
                <VenueDetailSection>
                  <VenueDetailSectionTitle>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Amenities & Features
                  </VenueDetailSectionTitle>
                  <VenueDetailAmenitiesList>
                    {selectedVenue.amenities.map((amenity, index) => (
                      <VenueDetailAmenityItem key={index}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {amenity}
                      </VenueDetailAmenityItem>
                    ))}
                  </VenueDetailAmenitiesList>
                </VenueDetailSection>
              )}

              {selectedVenue.photos && selectedVenue.photos.length > 0 && (
                <VenueDetailSection>
                  <VenueDetailSectionTitle>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <circle cx="9" cy="9" r="2"/>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                    </svg>
                    Photo Gallery
                  </VenueDetailSectionTitle>
                  <PhotoGallery>
                    {selectedVenue.photos.slice(0, 6).map((photo, index) => (
                      <PhotoItem key={index} $index={index} $total={Math.min(selectedVenue.photos.length, 6)}>
                        <img src={photo.url} alt={photo.caption || `Venue photo ${index + 1}`} />
                        {index === 5 && selectedVenue.photos.length > 6 && (
                          <PhotoOverlay>
                            +{selectedVenue.photos.length - 6}
                          </PhotoOverlay>
                        )}
                      </PhotoItem>
                    ))}
                  </PhotoGallery>
                </VenueDetailSection>
              )}
            </VenueDetailLeft>

            <VenueDetailSidebar>
              <VenueDetailJoinCard>
                <VenueDetailJoinButton
                  onClick={(e) => handleJoinVenue(e, selectedVenue.id)}
                  disabled={joinedVenues.has(selectedVenue.id) || pendingVenues.has(selectedVenue.id)}
                  $isPending={pendingVenues.has(selectedVenue.id)}
                >
                  {joinedVenues.has(selectedVenue.id) 
                    ? 'Joined' 
                    : pendingVenues.has(selectedVenue.id) 
                    ? 'Pending Approval' 
                    : 'Join Now'
                  }
                </VenueDetailJoinButton>
                <VenueDetailJoinNote>
                  {joinedVenues.has(selectedVenue.id) 
                    ? 'You are a member of this venue'
                    : pendingVenues.has(selectedVenue.id) 
                    ? 'Your join request is pending approval from the venue administrators'
                    : 'Join this venue to access exclusive features and connect with the community'
                  }
                </VenueDetailJoinNote>
              </VenueDetailJoinCard>
            </VenueDetailSidebar>
          </VenueDetailBody>
        </VenueDetailContent>

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
  }

  // Show main venues list page
  return (
    <Container>
      <PageTitle>Clubs & Courts</PageTitle>
      <PageDescription>Discover pickleball venues and communities across the Philippines.</PageDescription>

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
            <VenueCard key={venue.id} onClick={() => handleVenueClick(venue)}>
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
                  onClick={(e) => handleJoinVenue(e, venue.id)}
                  disabled={joinedVenues.has(venue.id) || pendingVenues.has(venue.id)}
                  $isPending={pendingVenues.has(venue.id)}
                >
                  {joinedVenues.has(venue.id) 
                    ? 'Joined' 
                    : pendingVenues.has(venue.id) 
                    ? 'Pending Approval' 
                    : 'Join Now'
                  }
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