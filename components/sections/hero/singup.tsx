import type { NextComponentType } from 'next';
import {
  Heading,
  Container,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  VStack,
  Flex,
  Button,
} from '@chakra-ui/react';
// import Button from './components/Button';

const SignUp: NextComponentType = () => (
  <Container maxW="container.sm" bg="white">
    <VStack
      spacing="28px"
      alignItems="center"
      justifyContent="center"
      py="28px"
    >
      <VStack spacing="0" alignItems="center" justifyContent="center">
        <Heading size="xl" color="green.500">
          this.form
        </Heading>
        <Heading as="h3" size="lg">
          Create a new account
        </Heading>
      </VStack>

      <FormControl w="400px">
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" type="text" placeholder="John Doe" />
      </FormControl>

      <FormControl w="400px">
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" placeholder="johndoe@example.com" />
      </FormControl>

      <FormControl w="400px">
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" placeholder="**********" />
        <FormHelperText>Make it strong and unique.</FormHelperText>
      </FormControl>

      <FormControl w="400px">
        <Button
          bg="green.500"
          color="white"
          type="submit"
          w="400px"
          size="md"
          _hover={{ bg: 'green.600' }}
        >
          Sign Up
        </Button>
      </FormControl>
    </VStack>
  </Container>
);

export default SignUp;
