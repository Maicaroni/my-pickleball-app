import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { LoadScript, GoogleMap, Marker, } from "@react-google-maps/api";
import { useLocation } from 'react-router-dom';



// Styled Components
const HostTournamentContainer = styled.div`
  min-height: calc(100vh - 140px);
  padding: 50px 20px 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  background: #ffffff;
`;

const FormHeader = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const FormTitle = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
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

const FormSubtitle = styled.p`
  color: #6b7280;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const FormContainer = styled.form`
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
`;

const FormSection = styled.div`
  margin-bottom: 32px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #234255;
  margin-bottom: 20px;
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

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    grid-template-columns: ${props => props.columns || '1fr 1fr'};
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  font-size: 0.95rem;
`;

const Input = styled.input`
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
    color: #94a3b8;
  }
  
  &:hover {
    border-color: #cbd5e0;
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  
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

const Select = styled.select`
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
  
  &:hover {
    border-color: #cbd5e0;
  }
`;

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  margin-top: 8px;
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  color: #374151;
  
  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: #29ba9b;
  }
`;

const FileUploadArea = styled.div`
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
  padding: 32px;
  text-align: center;
  background: #f8fafc;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #29ba9b;
    background: #f0fffe;
  }
  
  &.dragover {
    border-color: #29ba9b;
    background: #f0fffe;
  }
`;

const FileUploadIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 12px;
  color: #64748b;
`;

const FileUploadText = styled.p`
  color: #64748b;
  margin-bottom: 8px;
  font-size: 1rem;
`;

const FileUploadSubtext = styled.p`
  color: #94a3b8;
  font-size: 0.875rem;
`;

const UploadedFile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #f0fffe;
  border: 1px solid #29ba9b;
  border-radius: 8px;
  margin-top: 12px;
`;

const FileName = styled.span`
  color: #234255;
  font-weight: 500;
