import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import apiClient from '../utils/axiosConfig';
import { message } from 'antd';

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

const SettingsContent = styled.div`
  flex: 1;
  padding: 50px 20px 40px 20px;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 20px 15px 80px 15px;
  }
  
  @media (max-width: 480px) {
    padding: 15px 10px 80px 10px;
  }
`;

const PageHeader = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #234255;
  margin: 0 0 12px 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.1rem;
  color: #64748b;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SettingsGrid = styled.div`
  display: grid;
  gap: 32px;
  max-width: 800px;
  margin: 0 auto;
`;

const SettingsSection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f5f9;
  
  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 12px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #234255;
  margin: 0 0 8px 0;
  position: relative;
  padding-bottom: 12px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: #29ba9b;
    border-radius: 2px;
  }
`;

const SectionDescription = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  margin: 0 0 24px 0;
  line-height: 1.5;
`;

const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FormLabel = styled.label`
  font-weight: 500;
  color: #374151;
  font-size: 0.9rem;
`;

const FormInput = styled.input`
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

const FormSelect = styled.select`
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

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ToggleLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ToggleTitle = styled.span`
  font-weight: 500;
  color: #374151;
  font-size: 0.95rem;
`;

const ToggleDescription = styled.span`
  font-size: 0.85rem;
  color: #64748b;
`;

const Toggle = styled.button`
  position: relative;
  width: 48px;
  height: 24px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.$enabled ? '#29ba9b' : '#e2e8f0'};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${props => props.$enabled ? '26px' : '2px'};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const SaveButton = styled.button`
  padding: 14px 28px;
  background: #29ba9b;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
  align-self: flex-start;
  
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

const DangerZone = styled.div`
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 20px;
  background: #fef2f2;
`;

const DangerTitle = styled.h3`
  color: #dc2626;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 8px 0;
`;

const DangerDescription = styled.p`
  color: #7f1d1d;
  font-size: 0.9rem;
  margin: 0 0 16px 0;
`;

const DangerButton = styled.button`
  padding: 12px 24px;
  background: #dc2626;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  
  &:hover:not(:disabled) {
    background: #b91c1c;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    transform: none;
  }
