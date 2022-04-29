import React from "react";
import { Box, Theme } from "@mui/material";
import { mergeSx } from "design-system";
import { BaseComponentProps } from "design-system/types";

type RootProps = Pick<React.HTMLAttributes<HTMLDivElement>, "onMouseLeave"> &
  BaseComponentProps;

export const Root: React.FC<RootProps> = ({
  sx,
  className,
  onMouseLeave,
  children,
}) => (
  <Box
    component="header"
    sx={mergeSx(
      (theme: Theme) => ({
        [theme.breakpoints.up("mob")]: {
          padding: 2.5,
        },
        [theme.breakpoints.up("desk")]: {
          padding: 5,
        },
        display: "flex",
        justifyContent: "space-between",
      }),
      sx
    )}
    onMouseLeave={onMouseLeave}
    className={className}
  >
    {children}
  </Box>
);
