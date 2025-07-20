import { useState, useRef } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

// Styled Components
const ProfileContainer = styled.div`
  min-height: calc(100vh - 140px);
  padding: 80px 20px 40px;
  max-width: 1000px;
  margin: 0 auto;
  background: #ffffff;
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;
`;

const AvatarContainer = styled.div`
  position: relative;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e9ecef;
`;

const AvatarUploadButton = styled.button`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #29ba9b;
  border: 2px solid white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;

  &:hover {
    background: #234255;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const UserName = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #234255;
  margin: 0;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const UserDetail = styled.div`
  font-size: 1rem;
  color: #6b7280;
`;

const DetailLabel = styled.span`
  font-weight: 600;
  color: #234255;
  margin-right: 8px;
`;

const DuprSection = styled.div`
  width: 100%;
`;

const DuprTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
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
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background: #f8f9fa;
`;

const DuprScore = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #234255;
  margin-bottom: 4px;
`;

const DuprLabel = styled.div`
  font-size: 0.9rem;
  color: #6b7280;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #234255;
  margin: 0;
  font-weight: 600;
`;

const RankingsTable = styled.div`
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
`;

const TableHeader = styled.div`
  background: #f8f9fa;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-weight: 600;
  color: #234255;
  border-bottom: 1px solid #e9ecef;
`;

const TableBody = styled.div`
  background: white;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 16px;
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.div`
  color: #234255;
  font-weight: 500;
`;

const EditButton = styled.button`
  background: #29ba9b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #234255;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const Profile = () => {
  const { user, showNotification } = useAuth();
  const fileInputRef = useRef(null);

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
    showNotification('Edit functionality coming soon!', 'info');
  };

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
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h2>Please sign in to view your profile</h2>
        </div>
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      <ProfileGrid>
        <LeftSection>
          <AvatarContainer>
            <Avatar src={user.avatar} alt={user.name} />
            <AvatarUploadButton onClick={handleAvatarClick}>
              📷
            </AvatarUploadButton>
            <HiddenFileInput
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </AvatarContainer>
          
          <UserInfo>
            <UserName>{user.name}</UserName>
            
            <UserDetails>
              <UserDetail>
                <DetailLabel>Age:</DetailLabel>{userAge}
              </UserDetail>
              
              <UserDetail>
                <DetailLabel>PPL ID:</DetailLabel>{pplId}
              </UserDetail>
            </UserDetails>
          </UserInfo>

          <DuprSection>
            <DuprTitle>DUPR Ratings</DuprTitle>
            <DuprGrid>
              {duprRatings.map((rating, index) => (
                <DuprCard key={index}>
                  <DuprScore>{rating.rating}</DuprScore>
                  <DuprLabel>{rating.type}</DuprLabel>
                </DuprCard>
              ))}
            </DuprGrid>
          </DuprSection>
        </LeftSection>

        <RightSection>
          <SectionHeader>
            <SectionTitle>Player Rankings</SectionTitle>
            <EditButton onClick={handleEdit}>
              Edit Profile
            </EditButton>
          </SectionHeader>
          
          <RankingsTable>
            <TableHeader>
              <div>Category</div>
              <div>Rank</div>
            </TableHeader>
            <TableBody>
              {rankData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.rank}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </RankingsTable>
        </RightSection>
      </ProfileGrid>
    </ProfileContainer>
  );
};

export default Profile; 