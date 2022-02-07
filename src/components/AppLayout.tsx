import { FC } from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { HiSearch } from 'react-icons/hi';
import { AiFillTags } from 'react-icons/ai';
import { BsStarFill } from 'react-icons/bs';
import { IoMdCalendar } from 'react-icons/io';
import { RiPencilFill } from 'react-icons/ri';
import { BsBoxSeam, BsFillFileTextFill } from 'react-icons/bs';
import { Flex, chakra, Text, Icon, Button, VStack } from '@chakra-ui/react';

const MenuLink: FC<{ icon: IconType; url: string; text: string }> = ({
  icon,
  url,
  text
}) => {
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
      >
        <Icon fill="blue.400" as={icon} mr="2" />
        {text}
      </chakra.a>
    </Link>
  );
};

const AppLayout: FC = ({ children }) => {
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

        <MenuLink url="/app" icon={BsStarFill} text="Quick Access" />
        <MenuLink url="/app" icon={BsBoxSeam} text="All Items" />
        <MenuLink url="/app" icon={IoMdCalendar} text="Calendar" />
        <MenuLink url="/app" icon={AiFillTags} text="Tags" />
      </Flex>
      {children}
    </Flex>
  );
};

export default AppLayout;
