import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaPlaneDeparture } from 'react-icons/fa';

const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  padding: 4rem 2rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  svg {
    margin-right: 0.5rem;
    font-size: 1.75rem;
  }
`;

const FooterDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 1.25rem;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: white;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.75rem;
  
  a {
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 0.875rem;
    transition: color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: white;
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.lightGray};
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 0.875rem;
    transition: color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: white;
    }
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <FooterColumn>
            <FooterLogo to="/">
              <FaPlaneDeparture />
              SkyMate
            </FooterLogo>
            <FooterDescription>
              Your ultimate flight tracking companion. Real-time updates, 
              comprehensive flight data, and seamless API integration for developers.
            </FooterDescription>
            <SocialLinks>
              <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Navigation</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <Link to="/">Home</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/flights">Flights</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/about">About Me</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/api">API</Link>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Resources</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <Link to="/api/docs">API Documentation</Link>
              </FooterLink>
              <FooterLink>
                <Link to="/faq">FAQ</Link>
              </FooterLink>
              <FooterLink>
                <a href="https://github.com/yourusername/skymate" target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </FooterLink>
              <FooterLink>
                <Link to="/contact">Contact</Link>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Contact</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <a href="mailto:contact@skymate.app">contact@skymate.app</a>
              </FooterLink>
              <FooterLink>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  @skymate
                </a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterContent>
        
        <FooterBottom>
          <Copyright>
            &copy; {new Date().getFullYear()} SkyMate. All rights reserved.
          </Copyright>
          <FooterBottomLinks>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </FooterBottomLinks>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;