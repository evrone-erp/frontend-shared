import { MenuItem, styled } from "@mui/material";

export const StyledMuiMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette["6"],
  ...theme.typography.text,
}));
