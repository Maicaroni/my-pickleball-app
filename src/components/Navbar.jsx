import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const GlobalReset = styled.div`
  * {
    &:focus {
      outline: none;
    }
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background: rgba(255, 255, 255, 0.98);
  padding: 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  backdrop-filter: blur(8px);
  z-index: 1000;
  transition: transform 0.3s ease;

  ${props => props.$hidden && `
    transform: translateY(-100%);
  `}

  @media (max-width: 768px) {
    height: 64px;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Logo = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: 4px;
    border-radius: 4px;
  }

  img {
    height: 65px;
    width: auto;
  
  @media (max-width: 768px) {
      height: 50px;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MainLinks = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-right: 12px;

  @media (max-width: 1024px) {
    gap: 24px;
  }
`;

const NavLink = styled.button`
  color: #475569;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  padding: 8px 4px;
  position: relative;
  letter-spacing: -0.2px;
  background: none;
  border: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 2px;
    background: #29ba9b;
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #234255;
    
    &:after {
      transform: scaleX(1);
    }
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: 4px;
    border-radius: 4px;
    color: #234255;
    
    &:after {
      transform: scaleX(1);
    }
  }

  ${props => props.$active && `
    color: #234255;
    &:after {
      transform: scaleX(1);
    }
  `}
`;

const AuthSection = styled.div`
  display: flex;
  gap: 12px;
`;

const AuthButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }
  
  ${props => props.$primary ? `
    background: #29ba9b;
    color: white;
    
    &:hover {
      background: #239b83;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(41, 186, 155, 0.2);
    }

    &:focus-visible {
      outline: 2px solid #29ba9b;
      outline-offset: 2px;
      background: #239b83;
    }
  ` : `
    color: #475569;
    border: 1.5px solid #e2e8f0;
    background: transparent;
    
    &:hover {
      background: #f8fafc;
      color: #234255;
      border-color: #cbd5e1;
    }

    &:focus-visible {
      outline: 2px solid #475569;
      outline-offset: 2px;
      background: #f8fafc;
      color: #234255;
    }
  `}

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 8px;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    color: #29ba9b;
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: 2px;
    border-radius: 4px;
    color: #29ba9b;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    stroke-width: 2;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background: white;
  padding: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: translateY(-100%);
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;

  @media (max-width: 768px) {
    display: block;
    ${props => props.$isOpen && `
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    `}
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

const MobileNavLink = styled.button`
  color: #475569;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #f8fafc;
    color: #234255;
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: -2px;
    background: #f8fafc;
    color: #234255;
  }

  ${props => props.$active && `
    color: #29ba9b;
    background: #f0fdf4;
  `}
`;

const MobileAuthSection = styled(AuthSection)`
  flex-direction: column;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
`;

const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);

  @media (max-width: 768px) {
    display: block;
    ${props => props.$isOpen && `
      opacity: 1;
      visibility: visible;
    `}
  }
`;

function MenuIcon({ isOpen }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      style={{ transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s ease' }}
    >
      {isOpen ? (
        <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavHidden(currentScrollY > 72 && currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <GlobalReset>
    <Nav $hidden={isNavHidden}>
      <NavContainer>
          <Logo onClick={() => handleNavigation('/')}>
            <img src="/ppl-logo.svg" alt="Philippine Pickleball League" />
        </Logo>

        <NavLinks>
          <MainLinks>
              <NavLink 
                onClick={() => handleNavigation('/forum')} 
                $active={location.pathname === '/forum'}
              >
                Forum
              </NavLink>
              <NavLink 
                onClick={() => handleNavigation('/tournament')} 
                $active={location.pathname === '/tournament'}
              >
                Tournaments
              </NavLink>
              <NavLink 
                onClick={() => handleNavigation('/ranks')} 
                $active={location.pathname === '/ranks'}
              >
                Ranks
              </NavLink>
              <NavLink 
                onClick={() => handleNavigation('/clubs-courts')} 
                $active={location.pathname === '/clubs-courts'}
              >
                Clubs & Courts
              </NavLink>
          </MainLinks>
          <AuthSection>
              <AuthButton onClick={() => handleNavigation('/signin')}>Sign In</AuthButton>
              <AuthButton onClick={() => handleNavigation('/register')} $primary>Register</AuthButton>
          </AuthSection>
        </NavLinks>

        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuIcon isOpen={isMenuOpen} />
        </MobileMenuButton>
      </NavContainer>

      <MobileMenu $isOpen={isMenuOpen}>
        <MobileNavLinks>
            <MobileNavLink 
              onClick={() => handleNavigation('/forum')} 
              $active={location.pathname === '/forum'}
            >
              Forum
            </MobileNavLink>
            <MobileNavLink 
              onClick={() => handleNavigation('/tournament')} 
              $active={location.pathname === '/tournament'}
            >
              Tournament
            </MobileNavLink>
            <MobileNavLink 
              onClick={() => handleNavigation('/ranks')} 
              $active={location.pathname === '/ranks'}
            >
              Ranks
            </MobileNavLink>
            <MobileNavLink 
              onClick={() => handleNavigation('/clubs-courts')} 
              $active={location.pathname === '/clubs-courts'}
            >
              Clubs & Courts
            </MobileNavLink>
        </MobileNavLinks>
        <MobileAuthSection>
            <AuthButton onClick={() => handleNavigation('/signin')}>Sign In</AuthButton>
            <AuthButton onClick={() => handleNavigation('/register')} $primary>Register</AuthButton>
        </MobileAuthSection>
      </MobileMenu>

      <Overlay $isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
    </Nav>
    </GlobalReset>
  );
}

export default Navbar; 