`;

const RemoveFileButton = styled.button`
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 4px;
  
  &:hover {
    color: #dc2626;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1.5px solid;
  min-width: 140px;
  
  ${props => props.variant === 'primary' ? `
    background: #29ba9b;
    color: white;
    border-color: #29ba9b;
    
    &:hover {
      background: #26a085;
      border-color: #26a085;
      transform: translateY(-1px);
    }
    
    &:disabled {
      background: #94a3b8;
      border-color: #94a3b8;
      cursor: not-allowed;
      transform: none;
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
`;

const PaymentInfoBox = styled.div`
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
`;

const PaymentInfoTitle = styled.h4`
  color: #92400e;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 1rem;
`;

const PaymentInfoText = styled.p`
  color: #92400e;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f1f5f9;
    border-color: #29ba9b;
  }
`;

const MapIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 12px;
  color: #64748b;
`;

const MapText = styled.p`
  color: #64748b;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 8px;
`;

const MapSubtext = styled.p`
  color: #94a3b8;
  font-size: 0.9rem;
  text-align: center;
  max-width: 300px;
`;

const LocationInfo = styled.div`
  background: #f0fffe;
  border: 1px solid #29ba9b;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const LocationTitle = styled.h4`
  color: #234255;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 1rem;
`;

const LocationAddress = styled.p`
  color: #475569;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
`;

const LocationActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

const LocationButton = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid;
  
  ${props => props.variant === 'primary' ? `
    background: #29ba9b;
    color: white;
    border-color: #29ba9b;
    
    &:hover {
      background: #26a085;
      border-color: #26a085;
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
`;

const SkillLevelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 8px;
`;

const SkillLevelCard = styled.div`
  border: 2px solid ${props => props.selected ? '#29ba9b' : '#e2e8f0'};
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.selected ? '#f0fffe' : 'white'};
  
  &:hover {
    border-color: #29ba9b;
    background: #f0fffe;
  }
`;

const SkillLevelLabel = styled.div`
  font-weight: 600;
  color: #234255;
  margin-bottom: 4px;
  font-size: 1rem;
`;

const SkillLevelDescription = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.4;
`;

const DuprInfo = styled.div`
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
`;

const DuprTitle = styled.h4`
  color: #92400e;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 1rem;
`;

const DuprText = styled.p`
  color: #92400e;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;

const CategoryBuilder = styled.div`
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  background: #fafbfc;
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CategoryTitle = styled.h4`
  color: #234255;
  font-weight: 600;
  margin: 0;
  font-size: 1.1rem;
`;

const RemoveButton = styled.button`
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #dc2626;
  }
`;

const CategoryRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AddCategoryButton = styled.button`
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  
  &:hover {
    background: #26a085;
  }
`;

const CategorySummary = styled.div`
  background: #f0fffe;
  border: 1px solid #29ba9b;
  border-radius: 8px;
  padding: 16px;
  margin-top: 20px;
`;

const SummaryTitle = styled.h4`
  color: #234255;
  font-weight: 600;
  margin-bottom: 12px;
  font-size: 1rem;
`;

const SummaryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SummaryItem = styled.li`
  color: #6b7280;
  font-size: 0.9rem;
  padding: 4px 0;
  border-bottom: 1px solid #e2e8f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const BankDetailsSection = styled.div`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  margin: 20px 0;
`;

const BankDetailsTitle = styled.h3`
  color: #234255;
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 1.2rem;
  text-align: center;
`;

const PaymentMethodsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BankDetailsBox = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
`;

const BankDetailsHeader = styled.h4`
  color: #234255;
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 1rem;
  border-bottom: 2px solid #29ba9b;
  padding-bottom: 8px;
`;

const BankDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child {
    border-bottom: none;
  }
`;

const BankDetailLabel = styled.span`
  color: #6b7280;
  font-weight: 500;
  font-size: 0.9rem;
`;

const BankDetailValue = styled.span`
  color: #234255;
  font-weight: 600;
  font-size: 0.9rem;
  font-family: monospace;
`;

const QRCodeSection = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
`;

const QRCodeHeader = styled.h4`
  color: #234255;
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 1rem;
  border-bottom: 2px solid #29ba9b;
  padding-bottom: 8px;
`;

const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

const QRCodePlaceholder = styled.div`
  width: 150px;
  height: 150px;
  background: #f8fafc;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f1f5f9;
    border-color: #29ba9b;
  }
`;

const QRCodeIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 8px;
  color: #64748b;
`;

const QRCodeText = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 4px 0;
`;

const QRCodeSubtext = styled.p`
  color: #94a3b8;
  font-size: 0.8rem;
  margin: 0;
`;

const QRCodeInstructions = styled.p`
  color: #6b7280;
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0;
  max-width: 250px;
  margin: 0 auto;
`;

const DateSelector = styled.div`
  margin-bottom: 16px;
`;

const MultiDateInput = styled.input`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  transition: all 0.2s ease;
  width: 100%;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &:hover {
    border-color: #cbd5e0;
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const DateHelperText = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin: 8px 0 0 0;
  font-style: italic;
`;

const CalendarContainer = styled.div`
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  background: white;
  margin-bottom: 12px;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const CalendarNav = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  color: #6b7280;
  
  &:hover {
    background: #f3f4f6;
    color: #374151;
  }
`;

const CalendarTitle = styled.h3`
  margin: 0;
  color: #374151;
  font-size: 1.1rem;
  font-weight: 600;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 16px;
`;

const CalendarDayHeader = styled.div`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  padding: 8px 4px;
`;

const CalendarDay = styled.button.withConfig({
  shouldForwardProp: (prop) => !['selected', 'today', 'otherMonth'].includes(prop)
})`

  padding: 8px 4px;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => {
    if (props.selected) return '#29ba9b';
    if (props.today) return '#f0fffe';
    if (props.otherMonth) return 'transparent';
    return 'white';
  }};
  color: ${props => {
    if (props.selected) return 'white';
    if (props.otherMonth) return '#cbd5e0';
    if (props.today) return '#29ba9b';
    return '#374151';
  }};
  
  &:hover {
    background: ${props => {
      if (props.selected) return '#26a085';
      if (props.otherMonth) return 'transparent';
      return '#f0fffe';
    }};
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

const CalendarActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const CalendarButton = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid;
  
  ${props => props.variant === 'primary' ? `
    background: #29ba9b;
    color: white;
    border-color: #29ba9b;
    
    &:hover {
      background: #26a085;
      border-color: #26a085;
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
`;

const CalendarToggle = styled.button`
  padding: 12px 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #374151;
  background: white;
  transition: all 0.2s ease;
  cursor: pointer;
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &:hover {
    border-color: #cbd5e0;
  }
`;

const SelectedDatesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

const DateTag = styled.div`
  background: #f0fffe;
  border: 1px solid #29ba9b;
  border-radius: 20px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #234255;
`;

const RemoveDateButton = styled.button`
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
  
  &:hover {
    color: #dc2626;
  }
`;

const RichTextContainer = styled.div`
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  transition: all 0.2s ease;
  
  &:focus-within {
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
`;

const RichTextToolbar = styled.div`
  display: flex;
  gap: 4px;
  padding: 8px 12px;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
  border-radius: 8px 8px 0 0;
`;

const ToolbarButton = styled.button`
  background: ${props => props.active ? '#29ba9b' : 'white'};
  color: ${props => props.active ? 'white' : '#374151'};
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 60px;
  user-select: none;
  
  &:hover {
    background: ${props => props.active ? '#26a085' : '#f3f4f6'};
    border-color: #cbd5e0;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(41, 186, 155, 0.2);
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

const RichTextEditor = styled.div`
  min-height: 100px;
  padding: 12px 16px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  border-radius: 0 0 8px 8px;
  outline: none;
  font-family: inherit;
  line-height: 1.5;
  white-space: pre-wrap;
  
  &:empty:before {
    content: attr(data-placeholder);
    color: #94a3b8;
    font-size: 1rem;
  }
  
  /* Style lists */
  ul {
    margin: 8px 0;
    padding-left: 20px;
  }
  
  li {
    margin: 4px 0;
  }
  
  /* Style bold and italic */
  strong {
    font-weight: 600;
  }
  
  em {
    font-style: italic;
  }
  
  /* Prevent nested formatting issues */
  p {
    margin: 8px 0;
  }
  
  p:first-child {
    margin-top: 0;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
  
  /* Tab support */
  tab-size: 4;
  -moz-tab-size: 4;
`;

const HostTournament = () => {
  const { login, showNotification } = useAuth(); // use the new login from AuthContext
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tournamentName: '',
    description: '',
    tournamentPicture: null,
    registrationInstructions: '',
    tournamentDates: [],
    registrationDeadline: '',
    category: '',
    skillLevel: '',
    entryFeeMin: '',
    entryFeeMax: '',
    prizePool: '',
    venueName: '',
    venueAddress: '',
    venueCity: '',
    venueState: '',
    venueZip: '',
    contactEmail: '',
    contactPhone: '',
    rules: '',
    events: '',
    paymentMethods: [
      {
        id: 1,
        bankName: '',
        accountName: '',
        accountNumber: '',
        qrCodeImage: null
      }
    ],
    additionalInfo: '',
    tournamentCategories: []
  });
  
  const [mapCenter, setMapCenter] = useState({ lat: 14.5995, lng: 120.9842 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [tempSelectedDates, setTempSelectedDates] = useState([]);
  const [addressInput, setAddressInput] = useState("");
  const location = useLocation();
  const editTournament = location.state?.editTournament;

  // Rich text editor refs
  const rulesEditorRef = useRef(null);
  const eventsEditorRef = useRef(null);
   // ✅ Get logged-in user from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user"));
const token = storedUser?.token;
const user = storedUser; // or storedUser.user if login stores nested user object
const tournamentPictureURL = formData.tournamentPicture
  ? formData.tournamentPicture instanceof File
    ? URL.createObjectURL(formData.tournamentPicture)
    : formData.tournamentPicture // already a URL string
  : null;

if (!user || !token) {
  return (
    <HostTournamentContainer>
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h2 style={{ color: '#234255', marginBottom: '16px' }}>Sign in required</h2>
        <p style={{ color: '#6b7280', marginBottom: '20px' }}>
          You need to be logged in to host a tournament.
        </p>
        <Button variant="primary" onClick={() => navigate('/signin')}>
          Sign In
        </Button>
      </div>
    </HostTournamentContainer>
  );
}

useEffect(() => {
  if (editTournament) {
    setFormData(prev => ({
      ...prev,
      tournamentName: editTournament.tournamentName || '',
      description: editTournament.description || '',
      tournamentPicture: editTournament.tournamentPicture || null,
      registrationInstructions: editTournament.registrationInstructions || '',
      tournamentDates: editTournament.tournamentDates || [],
      registrationDeadline: editTournament.registrationDeadline || '',
      category: editTournament.category || '',
      skillLevel: editTournament.skillLevel || '',
      entryFeeMin: editTournament.entryFeeMin || '',
      entryFeeMax: editTournament.entryFeeMax || '',
      prizePool: editTournament.prizePool || '',
      venueName: editTournament.venueName || '',
      venueAddress: editTournament.venueAddress || '',
      venueCity: editTournament.venueCity || '',
      venueState: editTournament.venueState || '',
      venueZip: editTournament.venueZip || '',
      contactEmail: editTournament.contactEmail || '',
      contactPhone: editTournament.contactPhone || '',
      rules: editTournament.rules || '',
      events: editTournament.events || '',
      paymentMethods: editTournament.paymentMethods || [
        {
          id: 1,
          bankName: '',
          accountName: '',
          accountNumber: '',
          qrCodeImage: null
        }
      ],
      additionalInfo: editTournament.additionalInfo || '',
      tournamentCategories: editTournament.tournamentCategories || []
    }));
  }
}, [editTournament]);


// 3️⃣ pre-fill rich text editors
useEffect(() => {
  if (rulesEditorRef.current && formData.rules) {
    rulesEditorRef.current.innerHTML = formData.rules;
  }
  if (eventsEditorRef.current && formData.events) {
    eventsEditorRef.current.innerHTML = formData.events;
  }
}, [formData.rules, formData.events]);
  // Initialize with one empty category
  useEffect(() => {
    if (formData.tournamentCategories.length === 0) {
      const newCategory = {
        id: Date.now(),
        division: '',
        ageCategory: '',
        skillLevel: '',
        maxParticipants: '',
        prizePool: ''
      };
      
      setFormData(prev => ({
        ...prev,
        tournamentCategories: [newCategory]
      }));
    }
  }, []);

useEffect(() => {
  return () => {
    formData.paymentMethods.forEach(pm => {
      if (pm.qrCodeImage instanceof File) {
        URL.revokeObjectURL(pm.qrCodeImage);
      }
    });
  };
}, [formData.paymentMethods]);


  // Initialize rich text editor content
  useEffect(() => {
    if (rulesEditorRef.current && formData.rules) {
      rulesEditorRef.current.innerHTML = formData.rules;
    }
    if (eventsEditorRef.current && formData.events) {
      eventsEditorRef.current.innerHTML = formData.events;
    }
  }, [formData.rules, formData.events]);

  const divisions = [
    'Men\'s Singles',
    'Women\'s Singles', 
    'Men\'s Doubles',
    'Women\'s Doubles',
    'Mixed Doubles',
    'Team'
  ];

  const ageCategories = [
    '18+',
    '35+',
    '50+'
  ];

  const skillLevels = [
    { value: 'beginner', label: 'Beginner', isOpen: false },
    { value: 'intermediate', label: 'Intermediate', isOpen: false },
    { value: 'advanced', label: 'Advanced', isOpen: false },
    { value: 'open-tier-1', label: 'Open - Tier 1', isOpen: true },
    { value: 'open-tier-2', label: 'Open - Tier 2', isOpen: true },
    { value: 'open-tier-3', label: 'Open - Tier 3', isOpen: true }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleCalendar = () => {
    if (showCalendar) {
      setTempSelectedDates([]);
    } else {
      setTempSelectedDates([...formData.tournamentDates]);
    }
    setShowCalendar(!showCalendar);
  };

  const handleDateSelect = (dateStr) => {
    if (tempSelectedDates.includes(dateStr)) {
      setTempSelectedDates(tempSelectedDates.filter(date => date !== dateStr));
    } else {
      setTempSelectedDates([...tempSelectedDates, dateStr].sort());
    }
  };

  const confirmDateSelection = () => {
    setFormData(prev => ({
      ...prev,
      tournamentDates: tempSelectedDates
    }));
    setShowCalendar(false);
  };

  const cancelDateSelection = () => {
    setTempSelectedDates([]);
    setShowCalendar(false);
  };

  const handleDateRemove = (dateToRemove) => {
    setFormData(prev => ({
      ...prev,
      tournamentDates: prev.tournamentDates.filter(date => date !== dateToRemove)
    }));
  };

  // Rich text editor functions
  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  const formatText = (command, editorRef) => {
    if (editorRef.current) {
      editorRef.current.focus();
      
      // Save the current selection
      const selection = window.getSelection();
      if (selection.rangeCount === 0) {
        // If no selection, place cursor at end
        const range = document.createRange();
        range.selectNodeContents(editorRef.current);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      
      execCommand(command);
      editorRef.current.focus(); // Refocus after command
    }
  };

  const insertBulletList = (editorRef) => {
    if (editorRef.current) {
      editorRef.current.focus();
      
      // Save the current selection
      const selection = window.getSelection();
      if (selection.rangeCount === 0) {
        // If no selection, place cursor at end
        const range = document.createRange();
        range.selectNodeContents(editorRef.current);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      
      execCommand('insertUnorderedList');
      editorRef.current.focus(); // Refocus after command
    }
  };

  const handleRichTextChange = (field, editorRef) => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML;
      setFormData(prev => ({
        ...prev,
        [field]: content
      }));
    }
  };

  const handleRichTextInput = (field, editorRef) => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML;
      // Update state without re-rendering the contentEditable
      formData[field] = content;
    }
  };

  const handleKeyDown = (e, field, editorRef) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      
      // Insert tab character or spaces
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const tabNode = document.createTextNode('\u00A0\u00A0\u00A0\u00A0'); // 4 non-breaking spaces
        range.deleteContents();
        range.insertNode(tabNode);
        
        // Move cursor after the inserted tab
        range.setStartAfter(tabNode);
        range.setEndAfter(tabNode);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      
      // Update the content
      handleRichTextInput(field, editorRef);
    }
  };

  const isCommandActive = (command) => {
    return document.queryCommandState(command);
  };

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add previous month's trailing days
    const prevMonth = new Date(year, month - 1, 0);
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonth.getDate() - i,
        date: new Date(year, month - 1, prevMonth.getDate() - i),
        otherMonth: true
      });
    }
    
    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        date: new Date(year, month, day),
        otherMonth: false
      });
    }
    
    // Add next month's leading days
    const remainingCells = 42 - days.length; // 6 rows × 7 days
    for (let day = 1; day <= remainingCells; day++) {
      days.push({
        day,
        date: new Date(year, month + 1, day),
        otherMonth: true
      });
    }
    
    return days;
  };



  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type and size
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (!allowedTypes.includes(file.type)) {
        showNotification('Please upload a valid image (JPG, PNG) or PDF file', 'error');
        return;
      }
      
      if (file.size > maxSize) {
        showNotification('File size must be less than 5MB', 'error');
        return;
      }
      
    }
  };

  const handleTournamentPictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type and size for tournament picture
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (!allowedTypes.includes(file.type)) {
        showNotification('Please upload a valid image (JPG, PNG)', 'error');
        return;
      }
      
      if (file.size > maxSize) {
        showNotification('File size must be less than 5MB', 'error');
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        tournamentPicture: file
      }));
    }
  };

  const removeTournamentPicture = () => {
    setFormData(prev => ({
      ...prev,
      tournamentPicture: null
    }));
  };



