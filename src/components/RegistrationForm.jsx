import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import PlayerSearchDropdown from './PlayerSearchDropdown';
import apiClient from '../utils/axiosConfig';

// Styled Components
const ModalOverlay = styled.div`
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
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  padding: 24px 24px 0;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h2`
  color: #1e293b;
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #64748b;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  
  &:hover {
    background: #f1f5f9;
    color: #475569;
  }
`;

const ModalBody = styled.div`
  padding: 24px;
`;

const FormSection = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  color: #1e293b;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  color: #374151;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  color: #1e293b;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  color: #1e293b;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  color: #1e293b;
  transition: all 0.2s;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &::placeholder {
    color: #94a3b8;
  }
`;

const CategoryCard = styled.div`
  border: 2px solid ${props => props.selected ? '#29ba9b' : '#e2e8f0'};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  cursor: pointer;
  background: ${props => props.selected ? '#f0fdfa' : 'white'};
  transition: all 0.2s;
  
  &:hover {
    border-color: #29ba9b;
    background: #f0fdfa;
  }
`;

const CategoryTitle = styled.div`
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
`;

const CategoryDetails = styled.div`
  font-size: 14px;
  color: #64748b;
  margin-bottom: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e2e8f0;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  
  ${props => props.variant === 'primary' ? `
    background: #29ba9b;
    color: white;
    
    &:hover {
      background: #239b83;
    }
    
    &:disabled {
      background: #94a3b8;
      cursor: not-allowed;
    }
  ` : `
    background: #f8fafc;
    color: #64748b;
    border: 1px solid #e2e8f0;
    
    &:hover {
      background: #f1f5f9;
      color: #475569;
    }
  `}
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 14px;
  margin-top: 4px;
`;

const SuccessMessage = styled.div`
  color: #10b981;
  font-size: 14px;
  margin-top: 4px;
`;

const FileInputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const FileInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const FileInputButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
  color: #64748b;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #29ba9b;
    background: #f0fdfa;
    color: #065f46;
  }
  
  &.has-file {
    border-color: #29ba9b;
    background: #f0fdfa;
    color: #065f46;
    border-style: solid;
  }
`;

const FileInfo = styled.div`
  margin-top: 8px;
  padding: 8px 12px;
  background: #f0fdfa;
  border: 1px solid #29ba9b;
  border-radius: 6px;
  font-size: 14px;
  color: #065f46;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemoveFileButton = styled.button`
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  font-size: 12px;
  padding: 2px 4px;
  border-radius: 4px;
  
  &:hover {
    background: #fef2f2;
  }
