import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "../src";

const themes = {
  light: createTheme('light'),
  dark: createTheme('dark'),
}

const preview = {
  parameters: {
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
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Platform Theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => (
      <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="ru">
        <MuiThemeProvider theme={themes[context.globals.theme]}>
          <CssBaseline />
          <ThemeProvider theme={themes[context.globals.theme]}><Story /></ThemeProvider>
        </MuiThemeProvider>
      </LocalizationProvider>
    ),
  ],
}

export default preview;
