import {
  Flex,
  HStack,
  Heading,
  IconButton,
  Tooltip,
  useColorMode,
  Icon
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaSun } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

function TopBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="header" w="full" minH="4rem" shrink={0} justifyContent="center">
      <Flex
        w="6xl"
        maxWidth="full"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading fontSize="2xl" userSelect="none" fontWeight="semibold">
          Pastebook
        </Heading>
        <HStack spacing="2.5">
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
