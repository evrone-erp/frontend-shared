import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeKey } from "../types";
import { createTheme } from "./create-theme";
import { getSystemColorScheme } from "./get-system-color-scheme";

export type ThemeProviderSetThemeHandler = (themeType: ThemeKey) => void;

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

const DEFAULT_THEME_TYPE: ThemeKey = "light";

export function ThemeProvider({
  themeType: initialThemeType,
  children,
  onSetThemeType,
}: ThemeProviderProps) {
  const [themeType, setThemeType] = useState(initialThemeType || getSystemColorScheme(DEFAULT_THEME_TYPE));
  const theme = useMemo(
    () => createTheme(themeType),
    [themeType]
  );

  const updateThemeType: ThemeProviderSetThemeHandler = (_themeType) => {
    setThemeType(_themeType);
    onSetThemeType?.(_themeType);
  }

  const contextValue = {
    themeType,
    setTheme: updateThemeType,
  };

  useEffect(() => {
    updateThemeType(initialThemeType || getSystemColorScheme(DEFAULT_THEME_TYPE));
  }, [initialThemeType]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const res = useContext(ThemeContext);
  if (!res)
    throw new Error(
      "You should provide ThemeProvider before using useTheme hook."
    );
  return [res.themeType, res.setTheme] as const;
}
