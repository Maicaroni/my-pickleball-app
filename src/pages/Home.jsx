import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ShirtPopup from '/src/components/ShirtPopUp.jsx';


const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasPlayed) {
        setIsInView(true);
        setHasPlayed(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, hasPlayed]);

  return [ref, isInView];
};

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
  z-index: 0;
`;

const Hero = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 70px 16px 80px;
  background: linear-gradient(-45deg, #234255, #29ba9b, #1a2e3b, #a3e635);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 75vh;
    padding: 81px 16px 120px;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.1;
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  position: relative;
  z-index: 1;
  animation: fadeInUp 1s ease;
  width: 100%;
  padding: 0 16px;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: clamp(2rem, 8vw, 4.5rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
  line-height: 1.1;
  
  span {
    color: #a3e635;
    font-family: inherit;
  }

  @media (max-width: 768px) {
    font-size: clamp(2rem, 6vw, 3rem);
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 4vw, 1.25rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.5;
  }
`;

const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    gap: 1.25rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  max-width: 260px;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-color: rgba(41, 186, 155, 0.3);

  &::before {
    transform: scaleX(1);
  }

  &::after {
    opacity: 1;
  }

  .icon {
    transform: scale(1.15) rotate(8deg);
    background: linear-gradient(135deg, #29ba9b 0%, #a3e635 100%);
    color: white;
    box-shadow: 0 8px 24px rgba(41, 186, 155, 0.3);
  }

  h4 {
    color: #29ba9b;
    transform: translateY(-2px);
  }

  p {
    color: #475569;
    transform: translateY(-1px);
  }
}

  .icon {
    width: 52px;
    height: 52px;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 12px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);

    svg {
      width: 22px;
      height: 22px;
      color: white;
    }
  }

  h4 {
    font-size: 1.125rem;
    font-weight: 700;
    color: #1a2e3b;
    margin-bottom: 10px;
    line-height: 1.3;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
    opacity: 0;
    animation: textSlideIn 0.5s ease-out forwards;
    animation-delay: ${props => (props.$index ? props.$index * 0.2 : 0) + 0.5}s;

    @keyframes textSlideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  p {
    font-size: 0.875rem;
    color: #64748b;
    line-height: 1.6;
    margin: 0;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
    opacity: 0;
    animation: textFadeIn 0.5s ease-out forwards;
    animation-delay: ${props => (props.$index ? props.$index * 0.2 : 0) + 0.7}s;

    @keyframes textFadeIn {
      from {
        opacity: 0;
        transform: translateY(15px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
    border-radius: 16px;

    .icon {
      width: 56px;
      height: 56px;
      margin-bottom: 16px;
      border-radius: 14px;

      svg {
        width: 24px;
        height: 24px;
      }
    }

    h4 {
      font-size: 1rem;
      margin-bottom: 8px;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

const SecondaryButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  width: 100%;
  margin-top: 0.75rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.section`
  padding: 80px 24px;
  background: ${props => props.$dark ? '#1a2e3b' : 'white'};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 25px 16px;
  }
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 6vw, 3rem);
  font-weight: 700;
  color: ${props => props.$dark ? 'white' : '#234255'};
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 0;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.4s ease-out;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FeatureCard = styled.div`
  background: ${props => props.$dark ? '#234255' : 'white'};
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  opacity: 0;
  transform: translateY(20px);
  animation: ${props => props.$isVisible ? 'slideIn 0.4s cubic-bezier(0.2, 0, 0, 1) forwards' : 'none'};
  animation-delay: ${props => props.$index * 0.08}s;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1024px) {
    padding: 1.25rem;
  }

  &:hover {
    transform: ${props => props.$isVisible ? 'translateY(-4px)' : 'translateY(20px)'};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  svg {
    width: 32px;
    height: 32px;
    margin-bottom: 1rem;
    color: #29ba9b;
    opacity: 0;
    transform: scale(0.95);
    animation: ${props => props.$isVisible ? 'iconFade 0.3s ease-out forwards' : 'none'};
    animation-delay: ${props => (props.$index * 0.08) + 0.15}s;

    @keyframes iconFade {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @media (max-width: 1024px) {
      width: 28px;
      height: 28px;
      margin-bottom: 0.75rem;
    }
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${props => props.$dark ? 'white' : '#234255'};
    margin-bottom: 0.5rem;
    opacity: 0;
    transform: translateY(8px);
    animation: ${props => props.$isVisible ? 'titleSlide 0.3s ease-out forwards' : 'none'};
    animation-delay: ${props => (props.$index * 0.08) + 0.2}s;

    @keyframes titleSlide {
      from {
        opacity: 0;
        transform: translateY(8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 1024px) {
      font-size: 1rem;
      margin-bottom: 0.375rem;
    }
  }

  p {
    color: ${props => props.$dark ? 'rgba(255, 255, 255, 0.8)' : '#64748b'};
    line-height: 1.4;
    font-size: 0.875rem;
    opacity: 0;
    animation: ${props => props.$isVisible ? 'fadeIn 0.3s ease-out forwards' : 'none'};
    animation-delay: ${props => (props.$index * 0.08) + 0.25}s;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @media (max-width: 1024px) {
      font-size: 0.8125rem;
    }
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 2.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StatValue = styled.h3`
  font-size: clamp(1.75rem, 5vw, 3rem);
  font-weight: 700;
  color: #29ba9b;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
`;

const StatLabel = styled.p`
  color: ${props => props.$dark ? 'rgba(255, 255, 255, 0.8)' : '#64748b'};
  font-size: 1rem;
`;

const AboutSection = styled(Section)`
  position: relative;
  overflow: hidden;
  color: white;
  padding: 120px 24px;
  margin-bottom: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('https://images.unsplash.com/photo-1737476990369-9cf356085909?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
    background-position: center;
    filter: brightness(0.3);
    z-index: 0;
    
    @media (max-width: 768px) {
      background-image: url('https://images.unsplash.com/photo-1737476990369-9cf356085909?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    }
  }

  @media (max-width: 768px) {
    padding: 80px 24px 60px;
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    padding: 60px 20px 40px;
    margin-bottom: 0;
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 16px;
  
`;

const AboutTextContent = styled.div`
  max-width: 800px;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const AboutHeading = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  span {
    background: linear-gradient(135deg, #29ba9b 0%, #a3e635 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const AboutText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.8;
  margin: 0 auto;
  max-width: 700px;
`;

const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  div {
    text-align: center;
    
    h3 {
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      font-weight: 700;
      color: #29ba9b;
      margin-bottom: 0.5rem;
    }
    
    p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.875rem;
    }
  }
`;

const TournamentHostIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #29ba9b 0%, #16a34a 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto 32px;
  box-shadow: 0 8px 32px rgba(41, 186, 155, 0.3);
  opacity: 0;
  animation: iconBounce 0.8s ease-out 0.4s forwards;
  position: relative;
  z-index: 1;

  svg {
    width: 40px;
    height: 40px;
    color: white;
  }

  @keyframes iconBounce {
    0% {
      opacity: 0;
      transform: scale(0.3) rotate(-180deg);
    }
    50% {
      opacity: 1;
      transform: scale(1.1) rotate(-90deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin-bottom: 24px;

    svg {
      width: 35px;
      height: 35px;
    }
  }
`;

const TournamentHostSection = styled.section`
  padding: 30px 24px;
  background: linear-gradient(135deg, #f0fffe 0%, #ecfdf5 50%, #f8fffe 100%);
  position: relative;
  overflow: hidden;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2329ba9b' fill-opacity='0.03'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.4;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: -30%;
    right: -15%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(41, 186, 155, 0.1) 0%, rgba(22, 163, 74, 0.05) 40%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
  }
`;



const TournamentHostTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: #0f172a;
  margin-top: 40px;
  margin-bottom: 24px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  opacity: 0;
  animation: titleReveal 0.8s ease-out 0.8s forwards;
  position: relative;
  z-index: 1;

  @keyframes titleReveal {
    from {
      opacity: 0;
      transform: translateY(30px);
      filter: blur(5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0px);
    }
  }

  .highlight {
    background: linear-gradient(135deg, #29ba9b 0%, #16a34a 50%, #234255 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    background-size: 200% 200%;
    animation: gradientShift 4s ease-in-out infinite;
  }

  @keyframes gradientShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @media (max-width: 768px) {
    font-size: clamp(2rem, 7vw, 3rem);
    margin-bottom: 24px;
  }
`;

const TournamentHostDescription = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  line-height: 1.8;
  max-width: 100%;
  width: 100%;
  margin: 0 auto 32px;
  font-weight: 400;
  opacity: 0;
  animation: fadeInText 0.8s ease-out 1s forwards;
  position: relative;
  z-index: 1;
  text-align: center;

  br {
    display: block;
    margin: 8px 0;
    content: "";
  }

  @keyframes fadeInText {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 32px;
    line-height: 1.6;
    padding: 0 16px;
  }
`;

const TournamentHostBenefits = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto 48px;
  opacity: 0;
  animation: benefitsSlideIn 0.8s ease-out 1.4s forwards;
  position: relative;
  z-index: 1;

  @keyframes benefitsSlideIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }
`;

const TournamentHostBenefit = styled.div`
  position: relative;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%);
    z-index: 1;
  }

  .benefit-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 32px 24px;
    z-index: 2;
    color: white !important;

    h4 {
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0 0 8px 0;
      line-height: 1.2;
      color: white !important;
    }

    p {
      font-size: 1rem;
      margin: 0;
      line-height: 1.4;
      opacity: 1;
      color: white !important;
    }
  }

  .benefit-icon {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    svg {
      width: 24px;
      height: 24px;
      color: white;
    }
  }

  &.sanctioning {
    background-image: linear-gradient(135deg, rgba(128, 128, 128, 0.4) 0%, rgba(107, 114, 128, 0.4) 100%), 
                      url('/card1.JPG');
    background-size: cover;
    background-position: center;
  }

  &.network {
    background-image: linear-gradient(135deg, rgba(128, 128, 128, 0.4) 0%, rgba(107, 114, 128, 0.4) 100%), 
                      url('/card2.JPG');
    background-size: cover;
    background-position: center;
  }

  &.platform {
    background-image: linear-gradient(135deg, rgba(128, 128, 128, 0.4) 0%, rgba(107, 114, 128, 0.4) 100%), 
                      url('/card3.jpg');
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 768px) {
    height: 250px;

    .benefit-content {
      padding: 24px 20px;

      h4 {
        font-size: 1.25rem;
      }

      p {
        font-size: 0.875rem;
      }
    }

    .benefit-icon {
      width: 40px;
      height: 40px;
      top: 20px;
      right: 20px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const TournamentHostCTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 40px;
  opacity: 0;
  animation: fadeInCTA 0.8s ease-out 1.2s forwards;
  position: relative;
  z-index: 1;

  @keyframes fadeInCTA {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const TournamentHostButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 56px;
  background: linear-gradient(135deg, #29ba9b 0%, #16a34a 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.125rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  cursor: pointer;
  letter-spacing: 0.5px;
  box-shadow: 0 12px 40px rgba(41, 186, 155, 0.4);
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  text-transform: uppercase;
  font-weight: 800;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #234255 0%, #1a2e3b 100%);
    transform: translateY(-6px) scale(1.05);
    box-shadow: 0 20px 60px rgba(41, 186, 155, 0.5);

    &::before {
      left: 100%;
    }

    &::after {
      width: 300px;
      height: 300px;
    }

    svg {
      transform: translateX(6px) rotate(10deg) scale(1.1);
    }
  }

  &:active {
    transform: translateY(-3px) scale(1.02);
    transition: all 0.1s ease;
  }

  svg {
    width: 24px;
    height: 24px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  span {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 18px 48px;
    font-size: 1rem;
    border-radius: 40px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;



const ShopSection = styled.section`
  padding: 100px 24px;
  background: linear-gradient(135deg, #1a2e3b 0%, #234255 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 48px 16px 80px;
  }
`;

const ShopContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const ShopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 968px) {
    align-items: center;
  }
`;

const ShopBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: fit-content;
  border: 1px solid rgba(34, 197, 94, 0.2);

  &::before {
    content: '🏓';
    font-size: 1rem;
  }
`;

const ShopTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: white;
  line-height: 1.1;
  margin: 0;
  
  .highlight {
    background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: clamp(2rem, 6vw, 3rem);
  }
`;

const ShopDescription = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  max-width: 500px;
  margin: 0;

  @media (max-width: 968px) {
    max-width: 600px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ShopPricing = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 8px 0;

  .original-price {
    font-size: 1.125rem;
    color: #9ca3af;
    text-decoration: line-through;
    font-weight: 500;
  }

  .sale-price {
    font-size: 1.5rem;
    color: #16a34a;
    font-weight: 700;
  }

  .currency {
    font-size: 1rem;
    font-weight: 600;
  }
`;

const ShopButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 48px;
  background: #22c55e;
  color: white;
  text-decoration: none;
  border-radius: 0;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  text-transform: none;
  letter-spacing: 0.5px;

  &:hover {
    background: #16a34a;
    color: #d1d5db;
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;
  }

  span {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 1rem;
  }
`;

const ShopImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;

  @media (max-width: 968px) {
    min-height: 400px;
  }

  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

const ShirtImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  border-radius: 20px;
  position: relative;
  box-shadow: 0 20px 60px rgba(34, 197, 94, 0.3);
  transform: rotate(-5deg);
  transition: all 0.5s ease;
  background: white;
  padding: 20px;
  opacity: 1;
  animation: fadeInImage 0.5s ease-in-out;

  @keyframes fadeInImage {
    from {
      opacity: 0;
      transform: rotate(-5deg) scale(0.95);
    }
    to {
      opacity: 1;
      transform: rotate(-5deg) scale(1);
    }
  }

  &:hover {
    transform: rotate(0deg) scale(1.05);
    box-shadow: 0 25px 80px rgba(34, 197, 94, 0.4);
  }

  @media (max-width: 968px) {
    width: 350px;
    height: 350px;
    padding: 15px;
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
    padding: 10px;
  }
`;

const ShopBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  z-index: 1;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const ScrollIndicator = styled.div`
  position: fixed;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  z-index: 10;
  cursor: pointer;
  transition: opacity 0.3s ease;
  opacity: ${props => props.$show ? 1 : 0};
  visibility: ${props => props.$show ? 'visible' : 'hidden'};
  
  .scroll-text {
    writing-mode: vertical-lr;
    text-orientation: mixed;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.875rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 8px;
    animation: pulse 2s infinite;
  }

  .arrows {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .arrow {
    width: 12px;
    height: 12px;
    border-right: 2px solid rgba(255, 255, 255, 0.6);
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
    transform: rotate(45deg);
    animation: float 2s infinite;
    margin: 0;

    &:nth-child(2) {
      animation-delay: 0.2s;
      opacity: 0.6;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
      opacity: 0.2;
    }
  }

  @keyframes float {
    0% {
      transform: rotate(45deg) translate(0, 0);
      opacity: 0.6;
    }
    50% {
      transform: rotate(45deg) translate(4px, 4px);
      opacity: 0.2;
    }
    100% {
      transform: rotate(45deg) translate(0, 0);
      opacity: 0.6;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  @media (max-width: 1024px) {
    right: 24px;
  }

  @media (max-width: 768px) {
    right: 16px;
    
    .scroll-text {
      font-size: 0.75rem;
    }

    .arrow {
      width: 10px;
      height: 10px;
    }
  }

  @media (max-width: 480px) {
    position: absolute;
    right: auto;
    top: auto;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
    gap: 8px;
    
    .scroll-text {
      writing-mode: horizontal-tb;
      text-orientation: mixed;
      font-size: 0.75rem;
      margin-bottom: 0;
    }

    .arrows {
      gap: 2px;
    }

    .arrow {
      width: 8px;
      height: 8px;
    }
  }
`;

// Video Section Styled Components
const VideoSection = styled.section`
  padding: 100px 24px;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const VideoHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const VideoDescription = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  max-width: 600px;
  margin: 1.5rem auto 0;
  line-height: 1.7;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 1rem;
    padding: 0 1rem;
  }
`;

const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 
    0 0 0 1px rgba(0, 0, 0, 0.08),
    0 25px 50px rgba(0, 0, 0, 0.15);
  background: #000;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 0 0 1px rgba(0, 0, 0, 0.12),
      0 35px 70px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    border-radius: 16px;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    transparent 20%,
    transparent 80%,
    rgba(0, 0, 0, 0.1) 100%
  );
  pointer-events: none;
  z-index: 1;
`;

const SoundToggle = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 3;
  padding: 12px 16px;
  border-radius: 50px;
  background: ${props => props.$muted 
    ? 'rgba(239, 68, 68, 0.9)' 
    : 'rgba(34, 197, 94, 0.9)'};
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.$muted 
      ? 'rgba(239, 68, 68, 1)' 
      : 'rgba(34, 197, 94, 1)'};
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    right: 16px;
    bottom: 16px;
    padding: 10px 14px;
  }
`;

const SoundIcon = styled.span`
  font-size: 16px;
  transition: transform 0.2s ease;

  ${SoundToggle}:hover & {
    transform: scale(1.1);
  }
`;

const SoundText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;

  @media (max-width: 480px) {
    display: none;
  }
`;

const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    text-align: center;
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    gap: 1rem;
  }
`;

const VideoTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 0.75rem;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: -0.02em;

  span {
    color: #29ba9b;
  }

  @media (max-width: 1024px) {
    margin-bottom: 0.75rem;
  }

  @media (max-width: 640px) {
    margin-bottom: 0.5rem;
  }
`;

const VideoSubtitle = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  text-align: justify;

  @media (max-width: 1024px) {
    margin-bottom: 0.75rem;
  }

  @media (max-width: 640px) {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
`;

const VideoStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    gap: 1rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem 1rem;
  background: #f8fafc;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    background: #f1f5f9;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 640px) {
    padding: 1rem 0.5rem;
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #ef4444;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const VideoStatLabel = styled.div`
  font-size: 0.875rem;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
`;

const VideoActions = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const ActionButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${props => props.$primary && `
    background: #29ba9b;
    color: white;
    border: 2px solid #29ba9b;

    &:hover {
      background: #22a085;
      border-color: #22a085;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(41, 186, 155, 0.4);
    }
  `}

  ${props => props.$secondary && `
    background: transparent;
    color: #1e293b;
    border: 2px solid #e2e8f0;

    &:hover {
      background: #f8fafc;
      border-color: #cbd5e1;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }
  `}
`;

// Sports Broadcast Section Styled Components
const BroadcastSection = styled.section`
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  padding: 4rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    pointer-events: none;
  }
`;

const BroadcastHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const NetworkBranding = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NetworkLogo = styled.div`
  background: #29ba9b;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const BroadcastTitle = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LiveIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #ef4444;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

const BroadcastGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const MainContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  color: white;
`;

const MatchSchedule = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  color: white;
`;

const BroadcastSectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #29ba9b;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 4px;
    height: 24px;
    background: #29ba9b;
    border-radius: 2px;
  }
`;

const MatchItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin-bottom: 0.75rem;
  border-left: 3px solid ${props => props.$live ? '#ef4444' : '#29ba9b'};

  &:last-child {
    margin-bottom: 0;
  }
`;

const MatchInfo = styled.div`
  flex: 1;
`;

const MatchPlayers = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
`;

const MatchTime = styled.div`
  font-size: 0.75rem;
  color: #94a3b8;
`;

const MatchStatus = styled.div`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${props => props.$live && `
    background: #ef4444;
    color: white;
  `}
  
  ${props => props.$completed && `
    background: #22c55e;
    color: white;
  `}
  
  ${props => props.$upcoming && `
    background: #f59e0b;
    color: white;
  `}
`;

const CommentarySection = styled.div`
  margin-top: 2rem;
`;

const CommentaryText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #e2e8f0;
  margin-bottom: 1rem;
  font-style: italic;
`;

const Commentator = styled.div`
  font-size: 0.875rem;
  color: #29ba9b;
  font-weight: 600;
`;

// Player Spotlight Section
const PlayerSpotlight = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  margin-top: 2rem;
  color: white;
`;

const SpotlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const PlayerCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(41, 186, 155, 0.2);
  }
`;

const PlayerAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #29ba9b, #22a085);
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: white;
`;

const PlayerName = styled.h4`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
`;

const PlayerRank = styled.div`
  font-size: 0.875rem;
  color: #29ba9b;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const PlayerStats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;

const PlayerStatItem = styled.div`
  text-align: center;
`;

const PlayerStatValue = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #29ba9b;
`;

const PlayerStatLabel = styled.div`
  font-size: 0.75rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

// Tournament Bracket Section
const BracketSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  margin-top: 2rem;
  color: white;
`;

const BracketContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  overflow-x: auto;
  padding: 1rem 0;
`;

const BracketRound = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 2rem;
  min-width: 200px;
`;

const RoundTitle = styled.h4`
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: #29ba9b;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const BracketMatch = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
`;

const BracketPlayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: ${props => props.$last ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'};
  
  &:last-child {
    border-bottom: none;
  }
`;

const BracketPlayerName = styled.span`
  font-weight: ${props => props.$winner ? '700' : '500'};
  color: ${props => props.$winner ? '#29ba9b' : '#e2e8f0'};
`;

const BracketScore = styled.span`
  font-weight: 600;
  color: ${props => props.$winner ? '#29ba9b' : '#94a3b8'};
`;

function Home() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [stats, setStats] = useState({
    activePlayers: 0,
    tournamentsHosted: 0,
    playerSatisfaction: 0,
    clubPartners: 0
  });
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [currentShirtIndex, setCurrentShirtIndex] = useState(0);
  const [showShirtPopup, setShowShirtPopup] = useState(false);
  const [popupTriggered, setPopupTriggered] = useState(false);

  const [featuresRef, isVisible] = useInView({ threshold: 0.2 });

  // Sound toggle state and refs for YouTube iframe
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const iframeRef = useRef(null);
  const shirtImages = [
    '/shirt.png',
    '/shirt2.png',
    '/shirt3.png'
  ];

  // Scroll to top when Home component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Show shirt popup every time the home page loads
  useEffect(() => {
    // Only show popup if it hasn't been triggered yet
    if (!popupTriggered) {
      const timer = setTimeout(() => {
        setShowShirtPopup(true);
        setPopupTriggered(true);
      }, 2000); // Show popup after 2 seconds

      return () => clearTimeout(timer);
    }
  }, [popupTriggered]); // Depend on popupTriggered to prevent re-runs

  // Shirt image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShirtIndex((prevIndex) => 
        (prevIndex + 1) % shirtImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [shirtImages.length]);

  // Add footer visibility tracking
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowScrollIndicator(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  // Control YouTube iframe mute/unmute via IFrame Player API postMessage
useEffect(() => {
  if (!videoReady || !iframeRef.current) return;
  const playerWindow = iframeRef.current.contentWindow;
  if (!playerWindow) return;

  const sendCommand = (func, args = []) => {
    playerWindow.postMessage(
      JSON.stringify({ event: 'command', func, args }),
      '*'
    );
  };

  if (isVideoMuted) {
    sendCommand('mute');
    sendCommand('setVolume', [0]);
  } else {
    sendCommand('unMute');
    sendCommand('setVolume', [100]);
  }
}, [isVideoMuted, videoReady]);

// Attempt to enforce HD playback quality once the player iframe has loaded
useEffect(() => {
  if (!videoReady || !iframeRef.current) return;
  const playerWindow = iframeRef.current.contentWindow;
  if (!playerWindow) return;

  const sendCommand = (func, args = []) => {
    playerWindow.postMessage(
      JSON.stringify({ event: 'command', func, args }),
      '*'
    );
  };

  const qualities = ['highres', 'hd1080', 'hd720', 'large'];
  // Try immediately
  qualities.forEach(q => sendCommand('setPlaybackQuality', [q]));
  // Retry after a short delay to help with adaptive selection
  const t1 = setTimeout(() => {
    qualities.forEach(q => sendCommand('setPlaybackQuality', [q]));
  }, 1000);
  // One more retry
  const t2 = setTimeout(() => {
    qualities.forEach(q => sendCommand('setPlaybackQuality', [q]));
  }, 3000);

  return () => {
    clearTimeout(t1);
    clearTimeout(t2);
  };
}, [videoReady]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const scrollToFeatures = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Fetch stats from backend
  useEffect(() => {
    const fetchStats = async () => {
      try {
        // TODO: Replace with actual API endpoint when backend is ready
        // const response = await fetch('/api/stats');
        // const data = await response.json();
        // setStats(data);
        
        // For now, using placeholder data
        setStats({
          activePlayers: 0,
          tournamentsHosted: 0,
          playerSatisfaction: 0,
          clubPartners: 0
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <>
      <main>
        <Hero>
          <HeroContent>
            <Title>
              {isAuthenticated ? (
                <>Welcome back, <span>{user?.firstName}</span>!</>
              ) : (
                <>Philippine <span>Pickleball</span> League</>
              )}
            </Title>
            <Subtitle>
              {isAuthenticated ? (
                "Ready to continue your pickleball journey? Discover upcoming tournaments in your area, connect with fellow players in our active community forum, track your ranking progress, and find the best courts and clubs near you. Your next great match is just a click away!"
              ) : (
                "Join the fastest growing pickleball community in the Philippines. Connect with players, join tournaments, and track your progress in a vibrant sports community."
              )}
            </Subtitle>
            {!isAuthenticated && (
            <CTASection>
              <CTAButton to="/register" $primary $fullWidth>
                Get Started
              </CTAButton>
            </CTASection>
            )}
          </HeroContent>
          <ScrollIndicator onClick={scrollToFeatures} $show={showScrollIndicator}>
            <span className="scroll-text">Scroll Down</span>
            <div className="arrows">
              <div className="arrow" />
              <div className="arrow" />
              <div className="arrow" />
            </div>
          </ScrollIndicator>
        </Hero>

        <VideoSection>
          <SectionContent>
            <VideoContainer ref={featuresRef}>
              <VideoWrapper>
                <VideoOverlay />
                <SoundToggle
                  onClick={() => setIsVideoMuted(prev => !prev)}
                  aria-pressed={!isVideoMuted}
                  aria-label={isVideoMuted ? 'Enable sound' : 'Mute sound'}
                  $muted={isVideoMuted}
                >
                  <SoundIcon $muted={isVideoMuted}>
                    {isVideoMuted ? '🔇' : '🔊'}
                  </SoundIcon>
                  <SoundText>{isVideoMuted ? 'Sound Off' : 'Sound On'}</SoundText>
                </SoundToggle>
                <iframe
                  ref={iframeRef}
                  onLoad={() => setVideoReady(true)}
                  src="https://www.youtube.com/embed/xo6HlPGLb8g?start=28&end=115&autoplay=1&mute=1&playsinline=1&controls=0&disablekb=1&modestbranding=1&rel=0&fs=0&enablejsapi=1&vq=hd1080&cc_load_policy=1&cc_lang_pref=en"
                  title="YouTube video player"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0, borderRadius: '16px' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </VideoWrapper>
              
              <VideoInfo>
                <VideoTitle>
                  PPL <span>MMC</span> SEASON 1
                </VideoTitle>
                <VideoSubtitle>
                  One Sports (Cignal) aired an exclusive coverage of the final day of the Philippine Pickleball League Metro Manila Championships (PPL MMC) Season 1, where the country's best players battled in thrilling matches to claim the league's first championship title.
                </VideoSubtitle>
                <VideoActions>
                  <ActionButton as="a" href="https://www.facebook.com/share/p/16NviJeFTc/" target="_blank" rel="noopener noreferrer" $primary>
                    Season 1 Winners
                  </ActionButton>
                  <ActionButton as="a" href="https://www.facebook.com/share/p/16DmTp6geh/" target="_blank" rel="noopener noreferrer" $secondary>
                    Event Gallery
                  </ActionButton>
                </VideoActions>
              </VideoInfo>
            </VideoContainer>
          </SectionContent>
        </VideoSection>

        <ShopSection>
          <ShopBackground />
          <SectionContent>
            <ShopContainer>
              <ShopContent>
                <ShopTitle>
                  Discover Your <br /><span className="highlight">Sporty Edge</span>
                </ShopTitle>
                <ShopDescription>
                  Get the best sports apparel with the best offer that you can afford. Available for nationwide shipping!
                </ShopDescription>
                
                <ShopButton href="https://pplonlinestore.com/" target="_blank" rel="noopener noreferrer">
                  <span>Shop Now</span>
                </ShopButton>
              </ShopContent>
              <ShopImageContainer>
                <ShirtImage 
                  src={shirtImages[currentShirtIndex]} 
                  alt="PPL Official Shirt" 
                  key={currentShirtIndex}
                />
              </ShopImageContainer>
            </ShopContainer>
          </SectionContent>
        </ShopSection>

        <TournamentHostSection>
          <TournamentHostTitle>
            Become an <span className="highlight">Official Tournament Host</span>
          </TournamentHostTitle>
          
          <TournamentHostDescription>
            Join our network of tournament hosts and bring pickleball competitions to your community.<br />
            Get access to our comprehensive hosting platform and official PPL sanctioning.
          </TournamentHostDescription>
          
          <TournamentHostBenefits>
            <TournamentHostBenefit className="sanctioning">
              <div className="benefit-content">
                <h4>Official PPL Sanctioning</h4>
                <p>Get your tournaments officially recognized</p>
              </div>
            </TournamentHostBenefit>
            
            <TournamentHostBenefit className="network">
              <div className="benefit-content">
                <h4>Community Network</h4>
                <p>Connect with players nationwide</p>
              </div>
            </TournamentHostBenefit>
            
            <TournamentHostBenefit className="platform">
              <div className="benefit-content">
                <h4>Comprehensive Platform</h4>
                <p>All-in-one tournament management tools</p>
              </div>
            </TournamentHostBenefit>
          </TournamentHostBenefits>
          
          <TournamentHostCTA>
            <TournamentHostButton 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=phpickleballleague@gmail.com&su=Tournament%20Hosting%20Inquiry&body=Hello,%0D%0A%0D%0AI%20am%20interested%20in%20hosting%20a%20tournament%20through%20the%20Philippine%20Pickleball%20League%20platform.%20Please%20provide%20me%20with%20more%20information%20about%20the%20hosting%20process%20and%20requirements.%0D%0A%0D%0AThank%20you!"
              target="_blank"
              rel="noopener noreferrer"
              as="a"
            >
              <span>Start Hosting Today</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </TournamentHostButton>
          </TournamentHostCTA>
        </TournamentHostSection>

        <AboutSection>
          <SectionContent>
            <AboutContent>
              <AboutTextContent>
                <AboutHeading>
                  About <span>Philippine Pickleball League</span>
                </AboutHeading>
                <AboutText>
                  The Philippine Pickleball League unites Filipino players from Luzon, Visayas, and Mindanao to celebrate and grow the sport of pickleball. Guided by the Filipino spirit of bayanihan, we aim to make pickleball an inclusive and accessible sport for all.
                </AboutText>
              </AboutTextContent>
              {/* <AboutStats>
                <div>
                  <h3>{stats.activePlayers > 0 ? `${stats.activePlayers}+` : '0'}</h3>
                  <p>Active Players</p>
                </div>
                <div>
                  <h3>{stats.tournamentsHosted > 0 ? `${stats.tournamentsHosted}+` : '0'}</h3>
                  <p>Tournaments Hosted</p>
                </div>
                <div>
                  <h3>{stats.playerSatisfaction > 0 ? `${stats.playerSatisfaction}%` : '0%'}</h3>
                  <p>Player Satisfaction</p>
                </div>
                <div>
                  <h3>{stats.clubPartners > 0 ? `${stats.clubPartners}+` : '0'}</h3>
                  <p>Club Partners</p>
                </div>
              </AboutStats> */}
            </AboutContent>
          </SectionContent>
        </AboutSection>
      </main>
      
      {/* Shirt Popup */}
      {showShirtPopup && (
        <ShirtPopup isOpen={showShirtPopup} onClose={() => setShowShirtPopup(false)} />
      )}
    </>
  );
}

export default Home;