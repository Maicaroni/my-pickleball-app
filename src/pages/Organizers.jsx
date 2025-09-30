import React from 'react';
import styled from 'styled-components';

const OrganizersContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 1rem;
  font-size: 2.5rem;
`;

const Description = styled.p`
  color: #666;
  font-size: 1.2rem;
  line-height: 1.6;
`;

const Organizers = () => {
  return (
    <OrganizersContainer>
      <ContentCard>
        <Title>Organizers</Title>
        <Description>
          Connect with tournament organizers and event coordinators. 
          This section will feature organizer profiles, upcoming events, 
          and contact information for collaboration opportunities.
        </Description>
      </ContentCard>
    </OrganizersContainer>
  );
};

export default Organizers;