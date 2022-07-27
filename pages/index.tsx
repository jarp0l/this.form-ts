import { Box, Container } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Navbar from '../components/navbar';
import HeroSection from '../components/sections/hero/hero';
import AboutSection from '../components/sections/about';
import FeaturesSection from '../components/sections/features/features';

const Home: NextPage = () => (
  <>
    <Navbar />

    <Box mx={{ sm: '20px', md: '100px' }} pt={200}>
      <Container as="main">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
      </Container>
    </Box>
  </>
);

export default Home;
