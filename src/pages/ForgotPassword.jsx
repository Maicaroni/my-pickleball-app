import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import viteLogo from '/vite.svg';
import { useAuth } from '../contexts/AuthContext';

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
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
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

const InputWrapper = styled.div`
  position: relative;
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

  &[type="password"] {
    padding-right: 48px;
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  width: 24px;
  height: 24px;
  outline: none;
  
  &:hover {
    color: #475569;
  }

  svg {
    width: 18px;
    height: 18px;
  }
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

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
    color: #475569;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { showNotification } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [showPasswords, setShowPasswords] = useState({ new: false, confirm: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);

  // OTP timer
  useEffect(() => {
    let interval = null;
    if (otpTimer > 0) {
      interval = setInterval(() => setOtpTimer(prev => prev - 1), 1000);
    } else if (otpTimer === 0 && otpSent) {
      clearInterval(interval);
      setOtpSent(false);
      setFormData(prev => ({ ...prev, otp: '' }));
    }
    return () => clearInterval(interval);
  }, [otpTimer, otpSent]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (otpSent && !formData.otp) newErrors.otp = 'OTP is required';
    if (otpSent) {
      if (!formData.newPassword) newErrors.newPassword = 'New password is required';
      else if (formData.newPassword.length < 8) newErrors.newPassword = 'Password must be at least 8 characters';
      if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm your new password';
      else if (formData.newPassword !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Inside your ForgotPassword component
const passwordRequirements = {
  length: formData.newPassword.length >= 8,
  uppercase: /[A-Z]/.test(formData.newPassword),
  lowercase: /[a-z]/.test(formData.newPassword),
  number: /[0-9]/.test(formData.newPassword),
  special: /[!@#$%^&*]/.test(formData.newPassword)
};

  const sendOtp = async () => {
  if (!formData.email) {
    showNotification("Email is required to send OTP", "warning");
    return;
  }
  try {
    // Backend now always returns 200 for security
    await axios.post(`/api/forgotPassword/send-otp`, { email: formData.email });
    setOtpSent(true);
    setOtpTimer(300); // 5 min
    showNotification("If an account with this email exists, an OTP has been sent", "success");
  } catch (err) {
    // Should rarely hit this, mostly network errors
    showNotification(err.response?.data?.message || "Failed to send OTP", "error");
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);
  try {
    await axios.post(`/api/forgotPassword/reset-password`, {
      email: formData.email,
      otp: formData.otp,
      newPassword: formData.newPassword
    });

    setIsSuccess(true);
    showNotification("Password changed successfully!", "success");
    setTimeout(() => {
      setFormData({ email: '', otp: '', newPassword: '', confirmPassword: '' });
      setIsSuccess(false);
      navigate('/');
    }, 3000);
  } catch (err) {
    showNotification(err.response?.data?.message || "Something went wrong", "error");
  } finally {
    setIsSubmitting(false);
  }
};

  const handleBack = () => navigate(-1);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  };

  return (
    <PageContainer>
      {/* Back Button */}
      <BackButton onClick={handleBack}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back
      </BackButton>

      <AuthCard>
        <LogoContainer>
          <Logo><img src={viteLogo} alt="Logo" /></Logo>
          <Title>Reset Password</Title>
          <Subtitle>Enter your email to receive OTP</Subtitle>
        </LogoContainer>

        {isSuccess && <SuccessMessage>Password changed successfully!</SuccessMessage>}

        <Form onSubmit={handleSubmit}>
          {/* Email */}
          <InputGroup>
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              disabled={otpSent}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            {!otpSent && <SubmitButton type="button" onClick={sendOtp}>Send OTP</SubmitButton>}
          </InputGroup>

          {/* OTP & Passwords */}
          {otpSent && (
            <>
              <InputGroup>
                <Label>OTP Code</Label>
                <Input
                  name="otp"
                  type="text"
                  value={formData.otp}
                  onChange={handleInputChange}
                  placeholder="Enter OTP"
                />
                {otpTimer > 0 ? <Subtitle>Expires in {formatTime(otpTimer)}</Subtitle> :
                  <SubmitButton type="button" onClick={sendOtp}>Resend OTP</SubmitButton>}
                {errors.otp && <ErrorMessage>{errors.otp}</ErrorMessage>}
              </InputGroup>

              <InputGroup>
  <Label>New Password</Label>
  <InputWrapper>
    <Input
      name="newPassword"
      type={showPasswords.new ? 'text' : 'password'}
      value={formData.newPassword}
      onChange={handleInputChange}
      placeholder="Enter new password"
    />
    <PasswordToggle type="button" onClick={() => togglePasswordVisibility('new')}>
      {showPasswords.new ? '🙈' : '👁️'}
    </PasswordToggle>
  </InputWrapper>
  {errors.newPassword && <ErrorMessage>{errors.newPassword}</ErrorMessage>}

  {/* Password requirements */}
  <div style={{ fontSize: '13px', marginTop: '6px', color: '#64748b' }}>
    <div style={{ color: passwordRequirements.length ? '#10b981' : '#ef4444' }}>
      • At least 8 characters
    </div>
    <div style={{ color: passwordRequirements.uppercase ? '#10b981' : '#ef4444' }}>
      • One uppercase letter
    </div>
    <div style={{ color: passwordRequirements.lowercase ? '#10b981' : '#ef4444' }}>
      • One lowercase letter
    </div>
    <div style={{ color: passwordRequirements.number ? '#10b981' : '#ef4444' }}>
      • One number
    </div>
    <div style={{ color: passwordRequirements.special ? '#10b981' : '#ef4444' }}>
      • One special character (!@#$%^&*)
    </div>
  </div>
</InputGroup>


              <InputGroup>
                <Label>Confirm Password</Label>
                <InputWrapper>
                  <Input
                    name="confirmPassword"
                    type={showPasswords.confirm ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm new password"
                  />
                  <PasswordToggle type="button" onClick={() => togglePasswordVisibility('confirm')}>
                    {showPasswords.confirm ? '🙈' : '👁️'}
                  </PasswordToggle>
                </InputWrapper>
                {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
              </InputGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Resetting...' : 'Reset Password'}
              </SubmitButton>
            </>
          )}
        </Form>
      </AuthCard>
    </PageContainer>
  );
};

export default ForgotPassword;