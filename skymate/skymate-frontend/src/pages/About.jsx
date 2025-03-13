import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 8rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const About = () => {
  return (
    <PageContainer>
      <PageTitle>About Me</PageTitle>
      <p>This page is under construction. Soon you'll learn more about the developer behind SkyMate!</p>
    </PageContainer>
  );
};

export default About;