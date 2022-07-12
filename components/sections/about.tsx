import { Box, Heading, Text } from '@chakra-ui/react';
import type { NextComponentType } from 'next';

const About: NextComponentType = () => (
  <Box id={'about'} pt={250} pb={100}>
    <Heading as={'h1'}>about</Heading>
    <Text size={'lg'}>drag-n-drop form builder</Text>
  </Box>
);

export default About;
