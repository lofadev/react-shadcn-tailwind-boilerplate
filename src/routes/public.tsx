import React, { PropsWithChildren, Suspense, lazy, useMemo } from 'react';

import { Navigate, RouteObject, useSearchParams } from 'react-router-dom';

import LoadingIndicator from '@/components/loading-indicator';

import { ROUTE_PATH } from '@/constants';
import { AuthLayout } from '@/layouts';
import { useAuthStore } from '@/store';
import { UserModel } from '@/types';

const Login = lazy(() => import('@/pages/auth/login'));
const Register = lazy(() => import('@/pages/auth/register'));

const PublicRoute = React.memo(({ children }: PropsWithChildren) => {
  const user = useAuthStore((state: { user: UserModel | null }) => state.user);

  const [searchParams] = useSearchParams();

  const returnUrl = useMemo(() => searchParams.get('returnUrl') ?? ROUTE_PATH.HOME, [searchParams]);

  return <Suspense fallback={<LoadingIndicator />}>{user ? <Navigate to={returnUrl} replace /> : children}</Suspense>;
});

PublicRoute.displayName = 'PublicRoute';

const publicRoutes: RouteObject[] = [
  {
    element: (
      <PublicRoute>
        <AuthLayout />
      </PublicRoute>
    ),
    children: [
      {
        path: ROUTE_PATH.AUTH.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTE_PATH.AUTH.REGISTER,
        element: <Register />,
      },
    ],
  },
];

export default publicRoutes;
