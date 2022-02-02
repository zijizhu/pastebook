import {
  Flex,
  HStack,
  Heading,
  IconButton,
  Tooltip,
  useColorMode,
  Icon
} from '@chakra-ui/react';
import Image from 'next/image';
import Logo from '../public/logo.png';
import { MoonIcon } from '@chakra-ui/icons';
import { FaSun } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

function TopBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="header" w="full" minH="4rem" shrink={0} justifyContent="center">
      <Flex
        w="6xl"
        px="6"
        maxWidth="full"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack spacing="2.5">
          <Image src={Logo} alt="logo" width={35} height={35} />
          <Heading
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
          </Heading>
        </HStack>
        <HStack spacing="2">
          <Tooltip mt="4" label="Github">
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
