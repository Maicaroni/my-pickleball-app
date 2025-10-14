import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${props => props.$isVisible ? '1' : '0'};
  visibility: ${props => props.$isVisible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

const PopupContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  min-width: 400px;
  max-width: 500px;
  transform: ${props => props.$isVisible ? 'scale(1)' : 'scale(0.9)'};
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    min-width: 320px;
    max-width: calc(100vw - 40px);
    padding: 20px;
  }
`;

const PopupHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const PopupIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #e0f2fe;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 24px;
    height: 24px;
    color: #0284c7;
  }
`;

const PopupTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
`;

const PopupContent = styled.div`
  margin-bottom: 20px;
`;

const InviterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f8fafc;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const InviterAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #0284c7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 14px;
`;

const InviterDetails = styled.div`
  flex: 1;
  
  h4 {
    margin: 0 0 2px 0;
    font-size: 14px;
    font-weight: 600;
    color: #1f2937;
  }
  
  p {
    margin: 0;
    font-size: 12px;
    color: #6b7280;
  }
`;

const TournamentInfo = styled.div`
  padding: 12px;
  background: #fef3c7;
  border-radius: 8px;
  border-left: 4px solid #f59e0b;
  
  h4 {
    margin: 0 0 4px 0;
    font-size: 14px;
    font-weight: 600;
    color: #92400e;
  }
  
  p {
    margin: 0;
    font-size: 13px;
    color: #a16207;
  }
`;

const PopupActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const AcceptButton = styled(ActionButton)`
  background: #16a34a;
  color: white;
  
  &:hover:not(:disabled) {
    background: #15803d;
  }
`;

const DeclineButton = styled(ActionButton)`
  background: #dc2626;
  color: white;
  
  &:hover:not(:disabled) {
    background: #b91c1c;
  }
`;

const CloseButton = styled(ActionButton)`
  background: #f3f4f6;
  color: #6b7280;
  
  &:hover:not(:disabled) {
    background: #e5e7eb;
  }
`;

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const PartnerInvitationPopup = ({ 
  isVisible, 
  onClose, 
  invitation, 
  onAccept, 
  onDecline,
  isProcessing = false 
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleAccept = () => {
    if (onAccept && !isProcessing) {
      onAccept(invitation);
    }
  };

  const handleDecline = () => {
    if (onDecline && !isProcessing) {
      onDecline(invitation);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && !isProcessing) {
      onClose();
    }
  };

  if (!invitation) return null;

  const getInviterInitials = () => {
    const name = invitation.inviterName || 'Unknown';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <PopupOverlay $isVisible={isVisible && isAnimating} onClick={handleOverlayClick}>
      <PopupContainer $isVisible={isVisible}>
        <PopupHeader>
          <PopupIcon>
            <UserIcon />
          </PopupIcon>
          <PopupTitle>Partner Invitation</PopupTitle>
        </PopupHeader>

        <PopupContent>
          <InviterInfo>
            <InviterAvatar>
              {getInviterInitials()}
            </InviterAvatar>
            <InviterDetails>
              <h4>{invitation.inviterName || 'Unknown Player'}</h4>
              <p>wants to be your partner</p>
            </InviterDetails>
          </InviterInfo>

          {invitation.tournamentName && (
            <TournamentInfo>
              <h4>Tournament: {invitation.tournamentName}</h4>
              <p>Category: {invitation.category || 'Not specified'}</p>
            </TournamentInfo>
          )}
        </PopupContent>

        <PopupActions>
          <CloseButton onClick={onClose} disabled={isProcessing}>
            Later
          </CloseButton>
          <DeclineButton onClick={handleDecline} disabled={isProcessing}>
            {isProcessing ? 'Processing...' : 'Decline'}
          </DeclineButton>
          <AcceptButton onClick={handleAccept} disabled={isProcessing}>
            {isProcessing ? 'Processing...' : 'Accept'}
          </AcceptButton>
        </PopupActions>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default PartnerInvitationPopup;