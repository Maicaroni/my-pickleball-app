import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import viteLogo from '/vite.svg';

/**
 * @typedef {Object} RegisterData
 * @property {string} name - User's full name
 * @property {string} email - User's email
 * @property {string} password - User's password
 * @property {string} confirmPassword - Password confirmation
 */

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

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 15px;
  background: white;
  transition: all 0.2s;

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 14px;
  }

  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
    font-size: 14px;
  }

  ${props => props.$hasError && `
    border-color: #ef4444;
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 15px;
  background: white;
  color: #234255;
  transition: all 0.2s;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 16px;

  &:focus {
    outline: none;
    border-color: #29ba9b;
    box-shadow: 0 0 0 3px rgba(41, 186, 155, 0.1);
  }

  ${props => props.$hasError && `
    border-color: #ef4444;
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
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
  padding: 0;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #475569;
  }
`;

const PasswordRequirements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
`;

const RequirementText = styled.span`
  color: ${props => props.$met ? '#10b981' : '#94a3b8'};
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 14px;
    height: 14px;
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

  ${props => props.$loading && `
    color: transparent;
    
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 20px;
      height: 20px;
      border: 2px solid transparent;
      border-top-color: white;
      border-right-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `}
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

const LinkText = styled.p`
  text-align: center;
  margin: 24px 0 0;
  color: #64748b;
  font-size: 14px;

  a {
    color: #29ba9b;
    text-decoration: none;
    font-weight: 500;
    margin-left: 4px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e2e8f0;
  }
  
  span {
    color: #64748b;
    font-size: 14px;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const SocialButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  @media (max-width: 768px) {
    padding: 10px;
  }

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

// SVG Icons Components
const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const WarningIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const passwordRequirements = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
    special: /[!@#$%^&*]/.test(formData.password)
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!Object.values(passwordRequirements).every(Boolean)) {
      newErrors.password = 'Password does not meet requirements';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.birthDate) {
      newErrors.birthDate = 'Birth date is required';
    } else {
      const age = new Date().getFullYear() - new Date(formData.birthDate).getFullYear();
      if (age < 13) {
        newErrors.birthDate = 'You must be at least 13 years old';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    try {
      // BACKEND INTEGRATION REQUIRED:
      // 1. Make a POST request to /api/auth/register
      // Expected request body:
      // {
      //   firstName: string,
      //   lastName: string,
      //   email: string,
      //   password: string,
      //   birthDate: string (YYYY-MM-DD)
      // }
      // Expected response:
      // {
      //   token: string,
      //   user: {
      //     id: string,
      //     email: string,
      //     firstName: string,
      //     lastName: string,
      //     birthDate: string,
      //     roles: string[]
      //   }
      // }
      // 2. Store the token in localStorage
      // 3. Store user data in app state
      // 4. Redirect to dashboard/home
      
      await new Promise(resolve => setTimeout(resolve, 1500)); // Remove this line after backend integration
      navigate('/');
    } catch (err) {
      setErrors(prev => ({
        ...prev,
        submit: err.message || 'Failed to create account. Please try again.'
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignup = async (provider) => {
    try {
      // BACKEND INTEGRATION REQUIRED:
      // 1. For Google:
      //    - Endpoint: /api/auth/google/register
      //    - Use Google OAuth2 flow
      //    - Additional user data might be required after OAuth
      //
      // 2. For Facebook:
      //    - Endpoint: /api/auth/facebook/register
      //    - Use Facebook OAuth flow
      //    - Additional user data might be required after OAuth
      //
      // Expected response format same as regular registration
      // Handle token storage and redirection same way
      
      console.log(`Signing up with ${provider}`); // Remove after backend integration
    } catch (err) {
      setErrors(prev => ({
        ...prev,
        submit: `Failed to sign up with ${provider}. Please try again.`
      }));
    }
  };

  return (
    <PageContainer>
      <AuthCard>
        <LogoContainer>
          <Logo>
            <img src={viteLogo} alt="Vite Logo" />
          </Logo>
          <Title>Create Account</Title>
          <Subtitle>Join the Philippine Pickleball League</Subtitle>
        </LogoContainer>

        <Form onSubmit={handleSubmit}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
            gap: '16px' 
          }}>
            <InputGroup>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                required
                $hasError={!!errors.firstName}
              />
              {errors.firstName && (
                <ErrorMessage>
                  <WarningIcon />
                  {errors.firstName}
                </ErrorMessage>
              )}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                $hasError={!!errors.lastName}
              />
              {errors.lastName && (
                <ErrorMessage>
                  <WarningIcon />
                  {errors.lastName}
                </ErrorMessage>
              )}
            </InputGroup>
          </div>

          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              $hasError={!!errors.email}
            />
            {errors.email && (
              <ErrorMessage>
                <WarningIcon />
                {errors.email}
              </ErrorMessage>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="birthDate">Birth Date</Label>
            <Input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
              $hasError={!!errors.birthDate}
            />
            {errors.birthDate && (
              <ErrorMessage>
                <WarningIcon />
                {errors.birthDate}
              </ErrorMessage>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <InputWrapper>
            <Input
                type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
                $hasError={!!errors.password}
              />
              <PasswordToggle
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </PasswordToggle>
            </InputWrapper>
            <PasswordRequirements>
              <RequirementText $met={passwordRequirements.length}>
                {passwordRequirements.length ? <CheckIcon /> : '•'} At least 8 characters
              </RequirementText>
              <RequirementText $met={passwordRequirements.uppercase}>
                {passwordRequirements.uppercase ? <CheckIcon /> : '•'} One uppercase letter
              </RequirementText>
              <RequirementText $met={passwordRequirements.lowercase}>
                {passwordRequirements.lowercase ? <CheckIcon /> : '•'} One lowercase letter
              </RequirementText>
              <RequirementText $met={passwordRequirements.number}>
                {passwordRequirements.number ? <CheckIcon /> : '•'} One number
              </RequirementText>
              <RequirementText $met={passwordRequirements.special}>
                {passwordRequirements.special ? <CheckIcon /> : '•'} One special character
              </RequirementText>
            </PasswordRequirements>
            {errors.password && (
              <ErrorMessage>
                <WarningIcon />
                {errors.password}
              </ErrorMessage>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <InputWrapper>
            <Input
                type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
                $hasError={!!errors.confirmPassword}
              />
              <PasswordToggle
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
              </PasswordToggle>
            </InputWrapper>
            {errors.confirmPassword && (
              <ErrorMessage>
                <WarningIcon />
                {errors.confirmPassword}
              </ErrorMessage>
            )}
          </InputGroup>

          <SubmitButton type="submit" disabled={loading} $loading={loading}>
            {loading ? 'Creating account...' : 'Create account'}
          </SubmitButton>

          {errors.submit && (
            <ErrorMessage>
              <WarningIcon />
              {errors.submit}
            </ErrorMessage>
          )}
        </Form>

        <Divider>
          <span>or sign up with</span>
        </Divider>

        <SocialButtons>
          <SocialButton onClick={() => handleSocialSignup('Google')}>
            <GoogleIcon />
            Google
          </SocialButton>
          <SocialButton onClick={() => handleSocialSignup('Facebook')}>
            <FacebookIcon />
            Facebook
          </SocialButton>
        </SocialButtons>

        <LinkText>
          Already have an account?<a href="/signin">Sign in</a>
        </LinkText>
      </AuthCard>
    </PageContainer>
  );
};

export default Register; 