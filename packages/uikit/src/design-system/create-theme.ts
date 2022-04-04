import { createTheme as createMuiTheme } from "@mui/material";
import { addTypographyToTheme, addColorsToTheme } from "./design-tokens";
import { fontFaces } from "./font-faces";
import { ThemeKey } from "./types";

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
      fontFamily: "SuisseIntl, sans-serif",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        ${fontFaces}
        `,
      },
      MuiTypography: {
        defaultProps: {
          variant: "text",
          color: "6",
        },
      },
    },
    breakpoints: {
      values: {
        mob: 0,
        tab: 900,
        desk: 1360,
      },
    },
  });

  addTypographyToTheme(theme);
  addColorsToTheme(theme, type);
  theme.palette.primary.main = theme.palette["6"];
  theme.palette.error.main = theme.palette["orange-l"];
  theme.palette.background.default = theme.palette.core;

  return theme;
};
