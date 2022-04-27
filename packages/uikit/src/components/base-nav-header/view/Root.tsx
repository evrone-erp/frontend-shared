import React from "react";
import { Box } from "@mui/material";
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
      {
        padding: [2.5, 5],
        display: "flex",
        justifyContent: "space-between",
      },
      sx
    )}
    onMouseLeave={onMouseLeave}
    className={className}
  >
    {children}
  </Box>
);
