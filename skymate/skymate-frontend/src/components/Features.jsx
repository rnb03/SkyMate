import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSearchLocation, FaChartLine, FaCode, FaMobileAlt } from 'react-icons/fa';

const FeaturesSection = styled.section`
  padding: 6rem 2rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.gray};
  max-width: 600px;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: all ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const FeatureIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.accent} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.black};
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
`;

const Features = () => {
  const features = [
    {
      icon: <FaSearchLocation />,
      title: 'Real-time Tracking',
      description: 'Track flights in real-time with accurate location data, estimated arrival times, and flight status updates.'
    },
    {
      icon: <FaChartLine />,
      title: 'Comprehensive Analytics',
      description: 'Access detailed flight statistics, historical data, and performance metrics for any flight or airline.'
    },
    {
      icon: <FaCode />,
      title: 'Developer API',
      description: 'Integrate SkyMates powerful flight data into your applications with our easy-to-use RESTful API'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Friendly',
      description: 'Access SkyMate on any device with our responsive design that works seamlessly on desktop, tablet, and mobile.'
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <FeaturesSection>
      <Container>
        <SectionHeader>
          <SectionTitle>Why Choose SkyMate?</SectionTitle>
          <SectionSubtitle>
            Discover the features that make SkyMate the preferred choice for flight tracking and aviation data.
          </SectionSubtitle>
        </SectionHeader>
        
        <FeaturesGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} variants={itemVariants}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;