import { Theme } from "@mui/material";
import { ThemeKey } from "../types";
import tokens from "./design-tokens.json";

const { color } = tokens;

export type ColorName =
  | keyof typeof tokens.color.exception
  | keyof typeof tokens.color.dark;

export const addColorsToTheme = (theme: Theme, themeKey: ThemeKey) => {
  const { palette } = theme;
  const { exception, dark, light } = color;
  const colorsConfig = {
    ...exception,
    ...(themeKey === "light" ? light : dark),
  };

  Object.entries(colorsConfig).forEach(([name, colorConfig]) => {
    palette[name as ColorName] = colorConfig.value;
  });
};
