import type { NextPage } from 'next';
import Image from 'next/image';
import Logo from '../public/logo.png';
import {
  Text,
  Flex,
  Heading,
  useColorMode,
  chakra,
  Button,
  useBreakpointValue
} from '@chakra-ui/react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import Head from 'next/head';

const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  const buttonSize = useBreakpointValue({ base: 'md', lg: 'lg' });

  return (
    <>
      <Head>
        <title>Pastebook Home</title>
      </Head>
      <Flex flex={1} p="8" direction="column" alignItems="center">
        <Image src={Logo} alt="logo" width={120} height={120} />
        <Heading
          mt="12"
          userSelect="none"
          textAlign="center"
          fontSize={['3xl', '4xl', '5xl', '6xl']}
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
        <Text
          textAlign="center"
          fontSize={['lg', 'xl', '2xl']}
          mt="6"
          fontWeight="medium"
        >
          Save all your clipboard content on the cloud. Get them back at
          anytime.
        </Text>
        <Button
          size={buttonSize}
          rightIcon={<IoMdArrowRoundForward />}
          colorScheme="teal"
          mt={['6', '8', '12']}
        >
          GET STARTED
        </Button>
      </Flex>
      <footer></footer>
    </>
  );
};

export default Home;
