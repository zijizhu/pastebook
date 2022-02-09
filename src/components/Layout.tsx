import { FC, useContext } from 'react';
import { Flex, Text, Center, Spinner } from '@chakra-ui/react';

import TopBar from './TopBar';
import MenuBar from './MenuBar';
import { AuthContext } from '../contexts/AuthGuard';

const Loading = () => (
  <Center flex={1}>
    <Spinner />
  </Center>
);

const Layout: FC = ({ children }) => {
  const { isLoaded, session } = useContext(AuthContext);

  return (
    <Flex minH="100vh" direction="column">
      <TopBar />
      <Flex pt="16" as="main" flex={1} direction="column">
        {isLoaded ? (
          <>
            {session ? (
              <>
                <MenuBar />
                {children}
              </>
            ) : (
              <>{children}</>
            )}
          </>
        ) : (
          <Loading />
        )}
      </Flex>
      <Flex
        as="footer"
        w="full"
        minH="10"
        shrink={0}
        alignItems="center"
        justifyContent="center"
      >
        <Text textColor="gray.400" fontWeight="medium">
          2022 Zhijie Zhu
        </Text>
      </Flex>
    </Flex>
  );
};

export default Layout;
