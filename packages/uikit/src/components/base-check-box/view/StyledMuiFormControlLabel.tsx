import { FormControlLabel, styled } from "@mui/material";

export const StyledMuiFormControlLabel = styled(FormControlLabel)(
  ({ theme }) => ({
    color: theme.palette["6"],
    ...theme.typography.text,
  })
);
