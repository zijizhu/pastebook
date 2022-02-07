import Link from 'next/link';
import type { FC } from 'react';
import { IconType } from 'react-icons';
import { useRouter } from 'next/router';
import { HiSearch } from 'react-icons/hi';
import { AiFillTags } from 'react-icons/ai';
import { BsStarFill } from 'react-icons/bs';
import { IoMdCalendar } from 'react-icons/io';
import { BsBoxSeam, BsFillFileTextFill } from 'react-icons/bs';
import { Flex, chakra, Text, Icon, Button, VStack } from '@chakra-ui/react';

const MenuLink: FC<{
  icon: IconType;
  url: string;
  text: string;
  isCurrent: boolean;
}> = ({ url, icon, text, isCurrent }) => {
  return (
    <Link href={url} passHref>
      <chakra.a
        p="2"
        display="flex"
        borderRadius="md"
        alignItems="center"
        fontWeight="semibold"
        transitionDuration="200ms"
        _hover={{ bgColor: 'menuHover' }}
        _active={{ bgColor: 'menuActive' }}
        color={isCurrent ? 'blue.500' : 'text'}
      >
        <Icon fill="blue.400" as={icon} mr="3" />
        {text}
      </chakra.a>
    </Link>
  );
};

const AppLayout: FC = ({ children }) => {
  const router = useRouter();

  return (
    <Flex flex={1} w="6xl" maxW="full" mx="auto">
      <Flex
        p="4"
        w="56"
        shrink={0}
        direction="column"
        display={{ base: 'none', md: 'flex' }}
      >
        <VStack spacing="3" mb="2">
          <Button
            leftIcon={<Icon as={BsFillFileTextFill} />}
            colorScheme="blue"
            isFullWidth
          >
            New Item
          </Button>
          <Button leftIcon={<Icon as={HiSearch} />} isFullWidth>
            Search
          </Button>
        </VStack>
        <Text userSelect="none" size="sm" fontWeight="bold" my="2">
          YOUR PASTES
        </Text>

        <MenuLink
          isCurrent={router.pathname === '/app'}
          url="/app"
          icon={BsStarFill}
          text="Quick Access"
        />
        <MenuLink
          isCurrent={router.pathname === '/app/all'}
          url="/app/all"
          icon={BsBoxSeam}
          text="All Items"
        />
        <MenuLink
          isCurrent={router.pathname === '/app/calendar'}
          url="/app/calendar"
          icon={IoMdCalendar}
          text="Calendar"
        />
        <MenuLink
          isCurrent={router.pathname === '/app/tags'}
          url="/app/tags"
          icon={AiFillTags}
          text="Tags"
        />
      </Flex>
      {children}
    </Flex>
  );
};

export default AppLayout;
