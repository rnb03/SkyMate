import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const CTASection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/assets/images/cloud-pattern.svg');
    background-size: cover;
    opacity: 0.1;
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CTATitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;

const CTADescription = styled(motion.p)`
  font-size: 1.25rem;
  max-width: 700px;
  margin-bottom: 2.5rem;
  opacity: 0.9;
`;

const CTAButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
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

const CallToAction = () => {
  return (
    <CTASection>
      <Container>
        <CTATitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Elevate Your Flight Experience?
        </CTATitle>
        
        <CTADescription
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join thousands of users who rely on SkyMate for accurate flight tracking, 
          comprehensive aviation data, and seamless API integration.
        </CTADescription>
        
        <CTAButton
          to="/flights"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Get Started Now <FaArrowRight />
        </CTAButton>
      </Container>
    </CTASection>
  );
};

export default CallToAction;