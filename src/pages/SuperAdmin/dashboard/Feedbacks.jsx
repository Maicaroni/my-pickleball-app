import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FeedbacksContainer = styled.div`
  padding: 2rem;
  background: #f8fafc;
  min-height: 100vh;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #64748b;
  font-size: 1rem;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
`;

const StatLabel = styled.div`
  color: #64748b;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const FeedbacksGrid = styled.div`
  display: grid;
  gap: 1rem;
`;

const FeedbackCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

const FeedbackHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.div`
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
`;

const UserEmail = styled.div`
  color: #64748b;
  font-size: 0.875rem;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Stars = styled.div`
  display: flex;
  gap: 0.125rem;
`;

const Star = styled.span`
  color: ${props => props.filled ? '#fbbf24' : '#e5e7eb'};
  font-size: 1.25rem;
`;

const RatingText = styled.span`
  color: #64748b;
  font-size: 0.875rem;
`;

const Message = styled.div`
  color: #374151;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const DateText = styled.div`
  color: #9ca3af;
  font-size: 0.875rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #64748b;
`;

const ErrorContainer = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #64748b;
`;

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
    total: 0,
    averageRating: 0,
    fiveStars: 0,
    fourStars: 0,
    threeStars: 0,
    twoStars: 0,
    oneStar: 0
  });

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      
      const response = await fetch('/api/feedbacks', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch feedbacks');
      }

      const data = await response.json();
      setFeedbacks(data);
      calculateStats(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (feedbackData) => {
    const total = feedbackData.length;
    const ratings = feedbackData.map(f => f.rating);
    const averageRating = total > 0 ? (ratings.reduce((sum, rating) => sum + rating, 0) / total).toFixed(1) : 0;
    
    const ratingCounts = {
      fiveStars: ratings.filter(r => r === 5).length,
      fourStars: ratings.filter(r => r === 4).length,
      threeStars: ratings.filter(r => r === 3).length,
      twoStars: ratings.filter(r => r === 2).length,
      oneStar: ratings.filter(r => r === 1).length
    };

    setStats({
      total,
      averageRating,
      ...ratingCounts
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} filled={index < rating}>★</Star>
    ));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <FeedbacksContainer>
        <LoadingContainer>Loading feedbacks...</LoadingContainer>
      </FeedbacksContainer>
    );
  }

  if (error) {
    return (
      <FeedbacksContainer>
        <ErrorContainer>
          Error loading feedbacks: {error}
        </ErrorContainer>
      </FeedbacksContainer>
    );
  }

  return (
    <FeedbacksContainer>
      <Header>
        <Title>User Feedbacks</Title>
        <Subtitle>Monitor and analyze user feedback to improve the platform</Subtitle>
      </Header>

      <StatsContainer>
        <StatCard>
          <StatValue>{stats.total}</StatValue>
          <StatLabel>Total Feedbacks</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.averageRating}</StatValue>
          <StatLabel>Average Rating</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.fiveStars}</StatValue>
          <StatLabel>5-Star Reviews</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.fourStars}</StatValue>
          <StatLabel>4-Star Reviews</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.threeStars}</StatValue>
          <StatLabel>3-Star Reviews</StatLabel>
        </StatCard>
      </StatsContainer>

      <FeedbacksGrid>
        {feedbacks.length === 0 ? (
          <EmptyState>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
            <div style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>No feedbacks yet</div>
            <div>User feedbacks will appear here once they start submitting them.</div>
          </EmptyState>
        ) : (
          feedbacks.map((feedback) => (
            <FeedbackCard key={feedback._id}>
              <FeedbackHeader>
                <UserInfo>
                  <UserName>
                    {feedback.userId ? 
                      `${feedback.userId.firstName} ${feedback.userId.lastName}` : 
                      'Anonymous User'
                    }
                  </UserName>
                  <UserEmail>
                    {feedback.userId?.email || 'No email provided'}
                  </UserEmail>
                </UserInfo>
                <RatingContainer>
                  <Stars>{renderStars(feedback.rating)}</Stars>
                  <RatingText>({feedback.rating}/5)</RatingText>
                </RatingContainer>
              </FeedbackHeader>
              
              {feedback.message && (
                <Message>{feedback.message}</Message>
              )}
              
              <DateText>
                Submitted on {formatDate(feedback.createdAt)}
              </DateText>
            </FeedbackCard>
          ))
        )}
      </FeedbacksGrid>
    </FeedbacksContainer>
  );
};

export default Feedbacks;
