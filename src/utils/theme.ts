import { LOCAL_STORAGE_KEY, THEME_TYPE } from '@/constants';

import { getLocalStorage } from './storage';

export const checkValidTheme = (themeValue?: string) => {
  const selectedTheme = getLocalStorage(themeValue ?? LOCAL_STORAGE_KEY.THEME);

  if (!selectedTheme) {
    return THEME_TYPE.SYSTEM;
  }

  if (selectedTheme !== THEME_TYPE.LIGHT && selectedTheme !== THEME_TYPE.DARK && selectedTheme !== THEME_TYPE.SYSTEM) {
    return THEME_TYPE.SYSTEM;
  }

  return selectedTheme;
};
