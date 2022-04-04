import React from "react";
import { Box, keyframes } from "@mui/material";
import { ColorName } from "design-system";

const growAnimation = keyframes({
  "0%": {
    origin: "left",
    transform: "scaleX(0.0001)",
  },
  "100%": {
    transform: "scaleX(1)",
  },
});

type ProgressSegmentComponentProps = {
  color: ColorName | "transparent";
};

export function ProgressSegmentComponent({
  color,
}: ProgressSegmentComponentProps) {
  return (
    <Box
      className="BaseProgressBar-segment"
      sx={{
        backgroundColor: color,
        transformOrigin: "left",
        animation: `${growAnimation} 600ms`,
      }}
    />
  );
}
