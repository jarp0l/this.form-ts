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
    _hover={{
      textDecoration: 'underline',
    }}
  >
    <ChakraLink
      href={path}
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Text fontSize={'2xl'}>{children}</Text>
    </ChakraLink>
  </Box>
);

const Navbar: NextComponentType = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        as="header"
        position={'fixed'}
        h={24}
        w={'100%'}
        alignItems={'center'}
        justifyContent={'space-between'}
        bg={'white'}
        px={{ sm: '20px', md: '100px' }}
        mt={0}
      >
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={16}>
          <HStack
            as={'nav'}
            spacing={16}
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
        <Box pt={{ sm: 24 }} pl={{ sm: 6 }} pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map(({ name, path }) => (
              <NavLink key={path} path={path}>
                {name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </>
  );
};

export default Navbar;
