import { ReactNode } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import TopBar from './TopBar';

function RootLayout({
  showFooter,
  children
}: {
  showFooter: boolean;
  children: ReactNode;
}) {
  console.log('rendered');

  return (
    <Flex minH="100vh" direction="column">
      <TopBar />
      <Flex as="main" flex={1} direction="column">
        {children}
      </Flex>
      {showFooter && (
        <Flex
          as="footer"
          w="full"
          minH="16"
          shrink={0}
          alignItems="center"
          justifyContent="center"
        >
          <Text textColor="gray.400" fontWeight="medium">
            2022 Zhijie Zhu
          </Text>
        </Flex>
      )}
    </Flex>
  );
}

export default RootLayout;
