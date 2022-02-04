import {
  Text,
  Flex,
  Heading,
  useColorMode,
  chakra,
  Button,
  Box,
  SimpleGrid
} from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IoMdArrowRoundForward } from 'react-icons/io';

import Logo from '../public/logo.png';
import type { PageWithLayout } from '../types';

const Home: PageWithLayout = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Pastebook Home</title>
      </Head>
      <Flex
        flex={1}
        px="8"
        pt={['12', '16', '20']}
        direction="column"
        alignItems="center"
      >
        <Image src={Logo} alt="logo" width={120} height={120} />

        <Heading
          mt="16"
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
          mt={['6', '8', '12']}
          fontWeight="medium"
        >
          Save all your clipboard content on the cloud. Get them back at
          anytime.
        </Text>

        <Button
          size="lg"
          rightIcon={<IoMdArrowRoundForward />}
          colorScheme="blue"
          mt={['6', '8', '12']}
          onClick={() => router.push('/login')}
        >
          GET STARTED
        </Button>

        <SimpleGrid columns={[1, 1, 2, 3]} mt="20">
          <Box maxW={{ base: 'full', lg: '80' }} h="40" p="4">
            <Heading fontSize="lg" mb="4">
              Fully Controlled 🔨
            </Heading>
            <Text fontWeight="medium">
              Say goodbye to Chrome Extensions. You decide what to save, and we
              save them all.
            </Text>
          </Box>
          <Box maxW={{ base: 'full', lg: '80' }} h="40" p="4">
            <Heading fontSize="lg" mb="4">
              Cloud based 💻
            </Heading>
            <Text fontWeight="medium">
              Say goodbye to mobile and desktop apps. You no longer need to
              install and update anymore.
            </Text>
          </Box>
          <Box maxW={{ base: 'full', lg: '80' }} h="40" p="4">
            <Heading fontSize="lg" mb="4">
              Fast and Intuitive ⚡
            </Heading>
            <Text fontWeight="medium">
              Say goodbye to pastebin. Enjoy something built with latest
              technology and UX in mind.
            </Text>
          </Box>
          <Box maxW={{ base: 'full', lg: '80' }} h="40" p="4">
            <Heading fontSize="lg" mb="4">
              Targeted 🎯
            </Heading>
            <Text fontWeight="medium">
              Optimized for copy pastes, quick notes and todo lists.
            </Text>
          </Box>
          <Box maxW={{ base: 'full', lg: '80' }} h="40" p="4">
            <Heading fontSize="lg" mb="4">
              Cross Platform 📱
            </Heading>
            <Text fontWeight="medium">
              Copy from iPhone and paste on PC? Sure! Just a few taps.
            </Text>
          </Box>
          <Box maxW={{ base: 'full', lg: '80' }} h="40" p="4">
            <Heading fontSize="lg" mb="4">
              Made with 💖
            </Heading>
            <Text fontWeight="medium">
              Meanwhile, the whole app is completely free and open source.
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </>
  );
};

Home.withFooter = true;

export default Home;