// Add this to your component
const handleAddressSearch = async () => {
  if (!addressInput) return;

  try {
    const res = await axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        params: {
          address: addressInput,
          key: "YOUR_API_KEY_HERE", // replace with your Google Maps API key
        },
      }
    );

    const result = res.data.results[0];
    if (result) {
      // Extract city, state, zip
      let city = "";
      let state = "";
      let zip = "";

      result.address_components.forEach(component => {
        const types = component.types;
        if (types.includes("locality")) city = component.long_name;
        if (types.includes("administrative_area_level_1")) state = component.short_name;
        if (types.includes("postal_code")) zip = component.long_name;
      });

      const newLocation = {
        name: result.formatted_address,
        address: result.formatted_address,
        lat: result.geometry.location.lat,
        lng: result.geometry.location.lng,
      };

      setSelectedLocation(newLocation);

      // Update form data
      setFormData(prev => ({
        ...prev,
        venueName: newLocation.name,
        venueAddress: newLocation.address,
        venueCity: city,
        venueState: state,
        venueZip: zip,
      }));
    } else {
      alert("Address not found, try again!");
    }
  } catch (err) {
    console.error(err);
    alert("Error fetching location.");
  }
};

  const handleQRCodeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type and size for QR code image
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (!allowedTypes.includes(file.type)) {
        showNotification('Please upload a valid image (JPG, PNG)', 'error');
        return;
      }
      
      if (file.size > maxSize) {
        showNotification('File size must be less than 5MB', 'error');
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        qrCodeImage: file
      }));
    }
  };

  const removeQRCodeImage = (paymentMethodId) => {
    setFormData(prev => ({
      ...prev,
      paymentMethods: prev.paymentMethods.map(method => 
        method.id === paymentMethodId 
          ? { ...method, qrCodeImage: null }
          : method
      )
    }));
  };

  const addPaymentMethod = () => {
    if (formData.paymentMethods.length >= 3) {
      showNotification('Maximum of 3 payment methods allowed', 'error');
      return;
    }
    
    const newPaymentMethod = {
      id: Date.now(),
      bankName: '',
      accountName: '',
      accountNumber: '',
      qrCodeImage: null
    };
    
    setFormData(prev => ({
      ...prev,
      paymentMethods: [...prev.paymentMethods, newPaymentMethod]
    }));
  };

  const removePaymentMethod = (paymentMethodId) => {
    if (formData.paymentMethods.length <= 1) {
      showNotification('At least one payment method is required', 'error');
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      paymentMethods: prev.paymentMethods.filter(method => method.id !== paymentMethodId)
    }));
  };

  const updatePaymentMethod = (paymentMethodId, field, value) => {
    setFormData(prev => ({
      ...prev,
      paymentMethods: prev.paymentMethods.map(method => 
        method.id === paymentMethodId 
          ? { ...method, [field]: value }
          : method
      )
    }));
  };

  const handleQRCodeUploadForMethod = (paymentMethodId, e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type and size
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (!allowedTypes.includes(file.type)) {
        showNotification('Please upload a valid image (JPG, PNG)', 'error');
        return;
      }
      
      if (file.size > maxSize) {
        showNotification('File size must be less than 5MB', 'error');
        return;
      }
      
      updatePaymentMethod(paymentMethodId, 'qrCodeImage', file);
    }
  };

