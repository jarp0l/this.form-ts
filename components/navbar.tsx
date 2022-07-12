import { ReactNode } from 'react';
import type { NextComponentType } from 'next';
import {
  Box,
  Flex,
  HStack,
  Stack,
  Button,
  Text,
  IconButton,
  Link as ChakraLink,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = [
  {
    name: 'home',
    path: '#',
  },
  {
    name: 'about',
    path: '#about',
  },
  {
    name: 'features',
    path: '#features',
  },
  // {
  //   name: "docs",
  //   path: "/docs",
  // },
];

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Box
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      // bg: useColorModeValue("gray.200", "gray.700"),
      bg: 'gray.200',
    }}
  >
    <ChakraLink href={path}>
      <Text fontSize={'2xl'}>{children}</Text>
    </ChakraLink>
  </Box>
);

const Navbar: NextComponentType = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box pt={'20px'}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8}>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
            justifyContent={'flex-end'}
          >
            {Links.map(({ name, path }) => (
              <NavLink key={path} path={path}>
                {name}
              </NavLink>
            ))}
          </HStack>
          {/* <ColorModeSwitcher /> */}
          <Button
            size="lg"
            bg={'green.500'}
            color={'white'}
            _hover={{
              bg: 'green.600',
            }}
            _active={{
              bg: 'green.700',
            }}
          >
            Get Started
          </Button>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map(({ name, path }) => (
              <NavLink key={path} path={path}>
                {name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
