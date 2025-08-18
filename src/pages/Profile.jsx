import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import pickleBackground from '../../assets/pickle_bg.png';


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
    color: #9ca3af;
  }
  
  &:disabled {
    background: #f9fafb;
    color: #6b7280;
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
  
  option {
    padding: 8px;
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
  }
  
  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    transform: none;
  }
`;

// Additional styled components for the complete registration modal
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

const PaymentMethodsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(239, 68, 68, 1);
  }
`;

const FileName = styled.div`
  padding: 8px 12px;
  background: #f1f5f9;
  font-size: 0.875rem;
  color: #64748b;
  border-top: 1px solid #e2e8f0;
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
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background: #fef2f2;
    color: #dc2626;
  }
`;

const RequiredBadge = styled.span`
  background: #fef3c7;
  color: #92400e;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: 8px;
`;

// Player Selection Modal Components
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

const PlayerListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
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

// Styled Components
const ProfileContainer = styled.div`
  min-height: calc(100vh - 140px);
  padding: 50px 20px 40px 20px;
  max-width: 1100px;
  margin: 0 auto;
  background: #ffffff;
`;

// ProfileGrid component removed as it's no longer needed
const ProfileGrid = styled.div`
  // Keeping the component definition for potential future use
  margin-bottom: 40px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
`;

const AvatarContainer = styled.div`
  position: relative;
  margin-top: 70px;
  margin-left: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  width: 178px;
  height: 178px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #FFFFFF;
`;

const Avatar = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
`;

const AvatarUploadButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #29ba9b;
  border: 1px solid white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  outline: none;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &:hover {
    background: #26a085;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const UserName = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #234255;
  margin-top: 200px;
  margin-left: 30px;
  letter-spacing: -0.2px;
  flex-shrink: 0;
  min-width: 0;
  word-wrap: break-word;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-top: 150px;
  }
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

const UserDetail = styled.div`
  font-size: 0.9rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const DuprSection = styled.div`
  width: 100%;
  border: 1px solid #e9ecef;
  padding: 16px;
`;

const DuprTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: #234255;
  margin: 0 0 16px 0;
  text-align: center;
`;

const DuprGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const DuprCard = styled.div`
  border: 1px solid #e9ecef;
  padding: 12px;
  text-align: center;
`;

const DuprScore = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #29ba9b;
  margin-bottom: 4px;
`;

const DuprLabel = styled.div`
  font-size: 0.9rem;
  color: #6b7280;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// SectionHeader component kept for potential future use
const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0f0f0;
`;

// SectionTitle is still used in TabContainer
const SectionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: #234255;
  margin: 0;
  position: relative;
  padding-bottom: 8px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: #29ba9b;
  }
`;

// The following components are no longer used after removing the Player Rankings section
// They are kept for potential future use

const RankingsTable = styled.div`
  width: 100%;
  margin-top: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background:rgb(250, 248, 248);
  padding: 14px 20px;
  font-weight: 600;
  color: #234255;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.85rem;
`;

const TableBody = styled.div`
  background: white;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 12px 16px;
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.div`
  font-size: 0.9rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  
  &:nth-child(2) {
    font-weight: 600;
    color: #29ba9b;
  }
`;

const EditButton = styled.button`
  background: white;
  color: #29ba9b;
  border: none;
  padding: 10px 18px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;
  
  &:hover {
    background: #f0fffe;
    color: #249e85;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &:before {
    content: '✏️';
    margin-right: 6px;
    font-size: 0.9rem;
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
`;

const ApplyCoachButton = styled.button`
  background: #29ba9b;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  outline: none;
  
  &:hover {
    background: #26a085;
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &:before {
    content: '🏆';
    margin-right: 6px;
    font-size: 0.9rem;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

// Tab Components
const TabContainer = styled.div`
  margin-top: 120px;
  width: 100%;
  padding: 30px;
`;

const TabHeader = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 1px solid #e5e7eb;
  position: relative;
  gap: 20px;
`;

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
  padding: ${props => props.$active !== undefined ? '12px 20px' : '10px 20px'};
  border: none;
  background: ${props => {
    if (props.$active !== undefined) {
      return props.$active ? 'white' : 'transparent';
    }
    return 'transparent';
  }};
  color: ${props => {
    if (props.$active !== undefined) {
      return props.$active ? '#234255' : '#64748b';
    }
    return props.active ? '#29ba9b' : '#234255';
  }};
  font-weight: ${props => {
    if (props.$active !== undefined) {
      return props.$active ? '600' : '500';
    }
    return props.active ? '600' : '500';
  }};
  font-size: ${props => props.$active !== undefined ? '0.95rem' : '1rem'};
  cursor: pointer;
  transition: all 0.2s;
  border-radius: ${props => props.$active !== undefined ? '8px' : '8px'};
  white-space: nowrap;
  position: relative;
  box-shadow: ${props => {
    if (props.$active !== undefined) {
      return props.$active ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none';
    }
    return '0 1px 3px rgba(0, 0, 0, 0.08)';
  }};
  outline: none;
  text-align: center;
  
  /* Legacy styling for profile tabs (only when $active is undefined) */
  ${props => props.$active === undefined && `
    border-bottom: 3px solid ${props.active ? '#29ba9b' : 'transparent'};
    margin-bottom: -1px;
    
    &:not(:last-child):after {
      content: '|';
      position: absolute;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
      color: #e5e7eb;
      font-weight: 300;
      font-size: 1.5rem;
      pointer-events: none;
    }
  `}

  &:hover {
    color: ${props => {
      if (props.$active !== undefined) {
        return props.$active ? '#234255' : '#29ba9b';
      }
      return '#29ba9b';
    }};
    background: ${props => {
      if (props.$active !== undefined) {
        return props.$active ? 'white' : '#ffffff80';
      }
      return 'transparent';
    }};
  }

  &:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    padding: ${props => props.$active !== undefined ? '10px 16px' : '10px 20px'};
    font-size: ${props => props.$active !== undefined ? '0.85rem' : '1rem'};
  }
`;

const TabContent = styled.div`
  padding: 20px 0;
  min-height: 250px;
`;

const TabSection = styled.div`
  margin-bottom: 30px;
  padding-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TabSectionTitle = styled.h3`
  font-size: 1.2rem;
  color: #234255;
  margin-bottom: 15px;
  font-weight: 600;
  position: relative;
  display: block;
  text-align: left;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: #29ba9b;
  }
`;

const TabText = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 0.95rem;
  text-align: left;
  
  strong {
    color: #234255;
    font-weight: 600;
  }
`;

const ClubCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9fafb;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
`;

const ClubName = styled.h4`
  font-size: 1.2rem;
  color: #234255;
  margin-bottom: 15px;
  font-weight: 600;
`;

const ClubDetail = styled.div`
  margin-bottom: 10px;
  color: #6b7280;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  
  strong {
    color: #234255;
    font-weight: 600;
  }
`;

const TournamentCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9fafb;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
`;

const TournamentInfo = styled.div`
  flex: 1;
`;

const TournamentName = styled.h4`
  font-size: 1.2rem;
  color: #234255;
  margin-bottom: 12px;
  font-weight: 600;
`;

const TournamentDate = styled.div`
  color: #6b7280;
  margin-bottom: 8px;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:before {
    content: '📅';
    font-size: 0.9rem;
  }
`;

const TournamentLocation = styled.div`
  color: #6b7280;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  
  &:before {
    content: '📍';
    font-size: 0.9rem;
  }
