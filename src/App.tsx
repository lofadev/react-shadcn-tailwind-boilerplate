import { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/components/theme-provider';

import ToastMessage from './components/custom/toast-message';
import LoadingIndicator from './components/loading-indicator';
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
