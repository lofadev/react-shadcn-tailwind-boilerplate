import { useEffect, useState } from 'react';

import { THEME_TYPE } from '@/constants';

export const useThemeDetector = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const themeChangeHandler = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', themeChangeHandler);

    return () => {
      mediaQuery.removeEventListener('change', themeChangeHandler);
    };
  }, []);

  return isDarkMode ? THEME_TYPE.DARK : THEME_TYPE.LIGHT;
};