`;

const TournamentStatus = styled.div`
  padding: 3px 8px;
  border-radius: 2px;
  font-size: 0.75rem;
  font-weight: 400;
  background: ${props => {
    switch(props.status) {
      case 'upcoming': return '#f3f4f6';
      case 'active': return '#ecfdf5';
      case 'completed': return '#eff6ff';
      default: return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch(props.status) {
      case 'upcoming': return '#4b5563';
      case 'active': return '#047857';
      case 'completed': return '#2563eb';
      default: return '#4b5563';
    }
  }};
  display: inline-block;
  text-align: center;
  min-width: 70px;
`;

// Tournament components - exactly like Tournament page
const TournamentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProfileTournamentCard = styled.div`
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

const ProfileTournamentBanner = styled.div`
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

const ProfileTournamentInfo = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
  
const ProfileTournamentName = styled.h3`
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
  font-size: 0.8rem;
  margin-bottom: 16px;

  &:hover {
    background: #d1fae5;
    border-color: #34d399;
  }
`;

const ProfileTournamentDate = styled.div`
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

const ProfileTournamentLocation = styled(ProfileTournamentDate)`
  margin-bottom: 8px;
`;

const ProfileTournamentSkillLevels = styled(ProfileTournamentDate)`
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

const ProfileTournamentCategories = styled.div`
  margin-bottom: 16px;
`;

const ProfileCategoriesTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #334155;
  margin-bottom: 12px;
  
  svg {
    width: 16px;
    height: 16px;
    color: #29ba9b;
    flex-shrink: 0;
  }
`;

const ProfileCategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProfileCategoryItem = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
  }
`;

const ProfileCategoryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
`;

const ProfileCategoryBullet = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #29ba9b;
  flex-shrink: 0;
`;

const ProfileCategoryName = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 2px;
`;

const ProfileCategoryDetails = styled.div`
  font-size: 0.8rem;
  color: #64748b;
`;

const ProfileCategoryStatus = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${props => props.$isFull ? '#ef4444' : '#29ba9b'};
  background: ${props => props.$isFull ? '#fef2f2' : '#f0fdf4'};
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid ${props => props.$isFull ? '#fecaca' : '#bbf7d0'};
`;

const ProfileTournamentStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ProfileParticipantCount = styled.div`
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

const ProfileRegistrationFee = styled(ProfileParticipantCount)`
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

const ProfileRegisterButton = styled.button`
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
  outline: none;
  
  &:hover:not(:disabled) {
    background: #25a589;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(41, 186, 155, 0.2);
  }
  
  &:focus:not(:disabled) {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &:disabled {
    background: #f1f5f9;
    color: #94a3b8;
    cursor: not-allowed;
  }
`;

const ProfileStatusBadge = styled.div`
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
      case 'upcoming':
        return `
          background: rgba(59, 130, 246, 0.9);
          color: white;
          border: 1px solid rgba(59, 130, 246, 0.3);
        `;
      case 'active':
        return `
          background: rgba(34, 197, 94, 0.9);
          color: white;
          border: 1px solid rgba(34, 197, 94, 0.3);
        `;
      case 'completed':
        return `
          background: rgba(107, 114, 128, 0.9);
          color: white;
          border: 1px solid rgba(107, 114, 128, 0.3);
        `;
      default:
        return `
          background: rgba(107, 114, 128, 0.9);
          color: white;
          border: 1px solid rgba(107, 114, 128, 0.3);
        `;
    }
  }}
`;

const TournamentResultInfo = styled.div`
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
  font-size: 0.875rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 6px;
  
  svg {
    width: 14px;
    height: 14px;
    color: #94a3b8;
  }
`;

// Club search styled components
const ClubSearchSection = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

const ClubSearchInputContainer = styled.div`
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

const ClubSearchInput = styled.input`
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

const CreateClubButton = styled.button`
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1.5px solid #29ba9b;
  background: #29ba9b;
  color: white;
  white-space: nowrap;
  min-width: 140px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: #26a085;
    border-color: #26a085;
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

// Club card styled components (similar to ClubsCourts)
const ClubGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProfileClubCard = styled.div`
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

const ProfileClubImage = styled.div`
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

const ProfileClubInfo = styled.div`
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
    margin-bottom: 16px;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const ProfileClubDetails = styled.div`
  display: flex;
  gap: 12px;
  font-size: 0.875rem;
  color: #64748b;
  flex-wrap: wrap;
  margin-bottom: 16px;
  
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

const ProfileClubType = styled.span`
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 12px;
  background: ${props => props.type === 'club' ? '#f0f9ff' : '#f0fdf4'};
  color: ${props => props.type === 'club' ? '#0369a1' : '#166534'};
`;

const ProfileClubCategories = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const CategoryBadge = styled.span`
  padding: 2px 8px;
  background: #f1f5f9;
  color: #475569;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const UserPlacementBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 12px;
  background: rgba(41, 186, 155, 0.9);
  color: white;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  backdrop-filter: blur(4px);
`;

const MemberSinceInfo = styled.div`
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #f1f5f9;
  font-size: 0.875rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 6px;
  
  svg {
    width: 14px;
    height: 14px;
    color: #94a3b8;
  }
`;

// Tournament search styled components
const TournamentSearchSection = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

const TournamentSearchInputContainer = styled.div`
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

const TournamentSearchInput = styled.input`
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

const HostTournamentButton = styled.button`
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1.5px solid #29ba9b;
  background: #29ba9b;
  color: white;
  white-space: nowrap;
  min-width: 160px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: #26a085;
    border-color: #26a085;
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

// Tournament Detail View Components
const TournamentDetailContainer = styled.div`
  animation: fadeIn 0.3s ease;
  margin-top: 24px;

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
`;

const BackToListButton = styled.button`
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

const TournamentDetailTitle = styled.h2`
  font-size: 2.5rem;
  color: #234255;
  margin-bottom: 12px;
  font-weight: 800;
  letter-spacing: -0.5px;
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
  top: 16px;
  right: 16px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  backdrop-filter: blur(10px);
  z-index: 10;
  
  ${props => {
    switch (props.$status?.toLowerCase()) {
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
`;

const TournamentDetailBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    gap: 32px;
  }
`;

const TournamentDetailLeft = styled.div``;

const TournamentDetailRight = styled.div`
  width: 300px;
  flex-shrink: 0;
  
  @media (max-width: 1024px) {
    width: 100%;
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

const TournamentDetailType = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: ${props => {
    switch (props.type) {
      case 'beginner': return '#f0fdf4';
      case 'intermediate': return '#fef3c7';
      case 'advanced': return '#fef2f2';
      case 'open': return '#f0f9ff';
      default: return '#f8fafc';
    }
  }};
  border-radius: 20px;
  color: ${props => {
    switch (props.type) {
      case 'beginner': return '#15803d';
      case 'intermediate': return '#d97706';
      case 'advanced': return '#dc2626';
      case 'open': return '#0369a1';
      default: return '#475569';
    }
  }};
  font-size: 12px;
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

  svg {
    width: 14px;
    height: 14px;
  }
`;

const TournamentDetailDescription = styled.p`
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }
`;

const TournamentDetailSection = styled.div`
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const TournamentDetailSectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 18px;
    height: 18px;
    color: #29ba9b;
  }
`;

const TournamentDetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
`;

const TournamentDetailsItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
  transition: all 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f1f5f9;
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
`;

const DetailItemIcon = styled.div`
  width: 36px;
  height: 36px;
  background: #29ba9b;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
    color: white;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    margin-right: 0;
    margin-bottom: 4px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const DetailItemContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    width: 100%;
  }
