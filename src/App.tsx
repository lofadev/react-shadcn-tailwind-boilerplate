import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/components/theme-provider';

import ToastMessage from './components/custom/toast-message';
import SuspenseWrapper from './components/suspense-wrapper';
import { LOCAL_STORAGE_KEY } from './constants';
import AppRoutes from './routes/app-route';

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

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey={LOCAL_STORAGE_KEY.THEME}>
      <SuspenseWrapper>
        <ToastMessage />
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <AppRoutes />
          </QueryClientProvider>
        </BrowserRouter>
      </SuspenseWrapper>
    </ThemeProvider>
  );
};

export default App;
