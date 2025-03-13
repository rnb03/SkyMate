import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCloud, FaPlaneDeparture } from 'react-icons/fa';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    z-index: -2;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/assets/images/cloud-pattern.svg');
    background-size: cover;
    opacity: 0.1;
    z-index: -1;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  color: white;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 600px;
  opacity: 0.9;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
  
  svg {
    margin-left: 0.5rem;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  transition: all ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: white;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
`;

const FloatingPlane = styled(motion.div)`
  position: absolute;
  color: rgba(255, 255, 255, 0.2);
  font-size: 3rem;
`;

const FloatingCloud = styled(motion.div)`
  position: absolute;
  color: rgba(255, 255, 255, 0.15);
  font-size: 2.5rem;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Navigate the Skies <br />with SkyMate
        </HeroTitle>
        
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Test implementation of a flight tracking website.
          Hi, I am Rayan, a software engineer in Dallas, TX. More to come!
        </HeroSubtitle>
        
        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <PrimaryButton to="/flights">
            Track Flights <FaArrowRight />
          </PrimaryButton>
          <SecondaryButton to="/api">
            Explore API
          </SecondaryButton>
        </ButtonGroup>
      </HeroContent>
      
      <FloatingElements>
        {[...Array(5)].map((_, i) => (
          <FloatingPlane
            key={`plane-${i}`}
            initial={{ 
              x: -100, 
              y: 100 + Math.random() * 400,
              rotate: 15 + Math.random() * 10
            }}
            animate={{ 
              x: window.innerWidth + 100,
              y: 50 + Math.random() * 400,
            }}
            transition={{ 
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 5
            }}
          >
            <FaPlaneDeparture />
          </FloatingPlane>
        ))}
        
        {[...Array(8)].map((_, i) => (
          <FloatingCloud
            key={`cloud-${i}`}
            initial={{ 
              x: -100, 
              y: 50 + Math.random() * 500
            }}
            animate={{ 
              x: window.innerWidth + 100
            }}
            transition={{ 
              duration: 30 + Math.random() * 20,
              repeat: Infinity,
              delay: i * 3
            }}
          >
            <FaCloud />
          </FloatingCloud>
        ))}
      </FloatingElements>
    </HeroSection>
  );
};

export default Hero;