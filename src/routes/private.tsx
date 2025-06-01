import React, { PropsWithChildren, useMemo } from 'react';

import { Navigate, RouteObject, useLocation } from 'react-router-dom';
import { useShallow } from 'zustand/shallow';

import { LOCAL_STORAGE_KEY, ROUTE_PATH } from '@/constants';
import { DefaultLayout } from '@/layouts';
import { useAuthStore } from '@/store';
import { getLocalStorage } from '@/utils';

export const PrivateRoute = React.memo(({ children }: PropsWithChildren) => {
  const user = useAuthStore(useShallow((state) => state.user));
  const token = getLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN);

  const location = useLocation();
  const returnUrl = useMemo(() => ROUTE_PATH.AUTH.LOGIN + '?returnUrl=' + location.pathname, [location.pathname]);

  if (!token || !user) {
    return <Navigate to={returnUrl} replace />;
  }

  return children;
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
