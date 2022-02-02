import type { NextPage } from 'next';
import { Text, Flex, Heading, useColorMode, chakra } from '@chakra-ui/react';
import Head from 'next/head';

const Home: NextPage = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Pastebook Home</title>
      </Head>
      <Flex flex={1} w="full" direction="column" alignItems="center">
        <Heading
          userSelect="none"
          textAlign="center"
          mt="12"
          fontSize={['4xl', '5xl', '6xl']}
          fontWeight="black"
          bgClip={colorMode === 'dark' ? 'text' : 'border-box'}
          bgGradient={
            colorMode === 'dark' ? 'linear(to-r, teal.300, blue.300)' : 'none'
          }
        >
          Your{' '}
          <chakra.span
            bgClip={colorMode === 'light' ? 'text' : 'border-box'}
            bgGradient={
              colorMode === 'light'
                ? 'linear(to-r, teal.500, blue.500)'
                : 'initial'
            }
          >
            All-in-one
          </chakra.span>
          <br /> Clipboard Manager
        </Heading>
      </Flex>
      <footer></footer>
    </>
  );
};

export default Home;
