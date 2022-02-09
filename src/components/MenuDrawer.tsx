import {
  Icon,
  chakra,
  Drawer,
  IconButton,
  DrawerBody,
  CloseButton,
  DrawerHeader,
  useColorMode,
  DrawerOverlay,
  DrawerContent,
  useDisclosure
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRef } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';

import MenuBar from './MenuBar';

const MenuDrawer = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const openBtnRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <IconButton
        variant="ghost"
        color="gray.400"
        colorScheme="gray"
        aria-label="open menu"
        onClick={onOpen}
        ref={openBtnRef}
        icon={<Icon w={5} h={5} as={HamburgerIcon} />}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={openBtnRef}
        initialFocusRef={closeBtnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="bg">
          <DrawerHeader
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link href="/app" passHref>
              <chakra.a
                ml="3"
                bgClip="text"
                bgGradient={
                  colorMode === 'light'
                    ? 'linear(to-r, teal.500, blue.500)'
                    : 'linear(to-r, teal.300, blue.300)'
                }
                fontSize="2xl"
                userSelect="none"
                fontWeight="bold"
                onClick={onClose}
              >
                Pastebook
              </chakra.a>
            </Link>

            <CloseButton ref={closeBtnRef} onClick={onClose} />
          </DrawerHeader>
          <DrawerBody>
            <MenuBar isFullWidth onBtnClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
