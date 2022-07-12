import {
  Box,
  Stack,
  Heading,
  Button,
  HStack,
  Flex,
  VStack,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Navbar from '../components/navbar';
import MainSection from '../components/sections/main/main';
import AboutSection from '../components/sections/about';
import FeaturesSection from '../components/sections/features';

const Home: NextPage = () => (
  // TO-DO: use mx=0 for 'sm' breakpoint
  <Box mx={'100px'}>
    <Navbar />

    <MainSection />
    <AboutSection />
    <FeaturesSection />
  </Box>
);

export default Home;
