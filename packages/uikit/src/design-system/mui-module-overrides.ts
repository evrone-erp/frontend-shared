import { CSSProperties } from "react";
import { TypographyName, ColorName } from "./design-tokens";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mob: true;
    tab: true;
    desk: true;
  }

  interface Palette extends Record<ColorName, string> {}

  interface TypographyVariants extends Record<TypographyName, CSSProperties> {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides
    extends Record<TypographyName, true> {
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    button: false;
    caption: false;
    overline: false;
  }
}
