import tokens from "./design-tokens.json";
import { Theme } from "@mui/material";

type TokenFont = {
  fontSize: number;
  textDecoration: string;
  fontFamily: string;
  fontWeight: number;
  fontStyle: string;
  letterSpacing: number;
  lineHeight: number;
};

const tokenFontToStyle = (tokenFont: TokenFont) => ({
  fontSize: tokenFont.fontSize,
  fontWeight: tokenFont.fontWeight,
  lineHeight: `${tokenFont.lineHeight}px`,
  textDecoration: tokenFont.textDecoration,
  letterSpacing: `${tokenFont.letterSpacing}px`,
});

export type TypographyName = keyof typeof tokens.font;

export const addTypographyToTheme = (theme: Theme) => {
  const { typography } = theme;
  Object.entries(tokens.font).forEach(([key, { desk }]) => {
    typography[key as TypographyName] = {
      fontFamily: typography.fontFamily,
      ...tokenFontToStyle(desk.value),
    };
  });
};
