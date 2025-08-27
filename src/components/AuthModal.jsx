import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  padding: 32px;

  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #262626;
  }

  p {
    color: #8e8e8e;
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 1.4;
  }
`;

const ModalButton = styled(Link)`
  display: block;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 8px;
  transition: all 0.2s ease;

  ${props => props.$primary ? `
    background: #29ba9b;
    color: white;
    
    &:hover {
      background: #234255;
    }
  ` : `
    color: #234255;
    border: 1px solid #234255;
    
    &:hover {
      background: #234255;
      color: white;
    }
  `}
`;

const AuthModal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <h2>{title || "Sign in Required"}</h2>
        <p>{message || "Please sign in or register to continue"}</p>
        <ModalButton to="/signin">Sign In</ModalButton>
        <ModalButton to="/register" $primary>Register</ModalButton>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal; 