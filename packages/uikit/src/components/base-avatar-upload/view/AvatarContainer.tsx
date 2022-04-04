import React, { ReactNode } from "react";
import { Box, BoxProps, Typography } from "@mui/material";
import { Sx, mergeSx } from "design-system";

type AvatarContainerProps = {
  sx?: Sx;
  className?: string;
  rootProps: BoxProps;
  children?: ReactNode;
};

export function AvatarContainer({
  rootProps,
  children,
  className,
  sx,
}: AvatarContainerProps) {
  return (
    <Box
      {...rootProps}
      sx={mergeSx(sx, {
        backgroundColor: "3",
        width: 120,
        height: 120,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
      })}
      className={className}
    >
      <Typography component="div" color="4" align="center">
        Change <br /> cover
      </Typography>
      {children}
    </Box>
  );
}
