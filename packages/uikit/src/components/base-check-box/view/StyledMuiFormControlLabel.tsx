import { FormControlLabel, styled } from '@mui/material';

export const StyledMuiFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  color: theme.palette['element-2'],
  userSelect: 'none',
  ...theme.typography.text,
}));
