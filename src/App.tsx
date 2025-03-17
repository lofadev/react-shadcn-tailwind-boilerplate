import { ThemeControl } from './components/theme-control';

import { ThemeProvider } from '@/components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <ThemeControl />
    </ThemeProvider>
  );
}

export default App;
