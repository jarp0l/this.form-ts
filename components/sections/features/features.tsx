import { Box, Heading, VStack, Text, Flex, Spacer } from '@chakra-ui/react';
import type { NextComponentType } from 'next';
import Card from './card';

const FeaturesSection: NextComponentType = () => (
  <Box as="section" id={'features'} pt={250} pb={100}>
    <VStack alignItems={'center'} justifyContent={'center'}>
      <Heading as={'h1'}>features</Heading>
      <Text size={'lg'}>drag-n-drop form builder</Text>

      <Card />
      <Card />
      <Card />
    </VStack>
  </Box>
);

export default FeaturesSection;
