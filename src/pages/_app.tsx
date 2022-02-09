import Head from 'next/head';
import { SWRConfig } from 'swr';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { myTheme } from '../theme';
import type { PageWithLayout } from '../types';
import Layout from '../components/Layout';
import AuthGuard from '../contexts/AuthGuard';

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ChakraProvider resetCSS theme={myTheme}>
      <SWRConfig>
        <AuthGuard pageRequiresAuth={Component.requiresAuth}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthGuard>
      </SWRConfig>
    </ChakraProvider>
  );
}

export default MyApp;
