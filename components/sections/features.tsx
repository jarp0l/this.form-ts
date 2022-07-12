import { Box, Heading, Text } from '@chakra-ui/react';
import type { NextComponentType } from 'next';

const Features: NextComponentType = () => (
  <Box id={'features'} pt={250} pb={100}>
    <Heading as={'h1'}>features</Heading>
    <Text size={'lg'}>drag-n-drop form builder</Text>
  </Box>
);

export default Features;