const handleMapClick = () => {
  setShowMap(true);
  // Optionally, scroll or focus map UI
};

  const clearLocation = () => {
    setSelectedLocation(null);
    setFormData(prev => ({
      ...prev,
      venueName: '',
      venueAddress: '',
      venueCity: '',
      venueState: '',
      venueZip: ''
    }));
  };

  const openInGoogleMaps = () => {
    if (selectedLocation) {
      const url = `https://www.google.com/maps/search/?api=1&query=${selectedLocation.lat},${selectedLocation.lng}`;
      window.open(url, '_blank');
    }
  };

  const addTournamentCategory = () => {
    const newCategory = {
      id: Date.now(),
      division: '',
      ageCategory: '',
      skillLevel: '',
      maxParticipants: '',
      prizePool: ''
    };
    
    setFormData(prev => ({
      ...prev,
      tournamentCategories: [...prev.tournamentCategories, newCategory]
    }));
  };

  const removeTournamentCategory = (categoryId) => {
    setFormData(prev => ({
      ...prev,
      tournamentCategories: prev.tournamentCategories.filter(cat => cat.id !== categoryId)
    }));
  };

  const updateTournamentCategory = (categoryId, field, value) => {
    setFormData(prev => {
      const updatedCategories = prev.tournamentCategories.map(cat => {
        if (cat.id === categoryId) {
          const updatedCat = { ...cat, [field]: value };
          
          // If skill level is being updated and it's an "Open" category, clear age category
          if (field === 'skillLevel') {
            const selectedSkillLevel = skillLevels.find(skill => skill.value === value);
            if (selectedSkillLevel && selectedSkillLevel.isOpen) {
              updatedCat.ageCategory = '';
            }
          }
          
          return updatedCat;
        }
        return cat;
      });
      return {
        ...prev,
        tournamentCategories: updatedCategories
      };
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Get token
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = storedUser?.token;

    if (!token) {
      alert("Please login before hosting a tournament");
      setIsSubmitting(false);
      return;
    }

    // Validate required top-level fields
    const requiredFields = [
      "tournamentName",
      "description",
      "registrationInstructions",
      "registrationDeadline",
      "tournamentDates",
      "entryFeeMin",
      "entryFeeMax",
      "venueName",
      "venueAddress",
      "venueCity",
      "contactEmail"
    ];

    for (let field of requiredFields) {
      if (!formData[field] || (Array.isArray(formData[field]) && formData[field].length === 0)) {
        alert(`Please fill in ${field}`);
        setIsSubmitting(false);
        return;
      }
    }

    // Validate tournamentCategories
    if (!formData.tournamentCategories || formData.tournamentCategories.length === 0) {
      alert("Please add at least one tournament category");
      setIsSubmitting(false);
      return;
    }


    // Each category must have skillLevel and division
    for (let cat of formData.tournamentCategories) {
      if (!cat.skillLevel || !cat.division) {
        alert("Each category must have a division and skill level");
        setIsSubmitting(false);
        return;
      }
    }

    // Set top-level category & skillLevel from first category
    formData.category = formData.tournamentCategories[0].division;
    formData.skillLevel = formData.tournamentCategories[0].skillLevel;

    // Limit payment methods to max 2
    if (formData.paymentMethods?.length > 2) {
      alert("You can only add up to 3 payment methods.");

      setIsSubmitting(false);
      return;
    }

    // Ensure each payment method has bank info or QR code
    for (let pm of formData.paymentMethods || []) {
      if (!pm.bankName && !pm.qrCodeImage) {
        alert("Each payment method must have a bank or QR code uploaded.");
        setIsSubmitting(false);
        return;
      }
    }

    // Prepare FormData for upload.fields()
    const formDataToSend = new FormData();

    // Top-level fields
    Object.keys(formData).forEach((key) => {
      if (["tournamentCategories", "tournamentDates", "paymentMethods"].includes(key)) {
        formDataToSend.append(key, JSON.stringify(formData[key]));
      } else if (key !== "tournamentPicture") {
        if (key === "entryFeeMin" || key === "entryFeeMax") {
          formDataToSend.append(key, Number(formData[key]));
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }
    });

    // Append tournament picture if uploaded
    if (formData.tournamentPicture) {
      formDataToSend.append("tournamentPicture", formData.tournamentPicture);
    }

    // Append payment QR images (upload.fields expects array)
    formData.paymentMethods?.forEach((pm) => {
      if (pm.qrCodeImage instanceof File) {
        formDataToSend.append("paymentMethodsFiles", pm.qrCodeImage);
      }
    });

    // Submit
    const response = await axios.post(
      "http://localhost:5000/api/tournaments",
      formDataToSend,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 201) {
      alert("Tournament successfully made");
      navigate("/tournament");
    }

  } catch (error) {
    console.error("Error submitting tournament:", error.response?.data || error.message);
    if (error.response?.status === 401) {
      alert("Session expired. Please log in again.");
      localStorage.removeItem("user");
      navigate("/signin");
    } else {
      alert("Failed to submit tournament. Please try again.");
    }
  } finally {
    setIsSubmitting(false);
  }
};


const handleCancel = () => {
    navigate('/profile');
  };

  return (
    <HostTournamentContainer>
      <FormHeader>
        <FormTitle>Host a Tournament</FormTitle>
        <FormSubtitle>
          Create and submit your tournament for admin approval. All tournaments require payment verification before approval.
        </FormSubtitle>
      </FormHeader>

      <FormContainer onSubmit={handleSubmit}>
        {/* Basic Information */}
        <FormSection>
          <SectionTitle>Basic Information</SectionTitle>
          <FormGroup style={{ marginTop: '24px' }}>
            <Label>Tournament Name *</Label>
            <Input
              type="text"
              name="tournamentName"
              value={formData.tournamentName}
              onChange={handleInputChange}
              placeholder="Enter tournament name"
              required
            />
          </FormGroup>
          
          <FormGroup style={{ marginTop: '24px' }}>
            <Label>Tournament Description *</Label>
            <TextArea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your tournament, format, and any special features"
              required
            />
          </FormGroup>

          <FormGroup style={{ marginTop: '24px' }}>
            <Label>Tournament Picture</Label>
            {!formData.tournamentPicture ? (
              <FileUploadArea onClick={() => document.getElementById('tournament-picture-upload').click()}>
                <FileUploadIcon>🖼️</FileUploadIcon>
                <FileUploadText>Click to upload tournament picture</FileUploadText>
                <FileUploadSubtext>JPG or PNG (max 5MB)</FileUploadSubtext>
              </FileUploadArea>
            ) : (
              <div style={{ position: 'relative', marginTop: '12px' }}>
                <img
  src={
    formData.tournamentPicture instanceof File
      ? URL.createObjectURL(formData.tournamentPicture)
      : formData.tournamentPicture || ''
  }
  alt="Tournament Picture"
  style={{
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '20px',
    border: '2px solid #e2e8f0',
    display: 'block'
  }}
/>
                <button
                  type="button"
                  onClick={removeTournamentPicture}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'transparent',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                    padding: '0',
                    lineHeight: '1'
                  }}
                >
                  ×
                </button>
                <div style={{ 
                  marginTop: '8px', 
                  fontSize: '0.875rem', 
                  color: '#6b7280',
                  fontStyle: 'italic'
                }}>
                  {formData.tournamentPicture.name}
                </div>
              </div>
            )}
            <HiddenFileInput
              id="tournament-picture-upload"
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={handleTournamentPictureUpload}
              />
            </FormGroup>
          
          <FormGroup style={{ marginTop: '24px' }}>
            <Label>Registration Instructions *</Label>
            <TextArea
              name="registrationInstructions"
              value={formData.registrationInstructions}
                onChange={handleInputChange}
              placeholder="Provide clear instructions on how participants can register for your tournament"
                required
              />
            </FormGroup>
        </FormSection>

        {/* Tournament Details */}
        <FormSection>
          <SectionTitle>Tournament Details</SectionTitle>
          
          <FormGroup>
            <Label>Tournament Date Selection *</Label>
            <DateSelector>
              <CalendarToggle type="button" onClick={toggleCalendar}>
                <span>
                  {formData.tournamentDates.length === 0 
                    ? "Click to select tournament dates" 
                    : `${formData.tournamentDates.length} date${formData.tournamentDates.length !== 1 ? 's' : ''} selected`
                  }
                </span>
                <span>{showCalendar ? '▲' : '▼'}</span>
              </CalendarToggle>
              
              {showCalendar && (
                <CalendarContainer>
                  <CalendarHeader>
                    <CalendarNav type="button" onClick={() => navigateMonth(-1)}>
                      ◀
                    </CalendarNav>
                    <CalendarTitle>
                      {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </CalendarTitle>
                    <CalendarNav type="button" onClick={() => navigateMonth(1)}>
                      ▶
                    </CalendarNav>
                  </CalendarHeader>
                  
                  <CalendarGrid>
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <CalendarDayHeader key={day}>{day}</CalendarDayHeader>
                    ))}
                    
                    {getDaysInMonth(currentMonth).map((dayObj, index) => {
                      const dateStr = dayObj.date.toISOString().split('T')[0];
                      const isSelected = tempSelectedDates.includes(dateStr);
                      const isToday = dateStr === new Date().toISOString().split('T')[0];
                      
                      return (
                        <CalendarDay
                          key={index}
                          type="button"
                          selected={isSelected}
                          today={isToday}
                          otherMonth={dayObj.otherMonth}
                          onClick={() => !dayObj.otherMonth && handleDateSelect(dateStr)}
                        >
                          {dayObj.day}
                        </CalendarDay>
                      );
                    })}
                  </CalendarGrid>
                  
                  <CalendarActions>
                    <div>
                      <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                        {tempSelectedDates.length} date{tempSelectedDates.length !== 1 ? 's' : ''} selected
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <CalendarButton type="button" onClick={cancelDateSelection}>
                        Cancel
                      </CalendarButton>
                      <CalendarButton 
                        type="button" 
                        variant="primary" 
                        onClick={confirmDateSelection}
                        disabled={tempSelectedDates.length === 0}
                      >
                        OK
                      </CalendarButton>
                    </div>
                  </CalendarActions>
                </CalendarContainer>
              )}
              
              {formData.tournamentDates.length > 0 && (
                <SelectedDatesContainer>
                  {formData.tournamentDates.map((date, index) => (
                    <DateTag key={index}>
                      {new Date(date).toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                      <RemoveDateButton 
                        type="button"
                        onClick={() => handleDateRemove(date)}
                      >
                        ×
                      </RemoveDateButton>
                    </DateTag>
                  ))}
                </SelectedDatesContainer>
              )}
            </DateSelector>
          </FormGroup>

          <FormGroup>
            <Label>Registration Deadline *</Label>
            <Input
              type="date"
              name="registrationDeadline"
              value={formData.registrationDeadline}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Tournament Categories *</Label>

            
            {formData.tournamentCategories.map((category, index) => (
              <CategoryBuilder key={category.id}>
                <CategoryHeader>
                  <CategoryTitle>Category {index + 1}</CategoryTitle>
                  {formData.tournamentCategories.length > 1 && (
                    <RemoveButton onClick={() => removeTournamentCategory(category.id)}>
                      Remove
                    </RemoveButton>
                  )}
                </CategoryHeader>
                
                <CategoryRow>
                  <FormGroup>
                    <Label>Division *</Label>
                    <Select
                      key={`division-${category.id}`}
                      value={category.division || ''}
                      onChange={(e) => updateTournamentCategory(category.id, 'division', e.target.value)}
                      required
                    >
                      <option value="">Select division</option>
                      {divisions.map(division => (
                        <option key={division} value={division}>{division}</option>
                      ))}
                    </Select>
                  </FormGroup>
                  
                  <FormGroup>
                    <Label>Skill Level *</Label>
                    <Select
                      key={`skill-${category.id}`}
                      value={category.skillLevel || ''}
                      onChange={(e) => updateTournamentCategory(category.id, 'skillLevel', e.target.value)}
                      required
                    >
                      <option value="">Select skill level</option>
                      {skillLevels
                        .filter(level => {
                          if (category.division === 'Team') {
                            return level.value === 'intermediate' || level.value === 'advanced';
                          }
                          return true;
                        })
                        .map(level => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </Select>
                  </FormGroup>
                  
                  <FormGroup>
                    <Label>
                      Age {(() => {
                        const selectedSkillLevel = skillLevels.find(skill => skill.value === category.skillLevel);
                        const isOpenCategory = selectedSkillLevel && selectedSkillLevel.isOpen;
                        return isOpenCategory ? '' : '*';
                      })()}
                    </Label>
                    <Select
                      key={`age-${category.id}`}
                      value={(() => {
                        const selectedSkillLevel = skillLevels.find(skill => skill.value === category.skillLevel);
                        const isOpenCategory = selectedSkillLevel && selectedSkillLevel.isOpen;
                        return isOpenCategory ? '' : (category.ageCategory || '');
                      })()}
                      onChange={(e) => updateTournamentCategory(category.id, 'ageCategory', e.target.value)}
                      disabled={(() => {
                        const selectedSkillLevel = skillLevels.find(skill => skill.value === category.skillLevel);
                        return (selectedSkillLevel && selectedSkillLevel.isOpen) || category.division === 'Team';
                      })()}
                      required={(() => {
                        const selectedSkillLevel = skillLevels.find(skill => skill.value === category.skillLevel);
                        return !(selectedSkillLevel && selectedSkillLevel.isOpen) && category.division !== 'Team';
                      })()}
                    >
                      <option value="">
                        {(() => {
                          const selectedSkillLevel = skillLevels.find(skill => skill.value === category.skillLevel);
                          const isOpenCategory = selectedSkillLevel && selectedSkillLevel.isOpen;
                          const isTeamDivision = category.division === 'Team';
                          if (isOpenCategory) return 'N/A for Open categories';
                          if (isTeamDivision) return 'N/A for Team division';
                          return 'Select age category';
                        })()}
                      </option>
                      {ageCategories.map(age => (
                        <option key={age} value={age}>{age}</option>
                      ))}
                    </Select>
                  </FormGroup>
                  
                  <FormGroup>
                    <Label>Participant Limit *</Label>
                    <Select
                      key={`limit-${category.id}`}
                      value={category.maxParticipants || ''}
                      onChange={(e) => updateTournamentCategory(category.id, 'maxParticipants', e.target.value)}
                      required
                    >
                      <option value="">Select participant limit</option>
                      {category.division === 'Team' ? (
                         <>
                           <option value="16">16 teams</option>
                           <option value="20">20 teams</option>
                         </>
                      ) : (
                        <>
                          <option value="16">16 players</option>
                          <option value="20">20 players</option>
                          <option value="24">24 players</option>
                          <option value="28">28 players</option>
                          <option value="32">32 players</option>
                        </>
                      )}
                    </Select>
                  </FormGroup>
                  
                  <FormGroup>
                    <Label>Prize Pool (Optional)</Label>
                    <Input
                      type="number"
                      key={`prize-${category.id}`}
                      value={category.prizePool || ''}
                      onChange={(e) => updateTournamentCategory(category.id, 'prizePool', e.target.value)}
                      placeholder="Enter prize pool amount"
                      min="0"
                      step="100"
                    />
                  </FormGroup>
                </CategoryRow>
              </CategoryBuilder>
            ))}
            
            <AddCategoryButton onClick={addTournamentCategory}>
              <span>➕</span>
              Add More Categories
            </AddCategoryButton>
            
            {formData.tournamentCategories.length > 0 && (
              <CategorySummary>
                <SummaryTitle>Tournament Categories Summary</SummaryTitle>
                <SummaryList>
                  {formData.tournamentCategories.map((category, index) => (
                    <SummaryItem key={category.id}>
                      <strong>Category {index + 1}:</strong> {(() => {
                        const divisionText = category.division || 'Division not selected';
                        const selectedSkillLevel = skillLevels.find(skill => skill.value === category.skillLevel);
                        const skillLevelLabel = selectedSkillLevel?.label || 'Skill level not selected';
                        const limitText = category.maxParticipants ? `(${category.maxParticipants} players)` : '(Limit not set)';
                        const prizeText = category.prizePool ? ` - Prize: ₱${parseInt(category.prizePool).toLocaleString()}` : '';
                        const isOpenCategory = selectedSkillLevel && selectedSkillLevel.isOpen;
                        
                        if (isOpenCategory) {
                          return `${divisionText} - ${skillLevelLabel} ${limitText}${prizeText}`;
                        } else {
                          const ageText = category.ageCategory || 'Age not selected';
                          return `${divisionText} - ${skillLevelLabel} - ${ageText} ${limitText}${prizeText}`;
                        }
                      })()}
                    </SummaryItem>
                  ))}
                </SummaryList>
              </CategorySummary>
            )}
          </FormGroup>
        </FormSection>

        {/* Financial Information */}
        <FormSection>
          <SectionTitle>Financial Information</SectionTitle>
          <FormRow>
            <FormGroup>
              <Label>Entry Fee (Minimum) *</Label>
              <Input
                type="number"
                name="entryFeeMin"
                value={formData.entryFeeMin}
                onChange={handleInputChange}
                placeholder="0.00"
                min="0"
                step="0.01"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Entry Fee (Maximum) - Optional</Label>
              <Input
                type="number"
                name="entryFeeMax"
                value={formData.entryFeeMax}
                onChange={handleInputChange}
                placeholder="0.00 (leave empty for fixed fee)"
                min="0"
                step="0.01"
              />
            </FormGroup>
          </FormRow>
        </FormSection>

{/* Venue Information */}
<FormSection>
  <SectionTitle>Venue Location</SectionTitle>

  {/* Google Map (always visible) */}
  <FormGroup>
    <LoadScript googleMapsApiKey="AIzaSyDTLYs6fgEmKxspHDNzTrKNwQiv5EI4AU8">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={selectedLocation || mapCenter || { lat: 14.5995, lng: 120.9842 }} // default Manila
        zoom={15}
        onClick={(e) => {
          const lat = e.latLng.lat();
          const lng = e.latLng.lng();

          const geocoder = new window.google.maps.Geocoder();
          geocoder.geocode({ location: { lat, lng } }, (results, status) => {
            if (status === "OK" && results[0]) {
              const result = results[0];
              const components = result.address_components;

              const city = components.find((c) => c.types.includes("locality"))?.long_name || "";
              const state = components.find((c) =>
                c.types.includes("administrative_area_level_1")
              )?.short_name || "";
              const zip = components.find((c) => c.types.includes("postal_code"))?.long_name || "";

              const locationData = {
                name: result.formatted_address,
                address: result.formatted_address,
                lat,
                lng,
              };

              setSelectedLocation(locationData);
              setFormData((prev) => ({
                ...prev,
                venueName: locationData.name,
                venueAddress: locationData.address,
                venueCity: city,
                venueState: state,
                venueZip: zip,
              }));
              setMapCenter({ lat, lng });
            } else {
              alert("Could not fetch location. Try again.");
            }
          });
        }}
      >
        {selectedLocation && <Marker position={selectedLocation} />}
      </GoogleMap>
    </LoadScript>
  </FormGroup>

  {/* Show selected location info */}
  {selectedLocation && (
    <>
      <FormGroup>
        <Label>Selected Location</Label>
        <LocationInfo>
          <LocationTitle>{selectedLocation.name || "Custom Location"}</LocationTitle>
          <LocationAddress>
            {selectedLocation.address || `${selectedLocation.lat}, ${selectedLocation.lng}`}
          </LocationAddress>
          <LocationActions>
            <LocationButton variant="primary" onClick={openInGoogleMaps}>
              View in Google Maps
            </LocationButton>
            <LocationButton onClick={clearLocation}>Change Location</LocationButton>
          </LocationActions>
        </LocationInfo>
      </FormGroup>

      <FormGroup>
        <Label>Venue Name (Edit if needed)</Label>
        <Input
          type="text"
          name="venueName"
          value={formData.venueName}
          onChange={handleInputChange}
          placeholder="Enter venue name"
        />
      </FormGroup>

      <FormGroup>
        <Label>City</Label>
        <Input
          type="text"
          name="venueCity"
          value={formData.venueCity}
          onChange={handleInputChange}
          placeholder="City"
        />
      </FormGroup>

      <FormGroup>
        <Label>State</Label>
        <Input
          type="text"
          name="venueState"
          value={formData.venueState}
          onChange={handleInputChange}
          placeholder="State"
        />
      </FormGroup>

      <FormGroup>
        <Label>ZIP Code</Label>
        <Input
          type="text"
          name="venueZip"
          value={formData.venueZip}
          onChange={handleInputChange}
          placeholder="ZIP"
        />
      </FormGroup>
    </>
  )}
</FormSection>



        {/* Contact Information */}
        <FormSection>
          <SectionTitle>Contact Information</SectionTitle>
          <FormRow>
            <FormGroup>
              <Label>Contact Email *</Label>
              <Input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleInputChange}
                placeholder="tournament@example.com"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Contact Phone</Label>
              <Input
                type="tel"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleInputChange}
                placeholder="(555) 123-4567"
              />
            </FormGroup>
          </FormRow>
        </FormSection>

        {/* Payment Proof */}
        <FormSection>
          <SectionTitle>Payment Details</SectionTitle>
          <PaymentInfoBox>

            <PaymentInfoText>
              Upload your bank account information or QR code so players can send their registration payments directly to you.
              </PaymentInfoText>
          </PaymentInfoBox>

          {/* Payment Methods Section */}
          <BankDetailsSection>
 
            
            {formData.paymentMethods.map((paymentMethod, index) => (
              <div key={paymentMethod.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', marginTop: index > 0 ? '32px' : '0' }}>
                  <h4 style={{ color: '#234255', fontWeight: '600', margin: 0 }}>
                    Payment Method {index + 1}
                  </h4>
                  {formData.paymentMethods.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removePaymentMethod(paymentMethod.id)}
                      style={{
                        background: '#ff4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <PaymentMethodsContainer>
                  <BankDetailsBox>
                    <BankDetailsHeader>Bank Transfer Details</BankDetailsHeader>
                    <FormGroup>
                      <Label>Bank Name</Label>
                      <Input
                        type="text"
                        value={paymentMethod.bankName}
                        onChange={(e) => updatePaymentMethod(paymentMethod.id, 'bankName', e.target.value)}
                        placeholder="Enter your bank name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Account Name</Label>
                      <Input
                        type="text"
                        value={paymentMethod.accountName}
                        onChange={(e) => updatePaymentMethod(paymentMethod.id, 'accountName', e.target.value)}
                        placeholder="Enter account holder name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Account Number</Label>
                      <Input
                        type="text"
                        value={paymentMethod.accountNumber}
                        onChange={(e) => updatePaymentMethod(paymentMethod.id, 'accountNumber', e.target.value)}
                        placeholder="Enter your account number"
                      />
                    </FormGroup>
                  </BankDetailsBox>

                  <QRCodeSection>
                    <QRCodeHeader>Quick Payment</QRCodeHeader>
                    <QRCodeContainer>
                      {!paymentMethod.qrCodeImage ? (
                        <QRCodePlaceholder onClick={() => document.getElementById(`qr-code-upload-${paymentMethod.id}`).click()}>
                          <QRCodeIcon>📱</QRCodeIcon>
                          <QRCodeText>Upload QR Code</QRCodeText>
                          <QRCodeSubtext>Click to upload your payment QR code screenshot</QRCodeSubtext>
                        </QRCodePlaceholder>
                      ) : (
                        <div style={{ position: 'relative' }}>
                          <div style={{ position: 'relative' }}>
  <img
    src={
      paymentMethod.qrCodeImage instanceof File
        ? URL.createObjectURL(paymentMethod.qrCodeImage)
        : paymentMethod.qrCodeImage || ''
    }
    alt="QR Code"
    style={{
      width: '100%',
      height: '200px',
      objectFit: 'contain',
      borderRadius: '8px',
      border: '2px solid #e0e0e0'
    }}
  />
</div>

                          <button
                            type="button"
                            onClick={() => removeQRCodeImage(paymentMethod.id)}
                            style={{
                              position: 'absolute',
                              top: '8px',
                              right: '8px',
                              background: 'transparent',
                              color: 'white',
                              border: 'none',
                              cursor: 'pointer',
                              fontSize: '20px',
                              fontWeight: 'bold',
                              textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                              padding: '0',
                              lineHeight: '1'
                            }}
                          >
                            ×
                          </button>
                        </div>
                      )}
                    </QRCodeContainer>
                    <QRCodeInstructions>
                      Upload a screenshot of your payment QR code so players can easily pay registration fees
                    </QRCodeInstructions>
                    <HiddenFileInput
                      id={`qr-code-upload-${paymentMethod.id}`}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleQRCodeUploadForMethod(paymentMethod.id, e)}
                    />
                  </QRCodeSection>
                </PaymentMethodsContainer>
              </div>
            ))}
            
            {formData.paymentMethods.length < 3 && (
              <AddCategoryButton onClick={addPaymentMethod} style={{ marginTop: '16px' }}>
                <span>➕</span>
                Add Another Payment Method
              </AddCategoryButton>
            )}
          </BankDetailsSection>

                  {/* Tournament Guidelines */}
        <FormSection>
          <SectionTitle>Tournament Guidelines</SectionTitle>
          <FormGroup>
            <Label>Rules and Regulations</Label>
            <RichTextContainer>
              <RichTextToolbar>
                <ToolbarButton
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    formatText('bold', rulesEditorRef);
                  }}
                  title="Bold"
                >
                  <strong>B</strong>
                </ToolbarButton>
                <ToolbarButton
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    formatText('italic', rulesEditorRef);
                  }}
                  title="Italic"
                >
                  <em>I</em>
                </ToolbarButton>
                <ToolbarButton
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    insertBulletList(rulesEditorRef);
                  }}
                  title="Bullet List"
                >
                  • List
                </ToolbarButton>
              </RichTextToolbar>
              <RichTextEditor
                ref={rulesEditorRef}
                contentEditable
                suppressContentEditableWarning={true}
                data-placeholder="Specify any special rules or regulations for your tournament. Use the toolbar above to format your text."
                onInput={() => handleRichTextInput('rules', rulesEditorRef)}
                onBlur={() => handleRichTextChange('rules', rulesEditorRef)}
                onKeyDown={(e) => handleKeyDown(e, 'rules', rulesEditorRef)}
              />
            </RichTextContainer>
          </FormGroup>
        </FormSection>

        {/* Tournament Events */}
        <FormSection>
          <SectionTitle>Tournament Events</SectionTitle>
          <FormGroup>
            <Label>Event Schedule and Activities</Label>
            <RichTextContainer>
              <RichTextToolbar>
                <ToolbarButton
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    formatText('bold', eventsEditorRef);
                  }}
                  title="Bold"
                >
                  <strong>B</strong>
                </ToolbarButton>
                <ToolbarButton
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    formatText('italic', eventsEditorRef);
                  }}
                  title="Italic"
                >
                  <em>I</em>
                </ToolbarButton>
                <ToolbarButton
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    insertBulletList(eventsEditorRef);
                  }}
                  title="Bullet List"
                >
                  • List
                </ToolbarButton>
              </RichTextToolbar>
              <RichTextEditor
                ref={eventsEditorRef}
                contentEditable
                suppressContentEditableWarning={true}
                data-placeholder="Describe the tournament events, schedule, and activities that will take place. Use the toolbar above to format your text."
                onInput={() => handleRichTextInput('events', eventsEditorRef)}
                onBlur={() => handleRichTextChange('events', eventsEditorRef)}
                onKeyDown={(e) => handleKeyDown(e, 'events', eventsEditorRef)}
              />
            </RichTextContainer>
          </FormGroup>
        </FormSection>

        </FormSection>

        <ButtonGroup>
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
          <Button 
            type="submit" 
            variant="primary" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Tournament'}
          </Button>
        </ButtonGroup>
      </FormContainer>
    </HostTournamentContainer>
  );
};

export default HostTournament;