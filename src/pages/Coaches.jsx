import React from 'react';
import styled from 'styled-components';

const CoachesContainer = styled.div`
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

const Coaches = () => {
  return (
    <CoachesContainer>
      <ContentCard>
        <Title>Coaches</Title>
        <Description>
          Find experienced pickleball coaches to improve your game. 
          This section will feature certified coaches, their specialties, 
          and booking information for lessons.
        </Description>
      </ContentCard>
    </CoachesContainer>
  );
};

export default Coaches;