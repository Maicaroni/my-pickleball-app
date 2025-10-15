import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import pickleBackground from '../../assets/pickle_bg.png';
import Cropper from "react-easy-crop";
import getCroppedImg from "../../backend/utils/cropImage";
import { Modal, Button } from "@mui/material";
import axios from 'axios';
import { message } from "antd";
import { batchGetPartnerStatuses, getPartnerStatusStyle, getPartnerStatusText } from '../utils/partnerUtils';

// Footer is rendered in App.jsx route, not needed here




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
  padding: 8px 16px;
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
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

const ProfileContent = styled.div`
  flex: 1;
  padding: 50px 20px 40px 20px;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 20px 15px 80px 15px; /* Extra bottom padding for mobile nav clearance since no footer */
  }
  
  @media (max-width: 480px) {
    padding: 15px 10px 80px 10px; /* Extra bottom padding for mobile nav clearance since no footer */
  }
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
  
  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    margin-top: 50px;
    margin-left: 0;
  }
  
  @media (max-width: 480px) {
    width: 160px;
    height: 160px;
    margin-top: 30px;
  }
`;

const Avatar = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  
  @media (max-width: 768px) {
    width: 172px;
    height: 172px;
  }
  
  @media (max-width: 480px) {
    width: 152px;
    height: 152px;
  }
`;

const AvatarUploadButton = styled.button`
  position: absolute; // ✅ change from relative to absolute
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

const InitialsFallback = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: #29ba9b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
  color: white;
  font-weight: bold;
  
  @media (max-width: 768px) {
    width: 172px;
    height: 172px;
    font-size: 70px;
  }
  
  @media (max-width: 480px) {
    width: 152px;
    height: 152px;
    font-size: 64px;
  }
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const UserName = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  font-size: 2.2rem !important;
  font-weight: 700 !important;
  color: #234255 !important;
  margin-top: 200px;
  margin-left: 30px;
  letter-spacing: -0.2px;
  flex-shrink: 0;
  min-width: 0;
  word-wrap: break-word;
  line-height: 1.2 !important;
  
  @media (max-width: 768px) {
    font-size: 2.2rem !important;
    font-weight: 900 !important;
    margin-top: 0 !important;
    margin-left: 0 !important;
    text-align: center !important;
    line-height: 1.2 !important;
    text-shadow: 
      0.5px 0 0 #234255,
      -0.5px 0 0 #234255,
      0 0.5px 0 #234255,
      0 -0.5px 0 #234255,
      0.5px 0.5px 0 #234255,
      -0.5px -0.5px 0 #234255,
      0.5px -0.5px 0 #234255,
      -0.5px 0.5px 0 #234255 !important;
    -webkit-text-stroke: 0.5px #234255 !important;
    font-stretch: expanded !important;
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
  
  @media (max-width: 768px) {
    margin-top: 15px;
    overflow-x: auto;
  }
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
  
  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 0.75rem;
  }
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
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
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
  
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.85rem;
    
    svg {
      width: 16px;
      height: 16px;
    }
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
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileTabContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  margin-top: 30px;
  position: relative;
  z-index: 1001; /* Higher than MobileBottomNav (z-index: 1000) */
  overflow: visible; /* Allow tabs to extend to edges */
  
  /* Subtle separator effect */
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
    border-radius: 1px;
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileTabNavigation = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 4px; /* Sharper corners */
  padding: 4px;
  margin: 15px -20px 25px -20px; /* Extend to match parent container padding */
  gap: 2px;
  
  @media (max-width: 480px) {
    margin: 10px -20px 20px -20px; /* Match parent padding on mobile */
    padding: 3px;
    gap: 1px;
    border-radius: 3px; /* Even sharper on mobile */
  }
`;

const MobileTabButton = styled.button`
  flex: 1;
  padding: 18px 14px;
  border: none;
  background: transparent;
  color: ${props => props.active ? '#29ba9b' : '#64748b'};
  font-weight: ${props => props.active ? '700' : '600'};
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
  outline: none;
  text-align: center;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Bottom line indicator */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.active ? '#29ba9b' : '#e2e8f0'};
    transition: all 0.2s ease;
  }
  
  /* Hover effect */
  &:hover:not(:disabled) {
    color: ${props => props.active ? '#29ba9b' : '#475569'};
    
    &::after {
      background: ${props => props.active ? '#29ba9b' : '#cbd5e1'};
    }
  }
  
  /* Focus state for accessibility */
  &:focus {
    outline: none;
    color: ${props => props.active ? '#29ba9b' : '#475569'};
    
    &::after {
      background: ${props => props.active ? '#29ba9b' : '#cbd5e1'};
      box-shadow: 0 0 0 2px rgba(41, 186, 155, 0.2);
    }
  }
  
  @media (max-width: 480px) {
    padding: 16px 12px;
    font-size: 1.05rem;
    min-height: 52px;
    
    &::after {
      height: 2px;
    }
  }
  
  @media (max-width: 360px) {
    padding: 14px 10px;
    font-size: 1rem;
    min-height: 48px;
    
    &::after {
      height: 2px;
    }
  }
`;

const TabHeader = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
  padding: 15px 0;
  border-top: 1px solid #e5e7eb;
  position: relative;
  gap: 20px;
  
  @media (max-width: 768px) {
    gap: 6px; /* Small gap for mobile */
    padding: 15px 10px; /* Reduced horizontal padding for more space */
    margin: 0 -15px 30px -15px; /* Extend to screen edges */
    justify-content: space-around; /* Better distribution on mobile */
  }
  
  @media (max-width: 480px) {
    gap: 4px; /* Very small gap for very small screens */
    padding: 15px 5px; /* Minimal horizontal padding */
    margin: 0 -15px 30px -15px;
  }
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
    display: none; /* Hide tabs on mobile */
  }
`;

// Mobile Dropdown Components
const MobileTabDropdown = styled.div`
  display: none;
  position: relative;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  color: #234255;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &:hover {
    border-color: #29ba9b;
    background: #f8fafc;
  }
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.2s;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: 4px;
  overflow: hidden;
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.$isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.2s ease;
`;

const DropdownItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  background: ${props => props.$active ? '#f0f9ff' : 'white'};
  border: none;
  color: ${props => props.$active ? '#29ba9b' : '#234255'};
  font-weight: ${props => props.$active ? '600' : '500'};
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: #f8fafc;
    color: #29ba9b;
  }
  
  &:focus {
    outline: none;
    background: #f0f9ff;
    color: #29ba9b;
  }
`;

// Registration Container Components (mobile under description, desktop on right side)
const RegistrationContainer = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    display: block;
    margin: 20px 0;
  }
  
  @media (min-width: 769px) {
    display: none; /* Hide on desktop - will be shown in right sidebar */
  }
`;

const DesktopRegistrationContainer = styled.div`
  display: none;
  
  @media (min-width: 769px) {
    display: block;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const RegistrationTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 12px;
  text-align: center;
`;

const RegistrationPrice = styled.div`
  text-align: center;
  margin-bottom: 16px;
  
  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #29ba9b;
  }
`;

const RegistrationButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #29ba9b 0%, #20a085 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: linear-gradient(135deg, #20a085 0%, #1a8a73 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(41, 186, 155, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 18px;
    height: 18px;
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
  
  @media (max-width: 768px) {
    flex: 1 1 0%; /* Default flex for equal distribution */
    max-width: calc(100% / 3); /* Default max width */
    white-space: nowrap; /* Keep text on one line for clean look */
    
    /* Make About and Clubs tabs narrower to give more space to Tournaments */
    &:nth-child(1), /* About tab */
    &:nth-child(2)  /* Clubs tab */ {
      flex: 0.8 1 0%; /* Smaller flex for shorter tabs */
      max-width: 25%; /* Narrower width */
    }
    
    &:nth-child(3) { /* Tournaments tab */
      flex: 1.4 1 0%; /* Larger flex for longer text */
      max-width: 50%; /* More width for "Tournaments" */
    }
  }
  
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
    padding: ${props => props.$active !== undefined ? '12px 6px' : '12px 8px'}; /* Reduced horizontal padding to fit text */
    font-size: ${props => props.$active !== undefined ? '0.9rem' : '1rem'}; /* Good readable size */
    min-width: 0; /* Allow flex shrinking */
    overflow: hidden;
    text-overflow: ellipsis; /* Add ... if text still doesn't fit */
  }
  
  @media (max-width: 480px) {
    padding: ${props => props.$active !== undefined ? '10px 4px' : '10px 6px'}; /* Minimal padding for max text space */
    font-size: ${props => props.$active !== undefined ? '0.85rem' : '0.95rem'}; /* Slightly smaller but still readable */
  }
`;

const TabContent = styled.div`
  padding: 20px 0;
  min-height: 250px;
  
  @media (max-width: 768px) {
    margin-bottom: 20px; /* Reduced margin to prevent excessive spacing */
    padding: 10px 0 20px 0; /* Reduced top padding from 20px to 10px */
  }
`;

const TabSection = styled.div`
  margin-bottom: 30px;
  padding-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const MobileOnlyTabSection = styled.div`
  margin-bottom: 30px;
  padding-bottom: 20px;
  display: none;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    display: block;
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
  
  @media (max-width: 767px) {
    flex-direction: row;
    align-items: center;
    gap: 12px;
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
  
  @media (max-width: 767px) {
    min-width: 48px;
    width: 48px;
    height: 48px;
    padding: 0;
    border-radius: 12px;
    justify-content: center;
    
    span {
      display: none;
    }
    
    svg {
      width: 20px;
      height: 20px;
    }
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

  @media (max-width: 767px) {
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }

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

  @media (max-width: 767px) {
    min-width: auto;
    width: 48px;
    height: 48px;
    padding: 0;
    border-radius: 12px;
    justify-content: center;
    
    span {
      display: none;
    }
  }
`;

