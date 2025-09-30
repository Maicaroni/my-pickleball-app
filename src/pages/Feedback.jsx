import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import viteLogo from '/vite.svg';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 16px;
  margin-top: -60px;
  padding-top: 112px;
  background: white;

  @media (max-width: 768px) {
    padding: 92px 0px 20px;
  }
`;

const AuthCard = styled.div`
  width: 100%;
  max-width: 460px;
  margin: 40px auto;
  padding: 40px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  animation: fadeIn 0.3s ease;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 24px 16px;
    box-shadow: none;
    border-radius: 0;
    max-width: 100%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

const Logo = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 16px;
  background: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`;

const Title = styled.h1`
  color: #234255;
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0 0 6px;
  }
`;

const Subtitle = styled.p`
  color: #64748b;
  font-size: 15px;
  margin: 0 0 32px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0 0 24px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 13px;
  background: white;
  color: #234255;
  transition: all 0.2s;
  outline: none;

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 13px;
  }

  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
    font-size: 13px;
  }

  ${props => props.$hasError && `
    border-color: #ef4444;
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 13px;
  background: white;
  color: #234255;
  transition: all 0.2s;
  outline: none;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 13px;
    min-height: 100px;
  }

  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
    font-size: 13px;
  }

  ${props => props.$hasError && `
    border-color: #ef4444;
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
`;

const SubmitButton = styled.button`
  background: #29ba9b;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 15px;
  }

  &:hover {
    background: #239b83;
  }

  &:disabled {
    background: #e2e8f0;
    cursor: not-allowed;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

const SuccessMessage = styled.div`
  color: #10b981;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  padding: 12px;
  background: #f0fdf4;
  border-radius: 8px;
  border: 1px solid #bbf7d0;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

const StarRating = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const Star = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  transition: all 0.2s;
  outline: none;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:focus {
    outline: none;
  }
  
  svg {
    width: 32px;
    height: 32px;
    fill: ${props => props.$filled ? '#fbbf24' : '#e5e7eb'};
    stroke: ${props => props.$filled ? '#f59e0b' : '#d1d5db'};
    transition: all 0.2s;
  }
  
  &:hover svg {
    fill: #fbbf24;
    stroke: #f59e0b;
  }
`;

const RatingLabel = styled.span`
  margin-left: 8px;
  color: #64748b;
  font-size: 14px;
  font-weight: 500;
`;

const Feedback = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rating: 0,
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
    
    // Clear error when user selects rating
    if (errors.rating) {
      setErrors(prev => ({
        ...prev,
        rating: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Rating validation
    if (formData.rating === 0) {
      newErrors.rating = 'Please select a rating';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Get token from user object in localStorage (consistent with AuthContext)
      const storedUser = localStorage.getItem('user');
      const token = storedUser ? JSON.parse(storedUser)?.token : null;
      
      const response = await fetch('/api/feedbacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          rating: formData.rating,
          message: formData.message
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit feedback');
      }

      const result = await response.json();
      
      // Show success message
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ rating: 0, message: '' });
        setIsSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setErrors({ submit: error.message || 'Failed to submit feedback. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageContainer>
      <AuthCard>
        <LogoContainer>
          <Logo>
            <img src={viteLogo} alt="Logo" />
          </Logo>
          <Title>Send Feedback</Title>
          <Subtitle>We'd love to hear from you! Share your thoughts and suggestions.</Subtitle>
        </LogoContainer>

        {isSuccess && (
          <SuccessMessage>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Thank you for your feedback! We'll review it and get back to you soon.
          </SuccessMessage>
        )}

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Rate Your Experience</Label>
            <StarRating>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  type="button"
                  $filled={star <= formData.rating}
                  onClick={() => handleRatingChange(star)}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </Star>
              ))}
              {formData.rating > 0 && (
                <RatingLabel>
                  {formData.rating === 1 && 'Poor'}
                  {formData.rating === 2 && 'Fair'}
                  {formData.rating === 3 && 'Good'}
                  {formData.rating === 4 && 'Very Good'}
                  {formData.rating === 5 && 'Excellent'}
                </RatingLabel>
              )}
            </StarRating>
            {errors.rating && (
              <ErrorMessage>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {errors.rating}
              </ErrorMessage>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="message">Message (Optional)</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us what's on your mind..."
              $hasError={!!errors.message}
            />
            {errors.message && (
              <ErrorMessage>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {errors.message}
              </ErrorMessage>
            )}
          </InputGroup>

          {errors.submit && (
            <ErrorMessage>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errors.submit}
            </ErrorMessage>
          )}

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Feedback'}
          </SubmitButton>
        </Form>
      </AuthCard>
    </PageContainer>
  );
};

export default Feedback;