`;

const RegistrationForm = ({ tournament, onClose }) => {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: '',
    duprId: user?.duprId || '',
    emergencyContact: '',
    emergencyPhone: '',
    medicalConditions: '',
    additionalNotes: '',
    teamName: '',
    teamMembers: []
  });
  const [teamMembers, setTeamMembers] = useState({
    males: [null, null, null], // First 2 required, 3rd optional (substitute)
    females: [null, null, null] // First 2 required, 3rd optional (substitute)
  });
  const [partner, setPartner] = useState(null); // For doubles categories
  const [proofOfPayment, setProofOfPayment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Get the selected category details
  const selectedCategoryDetails = tournament.tournamentCategories?.find(
    cat => cat._id === selectedCategory
  );
  const isTeamCategory = selectedCategoryDetails?.division?.toLowerCase() === 'team';
  const isDoublesCategory = selectedCategoryDetails?.division?.toLowerCase().includes('doubles');

  // Initialize team members when user data is available
  useEffect(() => {
    if (user && isTeamCategory) {
      const userGender = user.gender?.toLowerCase();
      if (userGender === 'male') {
        setTeamMembers(prev => ({
          ...prev,
          males: [user, null, null]
        }));
      } else if (userGender === 'female') {
        setTeamMembers(prev => ({
          ...prev,
          females: [user, null, null]
        }));
      }
    }
  }, [user, isTeamCategory]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTeamMemberChange = (gender, index, value) => {
    setTeamMembers(prev => ({
      ...prev,
      [gender]: prev[gender].map((member, i) => i === index ? value : member)
    }));
  };

  const handleTeamMemberSelect = (gender, index, player) => {
    // Check if player is already selected
    const allSelected = [...teamMembers.males, ...teamMembers.females];
    const isAlreadySelected = allSelected.some(member => 
      member && member._id === player._id
    );

    if (isAlreadySelected) {
      setError(`${player.firstName} ${player.lastName} is already selected as a team member`);
      return;
    }

    // Clear any previous error
    setError('');

    setTeamMembers(prev => ({
      ...prev,
      [gender]: prev[gender].map((member, i) => i === index ? player : member)
    }));
  };

  // Get all selected players to exclude from search
  const getSelectedPlayers = () => {
    const allSelected = [...teamMembers.males, ...teamMembers.females];
    return allSelected.filter(player => player !== null).map(player => player._id);
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        setError('Please upload a valid file (JPEG, PNG, GIF, or PDF)');
        return;
      }

      // Validate file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        setError('File size must be less than 5MB');
        return;
      }

      setProofOfPayment(file);
      setError(''); // Clear any previous errors
    }
  };

  const removeFile = () => {
    setProofOfPayment(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedCategory) {
      setError('Please select a tournament category');
      return;
    }

    if (!formData.phone || !formData.emergencyContact || !formData.emergencyPhone) {
      setError('Please fill in all required fields');
      return;
    }

    // Validate team composition for team categories
    if (isTeamCategory) {
      if (!formData.teamName.trim()) {
        setError('Please enter a team name');
        return;
      }

      // Check minimum required team members (2 males + 2 females)
      const filledMales = teamMembers.males.filter(member => member !== null).length;
      const filledFemales = teamMembers.females.filter(member => member !== null).length;

      // Check if we have at least 2 males and 2 females
      if (filledMales < 2) {
        setError('Please select at least 2 male team members (required)');
        return;
      }

      if (filledFemales < 2) {
        setError('Please select at least 2 female team members (required)');
        return;
      }

      // Optional: Check if substitutes are properly filled (if any)
      // If 3rd position is filled, it should be a valid player
      if (teamMembers.males[2] === undefined || teamMembers.females[2] === undefined) {
        setError('Invalid team member selection');
        return;
      }
    }

    // Validate partner selection for doubles categories
    if (isDoublesCategory) {
      if (!partner) {
        setError('Please select a partner for this doubles category');
        return;
      }
    }

    // Validate proof of payment is required
    if (!proofOfPayment) {
      setError('Please upload proof of payment');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Create FormData for file upload
      const formDataToSubmit = new FormData();
      
      // Add basic form data
      formDataToSubmit.append('tournamentId', tournament._id);
      formDataToSubmit.append('category', selectedCategory);
      
      // Add required player information
      formDataToSubmit.append('playerName', `${formData.firstName} ${formData.lastName}`);
      formDataToSubmit.append('playerEmail', formData.email);
      formDataToSubmit.append('playerPhone', formData.phone);
      formDataToSubmit.append('emergencyContact', formData.emergencyContact);
      formDataToSubmit.append('emergencyPhone', formData.emergencyPhone);
      
      // Add other form fields
      Object.keys(formData).forEach(key => {
        if (formData[key] && !['firstName', 'lastName', 'email', 'phone', 'emergencyContact', 'emergencyPhone'].includes(key)) {
          formDataToSubmit.append(key, formData[key]);
        }
      });

      // Add team members if it's a team category
      if (isTeamCategory) {
        const teamMemberIds = [
          ...teamMembers.males.filter(member => member !== null && member !== '').map(member => member._id),
          ...teamMembers.females.filter(member => member !== null && member !== '').map(member => member._id)
        ].filter(id => id && id !== ''); // Additional filter to remove any empty strings
        
        // Send each team member ID individually to FormData
        teamMemberIds.forEach((id, index) => {
          formDataToSubmit.append(`teamMembers[${index}]`, id);
        });
      }

      // Add partner if it's a doubles category
      if (isDoublesCategory && partner) {
        formDataToSubmit.append('partnerId', partner._id);
      }

      // Add proof of payment file if uploaded
      if (proofOfPayment) {
        formDataToSubmit.append('proofOfPayment', proofOfPayment);
      }

      const response = await apiClient.post('/tournaments/register', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const data = response.data;

      setSuccess('Registration submitted successfully! You will receive a confirmation email shortly.');
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (err) {
      console.error('Registration error:', err);
      console.error('Error response:', err.response?.data);
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Register for {tournament.tournamentName}</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

        <ModalBody>
          <form onSubmit={handleSubmit}>
            {/* Tournament Categories */}
            <FormSection>
              <SectionTitle>Select Tournament Category</SectionTitle>
              {tournament.tournamentCategories?.filter(category => {
                // Filter categories based on user gender
                if (!user?.gender) return true; // Show all if gender not specified
                
                const userGender = user.gender.toLowerCase();
                const division = category.division.toLowerCase();
                
                if (userGender === 'female') {
                  // Women can only join Women's Singles, Women's Doubles, Mixed Doubles, and Team
                  return division.includes("women's") || 
                         division.includes("mixed") || 
                         division === "team";
                } else if (userGender === 'male') {
                  // Men can join any category
                  return true;
                }
                
                return true; // Default: show all categories
              }).map(category => (
                <CategoryCard
                  key={category._id}
                  selected={selectedCategory === category._id}
                  onClick={() => handleCategorySelect(category._id)}
                >
                  <CategoryTitle>{category.division}</CategoryTitle>
                  <CategoryDetails>
                    <strong>Skill Level:</strong> {category.skillLevel.toLowerCase() === 'open' ? `Open - Tier ${category.tier || 1}` : category.skillLevel}
                  </CategoryDetails>
                  {category.ageCategory && (
                    <CategoryDetails>
                      <strong>Age Category:</strong> {category.ageCategory}
                    </CategoryDetails>
                  )}
                  <CategoryDetails>
                    <strong>Max Participants:</strong> {category.maxParticipants}
                  </CategoryDetails>
                  {category.entryFee && (
                    <CategoryDetails>
                      <strong>Entry Fee:</strong> ₱{category.entryFee}
                    </CategoryDetails>
                  )}
                </CategoryCard>
              ))}
            </FormSection>

            {/* Personal Information */}
            <FormSection>
              <SectionTitle>Personal Information</SectionTitle>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <FormGroup>
                  <Label>First Name *</Label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    disabled={!!user?.firstName}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Last Name *</Label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    disabled={!!user?.lastName}
                  />
                </FormGroup>
              </div>

              <FormGroup>
                <Label>Email *</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={!!user?.email}
                />
              </FormGroup>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <FormGroup>
                  <Label>Phone Number *</Label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>DUPR ID</Label>
                  <Input
                    type="text"
                    name="duprId"
                    value={formData.duprId}
                    onChange={handleInputChange}
                    placeholder="Your DUPR ID (optional)"
                  />
                </FormGroup>
              </div>
            </FormSection>

            {/* Partner Selection - Only show for Doubles categories */}
            {isDoublesCategory && (
              <FormSection>
                <SectionTitle>Partner Selection</SectionTitle>
                
                <div style={{ 
                  background: '#f0fdfa', 
                  padding: '16px', 
                  borderRadius: '8px',
                  border: '1px solid #29ba9b',
                  marginBottom: '16px'
                }}>
                  <p style={{ margin: 0, color: '#065f46', fontSize: '14px', fontWeight: '500' }}>
                    Partner Required: You must select a partner to register for this doubles category.
                  </p>
                </div>

                <FormGroup>
                  <Label>Select Your Partner *</Label>
                  <PlayerSearchDropdown
                    gender={selectedCategoryDetails?.division?.toLowerCase().includes("women's") ? 'female' : 
                           selectedCategoryDetails?.division?.toLowerCase().includes("men's") ? 'male' : 
                           'any'}
                    placeholder="Search and select your partner"
                    selectedPlayer={partner}
                    onPlayerSelect={setPartner}
                    excludePlayerIds={user ? [user._id] : []}
                  />
                </FormGroup>
              </FormSection>
            )}

            {/* Team Information - Only show for Team categories */}
            {isTeamCategory && (
              <FormSection>
                <SectionTitle>Team Information</SectionTitle>
                
                <FormGroup>
                  <Label>Team Name *</Label>
                  <Input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleInputChange}
                    placeholder="Enter your team name"
                    required={isTeamCategory}
                  />
                </FormGroup>

                <div style={{ 
                  background: '#f0fdfa', 
                  padding: '16px', 
                  borderRadius: '8px',
                  border: '1px solid #29ba9b',
                  marginBottom: '16px'
                }}>
                  <p style={{ margin: 0, color: '#065f46', fontSize: '14px', fontWeight: '500' }}>
                    Team Composition: Your team must have 2 male and 2 female players (including yourself). You may optionally add 1 male and 1 female substitute.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <Label>Male Team Members (including you: {user?.gender?.toLowerCase() === 'male' ? '1/2' : '0/2'})</Label>
                    {[0, 1, 2].map(index => (
                      <FormGroup key={`male-${index}`}>
                        {user?.gender?.toLowerCase() === 'male' && index === 0 ? (
                          <Input
                            type="text"
                            value={`${user.firstName} ${user.lastName} (You)`}
                            disabled
                          />
                        ) : (
                          <PlayerSearchDropdown
                            gender="male"
                            placeholder={index < 2 ? `Select male member ${index + 1} (Required)` : `Select male substitute (Optional)`}
                            selectedPlayer={teamMembers.males[index]}
                            onPlayerSelect={(player) => handleTeamMemberSelect('males', index, player)}
                            excludePlayerIds={getSelectedPlayers()}
                          />
                        )}
                      </FormGroup>
                    ))}
                  </div>

                  <div>
                    <Label>Female Team Members (including you: {user?.gender?.toLowerCase() === 'female' ? '1/2' : '0/2'})</Label>
                    {[0, 1, 2].map(index => (
                      <FormGroup key={`female-${index}`}>
                        {user?.gender?.toLowerCase() === 'female' && index === 0 ? (
                          <Input
                            type="text"
                            value={`${user.firstName} ${user.lastName} (You)`}
                            disabled
                          />
                        ) : (
                          <PlayerSearchDropdown
                            gender="female"
                            placeholder={index < 2 ? `Select female member ${index + 1} (Required)` : `Select female substitute (Optional)`}
                            selectedPlayer={teamMembers.females[index]}
                            onPlayerSelect={(player) => handleTeamMemberSelect('females', index, player)}
                            excludePlayerIds={getSelectedPlayers()}
                          />
                        )}
                      </FormGroup>
                    ))}
                  </div>
                </div>
              </FormSection>
            )}

            {/* Emergency Contact */}
            <FormSection>
              <SectionTitle>Emergency Contact</SectionTitle>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <FormGroup>
                  <Label>Emergency Contact Name *</Label>
                  <Input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    placeholder="Full name"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Emergency Contact Phone *</Label>
                  <Input
                    type="tel"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    required
                  />
                </FormGroup>
              </div>
            </FormSection>

            {/* Additional Information */}
            <FormSection>
              <SectionTitle>Additional Information</SectionTitle>
              
              <FormGroup>
                <Label>Medical Conditions or Allergies</Label>
                <TextArea
                  name="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={handleInputChange}
                  placeholder="Please list any medical conditions, allergies, or medications we should be aware of (optional)"
                />
              </FormGroup>

              <FormGroup>
                <Label>Additional Notes</Label>
                <TextArea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  placeholder="Any additional information or special requests (optional)"
                />
              </FormGroup>
            </FormSection>

             {/* Payment Methods */}
             {tournament.paymentMethods && tournament.paymentMethods.length > 0 && (
               <FormSection>
                 <SectionTitle>Payment Methods</SectionTitle>
                 <div style={{ 
                   background: '#f0f9ff', 
                   padding: '16px', 
                   borderRadius: '8px',
                   border: '1px solid #0ea5e9',
                   marginBottom: '16px'
                 }}>
                   <p style={{ 
                     margin: '0 0 12px 0', 
                     color: '#0369a1', 
                     fontWeight: '600',
                     fontSize: '14px'
                   }}>
                     💳 Available Payment Methods
                   </p>
                   <p style={{ 
                     margin: 0, 
                     color: '#0369a1', 
                     fontSize: '13px',
                     lineHeight: '1.4'
                   }}>
                     Please use one of the following payment methods to complete your registration:
                   </p>
                 </div>
                 
                 <div style={{ display: 'grid', gap: '16px' }}>
                   {tournament.paymentMethods.map((paymentMethod, index) => (
                     <div 
                       key={index}
                       style={{
                         background: '#f8fafc',
                         border: '1px solid #e2e8f0',
                         borderRadius: '8px',
                         padding: '16px'
                       }}
                     >
                       <div style={{ 
                         display: 'grid', 
                         gridTemplateColumns: paymentMethod.qrCodeImage ? '1fr auto' : '1fr',
                         gap: '16px',
                         alignItems: 'start'
                       }}>
                         <div>
                           <h4 style={{ 
                             margin: '0 0 12px 0', 
                             color: '#1e293b', 
                             fontSize: '16px',
                             fontWeight: '600'
                           }}>
                             Payment Method {index + 1}
                           </h4>
                           
                           {paymentMethod.bankName && (
                             <div style={{ marginBottom: '8px' }}>
                               <strong style={{ color: '#475569' }}>Bank:</strong>
                               <span style={{ marginLeft: '8px', color: '#64748b' }}>
                                 {paymentMethod.bankName}
                               </span>
                             </div>
                           )}
                           
                           {paymentMethod.accountName && (
                             <div style={{ marginBottom: '8px' }}>
                               <strong style={{ color: '#475569' }}>Account Name:</strong>
                               <span style={{ marginLeft: '8px', color: '#64748b' }}>
                                 {paymentMethod.accountName}
                               </span>
                             </div>
                           )}
                           
                           {paymentMethod.accountNumber && (
                             <div style={{ marginBottom: '8px' }}>
                               <strong style={{ color: '#475569' }}>Account Number:</strong>
                               <span style={{ 
                                 marginLeft: '8px', 
                                 color: '#64748b',
                                 fontFamily: 'monospace',
                                 fontSize: '14px',
                                 background: '#e2e8f0',
                                 padding: '2px 6px',
                                 borderRadius: '4px'
                               }}>
                                 {paymentMethod.accountNumber}
                               </span>
                             </div>
                           )}
                         </div>
                         
                         {paymentMethod.qrCodeImage && (
                           <div style={{ textAlign: 'center' }}>
                             <p style={{ 
                               margin: '0 0 8px 0', 
                               fontSize: '12px', 
                               color: '#64748b',
                               fontWeight: '500'
                             }}>
                               QR Code
                             </p>
                             <img 
                               src={`http://localhost:5000${paymentMethod.qrCodeImage}`}
                               alt={`QR Code for ${paymentMethod.bankName || 'Payment Method'}`}
                               style={{
                                 width: '120px',
                                 height: '120px',
                                 objectFit: 'contain',
                                 border: '1px solid #d1d5db',
                                 borderRadius: '8px',
                                 background: 'white'
                               }}
                             />
                           </div>
                         )}
                       </div>
                     </div>
                   ))}
                 </div>
               </FormSection>
             )}

             {/* Proof of Payment */}
             <FormSection>
               <SectionTitle>Proof of Payment</SectionTitle>
               
               <FormGroup>
                 <Label>Upload Proof of Payment *</Label>
                 <FileInputContainer>
                   <FileInput
                     type="file"
                     accept="image/*,.pdf"
                     onChange={handleFileChange}
                   />
                   <FileInputButton className={proofOfPayment ? 'has-file' : ''}>
                     <span>📎</span>
                     {proofOfPayment ? 'File Selected' : 'Choose File'}
                   </FileInputButton>
                 </FileInputContainer>
                 
                 {proofOfPayment && (
                   <FileInfo>
                     <span>{proofOfPayment.name} ({(proofOfPayment.size / 1024 / 1024).toFixed(2)} MB)</span>
                     <RemoveFileButton onClick={removeFile}>Remove</RemoveFileButton>
                   </FileInfo>
                 )}
                 
                 <div style={{ 
                   fontSize: '12px', 
                   color: '#64748b', 
                   marginTop: '4px' 
                 }}>
                   Accepted formats: JPEG, PNG, GIF, PDF (Max 5MB)
                 </div>
               </FormGroup>
             </FormSection>

             {/* Registration Instructions */}
             {tournament.registrationInstructions && (
               <FormSection>
                 <SectionTitle>Registration Instructions</SectionTitle>
                 <div style={{ 
                   background: '#f8fafc', 
                   padding: '16px', 
                   borderRadius: '8px',
                   border: '1px solid #e2e8f0'
                 }}>
                   <p style={{ margin: 0, color: '#475569', lineHeight: '1.5' }}>
                     {tournament.registrationInstructions}
                   </p>
                 </div>
               </FormSection>
             )}

             {error && <ErrorMessage>{error}</ErrorMessage>}
             {success && <SuccessMessage>{success}</SuccessMessage>}

             <ButtonGroup>
               <Button type="button" onClick={onClose}>
                 Cancel
               </Button>
               <Button 
                 type="submit" 
                 variant="primary" 
                 disabled={loading || success}
               >
                 {loading ? 'Submitting...' : 'Submit Registration'}
               </Button>
             </ButtonGroup>
           </form>
         </ModalBody>
       </ModalContent>
     </ModalOverlay>
   );
 };
 
 export default RegistrationForm;