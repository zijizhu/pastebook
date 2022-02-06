import Head from 'next/head';

import { PageWithLayout } from '../../types';

const AppHome: PageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Pastebook App</title>
      </Head>
      <div>this is app home.</div>
    </>
  );
};

AppHome.requiresAuth = true;

export default AppHome;