// Tournament Detail View Components
const TournamentDetailContainer = styled.div`
  animation: fadeIn 0.3s ease;
  margin-top: 24px;
  
  @media (max-width: 768px) {
    margin-top: 0px;
    padding: 0 5px;
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

const TournamentDetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e2e8f0;
  
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 16px;
    padding-bottom: 12px;
  }
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
  
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.85rem;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const TournamentDetailTitle = styled.h2`
  font-size: 2.5rem;
  color: #234255;
  margin-bottom: 12px;
  font-weight: 800;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 6px;
  }
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
  margin-top: 0px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e2e8f0;

  h4 {
    font-size: 1.1rem;
    font-weight: 400;
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
  .bracket-actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .bracket-btn {
    padding: 6px 8px;
    border: none;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .edit-btn {
    background: #f0f9ff;
    color: #0369a1;
    border: 1px solid #bae6fd;
  }

  .edit-btn:hover {
    background: #e0f2fe;
    border-color: #7dd3fc;
  }

  .delete-btn {
    background: #fef2f2;
    color: #dc2626;
    border: 1px solid #fecaca;
  }

  .delete-btn:hover {
    background: #fee2e2;
    border-color: #fca5a5;
  }
  @media (max-width: 768px) {
    h4 {
      font-size: 1rem;
    }
    
    .bracket-btn {
      padding: 4px 6px;
      font-size: 0.7rem;
    }
  }
`;

const StandingsTable = styled.div`
  .standings-header {
    display: grid;
    grid-template-columns: 60px 1fr 120px 120px;
    gap: 12px;
    padding: 18px 16px;
    background: linear-gradient(135deg, #234255 0%, #29ba9b 100%);
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
    margin-bottom: 16px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    div:nth-child(2) {
      text-align: left;
    }

    @media (max-width: 1200px) {
      grid-template-columns: 50px 1fr 100px 100px;
      font-size: 0.7rem;
      gap: 6px;
      padding: 14px 14px;
    }
    
    @media (max-width: 768px) {
      grid-template-columns: 40px 1fr 80px 80px;
      font-size: 0.65rem;
      gap: 4px;
      padding: 12px 12px;
    }
  }
`;

const StandingsRow = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 120px 120px;
  gap: 12px;
  padding: 20px 16px;
  border-radius: 8px;
  font-size: 0.8rem;
  margin-bottom: 16px;
  background: ${props => props.$qualified ? '#dcfce7' : 'white'};
  border: 1px solid ${props => props.$qualified ? '#bbf7d0' : '#e2e8f0'};
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  &:hover {
    background: ${props => props.$qualified ? '#dcfce7' : '#f8fafc'};
    border-color: #29ba9b;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 50px 1fr 100px 100px;
    gap: 6px;
    padding: 14px 14px;
    font-size: 0.75rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 40px 1fr 80px 80px;
    gap: 4px;
    padding: 12px 12px;
    font-size: 0.7rem;
  }

  .rank-number {
    text-align: center;
    font-weight: 700;
    color: #29ba9b;
    font-size: 1.1em;
  }

  .player-info {
    display: flex;
    align-items: center;
    text-align: left;
    
    .player-name {
      font-weight: 500;
      color: #1e293b;
    }
  }

  .round-wins,
  .round-losses,
  .win-points,
  .loss-points {
    text-align: center;
    font-weight: 600;
    color: #1e293b;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// Delete Modal Styled Components
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
  z-index: 10000;
  padding: 20px;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 480px;
  width: 100%;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: modalSlideIn 0.3s ease-out;
  
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
    margin: 16px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const ModalIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #fee2e2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dc2626;
  flex-shrink: 0;
`;

const ModalTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
`;

const ModalMessage = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin: 0 0 24px 0;
  font-size: 0.95rem;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  
  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

const ModalButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  min-width: 100px;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CancelButton = styled(ModalButton)`
  background: #f9fafb;
  color: #374151;
  border: 1px solid #d1d5db;
  
  &:hover {
    background: #f3f4f6;
    border-color: #9ca3af;
  }
`;

const DeleteButton = styled(ModalButton)`
  background: #dc2626;
  color: white;
  
  &:hover {
    background: #b91c1c;
  }
  
  &:active {
    background: #991b1b;
  }
`;

const PlayerInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 12px;
  }
`;

const MatchTable = styled.div`
  margin-top: 20px;
  width: 100%;
  overflow-x: auto;
  
  
  .match-schedule-header {
    display: grid;
    grid-template-columns: 60px 5fr 70px 70px 90px 70px 70px 70px 90px;
    gap: 0;
    background: linear-gradient(135deg, #234255 0%, #29ba9b 100%);
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
    margin-bottom: 16px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    min-width: 820px;
    overflow: hidden;
    
    > div {
      padding: 18px 8px;
      border-right: 1px solid transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &:last-child {
        border-right: none;
      }
    }
    
    @media (max-width: 1200px) {
      grid-template-columns: 50px 4fr 60px 60px 80px 60px 60px 60px 80px;
      font-size: 0.7rem;
      min-width: 720px;
      
      > div {
        padding: 14px 6px;
      }
    }
    
    @media (max-width: 768px) {
      grid-template-columns: 40px 3fr 50px 50px 65px 50px 50px 50px 65px;
      font-size: 0.65rem;
      min-width: 620px;
      
      > div {
        padding: 12px 4px;
      }
    }
  }
`;

const MatchRow = styled.div`
  display: grid;
  grid-template-columns: 60px 5fr 70px 70px 90px 70px 70px 70px 90px;
  gap: 0;
  border-radius: 8px;
  font-size: 0.8rem;
  margin-bottom: 16px;
  background: white;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  min-width: 820px;
  overflow: hidden;
  
  > div {
    padding: 20px 8px;
    border-right: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:last-child {
      border-right: none;
    }
  }
  
  &:hover {
    background: #f8fafc;
    border-color: #29ba9b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: 50px 4fr 60px 60px 80px 60px 60px 60px 80px;
    font-size: 0.75rem;
    margin-bottom: 12px;
    min-width: 720px;
    
    > div {
      padding: 16px 6px;
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 40px 3fr 50px 50px 65px 50px 50px 50px 65px;
    font-size: 0.7rem;
    margin-bottom: 10px;
    min-width: 620px;
    
    > div {
      padding: 14px 4px;
    }
  }
  
  .match-number {
    background: linear-gradient(135deg, #234255, #29ba9b) !important;
    color: white !important;
    border-radius: 4px;
    font-weight: 600;
    font-size: 0.7rem;
    box-shadow: 0 1px 2px rgba(59, 130, 246, 0.3);
    margin: 4px;
    
    @media (max-width: 768px) {
      font-size: 0.6rem;
    }
  }
  
  .teams-horizontal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 0 4px;
    
    .team-column {
      flex: 1;
      display: flex;
      flex-direction: row;
      gap: 2px;
      align-items: center;
      justify-content: center;
      min-width: 0;
      
      .team-name {
        font-weight: 500;
        color: #374151;
        font-size: 0.8rem;
        line-height: 1.4;
        display: block;
        width: 100%;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
        @media (max-width: 768px) {
          font-size: 0.75rem;
        }
      }
    }
    
    .vs-divider {
      margin: 0 8px;
      font-weight: 700;
      color:hsl(0, 78.80%, 52.00%);
      font-size: 0.9rem;
      
      @media (max-width: 768px) {
        margin: 0 4px;
        font-size: 0.8rem;
      }
    }
  }
  
  .team-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    text-align: left;
    
    .team-badge {
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      font-size: 0.6rem;
      font-weight: 600;
      padding: 2px 4px;
      border-radius: 3px;
      text-align: center;
      box-shadow: 0 1px 2px rgba(16, 185, 129, 0.3);
      
      @media (max-width: 768px) {
        font-size: 0.55rem;
        padding: 1px 3px;
      }
    }
    
    .player-names {
      font-weight: 500;
      color: #334155;
      font-size: 0.7rem;
      line-height: 1.2;
      
      @media (max-width: 768px) {
        font-size: 0.6rem;
      }
    }
  }
  
  .vs-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: #ef4444;
    font-size: 0.7rem;
    
    @media (max-width: 768px) {
      font-size: 0.6rem;
    }
  }
  
  .match-time, .court-number, .match-date {
    text-align: center;
    font-weight: 500;
    color: #374151;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .game-score, .final-score {
    text-align: center;
    font-weight: 600;
    color: #1f2937;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    input {
      width: 60px;
      padding: 4px 6px;
      border: 2px solid #e5e7eb;
      border-radius: 6px;
      font-size: 0.75rem;
      text-align: center;
      font-weight: 600;
      transition: all 0.2s ease;
      
      &:focus {
        outline: none;
        border-color: #6366f1;
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
      }
    }
    
    .score-display {
       padding: 4px 8px;
       border-radius: 6px;
       font-weight: 600;
       color: #1f2937;
       min-width: 50px;
     }
    
    @media (max-width: 768px) {
      font-size: 0.6rem;
    }
  }
  
  .final-score {
    font-weight: 600;
    color: #059669;
    background: #dcfce7;
    border-radius: 3px;
    padding: 2px 4px;

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
  overflow: visible; /* Changed from hidden to visible for floating content */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  position: relative; /* Added for positioning context */

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
  padding: ${props => props.$expanded ? '20px' : '0'};
  background: white;
  border: ${props => props.$expanded ? '1px solid #e2e8f0' : 'none'};
  border-top: none;
  border-radius: ${props => props.$expanded ? '0 0 12px 12px' : '0'};
  overflow: ${props => props.$expanded ? 'auto' : 'hidden'};
  max-height: ${props => props.$expanded ? '80vh' : '0'};
  opacity: ${props => props.$expanded ? '1' : '0'};
  transition: all 0.3s ease;
  transform-origin: top;
  position: ${props => props.$expanded ? 'absolute' : 'static'};
  top: ${props => props.$expanded ? '100%' : 'auto'};
  left: ${props => props.$expanded ? '0' : 'auto'};
  right: ${props => props.$expanded ? '0' : 'auto'};
  z-index: ${props => props.$expanded ? (props.$zIndex || 1000) : 'auto'};
  box-shadow: ${props => props.$expanded ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none'};
  width: ${props => props.$expanded ? '100%' : 'auto'};

  @media (max-width: 768px) {
    padding: ${props => props.$expanded ? '16px' : '0'};
    max-height: ${props => props.$expanded ? '70vh' : '0'};
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
const Profile = ({userId}) => {
  const [userProfile, setUserProfile] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { user, showNotification } = useAuth();
const token = user?.token;
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRef = useRef(null);
  const [activeTab, setActiveTab] = useState('about');
  const [isLoading, setIsLoading] = useState(true);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isEditingBracket, setIsEditingBracket] = useState({});
  const [editingStandings, setEditingStandings] = useState({});
  const [editingMatches, setEditingMatches] = useState({});
  const [aboutData, setAboutData] = useState({ bio: "" });
  const [bioText, setBioText] = useState("");
  const bioTextAreaRef = useRef(null);

  // Optimized LTR enforcement
  useEffect(() => {
    if (bioTextAreaRef.current && isEditingBio) {
      const textarea = bioTextAreaRef.current;
      
      // LTR enforcement function
      const forceLTR = () => {
        textarea.style.setProperty('direction', 'ltr', 'important');
        textarea.style.setProperty('text-align', 'left', 'important');
        textarea.style.setProperty('unicode-bidi', 'embed', 'important');
        textarea.setAttribute('dir', 'ltr');
        textarea.setAttribute('lang', 'en');
      };
      
      // Apply immediately
      forceLTR();
      
      // Only listen to essential events that could change text direction
      const handlePaste = () => {
        // Small delay to allow paste to complete before enforcing LTR
        setTimeout(forceLTR, 10);
      };
      
      textarea.addEventListener('focus', forceLTR);
      textarea.addEventListener('paste', handlePaste);
      
      // Cleanup function
      return () => {
        textarea.removeEventListener('focus', forceLTR);
        textarea.removeEventListener('paste', handlePaste);
      };
    }
  }, [isEditingBio]);
  const [clubSearchTerm, setClubSearchTerm] = useState('');
  const [tournamentSearchTerm, setTournamentSearchTerm] = useState('');
  const [tournamentDetailTab, setTournamentDetailTab] = useState('list');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [showAttachmentModal, setShowAttachmentModal] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [showUnpublishModal, setShowUnpublishModal] = useState(false);
  const [selectedPlayerAttachment, setSelectedPlayerAttachment] = useState(null);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedPlayerToReject, setSelectedPlayerToReject] = useState(null);
  const [rejectionReason, setRejectionReason] = useState('');
  
  // Partner status state management
  const [partnerStatuses, setPartnerStatuses] = useState({});
  const [loadingPartnerStatuses, setLoadingPartnerStatuses] = useState(false);
  
  // Team member modal states
  const [showTeamMembersModal, setShowTeamMembersModal] = useState(false);
  const [selectedTeamRegistration, setSelectedTeamRegistration] = useState(null);
  
  const [activePlayerTab, setActivePlayerTab] = useState('approved');
  const [selectedPlayerCategory, setSelectedPlayerCategory] = useState('all');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [roundRobinCategories, setRoundRobinCategories] = useState({});
  const [eliminationCategories, setEliminationCategories] = useState({});
  const [selectedBrackets, setSelectedBrackets] = useState({}); // Format: { categoryId: 'A' | 'B' | 'C' | 'D' }
  const [bracketMode, setBracketMode] = useState({}); // Format: { categoryId: 1 | 2 | 4 | 8 }
  const [showBracketModal, setShowBracketModal] = useState(false);
  const [pendingBracketChange, setPendingBracketChange] = useState({ categoryId: null, newMode: null });
  const [availableBrackets, setAvailableBrackets] = useState({}); // Format: { categoryId: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] }
  // Registration modal state
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [registrationTournament, setRegistrationTournament] = useState(null);
  // Player selection state
  const [showPlayerSelectionModal, setShowPlayerSelectionModal] = useState(false);
  const [playerSelectionType, setPlayerSelectionType] = useState(''); // 'partner', 'team-0', 'team-1', etc.
  const [playerSearchTerm, setPlayerSearchTerm] = useState('');
  const [playersSearchTerm, setPlayersSearchTerm] = useState('');  
  // Force re-render of category dropdown when player ages or DUPR ratings change
  const [categoryFilterKey, setCategoryFilterKey] = useState(0);
 const [selectedTournament, setSelectedTournament] = useState(null);
const [showAddPlayerModal, setShowAddPlayerModal] = useState(false);
const [allPlayers, setAllPlayers] = useState([]);
const [selectedPlayers, setSelectedPlayers] = useState([]);
const [selectedPlayerGender, setSelectedPlayerGender] = useState('all');
const [tournaments,setTournaments] = useState([]);
const [registrations, setRegistrations] = useState(selectedTournament?.registrations || []);

// Partner invitation popup state
const [showPartnerInvitationPopup, setShowPartnerInvitationPopup] = useState(false);
const [partnerInvitationData, setPartnerInvitationData] = useState(null);

// Helper function to get partner status for a specific player
const getPlayerPartnerStatus = (player, tournamentId) => {
  if (!player.partner || !player.partner.playerId) return 'pending';
  
  const statusKey = `${tournamentId}-${player.playerId}-${player.partner.playerId}`;
  return partnerStatuses[statusKey] || 'pending';
};




  
  /**
   * BACKEND NOTE: Registered Players State Management
   * 
   * This state holds all players registered for tournaments.
   * Expected data structure from backend API:
   * {
   *   pplId: string,        // Unique Pickleball Player League ID
   *   name: string,         // Full player name
   *   gender: 'male'|'female'|'other', // Player gender for category eligibility
   *   age: number,          // Player age for age group categories
   *   duprRatings: {        // Dynamic Universal Pickleball Rating
   *     singles: string,    // DUPR rating for singles play (e.g., '3.5')
   *     doubles: string     // DUPR rating for doubles play (e.g., '3.7')
   *   }
   * }
   * 
   * API Endpoints needed:
   * - GET /api/tournaments/{tournamentId}/players - Fetch registered players
   * - POST /api/tournaments/{tournamentId}/register - Register new player
   * - DELETE /api/tournaments/{tournamentId}/players/{playerId} - Remove player
   */
  const [registeredPlayers, setRegisteredPlayers] = useState([]);
  // Sponsor state
  const [sponsors, setSponsors] = useState([]);
  const [showSponsorModal, setShowSponsorModal] = useState(false);
  const [sponsorForm, setSponsorForm] = useState({
    name: '',
    image: ''
  });

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
  
useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await axios.get("/api/profiles/me");
      setUserProfile(res.data);
      setAboutData({ bio: res.data.bio || "" });
      setBioText(res.data.bio || "");
    } catch (err) {
      console.error("Error fetching profile:", err.response?.data || err.message);
    }
  };

  // Removed duplicate saveChanges function - using enhanced version below

  if (user) fetchUser();
}, [user]);


useEffect(() => {
  const fetchTournaments = async () => {
    try {
      console.log('🔄 Fetching user tournaments from API...');
      // Fetch only tournaments created by the logged-in user
      const storedUser = localStorage.getItem('user');
      const token = storedUser ? JSON.parse(storedUser).token : null;
      
      if (!token) {
        console.error('❌ No authentication token found');
        return;
      }
      
      console.log('🔑 Using token for API request');
      const response = await axios.get("/api/tournaments/my-tournaments", {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
      console.log('📋 API Response received:', response.data.length, 'user tournaments');
      console.log('🏆 User Tournament IDs from API:', response.data.map(t => t._id));
      setTournaments(response.data); // stores only user's tournaments
      console.log('✅ User tournaments state updated with', response.data.length, 'tournaments');
      
      // Load partner statuses for all tournaments
      await loadPartnerStatuses(response.data);
    } catch (error) {
      console.error("Error fetching user tournaments:", error);
    }
  };

  // Function to load partner statuses for tournaments
  const loadPartnerStatuses = async (tournamentsData) => {
    try {
      setLoadingPartnerStatuses(true);
      
      // Extract all registrations from all tournaments
      const allRegistrations = [];
      tournamentsData.forEach(tournament => {
        if (tournament.registeredPlayers) {
          tournament.registeredPlayers.forEach(player => {
            if (player.partner && player.partner.playerId) {
              allRegistrations.push({
                tournamentId: tournament._id,
                playerId: player.playerId,
                partnerId: player.partner.playerId,
                registrationId: player._id
              });
            }
          });
        }
      });
      
      if (allRegistrations.length > 0) {
        const statuses = await batchGetPartnerStatuses(allRegistrations);
        setPartnerStatuses(statuses);
      }
    } catch (error) {
      console.error('Error loading partner statuses:', error);
    } finally {
      setLoadingPartnerStatuses(false);
    }
  };

  fetchTournaments();
}, []);

// Function to refresh tournament data (for partner invitation updates)
const refreshTournamentData = useCallback(async (tournamentId = null) => {
  try {
    const targetTournamentId = tournamentId || localStorage.getItem('selectedTournamentId');
    if (!targetTournamentId) return;

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = storedUser?.token;
    if (!token) return;

    console.log('🔄 Refreshing tournament data for partner status update...');
    
    const response = await fetch(`/api/tournaments/${targetTournamentId}`, {
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      },
    });

    if (response.ok) {
      const tournamentData = await response.json();
      setSelectedTournament(tournamentData);
      console.log('✅ Tournament data refreshed successfully');
    }
  } catch (error) {
    console.error('❌ Error refreshing tournament data:', error);
  }
}, []);

// Listen for partner invitation responses
useEffect(() => {
  const handlePartnerInvitationUpdate = (event) => {
    console.log('🔔 Partner invitation update detected, refreshing tournament data...');
    refreshTournamentData();
  };

  // Listen for custom events from Navbar
  window.addEventListener('partnerInvitationResponse', handlePartnerInvitationUpdate);
  
  return () => {
    window.removeEventListener('partnerInvitationResponse', handlePartnerInvitationUpdate);
  };
}, [refreshTournamentData]);

// Add useEffect to restore and refetch selected tournament on page reload
useEffect(() => {
  const restoreSelectedTournament = async () => {
    try {
      // console.log('=== TOURNAMENT RESTORATION DEBUG ===');
      // console.log('🔍 Checking localStorage for selectedTournamentId...');
      
      // Check all localStorage items for debugging (commented for performance)
      // console.log('📦 All localStorage items:');
      // for (let i = 0; i < localStorage.length; i++) {
      //   const key = localStorage.key(i);
      //   const value = localStorage.getItem(key);
      //   console.log(`  ${key}: ${value}`);
      // }
      
      const storedTournamentId = localStorage.getItem('selectedTournamentId');
      // console.log('🎯 Stored tournament ID:', storedTournamentId);
      // console.log('📊 Tournaments loaded:', tournaments.length);
      // console.log('🏆 Available tournament IDs:', tournaments.map(t => t._id));
      
      // Only proceed if we have both a stored ID and tournaments are loaded
      if (storedTournamentId && tournaments.length > 0) {
        console.log('✅ Prerequisites met - proceeding with restoration');
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const token = storedUser?.token;

        if (!token) {
          console.log('❌ No token found, cannot restore tournament');
          return;
        }

        console.log('🔄 Fetching tournament data for ID:', storedTournamentId);
        console.log('🌐 API URL:', `/api/tournaments/${storedTournamentId}`);
        
        // Fetch fresh tournament data from server with cache-busting headers
        const response = await fetch(`/api/tournaments/${storedTournamentId}`, {
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          },
        });

        console.log('📡 Response status:', response.status);
        console.log('📡 Response ok:', response.ok);

        if (!response.ok) {
          const errorText = await response.text();
          console.log('❌ Response error text:', errorText);
          throw new Error(`HTTP error! status: ${response.status}, text: ${errorText}`);
        }

        const tournamentData = await response.json();
        console.log('✅ Tournament data restored successfully!');
        console.log('📊 Tournament name:', tournamentData.tournamentName);
        console.log('📊 Tournament categories count:', tournamentData.tournamentCategories?.length);
        
        // Log detailed bracket/match data for debugging
        if (tournamentData.tournamentCategories) {
          tournamentData.tournamentCategories.forEach((category, index) => {
            console.log(`🏆 Category ${index}: ${category.division || category.name || 'Unknown'}`);
            console.log('  📊 Full category data:', JSON.stringify(category, null, 2));
            if (category.groupStage?.groups) {
              category.groupStage.groups.forEach(group => {
                console.log(`  📋 Group ${group.id}:`, {
                  matches: group.matches,
                  standings: group.standings,
                  matchKeys: group.matches ? Object.keys(group.matches) : []
                });
              });
            }
          });
        }
        
        // ✅ Initialize Round Robin state and bracket mode for categories
        const roundRobinState = {};
        const eliminationState = {};
        const bracketModeState = {};
        
        tournamentData.tournamentCategories?.forEach(category => {
          if (category.groupStage && category.groupStage.groups && category.groupStage.groups.length > 0) {
            roundRobinState[category._id] = true;
            eliminationState[category._id] = false;
            console.log(`🎯 Auto-enabled Round Robin for category: ${category.division}`);
          }
          
          // Load saved bracket mode or default to 4
          bracketModeState[category._id] = category.bracketMode || 4;
          console.log(`🎯 Loaded bracket mode for ${category.division}: ${bracketModeState[category._id]}`);
        });
        
        setRoundRobinCategories(prev => ({ ...prev, ...roundRobinState }));
        setEliminationCategories(prev => ({ ...prev, ...eliminationState }));
        setBracketMode(prev => ({ ...prev, ...bracketModeState }));
        
        setSelectedTournament(tournamentData);
        setTournamentDetailTab('details'); // Show tournament details view
        console.log('🎯 Selected tournament state updated');
        console.log('🎯 Round Robin categories enabled:', roundRobinState);
      } else {
        console.log('⚠️ Skipping restoration - no stored ID or tournaments not loaded yet');
        console.log('  - Stored ID exists:', !!storedTournamentId);
        console.log('  - Tournaments loaded:', tournaments.length > 0);
      }
    } catch (error) {
      console.error("❌ Error restoring tournament data:", error);
      console.error("❌ Error details:", error.message);
      // Clear invalid tournament ID from localStorage
      localStorage.removeItem('selectedTournamentId');
      console.log('🗑️ Cleared invalid tournament ID from localStorage');
    }
  };

  // Only run restoration if tournaments array is not empty
  if (tournaments.length > 0) {
    console.log('🚀 Running restoration with', tournaments.length, 'tournaments loaded');
    restoreSelectedTournament();
  } else {
    console.log('⏳ Waiting for tournaments to load before restoration...');
  }
}, [tournaments]); // Trigger when tournaments list is loaded
useEffect(() => {
  const fetchAllPlayers = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const token = storedUser?.token;

      if (!token) return;

      const res = await fetch("/api/users?role=player", {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ token for auth
        },
      });

      const data = await res.json();
      setAllPlayers(data);
    } catch (err) {
      console.error("Error fetching players:", err);
    }
  };

  fetchAllPlayers();
}, []);

// Function to add dummy approved players data for testing

function generateRoundRobin(players) {
  const standings = players.map(player => ({
    player,
    wins: 0,
    losses: 0,
    pointsFor: 0,
    pointsAgainst: 0,
    qualified: false,
  }));

  const matches = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      matches.push({
        player1: players[i],
        player2: players[j],
        time: '08:00',
        court: 1,
        date: new Date().toISOString().split('T')[0],
        game1Player1: 0,
        game1Player2: 0,
        finalScorePlayer1: 0,
        finalScorePlayer2: 0,
      });
    }
  }

  return { standings, matches };
}


const handleCreateClub = () => {
    showNotification('Create Club functionality coming soon!', 'info');
  };

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

  // Calculate standings when tournament data loads or changes - OPTIMIZED
  useEffect(() => {
    if (!selectedTournament?.tournamentCategories) return;
    
    // Only recalculate if we don't have standings or if matches have changed
    let needsUpdate = false;
    selectedTournament.tournamentCategories.forEach(cat => {
      if (cat.groupStage?.groups) {
        cat.groupStage.groups.forEach(g => {
          if (g.matches && Object.keys(g.matches).length > 0 && (!g.standings || g.standings.length === 0)) {
            needsUpdate = true;
          }
        });
      }
    });
    
    if (!needsUpdate) return;
    
    // Use a timeout to debounce this expensive operation
    const timeoutId = setTimeout(() => {
      setSelectedTournament(prev => {
        if (!prev) return prev;
        
        return {
          ...prev,
          tournamentCategories: prev.tournamentCategories.map(cat => {
            if (!cat.groupStage?.groups) return cat;
            
            return {
              ...cat,
              groupStage: {
                ...cat.groupStage,
                groups: cat.groupStage.groups.map(g => {
                  const matches = g.matches || {};
                  if (Object.keys(matches).length === 0) return g; // Skip if no matches
                  
                  const allPlayers = g.originalPlayers || g.standings?.map(s => s.player) || [];
                  if (allPlayers.length === 0) return g; // Skip if no players
                  
                  // Pre-calculate player pairs once (memoized)
                  const playerPairs = [];
                  for (let i = 0; i < allPlayers.length; i++) {
                    for (let j = i + 1; j < allPlayers.length; j++) {
                      playerPairs.push([i, j]);
                    }
                  }
                  
                  // Enhanced matches with player names - optimized
                  const enhancedMatches = {};
                  Object.entries(matches).forEach(([matchKey, match]) => {
                    const matchIndex = parseInt(matchKey);
                    if (!isNaN(matchIndex) && playerPairs[matchIndex]) {
                      const [player1Index, player2Index] = playerPairs[matchIndex];
                      enhancedMatches[matchKey] = {
                        ...match,
                        player1: allPlayers[player1Index],
                        player2: allPlayers[player2Index]
                      };
                    }
                  });
                  
                  const updatedStandings = calculateStandings(enhancedMatches, allPlayers);
                  
                  return {
                    ...g,
                    standings: updatedStandings.length > 0 ? updatedStandings : g.standings
                  };
                })
              }
            };
          })
        };
      });
    }, 100); // Debounce expensive calculation
    
    return () => clearTimeout(timeoutId);
  }, [selectedTournament?._id]); // Trigger when tournament changes

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  setSelectedFile(URL.createObjectURL(file));
  setCropModalOpen(true);
};

// Crop complete
const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
  setCroppedAreaPixels(croppedAreaPixels);
}, []);

// Upload cropped image
const uploadCroppedImage = async () => {
  try {
    const croppedImageBlob = await getCroppedImg(selectedFile, croppedAreaPixels);
    const formData = new FormData();
    formData.append("avatar", croppedImageBlob, "avatar.png");

    const token = localStorage.getItem("token");
    const res = await axios.post("/api/profiles/avatar", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    setUserProfile((prev) => ({ ...prev, avatar: res.data.avatarUrl }));
    setCropModalOpen(false);
    setSelectedFile(null);
  } catch (err) {
    console.error("Upload error:", err);
  }
};

  const handleEditBio = () => {
    setIsEditingBio(true);
  };


const handleSaveBio = async () => {
  try {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = storedUser?.token;

    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    const res = await axios.put(
      "/api/profiles/me",
      { bio: bioText },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setUserProfile((prev) => ({ ...prev, bio: res.data.bio }));
    setAboutData((prev) => ({ ...prev, bio: res.data.bio }));
    setIsEditingBio(false);
  } catch (err) {
    console.error("Failed to update bio:", err);
  }
};



  const handleCancelBio = () => {
    setBioText('');
    setIsEditingBio(false);
  };

  const handleHostTournament = () => {
    navigate('/host-tournament');
  };

  // Bracket editing functions
  const handleEditBracket = (categoryId, bracket) => {
    const editKey = `${categoryId}-${bracket}`;
    setIsEditingBracket(prev => ({
      ...prev,
      [editKey]: !prev[editKey]
    }));
  };

// Function to calculate standings from match results
const calculateStandings = (matches, players) => {
  console.log('🔢 calculateStandings called with:', { matches, players });
  
  // Initialize standings for all players (array-based approach like Tournament.jsx)
  const standings = players.map(player => ({
    player,
    wins: 0,
    losses: 0,
    pointsFor: 0,
    pointsAgainst: 0,
    pointDifferential: 0
  }));
  
  // Process each match
  Object.entries(matches || {}).forEach(([matchKey, match]) => {
    const player1 = match.player1;
    const player2 = match.player2;
    const score1 = parseInt(match.game1Player1) || 0;
    const score2 = parseInt(match.game1Player2) || 0;
    
    if (player1 && player2) {
      const p1Standing = standings.find(s => s.player === player1);
      const p2Standing = standings.find(s => s.player === player2);
      
      if (p1Standing && p2Standing) {
        // Update points
        p1Standing.pointsFor += score1;
        p1Standing.pointsAgainst += score2;
        p2Standing.pointsFor += score2;
        p2Standing.pointsAgainst += score1;
        
        // Update wins/losses
        if (score1 > score2) {
          p1Standing.wins++;
          p2Standing.losses++;
        } else if (score2 > score1) {
          p2Standing.wins++;
          p1Standing.losses++;
        }
      }
    }
  });
  
  // Calculate point differentials and sort
  standings.forEach(standing => {
    standing.pointDifferential = standing.pointsFor - standing.pointsAgainst;
  });
  
  // Sort by wins (descending), then by point differential (descending)
  standings.sort((a, b) => {
    if (b.wins !== a.wins) return b.wins - a.wins;
    return b.pointDifferential - a.pointDifferential;
  });
  
  console.log('📊 Calculated standings:', standings);
  return standings;
};

const handleMatchChange = (categoryId, bracket, matchIndex, field, value) => {
  // Performance optimization: removed console.log statements
  // console.log("🚨 HANDLE MATCH CHANGE CALLED!", { categoryId, bracket, matchIndex, field, value });
  // console.log("🔄 MATCH CHANGE DEBUG:", {
  //   categoryId,
  //   bracket,
  //   matchIndex,
  //   field,
  //   value,
  //   timestamp: new Date().toISOString(),
  // });

  setSelectedTournament((prev) => {
    if (!prev) return prev;

    return {
      ...prev,
      tournamentCategories: prev.tournamentCategories.map((cat) => {
        if (cat._id !== categoryId) return cat;

        // Elimination bracket path
        if (bracket === 'elimination') {
          const matchesArr = Array.isArray(cat?.eliminationMatches?.matches)
            ? [...cat.eliminationMatches.matches]
            : [];
          const idx = Number(matchIndex);
          const existing = matchesArr[idx] || { id: `match-${idx + 1}` };
          const updated = { ...existing };

          if (field === 'time' || field === 'date' || field === 'court') {
            updated[field] = value;
          } else if (field === 'game1Player1' || field === 'game1Player2' || 
                    field === 'game2Player1' || field === 'game2Player2' || 
                    field === 'game3Player1' || field === 'game3Player2') {
            // Update the specific field
            updated[field] = Number(value);
            
            // Auto-calculate final score for elimination bracket based on sets won
            const game1P1 = Number(updated.game1Player1) || 0;
            const game1P2 = Number(updated.game1Player2) || 0;
            const game2P1 = Number(updated.game2Player1) || 0;
            const game2P2 = Number(updated.game2Player2) || 0;
            const game3P1 = Number(updated.game3Player1) || 0;
            const game3P2 = Number(updated.game3Player2) || 0;
            
            // Count sets won by each player
            let player1SetsWon = 0;
            let player2SetsWon = 0;
            
            if (game1P1 > game1P2) player1SetsWon++;
            else if (game1P2 > game1P1) player2SetsWon++;
            
            if (game2P1 > game2P2) player1SetsWon++;
            else if (game2P2 > game2P1) player2SetsWon++;
            
            if (game3P1 > game3P2) player1SetsWon++;
            else if (game3P2 > game3P1) player2SetsWon++;
            
            // Set final scores based on sets won
            updated.finalScorePlayer1 = player1SetsWon;
            updated.finalScorePlayer2 = player2SetsWon;
          } else if (field === 'finalScorePlayer1') {
            updated.score1 = Number(value);
          } else if (field === 'finalScorePlayer2') {
            updated.score2 = Number(value);
          } else {
            updated[field] = value;
          }

          matchesArr[idx] = updated;

          return {
            ...cat,
            eliminationMatches: { matches: matchesArr },
          };
        }

        const expectedGroupId = `group-${bracket.toLowerCase()}`;

        return {
          ...cat,
          groupStage: {
            ...cat.groupStage,
            groups: cat.groupStage.groups.map((g) => {
              if (g.id !== expectedGroupId) return g;

              // ✅ define matches properly
              const matches = { ...(g.matches || {}) };
              const key = String(matchIndex);

              if (!matches[key]) {
                matches[key] = {
                  time: "08:00",
                  court: "1",
                  date: "2024-05-30",
                  game1Player1: "0",
                  game1Player2: "0",
                  game2Player1: "0",
                  game2Player2: "0",
                  game3Player1: "0",
                  game3Player2: "0",
                  finalScorePlayer1: "0",
                  finalScorePlayer2: "0",
                };
              }

              // ✅ update field
              matches[key][field] = value;

              // ✅ Auto-calculate final scores based on all three game scores
              if (field === 'game1Player1' || field === 'game1Player2' || 
                  field === 'game2Player1' || field === 'game2Player2' || 
                  field === 'game3Player1' || field === 'game3Player2') {
                const game1P1 = parseInt(matches[key].game1Player1) || 0;
                const game1P2 = parseInt(matches[key].game1Player2) || 0;
                const game2P1 = parseInt(matches[key].game2Player1) || 0;
                const game2P2 = parseInt(matches[key].game2Player2) || 0;
                const game3P1 = parseInt(matches[key].game3Player1) || 0;
                const game3P2 = parseInt(matches[key].game3Player2) || 0;
                
                // Count sets won by each player
                let player1SetsWon = 0;
                let player2SetsWon = 0;
                
                if (game1P1 > game1P2) player1SetsWon++;
                else if (game1P2 > game1P1) player2SetsWon++;
                
                if (game2P1 > game2P2) player1SetsWon++;
                else if (game2P2 > game2P1) player2SetsWon++;
                
                if (game3P1 > game3P2) player1SetsWon++;
                else if (game3P2 > game3P1) player2SetsWon++;
                
                // Set final scores based on sets won
                matches[key].finalScorePlayer1 = String(player1SetsWon);
                matches[key].finalScorePlayer2 = String(player2SetsWon);
                
                console.log("🏆 Final scores auto-calculated:", {
                  game1: `${game1P1}-${game1P2}`,
                  game2: `${game2P1}-${game2P2}`,
                  game3: `${game3P1}-${game3P2}`,
                  finalScores: `${matches[key].finalScorePlayer1}-${matches[key].finalScorePlayer2}`,
                  setsWon: `Player1: ${player1SetsWon}, Player2: ${player2SetsWon}`
                });
              }

              console.log("✅ Match updated (local):", {
                key,
                updatedMatch: matches[key],
              });

              // ✅ Recalculate standings when scores are updated (but not in edit mode)
              let updatedStandings = g.standings;
              console.log('🔄 Match change detected:', { field, value, matchIndex });
              
              // Check if bracket is in edit mode
              const editKey = `${categoryId}-${bracket}`;
              const isInEditMode = isEditingBracket[editKey];
              console.log('🔧 Edit mode check:', { editKey, isInEditMode });
              
              if ((field === 'finalScorePlayer1' || field === 'finalScorePlayer2' || 
                   field === 'game1Player1' || field === 'game1Player2' || 
                   field === 'game2Player1' || field === 'game2Player2' || 
                   field === 'game3Player1' || field === 'game3Player2') && !isInEditMode) {
                console.log('📊 Score field detected and not in edit mode, recalculating standings...');
                
                // Get all players from the original player order (not sorted standings)
                const allPlayers = g.originalPlayers || g.standings.map(s => s.player);
                console.log('👥 All players (original order):', allPlayers);
                
                // Create enhanced matches with player names for calculation
                const enhancedMatches = {};
                Object.entries(matches).forEach(([matchKey, match]) => {
                  // For simple numeric keys like '0', '1', '2', generate player pairs
                  const matchIndex = parseInt(matchKey);
                  if (!isNaN(matchIndex)) {
                    // Generate all possible player pairs and find the match at this index
                    const playerPairs = [];
                    for (let i = 0; i < allPlayers.length; i++) {
                      for (let j = i + 1; j < allPlayers.length; j++) {
                        playerPairs.push([i, j]);
                      }
                    }
                    
                    if (playerPairs[matchIndex]) {
                      const [player1Index, player2Index] = playerPairs[matchIndex];
                      enhancedMatches[matchKey] = {
                        ...match,
                        player1: allPlayers[player1Index],
                        player2: allPlayers[player2Index]
                      };
                    }
                  }
                });
                
                updatedStandings = calculateStandings(enhancedMatches, allPlayers);
                console.log('🔄 Group', g.id, 'recalculated:');
                updatedStandings.forEach(p => {
                  console.log(`  ${p.player}: wins=${p.wins}, losses=${p.losses}, pointsFor=${p.pointsFor}, pointsAgainst=${p.pointsAgainst}`);
                });
              }

              return { ...g, matches, standings: updatedStandings };
            }),
          },
        };
      }),
    };
  });
};

  const saveChanges = async (categoryId, bracket) => {
    try {
      const token = user?.token || localStorage.getItem('token');
      if (!token) {
        console.error('No authentication token found');
        message.error('Authentication required. Please log in again.');
        return;
      }
      
      console.log('🚀 SAVE DEBUG - Making API call:', {
        url: `/api/tournaments/${selectedTournament._id}`,
        method: 'PUT',
        tournamentId: selectedTournament._id,
        categoryId,
        bracket,
        tokenPresent: !!token,
        tokenLength: token?.length,
        matchData: selectedTournament.tournamentCategories?.find(cat => cat._id === categoryId)?.groupStage?.groups?.find(g => g.id === bracket)?.matches,
        fullTournamentDataSize: JSON.stringify(selectedTournament).length
      });
      
      const response = await axios.put(
        `/api/tournaments/${selectedTournament._id}`,
        selectedTournament,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log('📡 SAVE DEBUG - Response received:', {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        dataKeys: Object.keys(response.data || {}),
        message: response.data?.message,
        tournamentId: response.data?.tournament?._id,
        categoriesCount: response.data?.tournament?.tournamentCategories?.length
      });

      if (response.data?.tournament) {
        console.log('✅ SAVE DEBUG - Tournament data received from backend:', {
          tournamentId: response.data.tournament._id,
          categoriesCount: response.data.tournament.tournamentCategories?.length,
          updatedMatchData: response.data.tournament.tournamentCategories?.find(cat => cat._id === categoryId)?.groupStage?.groups?.find(g => g.id === bracket)?.matches
        });
        
        // ✅ use fresh tournament from backend
        setSelectedTournament(response.data.tournament);

        // also refresh tournaments list if needed
        const allTournaments = await axios.get("/api/tournaments", {
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        });
        setTournaments(allTournaments.data);
        
        console.log('🔄 SAVE DEBUG - Tournaments list refreshed, count:', allTournaments.data?.length);
        
        // ✅ Reset bracket edit state after successful save
        const editKey = `${categoryId}-${bracket}`;
        setIsEditingBracket(prev => {
          const updated = { ...prev };
          delete updated[editKey];
          return updated;
        });
      }

      message.success("Changes saved!");
    } catch (error) {
      console.error('💥 SAVE DEBUG - Error details:', {
        name: error.name,
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText,
        responseData: error.response?.data,
        stack: error.stack
      });
      message.error(`Failed to save changes: ${error.response?.data?.message || error.message}`);
    }
  };



  const handleStandingChange = (categoryId, bracket, standingIndex, field, value) => {
    // Update standing data in the tournament structure
    setSelectedTournament(prev => {
      if (!prev) return prev;
      
      const updatedTournament = { ...prev };
      const category = updatedTournament.tournamentCategories.find(cat => cat._id === categoryId);
      
      if (category && category.groupStage && category.groupStage.groups) {
        const expectedGroupId = `group-${bracket.toLowerCase()}`;
        const group = category.groupStage.groups.find(g => g.id === expectedGroupId);
        
        if (group && group.standings && group.standings[standingIndex]) {
          group.standings[standingIndex][field] = value;
          
          // Force re-render by updating the tournaments array as well
          setTournaments(tournaments => 
            tournaments.map(tournament => 
              tournament._id === updatedTournament._id ? updatedTournament : tournament
            )
          );
        }
      }
      
      return updatedTournament;
    });
  };



// Example: updating a single match score in a group
const updateMatchScore = (categoryId, groupId, matchId, score1, score2) => {
  const category = selectedTournament.tournamentCategories.find(c => c._id === categoryId);
  if (!category) return;

  const updatedGroup = category.groupStage.groups.find(g => g.id === groupId);
  if (!updatedGroup) return;

  const updatedMatches = updatedGroup.matches.map(m =>
    m.id === matchId ? { ...m, score1, score2 } : m
  );

  handleBracketChange(categoryId, groupId, { ...updatedGroup, matches: updatedMatches });
};

  // Update group/bracket data for a category
const handleBracketChange = (categoryId, groupId, updatedGroup) => {
  setSelectedTournament(prev => {
    const updatedCategories = prev.tournamentCategories.map(cat => {
      if (cat._id === categoryId) {
        return {
          ...cat,
          groupStage: {
            ...cat.groupStage,
            groups: cat.groupStage.groups.map(group =>
              group.id === groupId ? updatedGroup : group
            )
          }
        };
      }
      return cat;
    });

    return { ...prev, tournamentCategories: updatedCategories };
  });
};

  const handleTournamentClick = (tournament) => {
  console.log('=== TOURNAMENT SELECTION DEBUG ===');
  console.log('🎯 Tournament clicked:', tournament._id);
  console.log('🏆 Tournament name:', tournament.tournamentName);
  console.log('📊 Tournament categories:', tournament.tournamentCategories?.length);
  
  // Show tournament details within Profile.jsx instead of navigating away
  setSelectedTournament(tournament);
  setTournamentDetailTab('details');
  // Store tournament ID for persistence
  localStorage.setItem('selectedTournamentId', tournament._id);
  console.log('✅ Tournament selected for detailed view in Profile');
};


  const handleBackToTournamentList = () => {
    console.log('🔙 BACK TO TOURNAMENT LIST DEBUG');
    console.log('🗑️ Clearing selectedTournament and localStorage');
    setSelectedTournament(null);
    setTournamentDetailTab('list'); // Set to 'list' to show tournament containers
    // Clear stored tournament ID when going back to list
    localStorage.removeItem('selectedTournamentId');
    console.log('✅ localStorage cleared and tab set to list');
  };

  const toggleCategoryExpansion = (categoryId) => {
    setExpandedCategories(prev => {
      // If clicking on already expanded category, collapse it
      if (prev[categoryId]) {
        return {};
      }
      // Otherwise, expand only this category (close all others)
      return { [categoryId]: true };
    });
  };

  // Registration handling functions
  const handleRegister = async (tournamentId) => {
  if (!user) {
    showNotification('Please sign in to register for tournaments', 'error');
    return;
  }

  const tournament = tournamentData.find(t => t.id === tournamentId) || selectedTournament;

  if (!tournament) return;

  setRegistrationTournament(tournament);
  setShowRegistrationModal(true);

setRegistrationForm({
  category: '',

  // Primary player info
  primaryPlayer: {
    pplId: user.pplId || '', // use actual PPL ID or empty string
    name: `${user.firstName} ${user.lastName}`,
    gender: user.gender || 'male',
    age: user.birthDate
      ? Math.floor((new Date() - new Date(user.birthDate)) / (1000 * 60 * 60 * 24 * 365))
      : 25, // fallback if no birthDate
    duprId: user.duprId || '' // just the ID, no ratings
  },

  // Partner info for doubles/team events
  partner: {
    pplId: '',
    name: '',
    gender: ''
  },

  // Team members (optional)
  teamMembers: [
    { pplId: '', name: '', gender: 'male', required: true, label: 'Male Player 2' },
    { pplId: '', name: '', gender: 'female', required: true, label: 'Female Player 1' },
    { pplId: '', name: '', gender: 'female', required: true, label: 'Female Player 2' },
    { pplId: '', name: '', gender: 'male', required: false, label: 'Optional Player 1' },
    { pplId: '', name: '', gender: 'female', required: false, label: 'Optional Player 2' }
  ],

  // Registration info
  name: `${user.firstName} ${user.lastName}`,
  email: user.email || '',
  contactNumber: '', // if you collect phone separately
  proofOfPayment: null,
  status: 'pending' // pending approval by clubadmin
});


  showNotification('Your registration is pending approval by the club admin', 'info');
};

const refreshTournament = async () => {
  try {
    const res = await fetch(`/api/tournaments/${selectedTournament._id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setSelectedTournament(data); // now has full player info
  } catch (err) {
    console.error("Failed to refresh tournament", err);
  }
};


// Robust delete handler that doesn't assume JSON comes back
const handleDeletePlayer = async (registrationId) => {
  if (!window.confirm("Remove this player from this category?")) return;

  try {
    const res = await fetch(
      `/api/tournaments/${selectedTournament._id}/registrations/${registrationId}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    let data = null;
    const ct = res.headers.get("content-type") || "";
    if (ct.includes("application/json")) {
      data = await res.json();
    }

    if (!res.ok) {
      alert((data && data.message) || "Failed to remove player");
      return;
    }

    // ✅ update local state
    setSelectedTournament((prev) => ({
      ...prev,
      registrations: prev.registrations.filter((r) => r._id !== registrationId),
    }));
  } catch (err) {
    console.error("Delete player error:", err);
    alert("Something went wrong while removing player.");
  }
};

const exportApprovedPlayersToCSV = () => {
  if (!selectedTournament || !selectedTournament.registrations) {
    alert('No tournament data available for export');
    return;
  }

  // Filter approved players based on selected category
  const approvedPlayers = selectedTournament.registrations
    .filter(reg => reg.status === 'approved')
    .filter(reg => selectedPlayerCategory === 'all' || reg.category === selectedPlayerCategory);

  if (approvedPlayers.length === 0) {
    alert('No approved players found for the selected category');
    return;
  }

  // Define CSV headers
  const headers = [
    'PPL ID',
    'First Name',
    'Last Name',
    'Email',
    'Contact Number',
    'Gender',
    'Age',
    'Category',
    'DUPR Singles',
    'DUPR Doubles',
    'Registration Date'
  ];

  // Convert player data to CSV format
  const csvData = approvedPlayers.map(reg => {
    const player = reg.player || {};
    const registrationDate = reg.createdAt ? new Date(reg.createdAt).toLocaleDateString() : 'N/A';
    
    return [
      player.pplId || 'N/A',
      player.firstName || 'N/A',
      player.lastName || 'N/A',
      reg.email || 'N/A',
      reg.contactNumber || 'N/A',
      player.gender || 'N/A',
      player.age || 'N/A',
      reg.category || 'N/A',
      player.duprRatings?.singles || 'N/A',
      player.duprRatings?.doubles || 'N/A',
      registrationDate
    ];
  });

  // Create CSV content
  const csvContent = [headers, ...csvData]
    .map(row => row.map(field => `"${field}"`).join(','))
    .join('\n');

  // Create and download the file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    
    // Generate filename with tournament name and category
    const tournamentName = selectedTournament.name || 'Tournament';
    const categoryName = selectedPlayerCategory === 'all' ? 'All-Categories' : selectedPlayerCategory;
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `${tournamentName.replace(/[^a-z0-9]/gi, '_')}_${categoryName.replace(/[^a-z0-9]/gi, '_')}_Approved_Players_${timestamp}.csv`;
    
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert(`CSV exported successfully! ${approvedPlayers.length} players exported.`);
  } else {
    alert('CSV export is not supported in this browser');
  }
};



// Helper function to compute age
const getAge = (birthDate) => {
  if (!birthDate) return "N/A";
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  if (
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
  ) {
    age--;
  }
  return age;
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
          .find(cat => cat._id === prev.category);
        
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
          const categoryAgeRequirement = selectedcategory.ageCategory || selectedCategory.ageCategory;
          if (categoryAgeRequirement && tempAges.length > 0) {
            const allPlayersEligible = tempAges.every(age => isAgeEligibleForCategory(age, categoryAgeRequirement));
            if (!allPlayersEligible) {
              console.log(`🚫 Clearing category "${selectedcategory.division}" - players no longer meet age requirement (${categoryAgeRequirement}). Player ages: [${tempAges.join(', ')}]`);
              updated.category = ''; // Clear the invalid category
            }
          }
          
          // Check if all players still meet the DUPR requirement
          const skillLevel = selectedCategory.skillLevel;
          if (skillLevel && updated.category) { // Only check if category wasn't already cleared
            const tempDuprRatings = [];
            
            // Get all player DUPR ratings from the temporary form
            if (tempForm.primaryPlayer?.duprRatings) {
              const categoryType = getCategoryType(selectedcategory.division);
              let ratingType = 'singles';
              if (categoryType === 'doubles') {
                ratingType = 'doubles'; // DUPR uses one doubles rating for all doubles play
              }
              const rating = tempForm.primaryPlayer.duprRatings[ratingType];
              if (rating) tempDuprRatings.push(parseFloat(rating));
            } else if (user?.duprRatings) {
              const categoryType = getCategoryType(selectedcategory.division);
              let ratingType = 'Singles';
              if (categoryType === 'doubles') {
                ratingType = 'Doubles'; // DUPR uses one doubles rating for all doubles play
              }
              const userRating = user.duprRatings.find(r => r.type === ratingType);
              if (userRating?.rating) tempDuprRatings.push(parseFloat(userRating.rating));
            }
            
            if (tempForm.partner?.duprRatings) {
              const categoryType = getCategoryType(selectedcategory.division);
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
                console.log(`🚫 Clearing category "${selectedcategory.division}" - players no longer meet DUPR requirement for ${skillLevel} level. Player DUPR ratings: [${tempDuprRatings.join(', ')}]`);
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
            .find(cat => cat._id === value);
          const categoryType = getCategoryType(selectedCategory?.name || '');
          
          // Auto-adjust primary player gender for gendered categories
          if (selectedCategory?.name) {
            const categoryName = selectedcategory.division.toLowerCase();
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

  // Sponsor management functions
  const addSponsor = () => {
    if (sponsorForm.name.trim() && sponsorForm.image.trim()) {
      setSponsors(prev => [...prev, { ...sponsorForm }]);
      setSponsorForm({ name: '', image: '' });
      setShowSponsorModal(false);
      showNotification('Sponsor added successfully!', 'success');
    } else {
      showNotification('Please fill in both name and image URL', 'error');
    }
  };

  const removeSponsor = (index) => {
    setSponsors(prev => prev.filter((_, i) => i !== index));
    showNotification('Sponsor removed successfully!', 'success');
  };

  const handleSponsorFormChange = (field, value) => {
    setSponsorForm(prev => ({ ...prev, [field]: value }));
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
      // Use more specific checks to avoid "male" matching "female"
      if (categoryLower.includes("men's") || 
          (categoryLower.includes("men") && !categoryLower.includes("women")) ||
          (categoryLower.includes("male") && !categoryLower.includes("female"))) {
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
    const genderAllowed = isCategoryAllowedForGender(category.division, userGender);
    if (!genderAllowed) {
      console.log(`❌ Category "${category.division}" denied due to gender restriction`);
      return false;
    }
    
    // Check age eligibility for all players
    const playerAges = getAllPlayerAges();
    const categoryAgeRequirement = category.ageCategory || category.ageCategory;
    
    // Check age requirement if specified
    if (categoryAgeRequirement && playerAges.length > 0) {
      const allPlayersAgeEligible = playerAges.every(age => isAgeEligibleForCategory(age, categoryAgeRequirement));
      if (!allPlayersAgeEligible) {
        console.log(`❌ Category "${category.division}" denied - some players don't meet age requirement (${categoryAgeRequirement}). Player ages: [${playerAges.join(', ')}]`);
        return false;
      }
    }
    
    // Check DUPR eligibility for all players based on skill level
    const skillLevel = category.skillLevel;
    if (skillLevel) {
      const playerDuprRatings = getAllPlayerDuprRatings(category.division);
      
      // If players have DUPR ratings, check eligibility
      if (playerDuprRatings.length > 0) {
        const allPlayersDuprEligible = playerDuprRatings.every(rating => isDuprEligibleForSkillLevel(rating, skillLevel));
        if (!allPlayersDuprEligible) {
          console.log(`❌ Category "${category.division}" denied - some players don't meet DUPR requirement for ${skillLevel} level. Player DUPR ratings: [${playerDuprRatings.join(', ')}]`);
          return false;
        }
      }
    }
    
    console.log(`✅ Category "${category.division}" allowed - all eligibility checks passed`);
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

const handleConfirmAddPlayers = async () => {
  if (!selectedPlayers.length) return;

  try {
    // ✅ Send all selected players to backend
    const responses = await Promise.all(
      selectedPlayers.map(playerId =>
        fetch(`/api/tournaments/${selectedTournament._id}/registrations/approve`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            playerId,
            category: selectedPlayerCategory
          }),
        })
      )
    );

    // Check if any requests failed
    const failedResponses = responses.filter(res => !res.ok);
    if (failedResponses.length > 0) {
      const errorText = await failedResponses[0].text();
      throw new Error(`Failed to add players: ${errorText}`);
    }

    // ✅ Refetch tournament with populated players
    const res = await fetch(`/api/tournaments/${selectedTournament._id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch tournament: ${res.status}`);
    }
    
    const data = await res.json();

    // ✅ Update selected tournament state
    setSelectedTournament(data);

    // ✅ Clear selections & close modal
    setSelectedPlayers([]);
    setSelectedPlayerCategory(''); // Reset category selection
    setSelectedPlayerGender('all'); // Reset gender filter
    setShowAddPlayerModal(false);

    alert("Players added successfully!");
  } catch (err) {
    console.error("Error adding players:", err);
    alert(`Something went wrong: ${err.message}`);
  }
};


