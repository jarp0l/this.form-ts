import type { NextComponentType } from 'next';
import {
  Box,
  HStack,
  VStack,
  Heading,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import LogIn from './login';
import SignUp from './singup';

const HeroSection: NextComponentType = () => {
  const {
    isOpen: isLogInOpen,
    onOpen: onLogInOpen,
    onClose: onLogInClose,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onOpen: onSignUpOpen,
    onClose: onSignUpClose,
  } = useDisclosure();

  return (
    <Box as="section" aria-label="Hero section">
      <VStack alignItems={'center'} justifyContent={'center'}>
        <Heading
          as="h1"
          textColor={'green.500'}
          fontFamily={'mono'}
          fontSize={'60px'}
          fontWeight={'semibold'}
        >
          this.form
        </Heading>

        <Heading as="h3" pb={8}>
          Drag-n-drop form builder
        </Heading>

        <HStack spacing={10}>
          <Button
            size="lg"
            onClick={onLogInOpen}
            variant={'outline'}
            colorScheme="green"
            _hover={{ bg: 'green.500', color: 'white' }}
            _active={{ bg: 'green.600', color: 'white' }}
          >
            Log In
          </Button>
          <Button
            size="lg"
            onClick={onSignUpOpen}
            variant={'solid'}
            colorScheme="green"
          >
            Sign Up
          </Button>

          <Modal isOpen={isLogInOpen} onClose={onLogInClose} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <LogIn />
              </ModalBody>
            </ModalContent>
          </Modal>

          <Modal isOpen={isSignUpOpen} onClose={onSignUpClose} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <SignUp />
              </ModalBody>
            </ModalContent>
          </Modal>
        </HStack>

        <Heading as="h4" pt={48} pb={4}>
          Want to try without creating an account?
        </Heading>
        <Button
          size="lg"
          variant={'outline'}
          colorScheme="green"
          _hover={{ bg: 'green.500', color: 'white' }}
          _active={{ bg: 'green.600', color: 'white' }}
        >
          Live Preview
        </Button>
      </VStack>
    </Box>
  );
};

export default HeroSection;
