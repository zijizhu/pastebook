import {
  Icon,
  Flex,
  chakra,
  HStack,
  Tooltip,
  IconButton,
  useColorMode
} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { FaSun } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { MoonIcon } from '@chakra-ui/icons';

import MenuDrawer from './MenuDrawer';
import { useIsMobile } from '../hooks';
import Logo from '../../public/logo.png';
import { AuthContext } from '../contexts/AuthGuard';

function TopBar() {
  const { isMobile } = useIsMobile();
  const { session } = useContext(AuthContext);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      bg="bg"
      w="full"
      minH="16"
      shrink={0}
      pos="fixed"
      as="header"
      zIndex="sticky"
      justifyContent="center"
    >
      <Flex
        px="4"
        w="6xl"
        maxWidth="full"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href={session ? '/app' : '/'} passHref>
          <chakra.a display="flex" alignItems="center">
            <Image src={Logo} alt="logo" width={35} height={35} />
            {!isMobile && (
              <chakra.span
                ml="3"
                bgClip="text"
                fontSize="2xl"
                fontWeight="bold"
                bgGradient={
                  colorMode === 'light'
                    ? 'linear(to-r, teal.500, blue.500)'
                    : 'linear(to-r, teal.300, blue.300)'
                }
              >
                Pastebook
              </chakra.span>
            )}
          </chakra.a>
        </Link>

        <HStack spacing="2">
          <Tooltip mt="4" label="github">
            <IconButton
              variant="ghost"
              color="gray.400"
              colorScheme="gray"
              aria-label="github link"
              onClick={toggleColorMode}
              icon={<Icon w={5} h={5} as={BsGithub} />}
            />
          </Tooltip>

          <Tooltip
            mt="4"
            label={`${colorMode === 'light' ? 'dark' : 'light'} mode`}
          >
            <IconButton
              p="0"
              variant="ghost"
              color="gray.400"
              colorScheme="gray"
              onClick={toggleColorMode}
              aria-label="toggle dark mode"
              icon={
                <Icon
                  w={5}
                  h={5}
                  as={colorMode === 'light' ? MoonIcon : FaSun}
                />
              }
            />
          </Tooltip>
          {session && isMobile && <MenuDrawer />}
        </HStack>
      </Flex>
    </Flex>
  );
}

export default TopBar;
