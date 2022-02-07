import Head from 'next/head';
import { SWRConfig } from 'swr';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { myTheme } from '../theme';
import AppLayout from '../components/AppLayout';
import type { PageWithLayout } from '../types';
import AuthGuard from '../components/AuthGuard';
import RootLayout from '../components/RootLayout';

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? AppLayout;

  return (
    <ChakraProvider resetCSS theme={myTheme}>
      <SWRConfig>
        <RootLayout>
          <AuthGuard pageRequiresAuth={Component.requiresAuth}>
            {getLayout(<Component {...pageProps} />)}
          </AuthGuard>
        </RootLayout>
      </SWRConfig>
    </ChakraProvider>
  );
}

export default MyApp;