`;

const Settings = () => {
  const { user, updateUserProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    tournamentUpdates: true,
    matchReminders: true,
    language: 'en',
    timezone: 'Asia/Manila',
    privacy: 'public'
  });

  const [profileSettings, setProfileSettings] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    duprId: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    }
  });

  useEffect(() => {
    if (user) {
      setProfileSettings({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || '',
        duprId: user.duprId || '',
        address: {
          street: user.address?.street || '',
          city: user.address?.city || '',
          state: user.address?.state || '',
          zipCode: user.address?.zipCode || ''
        }
      });
    }
  }, [user]);

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleInputChange = (field, value) => {
    if (field.startsWith('address.')) {
      const addressField = field.split('.')[1];
      setProfileSettings(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setProfileSettings(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSelectChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Validate required fields
      if (!profileSettings.firstName || !profileSettings.lastName || !profileSettings.email) {
        message.error('Please fill in all required fields (First Name, Last Name, Email)');
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(profileSettings.email)) {
        message.error('Please enter a valid email address');
        return;
      }

      // First, update the User model with basic profile info
      const userUpdateData = {
        firstName: profileSettings.firstName,
        lastName: profileSettings.lastName,
        email: profileSettings.email,
        phone: profileSettings.phone,
        duprId: profileSettings.duprId,
        address: `${profileSettings.address.street}, ${profileSettings.address.city}, ${profileSettings.address.state} ${profileSettings.address.zipCode}`.trim()
      };
      
      console.log('Sending profile update request:', userUpdateData);
      const response = await apiClient.put('/profiles/me', userUpdateData);
      
      message.success('Profile updated successfully!');
      
      // Update the user context with the new data
      if (response.data) {
        updateUserProfile(response.data);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      
      // Handle specific error cases based on the improved error responses
      if (error.response?.status === 400) {
        message.error(error.response.data.message || 'Invalid data provided');
      } else if (error.response?.status === 401) {
        const errorData = error.response.data;
        if (errorData.error === 'INVALID_SIGNATURE') {
          message.error('Your session has expired. Please log out and log back in.');
        } else if (errorData.error === 'TOKEN_EXPIRED') {
          message.error('Your session has expired. Please log in again.');
        } else if (errorData.error === 'MISSING_TOKEN') {
          message.error('Authentication required. Please log in.');
        } else {
          message.error('Authentication failed. Please log in again.');
        }
      } else if (error.response?.status === 404) {
        message.error('Profile not found');
      } else if (error.response?.status === 408) {
        message.error('Request timed out. Please try again.');
      } else if (error.response?.status >= 500) {
        message.error('Server error. Please try again later.');
      } else if (error.code === 'ECONNABORTED') {
        message.error('Request timed out. This may be due to an authentication issue. Please try logging out and back in.');
      } else {
        message.error('Failed to update profile. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSavePreferences = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // This would typically save to a user preferences endpoint
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      message.success('Preferences saved successfully!');
    } catch (error) {
      console.error('Error saving preferences:', error);
      message.error('Failed to save preferences. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        await apiClient.delete('/users/profile');
        message.success('Account deleted successfully');
        // Redirect to home or logout
        window.location.href = '/';
      } catch (error) {
        console.error('Error deleting account:', error);
        message.error('Failed to delete account. Please try again.');
      }
    }
  };

  return (
    <SettingsContainer>
      <SettingsContent>
        <PageHeader>
          <PageTitle>Settings</PageTitle>
          <PageSubtitle>Manage your account settings and preferences</PageSubtitle>
        </PageHeader>

        <SettingsGrid>
          {/* Profile Information */}
          <SettingsSection>
            <SectionTitle>Profile Information</SectionTitle>
            <SectionDescription>
              Update your personal information and contact details.
            </SectionDescription>
            
            <SettingsForm onSubmit={handleSaveProfile}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <FormGroup>
                  <FormLabel>First Name</FormLabel>
                  <FormInput
                    type="text"
                    value={profileSettings.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="Enter your first name"
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Last Name</FormLabel>
                  <FormInput
                    type="text"
                    value={profileSettings.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Enter your last name"
                  />
                </FormGroup>
              </div>
              
              <FormGroup>
                <FormLabel>Email Address</FormLabel>
                <FormInput
                  type="email"
                  value={profileSettings.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Phone Number</FormLabel>
                <FormInput
                  type="tel"
                  value={profileSettings.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>DUPR ID</FormLabel>
                <FormInput
                  type="text"
                  value={profileSettings.duprId}
                  onChange={(e) => handleInputChange('duprId', e.target.value)}
                  placeholder="Enter your DUPR ID"
                />
              </FormGroup>
              
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '16px' }}>
                <FormGroup>
                  <FormLabel>Street Address</FormLabel>
                  <FormInput
                    type="text"
                    value={profileSettings.address.street}
                    onChange={(e) => handleInputChange('address.street', e.target.value)}
                    placeholder="Enter your street address"
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>City</FormLabel>
                  <FormInput
                    type="text"
                    value={profileSettings.address.city}
                    onChange={(e) => handleInputChange('address.city', e.target.value)}
                    placeholder="City"
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>State</FormLabel>
                  <FormInput
                    type="text"
                    value={profileSettings.address.state}
                    onChange={(e) => handleInputChange('address.state', e.target.value)}
                    placeholder="State"
                  />
                </FormGroup>
              </div>
              
              <FormGroup>
                <FormLabel>ZIP Code</FormLabel>
                <FormInput
                  type="text"
                  value={profileSettings.address.zipCode}
                  onChange={(e) => handleInputChange('address.zipCode', e.target.value)}
                  placeholder="Enter ZIP code"
                  style={{ maxWidth: '200px' }}
                />
              </FormGroup>
              
              <SaveButton type="submit" disabled={loading}>
                {loading ? 'Saving...' : 'Save Profile'}
              </SaveButton>
            </SettingsForm>
          </SettingsSection>

          {/* Notification Preferences */}
          <SettingsSection>
            <SectionTitle>Notifications</SectionTitle>
            <SectionDescription>
              Choose what notifications you'd like to receive.
            </SectionDescription>
            
            <div>
              <ToggleContainer>
                <ToggleLabel>
                  <ToggleTitle>Email Notifications</ToggleTitle>
                  <ToggleDescription>Receive updates via email</ToggleDescription>
                </ToggleLabel>
                <Toggle
                  $enabled={settings.emailNotifications}
                  onClick={() => handleToggle('emailNotifications')}
                />
              </ToggleContainer>
              
              <ToggleContainer>
                <ToggleLabel>
                  <ToggleTitle>Push Notifications</ToggleTitle>
                  <ToggleDescription>Receive push notifications in your browser</ToggleDescription>
                </ToggleLabel>
                <Toggle
                  $enabled={settings.pushNotifications}
                  onClick={() => handleToggle('pushNotifications')}
                />
              </ToggleContainer>
              
              <ToggleContainer>
                <ToggleLabel>
                  <ToggleTitle>Tournament Updates</ToggleTitle>
                  <ToggleDescription>Get notified about tournament news and updates</ToggleDescription>
                </ToggleLabel>
                <Toggle
                  $enabled={settings.tournamentUpdates}
                  onClick={() => handleToggle('tournamentUpdates')}
                />
              </ToggleContainer>
              
              <ToggleContainer>
                <ToggleLabel>
                  <ToggleTitle>Match Reminders</ToggleTitle>
                  <ToggleDescription>Receive reminders about upcoming matches</ToggleDescription>
                </ToggleLabel>
                <Toggle
                  $enabled={settings.matchReminders}
                  onClick={() => handleToggle('matchReminders')}
                />
              </ToggleContainer>
            </div>
            
            <SaveButton onClick={handleSavePreferences} disabled={loading} style={{ marginTop: '24px' }}>
              {loading ? 'Saving...' : 'Save Preferences'}
            </SaveButton>
          </SettingsSection>

          {/* App Preferences */}
          <SettingsSection>
            <SectionTitle>App Preferences</SectionTitle>
            <SectionDescription>
              Customize your app experience.
            </SectionDescription>
            
            <SettingsForm onSubmit={handleSavePreferences}>
              <FormGroup>
                <FormLabel>Language</FormLabel>
                <FormSelect
                  value={settings.language}
                  onChange={(e) => handleSelectChange('language', e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="fil">Filipino</option>
                </FormSelect>
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Timezone</FormLabel>
                <FormSelect
                  value={settings.timezone}
                  onChange={(e) => handleSelectChange('timezone', e.target.value)}
                >
                  <option value="Asia/Manila">Asia/Manila (GMT+8)</option>
                  <option value="UTC">UTC (GMT+0)</option>
                </FormSelect>
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Profile Privacy</FormLabel>
                <FormSelect
                  value={settings.privacy}
                  onChange={(e) => handleSelectChange('privacy', e.target.value)}
                >
                  <option value="public">Public</option>
                  <option value="friends">Friends Only</option>
                  <option value="private">Private</option>
                </FormSelect>
              </FormGroup>
              
              <SaveButton type="submit" disabled={loading}>
                {loading ? 'Saving...' : 'Save Preferences'}
              </SaveButton>
            </SettingsForm>
          </SettingsSection>

          {/* Danger Zone */}
          <SettingsSection>
            <SectionTitle>Danger Zone</SectionTitle>
            <SectionDescription>
              Irreversible and destructive actions.
            </SectionDescription>
            
            <DangerZone>
              <DangerTitle>Delete Account</DangerTitle>
              <DangerDescription>
                Once you delete your account, there is no going back. Please be certain.
              </DangerDescription>
              <DangerButton onClick={handleDeleteAccount}>
                Delete Account
              </DangerButton>
            </DangerZone>
          </SettingsSection>
        </SettingsGrid>
      </SettingsContent>
    </SettingsContainer>
  );
};

export default Settings;