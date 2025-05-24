import React, { PropsWithChildren } from 'react';

import { Navigate, RouteObject, useLocation } from 'react-router-dom';
import { useShallow } from 'zustand/shallow';

import { LOCAL_STORAGE_KEY, ROUTE_PATH } from '@/constants';
import { DefaultLayout } from '@/layouts';
import { useAuthStore } from '@/store';
import { getLocalStorage } from '@/utils';

export const PrivateRoute = React.memo(({ children }: PropsWithChildren) => {
  const user = useAuthStore(useShallow((state) => state.user));
  const error = useAuthStore((state) => state.error);
  const token = getLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN);

  const location = useLocation();

  return token ? (
    user ? (
      children
    ) : error ? (
      <Navigate to={ROUTE_PATH.AUTH.LOGIN + '?returnUrl=' + location.pathname} replace />
    ) : (
      children
    )
  ) : (
    <Navigate to={ROUTE_PATH.AUTH.LOGIN + '?returnUrl=' + location.pathname} replace />
  );
});

PrivateRoute.displayName = 'PrivateRoute';

const protectedRoutes: RouteObject[] = [
  {
    element: (
      <PrivateRoute>
        <DefaultLayout />
      </PrivateRoute>
    ),
    children: [],
  },
];

export default protectedRoutes;
