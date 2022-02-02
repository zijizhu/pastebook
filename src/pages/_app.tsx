import { ChakraProvider, theme } from '@chakra-ui/react';
import { SWRConfig } from 'swr';
import { myTheme } from '../theme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
