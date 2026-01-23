import type { Theme } from '@mui/material';
import type { TypographyName } from 'design-system/types';
import tokens from './design-tokens.json';

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

export const addTypographyToTheme = (theme: Theme) => {
  const { typography } = theme;
  Object.entries(tokens.font).forEach(([key, font]) => {
    typography[key as TypographyName] = {
      fontFamily: typography.fontFamily,
      ...tokenFontToStyle(font.value),
    };
  });
};
