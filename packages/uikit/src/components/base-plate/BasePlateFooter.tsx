import React from "react";
import { Box } from "@mui/material";

import { BaseComponentProps } from "design-system/types";

export type BasePlateFooterProps = {
  primaryAction: JSX.Element;
  secondaryAction?: JSX.Element;
} & BaseComponentProps;

export const BasePlateFooter: React.FC<BasePlateFooterProps> = ({
  primaryAction,
  secondaryAction,
  ...restProps
}) => {
  return (
    <Box display="flex" justifyContent="space-between" {...restProps}>
      <Box>{primaryAction}</Box>
      <Box>{secondaryAction}</Box>
    </Box>
  );
};
