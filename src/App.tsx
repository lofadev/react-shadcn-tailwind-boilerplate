import { lazy, useEffect } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/components/theme-provider';

import SuspenseWrapper from './components/suspense-wrapper';
import { LOCAL_STORAGE_KEY } from './constants';
import { useAuthService } from './services/auth.service';
import { useAuthStore } from './store';
import { getLocalStorage } from './utils';

const ToastMessage = lazy(() => import('./components/custom/toast-message'));
const AppRoutes = lazy(() => import('./routes/app-route'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

const AuthInitializer = ({ children }: { children: React.ReactNode }) => {
  const { getMe } = useAuthService();
  const { user, isInitialized, setInitialized } = useAuthStore();

  useEffect(() => {
    const initAuth = async () => {
      if (isInitialized) return;

      try {
        const token = getLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
        if (token && !user) {
          await getMe();
        }
      } finally {
        setInitialized(true);
      }
    };

    initAuth();
  }, [getMe, user, isInitialized, setInitialized]);

  return <>{children}</>;
};

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey={LOCAL_STORAGE_KEY.THEME}>
      <AuthInitializer>
        <SuspenseWrapper>
          <ToastMessage />
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <AppRoutes />
            </QueryClientProvider>
          </BrowserRouter>
        </SuspenseWrapper>
      </AuthInitializer>
    </ThemeProvider>
  );
};

export default App;
