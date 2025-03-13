import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaPlaneDeparture } from 'react-icons/fa';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ scrolled }) => 
    scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => 
    scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ scrolled, theme }) => 
    scrolled ? theme.shadows.medium : 'none'};
  transition: all ${({ theme }) => theme.transitions.default};
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ scrolled, theme }) => 
    scrolled ? theme.colors.primary : theme.colors.white};
  
  svg {
    margin-right: 0.5rem;
    font-size: 1.75rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  font-weight: 500;
  color: ${({ scrolled, theme, active }) => 
    active 
      ? scrolled ? theme.colors.primary : theme.colors.white
      : scrolled ? theme.colors.darkGray : 'rgba(255, 255, 255, 0.8)'};
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ scrolled, theme }) => 
      scrolled ? theme.colors.primary : theme.colors.white};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background-color: ${({ scrolled, theme }) => 
      scrolled ? theme.colors.primary : theme.colors.white};
    transition: width ${({ theme }) => theme.transitions.default};
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  color: ${({ scrolled, theme }) => 
    scrolled ? theme.colors.darkGray : theme.colors.white};
  font-size: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  max-width: 300px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  z-index: 200;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadows.xl};
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const MobileNavLink = styled(Link)`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme, active }) => 
    active ? theme.colors.primary : theme.colors.darkGray};
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CloseButton = styled.button`
  align-self: flex-end;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 150;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <>
      <HeaderContainer
        scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo to="/" scrolled={scrolled}>
          <FaPlaneDeparture />
          SkyMate
        </Logo>
        
        <NavLinks>
          <NavLink to="/flights" active={isActive('/flights')} scrolled={scrolled}>
            Flights
          </NavLink>
          <NavLink to="/about" active={isActive('/about')} scrolled={scrolled}>
            About Me
          </NavLink>
          <NavLink to="/api" active={isActive('/api')} scrolled={scrolled}>
            API
          </NavLink>
        </NavLinks>
        
        <MobileMenuButton 
          scrolled={scrolled}
          onClick={() => setMobileMenuOpen(true)}
        >
          <FiMenu />
        </MobileMenuButton>
      </HeaderContainer>
      
      {mobileMenuOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      <MobileMenu
        initial={{ x: '100%' }}
        animate={{ x: mobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween' }}
      >
        <CloseButton onClick={() => setMobileMenuOpen(false)}>
          <FiX />
        </CloseButton>
        
        <MobileNavLinks>
          <MobileNavLink 
            to="/" 
            active={isActive('/')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </MobileNavLink>
          <MobileNavLink 
            to="/flights" 
            active={isActive('/flights')}
            onClick={() => setMobileMenuOpen(false)}
          >
            Flights
          </MobileNavLink>
          <MobileNavLink 
            to="/about" 
            active={isActive('/about')}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Me
          </MobileNavLink>
          <MobileNavLink 
            to="/api" 
            active={isActive('/api')}
            onClick={() => setMobileMenuOpen(false)}
          >
            API
          </MobileNavLink>
        </MobileNavLinks>
      </MobileMenu>
    </>
  );
};

export default Header;