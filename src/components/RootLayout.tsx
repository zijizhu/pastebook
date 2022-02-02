import { ReactNode } from 'react';
import TopBar from './TopBar';
import { Flex } from '@chakra-ui/react';

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Flex minH="100vh" direction="column">
      <TopBar />
      <Flex as="main" flex={1} direction="column">
        {children}
      </Flex>
    </Flex>
  );
}

export default RootLayout;