// Filter directly from tournament details
const approvedPlayers = selectedTournament?.registrations?.filter(r => r.status === "approved");
const pendingPlayers = selectedTournament?.registrations?.filter(r => r.status === "pending");

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
        .find(cat => cat._id === registrationForm.category);
      
      if (selectedCategory) {
        const primaryPlayerGender = registrationForm.primaryPlayer?.gender || user?.gender || 'male';
        const allowedGenders = getAllowedGenders(selectedcategory.division, primaryPlayerGender);
        
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

  const rankData = [
    { category: 'Singles', rank: '0' },
    { category: 'Doubles', rank: '0' },
    { category: 'Mixed', rank: '0' }
  ];

// Assuming `profile` comes from your API
const duprRatings = userProfile?.duprRatings
  ? [
      { type: "Singles", rating: userProfile.duprRatings.singles ?? '0' },
      { type: "Doubles", rating: userProfile.duprRatings.doubles ?? '0' },
    ]
  : [
      { type: "Singles", rating: '0' },
      { type: "Doubles", rating: '0' },
    ];
  
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
  };

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
                      ref={bioTextAreaRef}
                      value={bioText}
                      onChange={(e) => setBioText(e.target.value)}
                      placeholder="Tell us about yourself, your pickleball journey, goals, or anything you'd like other players to know..."
                      autoFocus
                      dir="ltr"
                      lang="en"
                      inputMode="latin"
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
            
            {/* Profile Info Section in Bio Tab */}
            <MobileOnlyTabSection>
              <TabSectionTitle>Profile Information</TabSectionTitle>
              <PlayerInfoGrid>
                {/* Column 1: PPL ID, AGE, GENDER */}
                <InfoColumn>
                  <InfoItem>
                    <InfoLabel>PPL ID</InfoLabel>
                    <InfoValue>{user?.pplId || 'N/A'}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>AGE</InfoLabel>
                    <InfoValue>
                      {user.birthDate
                        ? new Date().getFullYear() - new Date(user.birthDate).getFullYear()
                        : "23"}{" "}
                      Years
                    </InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>GENDER</InfoLabel>
                    <InfoValue>
                      {user.gender
                        ? user.gender.charAt(0).toUpperCase() + user.gender.slice(1)
                        : "Female"}
                    </InfoValue>
                  </InfoItem>
                </InfoColumn>
                
                {/* Column 2: DUPR ID, DUPR Singles, DUPR Doubles */}
                <InfoColumn>
                  <InfoItem>
                    <InfoLabel>DUPR ID</InfoLabel>
                    <InfoValue>{user?.duprId || 'N/A'}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>DUPR Singles</InfoLabel>
                    <InfoValue>N/A</InfoValue>
                  </InfoItem>
                  <InfoItem>
                    <InfoLabel>DUPR Doubles</InfoLabel>
                    <InfoValue>N/A</InfoValue>
                  </InfoItem>
                </InfoColumn>
              </PlayerInfoGrid>
            </MobileOnlyTabSection>
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
                <span>Create Club</span>
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
                    Back
                  </BackToListButton>
                  
                  <EditTournamentButton onClick={() => navigate('/host-tournament', { state: { editTournament: selectedTournament } })}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Edit
                  </EditTournamentButton>
                </TournamentDetailHeader>

<TournamentDetailBanner>
{selectedTournament.tournamentPicture ? (
    <img 
      src={`http://localhost:5000${selectedTournament.tournamentPicture}`} 
      alt={selectedTournament.tournamentName} 
      style={{ width: "100%", objectFit: "cover" }}
    />
  ) : (
    <div style={{ textAlign: "center", color: "#888"}}>No Image</div>
  )}
  <TournamentDetailStatusBadge $status={selectedTournament.status}>
    {selectedTournament.status?.toUpperCase() || 'UNKNOWN'}
  </TournamentDetailStatusBadge>
</TournamentDetailBanner>


                <TournamentDetailTitle>{selectedTournament.name}</TournamentDetailTitle>

                <TournamentDetailBody>
                  <TournamentDetailLeft>

                    <TournamentDetailDescription>
                      {selectedTournament.description || 'No description available for this tournament.'}
                    </TournamentDetailDescription>

                    {/* Registration Container - appears under description for both mobile and desktop */}
                    <RegistrationContainer>
                      <RegistrationTitle>Tournament Registration</RegistrationTitle>
                      <RegistrationPrice>
                        <span className="price">
                          {selectedTournament
                            ? (() => {
                                const min = selectedTournament.entryFeeMin ?? 0;
                                const max = selectedTournament.entryFeeMax;

                                if (min === 0 && (!max || max === 0)) return "FREE";

                                if (max != null && max !== min) {
                                  return `₱${min.toLocaleString()} – ₱${max.toLocaleString()}`;
                                }

                                return `₱${min.toLocaleString()}`;
                              })()
                            : "Loading..."}
                        </span>
                      </RegistrationPrice>
                      <RegistrationButton
                        onClick={() => {
                          handleRegister(selectedTournament.id);
                        }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Register Now
                      </RegistrationButton>
                    </RegistrationContainer>

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

                    {/* Mobile Dropdown for Tournament Tabs */}
                    <MobileTabDropdown>
                      <DropdownButton 
                        $isOpen={isDropdownOpen}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        {tournamentDetailTab === 'details' && 'Details'}
                        {tournamentDetailTab === 'guidelines' && 'Guidelines'}
                        {tournamentDetailTab === 'events' && 'Events'}
                        {tournamentDetailTab === 'players' && 'Players'}
                        {tournamentDetailTab === 'brackets' && 'Brackets'}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="6,9 12,15 18,9"></polyline>
                        </svg>
                      </DropdownButton>
                      <DropdownMenu $isOpen={isDropdownOpen}>
                        <DropdownItem 
                          $active={tournamentDetailTab === 'details'}
                          onClick={() => {
                            setTournamentDetailTab('details');
                            setIsDropdownOpen(false);
                          }}
                        >
                          Details
                        </DropdownItem>
                        <DropdownItem 
                          $active={tournamentDetailTab === 'guidelines'}
                          onClick={() => {
                            setTournamentDetailTab('guidelines');
                            setIsDropdownOpen(false);
                          }}
                        >
                          Guidelines
                        </DropdownItem>
                        <DropdownItem 
                          $active={tournamentDetailTab === 'events'}
                          onClick={() => {
                            setTournamentDetailTab('events');
                            setIsDropdownOpen(false);
                          }}
                        >
                          Events
                        </DropdownItem>
                        <DropdownItem 
                          $active={tournamentDetailTab === 'players'}
                          onClick={() => {
                            setTournamentDetailTab('players');
                            setIsDropdownOpen(false);
                          }}
                        >
                          Players
                        </DropdownItem>
                        <DropdownItem 
                          $active={tournamentDetailTab === 'brackets'}
                          onClick={() => {
                            setTournamentDetailTab('brackets');
                            setIsDropdownOpen(false);
                          }}
                        >
                          Brackets
                        </DropdownItem>
                      </DropdownMenu>
                    </MobileTabDropdown>

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
        {/* Registration Fee */}
        <TournamentDetailsItem>
          <DetailItemIcon>
            <MoneyIcon />
          </DetailItemIcon>
          <DetailItemContent>
            <div>
              <DetailItemLabel>Registration Fee</DetailItemLabel>
            </div>
            <DetailItemValue className="price">
      <span>
  {selectedTournament
    ? (() => {
        const min = selectedTournament.entryFeeMin ?? 0;
        const max = selectedTournament.entryFeeMax;

        if (min === 0 && (!max || max === 0)) return "FREE";

        if (max != null && max !== min) {
          return `₱${min.toLocaleString()} – ₱${max.toLocaleString()}`;
        }

        return `₱${min.toLocaleString()}`;
      })()
    : "Loading..."}
</span>

            </DetailItemValue>
          </DetailItemContent>
        </TournamentDetailsItem>

        {/* Tournament Date */}
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
    const dates = selectedTournament?.tournamentDates || [];
    if (!dates.length) return "TBA";

    const sortedDates = dates.map(d => new Date(d)).sort((a, b) => a - b);
    const ranges = [];
    let start = sortedDates[0];
    let end = sortedDates[0];

    for (let i = 1; i <= sortedDates.length; i++) {
      const current = sortedDates[i];
      const prev = sortedDates[i - 1];

      if (current && (current - prev) / (1000 * 60 * 60 * 24) === 1) {
        end = current; // consecutive day
      } else {
        ranges.push([start, end]);
        start = current;
        end = current;
      }
    }

    const formatted = ranges
      .map(([s, e]) => {
        const sameMonth = s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear();
        const sameDay = s.getTime() === e.getTime();
        const monthFormat = { month: "short" };

        if (sameDay) return s.toLocaleDateString("en-US", { ...monthFormat, day: "numeric" });

        if (sameMonth) return `${s.toLocaleDateString("en-US", monthFormat)} ${s.getDate()}–${e.getDate()}`;

        return `${s.toLocaleDateString("en-US", { month: "short", day: "numeric" })}–${e.toLocaleDateString(
          "en-US",
          { month: "short", day: "numeric" }
        )}`;
      })
      .join(" & ");

    return sortedDates.length ? `${formatted}, ${sortedDates[0].getFullYear()}` : "TBA";
  })()}
</DetailItemValue>
          </DetailItemContent>
        </TournamentDetailsItem>

        {/* Registration Deadline */}
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
              {selectedTournament?.registrationDeadline || selectedTournament?.date
                ? (() => {
                    const deadline = new Date(selectedTournament.registrationDeadline || selectedTournament.date);
                    return isNaN(deadline)
                      ? 'No deadline available'
                      : deadline.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                  })()
                : 'No deadline available'}
            </DetailItemValue>
          </DetailItemContent>
        </TournamentDetailsItem>

        {/* Skill Levels */}
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
  {selectedTournament?.tournamentCategories?.length > 0
    ? (() => {
        const skillLevels = new Set();
        selectedTournament.tournamentCategories.forEach(category => {
          const level = category.skillLevel?.toLowerCase();
          if (!level) return;

          if (level === 'open') {
            skillLevels.add(`Open - Tier ${category.tier || 1}`);
          } else if (['beginner', 'intermediate', 'advanced'].includes(level)) {
            // capitalize first letter
            skillLevels.add(category.skillLevel.charAt(0).toUpperCase() + category.skillLevel.slice(1));
          }
        });
        return skillLevels.size > 0 ? Array.from(skillLevels).sort().join(', ') : 'Not specified';
      })()
    : selectedTournament?.tournamentType
    ? `${selectedTournament.tournamentType.charAt(0).toUpperCase() + selectedTournament.tournamentType.slice(1)}${
        selectedTournament.tournamentType.toLowerCase() === 'open' ? ` - Tier ${selectedTournament.tier || 1}` : ''
      }`
    : 'Not specified'}
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
                                key={category._id}
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
                                        let division = category.division || category.division || 'Mixed Doubles';
                                        
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
                                        
                                        const age = category.ageCategory || '';
                                        
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
                                      {(() => {
                                        const categoryApprovedCount = selectedTournament?.registrations?.filter(reg => 
                                          reg.status === 'approved' && reg.category === category.division
                                        ).length || 0;
                                        return `${categoryApprovedCount}/${category.maxParticipants} participants`;
                                      })()} 
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
                                  color: (() => {
                                    const categoryApprovedCount = selectedTournament?.registrations?.filter(reg => 
                                      reg.status === 'approved' && reg.category === category.division
                                    ).length || 0;
                                    return categoryApprovedCount >= category.maxParticipants ? '#ef4444' : '#29ba9b';
                                  })(),
                                  background: (() => {
                                    const categoryApprovedCount = selectedTournament?.registrations?.filter(reg => 
                                      reg.status === 'approved' && reg.category === category.division
                                    ).length || 0;
                                    return categoryApprovedCount >= category.maxParticipants ? '#fef2f2' : '#f0fdf4';
                                  })(),
                                  padding: '4px 8px',
                                  borderRadius: '6px',
                                  border: (() => {
                                    const categoryApprovedCount = selectedTournament?.registrations?.filter(reg => 
                                      reg.status === 'approved' && reg.category === category.division
                                    ).length || 0;
                                    return `1px solid ${categoryApprovedCount >= category.maxParticipants ? '#fecaca' : '#bbf7d0'}`;
                                  })()
                                }}>
                                  {(() => {
                                    const categoryApprovedCount = selectedTournament?.registrations?.filter(reg => 
                                      reg.status === 'approved' && reg.category === category.division
                                    ).length || 0;
                                    return categoryApprovedCount >= category.maxParticipants ? 'Full' : 'Open';
                                  })()}
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
                                    {(() => {
                                      const approvedCount = selectedTournament?.registrations?.filter(reg => reg.status === 'approved').length || 0;
                                      const totalMaxParticipants = selectedTournament?.tournamentCategories?.reduce((sum, cat) => sum + (parseInt(cat.maxParticipants) || 0), 0) || selectedTournament?.maxParticipants || 0;
                                      return `${approvedCount}/${totalMaxParticipants} participants`;
                                    })()} 
                                  </div>
                                </div>
                              </div>
                              <div style={{
                                fontSize: '0.875rem',
                                fontWeight: '500',
                                color: (() => {
                                  const approvedCount = selectedTournament?.registrations?.filter(reg => reg.status === 'approved').length || 0;
                                  const totalMaxParticipants = selectedTournament?.tournamentCategories?.reduce((sum, cat) => sum + (parseInt(cat.maxParticipants) || 0), 0) || selectedTournament?.maxParticipants || 0;
                                  return approvedCount >= totalMaxParticipants ? '#ef4444' : '#29ba9b';
                                })(),
                                background: (() => {
                                  const approvedCount = selectedTournament?.registrations?.filter(reg => reg.status === 'approved').length || 0;
                                  const totalMaxParticipants = selectedTournament?.tournamentCategories?.reduce((sum, cat) => sum + (parseInt(cat.maxParticipants) || 0), 0) || selectedTournament?.maxParticipants || 0;
                                  return approvedCount >= totalMaxParticipants ? '#fef2f2' : '#f0fdf4';
                                })(),
                                padding: '4px 8px',
                                borderRadius: '6px',
                                border: (() => {
                                  const approvedCount = selectedTournament?.registrations?.filter(reg => reg.status === 'approved').length || 0;
                                  const totalMaxParticipants = selectedTournament?.tournamentCategories?.reduce((sum, cat) => sum + (parseInt(cat.maxParticipants) || 0), 0) || selectedTournament?.maxParticipants || 0;
                                  return `1px solid ${approvedCount >= totalMaxParticipants ? '#fecaca' : '#bbf7d0'}`;
                                })()
                              }}>
                                {(() => {
                                  const approvedCount = selectedTournament?.registrations?.filter(reg => reg.status === 'approved').length || 0;
                                  const totalMaxParticipants = selectedTournament?.tournamentCategories?.reduce((sum, cat) => sum + (parseInt(cat.maxParticipants) || 0), 0) || selectedTournament?.maxParticipants || 0;
                                  return approvedCount >= totalMaxParticipants ? 'Full' : 'Open';
                                })()}
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
                        {/*  <LocationHeader>
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
                          </LocationInfo>*/}
                          
    {/* Embedded map */}
<MapContainer
  onClick={() =>
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${selectedTournament.venueName}, ${selectedTournament.venueAddress}, ${selectedTournament.venueCity}, ${selectedTournament.venueState} ${selectedTournament.venueZip}`
      )}`,
      "_blank"
    )
  }
>
  <iframe
    width="100%"
    height="400"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    src={`https://www.google.com/maps/embed/v1/place?key=GOOGLEAPI=${encodeURIComponent(
      `${selectedTournament.venueName}, ${selectedTournament.venueAddress}, ${selectedTournament.venueCity}, ${selectedTournament.venueState} ${selectedTournament.venueZip}`
    )}`}
  ></iframe>

  <div className="map-text">
    <div className="main-text">Interactive Map View</div>
    <div className="sub-text">Click to open in Google Maps</div>
    <div className="venue-details">
      <p>{selectedTournament.venueName}</p>
      <p>{selectedTournament.venueAddress}</p>
      <p>
        {selectedTournament.venueCity}, {selectedTournament.venueState} {selectedTournament.venueZip}
      </p>
    </div>
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

    {selectedTournament.rules && selectedTournament.rules.trim() ? (
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
          <div
            style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#334155',
            }}
            dangerouslySetInnerHTML={{ __html: selectedTournament.rules }}
          />
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
}}
  dangerouslySetInnerHTML={{ __html: selectedTournament.events || 'No events available.' }}
