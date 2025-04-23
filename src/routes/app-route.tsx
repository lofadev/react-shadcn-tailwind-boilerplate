import { useEffect } from 'react';

import { useRoutes } from 'react-router-dom';

import { LOCAL_STORAGE_KEY } from '@/constants';
import { useAuthService } from '@/services/auth.service';
import { useAuthStore } from '@/store';
import { getLocalStorage } from '@/utils';

import globalRoutes from './global';
import protectedRoutes from './private';
import publicRoutes from './public';

const AppRoutes = () => {
  const { getMe } = useAuthService();
  const { user } = useAuthStore();

  useEffect(() => {
    const token = getLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN);

    if (token && !user) {
      getMe();
    }
  }, []);

  return <>{useRoutes([...publicRoutes, ...protectedRoutes, ...globalRoutes])}</>;
};

export default AppRoutes;
