import { useRouter } from 'next/router';
import { Session } from '@supabase/supabase-js';
import { useState, useEffect, FC } from 'react';

import { supabase } from '../supabase';

const AuthGuard: FC<{ pageRequiresAuth?: boolean }> = ({
  pageRequiresAuth,
  children
}) => {
  const router = useRouter();
  const [initialized, setInitialized] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const updatedSession = supabase.auth.session();
    setSession(updatedSession);
    setInitialized(true);
    if (updatedSession && !pageRequiresAuth) router.replace('/app');
    if (!updatedSession && pageRequiresAuth) router.replace('/');
  }, [router, pageRequiresAuth]);

  if (initialized) {
    if ((pageRequiresAuth && session) || (!pageRequiresAuth && !session))
      return <>{children}</>;
  }
  return <></>;
};

export default AuthGuard;
