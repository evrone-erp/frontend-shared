import { Box } from "@mui/material";
import React from "react";

export const Delimiter: React.FC = () => (
  <Box
    component="span"
    sx={{
      height: "16px",
      width: "1px",
      ml: 10,
      mr: 10,
      backgroundColor: (theme) => theme.palette["5"],
    }}
  />
);
