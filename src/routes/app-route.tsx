import { useEffect, useState } from 'react';

import { useRoutes } from 'react-router-dom';

import LoadingIndicator from '@/components/loading-indicator';

import { LOCAL_STORAGE_KEY } from '@/constants';
import { useAuthService } from '@/services/auth.service';
import { useAuthStore } from '@/store';
import { getLocalStorage } from '@/utils';

import globalRoutes from './global';
import protectedRoutes from './private';
import publicRoutes from './public';

const AppRoutes = () => {
  const [initAuthState, setInitAuthState] = useState(false);
  const { getMe } = useAuthService();
  const { user } = useAuthStore();

  const initAuth = async () => {
    try {
      const token = getLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
      if (token && !user) {
        await getMe();
      }
    } finally {
      setInitAuthState(true);
    }
  };

  useEffect(() => {
    initAuth();
  }, []);

  const routing = useRoutes([...publicRoutes, ...protectedRoutes, ...globalRoutes]);

  if (!initAuthState) {
    return <LoadingIndicator />;
  }

  return <>{routing}</>;
};

export default AppRoutes;
