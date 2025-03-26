import { Suspense } from 'react';

import { Navigate, RouteObject, useOutlet } from 'react-router';
import { useShallow } from 'zustand/shallow';

import LoadingIndicator from '@/components/loading-indicator';

import { LOCAL_STORAGE_KEY, ROUTE_PATH } from '@/constants';
import { useAuthStore } from '@/store';
import { getLocalStorage } from '@/utils';

export const PrivateRoute = () => {
  const user = useAuthStore(useShallow((state) => state.user));
  const error = useAuthStore((state) => state.error);
  const token = getLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
  const outlet = useOutlet();

  return (
    <Suspense fallback={<LoadingIndicator />}>
      {token ? (
        user ? (
          outlet
        ) : error ? (
          <Navigate to={ROUTE_PATH.AUTH.LOGIN} replace />
        ) : (
          outlet
        )
      ) : (
        <Navigate to={ROUTE_PATH.AUTH.LOGIN} replace />
      )}
    </Suspense>
  );
};

const protectedRoutes: RouteObject[] = [
  {
    element: <PrivateRoute />,
    children: [],
  },
];

export default protectedRoutes;
