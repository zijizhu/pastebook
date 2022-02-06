import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

export type PageWithLayout = NextPage & {
  requiresAuth?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};
