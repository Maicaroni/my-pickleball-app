import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

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
  font-size: 2.2rem;
  font-weight: 700;
  color: #234255;
  margin-bottom: 12px;
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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
  
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

const HostTournament = () => {
  const { user, showNotification } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    tournamentName: '',
    description: '',
    startDate: '',
    endDate: '',
    registrationDeadline: '',
    category: '',
    skillLevel: '',
    maxParticipants: '',
    entryFee: '',
    prizePool: '',
    venueName: '',
    venueAddress: '',
    venueCity: '',
    venueState: '',
    venueZip: '',
    contactEmail: '',
    contactPhone: '',
    rules: '',
    additionalInfo: '',
    tournamentCategories: []
  });
  
  const [paymentProof, setPaymentProof] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);

  // Initialize with one empty category
  useEffect(() => {
    if (formData.tournamentCategories.length === 0) {
      const newCategory = {
        id: Date.now(),
        division: '',
        ageCategory: '',
        skillLevel: ''
      };
      
      setFormData(prev => ({
        ...prev,
        tournamentCategories: [newCategory]
      }));
    }
  }, []);

  const divisions = [
    'Men\'s Singles',
    'Women\'s Singles', 
    'Men\'s Doubles',
    'Women\'s Doubles',
    'Mixed Doubles'
  ];

  const ageCategories = [
    '18+',
    '35+',
    '50+'
  ];

  const skillLevels = [
    { value: 'beginner', label: 'Beginner', description: 'New to pickleball, learning basic rules and techniques' },
    { value: 'intermediate', label: 'Intermediate', description: 'Perfect for developing players' },
    { value: 'advanced', label: 'Advanced', description: 'Competitive players with solid fundamentals' },
    { value: 'open-tier-1', label: 'Open - Tier 1', description: 'Entry level competitive play' },
    { value: 'open-tier-2', label: 'Open - Tier 2', description: 'Intermediate competitive play' },
    { value: 'open-tier-3', label: 'Open - Tier 3', description: 'Advanced competitive play' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
      
      setPaymentProof(file);
    }
  };

  const removeFile = () => {
    setPaymentProof(null);
  };

  const handleMapClick = () => {
    setShowMap(true);
    // Simulate opening Google Maps for location selection
    // In a real implementation, this would integrate with Google Maps API
    setTimeout(() => {
      const mockLocation = {
        name: "Riverside Pickleball Complex",
        address: "123 Tournament Drive, Riverside, CA 92501",
        lat: 33.9533,
        lng: -117.3962
      };
      setSelectedLocation(mockLocation);
      setFormData(prev => ({
        ...prev,
        venueName: mockLocation.name,
        venueAddress: mockLocation.address,
        venueCity: "Riverside",
        venueState: "CA",
        venueZip: "92501"
      }));
      setShowMap(false);
      // Removed notification as location selection should be silent
    }, 2000);
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
      skillLevel: ''
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
      const updatedCategories = prev.tournamentCategories.map(cat =>
        cat.id === categoryId ? { ...cat, [field]: value } : cat
      );
      return {
        ...prev,
        tournamentCategories: updatedCategories
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    const requiredFields = [
      'tournamentName', 'description', 'startDate', 'endDate', 
      'registrationDeadline', 'category', 'skillLevel', 'maxParticipants',
      'entryFee', 'venueName', 'venueAddress', 'venueCity', 'contactEmail'
    ];

    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      showNotification('Please fill in all required fields', 'error');
      setIsSubmitting(false);
      return;
    }

    if (formData.tournamentCategories.length === 0) {
      showNotification('Please add at least one tournament category', 'error');
      setIsSubmitting(false);
      return;
    }

    // Validate that all tournament categories are complete
    const incompleteCategories = formData.tournamentCategories.filter(cat => 
      !cat.division || !cat.ageCategory || !cat.skillLevel
    );
    
    if (incompleteCategories.length > 0) {
      showNotification('Please complete all tournament category fields (Division, Age Category, Skill Level)', 'error');
      setIsSubmitting(false);
      return;
    }

    if (!paymentProof) {
      showNotification('Please upload proof of payment', 'error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      showNotification('Tournament submission successful! Your tournament is pending admin approval.', 'success');
      navigate('/profile');
    } catch (error) {
      showNotification('Failed to submit tournament. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  if (!user) {
    return (
      <HostTournamentContainer>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h2 style={{ color: '#234255', marginBottom: '16px' }}>Sign in required</h2>
          <p style={{ color: '#6b7280', marginBottom: '20px' }}>You need to be logged in to host a tournament.</p>
          <Button variant="primary" onClick={() => navigate('/signin')}>
            Sign In
          </Button>
        </div>
      </HostTournamentContainer>
    );
  }

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
          <FormGroup>
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
          
          <FormGroup>
            <Label>Description *</Label>
            <TextArea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your tournament, format, and any special features"
              required
            />
          </FormGroup>
        </FormSection>

        {/* Tournament Details */}
        <FormSection>
          <SectionTitle>Tournament Details</SectionTitle>
          <FormRow>
            <FormGroup>
              <Label>Start Date *</Label>
              <Input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>End Date *</Label>
              <Input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
          </FormRow>

          <FormRow>
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
              <Label>Max Participants *</Label>
              <Input
                type="number"
                name="maxParticipants"
                value={formData.maxParticipants}
                onChange={handleInputChange}
                placeholder="e.g., 24"
                min="1"
                max="24"
                required
              />
            </FormGroup>
          </FormRow>

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
                    <Label>Age Category *</Label>
                    <Select
                      key={`age-${category.id}`}
                      value={category.ageCategory || ''}
                      onChange={(e) => updateTournamentCategory(category.id, 'ageCategory', e.target.value)}
                      required
                    >
                      <option value="">Select age category</option>
                      {ageCategories.map(age => (
                        <option key={age} value={age}>{age}</option>
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
                      {skillLevels.map(level => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </Select>
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
                      <strong>Category {index + 1}:</strong> {category.division} - {category.ageCategory} - {category.skillLevel ? skillLevels.find(s => s.value === category.skillLevel)?.label : 'Not selected'}
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
              <Label>Entry Fee *</Label>
              <Input
                type="number"
                name="entryFee"
                value={formData.entryFee}
                onChange={handleInputChange}
                placeholder="0.00"
                min="0"
                step="0.01"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Prize Pool (Optional)</Label>
              <Input
                type="number"
                name="prizePool"
                value={formData.prizePool}
                onChange={handleInputChange}
                placeholder="0.00"
                min="0"
                step="0.01"
              />
            </FormGroup>
          </FormRow>
        </FormSection>

        {/* Venue Information */}
        <FormSection>
          <SectionTitle>Venue Location</SectionTitle>
          
          {!selectedLocation ? (
            <FormGroup>
              <Label>Select Tournament Location *</Label>
              <MapContainer>
                {showMap ? (
                  <MapPlaceholder>
                    <MapIcon>🗺️</MapIcon>
                    <MapText>Loading Google Maps...</MapText>
                    <MapSubtext>Please wait while we load the map for location selection</MapSubtext>
                  </MapPlaceholder>
                ) : (
                  <MapPlaceholder onClick={handleMapClick}>
                    <MapIcon>📍</MapIcon>
                    <MapText>Pin Your Tournament Location</MapText>
                    <MapSubtext>Click here to open Google Maps and select your tournament venue location</MapSubtext>
                  </MapPlaceholder>
                )}
              </MapContainer>
            </FormGroup>
          ) : (
            <FormGroup>
              <Label>Selected Location</Label>
              <LocationInfo>
                <LocationTitle>{selectedLocation.name}</LocationTitle>
                <LocationAddress>{selectedLocation.address}</LocationAddress>
                <LocationActions>
                  <LocationButton variant="primary" onClick={openInGoogleMaps}>
                    View in Google Maps
                  </LocationButton>
                  <LocationButton onClick={clearLocation}>
                    Change Location
                  </LocationButton>
                </LocationActions>
              </LocationInfo>
            </FormGroup>
          )}

          {/* Manual entry option for venue name if needed */}
          {selectedLocation && (
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

        {/* Tournament Rules */}
        <FormSection>
          <SectionTitle>Tournament Rules</SectionTitle>
          <FormGroup>
            <TextArea
              name="rules"
              value={formData.rules}
              onChange={handleInputChange}
              placeholder="Specify any special rules or regulations for your tournament"
            />
          </FormGroup>
        </FormSection>

        {/* Payment Proof */}
        <FormSection>
          <SectionTitle>Payment Verification</SectionTitle>
          <PaymentInfoBox>
            <PaymentInfoTitle>Tournament Hosting Fee Required</PaymentInfoTitle>
            <PaymentInfoText>
              A hosting fee is required to submit your tournament for approval. 
              Please upload proof of payment (receipt, bank transfer confirmation, etc.) 
              to complete your submission.
            </PaymentInfoText>
          </PaymentInfoBox>

          {/* Bank Details Section */}
          <BankDetailsSection>
            <BankDetailsTitle>Payment Information</BankDetailsTitle>
            <PaymentMethodsContainer>
              <BankDetailsBox>
                 <BankDetailsHeader>Bank Transfer Details</BankDetailsHeader>
                 <BankDetail>
                   <BankDetailLabel>Bank Name:</BankDetailLabel>
                   <BankDetailValue>-</BankDetailValue>
                 </BankDetail>
                 <BankDetail>
                   <BankDetailLabel>Account Name:</BankDetailLabel>
                   <BankDetailValue>-</BankDetailValue>
                 </BankDetail>
                 <BankDetail>
                   <BankDetailLabel>Account Number:</BankDetailLabel>
                   <BankDetailValue>-</BankDetailValue>
                 </BankDetail>
                 <BankDetail>
                   <BankDetailLabel>Routing Number:</BankDetailLabel>
                   <BankDetailValue>-</BankDetailValue>
                 </BankDetail>
                 <BankDetail>
                   <BankDetailLabel>Reference:</BankDetailLabel>
                   <BankDetailValue>-</BankDetailValue>
                 </BankDetail>
               </BankDetailsBox>

              <QRCodeSection>
                 <QRCodeHeader>Quick Payment</QRCodeHeader>
                 <QRCodeContainer>
                   <QRCodePlaceholder>
                     <QRCodeIcon>📱</QRCodeIcon>
                     <QRCodeText>QR Code</QRCodeText>
                     <QRCodeSubtext>Payment Details</QRCodeSubtext>
                   </QRCodePlaceholder>
                 </QRCodeContainer>
                 <QRCodeInstructions>
                   Scan with your banking app or payment service to pay the hosting fee instantly
                 </QRCodeInstructions>
               </QRCodeSection>
            </PaymentMethodsContainer>
          </BankDetailsSection>

          <FormGroup>
            <Label>Upload Proof of Payment *</Label>
            {!paymentProof ? (
              <FileUploadArea onClick={() => document.getElementById('payment-upload').click()}>
                <FileUploadIcon>📄</FileUploadIcon>
                <FileUploadText>Click to upload payment proof</FileUploadText>
                <FileUploadSubtext>JPG, PNG, or PDF (max 5MB)</FileUploadSubtext>
              </FileUploadArea>
            ) : (
              <UploadedFile>
                <FileName>{paymentProof.name}</FileName>
                <RemoveFileButton onClick={removeFile}>×</RemoveFileButton>
              </UploadedFile>
            )}
            <HiddenFileInput
              id="payment-upload"
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={handleFileUpload}
            />
          </FormGroup>
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