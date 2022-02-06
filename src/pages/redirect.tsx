import Head from 'next/head';
import { useEffect } from 'react';
import { supabase } from '../supabase';
import { useRouter } from 'next/router';

function Redirect() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash === '') {
      router.replace('/');
    }
    if (supabase.auth.user()) {
      router.replace('/app');
    }
    const { data: listener } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        router.replace('/app');
      }
    });
    return () => listener?.unsubscribe();
  }, [router]);

  return (
    <>
      <Head>
        <title>Redirecting...</title>
      </Head>
    </>
  );
}

export default Redirect;
