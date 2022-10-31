import React, { createContext, ReactNode, useContext, useCallback, useEffect, useState, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeKey } from 'design-system/types';
import { createTheme } from './create-theme';
import { getSystemColorScheme } from './get-system-color-scheme';

type SetThemeStateArgs = ThemeKey | ((state: ThemeKey) => ThemeKey);

export type ThemeProviderSetThemeHandler<Args = ThemeKey> = (arg: Args) => void;

type ThemeProviderProps = {
  children: ReactNode;
  // For control storing own way
  themeType?: ThemeKey;
  onSetThemeType?: (theme: ThemeKey) => void;
};

type ThemeContextValue = {
  themeType: ThemeKey;
  setTheme: ThemeProviderSetThemeHandler<SetThemeStateArgs>;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const DEFAULT_THEME_TYPE: ThemeKey = 'light';

export function ThemeProvider({ themeType: initialThemeType, children, onSetThemeType }: ThemeProviderProps) {
  const [themeType, setThemeType] = useState(initialThemeType || getSystemColorScheme(DEFAULT_THEME_TYPE));
  const theme = useMemo(() => createTheme(themeType), [themeType]);

  const updateThemeType: ThemeProviderSetThemeHandler<SetThemeStateArgs> = useCallback(
    (_themeType) => {
      setThemeType(_themeType);
    },
    [setThemeType],
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

  useEffect(() => {
    onSetThemeType?.(themeType);
  }, [themeType, onSetThemeType]);

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