/>
    </div>
  </TournamentDetailSection>
)}
                    {tournamentDetailTab === 'players' && (
                      <TournamentDetailSection>
                        <TournamentDetailSectionTitle style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Players
                          </div>
                          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <button
                              onClick={exportApprovedPlayersToCSV}
                              style={{
                                padding: '8px 16px',
                                backgroundColor: '#2563eb',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontWeight: '500',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#1d4ed8';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#2563eb';
                              }}
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" strokeLinejoin="round" />
                                <polyline points="7,10 12,15 17,10" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              Export CSV
                            </button>
                            <button
                              onClick={() => {
                                if (isPublished) {
                                  setShowUnpublishModal(true);
                                } else {
                                  setShowPublishModal(true);
                                } {/*DASTIN PART NEW*/}
                              }}
                              style={{
                                padding: '8px 16px',
                                backgroundColor: isPublished ? '#ef4444' : '#059669',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontWeight: '500',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = isPublished ? '#dc2626' : '#047857';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = isPublished ? '#ef4444' : '#059669';
                              }}
                            >
                              {isPublished ? 'Unpublish' : 'Publish'}
                            </button>
                          </div>
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
{selectedTournament?.tournamentCategories &&
  selectedTournament.tournamentCategories
    .filter(category => category && category._id) // safety check for _id
    .map((category, index) => {
      const displayName = [category.division, category.skillLevel, category.ageCategory].filter(Boolean).join(' - ') || 'Unknown Category';
      return (
        <option 
          key={category._id} 
          value={category._id}
        >
          {displayName}
        </option>
      );
    })}
                          </select>
</div>
<div>
                           {/* ✅ Add Player Button */}
  <button
  onClick={() => {
    setSelectedPlayerCategory(''); // Reset category selection
    setSelectedPlayers([]); // Reset player selection
    setSelectedPlayerGender('all'); // Reset gender filter
    setShowAddPlayerModal(true);
  }}
  style={{
    padding: '8px 16px',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    marginBottom: '16px'
  }}
>
  + Add Approved Player
</button>
</div>
{showAddPlayerModal && (
  <div 
    style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      zIndex: 1000
    }}
    onClick={() => {
      setSelectedPlayerCategory(''); // Reset category selection
      setSelectedPlayers([]); // Reset player selection
      setSelectedPlayerGender('all'); // Reset gender filter
      setShowAddPlayerModal(false);
    }}
  >
    <div 
      style={{
        background: 'white',
        padding: '24px',
        borderRadius: '10px',
        width: '500px',
        maxHeight: '80vh',
        overflowY: 'auto'
      }}
      onClick={e => e.stopPropagation()}
    >
      <h2 style={{ marginBottom: '16px' }}>Select Players</h2>
      
      {/* Gender Filter Dropdown */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px', 
          fontWeight: '500', 
          color: '#374151' 
        }}>
          Filter by Gender:
        </label>
        <select
          value={selectedPlayerGender || 'all'}
          onChange={(e) => setSelectedPlayerGender(e.target.value === 'all' ? '' : e.target.value)}
          style={{
            width: '100%',
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
          <option value="all">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      
      {/* Category Selection Dropdown */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px', 
          fontWeight: '500', 
          color: '#374151' 
        }}>
          Select Tournament Category:
        </label>
        <select
          value={selectedPlayerCategory}
          onChange={(e) => setSelectedPlayerCategory(e.target.value)}
          style={{
            width: '100%',
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
          required
        >
          <option value="">Choose a category...</option>
          {selectedTournament?.tournamentCategories &&
            selectedTournament.tournamentCategories
              .filter(category => category && category.division)
              .map((category, index) => (
                <option 
                  key={category._id || category.division} 
                  value={category.division}
                >
                  {category.division}
                  {category.skillLevel ? ` - ${category.skillLevel}` : ""}
                  {category.ageCategory ? ` - ${category.ageCategory}` : ""}
                </option>
              ))
          }
        </select>
      </div>

{selectedPlayerCategory && Array.isArray(allPlayers) && allPlayers.length > 0 ? (
  allPlayers
  .filter(player =>
    !selectedTournament.registrations?.some(
      reg =>
        reg.player?._id === player._id &&
        reg.category === selectedPlayerCategory && // 👈 prevent duplicate in same category
        reg.status === "approved"
    )
  )
  .filter(player => {
    // Filter by gender if a specific gender is selected
    if (selectedPlayerGender && selectedPlayerGender !== 'all') {
      return player.gender === selectedPlayerGender;
    }
    return true; // Show all genders if 'all' is selected
  })
  .map(player => (
    <label key={player._id} style={{ display: "block", marginBottom: "8px" }}>
      <input
        type="checkbox"
        checked={selectedPlayers.includes(player._id)}
        onChange={() => {
          setSelectedPlayers(prev =>
            prev.includes(player._id)
              ? prev.filter(id => id !== player._id)
              : [...prev, player._id]
          );
        }}
        style={{ marginRight: "8px" }}
      />
      {player.firstName} {player.lastName} ({player.email})
    </label>
  ))

) : selectedPlayerCategory ? (
  <p style={{ color: '#6b7280', fontStyle: 'italic', textAlign: 'center', padding: '20px' }}>
    No players available for the selected category "{selectedPlayerCategory}"
  </p>
) : (
  <p style={{ color: '#6b7280', fontStyle: 'italic', textAlign: 'center', padding: '20px' }}>
    Please select a tournament category first
  </p>
)}

      <div style={{ marginTop: '16px', textAlign: 'right' }}>
        <button
          onClick={() => {
            setSelectedPlayerCategory(''); // Reset category selection
            setSelectedPlayers([]); // Reset player selection
            setSelectedPlayerGender('all'); // Reset gender filter
            setShowAddPlayerModal(false);
          }}
          style={{ marginRight: '12px' }}
        >
          Cancel
        </button>
<button
  onClick={handleConfirmAddPlayers}
  disabled={!selectedPlayerCategory || selectedPlayers.length === 0}
  style={{
    padding: '8px 16px',
    backgroundColor: (!selectedPlayerCategory || selectedPlayers.length === 0) ? '#9ca3af' : '#16a34a',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '500',
    cursor: (!selectedPlayerCategory || selectedPlayers.length === 0) ? 'not-allowed' : 'pointer',
    opacity: (!selectedPlayerCategory || selectedPlayers.length === 0) ? 0.6 : 1
  }}
>
  Confirm ({selectedPlayers.length} selected)
</button>
      </div>
    </div>
  </div>
)}

                        
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
                          <div style={{ marginTop: '20px' }}>
                            {selectedTournament && selectedTournament.registrations && selectedTournament.registrations.filter(reg => {
                              console.log('Approved player filter - Player:', reg.playerName, 'Category:', reg.category, 'Selected:', selectedPlayerCategory, 'Status:', reg.status);
                              return reg.status === 'approved';
                            }).filter(reg => {
                              const shouldShow = selectedPlayerCategory === 'all' || reg.category === selectedPlayerCategory;
                              console.log('Category filter - Player:', reg.playerName, 'Category:', reg.category, 'Selected:', selectedPlayerCategory, 'Should show:', shouldShow);
                              return shouldShow;
                            }).length > 0 ? (
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
  // Get approved players in this category
  const approvedPlayers = selectedTournament.registrations
    .filter(reg => reg.status === 'approved')
    .filter(reg => selectedPlayerCategory === 'all' || reg.category === selectedPlayerCategory);

  // Filter by search term using firstName + lastName
  const filteredPlayers = approvedPlayers.filter(reg => {
    const fullName = reg.player 
      ? `${reg.player.firstName || ""} ${reg.player.lastName || ""}`.trim() 
      : "";
    return fullName.toLowerCase().includes((playersSearchTerm || "").toLowerCase());
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
   .filter(reg => {
    const fullName = reg.player 
      ? `${reg.player.firstName || ""} ${reg.player.lastName || ""}`.trim() 
      : "";
    console.log('Rendering approved - Player:', fullName, 'Category:', reg.category, 'Status:', reg.status);
    return reg.status === 'approved';
  })
  
                                 .filter(reg => {
                                   const fullName = reg.player 
                                     ? `${reg.player.firstName || ""} ${reg.player.lastName || ""}`.trim() 
                                     : "";
                                   const shouldShow = selectedPlayerCategory === 'all' || reg.category === selectedPlayerCategory;
                                   console.log('Rendering category filter - Player:', fullName, 'Category:', reg.category, 'Selected:', selectedPlayerCategory, 'Should show:', shouldShow);
                                   return shouldShow;
                                 })
                                 .filter(player => {
  const fullName = player.player 
    ? `${player.player.firstName || ""} ${player.player.lastName || ""}`.trim() 
    : "";
  return fullName.toLowerCase().includes((playersSearchTerm || "").toLowerCase());
})

                                 .sort((a, b) => {
  const fullNameA = a.player 
    ? `${a.player.firstName || ""} ${a.player.lastName || ""}`.trim() 
    : "";
  const fullNameB = b.player 
    ? `${b.player.firstName || ""} ${b.player.lastName || ""}`.trim() 
    : "";
  
  if (!fullNameA) console.warn("Missing player name for:", a);
  if (!fullNameB) console.warn("Missing player name for:", b);

  return fullNameA.localeCompare(fullNameB);
})

                                 .map((player, index) => (
                                   <div key={player._id} style={{
                                     background: 'white',
                                     border: '1px solid #e2e8f0',
                                     borderRadius: '12px',
                                     padding: '20px',
                                     transition: 'all 0.2s ease',
                                     boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                                   }}>
                                     <div style={{
                                       display: 'flex',
                                       alignItems: 'flex-start',
                                       gap: '12px',
                                       marginBottom: '16px'
                                     }}>
                                       <div style={{
                                         width: '50px',
                                         height: '50px',
                                         borderRadius: '50%',
                                         background: 'linear-gradient(135deg, #29ba9b, #1e40af)',
                                         display: 'flex',
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                         color: 'white',
                                         fontWeight: '600',
                                         fontSize: '16px',
                                         flexShrink: 0
                                       }}>
{(() => {
  // Check if this is a team category
  const categoryData = selectedTournament.tournamentCategories && 
    Object.values(selectedTournament.tournamentCategories).find(cat => 
      cat._id === player.category || 
      cat._id.toString() === player.category || 
      cat.division === player.category
    );
  
  const isTeamCategory = categoryData?.division?.toLowerCase().includes('team');
  
  if (isTeamCategory) {
    // For team categories, try multiple sources for team name initials
    const teamName = player.teamName || 
                    player.registrationTeamName || 
                    (player.foundRegistration && player.foundRegistration.teamName) ||
                    'Team';
    return teamName
      .split(" ")
      .filter(Boolean)
      .map(n => n[0] || "")
      .join("")
      .toUpperCase() || "T";
  } else {
    // Show player name initials for individual categories
    return player.player ? `${(player.player.firstName || '')[0]}${(player.player.lastName || '')[0]}`.toUpperCase() : '?';
  }
})()}
</div>
                                       <div style={{ flex: 1 }}>
                                     {/* Player Name - Left Aligned */}
                                     <div style={{
                                       fontWeight: '700',
                                       color: '#334155',
                                       fontSize: '1.1rem',
                                       marginBottom: '12px',
                                       textAlign: 'left'
                                     }}>
                                                                              <div style={{ textAlign: "right", marginTop: "8px" }}>
  <button
  onClick={() => handleDeletePlayer(player._id)} // Using registration ID (player is the registration object)
  style={{
    padding: "6px 12px",
    backgroundColor: "#dc2626",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "0.85rem",
    fontWeight: "500",
    cursor: "pointer",
  }}
>
  X
</button>
</div>
{(() => {
  // Check if this is a team category
  const categoryData = selectedTournament.tournamentCategories && 
    Object.values(selectedTournament.tournamentCategories).find(cat => 
      cat._id === player.category || 
      cat._id.toString() === player.category || 
      cat.division === player.category
    );
  
  const isTeamCategory = categoryData?.division?.toLowerCase().includes('team');
  
  if (isTeamCategory) {
    // For team categories, try multiple sources for team name
    const teamName = player.teamName || 
                    player.registrationTeamName || 
                    (player.foundRegistration && player.foundRegistration.teamName) ||
                    'Team';
    
    return (
      <div 
        onClick={() => {
          setSelectedTeamRegistration(player);
          setShowTeamMembersModal(true);
        }}
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '4px',
          borderRadius: '4px',
          transition: 'background-color 0.2s ease'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
      >
        {teamName}
        <span style={{
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          👥
        </span>
      </div>
    );
  } else {
    // Show player name for individual categories
    return player.player ? `${player.player.firstName} ${player.player.lastName}` : 'Unknown Player';
  }
})()}
</div>
                                     
{(() => {
  // Check if this is a team category
  const categoryData = selectedTournament.tournamentCategories && 
    Object.values(selectedTournament.tournamentCategories).find(cat => 
      cat._id === player.category || 
      cat._id.toString() === player.category || 
      cat.division === player.category
    );
  
  const isTeamCategory = categoryData?.division?.toLowerCase().includes('team');
  
  if (isTeamCategory) {
    // For team categories, no additional details needed (category and filter already show this info)
    return null;
  } else {
    // For individual categories, show player details
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '12px',
        marginBottom: '16px'
      }}>
        <div style={{
          background: '#FFFFFF',
          padding: '0px',
          borderRadius: '6px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '0.7rem',
            color: '#64748b',
            fontWeight: '500',
            marginBottom: '2px'
          }}>
            PPL ID
          </div>
          <div style={{
            fontSize: '0.85rem',
            fontWeight: '600',
            color: '#29ba9b'
          }}>
            {player.player?.pplId || 'N/A'}
          </div>
        </div>
        <div style={{
          background: '#FFFFFF',
          padding: '0px',
          borderRadius: '6px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '0.7rem',
            color: '#64748b',
            fontWeight: '500',
            marginBottom: '2px'
          }}>
            GENDER
          </div>
          <div style={{
            fontSize: '0.85rem',
            fontWeight: '500',
            color: '#334155',
            textTransform: 'capitalize'
          }}>
            {player.player?.gender || 'N/A'}
          </div>
        </div>
        <div style={{
          background: '#FFFFFF',
          padding: '0px',
          borderRadius: '6px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '0.7rem',
            color: '#64748b',
            fontWeight: '500',
            marginBottom: '2px'
          }}>
            Age
          </div>
          <div style={{
            fontSize: '0.85rem',
            fontWeight: '500',
            color: '#334155'
          }}>
            <span>{getAge(player.player?.birthDate)}</span>
          </div>
        </div>
        <div style={{
          background: '#FFFFFF',
          padding: '0px',
          borderRadius: '6px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '0.7rem',
            color: '#64748b',
            fontWeight: '500',
            marginBottom: '2px'
          }}>
            DUPR ID
          </div>
          <div style={{
            fontSize: '0.85rem',
            fontWeight: '700',
            color: '#29ba9b'
          }}>
            {player.player?.duprId || 'N/A'} 
          </div>
        </div>
      </div>
    );
  }
})()}
                                     
                                     {/* Partner Information for Doubles Categories */}
                                     {(() => {
                                       const categoryData = selectedTournament.tournamentCategories && 
                                         Object.values(selectedTournament.tournamentCategories).find(cat => cat._id.toString() === player.category);
                                       const isDoublesCategory = categoryData?.division?.toLowerCase().includes('doubles');
                                       
                                       return isDoublesCategory && player.partner && (
                                         <>
                                     <div style={{
                                       fontSize: '0.8rem',
                                       color: '#64748b',
                                       fontWeight: '600',
                                       marginBottom: '12px',
                                       marginTop: '16px',
                                       textAlign: 'left'
                                     }}>
                                       Partner Information
                                     </div>
                                     <div style={{
                                       display: 'flex',
                                       alignItems: 'flex-start',
                                       gap: '12px',
                                       marginBottom: '16px'
                                     }}>
                                       <div style={{
                                         width: '50px',
                                         height: '50px',
                                         borderRadius: '50%',
                                         background: 'linear-gradient(135deg, #29ba9b, #1e40af)',
                                         display: 'flex',
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                         color: 'white',
                                         fontWeight: '600',
                                         fontSize: '16px',
                                         flexShrink: 0
                                       }}>
                                         {(() => {
                                           const partnerName = player.partner.firstName && player.partner.lastName 
                                             ? `${player.partner.firstName} ${player.partner.lastName}` 
                                             : player.partner.name || 'Partner Name Not Available';
                                           return partnerName
                                             .split(" ")
                                             .filter(Boolean)
                                             .map(n => n[0] || "")
                                             .join("")
                                             .toUpperCase() || "P";
                                         })()}
                                       </div>
                                       <div style={{ flex: 1 }}>
                                         <div style={{
                                           fontSize: '1.1rem',
                                           fontWeight: '700',
                                           color: '#334155',
                                           textAlign: 'left'
                                         }}>
                                           {player.partner.firstName && player.partner.lastName 
                                             ? `${player.partner.firstName} ${player.partner.lastName}` 
                                             : player.partner.name || 'Partner Name Not Available'}
                                         </div>
                                       </div>
                                     </div>
                                     <div style={{
                                       display: 'grid',
                                       gridTemplateColumns: '1fr 1fr 1fr 1fr',
                                       gap: '12px',
                                       marginBottom: '16px'
                                     }}>
                                       <div style={{
                                         background: (() => {
                                           const partnerStatus = getPlayerPartnerStatus(player, selectedTournament._id);
                                           return getPartnerStatusStyle(partnerStatus).backgroundColor;
                                         })(),
                                         padding: '8px',
                                         borderRadius: '6px',
                                         textAlign: 'center',
                                         border: (() => {
                                           const partnerStatus = getPlayerPartnerStatus(player, selectedTournament._id);
                                           return getPartnerStatusStyle(partnerStatus).borderColor;
                                         })()
                                       }}>
                                         <div style={{
                                           fontSize: '0.7rem',
                                           color: '#64748b',
                                           fontWeight: '500',
                                           marginBottom: '2px'
                                         }}>
                                           PPL ID
                                         </div>
                                         <div style={{
                                           fontSize: '0.85rem',
                                           fontWeight: '600',
                                           color: '#29ba9b'
                                         }}>
                                           {player.partner.pplId || 'N/A'}
                                         </div>
                                       </div>
                                       <div style={{
                                         background: (() => {
                                           const partnerStatus = getPlayerPartnerStatus(player, selectedTournament._id);
                                           return getPartnerStatusStyle(partnerStatus).backgroundColor;
                                         })(),
                                         padding: '8px',
                                         borderRadius: '6px',
                                         textAlign: 'center',
                                         border: (() => {
                                           const partnerStatus = getPlayerPartnerStatus(player, selectedTournament._id);
                                           return getPartnerStatusStyle(partnerStatus).borderColor;
                                         })()
                                       }}>
                                         <div style={{
                                           fontSize: '0.7rem',
                                           color: '#64748b',
                                           fontWeight: '500',
                                           marginBottom: '2px'
                                         }}>
                                           GENDER
                                         </div>
                                         <div style={{
                                           fontSize: '0.85rem',
                                           fontWeight: '500',
                                           color: '#334155',
                                           textTransform: 'capitalize'
                                         }}>
                                           {player.partner.gender || 'N/A'}
                                         </div>
                                       </div>
                                       <div style={{
                                         background: (() => {
                                           const partnerStatus = getPlayerPartnerStatus(player, selectedTournament._id);
                                           return getPartnerStatusStyle(partnerStatus).backgroundColor;
                                         })(),
                                         padding: '8px',
                                         borderRadius: '6px',
                                         textAlign: 'center',
                                         border: (() => {
                                           const partnerStatus = getPlayerPartnerStatus(player, selectedTournament._id);
                                           return getPartnerStatusStyle(partnerStatus).borderColor;
                                         })()
                                       }}>
                                         <div style={{
                                           fontSize: '0.7rem',
                                           color: '#64748b',
                                           fontWeight: '500',
                                           marginBottom: '2px'
                                         }}>
                                           Age
                                         </div>
                                         <div style={{
                                           fontSize: '0.85rem',
                                           fontWeight: '500',
                                           color: '#334155'
                                         }}>
                                           {player.partner.age || 'N/A'}
                                         </div>
                                       </div>
                                       <div style={{
                                         background: (() => {
                                           const partnerStatus = getPlayerPartnerStatus(player, selectedTournament._id);
                                           return getPartnerStatusStyle(partnerStatus).backgroundColor;
                                         })(),
                                         padding: '8px',
                                         borderRadius: '6px',
                                         textAlign: 'center',
                                         border: (() => {
                                           const partnerStatus = getPlayerPartnerStatus(player, selectedTournament._id);
                                           return getPartnerStatusStyle(partnerStatus).borderColor;
                                         })()
                                       }}>
                                         <div style={{
                                           fontSize: '0.7rem',
                                           color: '#64748b',
                                           fontWeight: '500',
                                           marginBottom: '2px'
                                         }}>
                                           DUPR ID
                                         </div>
                                         <div style={{
                                           fontSize: '0.85rem',
                                           fontWeight: '700',
                                           color: '#29ba9b'
                                         }}>
                                           {player.partner.duprRatings?.doubles || player.partner.duprRatings?.singles || 'N/A'}
                                         </div>
                                       </div>
                                     </div>
                                         </>
                                       );
                                     })()}
                                     </div>
                                     </div>
                                     
                                     {/* Category Display */}
                                     {selectedPlayerCategory === 'all' && (
                                       <div style={{
                                         fontSize: '0.75rem',
                                         color: '#29ba9b',
                                         fontWeight: '500',
                                         marginTop: '8px',
                                         textAlign: 'center',
                                         background: '#f0fdf4',
                                         padding: '4px 8px',
                                         borderRadius: '4px'
                                       }}>
                                         {(() => {
                                           const category = selectedTournament.tournamentCategories && 
                                             Object.values(selectedTournament.tournamentCategories).find(cat => cat._id.toString() === player.category);
                                           if (!category) return 'Category N/A';
                                           
                                           const parts = [category.division];
                                           if (category.skillLevel) parts.push(category.skillLevel);
                                           if (category.ageCategory) parts.push(category.ageCategory);
                                           
                                           return parts.join(' - ');
                                         })()}
                                       </div>
                                     )}
                                   </div>
                                 ))}
                             </div>
                             
                             {/* No results message */}
                             {playersSearchTerm && 
                              selectedTournament.registrations
                                .filter(reg => reg.status === 'approved')
                                .filter(reg => selectedPlayerCategory === 'all' || reg.category === selectedPlayerCategory)
                                .filter(player => {
                                  const cleanName = `${player.firstName || ""} ${player.lastName || ""}`.trim();
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
                         ) : selectedTournament ? (
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
                         ) : (
                           <div style={{
                             textAlign: 'center',
                             padding: '60px 20px',
                             color: '#64748b'
                           }}>
                             <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏆</div>
                             <h3 style={{ color: '#334155', marginBottom: '8px' }}>No Tournament Selected</h3>
                             <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                               Please select a tournament to view approved players.
                             </p>
                           </div>
                         )}
                       </div>
                     )}

                         {/* Pending Players Tab Content */}
                         {activePlayerTab === 'pending' && (
                           <div style={{ marginTop: '20px' }}>
                             {selectedTournament && selectedTournament.registrations ? (
                               <>
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
  const pendingPlayers = (selectedTournament.registrations || [])
    .filter(reg => reg.status === 'pending')
    .filter(reg => selectedPlayerCategory === 'all' || reg.category === selectedPlayerCategory);

  const filteredPlayers = pendingPlayers.filter(player => {
    const cleanName = (player?.playerName || "").replace(/["'].*?["']/g, '').trim();
    return cleanName.toLowerCase().includes((playersSearchTerm || "").toLowerCase());
  });
                                       return playersSearchTerm 
                                         ? `Showing ${filteredPlayers.length} of ${pendingPlayers.length} pending players`
                                         : `Total Pending Players: ${pendingPlayers.length}`;
                                     })()} 
                                   </span>
                                 </div>

                                  {selectedTournament.registrations
                               .filter(reg => reg.status === 'pending')
                               .filter(reg => selectedPlayerCategory === 'all' || reg.category === selectedPlayerCategory)
                               .filter(player => {
const cleanName = (player.playerName || "").replace(/["'].*?["']/g, "").trim();
                                 return cleanName.toLowerCase().includes(playersSearchTerm.toLowerCase());
                               }).length > 0 ? (
                             <div style={{
                               display: 'grid',
                               gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                               gap: '16px'
                             }}>
                               {selectedTournament.registrations
                                 .filter(reg => {
                                   console.log('Rendering pending - Player:', reg.playerName, 'Category:', reg.category, 'Status:', reg.status);
                                   return reg.status === 'pending';
                                 })
                                 .filter(reg => {
                                   const shouldShow = selectedPlayerCategory === 'all' || reg.category === selectedPlayerCategory;
                                   console.log('Rendering category filter - Player:', reg.playerName, 'Category:', reg.category, 'Selected:', selectedPlayerCategory, 'Should show:', shouldShow);
                                   return shouldShow;
                                 })
                                 .filter(player => {
                                  const cleanName = (player?.playerName || "").replace(/["'].*?["']/g, "").trim();
                                   return cleanName.toLowerCase().includes(playersSearchTerm.toLowerCase());
                                 })
                                 .sort((a, b) => {
  const cleanNameA = (a?.playerName || "").replace(/["'].*?["']/g, "").trim();
  const cleanNameB = (b?.playerName || "").replace(/["'].*?["']/g, "").trim();
  return cleanNameA.localeCompare(cleanNameB);
})
                                 .map((player, index) => (
                                   <div key={player._id} style={{
                                     background: 'white',
                                     border: '1px solid #f59e0b',
                                     borderRadius: '12px',
                                     padding: '20px',
                                     transition: 'all 0.2s ease',
                                     boxShadow: '0 1px 3px rgba(245, 158, 11, 0.2)'
                                   }}>
                                     <div style={{
                                       display: 'flex',
                                       alignItems: 'flex-start',
                                       gap: '16px',
                                       marginBottom: '16px'
                                     }}>
                                       <div style={{
                                         width: '50px',
                                         height: '50px',
                                         borderRadius: '50%',
                                         background: '#f59e0b',
                                         display: 'flex',
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                         color: 'white',
                                         fontWeight: '600',
                                         fontSize: '16px',
                                         flexShrink: 0
                                       }}>
{(() => {
  // Check if this is a team category
  const categoryData = selectedTournament.tournamentCategories && 
    Object.values(selectedTournament.tournamentCategories).find(cat => 
      cat._id === player.category || 
      cat._id.toString() === player.category || 
      cat.division === player.category
    );
  
  const isTeamCategory = categoryData?.division?.toLowerCase().includes('team');
  
  if (isTeamCategory) {
    // Show team name initials for team categories
    return (player.teamName || "Team")
      .split(" ")
      .filter(Boolean)
      .map(n => n[0] || "")
      .join("")
      .toUpperCase() || "T";
  } else {
    // Show player name initials for individual categories
    return (player?.playerName || "")
      .replace(/["'].*?["']/g, "")
      .trim()
      .split(" ")
      .filter(Boolean)
      .map(n => n[0] || "")
      .join("")
      .toUpperCase() || "?";
  }
})()}
                                       </div>
                                       <div style={{ flex: 1 }}>
                                     {/* Player Name - Left Aligned */}
                                      <div style={{
                                        fontWeight: '700',
                                        color: '#334155',
                                        fontSize: '1.1rem',
                                        marginBottom: '12px',
                                        textAlign: 'left'
                                      }}>
                                        {(() => {
                                          // Check if this is a team category
                                          const categoryData = selectedTournament.tournamentCategories && 
                                            Object.values(selectedTournament.tournamentCategories).find(cat => 
                                              cat._id === player.category || 
                                              cat._id.toString() === player.category || 
                                              cat.division === player.category
                                            );
                                          
                                          const isTeamCategory = categoryData?.division?.toLowerCase().includes('team');
                                          
                                          if (isTeamCategory) {
                                            // Show team name for team categories
                                            return player.teamName || 'Team Name Not Available';
                                          } else {
                                            // Show player name for individual categories
                                            return (player?.playerName || "").replace(/["'].*?["']/g, "").trim();
                                          }
                                        })()}
                                      </div>
                                      
                                      {/* Player Details - Show team name for team categories, individual details for others */}
                                      {(() => {
                                        // Check if this is a team category
                                        const categoryData = selectedTournament.tournamentCategories && 
                                          Object.values(selectedTournament.tournamentCategories).find(cat => 
                                            cat._id === player.category || 
                                            cat._id.toString() === player.category || 
                                            cat.division === player.category
                                          );
                                        
                                        // DEBUG: Log player data structure
                                        console.log('🔍 PLAYER DATA DEBUG:', {
                                          playerObject: player,
                                          playerKeys: Object.keys(player),
                                          nestedPlayerObject: player.player,
                                          nestedPlayerKeys: player.player ? Object.keys(player.player) : null,
                                          pplId: player.player?.pplId,
                                          gender: player.player?.gender,
                                          birthDate: player.player?.birthDate,
                                          duprId: player.player?.duprId,
                                          category: player.category,
                                          categoryData: categoryData,
                                          calculatedAge: getAge(player.player?.birthDate)
                                        });
                                        
                                        const isTeamCategory = categoryData?.division?.toLowerCase().includes('team');
                                        const isDoublesCategory = categoryData?.division?.toLowerCase().includes('doubles');
                                        
                                        if (isTeamCategory) {
                                          // For team categories, don't show additional details since team name is already displayed above
                                          return null;
                                        } else {
                                          // Show individual player details for non-team categories
                                          return (
                                            <div>
                                              {/* Primary Player Details */}
                                              <div style={{
                                                display: 'grid',
                                                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                                                gap: '12px',
                                                marginBottom: '16px'
                                              }}>
                                                <div style={{
                                                  background: '#FFFFFF',
                                                  padding: '0px',
                                                  borderRadius: '6px',
                                                  textAlign: 'center'
                                                }}>
                                                  <div style={{
                                                    fontSize: '0.7rem',
                                                    color: '#64748b',
                                                    fontWeight: '500',
                                                    marginBottom: '2px'
                                                  }}>
                                                    PPL ID
                                                  </div>
                                                  <div style={{
                                                    fontSize: '0.85rem',
                                                    fontWeight: '600',
                                                    color: '#f59e0b'
                                                  }}>
                                                    {player.player?.pplId || 'N/A'}
                                                  </div>
                                                </div>
                                                <div style={{
                                                  background: '#FFFFFF',
                                                  padding: '0px',
                                                  borderRadius: '6px',
                                                  textAlign: 'center'
                                                }}>
                                                  <div style={{
                                                    fontSize: '0.7rem',
                                                    color: '#64748b',
                                                    fontWeight: '500',
                                                    marginBottom: '2px'
                                                  }}>
                                                    GENDER
                                                  </div>
                                                  <div style={{
                                                    fontSize: '0.85rem',
                                                    fontWeight: '500',
                                                    color: '#334155',
                                                    textTransform: 'capitalize'
                                                  }}>
                                                    {player.player?.gender || 'Not specified'}
                                                  </div>
                                                </div>
                                                <div style={{
                                                  background: '#FFFFFF',
                                                  padding: '0px',
                                                  borderRadius: '6px',
                                                  textAlign: 'center'
                                                }}>
                                                  <div style={{
                                                    fontSize: '0.7rem',
                                                    color: '#64748b',
                                                    fontWeight: '500',
                                                    marginBottom: '2px'
                                                  }}>
                                                    AGE
                                                  </div>
                                                  <div style={{
                                                    fontSize: '0.85rem',
                                                    fontWeight: '500',
                                                    color: '#334155'
                                                  }}>
                                                    {getAge(player.player?.birthDate)}
                                                  </div>
                                                </div>
                                                <div style={{
                                                  background: '#FFFFFF',
                                                  padding: '0px',
                                                  borderRadius: '6px',
                                                  textAlign: 'center'
                                                }}>
                                                  <div style={{
                                                    fontSize: '0.7rem',
                                                    color: '#64748b',
                                                    fontWeight: '500',
                                                    marginBottom: '2px'
                                                  }}>
                                                    DUPR ID
                                                  </div>
                                                  <div style={{
                                                    fontSize: '0.85rem',
                                                    fontWeight: '600',
                                                    color: '#f59e0b'
                                                  }}>
                                                    {player.player?.duprId || 'N/A'}
                                                  </div>
                                                </div>
                                              </div>
                                              
                                              {/* Partner Information for Doubles Categories */}
                                              {isDoublesCategory && player.partner && (
                                                <div style={{
                                                  background: (() => {
                                                    // Get partner invitation status - this would come from notifications or partner data
                                                    // For now, we'll simulate different statuses for demonstration
                                                    const partnerStatus = getPlayerPartnerStatus(player, selectedTournament._id);
                                                    return getPartnerStatusStyle(partnerStatus).backgroundColor;
                                                  })(),
                                                  padding: '12px',
                                                  borderRadius: '8px',
                                                  marginBottom: '16px',
                                                  border: (() => {
                                                    const partnerStatus = getPlayerPartnerStatus(player, selectedTournament._id);
                                                    return getPartnerStatusStyle(partnerStatus).borderColor;
                                                  })()
                                                }}>
                                                  <div style={{
                                                    fontSize: '0.8rem',
                                                    color: (() => {
                                                      const partnerStatus = getPlayerPartnerStatus(player, selectedTournament._id);
                                                      const statusStyle = getPartnerStatusStyle(partnerStatus);
                                                      return statusStyle.textColor;
                                                    })(),
                                                    fontWeight: '600',
                                                    marginBottom: '8px',
                                                    textAlign: 'center'
                                                  }}>
                                                    PARTNER INFORMATION {(() => {
                                                      const partnerStatus = getPlayerPartnerStatus(player, selectedTournament._id);
                                                      
                                                      switch(partnerStatus) {
                                                        case 'accepted':
                                                          return '✓ ACCEPTED';
                                                        case 'declined':
                                                          return '✗ DECLINED';
                                                        case 'pending':
                                                        default:
                                                          return '⏳ PENDING';
                                                      }
                                                    })()}
                                                  </div>
                                                  <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    marginBottom: '8px',
                                                    justifyContent: 'center'
                                                  }}>
                                                    <div style={{
                                                      width: '40px',
                                                      height: '40px',
                                                      borderRadius: '50%',
                                                      background: (() => {
                                                        const partnerStatus = getPlayerPartnerStatus(player, selectedTournament._id);
                                                        const statusStyle = getPartnerStatusStyle(partnerStatus);
                                                        return statusStyle.backgroundColor;
                                                      })(),
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      justifyContent: 'center',
                                                      color: 'white',
                                                      fontWeight: '600',
                                                      fontSize: '14px',
                                                      flexShrink: 0
                                                    }}>
                                                      {(() => {
                                                        const partnerName = player.partner.firstName && player.partner.lastName 
                                                          ? `${player.partner.firstName} ${player.partner.lastName}` 
                                                          : player.partner.name || 'Partner Name Not Available';
                                                        return partnerName
                                                          .split(" ")
                                                          .filter(Boolean)
                                                          .map(n => n[0] || "")
                                                          .join("")
                                                          .toUpperCase() || "P";
                                                      })()}
                                                    </div>
                                                    <div style={{
                                                       fontSize: '0.9rem',
                                                       fontWeight: '600',
                                                       color: '#0f172a',
                                                       textAlign: 'left'
                                                     }}>
                                                       {player.partner.firstName && player.partner.lastName 
                                                         ? `${player.partner.firstName} ${player.partner.lastName}` 
                                                         : player.partner.name || 'Partner Name Not Available'}
                                                     </div>
                                                  </div>
                                                  <div style={{
                                                    display: 'grid',
                                                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                                                    gap: '8px'
                                                  }}>
                                                    <div style={{
                                                      background: '#f8fafc',
                                                      padding: '8px',
                                                      borderRadius: '4px',
                                                      textAlign: 'center',
                                                      border: '1px solid #e2e8f0'
                                                    }}>
                                                      <div style={{
                                                        fontSize: '0.65rem',
                                                        color: '#64748b',
                                                        fontWeight: '500',
                                                        marginBottom: '2px'
                                                      }}>
                                                        PPL ID
                                                      </div>
                                                      <div style={{
                                                        fontSize: '0.75rem',
                                                        fontWeight: '600',
                                                        color: '#0284c7'
                                                      }}>
                                                        {player.partner.pplId || 'N/A'}
                                                      </div>
                                                    </div>
                                                    <div style={{
                                                      background: '#f8fafc',
                                                      padding: '8px',
                                                      borderRadius: '4px',
                                                      textAlign: 'center',
                                                      border: '1px solid #e2e8f0'
                                                    }}>
                                                      <div style={{
                                                        fontSize: '0.65rem',
                                                        color: '#64748b',
                                                        fontWeight: '500',
                                                        marginBottom: '2px'
                                                      }}>
                                                        GENDER
                                                      </div>
                                                      <div style={{
                                                        fontSize: '0.75rem',
                                                        fontWeight: '500',
                                                        color: '#334155',
                                                        textTransform: 'capitalize'
                                                      }}>
                                                        {player.partner.gender || 'N/A'}
                                                      </div>
                                                    </div>
                                                    <div style={{
                                                      background: '#f8fafc',
                                                      padding: '8px',
                                                      borderRadius: '4px',
                                                      textAlign: 'center',
                                                      border: '1px solid #e2e8f0'
                                                    }}>
                                                      <div style={{
                                                        fontSize: '0.65rem',
                                                        color: '#64748b',
                                                        fontWeight: '500',
                                                        marginBottom: '2px'
                                                      }}>
                                                        AGE
                                                      </div>
                                                      <div style={{
                                                        fontSize: '0.75rem',
                                                        fontWeight: '500',
                                                        color: '#334155'
                                                      }}>
                                                        {player.partner.age || 'N/A'}
                                                      </div>
                                                    </div>
                                                    <div style={{
                                                      background: '#f8fafc',
                                                      padding: '8px',
                                                      borderRadius: '4px',
                                                      textAlign: 'center',
                                                      border: '1px solid #e2e8f0'
                                                    }}>
                                                      <div style={{
                                                        fontSize: '0.65rem',
                                                        color: '#64748b',
                                                        fontWeight: '500',
                                                        marginBottom: '2px'
                                                      }}>
                                                        DUPR
                                                      </div>
                                                      <div style={{
                                                        fontSize: '0.75rem',
                                                        fontWeight: '600',
                                                        color: '#0284c7'
                                                      }}>
                                                        {player.partner.duprRatings?.doubles || player.partner.duprRatings?.singles || 'N/A'}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              )}
                                            </div>
                                          );
                                        }
                                      })()}
                                      {/* Category Display */}
                                      {selectedPlayerCategory === 'all' && (
                                        <div style={{
                                          background: '#fef3c7',
                                          padding: '8px 12px',
                                          borderRadius: '6px',
                                          marginBottom: '16px',
                                          textAlign: 'center'
                                        }}>
                                          
                                          <div style={{
                                            fontSize: '0.7rem',
                                            color: '#92400e',
                                            fontWeight: '500',
                                            marginBottom: '2px'
                                          }}>
                                            Category
                                          </div>
                                          <div style={{
                                            fontSize: '0.85rem',
                                            fontWeight: '600',
                                            color: '#f59e0b'
                                          }}>
                                            {(() => {
                                              const category = selectedTournament.tournamentCategories && 
                                                Object.values(selectedTournament.tournamentCategories).find(cat => 
                                                  cat._id === player.category || 
                                                  cat._id.toString() === player.category || 
                                                  cat.division === player.category
                                                );
                                              if (!category) return 'Unknown Category';
                                              
                                              const parts = [category.division];
                                              if (category.skillLevel) parts.push(category.skillLevel);
                                              if (category.ageCategory) parts.push(category.ageCategory);
                                              
                                              return parts.join(' - ');
                                            })()}
                                          </div>
                                        </div>
                                      )}
                                      
                                      
                                      {/* Action Buttons */}
                                      <div style={{
                                        display: 'flex',
                                        gap: '4px',
                                        justifyContent: 'center',
                                        marginTop: '8px',
                                        flexWrap: 'wrap'
                                      }}>
                                        
                                        <button
                                          style={{
                                            padding: '6px 8px',
                                            backgroundColor: '#3b82f6',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '6px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            boxShadow: '0 2px 4px rgba(59, 130, 246, 0.2)',
                                            minWidth: '60px'
                                          }}
                                          onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#2563eb';
                                            e.target.style.transform = 'translateY(-1px)';
                                            e.target.style.boxShadow = '0 4px 8px rgba(59, 130, 246, 0.3)';
                                          }}
                                          onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#3b82f6';
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = '0 2px 4px rgba(59, 130, 246, 0.2)';
                                          }}
                                          onClick={async () => {
                                            // Check if this is a team category
                                            const category = selectedTournament.tournamentCategories &&
                                              Object.values(selectedTournament.tournamentCategories).find(cat => cat._id.toString() === player.category);
                                            
                                            const isTeamCategory = category?.division?.toLowerCase().includes('team');
                                            
                                            if (isTeamCategory) {
                                              // Find the full registration data for team members
                                              // The player object IS the registration, so we can use it directly
                                              const registration = player;
                                              
                                              // Debug logging for team registration
                                              console.log('🔍 TEAM DEBUG - Registration lookup:', {
                                                playerData: player,
                                                playerId: player.playerId,
                                                category: player.category,
                                                foundRegistration: registration,
                                                registrationTeamMembers: registration?.teamMembers,
                                                registrationTeamName: registration?.teamName,
                                                allRegistrations: selectedTournament.registrations?.map(r => ({
                                                  regPlayerId: r.player?._id || r.player,
                                                  category: r.category,
                                                  status: r.status,
                                                  teamName: r.teamName,
                                                  teamMembers: r.teamMembers,
                                                  hasTeamMembers: !!r.teamMembers && r.teamMembers.length > 0
                                                }))
                                              });
                                              
                                              // Fetch detailed team member information
                                              let teamMembersData = [];
                                              console.log('🔍 TEAM MEMBER FETCH DEBUG:', {
                                                hasRegistration: !!registration,
                                                registrationTeamMembers: registration?.teamMembers,
                                                teamMembersLength: registration?.teamMembers?.length || 0,
                                                teamMembersType: typeof registration?.teamMembers,
                                                isArray: Array.isArray(registration?.teamMembers)
                                              });
                                              
                                              if (registration?.teamMembers && registration.teamMembers.length > 0) {
                                                console.log('🔍 Fetching team members:', registration.teamMembers);
                                                try {
                                                  const teamMemberPromises = registration.teamMembers.map(async (member) => {
                                                    try {
                                                      // Extract the actual member ID - it could be a string or an object with _id
                                                      const memberId = typeof member === 'string' ? member : (member._id || member.id || member);
                                                      console.log('🔍 Fetching member:', {
                                                        originalMember: member,
                                                        extractedId: memberId,
                                                        memberType: typeof member,
                                                        idType: typeof memberId
                                                      });
                                                      
                                                      if (!memberId || typeof memberId !== 'string') {
                                                        console.error('❌ Invalid member ID:', member);
                                                        return null;
                                                      }
                                                      
                                                      const storedUser = localStorage.getItem('user');
                                                      const token = storedUser ? JSON.parse(storedUser).token : null;
                                                      console.log('🔍 Token available:', !!token);
                                                      console.log('🔍 Making API call to:', `http://localhost:5000/api/users/${memberId}`);
                                                      
                                                      const response = await fetch(`http://localhost:5000/api/users/${memberId}`, {
                                                        headers: {
                                                          'Authorization': `Bearer ${token}`
                                                        }
                                                      });
                                                      
                                                      console.log('🔍 Response status:', response.status, 'OK:', response.ok);
                                                      console.log('🔍 Response headers:', Object.fromEntries(response.headers.entries()));
                                                      
                                                      if (response.ok) {
                                                        const memberData = await response.json();
                                                        console.log('✅ Member data received:', memberData);
                                                        return memberData;
                                                      } else {
                                                        console.error('❌ Failed to fetch member:', memberId, response.status);
                                                        const errorText = await response.text();
                                                        console.error('❌ Error response:', errorText);
                                                        return null;
                                                      }
                                                      return null;
                                                    } catch (error) {
                                                      console.error('❌ Error fetching team member:', member, error);
                                                      return null;
                                                    }
                                                  });
                                                  
                                                  teamMembersData = await Promise.all(teamMemberPromises);
                                                  console.log('🔍 Raw Promise.all results:', teamMembersData);
                                                  teamMembersData = teamMembersData.filter(member => member !== null);
                                                  console.log('🔍 Final team members data after filtering:', teamMembersData);
                                                } catch (error) {
                                                  console.error('❌ Error fetching team members:', error);
                                                }
                                              } else {
                                                console.log('⚠️ No team members found in registration:', {
                                                  hasRegistration: !!registration,
                                                  hasTeamMembers: !!registration?.teamMembers,
                                                  teamMembersLength: registration?.teamMembers?.length || 0,
                                                  teamMembers: registration?.teamMembers
                                                });
                                                
                                                // For registrations with empty team members, show a helpful message
                                                teamMembersData = [{
                                                  _id: 'placeholder',
                                                  firstName: 'No team members',
                                                  lastName: 'were saved with this registration',
                                                  email: 'This may be an older registration created before team functionality was fully implemented.',
                                                  gender: 'unknown',
                                                  duprRatings: { singles: 0, doubles: 0 },
                                                  isPlaceholder: true
                                                }];
                                              }
                                              
                                              console.log('🔍 Setting selectedTeamRegistration with:', {
                                                playerName: player.playerName,
                                                playerId: player.playerId,
                                                teamName: registration?.teamName || 'Unknown Team',
                                                teamMembersCount: teamMembersData?.length || 0,
                                                teamMembersData: teamMembersData,
                                                category: category?.division + ' - ' + category?.skillLevel,
                                                hasRegistration: !!registration
                                              });
                                              
                                              setSelectedTeamRegistration({
                                                playerName: player.playerName,
                                                playerId: player.playerId,
                                                teamName: registration?.teamName || 'Unknown Team',
                                                teamMembers: teamMembersData, // Use the fetched detailed data
                                                category: category?.division + ' - ' + category?.skillLevel,
                                                registration: registration // Include full registration data
                                              });
                                              setShowTeamMembersModal(true);
                                            } else {
                                              // Find the full registration data for individual categories
                                              // Try multiple matching strategies since player ID format may vary
                                              const registration = selectedTournament.registrations?.find(reg => {
                                                const regPlayerId = reg.player?._id || reg.player;
                                                const playerIdToMatch = player.playerId || player.player?._id;
                                                
                                                return (
                                                  (regPlayerId === playerIdToMatch || 
                                                   regPlayerId?.toString() === playerIdToMatch?.toString()) &&
                                                  reg.category === player.category &&
                                                  reg.status === 'pending'
                                                );
                                              });
                                              
                                              // Debug logging to understand the data structure
                                              console.log('🔍 DEBUG - Registration lookup:', {
                                                playerData: player,
                                                playerId: player.playerId,
                                                playerObjectId: player.player?._id,
                                                category: player.category,
                                                foundRegistration: registration,
                                                registrationKeys: registration ? Object.keys(registration) : 'No registration found',
                                                playerEmail: registration?.playerEmail,
                                                playerPhone: registration?.playerPhone,
                                                proofOfPayment: registration?.proofOfPayment,
                                                // Also check old field names
                                                email: registration?.email,
                                                contactNumber: registration?.contactNumber,
                                                allRegistrations: selectedTournament.registrations?.map(r => ({
                                                  regPlayerId: r.player?._id || r.player,
                                                  regPlayerIdType: typeof (r.player?._id || r.player),
                                                  category: r.category,
                                                  status: r.status,
                                                  playerName: r.playerName,
                                                  hasPlayerEmail: !!r.playerEmail,
                                                  hasPlayerPhone: !!r.playerPhone,
                                                  hasEmail: !!r.email,
                                                  hasContactNumber: !!r.contactNumber,
                                                  hasProof: !!r.proofOfPayment
                                                }))
                                              });
                                              
                                              console.log('=== PROOF OF PAYMENT DEBUG ===');
                                              console.log('Registration object:', registration);
                                              console.log('Registration proofOfPayment:', registration?.proofOfPayment);
                                              console.log('Registration proofOfPayment type:', typeof registration?.proofOfPayment);
                                              console.log('Registration proofOfPayment length:', registration?.proofOfPayment?.length);
                                              console.log('All registration keys:', registration ? Object.keys(registration) : 'No registration');
                                              
                                              // Show payment proof for individual categories
                                              // Use player.playerObject which contains the actual registration data
                                              const regData = player.playerObject || registration;
                                              
                                              // Check if this is a team category
                                              const isTeamCategory = player.category && 
                                                selectedTournament?.tournamentCategories?.find(cat => 
                                                  cat._id === player.category
                                                )?.division?.toLowerCase().includes('team');

                                              let teamMembersData = [];
                                              
                                              // If it's a team category, fetch team member details
                                              if (isTeamCategory && regData?.teamMembers && regData.teamMembers.length > 0) {
                                                try {
                                                  // Fetch detailed team member information
                                                  const teamMemberPromises = regData.teamMembers.map(async (memberId) => {
                                                    try {
                                                      const user = JSON.parse(localStorage.getItem('user') || '{}');
                                                      const token = user.token;
                                                      const response = await fetch(`http://localhost:5000/api/users/${memberId}`, {
                                                        headers: {
                                                          'Authorization': `Bearer ${token}`
                                                        }
                                                      });
                                                      if (response.ok) {
                                                        return await response.json();
                                                      }
                                                      return null;
                                                    } catch (error) {
                                                      console.error('Error fetching team member:', error);
                                                      return null;
                                                    }
                                                  });
                                                  
                                                  teamMembersData = await Promise.all(teamMemberPromises);
                                                  teamMembersData = teamMembersData.filter(member => member !== null);
                                                } catch (error) {
                                                  console.error('Error fetching team members:', error);
                                                }
                                              }
                                              
                                              setSelectedPlayerAttachment({
                                                playerName: player.playerName,
                                                // Only show PPLID for security, prioritize registration data structure
                                                playerId: regData?.playerName?.match(/PPLID:\s*(\S+)/)?.[1] || player.player?.pplId || 'N/A',
                                                // Use registration data structure - try both new and old field names
                                                email: regData?.playerEmail || regData?.email || 'Not provided',
                                                phoneNumber: regData?.playerPhone || regData?.contactNumber || 'Not provided',
                                                emergencyContact: regData?.emergencyContact || 'Not provided',
                                                emergencyPhone: regData?.emergencyPhone || 'Not provided',
                                                // Team-specific data
                                                isTeamCategory,
                                                teamName: regData?.teamName || 'Not provided',
                                                teamMembers: teamMembersData,
                                                // Use proof of payment from registration data - construct full URL if needed
                                                attachmentUrl: regData?.proofOfPayment ? 
                                                  (regData.proofOfPayment.startsWith('http') ? 
                                                    regData.proofOfPayment : 
                                                    `http://localhost:5000${regData.proofOfPayment}`) :
                                                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjM0I4MkY2Ii8+Cjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiPlBheW1lbnQgUHJvb2Y8L3RleHQ+Cjx0ZXh0IHg9IjMwMCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiI+Tm90IFByb3ZpZGVkPC90ZXh0Pgo8L3N2Zz4K'
                                              });
                                              setShowAttachmentModal(true);
                                            }
                                          }}
                                        >
                                          View
                                        </button>
                                        
                                        <button
                                          style={{
                                            padding: '6px 8px',
                                            backgroundColor: '#ef4444',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '6px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            boxShadow: '0 2px 4px rgba(239, 68, 68, 0.2)',
                                            minWidth: '60px'
                                          }}
                                          onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#dc2626';
                                            e.target.style.transform = 'translateY(-1px)';
                                            e.target.style.boxShadow = '0 4px 8px rgba(239, 68, 68, 0.3)';
                                          }}
                                          onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#ef4444';
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = '0 2px 4px rgba(239, 68, 68, 0.2)';
                                          }}
                                          onClick={() => {
                                            setSelectedPlayerToReject({
                                              playerName: player.playerName,
                                              playerId: player.player?._id || player.player,
                                              categoryId: player.category
                                            });
                                            setRejectionReason('');
                                            setShowRejectModal(true);
                                          }}
                                        >
                                          Reject
                                        </button>
                                        <button
                                          style={{
                                            padding: '6px 8px',
                                            backgroundColor: '#f59e0b',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '6px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            boxShadow: '0 2px 4px rgba(245, 158, 11, 0.2)',
                                            minWidth: '60px'
                                          }}
                                          onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#d97706';
                                            e.target.style.transform = 'translateY(-1px)';
                                            e.target.style.boxShadow = '0 4px 8px rgba(245, 158, 11, 0.3)';
                                          }}
                                          onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#f59e0b';
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = '0 2px 4px rgba(245, 158, 11, 0.2)';
                                          }}
                                          onClick={async () => {
                                            try {
                                              console.log('=== APPROVE PLAYER DEBUG ===');
                                              console.log('Full player object:', player);
                                              console.log('player.playerObject:', player.playerObject);
                                              console.log('player.playerObject keys:', Object.keys(player.playerObject || {}));
                                              
                                              // The player object is actually a registration record
                                              // player.player contains the actual player data
                                              // player.category contains the category ID
                                              console.log('Registration record:', player);
                                              console.log('Player data:', player.player);
                                              console.log('Category:', player.category);
                                              
                                              const playerId = player.player?._id || player.player;
                                              const categoryId = player.category;
                                              
                                              console.log('Extracted values:', {
                                                playerId,
                                                categoryId,
                                                playerName: player.playerName
                                              });
                                              
                                              if (!playerId || !categoryId) {
                                                console.error('Missing data - playerId:', playerId, 'categoryId:', categoryId);
                                                alert('Error: Missing player or category information');
                                                return;
                                              }
                                              
                                              // Debug authentication
                                              const token = localStorage.getItem('token');
                                              const userFromStorage = JSON.parse(localStorage.getItem('user') || '{}');
                                              console.log('=== AUTH DEBUG ===');
                                              console.log('Token exists:', !!token);
                                              console.log('Token length:', token ? token.length : 0);
                                              console.log('Token preview:', token ? token.substring(0, 50) + '...' : 'null');
                                              console.log('User from localStorage:', userFromStorage);
                                              console.log('User token from user object:', userFromStorage.token);
                                              console.log('User role:', userFromStorage.role);
                                              
                                              // Use token from user object if available, fallback to direct token
                                              const authToken = userFromStorage.token || token;
                                              
                                              // Check if token is malformed
                                              if (authToken && authToken.split('.').length !== 3) {
                                                console.error('❌ JWT token is malformed - should have 3 parts separated by dots');
                                                alert('Your session has expired or is invalid. Please sign in again.');
                                                localStorage.removeItem('token');
                                                localStorage.removeItem('user');
                                                window.location.href = '/signin';
                                                return;
                                              }
                                              
                                              if (!authToken) {
                                                console.error('❌ No authentication token found');
                                                alert('Please sign in to approve players.');
                                                window.location.href = '/signin';
                                                return;
                                              }
                                              
                                              console.log('Using token:', authToken ? authToken.substring(0, 50) + '...' : 'null');
                                              console.log('==================');
                                              
                                              const response = await fetch(`/api/tournaments/${selectedTournament._id}/registrations/approve`, {
                                                method: 'POST',
                                                headers: {
                                                  'Content-Type': 'application/json',
                                                  'Authorization': `Bearer ${authToken}`
                                                },
                                                body: JSON.stringify({
                                                  playerId: playerId,
                                                  category: categoryId
                                                })
                                              });
                                              
                                              const result = await response.json();
                                              
                                              if (response.ok) {
                                                alert(`Player ${player.playerName} has been approved successfully!`);
                                                // Refresh the tournament data
                                                try {
                                                  const refreshResponse = await fetch(`/api/tournaments/${selectedTournament._id}`, {
                                                    headers: { 
                                                      'Authorization': `Bearer ${authToken}`,
                                                      'Content-Type': 'application/json',
                                                      'Cache-Control': 'no-cache, no-store, must-revalidate',
                                                      'Pragma': 'no-cache',
                                                      'Expires': '0'
                                                    },
                                                  });
                                                  
                                                  if (refreshResponse.ok) {
                                                    const updatedTournament = await refreshResponse.json();
                                                    setSelectedTournament(updatedTournament);
                                                    console.log('✅ Tournament data refreshed after approval');
                                                  }
                                                } catch (refreshError) {
                                                  console.error('Error refreshing tournament data:', refreshError);
                                                }
                                              } else {
                                                console.error('Approval failed:', result);
                                                alert(`Failed to approve player: ${result.message || 'Unknown error'}`);
                                              }
                                            } catch (error) {
                                              console.error('Error approving player:', error);
                                              alert('Error approving player. Please try again.');
                                            }
                                          }}
                                        >
                                          Approve
                                        </button>
                                        
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div style={{
                              textAlign: 'center',
                              padding: '40px 20px',
                              color: '#64748b'
                            }}>
                              <div style={{
                                fontSize: '3rem',
                                marginBottom: '16px',
                                opacity: 0.5
                              }}>
                                👥
                              </div>
                              <p style={{
                                fontSize: '1.1rem',
                                fontWeight: '500',
                                marginBottom: '8px',
                                color: '#334155'
                              }}>
                                No pending players found
                              </p>
                              <p style={{
                                fontSize: '0.9rem',
                                color: '#64748b'
                              }}>
                                {playersSearchTerm ? `No players match "${playersSearchTerm}"` : 'All players have been processed'}
                              </p>
                            </div>
                          )}
                                </>
                              ) : (
                                <div style={{
                                  textAlign: 'center',
                                  padding: '60px 20px',
                                  color: '#6b7280'
                                }}>
                                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏆</div>
                                  <h3 style={{ color: '#374151', marginBottom: '8px' }}>No Tournament Selected</h3>
                                  <p>Please select a tournament to view pending players.</p>
                                </div>
                              )}
                            </div>
                          )}

                      </TournamentDetailSection>
                    )}

{tournamentDetailTab === 'brackets' && (
  <TournamentDetailSection>
    <TournamentDetailSectionTitle style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Tournament Brackets
      </div>
      <button
        onClick={() => {
          if (isPublished) {
            setShowUnpublishModal(true);
          } else {
            setShowPublishModal(true);
          }
        }}
        style={{
          padding: '8px 16px',
          backgroundColor: isPublished ? '#ef4444' : '#059669',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = isPublished ? '#dc2626' : '#047857';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = isPublished ? '#ef4444' : '#059669';
        }}
      >
        {isPublished ? 'Unpublish' : 'Publish'}
      </button>
    </TournamentDetailSectionTitle>

{/* Display all categories as expandable cards */}
{selectedTournament.tournamentCategories && selectedTournament.tournamentCategories.length > 0 ? (
  <div>
    {selectedTournament.tournamentCategories.map((category, categoryIndex) => (
      <CategoryCard key={category._id}>
        <CategoryHeader 
          $expanded={expandedCategories[category._id]}
          onClick={() => toggleCategoryExpansion(category._id)}
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
                <span>{category.division}</span>
                <span style={{ color: '#64748b', fontSize: '1rem' }}>|</span>
                <span style={{ color: '#059669' }}>{category.skillLevel}</span>
                {category.ageCategory && (
                  <>
                    <span style={{ color: '#64748b', fontSize: '1rem' }}>|</span>
                    <span>{category.ageCategory}</span>
                  </>
                )}
              </div>
            </CategoryHeaderInfo>
            <CategoryExpandIcon $expanded={expandedCategories[category._id]}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </CategoryExpandIcon>
          </CategoryHeaderContent>
        </CategoryHeader>
                                
                                {expandedCategories[category._id] && (
                                  <CategoryBracketContent 
                                    $expanded={expandedCategories[category._id]}
                                    $zIndex={500 + categoryIndex}
                                  >
                                    {/* Tournament Format Selection */}
                                    <div style={{
                                      display: 'flex',
                                      gap: '12px',
                                      marginBottom: '0px',
                                      justifyContent: 'center',
                                      padding: '16px',
                                      borderRadius: '12px',
                                    }}>
                                      <button
                                        style={{
                                          padding: '12px 24px',
                                          backgroundColor: '#3b82f6',
                                          color: 'white',
                                          border: 'none',
                                          borderRadius: '8px',
                                          fontSize: '0.875rem',
                                          fontWeight: '600',
                                          cursor: 'pointer',
                                          transition: 'all 0.2s ease',
                                          boxShadow: '0 2px 4px rgba(59, 130, 246, 0.2)',
                                          minWidth: '140px',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          gap: '8px'
                                        }}
                                        onMouseEnter={(e) => {
                                          e.target.style.backgroundColor = '#2563eb';
                                          e.target.style.transform = 'translateY(-1px)';
                                          e.target.style.boxShadow = '0 4px 8px rgba(59, 130, 246, 0.3)';
                                        }}
                                        onMouseLeave={(e) => {
                                          e.target.style.backgroundColor = '#3b82f6';
                                          e.target.style.transform = 'translateY(0)';
                                          e.target.style.boxShadow = '0 2px 4px rgba(59, 130, 246, 0.2)';
                                        }}
                                        onClick={() => {
                        console.log('Generate Round Robin for category:', category.division);
                        
                        // Always enable Round Robin and reset elimination when clicked
                        setRoundRobinCategories(prev => ({
                          ...prev,
                          [category._id]: true
                        }));
                        setEliminationCategories(prev => ({
                          ...prev,
                          [category._id]: false
                        }));
                        
                        // Get approved players for this category
                        const approvedPlayers = selectedTournament?.registrations
                          ?.filter(reg => {
                            if (reg.status !== 'approved') return false;
                            const regCategory = typeof reg.category === 'string' ? reg.category : reg.category?.division;
                            return regCategory === category.division;
                          }) || [];
                        
                        // Calculate number of brackets needed based on maxParticipants
                        const maxParticipants = parseInt(category.maxParticipants) || 16;
                        const totalPlayers = approvedPlayers.length;
                        const bracketsNeeded = Math.ceil(totalPlayers / maxParticipants);
                        
                        // Generate bracket letters based on number needed
                        const bracketLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
                        const availableBracketLetters = bracketLetters.slice(0, Math.max(bracketsNeeded, 1));
                        
                        console.log(`Total players: ${totalPlayers}, Max per bracket: ${maxParticipants}, Brackets needed: ${bracketsNeeded}`);
                        
                        // Set available brackets based on calculation
                        setAvailableBrackets(prev => ({
                          ...prev,
                          [category._id]: availableBracketLetters
                        }));
                        
                        // Initialize groupStage structure with calculated brackets
                        const groups = availableBracketLetters.map(letter => ({
                          id: `group-${letter.toLowerCase()}`,
                          name: `Group ${letter}`,
                          standings: []
                        }));
                        
                        // Distribute players across brackets
                        const distributedGroups = groups.map((group, index) => {
                          const startIndex = index * maxParticipants;
                          const endIndex = Math.min(startIndex + maxParticipants, totalPlayers);
                          const playersForBracket = approvedPlayers.slice(startIndex, endIndex);
                          
                          // ✅ Preserve existing matches if they exist
                          const existingGroup = category.groupStage?.groups?.find(g => g.id === group.id);
                          const existingMatches = existingGroup?.matches || {};
                          
                          const playerNames = playersForBracket.map(p => `${p.player?.firstName || p.firstName || ''} ${p.player?.lastName || p.lastName || ''}`.trim());
                          
                          return {
                            ...group,
                            originalPlayers: playerNames, // ✅ Store original player order
                            standings: playerNames.map(playerName => ({
                              player: playerName,
                              wins: 0,
                              losses: 0,
                              pointsFor: 0,
                              pointsAgainst: 0,
                              qualified: false
                            })),
                            matches: existingMatches // ✅ Preserve existing match data
                          };
                        });
                        
                        category.groupStage = {
                          groups: distributedGroups
                        };
                        
                        console.log('🔄 Round Robin generated - preserved existing matches:', 
                          distributedGroups.some(g => Object.keys(g.matches).length > 0));
                        
                        console.log('Distributed groups:', distributedGroups);
                      }}
                                      >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                          <circle cx="12" cy="12" r="10"/>
                                          <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"/>
                                        </svg>
                                        Round Robin
                                      </button>
                                      
                                      <button
                                        style={{
                                          padding: '12px 24px',
                                          backgroundColor: '#f59e0b',
                                          color: 'white',
                                          border: 'none',
                                          borderRadius: '8px',
                                          fontSize: '0.875rem',
                                          fontWeight: '600',
                                          cursor: 'pointer',
                                          transition: 'all 0.2s ease',
                                          boxShadow: '0 2px 4px rgba(245, 158, 11, 0.2)',
                                          minWidth: '140px',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          gap: '8px'
                                        }}
                                        onMouseEnter={(e) => {
                                          e.target.style.backgroundColor = '#d97706';
                                          e.target.style.transform = 'translateY(-1px)';
                                          e.target.style.boxShadow = '0 4px 8px rgba(245, 158, 11, 0.3)';
                                        }}
                                        onMouseLeave={(e) => {
                                          e.target.style.backgroundColor = '#f59e0b';
                                          e.target.style.transform = 'translateY(0)';
                                          e.target.style.boxShadow = '0 2px 4px rgba(245, 158, 11, 0.2)';
                                        }}
                                        onClick={() => {
                                          console.log('Generate Elimination Draw for category:', category.division);
                                          setEliminationCategories(prev => ({
                                            ...prev,
                                            [category._id]: true
                                          }));
                                        }}
                                      >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                          <polyline points="7.5,4.21 12,6.81 16.5,4.21"/>
                                          <polyline points="7.5,19.79 7.5,14.6 3,12"/>
                                          <polyline points="21,12 16.5,14.6 16.5,19.79"/>
                                          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                                          <line x1="12" y1="22.08" x2="12" y2="12"/>
                                        </svg>
                                        Elimination Draw
                                      </button>
                                    </div>

                                    {/* Round Robin Bracket Buttons */}
                                    {roundRobinCategories[category._id] && !eliminationCategories[category._id] && (
                                      <div style={{
                                        display: 'flex',
                                        gap: '8px',
                                        marginBottom: '16px',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                      }}>
                                        {/* Bracket Count Dropdown */}
                                        <div style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '12px',
                                          marginRight: '20px'
                                        }}>
                                          <span style={{
                                            fontSize: '0.875rem',
                                            fontWeight: '600',
                                            color: '#64748b'
                                          }}>Brackets:</span>
                                          <select
                                            value={bracketMode[category._id] || 4}
                                            onChange={(e) => {
                                              const newMode = parseInt(e.target.value);
                                              console.log('🎯 Bracket dropdown changed:', {
                                                categoryId: category._id,
                                                categoryName: category.division,
                                                oldMode: bracketMode[category._id] || 4,
                                                newMode: newMode
                                              });
                                              setShowBracketModal(true);
                                              setPendingBracketChange({ categoryId: category._id, newMode });
                                            }}
                                            style={{
                                              padding: '6px 12px',
                                              border: '2px solid #cbd5e1',
                                              borderRadius: '8px',
                                              fontSize: '0.875rem',
                                              fontWeight: '600',
                                              color: '#374151',
                                              backgroundColor: 'white',
                                              cursor: 'pointer',
                                              outline: 'none',
                                              transition: 'all 0.2s ease'
                                            }}
                                            onFocus={(e) => {
                                              e.target.style.borderColor = '#3b82f6';
                                              e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                                            }}
                                            onBlur={(e) => {
                                              e.target.style.borderColor = '#cbd5e1';
                                              e.target.style.boxShadow = 'none';
                                            }}
                                          >
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={4}>4</option>
                                            <option value={8}>8</option>
                                          </select>
                                        </div>
                                        {/* Bracket Buttons */}
                                        {(availableBrackets[category._id] || ['A', 'B', 'C', 'D'])
                                          .map((bracket) => (
                                          <button
                                            key={bracket}
                                            style={{
                                              padding: '8px 16px',
                                              backgroundColor: '#3b82f6',
                                              color: 'white',
                                              border: 'none',
                                              borderRadius: '6px',
                                              fontSize: '0.875rem',
                                              fontWeight: '600',
                                              cursor: 'pointer',
                                              transition: 'all 0.2s ease',
                                              minWidth: '80px'
                                            }}
                                            onMouseEnter={(e) => {
                                              e.target.style.backgroundColor = '#2563eb';
                                              e.target.style.transform = 'translateY(-1px)';
                                            }}
                                            onMouseLeave={(e) => {
                                              e.target.style.backgroundColor = '#3b82f6';
                                              e.target.style.transform = 'translateY(0)';
                                            }}
                                            onClick={async () => {
                                              console.log(`Generate Bracket ${bracket} for category:`, category.division);
                                              setSelectedBrackets(prev => ({
                                                ...prev,
                                                [category._id]: bracket
                                              }));
                                            }}
                                          >
                                            Bracket {bracket}
                                          </button>
                                        ))}
                                        
                                        {/* Auto-set brackets based on bracket mode */}
                                        {(() => {
                                          const currentMode = bracketMode[category._id] || 4;
                                          const allBrackets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
                                          const targetBrackets = allBrackets.slice(0, currentMode);
                                          const currentBrackets = availableBrackets[category._id] || ['A', 'B', 'C', 'D'];
                                          
                                          // Auto-update brackets if they don't match the required count
                                          if (JSON.stringify(currentBrackets) !== JSON.stringify(targetBrackets)) {
                                            setAvailableBrackets(prev => ({
                                              ...prev,
                                              [category._id]: targetBrackets
                                            }));
                                            console.log(`Auto-set to ${targetBrackets.length} brackets for category ${category.division} (mode: ${currentMode})`);
                                          }
                                          
                                          return null; // No button needed - automatic behavior
                                        })()}
                                      </div>
                                    )}

{/* Group Stage Section - Show selected bracket or placeholder */}
{category.groupStage && category.groupStage.groups && roundRobinCategories[category._id] && !eliminationCategories[category._id] && (
  <GroupStageSection>
    <div className="groups-grid">
      {(() => {
        // Auto-select first available bracket if none is selected
        if (!selectedBrackets[category._id] && availableBrackets[category._id]?.length > 0) {
          const firstBracket = availableBrackets[category._id][0];
          setSelectedBrackets(prev => ({
            ...prev,
            [category._id]: firstBracket
          }));
          return null; // Will re-render with bracket selected
        }
        
        // If no bracket is selected and no available brackets, show instruction message
        if (!selectedBrackets[category._id]) {
          return (
            <div style={{ 
              textAlign: 'center', 
              padding: '48px 24px',
              background: 'white',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>👆</div>
              <h3 style={{ 
                color: '#334155', 
                marginBottom: '8px', 
                fontSize: '1.1rem', 
                textAlign: 'center',
                margin: '0 auto 8px auto',
                display: 'block',
                width: '100%'
              }}>
                Select a Bracket
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Click on any bracket button above to view the standings.<br/>
                Players are automatically distributed based on the participant limit ({category.maxParticipants} per category).
              </p>
            </div>
          );
        }

        const expectedGroupId = `group-${selectedBrackets[category._id].toLowerCase()}`;
        const selectedGroup = category.groupStage.groups.find(group => group.id === expectedGroupId);
        
        // 🔍 DEBUG: Log match data being displayed
        console.log('🎯 RENDER DEBUG - Selected group matches:', {
          categoryId: category._id,
          expectedGroupId,
          groupFound: !!selectedGroup,
          matches: selectedGroup?.matches,
          matchCount: selectedGroup?.matches ? Object.keys(selectedGroup.matches).length : 0
        });

        if (selectedGroup) {
          // ✅ Use pre-populated standings from Round Robin generation
          // Players are already distributed across brackets based on maxParticipants
          
          console.log('🎯 Selected Group Data:', {
            id: selectedGroup.id,
            standings: selectedGroup.standings,
            matches: selectedGroup.matches,
            standingsCount: selectedGroup.standings?.length,
            matchesCount: selectedGroup.matches ? Object.keys(selectedGroup.matches).length : 0
          });
          
          // Get approved players for dropdown options in edit mode
          const approvedPlayers = selectedTournament?.registrations
            ?.filter(reg => {
              if (reg.status !== 'approved') return false;
              // Match by categoryId for this specific category
              return reg.categoryId === category._id;
            }) || [];
          return (
            <>
              {/* Standings Table */}
              <GroupCard key={selectedGroup.id}>
                <GroupHeader>
                  <h4>Bracket {selectedBrackets[category._id]}</h4>
                  <div className="bracket-actions">
                    <button
  className="bracket-btn edit-btn"
  onClick={() => {
    const editKey = `${category._id}-${selectedBrackets[category._id]}`;
    setIsEditingBracket(prev => ({
      ...prev,
      [editKey]: !prev[editKey]
    }));
  }}
  title="Edit Bracket"
  style={{
    backgroundColor: isEditingBracket[`${category._id}-${selectedBrackets[category._id]}`] ? '#ef4444' : '',
    color: isEditingBracket[`${category._id}-${selectedBrackets[category._id]}`] ? 'white' : ''
  }}
>
  {isEditingBracket[`${category._id}-${selectedBrackets[category._id]}`] ? 'Cancel' : (isPublished ? 'Update' : 'Edit')}
</button>
                    {isEditingBracket[`${category._id}-${selectedBrackets[category._id]}`] && (
                      <button 
                        className="bracket-btn save-btn"
                        onClick={() => saveChanges(category._id, selectedBrackets[category._id])}
                        title="Save Changes"
                        style={{
                          backgroundColor: '#10b981',
                          color: 'white',
                          marginLeft: '8px'
                        }}
                      >
                        Save
                      </button>
                    )}
                  </div>
                </GroupHeader>

                <StandingsTable>
                  <div className="standings-header">
                    <div>Rank</div>
                    <div>Player</div>
                    <div>Matches<br/>(W-L)</div>
                    <div>Points<br/>(PF-PA)</div>
                  </div>
                  
                  {(() => {
                    // Calculate current standings from match results
                    const players = selectedGroup.originalPlayers || selectedGroup.standings.map(s => s.player);
                    console.log('selectedGroup data:', {
                      id: selectedGroup.id,
                      standings: selectedGroup.standings,
                      matches: selectedGroup.matches,
                      standingsCount: selectedGroup.standings?.length,
                      matchesCount: Object.keys(selectedGroup.matches || {}).length
                    });
                    
                    // Create enhanced matches with player names
                    const enhancedMatches = {};
                    Object.keys(selectedGroup.matches || {}).forEach(key => {
                      const match = selectedGroup.matches[key];
                      const [playerIndex, opponentIndex] = key.split('-').map(Number);
                      const player1 = selectedGroup.standings[playerIndex]?.player;
                      const player2 = selectedGroup.standings[playerIndex + 1 + opponentIndex]?.player;
                      
                      enhancedMatches[key] = {
                        ...match,
                        player1: player1,
                        player2: player2
                      };
                    });
                    
                    console.log('enhancedMatches:', enhancedMatches);
                    console.log('players:', players);
                    
                    const currentStandings = calculateStandings(enhancedMatches, players);
                    console.log('currentStandings result:', currentStandings);
                    console.log('currentStandings length:', currentStandings?.length);
                    
                    return currentStandings.map((player, index) => {
                      return (
                      <StandingsRow key={index} $qualified={player.qualified}>
                        <div className="rank-number">{index + 1}</div>
                        <div className="player-info">
                          <div className="player-name">
                            {player.player.split('/').map((name, nameIndex) => (
                              <div key={nameIndex}>{name.trim()}</div>
                            ))}
                          </div>
                        </div>
                        <div className="matches-record">{player.wins}-{player.losses}</div>
                        <div className="points-record">{player.pointsFor}-{player.pointsAgainst}
                        </div>
                      </StandingsRow>
                    );
                    });
                  })()}
                </StandingsTable>
              </GroupCard>

              {/* Match Schedule */}
              <GroupCard>
                <GroupHeader>
                  <h4>Match Schedule</h4>
                </GroupHeader>
             <MatchTable>
  <div className="match-schedule-header">
    <div>Match</div>
    <div>Players</div>
    <div>Time</div>
    <div>Court</div>
    <div>Date</div>
    <div>Game 1</div>
    <div>Game 2</div>
    <div>Game 3</div>
    <div>Standing</div>
  </div>

  {(selectedGroup.originalPlayers || selectedGroup.standings.map(s => s.player)).map((playerName, playerIndex) =>
  (selectedGroup.originalPlayers || selectedGroup.standings.map(s => s.player)).slice(playerIndex + 1).map((opponentName, opponentIndex) => {
    const matchIndex = `${playerIndex}-${opponentIndex}`;
    const editKey = `${category._id}-${selectedBrackets[category._id]}`;
    const isEditing = isEditingBracket[editKey];
    const matchNumber = `G${playerIndex + 1}`;

    const key = String(matchIndex); // ✅ always string
    const matchData = selectedGroup.matches?.[key] || {};

    const timeValue = matchData.time || "08:00";
    const courtValue = matchData.court || "1";
    const dateValue = matchData.date || "2024-05-30";
    // Get scores for all 3 sets
    const set1Player1 = matchData.game1Player1 || "0";
    const set1Player2 = matchData.game1Player2 || "0";
    const set2Player1 = matchData.game2Player1 || "0";
    const set2Player2 = matchData.game2Player2 || "0";
    const set3Player1 = matchData.game3Player1 || "0";
    const set3Player2 = matchData.game3Player2 || "0";
    const finalPlayer1 = matchData.finalScorePlayer1 || "0";
    const finalPlayer2 = matchData.finalScorePlayer2 || "0";

    return (
      <MatchRow key={`${selectedTournament._id}-${key}-${matchData.game1Player1}-${matchData.game1Player2}`}>
        <div className="match-number">{matchNumber}</div>
        <div className="teams-horizontal">
          <div className="team-column">
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {playerName}
            </span>
          </div>
          <span className="vs-divider">vs</span>
          <div className="team-column">
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {opponentName}
            </span>
          </div>
        </div>

        {/* Time */}
        <div className="match-time">
          {isEditing ? (
            <input
              type="time"
              value={timeValue}
              onChange={(e) =>
                handleMatchChange(category._id, selectedBrackets[category._id], key, "time", e.target.value)
              }
            />
          ) : timeValue}
        </div>

        {/* Court */}
        <div className="court-number">
          {isEditing ? (
            <input
              type="number"
              value={courtValue}
              onChange={(e) =>
                handleMatchChange(category._id, selectedBrackets[category._id], key, "court", e.target.value)
              }
            />
          ) : courtValue}
        </div>

        {/* Date */}
        <div className="match-date">
          {isEditing ? (
            <input
              type="date"
              value={dateValue}
              onChange={(e) =>
                handleMatchChange(category._id, selectedBrackets[category._id], key, "date", e.target.value)
              }
            />
          ) : new Date(dateValue).toLocaleDateString("en-US")}
        </div>

        {/* Game 1 Score */}
        <div className="game-score">
          {isEditing ? (
            <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
              <input
                type="number"
                value={set1Player1}
                style={{ width: "40px", textAlign: "center" }}
                onChange={(e) => {
                  console.log('🎯 Game 1 Score input changed!', { key, field: 'game1Player1', value: e.target.value });
                  handleMatchChange(category._id, selectedBrackets[category._id], key, "game1Player1", e.target.value);
                }}
              />
              <span>-</span>
              <input
                type="number"
                value={set1Player2}
                style={{ width: "40px", textAlign: "center" }}
                onChange={(e) => {
                  console.log('🎯 Game 1 Score input changed!', { key, field: 'game1Player2', value: e.target.value });
                  handleMatchChange(category._id, selectedBrackets[category._id], key, "game1Player2", e.target.value);
                }}
              />
            </div>
          ) : `${set1Player1}-${set1Player2}`}
        </div>
        
        {/* Game 2 Score */}
        <div className="game-score">
          {isEditing ? (
            <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
              <input
                type="number"
                value={set2Player1}
                style={{ width: "40px", textAlign: "center" }}
                onChange={(e) => {
                  console.log('🎯 Game 2 Score input changed!', { key, field: 'game2Player1', value: e.target.value });
                  handleMatchChange(category._id, selectedBrackets[category._id], key, "game2Player1", e.target.value);
                }}
              />
              <span>-</span>
              <input
                type="number"
                value={set2Player2}
                style={{ width: "40px", textAlign: "center" }}
                onChange={(e) => {
                  console.log('🎯 Game 2 Score input changed!', { key, field: 'game2Player2', value: e.target.value });
                  handleMatchChange(category._id, selectedBrackets[category._id], key, "game2Player2", e.target.value);
                }}
              />
            </div>
          ) : `${set2Player1}-${set2Player2}`}
        </div>
        
        {/* Game 3 Score */}
        <div className="game-score">
          {isEditing ? (
            <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
              <input
                type="number"
                value={set3Player1}
                style={{ width: "40px", textAlign: "center" }}
                onChange={(e) => {
                  console.log('🎯 Game 3 Score input changed!', { key, field: 'game3Player1', value: e.target.value });
                  handleMatchChange(category._id, selectedBrackets[category._id], key, "game3Player1", e.target.value);
                }}
              />
              <span>-</span>
              <input
                type="number"
                value={set3Player2}
                style={{ width: "40px", textAlign: "center" }}
                onChange={(e) => {
                  console.log('🎯 Game 3 Score input changed!', { key, field: 'game3Player2', value: e.target.value });
                  handleMatchChange(category._id, selectedBrackets[category._id], key, "game3Player2", e.target.value);
                }}
              />
            </div>
          ) : `${set3Player1}-${set3Player2}`}
        </div>
{/* Final Score - Auto-calculated */}
        <div className="final-score">
          <div style={{ display: "flex", gap: "2px", alignItems: "center", fontWeight: "bold", color: finalPlayer1 > finalPlayer2 ? "gray" : finalPlayer2 > finalPlayer1 ? "gray" : "gray" }}>
            {`${finalPlayer1}-${finalPlayer2}`}
            {finalPlayer1 !== "0" || finalPlayer2 !== "0" ? (
              <span style={{ marginLeft: "8px", fontSize: "12px", color: "#666" }}>
                {finalPlayer1 > finalPlayer2 ?"" : finalPlayer2 > finalPlayer1 ?"" :""}
              </span>
            ) : null}
          </div>
        </div>

      </MatchRow>
    );
  })
).flat()}

</MatchTable>
              </GroupCard>
                                                  
                                               
                                                </>
                                              );
                                            }
                                          })()}
                                        </div>
                                      </GroupStageSection>
                                    )}
                                    {/* Elimination Draw Section */}
                                    {eliminationCategories[category._id] && (
                                      <div style={{
                                        marginTop: '24px',
                                        background: 'white',
                                        borderRadius: '16px',
                                        border: '1px solid #e2e8f0',
                                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                                        overflow: 'hidden'
                                      }}>
                                        <div style={{
                                          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                          color: 'white',
                                          padding: '18px 24px',
                                          fontSize: '1.1rem',
                                          fontWeight: '600',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'space-between'
                                        }}>
                                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                              <polyline points="7.5,4.21 12,6.81 16.5,4.21"/>
                                              <polyline points="7.5,19.79 7.5,14.6 3,12"/>
                                              <polyline points="21,12 16.5,14.6 16.5,19.79"/>
                                              <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                                              <line x1="12" y1="22.08" x2="12" y2="12"/>
                                            </svg>
                                            Elimination Draw - Knockout Stage
                                          </div>
                                        </div>
                                        
                                        <div style={{ padding: '24px' }}>
                                          {(() => {
                                            // Get top 2 players from each bracket
                                            const getTopPlayersFromBrackets = () => {
                                              const currentMode = bracketMode[category._id] || 4;
                                              const allBrackets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
                                              const brackets = allBrackets.slice(0, currentMode);
                                              const topPlayers = {};
                                              
                                              brackets.forEach(bracket => {
                                                const expectedGroupId = `group-${bracket.toLowerCase()}`;
                                                const group = category.groupStage?.groups?.find(g => g.id === expectedGroupId);
                                                
                                                if (group && group.standings) {
                                                  // Sort players by points (wins), then by games won
                                                  const sortedPlayers = [...group.standings].sort((a, b) => {
                                                    if (b.points !== a.points) return b.points - a.points;
                                                    return b.gamesWon - a.gamesWon;
                                                  });
                                                  
                                                  topPlayers[bracket] = {
                                                    first: sortedPlayers[0] || null,
                                                    second: sortedPlayers[1] || null
                                                  };
                                                } else {
                                                  topPlayers[bracket] = { first: null, second: null };
                                                }
                                              });
                                              
                                              return topPlayers;
                                            };
                                            
                                            // Get top players from brackets for elimination matches
                                            const topPlayers = getTopPlayersFromBrackets();
                                            const hasEnoughPlayers = Object.values(topPlayers).every(bracket => 
                                              bracket.first && bracket.second
                                            );
                                            
                                            // Only show elimination matches if we have enough players
                                            if (!hasEnoughPlayers) {
                                              return (
                                                <div style={{ 
                                                  textAlign: 'center', 
                                                  padding: '48px 24px',
                                                  background: 'white',
                                                  borderRadius: '12px',
                                                  border: '1px solid #e2e8f0',
                                                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                                                }}>
                                                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⏳</div>
                                                  <h3 style={{ color: '#334155', marginBottom: '8px', fontSize: '1.1rem' }}>
                                                    Waiting for Group Stage Results
                                                  </h3>
                                                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                                                    Complete all group stage matches to generate elimination brackets
                                                  </p>
                                                </div>
                                              );
                                            }
                                            
                                            // Create elimination matches based on cross-bracket pairing
                                            const currentMode = bracketMode[category._id] || 4;
                                            const persistedElimination = Array.isArray(category?.eliminationMatches?.matches)
                                              ? category.eliminationMatches.matches
                                              : (Array.isArray(category.eliminationMatches) ? category.eliminationMatches : []);
                                            let eliminationMatches = [];
                                            
                                            if (currentMode === 4) {
                                              console.log('Category groupStage:', category.groupStage);
                                              console.log('Top players:', topPlayers);
                                              
                                              // 4 bracket elimination - Quarter Finals matchups: a1 vs b2, d1 vs c2, c1 vs d2, b1 vs a2
                                              eliminationMatches = [
                                                {
                                                  id: 'quarter1',
                                                  title: 'Quarter-Final 1: A1 vs B2',
                                                  player1: topPlayers.A?.first ? { 
                                                    name: topPlayers.A.first.name, 
                                                    bracket: 'A', 
                                                    position: '1st', 
                                                    points: topPlayers.A.first.points || 0 
                                                  } : { name: 'TBD', bracket: 'A', position: '1st', points: '' },
                                                  player2: topPlayers.B?.second ? { 
                                                    name: topPlayers.B.second.name, 
                                                    bracket: 'B', 
                                                    position: '2nd', 
                                                    points: topPlayers.B.second.points || 0 
                                                  } : { name: 'TBD', bracket: 'B', position: '2nd', points: '' }
                                                },
                                                {
                                                  id: 'quarter2',
                                                  title: 'Quarter-Final 2: D1 vs C2',
                                                  player1: topPlayers.D?.first ? { 
                                                    name: topPlayers.D.first.name, 
                                                    bracket: 'D', 
                                                    position: '1st', 
                                                    points: topPlayers.D.first.points || 0 
                                                  } : { name: 'TBD', bracket: 'D', position: '1st', points: '' },
                                                  player2: topPlayers.C?.second ? { 
                                                    name: topPlayers.C.second.name, 
                                                    bracket: 'C', 
                                                    position: '2nd', 
                                                    points: topPlayers.C.second.points || 0 
                                                  } : { name: 'TBD', bracket: 'C', position: '2nd', points: '' }
                                                },
                                                {
                                                  id: 'quarter3',
                                                  title: 'Quarter-Final 3: C1 vs D2',
                                                  player1: topPlayers.C?.first ? { 
                                                    name: topPlayers.C.first.name, 
                                                    bracket: 'C', 
                                                    position: '1st', 
                                                    points: topPlayers.C.first.points || 0 
                                                  } : { name: 'TBD', bracket: 'C', position: '1st', points: '' },
                                                  player2: topPlayers.D?.second ? { 
                                                    name: topPlayers.D.second.name, 
                                                    bracket: 'D', 
                                                    position: '2nd', 
                                                    points: topPlayers.D.second.points || 0 
                                                  } : { name: 'TBD', bracket: 'D', position: '2nd', points: '' }
                                                },
                                                {
                                                  id: 'quarter4',
                                                  title: 'Quarter-Final 4: B1 vs A2',
                                                  player1: topPlayers.B?.first ? { 
                                                    name: topPlayers.B.first.name, 
                                                    bracket: 'B', 
                                                    position: '1st', 
                                                    points: topPlayers.B.first.points || 0 
                                                  } : { name: 'TBD', bracket: 'B', position: '1st', points: '' },
                                                  player2: topPlayers.A?.second ? { 
                                                    name: topPlayers.A.second.name, 
                                                    bracket: 'A', 
                                                    position: '2nd', 
                                                    points: topPlayers.A.second.points || 0 
                                                  } : { name: 'TBD', bracket: 'A', position: '2nd', points: '' }
                                                },
                                                {
                                                  id: 'semi1',
                                                  title: 'Semi-Final 1',
                                                  player1: { name: 'Winner QF1', bracket: 'QF1 Winner', position: 'Winner', points: '' },
                                                  player2: { name: 'Winner QF2', bracket: 'QF2 Winner', position: 'Winner', points: '' }
                                                },
                                                {
                                                  id: 'semi2',
                                                  title: 'Semi-Final 2',
                                                  player1: { name: 'Winner QF3', bracket: 'QF3 Winner', position: 'Winner', points: '' },
                                                  player2: { name: 'Winner QF4', bracket: 'QF4 Winner', position: 'Winner', points: '' }
                                                },
                                                {
                                                  id: 'final',
                                                  title: 'Final',
                                                  player1: { name: 'Winner SF1', bracket: 'SF1 Winner', position: 'Finalist', points: '' },
                                                  player2: { name: 'Winner SF2', bracket: 'SF2 Winner', position: 'Finalist', points: '' }
                                                },
                                                {
                                                  id: 'bronze',
                                                  title: 'Bronze Battle',
                                                  player1: { name: 'Loser SF1', bracket: 'SF1 Loser', position: '3rd Place', points: '' },
                                                  player2: { name: 'Loser SF2', bracket: 'SF2 Loser', position: '3rd Place', points: '' }
                                                }
                                              ];
                                            } else if (eliminationMatches.length === 0) {
                                              // Dynamic bracket elimination - Round of 16 matches for 8 brackets (and similar logic for other modes)
                                              const allBrackets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
                                              const brackets = allBrackets.slice(0, currentMode);
                                              
                                              // Generate Round of 16 matches: A1 vs E2, B1 vs F2, C1 vs G2, D1 vs H2, E1 vs A2, F1 vs B2, G1 vs C2, H1 vs D2
                                              const round16Matches = [
                                                { bracket1: 'A', pos1: 'first', bracket2: 'E', pos2: 'second', title: 'Round of 16 - Match 1: A1 vs E2' },
                                                { bracket1: 'B', pos1: 'first', bracket2: 'F', pos2: 'second', title: 'Round of 16 - Match 2: B1 vs F2' },
                                                { bracket1: 'C', pos1: 'first', bracket2: 'G', pos2: 'second', title: 'Round of 16 - Match 3: C1 vs G2' },
                                                { bracket1: 'D', pos1: 'first', bracket2: 'H', pos2: 'second', title: 'Round of 16 - Match 4: D1 vs H2' },
                                                { bracket1: 'E', pos1: 'first', bracket2: 'A', pos2: 'second', title: 'Round of 16 - Match 5: E1 vs A2' },
                                                { bracket1: 'F', pos1: 'first', bracket2: 'B', pos2: 'second', title: 'Round of 16 - Match 6: F1 vs B2' },
                                                { bracket1: 'G', pos1: 'first', bracket2: 'C', pos2: 'second', title: 'Round of 16 - Match 7: G1 vs C2' },
                                                { bracket1: 'H', pos1: 'first', bracket2: 'D', pos2: 'second', title: 'Round of 16 - Match 8: H1 vs D2' }
                                              ];
                                              
                                              eliminationMatches = [
                                                ...round16Matches.map((match, index) => ({
                                                  id: `round16_${index + 1}`,
                                                  title: match.title,
                                                  player1: topPlayers[match.bracket1]?.[match.pos1] ? {
                                                    name: topPlayers[match.bracket1][match.pos1].name,
                                                    bracket: match.bracket1,
                                                    position: match.pos1 === 'first' ? '1st' : '2nd',
                                                    points: topPlayers[match.bracket1][match.pos1].points || 0
                                                  } : { name: 'TBD', bracket: match.bracket1, position: match.pos1 === 'first' ? '1st' : '2nd', points: '' },
                                                  player2: topPlayers[match.bracket2]?.[match.pos2] ? {
                                                    name: topPlayers[match.bracket2][match.pos2].name,
                                                    bracket: match.bracket2,
                                                    position: match.pos2 === 'first' ? '1st' : '2nd',
                                                    points: topPlayers[match.bracket2][match.pos2].points || 0
                                                  } : { name: 'TBD', bracket: match.bracket2, position: match.pos2 === 'first' ? '1st' : '2nd', points: '' }
                                                })),
                                                // Quarter Finals
                                                {
                                                  id: 'quarter1',
                                                  title: 'Quarter-Final 1',
                                                  player1: { name: 'Winner R16-1', bracket: 'R16-1 Winner', position: 'QF', points: '' },
                                                  player2: { name: 'Winner R16-2', bracket: 'R16-2 Winner', position: 'QF', points: '' }
                                                },
                                                {
                                                  id: 'quarter2',
                                                  title: 'Quarter-Final 2',
                                                  player1: { name: 'Winner R16-3', bracket: 'R16-3 Winner', position: 'QF', points: '' },
                                                  player2: { name: 'Winner R16-4', bracket: 'R16-4 Winner', position: 'QF', points: '' }
                                                },
                                                {
                                                  id: 'quarter3',
                                                  title: 'Quarter-Final 3',
                                                  player1: { name: 'Winner R16-5', bracket: 'R16-5 Winner', position: 'QF', points: '' },
                                                  player2: { name: 'Winner R16-6', bracket: 'R16-6 Winner', position: 'QF', points: '' }
                                                },
                                                {
                                                  id: 'quarter4',
                                                  title: 'Quarter-Final 4',
                                                  player1: { name: 'Winner R16-7', bracket: 'R16-7 Winner', position: 'QF', points: '' },
                                                  player2: { name: 'Winner R16-8', bracket: 'R16-8 Winner', position: 'QF', points: '' }
                                                },
                                                // Semi Finals
                                                {
                                                  id: 'semi1',
                                                  title: 'Semi-Final 1',
                                                  player1: { name: 'Winner QF1', bracket: 'QF1 Winner', position: 'Semifinalist', points: '' },
                                                  player2: { name: 'Winner QF2', bracket: 'QF2 Winner', position: 'Semifinalist', points: '' }
                                                },
                                                {
                                                  id: 'semi2',
                                                  title: 'Semi-Final 2',
                                                  player1: { name: 'Winner QF3', bracket: 'QF3 Winner', position: 'Semifinalist', points: '' },
                                                  player2: { name: 'Winner QF4', bracket: 'QF4 Winner', position: 'Semifinalist', points: '' }
                                                },
                                                // Final
                                                {
                                                  id: 'final',
                                                  title: 'Final',
                                                  player1: { name: 'Winner SF1', bracket: 'SF1 Winner', position: 'Finalist', points: '' },
                                                  player2: { name: 'Winner SF2', bracket: 'SF2 Winner', position: 'Finalist', points: '' }
                                                },
                                                // Bronze Battle
                                                {
                                                  id: 'bronze',
                                                  title: 'Bronze Battle',
                                                  player1: { name: 'Loser SF1', bracket: 'SF1 Loser', position: '3rd Place', points: '' },
                                                  player2: { name: 'Loser SF2', bracket: 'SF2 Loser', position: '3rd Place', points: '' }
                                                }
                                              ];
                                            }

                                            // Overlay persisted schedule fields if available
                                            if (persistedElimination.length) {
                                              eliminationMatches = eliminationMatches.map((m, i) => ({
                                                ...m,
                                                court: persistedElimination[i]?.court || m.court,
                                                date: persistedElimination[i]?.date || m.date,
                                                time: persistedElimination[i]?.time || m.time,
                                              }));
                                            }
                                            
                                            // Reusable Match Card Component
                                            const MatchCard = ({ match, matchNumber, categoryId, bracket, matchIndex }) => {
                                              const [isEditing, setIsEditing] = useState(false);
                                              const [editData, setEditData] = useState({
                                                player1Score1: match.player1.points || '',
                                                player1Score2: match.player1.points || '',
                                                player1Score3: match.player1.points || '',
                                                player2Score1: match.player2.points || '',
                                                player2Score2: match.player2.points || '',
                                                player2Score3: match.player2.points || '',
                                                court: 'CC',
                                                date: '2024-08-22',
                                                time: '09:19'
                                              });

                                              const handleEditToggle = () => {
                                                setIsEditing(!isEditing);
                                              };

                                              const handleSave = async () => {
                                                try {
                                                  // 🔍 DEBUG: Check user authentication and permissions
                                                  const token = user?.token || localStorage.getItem('token');
                                                  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
                                                  console.log('🔐 AUTH DEBUG:', {
                                                    hasToken: !!token,
                                                    tokenLength: token?.length || 0,
                                                    userFromContext: !!user,
                                                    userFromStorage: !!storedUser,
                                                    userRole: user?.role,
                                                    userRoles: user?.roles,
                                                    storedUserRole: storedUser?.role,
                                                    storedUserRoles: storedUser?.roles,
                                                    isClubAdmin: user?.roles?.includes('clubadmin') || storedUser?.roles?.includes('clubadmin')
                                                  });
                                                  
                                                  // 🚨 Check if user has permission to save
                                                  if (!token) {
                                                    console.error('❌ No authentication token found');
                                                    showNotification('Please log in to save match data', 'error');
                                                    return;
                                                  }
                                                  
                                                  const hasClubAdminRole = user?.roles?.includes('clubadmin') || storedUser?.roles?.includes('clubadmin');
                                                  if (!hasClubAdminRole) {
                                                    console.error('❌ User does not have clubadmin role');
                                                    showNotification('Only club administrators can save tournament data', 'error');
                                                    return;
                                                  }
                                                  
                                                  console.log('🔥 SAVE DEBUG:', { categoryId, bracket, matchIndex, editData });
                                                  
                                                  // Save each field using the existing handleMatchChange function
                                                  if (categoryId && bracket && matchIndex !== undefined) {
                                                    console.log('✅ Saving schedule fields...');
                                                    handleMatchChange(categoryId, bracket, matchIndex, 'time', editData.time);
                                                    handleMatchChange(categoryId, bracket, matchIndex, 'court', editData.court);
                                                    handleMatchChange(categoryId, bracket, matchIndex, 'date', editData.date);
                                                    
                                                    console.log('✅ Saving scores:', { p1: editData.player1Score1, p2: editData.player2Score1 });
                                                    handleMatchChange(categoryId, bracket, matchIndex, 'game1Player1', editData.player1Score1);
                                                    handleMatchChange(categoryId, bracket, matchIndex, 'game1Player2', editData.player2Score1);
                                                    
                                                    console.log('✅ Calling saveChanges...');
                                                    // Save to backend using the existing saveChanges function
                                                    await saveChanges(categoryId, bracket);
                                                    console.log('✅ Save completed successfully!');
                                                    showNotification('Match saved successfully!', 'success');
                                                    
                                                    // ✅ Exit edit mode after successful save
                                                    setIsEditing(false);
                                                  } else {
                                                    console.log('❌ Missing required parameters for saving:', { categoryId, bracket, matchIndex });
                                                    showNotification('Unable to save - missing match information', 'error');
                                                  }
                                                } catch (error) {
                                                  console.error('❌ Error saving match data:', error);
                                                  showNotification('Failed to save match data: ' + error.message, 'error');
                                                }
                                              };

                                              const handleInputChange = (field, value) => {
                                                setEditData(prev => ({
                                                  ...prev,
                                                  [field]: value
                                                }));
                                              };

                                              return (
                                              <div style={{
                                                background: 'white',
                                                border: '1px solid #e2e8f0',
                                                borderRadius: '8px',
                                                minWidth: '400px',
                                                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                                                display: 'flex',
                                                position: 'relative'
                                              }}>
                                                {/* Match Number as first cell */}
                                                <div style={{
                                                  background: '#f8fafc',
                                                  borderRight: '1px solid #e2e8f0',
                                                  width: '40px',
                                                  display: 'flex',
                                                  alignItems: 'center',
                                                  justifyContent: 'center',
                                                  fontSize: '14px',
                                                  fontWeight: 'bold',
                                                  color: '#1e293b',
                                                  borderTopLeftRadius: '8px',
                                                  borderBottomLeftRadius: '8px'
                                                }}>{matchNumber}</div>
                                                
                                                <div style={{
                                                  flex: 1,
                                                  position: 'relative'
                                                }}>
                                                  {/* Edit Button */}
                                                  <div style={{
                                                    position: 'absolute',
                                                    top: '8px',
                                                    right: '8px',
                                                    display: 'flex',
                                                    gap: '4px'
                                                  }}>
                                                    {isEditing ? (
                                                      <>
                                                        <button
                                                          type="button"
                                                          onClick={handleSave}
                                                          style={{
                                                            cursor: 'pointer',
                                                            padding: '4px 8px',
                                                            background: '#10b981',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '4px',
                                                            fontSize: '12px',
                                                            fontWeight: '500'
                                                          }}
                                                        >
                                                          Save
                                                        </button>
                                                        <button
                                                          type="button"
                                                          onClick={handleEditToggle}
                                                          style={{
                                                            cursor: 'pointer',
                                                            padding: '4px 8px',
                                                            background: '#6b7280',
                                                            color: 'white',
                                                            border: 'none',
                                                            borderRadius: '4px',
                                                            fontSize: '12px',
                                                            fontWeight: '500'
                                                          }}
                                                        >
                                                          Cancel
                                                        </button>
                                                      </>
                                                    ) : (
                                                      <button
                                                        type="button"
                                                        onClick={handleEditToggle}
                                                        style={{
                                                          cursor: 'pointer',
                                                          padding: '2px',
                                                          background: 'transparent',
                                                          border: 'none',
                                                          borderRadius: '4px'
                                                        }}
                                                      >
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
                                                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                                          <path d="m18.5 2.5 a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                                                        </svg>
                                                      </button>
                                                    )}
                                                  </div>
                                                
                                                {/* Player 1 */}
                                                <div style={{
                                                  display: 'flex',
                                                  justifyContent: 'space-between',
                                                  alignItems: 'stretch',
                                                  borderBottom: '1px solid #f1f5f9'
                                                }}>
                                                  <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    padding: '12px',
                                                    flex: 1
                                                  }}>
                                                    <span style={{ 
                                                      fontWeight: '600', 
                                                      color: '#1e293b',
                                                      fontSize: '16px'
                                                    }}>{match.player1.name}</span>
                                                  </div>
                                                  <div style={{
                                                    display: 'flex',
                                                    borderLeft: '1px solid #e2e8f0'
                                                  }}>
                                                    <div style={{
                                                      background: (isEditing ? editData.player1Score1 : match.player1.points) === 11 ? '#dcfce7' : 'transparent',
                                                      color: (isEditing ? editData.player1Score1 : match.player1.points) === 11 ? '#166534' : '#64748b',
                                                      padding: '12px',
                                                      fontSize: '16px',
                                                      fontWeight: '600',
                                                      minWidth: '50px',
                                                      textAlign: 'center',
                                                      borderRight: '1px solid #e2e8f0',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      justifyContent: 'center'
                                                    }}>
                                                      {isEditing ? (
                                                        <input
                                                          type="number"
                                                          value={editData.player1Score1}
                                                          onChange={(e) => handleInputChange('player1Score1', e.target.value)}
                                                          style={{
                                                            width: '40px',
                                                            textAlign: 'center',
                                                            border: '1px solid #d1d5db',
                                                            borderRadius: '4px',
                                                            padding: '2px',
                                                            fontSize: '14px'
                                                          }}
                                                        />
                                                      ) : (
                                                        match.player1.points
                                                      )}
                                                    </div>
                                                    <div style={{
                                                      background: (isEditing ? editData.player1Score2 : match.player1.points) === 11 ? '#dcfce7' : 'transparent',
                                                      color: (isEditing ? editData.player1Score2 : match.player1.points) === 11 ? '#166534' : '#64748b',
                                                      padding: '12px',
                                                      fontSize: '16px',
                                                      fontWeight: '600',
                                                      minWidth: '50px',
                                                      textAlign: 'center',
                                                      borderRight: '1px solid #e2e8f0',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      justifyContent: 'center'
                                                    }}>
                                                      {isEditing ? (
                                                        <input
                                                          type="number"
                                                          value={editData.player1Score2}
                                                          onChange={(e) => handleInputChange('player1Score2', e.target.value)}
                                                          style={{
                                                            width: '40px',
                                                            textAlign: 'center',
                                                            border: '1px solid #d1d5db',
                                                            borderRadius: '4px',
                                                            padding: '2px',
                                                            fontSize: '14px'
                                                          }}
                                                        />
                                                      ) : (
                                                        match.player1.points
                                                      )}
                                                    </div>
                                                    <div style={{
                                                      background: (isEditing ? editData.player1Score3 : match.player1.points) === 11 ? '#dcfce7' : 'transparent',
                                                      color: (isEditing ? editData.player1Score3 : match.player1.points) === 11 ? '#166534' : '#64748b',
                                                      padding: '12px',
                                                      fontSize: '16px',
                                                      fontWeight: '600',
                                                      minWidth: '50px',
                                                      textAlign: 'center',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      justifyContent: 'center'
                                                    }}>
                                                      {isEditing ? (
                                                        <input
                                                          type="number"
                                                          value={editData.player1Score3}
                                                          onChange={(e) => handleInputChange('player1Score3', e.target.value)}
                                                          style={{
                                                            width: '40px',
                                                            textAlign: 'center',
                                                            border: '1px solid #d1d5db',
                                                            borderRadius: '4px',
                                                            padding: '2px',
                                                            fontSize: '14px'
                                                          }}
                                                        />
                                                      ) : (
                                                        match.player1.points
                                                      )}
                                                    </div>
                                                  </div>
                                                </div>
                                                
                                                {/* Player 2 */}
                                                <div style={{
                                                  display: 'flex',
                                                  justifyContent: 'space-between',
                                                  alignItems: 'stretch',
                                                  borderBottom: '1px solid #f1f5f9'
                                                }}>
                                                  <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    padding: '12px',
                                                    flex: 1
                                                  }}>
                                                    <span style={{ 
                                                      fontWeight: '600', 
                                                      color: '#1e293b',
                                                      fontSize: '16px'
                                                    }}>{match.player2.name}</span>
                                                  </div>
                                                  <div style={{
                                                    display: 'flex',
                                                    borderLeft: '1px solid #e2e8f0'
                                                  }}>
                                                    <div style={{
                                                      background: (isEditing ? editData.player2Score1 : match.player2.points) === 11 ? '#dcfce7' : 'transparent',
                                                      color: (isEditing ? editData.player2Score1 : match.player2.points) === 11 ? '#166534' : '#64748b',
                                                      padding: '12px',
                                                      fontSize: '16px',
                                                      fontWeight: '600',
                                                      minWidth: '50px',
                                                      textAlign: 'center',
                                                      borderRight: '1px solid #e2e8f0',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      justifyContent: 'center'
                                                    }}>
                                                      {isEditing ? (
                                                        <input
                                                          type="number"
                                                          value={editData.player2Score1}
                                                          onChange={(e) => handleInputChange('player2Score1', e.target.value)}
                                                          style={{
                                                            width: '40px',
                                                            textAlign: 'center',
                                                            border: '1px solid #d1d5db',
                                                            borderRadius: '4px',
                                                            padding: '2px',
                                                            fontSize: '14px'
                                                          }}
                                                        />
                                                      ) : (
                                                        match.player2.points
                                                      )}
                                                    </div>
                                                    <div style={{
                                                      background: (isEditing ? editData.player2Score2 : match.player2.points) === 11 ? '#dcfce7' : 'transparent',
                                                      color: (isEditing ? editData.player2Score2 : match.player2.points) === 11 ? '#166534' : '#64748b',
                                                      padding: '12px',
                                                      fontSize: '16px',
                                                      fontWeight: '600',
                                                      minWidth: '50px',
                                                      textAlign: 'center',
                                                      borderRight: '1px solid #e2e8f0',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      justifyContent: 'center'
                                                    }}>
                                                      {isEditing ? (
                                                        <input
                                                          type="number"
                                                          value={editData.player2Score2}
                                                          onChange={(e) => handleInputChange('player2Score2', e.target.value)}
                                                          style={{
                                                            width: '40px',
                                                            textAlign: 'center',
                                                            border: '1px solid #d1d5db',
                                                            borderRadius: '4px',
                                                            padding: '2px',
                                                            fontSize: '14px'
                                                          }}
                                                        />
                                                      ) : (
                                                        match.player2.points
                                                      )}
                                                    </div>
                                                    <div style={{
                                                      background: (isEditing ? editData.player2Score3 : match.player2.points) === 11 ? '#dcfce7' : 'transparent',
                                                      color: (isEditing ? editData.player2Score3 : match.player2.points) === 11 ? '#166534' : '#64748b',
                                                      padding: '12px',
                                                      fontSize: '16px',
                                                      fontWeight: '600',
                                                      minWidth: '50px',
                                                      textAlign: 'center',
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      justifyContent: 'center'
                                                    }}>
                                                      {isEditing ? (
                                                        <input
                                                          type="number"
                                                          value={editData.player2Score3}
                                                          onChange={(e) => handleInputChange('player2Score3', e.target.value)}
                                                          style={{
                                                            width: '40px',
                                                            textAlign: 'center',
                                                            border: '1px solid #d1d5db',
                                                            borderRadius: '4px',
                                                            padding: '2px',
                                                            fontSize: '14px'
                                                          }}
                                                        />
                                                      ) : (
                                                        match.player2.points
                                                      )}
                                                    </div>
                                                  </div>
                                                </div>
                                                
                                                  {/* Court and Date Info */}
                                                  <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    padding: '8px 12px',
                                                    fontSize: '12px',
                                                    color: '#64748b',
                                                    gap: '10px'
                                                  }}>
                                                    {isEditing ? (
                                                      <>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                          <span>Court:</span>
                                                          <input
                                                            type="text"
                                                            value={editData.court}
                                                            onChange={(e) => handleInputChange('court', e.target.value)}
                                                            style={{
                                                              width: '40px',
                                                              textAlign: 'center',
                                                              border: '1px solid #d1d5db',
                                                              borderRadius: '4px',
                                                              padding: '2px',
                                                              fontSize: '12px'
                                                            }}
                                                          />
                                                        </div>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                          <input
                                                            type="date"
                                                            value={editData.date}
                                                            onChange={(e) => handleInputChange('date', e.target.value)}
                                                            style={{
                                                              border: '1px solid #d1d5db',
                                                              borderRadius: '4px',
                                                              padding: '2px',
                                                              fontSize: '12px'
                                                            }}
                                                          />
                                                          <input
                                                            type="time"
                                                            value={editData.time}
                                                            onChange={(e) => handleInputChange('time', e.target.value)}
                                                            style={{
                                                              border: '1px solid #d1d5db',
                                                              borderRadius: '4px',
                                                              padding: '2px',
                                                              fontSize: '12px'
                                                            }}
                                                          />
                                                        </div>
                                                      </>
                                                    ) : (
                                                      <>
                                                        <span>Court: {editData.court}</span>
                                                        <span>{new Date(editData.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {editData.time} AM +08</span>
                                                      </>
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                            );
                                            };
                                            
                                            return (
                                              <div>
                                                {/* Tournament Bracket Tree Layout */}
                                                <div style={{
                                                  display: 'flex',
                                                  flexDirection: 'column',
                                                  alignItems: 'flex-start',
                                                  padding: '20px',
                                                  background: '#f8fafc',
                                                  borderRadius: '12px',
                                                  border: '1px solid #e2e8f0',
                                                  overflow: 'auto',
                                                  maxHeight: '500px',
                                                  maxWidth: '700px',
                                                  width: '100%'
                                                }}>
                                                  {currentMode === 4 ? (
                                                    // 4-bracket tournament tree - Complete elimination draw
                                                    <div style={{
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      gap: '60px',
                                                      width: 'max-content'
                                                    }}>
                                                      {/* Quarter Finals */}
                                                      <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '30px'
                                                      }}>
                                                        <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Quarter Finals</div>
                                                        <MatchCard match={eliminationMatches[0]} matchNumber={1} categoryId={category._id} bracket="elimination" matchIndex={0} />
                                                        <MatchCard match={eliminationMatches[1]} matchNumber={2} categoryId={category._id} bracket="elimination" matchIndex={1} />
                                                        <MatchCard match={eliminationMatches[2]} matchNumber={3} categoryId={category._id} bracket="elimination" matchIndex={2} />
                                                        <MatchCard match={eliminationMatches[3]} matchNumber={4} categoryId={category._id} bracket="elimination" matchIndex={3} />
                                                      </div>
                                                      
                                                      {/* Connecting lines to Semi Finals */}
                                                      <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-around',
                                                        height: '100%',
                                                        minHeight: '500px'
                                                      }}>
                                                        {/* Connection for QF1 and QF2 to SF1 */}
                                                        <div style={{
                                                          display: 'flex',
                                                          alignItems: 'center',
                                                          gap: '0',
                                                          marginTop: '40px'
                                                        }}>
                                                          <div style={{
                                                            width: '20px',
                                                            height: '2px',
                                                            background: '#d1d5db'
                                                          }}></div>
                                                          <div style={{
                                                            width: '2px',
                                                            height: '60px',
                                                            background: '#d1d5db'
                                                          }}></div>
                                                          <div style={{
                                                            width: '20px',
                                                            height: '2px',
                                                            background: '#d1d5db'
                                                          }}></div>
                                                        </div>
                                                        
                                                        {/* Connection for QF3 and QF4 to SF2 */}
                                                        <div style={{
                                                          display: 'flex',
                                                          alignItems: 'center',
                                                          gap: '0',
                                                          marginBottom: '40px'
                                                        }}>
                                                          <div style={{
                                                            width: '20px',
                                                            height: '2px',
                                                            background: '#d1d5db'
                                                          }}></div>
                                                          <div style={{
                                                            width: '2px',
                                                            height: '60px',
                                                            background: '#d1d5db'
                                                          }}></div>
                                                          <div style={{
                                                            width: '20px',
                                                            height: '2px',
                                                            background: '#d1d5db'
                                                          }}></div>
                                                        </div>
                                                      </div>
                                                      
                                                      {/* Semi Finals */}
                                                      <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '80px',
                                                        justifyContent: 'center'
                                                      }}>
                                                        <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Semi Finals</div>
                                                        <MatchCard match={eliminationMatches[4]} matchNumber={5} categoryId={category._id} bracket="elimination" matchIndex={4} />
                                                        <MatchCard match={eliminationMatches[5]} matchNumber={6} categoryId={category._id} bracket="elimination" matchIndex={5} />
                                                      </div>
                                                      
                                                      {/* Connecting lines to Final */}
                                                      <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        gap: '20px'
                                                      }}>
                                                        <div style={{
                                                          width: '40px',
                                                          height: '2px',
                                                          background: '#d1d5db',
                                                          marginTop: '60px'
                                                        }}></div>
                                                        <div style={{
                                                          width: '2px',
                                                          height: '80px',
                                                          background: '#d1d5db'
                                                        }}></div>
                                                        <div style={{
                                                          width: '40px',
                                                          height: '2px',
                                                          background: '#d1d5db',
                                                          marginBottom: '60px'
                                                        }}></div>
                                                      </div>
                                                      
                                                      {/* Final and Bronze Battle Column */}
                                                      <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        gap: '40px'
                                                      }}>
                                                        {/* Final */}
                                                        <div style={{
                                                          display: 'flex',
                                                          flexDirection: 'column',
                                                          justifyContent: 'center'
                                                        }}>
                                                          <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Final</div>
                                                          <MatchCard match={eliminationMatches[6]} matchNumber={7} categoryId={category._id} bracket="elimination" matchIndex={6} />
                                                        </div>
                                                        
                                                        {/* Bronze Battle */}
                                                        <div style={{
                                                          display: 'flex',
                                                          flexDirection: 'column',
                                                          justifyContent: 'center'
                                                        }}>
                                                          <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Bronze Battle</div>
                                                          <MatchCard match={eliminationMatches[7]} matchNumber={8} categoryId={category._id} bracket="elimination" matchIndex={7} />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  ) : (
                                                    // 8-bracket tournament tree (Round of 16)
                                                    <div style={{
                                                      display: 'flex',
                                                      alignItems: 'center',
                                                      gap: '60px',
                                                      width: 'max-content'
                                                    }}>
                                                      {/* Round of 16 */}
                                                      <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '20px'
                                                      }}>
                                                        <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Round of 16</div>
                                                        {eliminationMatches.slice(0, 8).map((match, index) => (
                                                          <MatchCard key={match.id} match={match} matchNumber={index + 1} categoryId={category._id} bracket="elimination" matchIndex={index} />
                                                        ))}
                                                      </div>
                                                      
                                                      {/* Connecting lines */}
                                                      <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'space-around',
                                                        height: '100%',
                                                        minHeight: '600px'
                                                      }}>
                                                        {[...Array(4)].map((_, i) => (
                                                          <div key={i} style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0'
                                                          }}>
                                                            <div style={{
                                                              width: '20px',
                                                              height: '2px',
                                                              background: '#d1d5db'
                                                            }}></div>
                                                            <div style={{
                                                              width: '2px',
                                                              height: '40px',
                                                              background: '#d1d5db'
                                                            }}></div>
                                                            <div style={{
                                                              width: '20px',
                                                              height: '2px',
                                                              background: '#d1d5db'
                                                            }}></div>
                                                          </div>
                                                        ))}
                                                      </div>
                                                      
                                                      {/* Quarter Finals */}
                                                      <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '40px',
                                                        justifyContent: 'center'
                                                      }}>
                                                        <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Quarter Finals</div>
                                                        {eliminationMatches.slice(8, 12).map((match, index) => (
                                                          <MatchCard key={match.id} match={match} matchNumber={index + 9} categoryId={category._id} bracket="elimination" matchIndex={index + 8} />
                                                        ))}
                                                      </div>
                                                      
                                                      {/* Connecting lines to Semi Finals */}
                                                      <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'space-around',
                                                        height: '100%',
                                                        minHeight: '300px'
                                                      }}>
                                                        {[...Array(2)].map((_, i) => (
                                                          <div key={i} style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0'
                                                          }}>
                                                            <div style={{
                                                              width: '20px',
                                                              height: '2px',
                                                              background: '#d1d5db'
                                                            }}></div>
                                                            <div style={{
                                                              width: '2px',
                                                              height: '80px',
                                                              background: '#d1d5db'
                                                            }}></div>
                                                            <div style={{
                                                              width: '20px',
                                                              height: '2px',
                                                              background: '#d1d5db'
                                                            }}></div>
                                                          </div>
                                                        ))}
                                                      </div>
                                                      
                                                      {/* Semi Finals */}
                                                      <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '80px',
                                                        justifyContent: 'center'
                                                      }}>
                                                        <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Semi Finals</div>
                                                        {eliminationMatches.slice(12, 14).map((match, index) => (
                                                          <MatchCard key={match.id} match={match} matchNumber={index + 13} categoryId={category._id} bracket="elimination" matchIndex={index + 12} />
                                                        ))}
                                                      </div>
                                                      
                                                      {/* Connecting lines to Final */}
                                                      <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        height: '100%',
                                                        minHeight: '200px'
                                                      }}>
                                                        <div style={{
                                                          display: 'flex',
                                                          alignItems: 'center',
                                                          gap: '0'
                                                        }}>
                                                          <div style={{
                                                            width: '20px',
                                                            height: '2px',
                                                            background: '#d1d5db'
                                                          }}></div>
                                                          <div style={{
                                                            width: '2px',
                                                            height: '40px',
                                                            background: '#d1d5db'
                                                          }}></div>
                                                          <div style={{
                                                            width: '20px',
                                                            height: '2px',
                                                            background: '#d1d5db'
                                                          }}></div>
                                                        </div>
                                                      </div>
                                                      
                                                      {/* Final and Bronze Battle Column */}
                                                      <div style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        gap: '40px'
                                                      }}>
                                                        {/* Final */}
                                                        <div style={{
                                                          display: 'flex',
                                                          flexDirection: 'column',
                                                          justifyContent: 'center'
                                                        }}>
                                                          <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Final</div>
                                                          <MatchCard match={eliminationMatches[14]} matchNumber={15} categoryId={category._id} bracket="elimination" matchIndex={14} />
                                                        </div>
                                                        
                                                        {/* Bronze Battle */}
                                                        <div style={{
                                                          display: 'flex',
                                                          flexDirection: 'column',
                                                          justifyContent: 'center'
                                                        }}>
                                                          <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: '#374151' }}>Bronze Battle</div>
                                                          <MatchCard match={eliminationMatches[15]} matchNumber={16} categoryId={category._id} bracket="elimination" matchIndex={15} />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  )}
                                                </div>
                                                
                                                
                                              </div>
                                            );
                                          })()}
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
                  </TournamentDetailLeft>
                  
                  <TournamentDetailRight>
                    {/* Desktop Registration Container */}
                    <DesktopRegistrationContainer>
                      <RegistrationTitle>Tournament Registration</RegistrationTitle>
                      <RegistrationPrice>
                        <span className="price">
                          {selectedTournament
                            ? (() => {
                                const min = selectedTournament.entryFeeMin ?? 0;
                                const max = selectedTournament.entryFeeMax;

                                if (min === 0 && (!max || max === 0)) return "FREE";

                                if (max != null && max !== min) {
                                  return `₱${min.toLocaleString()} – ₱${max.toLocaleString()}`;
                                }

                                return `₱${min.toLocaleString()}`;
                              })()
                            : "Loading..."}
                        </span>
                      </RegistrationPrice>
                      <RegistrationButton
                        onClick={() => {
                          handleRegister(selectedTournament.id);
                        }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Register Now
                      </RegistrationButton>
                    </DesktopRegistrationContainer>

                    {/* Tournament Sponsors Section */}
                    <StickyActionBar style={{ marginTop: '16px' }}>
                      <StickyActionTitle>Tournament Sponsors</StickyActionTitle>
                      
                      {/* Add Sponsor Button */}
                      <TournamentActionButtons>
                        <ActionButton variant="primary" 
                          onClick={() => setShowSponsorModal(true)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14m-7-7h14" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Add Sponsor
                        </ActionButton>
                      </TournamentActionButtons>

                      {/* Sponsors List */}
                      {sponsors.length > 0 && (
                        <div style={{ marginTop: '16px' }}>
                          {sponsors.map((sponsor, index) => (
                            <div key={index} style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              padding: '12px',
                              background: 'white',
                              borderRadius: '8px',
                              border: '1px solid #e2e8f0',
                              marginBottom: '8px'
                            }}>
                              <img 
                                src={sponsor.image} 
                                alt={sponsor.name}
                                style={{
                                  width: '40px',
                                  height: '40px',
                                  borderRadius: '4px',
                                  objectFit: 'cover'
                                }}
                              />
                              <span style={{
                                fontSize: '14px',
                                fontWeight: '500',
                                color: '#334155'
                              }}>
                                {sponsor.name}
                              </span>
                              <button
                                onClick={() => removeSponsor(index)}
                                style={{
                                  marginLeft: 'auto',
                                  background: 'none',
                                  border: 'none',
                                  color: '#ef4444',
                                  cursor: 'pointer',
                                  fontSize: '16px'
                                }}
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
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
                    <PlusIcon />
                    <span>Host a Tournament</span>
                  </HostTournamentButton>
                </TournamentSearchSection>
{tournamentDetailTab === 'list' && (
  <TournamentGrid>
    {tournaments
      .filter(tournament =>
        (tournament.tournamentName?.toLowerCase() || "").includes(tournamentSearchTerm.toLowerCase()) ||
        (tournament.venueCity?.toLowerCase() || "").includes(tournamentSearchTerm.toLowerCase())
      )
      .map(tournament => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const userId = storedUser?._id;
        const isAuthor = tournament.createdBy === userId;

        return (
          <ProfileTournamentCard
            key={tournament._id}
            onClick={() => handleTournamentClick(tournament)}
            style={{ cursor: 'pointer' }}
          >
            <ProfileTournamentBanner>
              {tournament.tournamentPicture ? (
                <img 
                  src={`http://localhost:5000${tournament.tournamentPicture}`} 
                  alt={tournament.tournamentName} 
                />
              ) : (
                <div style={{padding: "40px", textAlign: "center", color: "#888"}}>No Image</div>
              )}
              <ProfileStatusBadge status={tournament.status}>
                {tournament.status.toUpperCase()}
              </ProfileStatusBadge>
            </ProfileTournamentBanner>

            <ProfileTournamentInfo>
              <ProfileTournamentName>{tournament.tournamentName}</ProfileTournamentName>

              <ProfileTournamentDate>
                <CalendarIcon />
                {(() => {
    const dates = tournament.tournamentDates || [];
    if (!dates.length) return "TBA";

    const sortedDates = dates.map(d => new Date(d)).sort((a, b) => a - b);
    const ranges = [];
    let start = sortedDates[0];
    let end = sortedDates[0];

    for (let i = 1; i <= sortedDates.length; i++) {
      const current = sortedDates[i];
      const prev = sortedDates[i - 1];

      if (current && (current - prev) / (1000 * 60 * 60 * 24) === 1) {
        end = current; // consecutive day
      } else {
        ranges.push([start, end]);
        start = current;
        end = current;
      }
    }

    const formatted = ranges
      .map(([s, e]) => {
        const sameMonth = s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear();
        const sameDay = s.getTime() === e.getTime();
        const monthFormat = { month: "short" };

        if (sameDay) return s.toLocaleDateString("en-US", { ...monthFormat, day: "numeric" });

        if (sameMonth) return `${s.toLocaleDateString("en-US", monthFormat)} ${s.getDate()}–${e.getDate()}`;

        return `${s.toLocaleDateString("en-US", { month: "short", day: "numeric" })}–${e.toLocaleDateString(
          "en-US",
          { month: "short", day: "numeric" }
        )}`;
      })
      .join(" & ");

    return `${formatted}, ${sortedDates[0].getFullYear()}`;
  })()}
              </ProfileTournamentDate>

              <ProfileTournamentLocation>
                <LocationIcon />
                {tournament.venueCity}, {tournament.venueState}
              </ProfileTournamentLocation>

              <ProfileTournamentSkillLevels>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="m22 21-3-3m0 0a5.5 5.5 0 1 0-7.78-7.78 5.5 5.5 0 0 0 7.78 7.78Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
           {tournament.tournamentCategories
  ?.map(cat => {
    if (cat.skillLevel.toLowerCase() === 'open') {
      return `Open - Tier ${cat.tier || 1}`;
    }
    return cat.skillLevel;
  })
  .join(', ')
  .toUpperCase()}
              </ProfileTournamentSkillLevels>

              {isAuthor && tournament.status === "upcoming" && (
                <ProfileRegisterButton
                  onClick={e => {
                    e.stopPropagation();
                    showNotification('Edit tournament functionality coming soon!', 'info');
                  }}
                >
                  ✏️ Edit Tournament
                </ProfileRegisterButton>
              )}
            </ProfileTournamentInfo>
          </ProfileTournamentCard>
        );
      })}
  </TournamentGrid>
)}
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
    justify-content: flex-start;
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

  const MobileAvatarSection = styled.div`
    display: none;
    
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      width: 100%;
      padding: 15px 20px;
      box-sizing: border-box;
      margin-bottom: 15px;
    }
  `;

  const DesktopLayout = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 40px;
    
    @media (max-width: 768px) {
      display: none;
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
    flex-shrink: 0;
    min-width: 300px;
    margin-top: -80px;
    
    @media (min-width: 769px) {
      margin-top: 0;
      align-self: flex-start;
    }
    
    @media (max-width: 768px) {
      flex-wrap: nowrap;
      gap: 12px;
      justify-content: space-between;
      margin-top: -45px;
      min-width: auto;
      margin-bottom: -70px;
      padding: 18px 15px;
      overflow-x: auto;
      border: none;
      box-shadow: none;
      background-color: transparent;
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
    
    @media (max-width: 768px) {
      padding: 12px 10px;
      min-width: 80px;
      flex: 1;
    }
  `;

  const StatCategory = styled.div`
    font-size: 0.8rem;
    color: #64748b;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    
    @media (max-width: 768px) {
      font-size: 0.75rem;
      margin-bottom: 6px;
      letter-spacing: 0.8px;
    }
  `;

  const StatValue = styled.div`
    font-weight: 800;
    color: #1e293b;
    font-size: 1.7rem;
    margin-bottom: 4px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(135deg, #29ba9b, #1e7a6b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: 768px) {
      font-size: 1.6rem;
      margin-bottom: 4px;
    }
  `;

  const StatLabel = styled.div`
    font-size: 0.75rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: 500;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    
    @media (max-width: 768px) {
      font-size: 0.7rem;
      letter-spacing: 0.6px;
    }
  `;

  const PlayerInfoGrid = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-top: -45px;
    padding: 15px 20px;
    
    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 10px;
      padding: 12px 15px;
      margin-bottom: 15px;
    }
  `;

  const InfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    
    @media (max-width: 768px) {
      display: contents;
    }
  `;

  const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    @media (max-width: 768px) {
      gap: 10px;
    }
  `;

  const InfoItem = styled.div`
    text-align: center;
    padding: 5px 10px;
    min-width: 80px;
    flex-shrink: 0;
    
    @media (max-width: 768px) {
      text-align: left;
      padding: 12px 15px;
      min-width: unset;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 8px;
    }
  `;

  const InfoLabel = styled.div`
    font-size: 0.75rem;
    color: #6b7280;
    margin-bottom: 3px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: left;
    
    @media (max-width: 768px) {
      font-size: 0.7rem;
      margin-bottom: 3px;
      font-weight: 500;
    }
  `;

  const InfoValue = styled.div`
    font-weight: 600;
    color: #234255;
    font-size: 0.9rem;
    text-align: left;
    
    @media (max-width: 768px) {
      font-size: 0.85rem;
      font-weight: 500;
    }
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
  
  /* Aggressive LTR enforcement to prevent RTL text reversal */
  direction: ltr !important;
  text-align: left !important;
  unicode-bidi: embed !important;
  writing-mode: horizontal-tb !important;
  text-orientation: mixed !important;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;

  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  &::placeholder {
    color: #9ca3af;
  }
`;

const TabText = styled.p`
  direction: ltr;          /* ✅ Force left-to-right */
  unicode-bidi: plaintext; /* ✅ Prevent mirroring/reversing */
  text-align: left;
  white-space: pre-wrap;   /* Keep line breaks */
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
      <ProfileContent>
        <ProfileBackgroundContainer>
      <ProfileHeader>
        <TopSection>
          {/* Mobile Layout */}
          <MobileAvatarSection>
            <AvatarContainer>
              {userProfile?.avatar ? (
                <Avatar
                  src={`http://localhost:5000${userProfile.avatar}`}
                  alt={`${user.firstName} ${user.lastName}`}
                />
              ) : (
                <>
                  {user.firstName ? (
                    <InitialsFallback>
                      {user.firstName.charAt(0).toUpperCase()}
                    </InitialsFallback>
                  ) : (
                    <Avatar src="/default-avatar.png" alt="Default Avatar" />
                  )}
                </>
              )}
              <HiddenFileInput
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </AvatarContainer>
            <UserName>{`${user.firstName} ${user.lastName}`}</UserName>
            
            {/* Mobile Stats - moved directly under name */}
            <StatsContainer>
              {rankData.map((item, index) => (
                <StatBox key={index}>
                  <StatCategory>{item.category}</StatCategory>
                  <StatValue>#{item.rank}</StatValue>
                  <StatLabel>Rank</StatLabel>
                </StatBox>
              ))}
            </StatsContainer>
            
            {/* Mobile Tabs - moved under RANK */}
            <MobileTabContainer>
              <MobileTabNavigation>
                <MobileTabButton 
                  active={activeTab === 'about'} 
                  onClick={() => setActiveTab('about')}
                  title="About"
                >
                  About
                </MobileTabButton>
                <MobileTabButton 
                  active={activeTab === 'club'} 
                  onClick={() => setActiveTab('club')}
                  title="Clubs"
                >
                  Clubs
                </MobileTabButton>
                {user?.roles?.includes("clubadmin") && (
                  <MobileTabButton 
                    active={activeTab === 'tournaments'} 
                    onClick={() => setActiveTab('tournaments')}
                    title="Tournaments"
                  >
                    Tournaments
                  </MobileTabButton>
                )}
              </MobileTabNavigation>
              {renderTabContent()}
            </MobileTabContainer>
          </MobileAvatarSection>

          {/* Desktop Layout */}
          <DesktopLayout>
            <AvatarContainer>
              {userProfile?.avatar ? (
                <Avatar
                  src={`http://localhost:5000${userProfile.avatar}`}
                  alt={`${user.firstName} ${user.lastName}`}
                />
              ) : (
                <>
                  {user.firstName ? (
                    <InitialsFallback>
                      {user.firstName.charAt(0).toUpperCase()}
                    </InitialsFallback>
                  ) : (
                    <Avatar src="/default-avatar.png" alt="Default Avatar" />
                  )}
                </>
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
                <UserName>{`${user.firstName} ${user.lastName}`}</UserName>
              </NameAndRanksRow>

             <PlayerInfoGrid>
               <InfoItem>
                 <InfoLabel>PPL ID</InfoLabel>
                 <InfoValue>{user?.pplId || 'N/A'}</InfoValue>
               </InfoItem>
               <InfoItem>
                 <InfoLabel>DUPR ID</InfoLabel>
                 <InfoValue>{user?.duprId || 'N/A'}</InfoValue>
               </InfoItem>
               <InfoItem>
                 <InfoLabel>AGE</InfoLabel>
                 <InfoValue>
                   {user.birthDate
                     ? new Date().getFullYear() - new Date(user.birthDate).getFullYear()
                     : "N/A"}{" "}
                   Years
                 </InfoValue>
               </InfoItem>
               <InfoItem>
                 <InfoLabel>GENDER</InfoLabel>
                 <InfoValue>
                   {user.gender
                     ? user.gender.charAt(0).toUpperCase() + user.gender.slice(1)
                     : "Not specified"}
                 </InfoValue>
               </InfoItem>
               </PlayerInfoGrid>
            </NameAndDetailsSection>

            <StatsContainer>
              {rankData.map((item, index) => (
                <StatBox key={index}>
                  <StatCategory>{item.category}</StatCategory>
                  <StatValue>#{item.rank}</StatValue>
                  <StatLabel>Rank</StatLabel>
                </StatBox>
              ))}
            </StatsContainer>
          </DesktopLayout>


        </TopSection>
      </ProfileHeader>
    </ProfileBackgroundContainer>
               {/* {duprRatings.map((rating, index) => (
                  <InfoItem key={index}>
                    <InfoLabel>{rating.type} DUPR</InfoLabel>
                    <InfoValue>{rating.rating}</InfoValue>
                  </InfoItem>
                ))}
              
          </LeftSection>

          <div style={{ position: "absolute", top: "-50px", right: "0", zIndex: 10 }}>
            <ButtonContainer>
              <ApplyCoachButton onClick={handleApplyAsCoach}>Apply as Coach</ApplyCoachButton>

            </ButtonContainer>
            
          </div>


      
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
{user?.roles?.includes("clubadmin") && (
      <TabButton 
        active={activeTab === 'tournaments'} 
        onClick={() => setActiveTab('tournaments')}
      >
        Tournaments
      </TabButton>
    )}
        </TabHeader>
        {renderTabContent()}
      </TabContainer>
      {/* Bracket Mode Confirmation Modal */}
      {showBracketModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            maxWidth: '400px',
            width: '90%',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '24px'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '16px'
              }}>⚠️</div>
              <h3 style={{
                color: '#334155',
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '8px'
              }}>
                Are you sure?
              </h3>
              <p style={{
                color: '#64748b',
                fontSize: '0.95rem',
                lineHeight: '1.5'
              }}>
                Your tournament will now generate {pendingBracketChange.newMode} brackets. 
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center'
            }}>
              <button
                onClick={() => {
                  setShowBracketModal(false);
                  setPendingBracketChange({ categoryId: null, newMode: null });
                }}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  background: 'white',
                  color: '#64748b',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  try {
                    // Update bracket mode locally
                    setBracketMode(prev => ({
                      ...prev,
                      [pendingBracketChange.categoryId]: pendingBracketChange.newMode
                    }));
                    
                    // Save bracket mode to tournament data
                    if (selectedTournament) {
                      const updatedTournament = {
                        ...selectedTournament,
                        tournamentCategories: selectedTournament.tournamentCategories.map(cat => {
                          if (cat._id === pendingBracketChange.categoryId) {
                            return {
                              ...cat,
                              bracketMode: pendingBracketChange.newMode
                            };
                          }
                          return cat;
                        })
                      };
                      
                      // Update local tournament state
                      setSelectedTournament(updatedTournament);
                      
                      // Save to database
                      const token = user?.token || localStorage.getItem('token');
                      if (token) {
                        console.log('🔄 Saving bracket mode to database...', {
                          tournamentId: selectedTournament._id,
                          categoryId: pendingBracketChange.categoryId,
                          newMode: pendingBracketChange.newMode,
                          updatedCategory: updatedTournament.tournamentCategories.find(cat => cat._id === pendingBracketChange.categoryId)
                        });
                        
                        const response = await axios.put(
                          `/api/tournaments/${selectedTournament._id}`,
                          updatedTournament,
                          { headers: { Authorization: `Bearer ${token}` } }
                        );
                        
                        console.log('✅ Bracket mode saved to database successfully!', {
                          status: response.status,
                          data: response.data
                        });
                        
                        // Refresh tournament data to verify save
                        if (response.data?.tournament) {
                          setSelectedTournament(response.data.tournament);
                          console.log('🔄 Tournament data refreshed from server');
                          
                          // Verify the bracketMode was actually saved
                          const savedCategory = response.data.tournament.tournamentCategories?.find(cat => cat._id === pendingBracketChange.categoryId);
                          if (savedCategory) {
                            console.log('✅ Verification - Saved bracketMode:', savedCategory.bracketMode);
                            if (savedCategory.bracketMode === pendingBracketChange.newMode) {
                              console.log('✅ SUCCESS: Bracket mode properly saved and verified!');
                            } else {
                              console.error('❌ WARNING: Bracket mode not saved properly!', {
                                expected: pendingBracketChange.newMode,
                                actual: savedCategory.bracketMode
                              });
                            }
                          } else {
                            console.error('❌ Category not found in response');
                          }
                        } else {
                          console.log('⚠️ No tournament data in response, manually refetching...');
                          
                          // Manual refetch to verify
                          const refetchResponse = await axios.get(`/api/tournaments/${selectedTournament._id}`, {
                            headers: { Authorization: `Bearer ${token}` }
                          });
                          setSelectedTournament(refetchResponse.data);
                          console.log('🔄 Manual refetch completed');
                        }
                      } else {
                        console.error('❌ No authentication token found');
                      }
                    }
                  } catch (error) {
                    console.error('Error saving bracket mode:', error);
                  }
                  
                  // Close modal
                  setShowBracketModal(false);
                  setPendingBracketChange({ categoryId: null, newMode: null });
                }}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
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
                          let displayName = category.division || '';
                          
                          // If name is empty or undefined, create display name from parts
                          if (!displayName) {
                            const division = category.division || '';
                            const skillLevel = category.skillLevel === 'Open' && category.tier 
                              ? `Open Tier ${category.tier}` 
                              : category.skillLevel || '';
                            const age = category.ageCategory || '';
                            
                            const parts = [division, skillLevel, age].filter(part => part);
                            displayName = parts.join(' | ') || 'Unknown Category';
                          }
                          
                          // Check if this category is allowed for the user's gender and age
                          const userGender = user?.gender || registrationForm.primaryPlayer?.gender || 'male';
                          console.log(`🎯 DROPDOWN DEBUG: user object:`, user);
                          console.log(`🎯 DROPDOWN DEBUG: registrationForm.primaryPlayer:`, registrationForm.primaryPlayer);
                          console.log(`🎯 DROPDOWN DEBUG: Final userGender="${userGender}"`);
                          const isAllowed = isCategoryAllowed(category, userGender);
                          console.log(`📝 Dropdown: Category "${category.division}" for user "${userGender}": allowed=${isAllowed}`);
                          
                          return (
                            <option 
                              key={category._id} 
                              value={category._id}
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
                      .find(cat => cat._id === registrationForm.category);
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
                                      .find(cat => cat._id === registrationForm.category);
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
                                            .find(cat => cat._id === registrationForm.category);
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
                            {Array.isArray(registrationForm.teamMembers) && 
 registrationForm.teamMembers.map((member, index) => (
  <div key={member._id || index} style={{ marginBottom: '8px' }}>
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
                                                .find(cat => cat._id === registrationForm.category);
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
                      {/* 
                        BACKEND NOTE: Bank Details Section
                        
                        This section displays tournament organizer's bank details for payment processing.
                        Expected data structure from backend:
                        {
                          accountName: string,    // Bank account holder name
                          accountNumber: string,  // Bank account number
                          bankName?: string,      // Bank institution name (optional)
                          routingNumber?: string, // Bank routing number (optional)
                          swiftCode?: string      // International transfer code (optional)
                        }
                        
                        API Endpoints needed:
                        - GET /api/tournaments/{tournamentId}/bank-details
                        - PUT /api/tournaments/{tournamentId}/bank-details (for organizers)
                      */}
                      <BankDetail>
                        <BankDetailLabel>Account Name:</BankDetailLabel>
                        <BankDetailValue>{selectedTournament?.bankDetails?.accountName || 'Not provided'}</BankDetailValue>
                      </BankDetail>
                      <BankDetail>
                        <BankDetailLabel>Account Number:</BankDetailLabel>
                        <BankDetailValue>{selectedTournament?.bankDetails?.accountNumber || 'Not provided'}</BankDetailValue>
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

<Modal open={cropModalOpen} onClose={() => setCropModalOpen(false)}>
  <div style={{ width: 400, height: 400, background: "#333", margin: "auto", marginTop: "10%" }}>
    {selectedFile && (
      <Cropper
        image={selectedFile}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
      />
    )}
    <Button onClick={uploadCroppedImage} variant="contained" color="primary">
      Upload
    </Button>
  </div>
</Modal>


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
                        PPLID: {player.pplId} | Gender: {player.gender} | Age: {player.birthDate|| 'Not specified'}
                        {(() => {
                          const selectedCategory = Object.values(registrationTournament?.tournamentCategories || {})
                            .find(cat => cat._id === registrationForm.category);
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

      {/* Rejection Modal */}
      {showRejectModal && selectedPlayerToReject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '0',
            maxWidth: '500px',
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '24px 32px',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#dc2626',
                margin: 0
              }}>
                Reject Player
              </h2>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#64748b',
                  padding: '4px',
                  borderRadius: '4px'
                }}
                onClick={() => {
                  setShowRejectModal(false);
                  setSelectedPlayerToReject(null);
                  setRejectionReason('');
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f1f5f9';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                ×
              </button>
            </div>
            
            {/* Modal Content */}
            <div style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{
                textAlign: 'center',
                marginBottom: '16px'
              }}>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#374151',
                  margin: '0 0 8px 0'
                }}>
                  You are about to reject:
                </p>
                <p style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#dc2626',
                  margin: 0
                }}>
                  {selectedPlayerToReject.playerName}
                </p>
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  Reason for rejection *
                </label>
                <textarea
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  placeholder="Please provide a reason for rejecting this player..."
                  style={{
                    width: '100%',
                    minHeight: '120px',
                    padding: '12px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    resize: 'vertical',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e2e8f0';
                  }}
                />
              </div>
              
              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'flex-end',
                marginTop: '8px'
              }}>
                <button
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#f8fafc',
                    color: '#64748b',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f1f5f9';
                    e.target.style.borderColor = '#cbd5e1';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#f8fafc';
                    e.target.style.borderColor = '#e2e8f0';
                  }}
                  onClick={() => {
                    setShowRejectModal(false);
                    setSelectedPlayerToReject(null);
                    setRejectionReason('');
                  }}
                >
                  Cancel
                </button>
                <button
                  style={{
                    padding: '12px 24px',
                    backgroundColor: rejectionReason.trim() ? '#dc2626' : '#9ca3af',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: rejectionReason.trim() ? 'pointer' : 'not-allowed',
                    transition: 'all 0.2s ease',
                    opacity: rejectionReason.trim() ? 1 : 0.6
                  }}
                  disabled={!rejectionReason.trim()}
                  onMouseEnter={(e) => {
                    if (rejectionReason.trim()) {
                      e.target.style.backgroundColor = '#b91c1c';
                      e.target.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (rejectionReason.trim()) {
                      e.target.style.backgroundColor = '#dc2626';
                      e.target.style.transform = 'translateY(0)';
                    }
                  }}
                  onClick={async () => {
                    if (rejectionReason.trim()) {
                      try {
                        console.log('=== REJECT PLAYER DEBUG ===');
                        console.log('Rejecting player:', selectedPlayerToReject.playerName);
                        console.log('Player ID:', selectedPlayerToReject.playerId);
                        console.log('Category ID:', selectedPlayerToReject.categoryId);
                        console.log('Reason:', rejectionReason);
                        
                        // Get authentication token
                        const token = localStorage.getItem('token');
                        const userFromStorage = JSON.parse(localStorage.getItem('user') || '{}');
                        const authToken = userFromStorage.token || token;
                        
                        if (!authToken) {
                          console.error('❌ No authentication token found');
                          alert('Please sign in to reject players.');
                          return;
                        }
                        
                        // Make API call to reject player
                        const response = await fetch(`/api/tournaments/${selectedTournament._id}/registrations/reject`, {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${authToken}`
                          },
                          body: JSON.stringify({
                            playerId: selectedPlayerToReject.playerId,
                            category: selectedPlayerToReject.categoryId,
                            reason: rejectionReason
                          })
                        });
                        
                        const result = await response.json();
                        
                        if (response.ok) {
                          alert(`Player ${selectedPlayerToReject.playerName} has been rejected successfully!`);
                          
                          // Refresh the tournament data
                          try {
                            const refreshResponse = await fetch(`/api/tournaments/${selectedTournament._id}`, {
                              headers: { 
                                'Authorization': `Bearer ${authToken}`,
                                'Content-Type': 'application/json',
                                'Cache-Control': 'no-cache, no-store, must-revalidate',
                                'Pragma': 'no-cache',
                                'Expires': '0'
                              },
                            });
                            
                            if (refreshResponse.ok) {
                              const updatedTournament = await refreshResponse.json();
                              setSelectedTournament(updatedTournament);
                              console.log('✅ Tournament data refreshed after rejection');
                            }
                          } catch (refreshError) {
                            console.error('Error refreshing tournament data:', refreshError);
                          }
                          
                          // Close modal
                          setShowRejectModal(false);
                          setSelectedPlayerToReject(null);
                          setRejectionReason('');
                        } else {
                          console.error('Rejection failed:', result);
                          alert(`Failed to reject player: ${result.message || 'Unknown error'}`);
                        }
                      } catch (error) {
                        console.error('Error rejecting player:', error);
                        alert('Error rejecting player. Please try again.');
                      }
                    } else {
                      alert('Please provide a reason for rejection.');
                    }
                  }}
                >
                  Reject Player
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Attachment Modal */}
      {showAttachmentModal && selectedPlayerAttachment && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '0',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '24px 32px',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#234255',
                margin: 0
              }}>
                Registrant Details - {selectedPlayerAttachment.playerName}
              </h2>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#64748b',
                  padding: '4px',
                  borderRadius: '4px'
                }}
                onClick={() => {
                  setShowAttachmentModal(false);
                  setSelectedPlayerAttachment(null);
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f1f5f9';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                ×
              </button>
            </div>
            
            {/* Modal Content */}
            <div style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxHeight: 'calc(90vh - 120px)',
              overflow: 'auto'
            }}>
              {/* Registrant Information Section */}
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#234255',
                  margin: '0 0 16px 0'
                }}>
                  Contact Information
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '16px'
                }}>
                  <div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#64748b',
                      marginBottom: '4px'
                    }}>
                      Email Address
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#334155',
                      fontFamily: 'monospace',
                      backgroundColor: 'white',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid #e2e8f0'
                    }}>
                      {selectedPlayerAttachment.email}
                    </div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#64748b',
                      marginBottom: '4px'
                    }}>
                      Phone Number
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#334155',
                      fontFamily: 'monospace',
                      backgroundColor: 'white',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid #e2e8f0'
                    }}>
                      {selectedPlayerAttachment.phoneNumber}
                    </div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#64748b',
                      marginBottom: '4px'
                    }}>
                      PPLID
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#334155',
                      fontFamily: 'monospace',
                      backgroundColor: 'white',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid #e2e8f0'
                    }}>
                      {selectedPlayerAttachment.playerId}
                    </div>
                  </div>
                  {selectedPlayerAttachment.emergencyContact && selectedPlayerAttachment.emergencyContact !== 'Not provided' && (
                    <div>
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#64748b',
                        marginBottom: '4px'
                      }}>
                        Emergency Contact
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        color: '#334155',
                        fontFamily: 'monospace',
                        backgroundColor: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        border: '1px solid #e2e8f0'
                      }}>
                        {selectedPlayerAttachment.emergencyContact}
                      </div>
                    </div>
                  )}
                  {selectedPlayerAttachment.emergencyPhone && selectedPlayerAttachment.emergencyPhone !== 'Not provided' && (
                    <div>
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#64748b',
                        marginBottom: '4px'
                      }}>
                        Emergency Phone
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        color: '#334155',
                        fontFamily: 'monospace',
                        backgroundColor: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        border: '1px solid #e2e8f0'
                      }}>
                        {selectedPlayerAttachment.emergencyPhone}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Team Information Section - Only show for team categories */}
              {selectedPlayerAttachment.isTeamCategory && (
                <>
                  <div style={{
                    backgroundColor: '#f0f9ff',
                    padding: '20px',
                    borderRadius: '12px',
                    border: '1px solid #0ea5e9'
                  }}>
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#234255',
                      margin: '0 0 16px 0'
                    }}>
                      Team Information
                    </h3>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#64748b',
                      marginBottom: '4px'
                    }}>
                      Team Name
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      color: '#334155',
                      fontWeight: '600',
                      backgroundColor: 'white',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      marginBottom: '16px'
                    }}>
                      {selectedPlayerAttachment.teamName}
                    </div>
                  </div>

                  {/* Team Members Section */}
                  {selectedPlayerAttachment.teamMembers && selectedPlayerAttachment.teamMembers.length > 0 && (
                    <div style={{
                      backgroundColor: '#f0fdf4',
                      padding: '20px',
                      borderRadius: '12px',
                      border: '1px solid #22c55e'
                    }}>
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: '#234255',
                        margin: '0 0 16px 0'
                      }}>
                        Team Members
                      </h3>
                      
                      {/* Separate male and female members */}
                      {(() => {
                        const maleMembers = selectedPlayerAttachment.teamMembers.filter(member => 
                          member.gender?.toLowerCase() === 'male'
                        );
                        const femaleMembers = selectedPlayerAttachment.teamMembers.filter(member => 
                          member.gender?.toLowerCase() === 'female'
                        );
                        
                        return (
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            {/* Male Members */}
                            <div>
                              <h4 style={{
                                fontSize: '1rem',
                                fontWeight: '600',
                                color: '#1e40af',
                                margin: '0 0 12px 0'
                              }}>
                                Male Players ({maleMembers.length}/2 required)
                              </h4>
                              {maleMembers.map((member, index) => (
                                <div key={`male-${index}`} style={{
                                  backgroundColor: 'white',
                                  padding: '12px',
                                  borderRadius: '8px',
                                  border: '1px solid #e2e8f0',
                                  marginBottom: '8px'
                                }}>
                                  <div style={{
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    color: '#334155'
                                  }}>
                                    {member.firstName} {member.lastName}
                                    {index >= 2 && (
                                      <span style={{
                                        fontSize: '0.75rem',
                                        color: '#6b7280',
                                        fontWeight: '400',
                                        marginLeft: '8px'
                                      }}>
                                        (Substitute)
                                      </span>
                                    )}
                                  </div>
                                  <div style={{
                                    fontSize: '0.75rem',
                                    color: '#6b7280',
                                    marginTop: '4px'
                                  }}>
                                    {member.email}
                                  </div>
                                  {member.duprId && (
                                    <div style={{
                                      fontSize: '0.75rem',
                                      color: '#6b7280',
                                      marginTop: '2px'
                                    }}>
                                      DUPR: {member.duprId}
                                    </div>
                                  )}
                                </div>
                              ))}
                              {maleMembers.length < 2 && (
                                <div style={{
                                  fontSize: '0.875rem',
                                  color: '#ef4444',
                                  fontStyle: 'italic',
                                  padding: '8px',
                                  backgroundColor: '#fef2f2',
                                  borderRadius: '6px',
                                  border: '1px solid #fecaca'
                                }}>
                                  Missing {2 - maleMembers.length} required male player(s)
                                </div>
                              )}
                            </div>

                            {/* Female Members */}
                            <div>
                              <h4 style={{
                                fontSize: '1rem',
                                fontWeight: '600',
                                color: '#be185d',
                                margin: '0 0 12px 0'
                              }}>
                                Female Players ({femaleMembers.length}/2 required)
                              </h4>
                              {femaleMembers.map((member, index) => (
                                <div key={`female-${index}`} style={{
                                  backgroundColor: 'white',
                                  padding: '12px',
                                  borderRadius: '8px',
                                  border: '1px solid #e2e8f0',
                                  marginBottom: '8px'
                                }}>
                                  <div style={{
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    color: '#334155'
                                  }}>
                                    {member.firstName} {member.lastName}
                                    {index >= 2 && (
                                      <span style={{
                                        fontSize: '0.75rem',
                                        color: '#6b7280',
                                        fontWeight: '400',
                                        marginLeft: '8px'
                                      }}>
                                        (Substitute)
                                      </span>
                                    )}
                                  </div>
                                  <div style={{
                                    fontSize: '0.75rem',
                                    color: '#6b7280',
                                    marginTop: '4px'
                                  }}>
                                    {member.email}
                                  </div>
                                  {member.duprId && (
                                    <div style={{
                                      fontSize: '0.75rem',
                                      color: '#6b7280',
                                      marginTop: '2px'
                                    }}>
                                      DUPR: {member.duprId}
                                    </div>
                                  )}
                                </div>
                              ))}
                              {femaleMembers.length < 2 && (
                                <div style={{
                                  fontSize: '0.875rem',
                                  color: '#ef4444',
                                  fontStyle: 'italic',
                                  padding: '8px',
                                  backgroundColor: '#fef2f2',
                                  borderRadius: '6px',
                                  border: '1px solid #fecaca'
                                }}>
                                  Missing {2 - femaleMembers.length} required female player(s)
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </>
              )}

              {/* Payment Proof Section */}
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#234255',
                  margin: '0 0 16px 0'
                }}>
                  Proof of Payment
                </h3>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <img
                    src={selectedPlayerAttachment.attachmentUrl}
                    alt={`Payment proof for ${selectedPlayerAttachment.playerName}`}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '400px',
                      objectFit: 'contain',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div style={{
                    display: 'none',
                    textAlign: 'center',
                    padding: '40px',
                    color: '#64748b',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '2px dashed #cbd5e1'
                  }}>
                    <div style={{ fontSize: '2rem', marginBottom: '16px' }}>📄</div>
                    <div>Unable to load payment proof</div>
                    <div style={{ fontSize: '0.875rem', marginTop: '8px' }}>
                      The payment proof file could not be displayed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Publish Modal */}
      {showPublishModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            maxWidth: '500px',
            width: '100%',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#dcfce7',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1e293b',
                margin: '0 0 8px 0'
              }}>
                Publish Tournament Bracket
              </h2>
              <p style={{
                color: '#64748b',
                fontSize: '1rem',
                margin: 0,
                lineHeight: '1.5'
              }}>
                You are about to make the tournament bracket public. Players and spectators will be able to view the bracket structure and match results.
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'flex-end'
            }}>
              <button
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#f8fafc',
                  color: '#64748b',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f1f5f9';
                  e.target.style.borderColor = '#cbd5e1';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f8fafc';
                  e.target.style.borderColor = '#e2e8f0';
                }}
                onClick={() => setShowPublishModal(false)}
              >
                Cancel
              </button>
              <button
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#059669',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#047857';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#059669';
                  e.target.style.transform = 'translateY(0)';
                }}
                onClick={() => {
                  setIsPublished(true);
                  setShowPublishModal(false);
                }}
              >
                Publish Bracket
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Unpublish Modal */}
      {showUnpublishModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            maxWidth: '500px',
            width: '100%',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#fef2f2',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="15 9l-6 6" />
                  <path d="9 9l6 6" />
                </svg>
              </div>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1e293b',
                margin: '0 0 8px 0'
              }}>
                Unpublish Tournament Bracket
              </h2>
              <p style={{
                color: '#64748b',
                fontSize: '1rem',
                margin: 0,
                lineHeight: '1.5'
              }}>
                You are about to make the tournament bracket private. Players and spectators will no longer be able to view the bracket structure and match results.
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'flex-end'
            }}>
              <button
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#f8fafc',
                  color: '#64748b',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f1f5f9';
                  e.target.style.borderColor = '#cbd5e1';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f8fafc';
                  e.target.style.borderColor = '#e2e8f0';
                }}
                onClick={() => setShowUnpublishModal(false)}
              >
                Cancel
              </button>
              <button
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#dc2626';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#ef4444';
                  e.target.style.transform = 'translateY(0)';
                }}
                onClick={() => {
                  setIsPublished(false);
                  setShowUnpublishModal(false);
                }}
              >
                Unpublish Bracket
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sponsor Modal */}
      {showSponsorModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '32px',
            maxWidth: '500px',
            width: '100%',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#f0fdf4',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                  <path d="M12 5v14m-7-7h14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#1e293b',
                margin: '0 0 8px 0'
              }}>
                Add Tournament Sponsor
              </h2>
              <p style={{
                color: '#64748b',
                fontSize: '0.95rem',
                margin: 0
              }}>
                Add a sponsor with their logo and name
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Sponsor Name
              </label>
              <input
                type="text"
                value={sponsorForm.name}
                onChange={(e) => handleSponsorFormChange('name', e.target.value)}
                placeholder="Enter sponsor name"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#059669'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Logo Image URL
              </label>
              <input
                type="url"
                value={sponsorForm.image}
                onChange={(e) => handleSponsorFormChange('image', e.target.value)}
                placeholder="https://example.com/logo.png"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#059669'}
                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
              />
              {sponsorForm.image && (
                <div style={{ marginTop: '12px', textAlign: 'center' }}>
                  <img 
                    src={sponsorForm.image} 
                    alt="Preview"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '8px',
                      objectFit: 'cover',
                      border: '1px solid #e2e8f0'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>

            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'flex-end'
            }}>
              <button
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#f8fafc',
                  color: '#64748b',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f1f5f9';
                  e.target.style.borderColor = '#cbd5e1';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f8fafc';
                  e.target.style.borderColor = '#e2e8f0';
                }}
                onClick={() => {
                  setShowSponsorModal(false);
                  setSponsorForm({ name: '', image: '' });
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#059669',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#047857';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#059669';
                  e.target.style.transform = 'translateY(0)';
                }}
                onClick={addSponsor}
              >
                Add Sponsor
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Team Members Modal */}
      {showTeamMembersModal && selectedTeamRegistration && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '0',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '24px 32px',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'linear-gradient(135deg, #29ba9b, #1e40af)',
              borderRadius: '16px 16px 0 0',
              color: 'white'
            }}>
              <div>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'white',
                  margin: 0,
                  marginBottom: '4px'
                }}>
                  {(() => {
                    const teamName = selectedTeamRegistration.teamName || selectedTeamRegistration.registrationTeamName || 'Team Details';
                    // Remove any ID that might be concatenated with the team name
                    return teamName.replace(/^[a-f0-9]{24}\s*/, '').trim() || 'Team Details';
                  })()}
                </h2>

              </div>
              <button
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: 'white',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => {
                  setShowTeamMembersModal(false);
                  setSelectedTeamRegistration(null);
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                ×
              </button>
            </div>
            
            {/* Modal Content */}
            <div style={{
              padding: '32px',
              maxHeight: 'calc(90vh - 120px)',
              overflow: 'auto'
            }}>
              {selectedTeamRegistration.teamMembers && selectedTeamRegistration.teamMembers.length > 0 ? (
                <div>
                  {/* Registrant Details (if not captain) */}
                  {selectedTeamRegistration.registration && (
                    <div style={{
                      marginBottom: '24px',
                      padding: '20px',
                      background: '#f0f9ff',
                      border: '1px solid #0ea5e9',
                      borderRadius: '12px'
                    }}>
                      <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: '#0c4a6e',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        📋 Registrant Details
                      </h3>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '16px',
                        fontSize: '0.9rem'
                      }}>
                        <div style={{
                          background: 'white',
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid #e0f2fe'
                        }}>
                          <span style={{ color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: '600' }}>Name</span>
                          <div style={{ fontWeight: '600', color: '#1e293b', marginTop: '4px' }}>
                            {selectedTeamRegistration.registration.playerName || 'Not provided'}
                          </div>
                        </div>
                        <div style={{
                          background: 'white',
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid #e0f2fe'
                        }}>
                          <span style={{ color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: '600' }}>Email</span>
                          <div style={{ fontWeight: '500', color: '#1e293b', marginTop: '4px' }}>
                            {selectedTeamRegistration.registration.playerEmail || 'Not provided'}
                          </div>
                        </div>
                        <div style={{
                          background: 'white',
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid #e0f2fe'
                        }}>
                          <span style={{ color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: '600' }}>Phone</span>
                          <div style={{ fontWeight: '500', color: '#1e293b', marginTop: '4px' }}>
                            {selectedTeamRegistration.registration.playerPhone || 'Not provided'}
                          </div>
                        </div>
                        <div style={{
                          background: 'white',
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid #e0f2fe'
                        }}>
                          <span style={{ color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: '600' }}>Emergency Contact</span>
                          <div style={{ fontWeight: '500', color: '#1e293b', marginTop: '4px' }}>
                            {selectedTeamRegistration.registration.emergencyContact || 'Not provided'}
                          </div>
                        </div>
                        <div style={{
                          background: 'white',
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid #e0f2fe'
                        }}>
                          <span style={{ color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: '600' }}>Emergency Phone</span>
                          <div style={{ fontWeight: '500', color: '#1e293b', marginTop: '4px' }}>
                            {selectedTeamRegistration.registration.emergencyPhone || 'Not provided'}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Required Team Members - Side by Side */}
                  <div style={{
                    marginBottom: '24px'
                  }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: '#1e293b',
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      👥 Required Team Members
                    </h3>
                    
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '20px'
                    }}>
                      {/* Male Members */}
                      <div style={{
                        background: '#f0f9ff',
                        border: '1px solid #0ea5e9',
                        borderRadius: '12px',
                        padding: '16px'
                      }}>
                        <h4 style={{
                          fontSize: '1rem',
                          fontWeight: '600',
                          color: '#0c4a6e',
                          marginBottom: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          👨 Male Members (2 Required)
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          {selectedTeamRegistration.teamMembers
                            .filter(member => member.gender?.toLowerCase() === 'male')
                            .slice(0, 2)
                            .map((member, index) => (
                              <div key={member._id || index} style={{
                                background: 'white',
                                border: '1px solid #e0f2fe',
                                borderRadius: '8px',
                                padding: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                              }}>
                                <div style={{
                                  width: '40px',
                                  height: '40px',
                                  borderRadius: '50%',
                                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: 'white',
                                  fontSize: '1rem',
                                  fontWeight: '600'
                                }}>
                                  {(member.firstName?.[0] || 'M') + (member.lastName?.[0] || '')}
                                </div>
                                <div style={{ flex: 1 }}>
                                  <div style={{
                                    fontSize: '0.95rem',
                                    fontWeight: '600',
                                    color: '#1e293b',
                                    marginBottom: '2px'
                                  }}>
                                    {member.firstName} {member.lastName}
                                  </div>
                                  <div style={{
                                    fontSize: '0.8rem',
                                    color: '#64748b'
                                  }}>
                                    {member.email || 'N/A'} • PPL ID: {member.pplId || 'N/A'}
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Female Members */}
                      <div style={{
                        background: '#fdf2f8',
                        border: '1px solid #ec4899',
                        borderRadius: '12px',
                        padding: '16px'
                      }}>
                        <h4 style={{
                          fontSize: '1rem',
                          fontWeight: '600',
                          color: '#be185d',
                          marginBottom: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          👩 Female Members (2 Required)
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          {selectedTeamRegistration.teamMembers
                            .filter(member => member.gender?.toLowerCase() === 'female')
                            .slice(0, 2)
                            .map((member, index) => (
                              <div key={member._id || index} style={{
                                background: 'white',
                                border: '1px solid #fce7f3',
                                borderRadius: '8px',
                                padding: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                              }}>
                                <div style={{
                                  width: '40px',
                                  height: '40px',
                                  borderRadius: '50%',
                                  background: 'linear-gradient(135deg, #ec4899, #be185d)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: 'white',
                                  fontSize: '1rem',
                                  fontWeight: '600'
                                }}>
                                  {(member.firstName?.[0] || 'F') + (member.lastName?.[0] || '')}
                                </div>
                                <div style={{ flex: 1 }}>
                                  <div style={{
                                    fontSize: '0.95rem',
                                    fontWeight: '600',
                                    color: '#1e293b',
                                    marginBottom: '2px'
                                  }}>
                                    {member.firstName} {member.lastName}
                                  </div>
                                  <div style={{
                                    fontSize: '0.8rem',
                                    color: '#64748b'
                                  }}>
                                    {member.email || 'N/A'} • PPL ID: {member.pplId || 'N/A'}
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Substitute Members */}
                  {(() => {
                    const maleSubstitutes = selectedTeamRegistration.teamMembers
                      .filter(member => member.gender?.toLowerCase() === 'male')
                      .slice(2);
                    const femaleSubstitutes = selectedTeamRegistration.teamMembers
                      .filter(member => member.gender?.toLowerCase() === 'female')
                      .slice(2);
                    
                    if (maleSubstitutes.length > 0 || femaleSubstitutes.length > 0) {
                      return (
                        <div style={{
                          marginBottom: '24px',
                          padding: '20px',
                          background: '#f9fafb',
                          border: '1px solid #d1d5db',
                          borderRadius: '12px'
                        }}>
                          <h3 style={{
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            color: '#374151',
                            marginBottom: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}>
                            🔄 Substitute Members
                          </h3>
                          
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: maleSubstitutes.length > 0 && femaleSubstitutes.length > 0 ? '1fr 1fr' : '1fr',
                            gap: '16px'
                          }}>
                            {maleSubstitutes.length > 0 && (
                              <div>
                                <h4 style={{
                                  fontSize: '0.9rem',
                                  fontWeight: '600',
                                  color: '#6b7280',
                                  marginBottom: '8px'
                                }}>
                                  Male Substitutes
                                </h4>
                                {maleSubstitutes.map((member, index) => (
                                  <div key={member._id || index} style={{
                                    background: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    padding: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    marginBottom: '8px'
                                  }}>
                                    <div style={{
                                      width: '35px',
                                      height: '35px',
                                      borderRadius: '50%',
                                      background: '#9ca3af',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      color: 'white',
                                      fontSize: '0.9rem',
                                      fontWeight: '600'
                                    }}>
                                      {(member.firstName?.[0] || 'M') + (member.lastName?.[0] || '')}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                      <div style={{
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        color: '#374151'
                                      }}>
                                        {member.firstName} {member.lastName}
                                      </div>
                                      <div style={{
                                        fontSize: '0.75rem',
                                        color: '#6b7280'
                                      }}>
                                        {member.email || 'N/A'}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {femaleSubstitutes.length > 0 && (
                              <div>
                                <h4 style={{
                                  fontSize: '0.9rem',
                                  fontWeight: '600',
                                  color: '#6b7280',
                                  marginBottom: '8px'
                                }}>
                                  Female Substitutes
                                </h4>
                                {femaleSubstitutes.map((member, index) => (
                                  <div key={member._id || index} style={{
                                    background: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    padding: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    marginBottom: '8px'
                                  }}>
                                    <div style={{
                                      width: '35px',
                                      height: '35px',
                                      borderRadius: '50%',
                                      background: '#9ca3af',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      color: 'white',
                                      fontSize: '0.9rem',
                                      fontWeight: '600'
                                    }}>
                                      {(member.firstName?.[0] || 'F') + (member.lastName?.[0] || '')}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                      <div style={{
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        color: '#374151'
                                      }}>
                                        {member.firstName} {member.lastName}
                                      </div>
                                      <div style={{
                                        fontSize: '0.75rem',
                                        color: '#6b7280'
                                      }}>
                                        {member.email || 'N/A'}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })()}

                  {/* Proof of Payment */}
                  {selectedTeamRegistration.registration?.proofOfPayment && (
                    <div style={{
                      marginBottom: '24px',
                      padding: '20px',
                      background: '#f0fdf4',
                      border: '1px solid #22c55e',
                      borderRadius: '12px'
                    }}>
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: '#15803d',
                        marginBottom: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        💳 Proof of Payment
                      </h3>
                      <div style={{
                        background: 'white',
                        border: '1px solid #bbf7d0',
                        borderRadius: '8px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          background: '#22c55e',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '1.2rem'
                        }}>
                          📄
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{
                            fontSize: '0.95rem',
                            fontWeight: '600',
                            color: '#15803d',
                            marginBottom: '4px'
                          }}>
                            Payment Receipt Uploaded
                          </div>
                          <div style={{
                            fontSize: '0.8rem',
                            color: '#16a34a'
                          }}>
                            File: {selectedTeamRegistration.registration.proofOfPayment.split('/').pop()}
                          </div>
                        </div>
                        <a
                          href={`http://localhost:5000${selectedTeamRegistration.registration.proofOfPayment}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            background: '#22c55e',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            transition: 'background-color 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#16a34a';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#22c55e';
                          }}
                        >
                          View Receipt
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: '40px',
                  color: '#64748b'
                }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '16px',
                    opacity: 0.5
                  }}>
                    👥
                  </div>
                  <p style={{
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    marginBottom: '8px',
                    color: '#334155'
                  }}>
                    No team members found
                  </p>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#64748b'
                  }}>
                    Team member data is not available for this registration
                  </p>
                </div>
              )}
              
              {/* Team Summary */}
              <div style={{
                marginTop: '24px',
                padding: '16px',
                background: '#f0f9ff',
                border: '1px solid #bae6fd',
                borderRadius: '8px',
                fontSize: '0.875rem',
                color: '#0369a1'
              }}>
                <strong>Team Summary:</strong> {selectedTeamRegistration.teamMembers?.length || 0} members registered
              </div>
            </div>
          </div>
        </div>
      )}
      </ProfileContent>
    </ProfileContainer>
  );
};

export default Profile;