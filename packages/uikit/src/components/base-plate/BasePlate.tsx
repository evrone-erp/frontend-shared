import { Box } from "@mui/material";

import { mergeSx, Sx } from "design-system";
import React, { ReactNode } from "react";

const commonSx = {
  borderRadius: 5,
  p: 5,
  transition: "all 0.2s",
  backgroundColor: "1",
  textAlign: "start",
};
const pressableSx = {
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "2",
  },
  "&:active": {
    opacity: 0.8,
  },
};

export type BasePlateProps = {
  sx?: Sx;
  className?: string;
  children?: ReactNode;
  pressable?: boolean;
  onClick?: () => void;
};

export function BasePlate({
  sx,
  className,
  children,
  pressable,
  onClick,
}: BasePlateProps) {
  return (
    <Box
      onClick={onClick}
      sx={mergeSx(commonSx, sx, pressable && pressableSx)}
      className={className}
    >
      {children}
    </Box>
  );
}
