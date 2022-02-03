import { Stack, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <Stack spacing={6}>
    <Heading as="h2" size="xl">
      Hello!
    </Heading>
  </Stack>
);

export default Home;
