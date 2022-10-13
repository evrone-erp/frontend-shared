import { MenuItem, styled } from '@mui/material';

export const StyledMuiMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette['element-2'],
  ...theme.typography.text,
}));
