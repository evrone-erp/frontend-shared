import { styled, TextField } from '@mui/material';

export const StyledMuiTextField = styled(TextField)(({ theme }) => ({
  // Input
  '& .MuiInput-root': {
    color: theme.palette['element-2'],
    ...theme.typography.text,
  },
  '& .MuiInput-root::before': {
    borderColor: `${theme.palette['element-1']} !important`,
    borderWidth: `1px !important`,
  },
  '& .MuiInput-root.Mui-error::before': {
    borderColor: theme.palette.bad,
  },
  '& .MuiInput-root.Mui-error::after': {
    borderColor: theme.palette.bad,
  },
  '& .MuiInput-root::after': {
    borderWidth: 1,
    borderColor: theme.palette['element-2'],
  },

  // Label
  '& .MuiInputLabel-root': {
    color: theme.palette['element-1'],
    ...theme.typography.text,
  },
  '&:hover .MuiInputLabel-root': {
    color: theme.palette['element-1'],
  },
  '& .MuiInputLabel-root.Mui-error': {
    color: theme.palette['element-1'],
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette['element-1'],
  },

  // Helper text
  '& .MuiFormHelperText-root': {
    ...theme.typography.caption,
    color: theme.palette['element-1'],
  },
  '& .BaseIcon': {
    color: theme.palette['element-1'],
  },
  '&:hover .BaseIcon': {
    color: theme.palette['element-1'],
  },
  '& .MuiFormHelperText-root.Mui-error': {
    color: theme.palette.bad,
  },
}));
