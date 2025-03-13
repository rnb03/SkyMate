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

const Api = () => {
  return (
    <PageContainer>
      <PageTitle>API Documentation</PageTitle>
      <p>This page is under construction. Check back soon for comprehensive API documentation!</p>
    </PageContainer>
  );
};

export default Api;