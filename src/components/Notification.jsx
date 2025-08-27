import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NotificationContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: white;
  border-radius: 8px;
  padding: 16px 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  min-width: 300px;
  max-width: 400px;
  z-index: 1000;
  transform: translateX(${props => props.$isVisible ? '0' : '400px'});
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    right: 10px;
    bottom: 10px;
    min-width: 280px;
    max-width: calc(100vw - 20px);
  }
`;

const NotificationContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NotificationIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${props => props.$type === 'success' ? '#dcfce7' : '#fef2f2'};
  
  svg {
    width: 20px;
    height: 20px;
    color: ${props => props.$type === 'success' ? '#16a34a' : '#dc2626'};
  }
`;

const NotificationText = styled.div`
  flex: 1;
  
  h4 {
    margin: 0 0 2px 0;
    font-size: 14px;
    font-weight: 600;
    color: #1f2937;
  }
  
  p {
    margin: 0;
    font-size: 13px;
    color: #6b7280;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: #9ca3af;
  flex-shrink: 0;
  
  &:hover {
    color: #6b7280;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const LogoutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const Notification = ({ message, type = 'success', isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto close after 3 seconds
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const getIcon = () => {
    if (type === 'success' || message.includes('Welcome back')) {
      return <CheckIcon />;
    }
    return <LogoutIcon />;
  };

  const isLogoutMessage = message.includes('logged out') || type === 'info';

  const isLoginMessage = message.includes('Welcome back') || message.includes('Welcome,');

  const getTitle = () => {
    if (isLogoutMessage) return null;
    if (isLoginMessage) return 'Successfully Logged In';
    if (type === 'success') return 'Success';
    if (type === 'error') return 'Error';
    return 'Notification';
  };


  return (
    <NotificationContainer $isVisible={isVisible}>
      <NotificationContent>
        <NotificationIcon $type={type}>
          {getIcon()}
        </NotificationIcon>
        <NotificationText>
          {isLogoutMessage ? (
            <h4>{message}</h4>
          ) : (
            <>
              <h4>{getTitle()}</h4>
              <p>{message}</p>
            </>
          )}
        </NotificationText>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      </NotificationContent>
    </NotificationContainer>
  );
};

export default Notification; 

