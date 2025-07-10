import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styled from 'styled-components';
import logoImg from '../../public/ppl-logo.svg';

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

const MobileProfileButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 8px;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  gap: 8px;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    ${props => props.$show && `
      display: flex;
    `}
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

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }

  svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
    stroke-width: 2;
  }
`;

const MobileAuthButton = styled(AuthButton)`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const MobileBottomNav = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e2e8f0;
  padding: 4px 4px 8px 4px; /* Reduced container padding */
  z-index: 1000;
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
  min-height: 55px; /* Reduced container height */

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  /* iOS safe area support */
  padding-bottom: calc(8px + env(safe-area-inset-bottom));
`;

const MobileNavButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px; /* Increased gap for bigger buttons */
  padding: 8px 6px; /* Increased padding for bigger buttons */
  border: none;
  background: none;
  color: #64748b;
  font-size: 11px; /* Bigger font */
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 60px; /* Bigger width */
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  svg {
    width: 24px; /* Bigger icons */
    height: 24px;
    stroke: currentColor;
    stroke-width: 2;
  }

  ${props => props.$active && `
    color: #29ba9b;
  `}

  &:hover {
    color: #29ba9b;
  }
`;

const ProfileMenu = styled.div`
  display: none;
  position: fixed;
  top: 64px;
  right: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  min-width: 200px;
  overflow: hidden;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    display: block;
    ${props => props.$isOpen && `
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    `}
  }
`;

const ProfileMenuItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: white;
  text-align: left;
  color: #475569;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    background: #f8fafc;
    color: #234255;
  }

  &:focus {
    outline: none;
    background: #f8fafc;
    color: #234255;
  }

  &.logout {
    border-top: 1px solid #e2e8f0;
    color: #ef4444;

    &:hover {
      background: #fef2f2;
      color: #dc2626;
    }
  }
`;

const MobileMenu = styled.div`
  display: none;
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

const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: none;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid #e2e8f0;
  color: #475569;
  font-weight: 600;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }

  &:focus-visible {
    outline: 2px solid #29ba9b;
    outline-offset: 2px;
  }
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserName = styled.span`
  font-size: 15px;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ProfileDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  min-width: 200px;
  overflow: hidden;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease;

  ${props => props.$isOpen && `
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  `}
`;

const ProfileDropdownItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: white;
  text-align: left;
  color: #475569;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    background: #f8fafc;
    color: #234255;
  }

  &:focus {
    outline: none;
    background: #f8fafc;
    color: #234255;
  }

  &.logout {
    border-top: 1px solid #e2e8f0;
    color: #ef4444;

    &:hover {
      background: #fef2f2;
      color: #dc2626;
    }
  }
`;

const ProfileContainer = styled.div`
  position: relative;
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
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavHidden(currentScrollY > 72 && currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close profile menu when route changes
  useEffect(() => {
    setIsProfileOpen(false);
  }, [location]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileOpen && !event.target.closest('[data-profile-container]')) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isProfileOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsProfileOpen(false);
  };

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    navigate('/');
  };

  return (
    <GlobalReset>
    <Nav $hidden={isNavHidden}>
      <NavContainer>
          <Logo onClick={() => handleNavigation('/')}>
            <img src={logoImg} alt="Philippine Pickleball League" />
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
          {isAuthenticated ? (
            <ProfileContainer data-profile-container>
              <ProfileButton onClick={() => setIsProfileOpen(!isProfileOpen)}>
                <Avatar src={user?.avatar} alt={user?.name} />
                <UserName>{user?.name}</UserName>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ProfileButton>
              <ProfileDropdown $isOpen={isProfileOpen}>
                <ProfileDropdownItem onClick={() => handleNavigation('/profile')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  My Profile
                </ProfileDropdownItem>
                <ProfileDropdownItem onClick={() => handleNavigation('/settings')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Settings
                </ProfileDropdownItem>
                <ProfileDropdownItem className="logout" onClick={handleLogout}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Log Out
                </ProfileDropdownItem>
              </ProfileDropdown>
            </ProfileContainer>
          ) : (
          <AuthSection>
              <AuthButton onClick={() => handleNavigation('/signin')}>Sign In</AuthButton>
              <AuthButton onClick={() => handleNavigation('/register')} $primary>Register</AuthButton>
          </AuthSection>
          )}
        </NavLinks>

        {isAuthenticated ? (
          <MobileProfileButton 
            $show={true} 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            data-profile-container
          >
            <img src={user?.avatar} alt={user?.name} />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MobileProfileButton>
        ) : (
          <MobileAuthButton onClick={() => handleNavigation('/signin')}>
            Sign In
          </MobileAuthButton>
        )}
      </NavContainer>

      <ProfileMenu $isOpen={isProfileOpen}>
        <ProfileMenuItem onClick={() => handleNavigation('/profile')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          My Profile
        </ProfileMenuItem>
        <ProfileMenuItem onClick={() => handleNavigation('/settings')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Settings
        </ProfileMenuItem>
        <ProfileMenuItem className="logout" onClick={handleLogout}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14l5-5-5-5m5 5H9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Log Out
        </ProfileMenuItem>
      </ProfileMenu>
    </Nav>

    <MobileBottomNav>
      <MobileNavButton 
        onClick={() => handleNavigation('/')} 
        $active={location.pathname === '/'}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="9,22 9,12 15,12 15,22" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Home
      </MobileNavButton>
      
      <MobileNavButton 
              onClick={() => handleNavigation('/forum')} 
              $active={location.pathname === '/forum'}
            >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
              Forum
      </MobileNavButton>

      <MobileNavButton 
              onClick={() => handleNavigation('/tournament')} 
              $active={location.pathname === '/tournament'}
            >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M6 4v6a6 6 0 0 0 12 0V4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4h12" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 6a2 2 0 0 0 2 2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 6a2 2 0 0 1-2 2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 16v2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 16v2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 20h8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
              Tournament
      </MobileNavButton>

      <MobileNavButton 
              onClick={() => handleNavigation('/ranks')} 
              $active={location.pathname === '/ranks'}
            >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
              Ranks
      </MobileNavButton>

              <MobileNavButton 
              onClick={() => handleNavigation('/clubs-courts')} 
              $active={location.pathname === '/clubs-courts'}
            >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          C&C
        </MobileNavButton>
    </MobileBottomNav>
    </GlobalReset>
  );
}

export default Navbar; 