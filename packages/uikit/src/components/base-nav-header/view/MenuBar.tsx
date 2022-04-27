import { Box } from "@mui/material";
import React from "react";

export const MenuBar: React.FC = ({ children }) => (
  <Box sx={{ display: "grid", gap: 10, gridAutoFlow: "column" }}>
    {children}
  </Box>
);
