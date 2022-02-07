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
import { FaSun } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { MoonIcon } from '@chakra-ui/icons';

import Logo from '../../public/logo.png';

function TopBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="header" w="full" minH="16" shrink={0} justifyContent="center">
      <Flex
        w="6xl"
        px="4"
        maxWidth="full"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack spacing="2.5">
          <Image src={Logo} alt="logo" width={35} height={35} />

          <Link href="/" passHref>
            <chakra.a
              bgClip="text"
              bgGradient={
                colorMode === 'light'
                  ? 'linear(to-r, teal.500, blue.500)'
                  : 'linear(to-r, teal.300, blue.300)'
              }
              fontSize="2xl"
              userSelect="none"
              fontWeight="bold"
            >
              Pastebook
            </chakra.a>
          </Link>
        </HStack>

        <HStack spacing="2">
          <Tooltip mt="4" label="github">
            <IconButton
              variant="ghost"
              colorScheme="gray"
              color="gray.400"
              onClick={toggleColorMode}
              aria-label="github link"
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
              colorScheme="gray"
              color="gray.400"
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
        </HStack>
      </Flex>
    </Flex>
  );
}

export default TopBar;
