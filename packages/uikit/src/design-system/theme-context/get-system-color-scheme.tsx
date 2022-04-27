import { ThemeKey } from "@evrone-erp/uikit";

export const getSystemColorScheme = (defaultKey: ThemeKey): ThemeKey => {
  if (typeof window !== "undefined" && window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }
  return defaultKey;
};
