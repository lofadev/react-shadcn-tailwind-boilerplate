import { PropsWithChildren, Suspense } from 'react';

import { Navigate, RouteObject } from 'react-router';
import { useShallow } from 'zustand/shallow';

import LoadingIndicator from '@/components/loading-indicator';

import { LOCAL_STORAGE_KEY, ROUTE_PATH } from '@/constants';
import { DefaultLayout } from '@/layouts';
import { useAuthStore } from '@/store';
import { getLocalStorage } from '@/utils';

export const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAuthStore(useShallow((state) => state.user));
  const error = useAuthStore((state) => state.error);
  const token = getLocalStorage(LOCAL_STORAGE_KEY.TOKEN);

  return (
    <Suspense fallback={<LoadingIndicator />}>
      {token ? (
        user ? (
          children
        ) : error ? (
          <Navigate to={ROUTE_PATH.AUTH.LOGIN} replace />
        ) : null
      ) : (
        <Navigate to={ROUTE_PATH.AUTH.LOGIN} replace />
      )}
    </Suspense>
  );
};

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
