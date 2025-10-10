import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from '../utils/axiosConfig';

// Styled Components
const DropdownContainer = styled.div`
  position: relative;
`;

const InputContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  color: #1e293b;
  transition: all 0.2s;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
  
  &:disabled {
    background: #f8fafc;
    color: #64748b;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #64748b;
  font-size: 18px;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  
  &:hover {
    color: #475569;
    background: #f1f5f9;
  }
`;

const DropdownArrow = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%) ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  pointer-events: none;
  transition: transform 0.2s;
  color: #64748b;
`;

const DropdownMenu = styled.div`
  position: absolute;
  z-index: 50;
  width: 100%;
  margin-top: 4px;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  max-height: 240px;
  overflow-y: auto;
`;

const LoadingMessage = styled.div`
  padding: 12px 16px;
  color: #64748b;
  text-align: center;
  font-size: 14px;
`;

const NoResultsMessage = styled.div`
  padding: 12px 16px;
  color: #64748b;
  text-align: center;
  font-size: 14px;
`;

const PlayerOption = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid #f1f5f9;
  transition: background-color 0.2s;
  
  &:hover {
    background: #f8fafc;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const PlayerName = styled.div`
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 4px;
`;

const PlayerDetails = styled.div`
  font-size: 12px;
  color: #64748b;
`;

const PlayerSearchDropdown = ({ 
  gender, 
  selectedPlayer, 
  onPlayerSelect, 
  placeholder = "Search and select a player...",
  disabled = false,
  excludePlayerIds = []
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);

  // Fetch players based on gender and search term
  const fetchPlayers = async (search = '') => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (gender && gender !== 'all') {
        params.append('gender', gender);
      }
      if (search.trim()) {
        params.append('search', search.trim());
      }

      const response = await axios.get(`/users/players?${params.toString()}`);
      
      // Filter out excluded players (like already selected team members)
      const filteredPlayers = response.data.filter(player => 
        !excludePlayerIds.includes(player._id)
      );
      
      setPlayers(filteredPlayers);
    } catch (error) {
      console.error('Error fetching players:', error);
      setPlayers([]);
    } finally {
      setLoading(false);
    }
  };

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isOpen) {
        fetchPlayers(searchTerm);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, gender, isOpen, excludePlayerIds]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputClick = () => {
    if (!disabled) {
      setIsOpen(true);
      if (players.length === 0) {
        fetchPlayers();
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePlayerSelect = (player) => {
    onPlayerSelect(player);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleClear = () => {
    onPlayerSelect(null);
    setSearchTerm('');
  };

  const displayValue = selectedPlayer 
    ? `${selectedPlayer.firstName} ${selectedPlayer.lastName}` 
    : '';

  return (
    <DropdownContainer ref={dropdownRef}>
      <InputContainer>
        <SearchInput
          type="text"
          value={isOpen ? searchTerm : displayValue}
          onChange={handleSearchChange}
          onClick={handleInputClick}
          placeholder={disabled ? displayValue || placeholder : placeholder}
          disabled={disabled}
          readOnly={!isOpen}
        />
        
        {/* Clear button */}
        {selectedPlayer && !disabled && (
          <ClearButton
            type="button"
            onClick={handleClear}
          >
            ×
          </ClearButton>
        )}
        
        {/* Dropdown arrow */}
        <DropdownArrow $isOpen={isOpen}>
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </DropdownArrow>
      </InputContainer>

      {/* Dropdown menu */}
      {isOpen && (
        <DropdownMenu>
          {loading ? (
            <LoadingMessage>
              Loading players...
            </LoadingMessage>
          ) : players.length === 0 ? (
            <NoResultsMessage>
              {searchTerm ? 'No players found' : 'No players available'}
            </NoResultsMessage>
          ) : (
            players.map((player) => (
              <PlayerOption
                key={player._id}
                onClick={() => handlePlayerSelect(player)}
              >
                <PlayerName>
                  {player.firstName} {player.lastName}
                </PlayerName>
                <PlayerDetails>
                  PPL ID: {player.pplId} | Gender: {player.gender}
                </PlayerDetails>
              </PlayerOption>
            ))
          )}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default PlayerSearchDropdown;