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
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import LogIn from './login';
import SignUp from './singup';

const Main: NextComponentType = () => {
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
    <Box as="section" py={'100px'} aria-label="Hero section">
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

        <HStack spacing={10}>
          <Button size="lg" onClick={onLogInOpen}>
            Log In
          </Button>
          <Button size="lg" onClick={onSignUpOpen}>
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
      </VStack>
    </Box>
  );
};

export default Main;
