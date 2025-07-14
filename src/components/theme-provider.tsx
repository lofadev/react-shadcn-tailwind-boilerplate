import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';

import { LOCAL_STORAGE_KEY, THEME_TYPE } from '@/constants/common';
import { setLocalStorage } from '@/utils';
import { checkValidTheme } from '@/utils/theme';

export type Theme = 'dark' | 'light' | 'system';

type ThemeProviderState = {
  theme: Theme;
  setTheme: (_theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: THEME_TYPE.SYSTEM,
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(() => checkValidTheme());

  useEffect(() => {
    setLocalStorage(LOCAL_STORAGE_KEY.THEME, theme);
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

      root.classList.add(systemTheme);

      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setLocalStorage(LOCAL_STORAGE_KEY.THEME, theme);
      setTheme(theme);
    },
  };

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
