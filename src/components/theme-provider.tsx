import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';

import { LOCAL_STORAGE_KEY, THEME_TYPE } from '@/constants/common';
import { useThemeDetector } from '@/hooks';
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

  const themeDetector = useThemeDetector();

  useEffect(() => {
    setLocalStorage(LOCAL_STORAGE_KEY.THEME, theme);
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === THEME_TYPE.SYSTEM) {
      root.classList.add(themeDetector);

      return;
    }

    root.classList.add(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  useEffect(() => {
    if (theme === THEME_TYPE.SYSTEM) {
      const root = window.document.documentElement;

      root.classList.remove('light', 'dark');

      root.classList.add(themeDetector);
    }
  }, [themeDetector, theme]);

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
