import { Suspense } from 'react';

import { BrowserRouter } from 'react-router';

import { ThemeProvider } from '@/components/theme-provider';

import LoadingIndicator from './components/loading-indicator';
import { ToastMessage } from './components/toast-message';
import AppRoutes from './routes/app-route';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <ToastMessage />
      <BrowserRouter>
        <Suspense fallback={<LoadingIndicator />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
