import React from "react";
import { Box, alpha, ButtonBase } from "@mui/material";

type ExpandButtonProps = { onClick: () => void };

export function ExpandButton({ onClick }: ExpandButtonProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        right: "0",
        bottom: "0",
        pl: 1,
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: 20,
          background: (theme) =>
            `linear-gradient(90deg, ${alpha(theme.palette["3"], 0)} 0%, ${
              theme.palette["3"]
            } 100%)`,
        }}
      />
      <ButtonBase
        onClick={onClick}
        sx={{
          typography: "text",
          color: "6",
          py: 0,
          pl: 2,
          backgroundColor: "3",
        }}
      >
        Развернуть
      </ButtonBase>
    </Box>
  );
}
