import { Box, styled } from "@mui/material";

export const LayoutContent = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("mob")]: {
    margin: 10,
  },
  [theme.breakpoints.up("desk")]: {
    margin: 20,
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-end",
}));
