import React, { createContext, ReactNode, useContext, useCallback, useEffect, useState, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeKey } from 'design-system/types';
import { createTheme } from './create-theme';
import { getSystemColorScheme } from './get-system-color-scheme';

type ThemeProviderSetThemeHandlerArgs = ThemeKey | ((state: ThemeKey) => ThemeKey);

export type ThemeProviderSetThemeHandler = (arg: ThemeProviderSetThemeHandlerArgs) => void;

type ThemeProviderProps = {
  children: ReactNode;
  // For control storing own way
  themeType?: ThemeKey;
  onSetThemeType?: ThemeProviderSetThemeHandler;
};

type ThemeContextValue = {
  themeType: ThemeKey;
  setTheme: ThemeProviderSetThemeHandler;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const DEFAULT_THEME_TYPE: ThemeKey = 'light';

export function ThemeProvider({ themeType: initialThemeType, children, onSetThemeType }: ThemeProviderProps) {
  const [themeType, setThemeType] = useState(initialThemeType || getSystemColorScheme(DEFAULT_THEME_TYPE));
  const theme = useMemo(() => createTheme(themeType), [themeType]);

  const updateThemeType: ThemeProviderSetThemeHandler = useCallback(
    (_themeType) => {
      setThemeType(_themeType);
      onSetThemeType?.(_themeType);
    },
    [onSetThemeType],
  );
  const contextValue = useMemo(
    () => ({
      themeType,
      setTheme: updateThemeType,
    }),
    [themeType, updateThemeType],
  );

  useEffect(() => {
    updateThemeType(initialThemeType || getSystemColorScheme(DEFAULT_THEME_TYPE));
  }, [updateThemeType, initialThemeType]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const res = useContext(ThemeContext);
  if (!res) throw new Error('You should provide ThemeProvider before using useTheme hook.');
  return [res?.themeType, res?.setTheme] as const;
}
