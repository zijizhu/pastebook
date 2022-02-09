import Router from 'next/router';
import { createContext } from 'react';
import { Session } from '@supabase/supabase-js';
import { useState, useEffect, FC } from 'react';

import { supabase } from '../supabase';

export const AuthContext = createContext<{
  session: Session | null;
  isLoaded: boolean;
}>({ session: null, isLoaded: false });

const AuthGuard: FC<{ pageRequiresAuth?: boolean }> = ({
  pageRequiresAuth,
  children
}) => {
  const [initialized, setInitialized] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const isLoaded =
    initialized &&
    ((pageRequiresAuth && !!session) || (!pageRequiresAuth && !session));

  useEffect(() => {
    const updatedSession = supabase.auth.session();
    setSession(updatedSession);
    setInitialized(true);
    if (updatedSession && !pageRequiresAuth) Router.replace('/app');
    if (!updatedSession && pageRequiresAuth) Router.replace('/');
  }, [pageRequiresAuth]);

  useEffect(() => {
    console.log('triggered');
  });

  return (
    <AuthContext.Provider value={{ session, isLoaded }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthGuard;