`;

const DetailItemLabel = styled.div`
  font-weight: 600;
  color: #475569;
  font-size: 0.9rem;
`;

const DetailItemValue = styled.div`
  color: #334155;
  font-weight: 500;
  font-size: 0.9rem;
  text-align: right;
  
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const ProfileTabNavigation = styled.div`
  display: flex;
  background: #f8fafc;
  border-radius: 10px;
  padding: 4px;
  margin-bottom: 24px;
  border: 1px solid #e2e8f0;
  width: 100%;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
    padding: 3px;
  }
`;

const ProfileTabButton = styled.button`
  flex: 1;
  padding: 10px 16px;
  border: none;
  background: ${props => props.$active ? 'white' : 'transparent'};
  color: ${props => props.$active ? '#234255' : '#64748b'};
  font-weight: ${props => props.$active ? '600' : '500'};
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 6px;
  white-space: nowrap;
  position: relative;
  box-shadow: ${props => props.$active ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'};
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
    padding: 8px 12px;
    font-size: 0.8rem;
  }
`;

const ProfileTabContent = styled.div`
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

const HostActionButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HostActionButton = styled.button`
  flex: 1;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1.5px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  ${props => props.variant === 'primary' ? `
    background: #29ba9b;
    color: white;
    border-color: #29ba9b;
    
    &:hover {
      background: #26a085;
      border-color: #26a085;
      transform: translateY(-1px);
    }
  ` : props.variant === 'secondary' ? `
    background: #3b82f6;
    color: white;
    border-color: #3b82f6;
    
    &:hover {
      background: #2563eb;
      border-color: #2563eb;
      transform: translateY(-1px);
    }
  ` : `
    background: white;
    color: #6b7280;
    border-color: #e2e8f0;
    
    &:hover {
      background: #f8fafc;
      border-color: #cbd5e0;
    }
  `}
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

// Location styled components for tournament details
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

// Bracket-related styled components from Tournament.jsx
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
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e2e8f0;

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
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

  @media (max-width: 768px) {
    h4 {
      font-size: 1rem;
    }
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

const CategoryCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const CategoryHeader = styled.div`
  padding: 20px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const CategoryHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CategoryHeaderIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .icon {
    width: 40px;
    height: 40px;
    background: #29ba9b;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    gap: 10px;

    .icon {
      width: 36px;
      height: 36px;
      font-size: 1.1rem;
    }
  }
`;

const CategoryHeaderInfo = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #334155;
    margin: 0 0 4px 0;
  }

  .details {
    font-size: 0.9rem;
    color: #64748b;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.1rem;
    }

    .details {
      font-size: 0.85rem;
      gap: 12px;
    }
  }
