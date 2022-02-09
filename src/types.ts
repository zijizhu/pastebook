import type { NextPage } from 'next';

export type PageWithLayout = NextPage & {
  requiresAuth?: boolean;
};
