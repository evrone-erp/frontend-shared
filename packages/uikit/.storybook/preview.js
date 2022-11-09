import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { ThemeProvider } from "@emotion/react";
import { withThemes } from "@react-theming/storybook-addon";
import { createTheme } from "../src";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    query: {
      foo: "this-is-a-global-override",
    },
  },
};

const providerFn = ({ theme, children }) => {
  const muTheme = createTheme(theme.type);
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="ru">
      <MuiThemeProvider theme={muTheme}>
        <CssBaseline />
        <ThemeProvider theme={muTheme}>{children}</ThemeProvider>
      </MuiThemeProvider>
    </LocalizationProvider>
  );
};

const onThemeSwitch = (context) => {
  const { theme } = context;
  const background = theme.bgcolor;
  const parameters = {
    backgrounds: {
      default: background,
    },
    // Pass backgrounds: null to disable background switching at all
  };
  return {
    parameters,
  };
};

export const decorators = [
  withThemes(
    null,
    [
      { name: "Тёмная тема", type: "dark" },
      { name: "Светлая тема", type: "light" },
    ],
    {
      providerFn,
      onThemeSwitch,
    },
  ),
];