`;

const CategoryExpandIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  transform: ${props => props.$expanded ? 'rotate(180deg)' : 'rotate(0deg)'};

  svg {
    width: 14px;
    height: 14px;
    color: #64748b;
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

const CategoryBracketContent = styled.div`
  padding: 20px;
  background: white;
  display: ${props => props.$expanded ? 'block' : 'none'};
  animation: ${props => props.$expanded ? 'slideDown 0.3s ease' : 'none'};

  @keyframes slideDown {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 1000px;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const BracketPlaceholder = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #64748b;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px dashed #cbd5e1;

  .icon {
    font-size: 3rem;
    margin-bottom: 16px;
    opacity: 0.5;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #475569;
    margin: 0 0 8px 0;
  }

  p {
    font-size: 0.9rem;
    margin: 0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    padding: 32px 16px;

    .icon {
      font-size: 2.5rem;
    }

    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

const Profile = () => {
  const { user, showNotification } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRef = useRef(null);
  const [activeTab, setActiveTab] = useState('about');
  const [isLoading, setIsLoading] = useState(true);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [bioText, setBioText] = useState("I've been playing pickleball for 3 years and love the sport! Looking to improve my game and meet new players.");
  const [clubSearchTerm, setClubSearchTerm] = useState('');
  const [tournamentSearchTerm, setTournamentSearchTerm] = useState('');
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [tournamentDetailTab, setTournamentDetailTab] = useState('details');
  const [expandedCategories, setExpandedCategories] = useState({});
  
  // Registration modal state
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [registrationTournament, setRegistrationTournament] = useState(null);
  
  // Player selection state
  const [showPlayerSelectionModal, setShowPlayerSelectionModal] = useState(false);
  const [playerSelectionType, setPlayerSelectionType] = useState(''); // 'partner', 'team-0', 'team-1', etc.
  const [playerSearchTerm, setPlayerSearchTerm] = useState('');
  
  // Force re-render of category dropdown when player ages or DUPR ratings change
  const [categoryFilterKey, setCategoryFilterKey] = useState(0);
  const [registeredPlayers, setRegisteredPlayers] = useState([
    { 
      pplId: 'PPL001', 
      name: 'John Doe', 
      gender: 'male',
      age: 28,
      duprRatings: { singles: '3.5', doubles: '3.7' }
    },
    { 
      pplId: 'PPL002', 
      name: 'Jane Smith', 
      gender: 'female',
      age: 25,
      duprRatings: { singles: '4.0', doubles: '4.2' }
    },
    { 
      pplId: 'PPL003', 
      name: 'Mike Johnson', 
      gender: 'male',
      age: 32,
      duprRatings: { singles: '3.8', doubles: '3.9' }
    },
    { 
      pplId: 'PPL004', 
      name: 'Sarah Wilson', 
      gender: 'female',
      age: 29,
      duprRatings: { singles: '3.2', doubles: '3.4' }
    },
    { 
      pplId: 'PPL005', 
      name: 'David Brown', 
      gender: 'male',
      age: 35,
      duprRatings: { singles: '4.5', doubles: '4.3' }
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
  



  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Handle incoming state from Tournament page (when navigating back)
  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  // Force re-render of category dropdown when player information changes
  useEffect(() => {
    setCategoryFilterKey(prev => prev + 1);
  }, [
    registrationForm.primaryPlayer?.age,
    registrationForm.primaryPlayer?.duprRatings,
    registrationForm.partner?.age,
    registrationForm.partner?.duprRatings,
    registrationForm.teamMembers
  ]);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Here you would typically upload the file
      showNotification('Profile picture updated!', 'success');
    }
  };

  const handleEdit = () => {
    setIsEditMode(!isEditMode);
    showNotification(isEditMode ? 'Edit mode disabled' : 'Edit mode enabled', 'info');
  };

  const handleEditBio = () => {
    setIsEditingBio(true);
  };

  const handleSaveBio = () => {
    setIsEditingBio(false);
    showNotification('Bio updated successfully!', 'success');
  };

  const handleCancelBio = () => {
    setBioText("I've been playing pickleball for 3 years and love the sport! Looking to improve my game and meet new players.");
    setIsEditingBio(false);
  };

  const handleCreateClub = () => {
    showNotification('Create Club functionality coming soon!', 'info');
  };

  const handleHostTournament = () => {
    navigate('/host-tournament');
  };

  const handleTournamentClick = (tournament) => {
    setSelectedTournament(tournament);
    setTournamentDetailTab('details');
  };

  const handleBackToTournamentList = () => {
    setSelectedTournament(null);
    setTournamentDetailTab('details');
  };



  const handleApplyAsCoach = () => {
    showNotification('Apply as Coach functionality coming soon!', 'info');
  };

  const toggleCategoryExpansion = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // Registration handling functions
  const handleRegister = async (tournamentId) => {
    // Check auth state
    if (!user) {
      showNotification('Please sign in to register for tournaments', 'error');
      return;
    }

    // Find the tournament - check both tournaments array and selectedTournament
    let tournament = tournamentData.find(t => t.id === tournamentId);
    
    // If not found in tournaments array, check if it's the currently selected tournament
    if (!tournament && selectedTournament && selectedTournament.id === tournamentId) {
      tournament = selectedTournament;
    }
    
    if (tournament) {
      setRegistrationTournament(tournament);
      setShowRegistrationModal(true);
      // Reset form but preserve primary player information if user is authenticated
      setRegistrationForm(prev => {
        const primaryPlayerInfo = user ? {
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
      console.log('Registration submitted:', {
        tournament: registrationTournament.name,
        form: registrationForm
      });
      
      // Close modal and show success message
      setShowRegistrationModal(false);
      showNotification('Registration submitted successfully! You will receive a confirmation email shortly.', 'success');
      
    } catch (err) {
      console.error('Registration failed:', err);
      showNotification('Registration failed. Please try again.', 'error');
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
      console.error('Error getting team composition:', error);
      // Return a safe default composition
      return [
        { gender: 'male', required: true, label: 'Required Player 1' },
        { gender: 'female', required: true, label: 'Required Player 2' },
        { gender: 'any', required: false, label: 'Optional Player 1' }
      ];
    }
  };

  // Player selection handling functions
  const handlePlayerSelection = (type) => {
    setPlayerSelectionType(type);
    setShowPlayerSelectionModal(true);
    setPlayerSearchTerm('');
  };

  const handleRemovePlayer = (type, index = null) => {
    if (type === 'partner') {
      setRegistrationForm(prev => ({
        ...prev,
        partner: {
          pplId: '',
          name: '',
          gender: ''
        }
      }));
    } else if (type === 'team' && index !== null) {
      setRegistrationForm(prev => ({
        ...prev,
        teamMembers: prev.teamMembers.map((member, i) => 
          i === index 
            ? { ...member, pplId: '', name: '', age: '', duprRatings: null }
            : member
        )
      }));
    }
  };

  const handleSelectPlayer = (player) => {
    if (playerSelectionType === 'partner') {
      setRegistrationForm(prev => ({
        ...prev,
        partner: {
          pplId: player.pplId,
          name: player.name,
          gender: player.gender,
          age: player.age,
          duprRatings: player.duprRatings
        }
      }));
    } else if (playerSelectionType.startsWith('team-')) {
      const index = parseInt(playerSelectionType.split('-')[1]);
      setRegistrationForm(prev => ({
        ...prev,
        teamMembers: prev.teamMembers.map((member, i) => 
          i === index 
            ? {
                ...member,
                pplId: player.pplId,
                name: player.name,
                age: player.age,
                duprRatings: player.duprRatings
              }
            : member
        )
      }));
    }
    setShowPlayerSelectionModal(false);
    setPlayerSelectionType('');
  };

  const getFilteredPlayers = () => {
    let filteredPlayers = registeredPlayers;

    // Filter by search term
    if (playerSearchTerm) {
      filteredPlayers = filteredPlayers.filter(player =>
        player.name.toLowerCase().includes(playerSearchTerm.toLowerCase()) ||
        player.pplId.toLowerCase().includes(playerSearchTerm.toLowerCase())
      );
    }

    // Filter by category constraints if a category is selected
    if (registrationForm.category && registrationTournament) {
      const selectedCategory = Object.values(registrationTournament?.tournamentCategories || {})
        .find(cat => cat.id === registrationForm.category);
      
      if (selectedCategory) {
        const primaryPlayerGender = registrationForm.primaryPlayer?.gender || user?.gender || 'male';
        const allowedGenders = getAllowedGenders(selectedCategory.name, primaryPlayerGender);
        
        // For partner selection, filter by allowed genders
        if (playerSelectionType === 'partner') {
          filteredPlayers = filteredPlayers.filter(player => 
            allowedGenders.includes(player.gender)
          );
        }
        
        // For team selection, filter by the specific slot requirements
        if (playerSelectionType.startsWith('team-')) {
          const index = parseInt(playerSelectionType.split('-')[1]);
          const teamMember = registrationForm.teamMembers[index];
          if (teamMember?.gender && teamMember.gender !== 'any') {
            filteredPlayers = filteredPlayers.filter(player => 
              player.gender === teamMember.gender
            );
          }
        }
      }
    }

    return filteredPlayers;
  };

  // SearchIcon component for the club search
  const SearchIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // PlusIcon component for the create club button
  const PlusIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14m-7-7h14" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // TrophyIcon component for the host tournament button
  const TrophyIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 22h16" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 9c0 4.97-4.03 9-9 9s-9-4.03-9-9V6h18v3Z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Tournament page icons - exact copies from Tournament.jsx
  const CalendarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const LocationIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 13a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const MoneyIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
      <text x="12" y="14.5" dominantBaseline="middle" textAnchor="middle" fontSize="14" stroke="none" fill="currentColor" style={{fontWeight: "bold"}}>₱</text>
    </svg>
  );

  const ParticipantIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Club LocationIcon and CalendarIcon (different from tournament ones)
  const ClubLocationIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ClubCalendarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Dummy user data for demonstration
  const userAge = 28;
  const pplId = 'PPL-001234';

  const rankData = [
    { category: 'Singles', rank: '4' },
    { category: 'Doubles', rank: '5' },
    { category: 'Mixed', rank: '4' }
  ];

  const duprRatings = [
    { type: 'Singles', rating: '5.502' },
    { type: 'Doubles', rating: '5.952' }
  ];

  if (!user) {
    return (
      <ProfileContainer>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h2 style={{ color: '#234255', marginBottom: '16px', fontSize: '1.3rem', fontWeight: '500' }}>Sign in to view your profile</h2>
          <p style={{ color: '#6b7280', marginBottom: '20px', fontSize: '0.9rem' }}>You need to be logged in to access your profile information.</p>
          <button 
            style={{ 
              background: '#29ba9b', 
              color: 'white', 
              border: 'none', 
              padding: '8px 16px', 
              borderRadius: '4px', 
              fontSize: '0.9rem', 
              fontWeight: '500',
              cursor: 'pointer'
            }}
            onClick={() => window.location.href = '/signin'}
          >
            Sign In
          </button>
        </div>
      </ProfileContainer>
    );
  }
  
  if (isLoading) {
    return (
      <ProfileContainer>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <div style={{ 
            display: 'inline-block',
            width: '30px',
            height: '30px',
            border: '2px solid #f3f3f3',
            borderTop: '2px solid #29ba9b',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '16px'
          }} />
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Loading profile...</p>
        </div>
      </ProfileContainer>
    );
  }

  // Dummy data for tabs
  const aboutData = {
    bio: bioText,
    playingStyle: "Aggressive baseliner with a strong forehand",
    preferredPaddle: "Selkirk AMPED Invikta"
  };
const clubData = [
    {
      id: 1,
      name: "Riverside Pickleball Club",
      location: "123 Main St, Riverside, CA",
      memberSince: "January 2022",
      userPlacement: "Active Member",
      categories: ["Singles", "Doubles", "Mixed"],
      type: "club",
      imageIndex: 0,
      description: "Premier pickleball club with professional coaching and competitive leagues."
    },
    {
      id: 2,
      name: "Downtown Recreation Center",
      location: "456 Oak Ave, Riverside, CA", 
      memberSince: "March 2023",
      userPlacement: "Casual Player",
      categories: ["Recreational", "Doubles"],
      type: "club_and_courts",
      imageIndex: 1,
      description: "Community recreation center offering casual play and beginner-friendly programs."
    },
    {
      id: 3,
      name: "Elite Pickleball Academy",
      location: "789 Sports Blvd, Riverside, CA",
      memberSince: "June 2023", 
      userPlacement: "Tournament Player",
      categories: ["Singles", "Doubles", "Mixed", "Tournament"],
      type: "club",
      imageIndex: 2,
      description: "High-performance training facility for competitive players and tournaments."
    }
  ];

  const tournamentData = [
    {
      id: "john-doe-championship",
      name: "John Doe's Pickleball Championship",
      date: "2024-05-15T09:00:00Z",
      endDate: "2024-05-16T18:00:00Z",
      location: "Elite Sports Complex",
      address: "456 Championship Blvd, Sports City, CA 92101",
      latitude: 32.7157,
      longitude: -117.1611,
      status: "upcoming",
      entryFee: 2500,
      prizePool: 100000,
      maxParticipants: 32,
      currentParticipants: 24,
      tournamentType: "open",
      tier: 1,
      description: "The premier pickleball tournament hosted by renowned organizer John Doe. Featuring world-class facilities, professional officiating, and the largest prize pool in Southern California. This championship brings together top players from across the region for an unforgettable competitive experience.",
      bannerUrl: "https://images.unsplash.com/photo-1659318006095-4d44845f3a1b?q=80&w=1210&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      registrationDeadline: "2024-05-10T23:59:59Z",
      contactEmail: "john.doe@elitepickleball.com",
      contactPhone: "+1 (555) 987-6543",
      organizer: "John Doe",
      organizerProfile: {
        name: "John Doe",
        email: "john.doe@elitepickleball.com",
        phone: "+1 (555) 987-6543",
        bio: "Professional tournament organizer with 10+ years experience hosting premier pickleball events."
      },
      rules: [
        "All matches played under official USA Pickleball rules",
        "Players must arrive 45 minutes before scheduled match time",
        "Professional athletic attire and non-marking court shoes required",
        "Double elimination format for all divisions",
        "Matches are best of 3 games to 11, win by 2"
      ],
      amenities: [
        "12 Professional Grade Courts", 
        "Live Streaming & Commentary", 
        "Professional Officiating", 
        "Player Lounge", 
        "Food & Beverage Service",
        "Equipment Shop",
        "Physical Therapy Station",
        "Awards Ceremony"
      ],
      tournamentCategories: {
        "mens-open-doubles": {
          id: "mens-open-doubles",
          name: "Men's Open Doubles",
          skillLevel: "Open",
          tier: 1,
          prizePool: 40000,
          participants: 16,
          maxParticipants: 16,
          ageGroup: "18+",
          registrations: [
            { id: "player1", name: "Alex Rodriguez", partner: "Mike Johnson", status: "approved", rating: "5.2", seed: 1 },
            { id: "player2", name: "David Chen", partner: "Sam Williams", status: "approved", rating: "5.0", seed: 2 },
            { id: "player3", name: "Carlos Martinez", partner: "Tony Brown", status: "approved", rating: "4.8", seed: 3 },
            { id: "player4", name: "Ryan Thompson", partner: "Jake Davis", status: "approved", rating: "4.7", seed: 4 },
            { id: "player5", name: "Kevin Lee", partner: "Mark Wilson", status: "approved", rating: "4.6", seed: 5 },
            { id: "player6", name: "Steve Garcia", partner: "Paul Anderson", status: "approved", rating: "4.5", seed: 6 },
            { id: "player7", name: "Chris Taylor", partner: "Matt Jones", status: "approved", rating: "4.4", seed: 7 },
            { id: "player8", name: "Juan Morales", partner: "Luis Santos", status: "approved", rating: "4.3", seed: 8 }
          ],
          groupStage: {
            groups: [
              {
                id: "group-a",
                name: "Group A",
                status: "completed",
                standings: [
                  { player: "Alex Rodriguez / Mike Johnson", wins: 3, losses: 0, pointsFor: 66, pointsAgainst: 42, qualified: true },
                  { player: "David Chen / Sam Williams", wins: 2, losses: 1, pointsFor: 61, pointsAgainst: 55, qualified: true },
                  { player: "Carlos Martinez / Tony Brown", wins: 1, losses: 2, pointsFor: 54, pointsAgainst: 58, qualified: false },
                  { player: "Ryan Thompson / Jake Davis", wins: 0, losses: 3, pointsFor: 48, pointsAgainst: 66, qualified: false }
                ]
              },
              {
                id: "group-b",
                name: "Group B",
                status: "completed",
                standings: [
                  { player: "Kevin Lee / Mark Wilson", wins: 3, losses: 0, pointsFor: 66, pointsAgainst: 45, qualified: true },
                  { player: "Steve Garcia / Paul Anderson", wins: 2, losses: 1, pointsFor: 59, pointsAgainst: 52, qualified: true },
                  { player: "Chris Taylor / Matt Jones", wins: 1, losses: 2, pointsFor: 53, pointsAgainst: 60, qualified: false },
                  { player: "Juan Morales / Luis Santos", wins: 0, losses: 3, pointsFor: 44, pointsAgainst: 65, qualified: false }
                ]
              }
            ]
          },
          knockoutStage: {
            quarterFinals: [
              { id: "qf1", player1: "Alex Rodriguez / Mike Johnson", player2: "Steve Garcia / Paul Anderson", winner: "Alex Rodriguez / Mike Johnson", score: "11-7, 11-5", completed: true },
              { id: "qf2", player1: "Kevin Lee / Mark Wilson", player2: "David Chen / Sam Williams", winner: "Kevin Lee / Mark Wilson", score: "11-9, 9-11, 11-8", completed: true }
            ],
            semiFinals: [
              { id: "sf1", player1: "Alex Rodriguez / Mike Johnson", player2: "Kevin Lee / Mark Wilson", winner: "Alex Rodriguez / Mike Johnson", score: "11-6, 11-9", completed: true }
            ],
            final: {
              id: "final", 
              player1: "Alex Rodriguez / Mike Johnson", 
              player2: "TBD", 
              winner: "Alex Rodriguez / Mike Johnson", 
              score: "11-8, 11-6", 
              completed: true
            },
            thirdPlace: {
              id: "third", 
              player1: "Kevin Lee / Mark Wilson", 
              player2: "TBD", 
              winner: "Kevin Lee / Mark Wilson", 
              score: "11-7, 11-4", 
              completed: true
            }
          }
        },
        "mixed-open-doubles": {
          id: "mixed-open-doubles",
          name: "Mixed Open Doubles",
          skillLevel: "Open", 
          tier: 1,
          prizePool: 35000,
          participants: 12,
          maxParticipants: 16,
          ageGroup: "18+",
          registrations: [
            { id: "mixed1", name: "Sarah Johnson", partner: "Tom Wilson", status: "approved", rating: "4.9", seed: 1 },
            { id: "mixed2", name: "Maria Garcia", partner: "John Davis", status: "approved", rating: "4.7", seed: 2 },
            { id: "mixed3", name: "Lisa Chen", partner: "Mike Rodriguez", status: "approved", rating: "4.6", seed: 3 },
            { id: "mixed4", name: "Emma Thompson", partner: "Alex Brown", status: "approved", rating: "4.5", seed: 4 },
            { id: "mixed5", name: "Jennifer Lee", partner: "Carlos Martinez", status: "approved", rating: "4.4", seed: 5 },
            { id: "mixed6", name: "Rachel Taylor", partner: "David Anderson", status: "approved", rating: "4.3", seed: 6 }
          ],
          groupStage: {
            groups: [
              {
                id: "group-a",
                name: "Group A",
                status: "completed",
                standings: [
                  { player: "Sarah Johnson / Tom Wilson", wins: 3, losses: 0, pointsFor: 66, pointsAgainst: 45, qualified: true },
                  { player: "Maria Garcia / John Davis", wins: 2, losses: 1, pointsFor: 58, pointsAgainst: 52, qualified: true },
                  { player: "Lisa Chen / Mike Rodriguez", wins: 1, losses: 2, pointsFor: 51, pointsAgainst: 59, qualified: false },
                  { player: "Jennifer Lee / Carlos Martinez", wins: 0, losses: 3, pointsFor: 42, pointsAgainst: 61, qualified: false }
                ]
              },
              {
                id: "group-b",
                name: "Group B",
                status: "completed",
                standings: [
                  { player: "Emma Thompson / Alex Brown", wins: 3, losses: 0, pointsFor: 63, pointsAgainst: 48, qualified: true },
                  { player: "Rachel Taylor / David Anderson", wins: 2, losses: 1, pointsFor: 56, pointsAgainst: 53, qualified: true },
                  { player: "Michael Torres / Jessica Kim", wins: 1, losses: 2, pointsFor: 52, pointsAgainst: 58, qualified: false },
                  { player: "Robert Chen / Emily Wang", wins: 0, losses: 3, pointsFor: 45, pointsAgainst: 62, qualified: false }
                ]
              }
            ]
          },
          knockoutStage: {
            quarterFinals: [
              { id: "qf1", player1: "Sarah Johnson / Tom Wilson", player2: "Rachel Taylor / David Anderson", winner: "Sarah Johnson / Tom Wilson", score: "11-6, 11-4", completed: true },
              { id: "qf2", player1: "Emma Thompson / Alex Brown", player2: "Maria Garcia / John Davis", winner: "Emma Thompson / Alex Brown", score: "11-9, 8-11, 11-7", completed: true }
            ],
            semiFinals: [
              { id: "sf1", player1: "Sarah Johnson / Tom Wilson", player2: "Emma Thompson / Alex Brown", winner: "Sarah Johnson / Tom Wilson", score: "11-8, 11-6", completed: true }
            ],
            final: {
              id: "final", 
              player1: "Sarah Johnson / Tom Wilson", 
              player2: "TBD", 
              winner: "Sarah Johnson / Tom Wilson", 
              score: "11-7, 11-5", 
              completed: true
            },
            thirdPlace: {
              id: "third", 
              player1: "Emma Thompson / Alex Brown", 
              player2: "TBD", 
              winner: "Emma Thompson / Alex Brown", 
              score: "11-9, 11-6", 
              completed: true
            }
          }
        }
      },
      events: [
        {
          id: "event1",
          title: "Registration & Check-in",
          description: "All players must check in and complete registration. Bring valid ID and proof of payment.",
          date: "2024-05-15T08:00:00Z",
          duration: "60 minutes",
          location: "Main Lobby"
        },
        {
          id: "event2", 
          title: "Tournament Briefing",
          description: "Mandatory rules briefing and player introductions. Tournament format explanation.",
          date: "2024-05-15T09:00:00Z",
          duration: "30 minutes",
          location: "Center Court"
        },
        {
          id: "event3",
          title: "Opening Ceremony",
          description: "Welcome address by John Doe, national anthem, and ceremonial first serve.",
          date: "2024-05-15T09:30:00Z", 
          duration: "30 minutes",
          location: "Center Court"
        },
        {
          id: "event4",
          title: "Round 1 Matches",
          description: "First round matches for all divisions begin. Players should be ready 15 minutes early.",
          date: "2024-05-15T10:00:00Z",
          duration: "4 hours",
          location: "Courts 1-8"
        },
        {
          id: "event5",
          title: "Lunch Break",
          description: "Catered lunch for all participants and spectators. Sponsored by Elite Sports Nutrition.",
          date: "2024-05-15T14:00:00Z",
          duration: "90 minutes", 
          location: "Player Lounge"
        },
        {
          id: "event6",
          title: "Semifinals",
          description: "Semi-final matches for advancing teams. Live streaming begins.",
          date: "2024-05-15T15:30:00Z",
          duration: "3 hours",
          location: "Courts 1-4"
        },
        {
          id: "event7",
          title: "Day 2: Finals",
          description: "Championship finals for all divisions. Awards ceremony to follow.",
          date: "2024-05-16T16:00:00Z",
          duration: "3 hours",
          location: "Center Court"
        },
        {
          id: "event8",
          title: "Awards Ceremony",
          description: "Trophy presentation, prize distribution, and closing remarks by John Doe.",
          date: "2024-05-16T19:00:00Z",
          duration: "60 minutes",
          location: "Center Court"
        }
      ]
    }
   ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'about':
        return (
          <TabContent>
            <TabSection>
              <TabSectionTitle>Bio</TabSectionTitle>
              <BioContainer>
                {!isEditingBio && (
                  <EditBioButton onClick={handleEditBio}>
                    ✏️ Edit
                  </EditBioButton>
                )}
                {isEditingBio ? (
                  <>
                    <BioTextArea
                      value={bioText}
                      onChange={(e) => setBioText(e.target.value)}
                      placeholder="Tell us about yourself, your pickleball journey, goals, or anything you'd like other players to know..."
                      autoFocus
                    />
                    <BioEditButtons>
                      <BioButton onClick={handleCancelBio}>
                        Cancel
                      </BioButton>
                      <BioButton variant="save" onClick={handleSaveBio}>
                        Save
                      </BioButton>
                    </BioEditButtons>
                  </>
                ) : (
                  <TabText>{aboutData.bio || "Click 'Edit' to add your bio..."}</TabText>
                )}
              </BioContainer>
            </TabSection>
          </TabContent>
        );
      case 'club':
        return (
          <TabContent>
            <ClubSearchSection>
              <ClubSearchInputContainer>
                <SearchIcon />
                <ClubSearchInput
                  type="text"
                  placeholder="Search clubs by name or location..."
                  value={clubSearchTerm}
                  onChange={(e) => setClubSearchTerm(e.target.value)}
                />
              </ClubSearchInputContainer>
              <CreateClubButton onClick={handleCreateClub}>
                <PlusIcon />
                Create Club
              </CreateClubButton>
            </ClubSearchSection>
            
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#6b7280',
              fontSize: '1.1rem',
              fontWeight: '500'
            }}>
              🚀 Club features coming soon!
            </div>
          </TabContent>
        );
      case 'tournaments':
        return (
          <TabContent>
            {selectedTournament ? (
              <TournamentDetailContainer>
                <TournamentDetailHeader>
                  <BackToListButton onClick={handleBackToTournamentList}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 12H5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to Tournaments
                  </BackToListButton>
                  
                  <EditTournamentButton onClick={() => navigate('/host-tournament', { state: { editTournament: selectedTournament } })}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Edit Tournament
                  </EditTournamentButton>
                </TournamentDetailHeader>

                <TournamentDetailBanner>
                  {selectedTournament.bannerUrl && (
                    <img src={selectedTournament.bannerUrl} alt={selectedTournament.name} />
                  )}
                  <TournamentDetailStatusBadge status={selectedTournament.status}>
                    {selectedTournament.status.toUpperCase()}
                  </TournamentDetailStatusBadge>
                </TournamentDetailBanner>

                <TournamentDetailTitle>{selectedTournament.name}</TournamentDetailTitle>

                <TournamentDetailBody>
                  <TournamentDetailLeft>

                    <TournamentDetailDescription>
                      {selectedTournament.description || 'No description available for this tournament.'}
                    </TournamentDetailDescription>

                    {/* Tournament Tabs */}
                    <TabNavigation style={{ marginTop: '24px', marginBottom: '24px' }}>
                      <TabButton 
                        $active={tournamentDetailTab === 'details'} 
                        onClick={() => setTournamentDetailTab('details')}
                      >
                        Details
                      </TabButton>
                      <TabButton 
                        $active={tournamentDetailTab === 'guidelines'} 
                        onClick={() => setTournamentDetailTab('guidelines')}
                      >
                        Guidelines
                      </TabButton>
                      <TabButton 
                        $active={tournamentDetailTab === 'events'} 
                        onClick={() => setTournamentDetailTab('events')}
                      >
                        Events
                      </TabButton>
                      <TabButton 
                        $active={tournamentDetailTab === 'players'} 
                        onClick={() => setTournamentDetailTab('players')}
                      >
                        Players
                      </TabButton>
                      <TabButton 
                        $active={tournamentDetailTab === 'brackets'} 
                        onClick={() => setTournamentDetailTab('brackets')}
                      >
                        Brackets
                      </TabButton>
                    </TabNavigation>

                    {/* Tournament Tab Content */}
                    {tournamentDetailTab === 'details' && (
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
                                  const end = new Date(selectedTournament.endDate || selectedTournament.date);
                                  
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
                                {new Date(selectedTournament.registrationDeadline || selectedTournament.date).toLocaleDateString('en-US', { 
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
                                        let division = category.name || category.division || 'Mixed Doubles';
                                        
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
                                      })()
                                    }
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
                                onClick={() => window.open(`https://maps.google.com/?q=${selectedTournament.latitude || ''},${selectedTournament.longitude || ''}`, '_blank')}
                              >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Get Directions
                              </LocationButton>
                              <LocationButton onClick={() => navigator.share?.({ 
                                title: `Location: ${selectedTournament.location}`,
                                text: selectedTournament.address || selectedTournament.location,
                                url: `https://maps.google.com/?q=${selectedTournament.latitude || ''},${selectedTournament.longitude || ''}` 
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
                            <div className="venue-address">{selectedTournament.address || 'Address not provided'}</div>
                            {selectedTournament.latitude && selectedTournament.longitude && (
                              <div className="coordinates">
                                Coordinates: {selectedTournament.latitude}, {selectedTournament.longitude}
                              </div>
                            )}
                          </LocationInfo>
                          
                          <MapContainer 
                            onClick={() => window.open(`https://maps.google.com/?q=${selectedTournament.latitude || ''},${selectedTournament.longitude || ''}`, '_blank')}
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

                    {tournamentDetailTab === 'guidelines' && (
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

                    {tournamentDetailTab === 'events' && (
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

                    {tournamentDetailTab === 'players' && (
                      <TournamentDetailSection>
                        <TournamentDetailSectionTitle>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78Z" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Registered Players
                        </TournamentDetailSectionTitle>
                        <TournamentDetailDescription>
                          {selectedTournament.players ? (
                            selectedTournament.players.map((player, index) => (
                              <div key={index} style={{ marginBottom: '12px', padding: '12px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                                <p><strong>{player.name}</strong></p>
                                <p>Skill Level: {player.skillLevel}</p>
                                <p>Registration Date: {player.registrationDate}</p>
                              </div>
                            ))
                          ) : (
                            'No players registered yet.'
                          )}
                        </TournamentDetailDescription>
                      </TournamentDetailSection>
                    )}

                    {tournamentDetailTab === 'brackets' && (
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
                                        <BracketContainer>
                                          {/* Quarter Finals */}
                                          <BracketColumn>
                                            <BracketRound>
                                              <h4>Quarter-Finals</h4>
                                              <div className="round-subtitle">Top 8 Players</div>
                                            </BracketRound>
                                            {category.knockoutStage.quarterFinals.map((match, index) => (
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
                                                {/* Bracket connectors */}
                                                {index < category.knockoutStage.quarterFinals.length - 1 && (
                                                  <BracketConnector className="horizontal" />
                                                )}
                                              </MatchCard>
                                            ))}
                                          </BracketColumn>

                                          {/* Connecting lines between quarters and semis */}
                                          <BracketConnector className="vertical" />

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
                                                style={{ marginTop: index === 0 ? '50px' : '30px' }}
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

                                          {/* Connecting lines between semis and finals */}
                                          <BracketConnector className="corner-right" />

                                          {/* Championship */}
                                          <ChampionshipSection>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
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
                  </TournamentDetailLeft>
                  
                  <TournamentDetailRight>
                    <StickyActionBar>
                      <StickyActionTitle>Tournament Registration</StickyActionTitle>
                      
                      <PriceDisplay>
                        <div className="price">₱{selectedTournament.entryFee.toLocaleString()}</div>
                      </PriceDisplay>

                      {/* Action Buttons */}
                      <TournamentActionButtons>
                        <ActionButton variant="primary" 
                          onClick={() => {
                            // Call handleRegister to open registration modal
                            handleRegister(selectedTournament.id);
                          }}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          View Form
                        </ActionButton>
                        
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
                  </TournamentDetailRight>
                </TournamentDetailBody>
              </TournamentDetailContainer>
            ) : (
              <>
                <TournamentSearchSection>
                  <TournamentSearchInputContainer>
                    <SearchIcon />
                    <TournamentSearchInput
                      type="text"
                      placeholder="Search tournaments by name or location..."
                      value={tournamentSearchTerm}
                      onChange={(e) => setTournamentSearchTerm(e.target.value)}
                    />
                  </TournamentSearchInputContainer>
                  <HostTournamentButton onClick={handleHostTournament}>
                    <TrophyIcon />
                    Host a Tournament
                  </HostTournamentButton>
                </TournamentSearchSection>
                
                <TournamentGrid>
                  {tournamentData
                    .filter(tournament => 
                      tournament.name.toLowerCase().includes(tournamentSearchTerm.toLowerCase()) ||
                      tournament.location.toLowerCase().includes(tournamentSearchTerm.toLowerCase())
                    )
                    .map((tournament) => (
                    <ProfileTournamentCard 
                      key={tournament.id}
                      onClick={() => handleTournamentClick(tournament)}
                      style={{ cursor: 'pointer' }}
                    >
                      <ProfileTournamentBanner>
                        {tournament.bannerUrl && (
                          <img src={tournament.bannerUrl} alt={tournament.name} />
                        )}
                        <ProfileStatusBadge status={tournament.status}>
                          {tournament.status.toUpperCase()}
                        </ProfileStatusBadge>
                      </ProfileTournamentBanner>
                      <ProfileTournamentInfo>
                        <ProfileTournamentName>{tournament.name}</ProfileTournamentName>
                        
                        <ProfileTournamentDate>
                          <CalendarIcon />
                          {new Date(tournament.date).toLocaleDateString()}
                        </ProfileTournamentDate>
                        <ProfileTournamentLocation>
                            <LocationIcon />
                            {tournament.location}
                        </ProfileTournamentLocation>
                        <ProfileTournamentSkillLevels>
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
                        </ProfileTournamentSkillLevels>
                        <ProfileTournamentStats>
                          <ProfileParticipantCount>
                            <ParticipantIcon />
                            <div>
                              {tournament.currentParticipants}/{tournament.maxParticipants}
                          </div>
                          </ProfileParticipantCount>
                          <ProfileRegistrationFee>
                            <MoneyIcon />
                            <div>
                              <span>₱{tournament.entryFee}</span>
                              <span></span> 
                            </div>
                          </ProfileRegistrationFee>
                        </ProfileTournamentStats>
                        
                        {tournament.result && (
                          <TournamentResultInfo>
                            <TrophyIcon />
                            {tournament.result}
                          </TournamentResultInfo>
                        )}
                        
                        {tournament.status === 'upcoming' && (
                          <ProfileRegisterButton 
                            onClick={(e) => {
                              e.stopPropagation();
                              showNotification('Edit tournament functionality coming soon!', 'info');
                            }}
                          >
                            ✏️ Edit Tournament
                          </ProfileRegisterButton>
                        )}
                      </ProfileTournamentInfo>
                    </ProfileTournamentCard>
                  ))}
                </TournamentGrid>
              </>
            )}
          </TabContent>
        );
      default:
        return <TabContent>Select a tab</TabContent>;
    }
  };

  // Background container for the pickle image
  const ProfileBackgroundContainer = styled.div`
    position: relative;
    margin-bottom: 40px;
    margin-top: 0px;
    margin-left: -100px;
    margin-right: -100px;
    height: 200px;
    background: linear-gradient(
      rgba(0, 0, 0, 0.3), 
      rgba(0, 0, 0, 0.1)
    ), url(${pickleBackground}), url('/pickle_bg.png');
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    overflow: visible;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0.05) 50%,
        rgba(0, 0, 0, 0.1) 100%
      );
      z-index: 1;
      pointer-events: none;
    }
  `;

  // Content container that sits on top of the background
  const ProfileHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding: 40px 90px 30px 90px;
    min-height: 100%;
  `;

  const TopSection = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  `;

  const LeftSection = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 1;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }
  `;

  const NameAndDetailsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
    
    @media (max-width: 768px) {
      align-items: center;
      text-align: center;
    }
  `;

  const NameAndRanksRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: -20px;
    gap: 20px;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin-top: -15px;
    }
    
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    }
  `;

  const PlayerInfoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  `;

  const PlayerDetails = styled.div`
    margin-left: 30px;
    
    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 20px;
    }
  `;

  const StatsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    padding: 20px 24px;
    background-color: #ffffff;
    border-radius: 0px;
    border: 1px solid #e2e8f0;
    backdrop-filter: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
    margin-top: -80px;
    flex-shrink: 0;
    min-width: 300px;
    
    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
      margin-top: -75px;
      min-width: auto;
    }
  `;

  const StatBox = styled.div`
    text-align: center;
    padding: 12px 16px;
    min-width: 90px;
    flex-shrink: 0;
    position: relative;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
    }
  `;

  const StatCategory = styled.div`
    font-size: 0.7rem;
    color: #64748b;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  `;

  const StatValue = styled.div`
    font-weight: 800;
    color: #1e293b;
    font-size: 1.5rem;
    margin-bottom: 4px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(135deg, #29ba9b, #1e7a6b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `;

  const StatLabel = styled.div`
    font-size: 0.65rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: 500;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  `;

  const PlayerInfoGrid = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-top: -25px;
    padding: 15px 20px;
    
    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
    }
  `;

  const InfoItem = styled.div`
    text-align: center;
    padding: 5px 10px;
    min-width: 80px;
    flex-shrink: 0;
  `;

  const InfoLabel = styled.div`
    font-size: 0.75rem;
    color: #6b7280;
    margin-bottom: 3px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: left;
  `;

  const InfoValue = styled.div`
    font-weight: 600;
    color: #234255;
    font-size: 0.9rem;
    text-align: left;
  `;

const BioContainer = styled.div`
  position: relative;
`;

const BioTextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-family: inherit;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #374151;
  background-color: #ffffff;
  resize: vertical;
  text-align: left;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const BioEditButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  justify-content: flex-end;
`;

const BioButton = styled.button`
  padding: 6px 16px;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid;
  outline: none;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  ${props => props.variant === 'save' ? `
    background-color: #29ba9b;
    color: white;
    border-color: #29ba9b;
    
    &:hover {
      background-color: #249e85;
      border-color: #249e85;
    }
  ` : `
    background-color: white;
    color: #6b7280;
    border-color: #d1d5db;
    
    &:hover {
      background-color: #f9fafb;
      border-color: #9ca3af;
    }
  `}
`;

const EditBioButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  color: #29ba9b;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  outline: none;
  
  &:hover {
    background-color: #f0fffe;
    color: #249e85;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
`;

  return (
    <ProfileContainer>
      <ProfileBackgroundContainer>
        <ProfileHeader>
          <TopSection>
            <LeftSection>
              <AvatarContainer>
                <Avatar src={user.avatar} alt={user.name} />
                {isEditMode && (
                  <AvatarUploadButton onClick={handleAvatarClick}>
                    📷
                  </AvatarUploadButton>
                )}
                <HiddenFileInput
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </AvatarContainer>
              
              <NameAndDetailsSection>
                <NameAndRanksRow>
                  <UserName>{user.name}</UserName>
                  <StatsContainer>
                    {rankData.map((item, index) => (
                      <StatBox key={index}>
                        <StatCategory>{item.category}</StatCategory>
                        <StatValue>#{item.rank}</StatValue>
                        <StatLabel>Rank</StatLabel>
                      </StatBox>
                    ))}
                  </StatsContainer>
                </NameAndRanksRow>
                
                <PlayerInfoGrid>
                  <InfoItem>
                    <InfoLabel>PPL ID</InfoLabel>
                    <InfoValue>{pplId.replace('PPL-', '')}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>AGE</InfoLabel>
                    <InfoValue>{userAge} Years</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>GENDER</InfoLabel>
                    <InfoValue>{user.gender ? user.gender.charAt(0).toUpperCase() + user.gender.slice(1) : 'Not specified'}</InfoValue>
                  </InfoItem>
                  {duprRatings.map((rating, index) => (
                    <InfoItem key={index}>
                      <InfoLabel>{rating.type} DUPR</InfoLabel>
                      <InfoValue>{rating.rating}</InfoValue>
                    </InfoItem>
                  ))}
              </PlayerInfoGrid>
            </NameAndDetailsSection>
          </LeftSection>
          
          <div style={{ position: 'absolute', top: '-50px', right: '0', zIndex: 10 }}>
            <ButtonContainer>
              <ApplyCoachButton onClick={handleApplyAsCoach}>
                Apply as Coach
              </ApplyCoachButton>
              <EditButton onClick={handleEdit}>
                Edit Profile
              </EditButton>
            </ButtonContainer>
          </div>
        </TopSection>
      </ProfileHeader>
      </ProfileBackgroundContainer>
      
      {/* Tabs section below both profile sections */}
      <TabContainer>
        <TabHeader>
          <TabButton 
            active={activeTab === 'about'} 
            onClick={() => setActiveTab('about')}
          >
            About
          </TabButton>
          <TabButton 
            active={activeTab === 'club'} 
            onClick={() => setActiveTab('club')}
          >
            My Club
          </TabButton>
          <TabButton 
            active={activeTab === 'tournaments'} 
            onClick={() => setActiveTab('tournaments')}
          >
            Tournaments
          </TabButton>
        </TabHeader>
        {renderTabContent()}
      </TabContainer>

      {/* Registration Modal */}
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

                <RegistrationSubmitButton type="submit" disabled>
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

    </ProfileContainer>
  );
};

export default Profile;