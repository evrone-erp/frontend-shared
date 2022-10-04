import { Theme } from '@mui/material';
import { ThemeKey, ColorName } from 'design-system/types';
import { flattenDesignTokensObject } from 'design-system/lib/flatten-design-tokens-object';
import tokens from './design-tokens.json';

const { color } = tokens;

export const addColorsToTheme = (theme: Theme, themeKey: ThemeKey) => {
  const { palette } = theme;
  const { exception, dark, light } = color;
  const themeColors = flattenDesignTokensObject(themeKey === 'dark' ? dark : light);
  const colorsConfig = { ...exception, ...themeColors };

  Object.entries(colorsConfig).forEach(([name, colorConfig]) => {
    palette[name as ColorName] = colorConfig.value;
  });
};
