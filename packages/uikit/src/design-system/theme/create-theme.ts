import { createTheme as createMuiTheme } from '@mui/material';
import { addTypographyToTheme, addColorsToTheme } from 'design-system/design-tokens';
import { fontFaces } from 'design-system/font-faces';
import { ThemeKey } from 'design-system/types';

export const createTheme = (type: ThemeKey) => {
  const theme = createMuiTheme({
    spacing: 4,
    shape: {
      borderRadius: 4,
    },
    palette: {
      mode: type,
    },
    typography: {
      fontFamily: 'SuisseIntl, sans-serif',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        ${fontFaces}
        `,
      },
      MuiTypography: {
        defaultProps: {
          variant: 'text',
          color: 'element-2',
        },
      },
    },
    breakpoints: {
      values: {
        mob: 375,
        tab: 720,
        lap: 1080,
        desk: 1920,
      },
    },
  });

  addTypographyToTheme(theme);
  addColorsToTheme(theme, type);
  theme.palette.primary.main = theme.palette['element-2'];
  theme.palette.error.main = theme.palette['good-1'];
  theme.palette.background.default = theme.palette['bg-0'];

  return theme;
};
