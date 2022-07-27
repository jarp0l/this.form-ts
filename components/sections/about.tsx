import { Box, Heading, VStack, Text } from '@chakra-ui/react';
import type { NextComponentType } from 'next';

const AboutSection: NextComponentType = () => (
  <Box as="section" id={'about'} pt={250} pb={100}>
    <VStack alignItems={'center'} justifyContent={'center'}>
      <Heading size={'xl'} textColor={'green.500'} fontFamily={'mono'}>
        this.form
      </Heading>

      <Heading size={'xl'}>
        is a drag-n-drop form builder designed with simplicity and privacy in
        mind.
      </Heading>
    </VStack>
  </Box>
);

export default AboutSection;
