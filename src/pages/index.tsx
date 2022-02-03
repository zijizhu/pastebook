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
  useBreakpointValue,
  Box,
  Container
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { IoMdArrowRoundForward } from 'react-icons/io';
import Head from 'next/head';

const Home: NextPage = () => {
  const router = useRouter();
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
          onClick={() => router.push('/login')}
        >
          GET STARTED
        </Button>

        <Flex
          as="section"
          direction={{ base: 'column', md: 'row' }}
          mx="auto"
          p="4"
          mt="12"
        >
          <Container maxW={{ base: 'full', lg: '80' }} h="40" p="4">
            <Heading fontSize="lg" mb="4">
              Fully Controlled
            </Heading>
            <Text fontWeight="medium">
              Say goodbye to Loggers and Chrome Extensions. You decide what to
              save, and we save them all.
            </Text>
          </Container>
          <Container maxW={{ base: 'full', lg: '80' }} h="40" p="4">
            <Heading fontSize="lg" mb="4">
              Web based
            </Heading>
            <Text fontWeight="medium">
              Say goodbye to mobile and desktop apps. You don’t need to install
              and update anymore.
            </Text>
          </Container>
          <Container maxW={{ base: 'full', lg: '80' }} p="4">
            <Heading fontSize="lg" mb="4">
              Fast and Intuitive
            </Heading>
            <Text fontWeight="medium">
              Say goodbye to pastebin. Enjoy something built with latest
              technology and UX in mind.
            </Text>
          </Container>
        </Flex>
      </Flex>
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
    </>
  );
};

export default Home;
