import { useCookie } from "@evrone-erp/react-std";
import { ThemeKey } from "../types";
import React, { createContext, ReactNode, useContext, useEffect } from "react";
import { getSystemColorScheme } from "./get-system-color-scheme";

type ThemeTypeContextValue = {
  themeType: ThemeKey;
  setThemeType: (newThemeType: ThemeKey) => void;
};

const ThemeTypeContext =
  createContext<ThemeTypeContextValue | undefined>(undefined);

const DEFAULT_THEME: ThemeKey = "light";

type ThemeTypeProviderProps = { children?: ReactNode };

export function ThemeTypeProvider({ children }: ThemeTypeProviderProps) {
  const [themeType, setThemeType] = useCookie<ThemeKey>("themeType");

  useEffect(() => {
    if (!themeType) {
      setThemeType(getSystemColorScheme(DEFAULT_THEME), 30);
    }
  }, [themeType, setThemeType]);

  const contextValue = { themeType: themeType ?? DEFAULT_THEME, setThemeType };

  return (
    <ThemeTypeContext.Provider value={contextValue}>
      {children}
    </ThemeTypeContext.Provider>
  );
}

export function useThemeType() {
  const res = useContext(ThemeTypeContext);
  if (!res) throw new Error("You should provide ThemeTypeContext before use.");
  return [res.themeType, res.setThemeType] as const;
}
