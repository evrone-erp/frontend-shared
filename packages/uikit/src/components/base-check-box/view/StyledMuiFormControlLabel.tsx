import { FormControlLabel, styled } from "@mui/material";

export const StyledMuiFormControlLabel = styled(FormControlLabel)(
  ({ theme }) => ({
    color: theme.palette["6"],
    userSelect: 'none',
    ...theme.typography.text,
  })
);
