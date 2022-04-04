import { styled, TextField } from "@mui/material";

export const StyledMuiTextField = styled(TextField)(({ theme }) => ({
  // Input
  "& .MuiInput-root": {
    color: theme.palette["6"],
    ...theme.typography.text,
  },
  "& .MuiInput-root::before": {
    borderColor: `${theme.palette["5"]} !important`,
    borderWidth: `1px !important`,
  },
  "& .MuiInput-root::after": {
    borderWidth: 1,
    borderColor: theme.palette["6"],
  },

  // Label
  "& .MuiInputLabel-root": {
    color: theme.palette["4"],
    ...theme.typography.text,
  },
  "&:hover .MuiInputLabel-root": {
    color: theme.palette["5"],
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: theme.palette["4"],
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette["4"],
  },

  // Helper text
  "& .MuiFormHelperText-root": {
    ...theme.typography.caption,
    color: theme.palette["5"],
  },
  "& .BaseIcon": {
    color: theme.palette["4"],
  },
  "&:hover .BaseIcon": {
    color: theme.palette["5"],
  },
}));
