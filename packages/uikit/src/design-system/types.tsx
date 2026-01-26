import type { Theme, SxProps } from '@mui/material';

import type tokens from './design-tokens/design-tokens.json';

export type Sx = SxProps<Theme>;
export type ThemeKey = 'light' | 'dark';
export type Breakpoint = 'mob' | 'desk' | 'tab';
export type TypographyName = keyof typeof tokens.font;
export type ColorName =
  | keyof typeof tokens.color.exception
  | `${keyof typeof tokens.color.dark}-${keyof typeof tokens.color.dark.bg}`
  | `${keyof typeof tokens.color.dark}-${keyof typeof tokens.color.dark.element}`;
export type BaseComponentProps = {
  sx?: Sx;
  className?: string;
};
