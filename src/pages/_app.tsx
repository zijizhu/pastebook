import { ChakraProvider } from '@chakra-ui/react';
import { SWRConfig } from 'swr';
import { myTheme } from '../theme';
import RootLayout from '../components/RootLayout';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={myTheme}>
      <SWRConfig>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </SWRConfig>
    </ChakraProvider>
  );
}

export default MyApp;
