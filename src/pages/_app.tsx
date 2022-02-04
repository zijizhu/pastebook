import { SWRConfig } from 'swr';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { myTheme } from '../theme';
import type { PageWithLayout } from '../types';
import RootLayout from '../components/RootLayout';

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ChakraProvider resetCSS theme={myTheme}>
      <SWRConfig>
        <RootLayout showFooter={!!Component.withFooter}>
          <Component {...pageProps} />
        </RootLayout>
      </SWRConfig>
    </ChakraProvider>
  );
}

export default MyApp;
