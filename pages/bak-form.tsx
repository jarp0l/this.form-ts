import { Box, Container } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';

const Form: NextPage = () => (
  <>
    <Box mx={{ sm: '20px', md: '100px' }} pt={200}>
      <Container as="main"></Container>
    </Box>
  </>
);

export default Form;
