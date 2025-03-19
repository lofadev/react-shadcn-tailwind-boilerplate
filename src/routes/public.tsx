import React, { PropsWithChildren, Suspense, lazy, useMemo } from 'react';

import { Navigate, RouteObject, useLocation } from 'react-router';

import LoadingIndicator from '@/components/loading-indicator';

import { ROUTE_PATH } from '@/constants';
import { AuthLayout } from '@/layouts';
import { useAuthStore } from '@/store';
import { UserModel } from '@/types';

const Login = lazy(() => import('@/pages/auth/login'));
const Register = lazy(() => import('@/pages/auth/register'));

const PublicRoute: React.FC<PropsWithChildren> = React.memo(({ children }) => {
  const user = useAuthStore((state: { user: UserModel | null }) => state.user);

  const location = useLocation();

  const pathname = useMemo(() => location.state?.pathname ?? ROUTE_PATH.HOME, [location.state?.pathname]);

  return <Suspense fallback={<LoadingIndicator />}>{user ? <Navigate to={pathname} replace /> : children}</Suspense>;
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
