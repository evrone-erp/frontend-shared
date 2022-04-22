import { Checkbox, styled } from "@mui/material";

export const StyledMuiCheckbox = styled(Checkbox)(() => ({
  padding: 10,
  marginTop: -10,
  marginBottom: -10,
  "& .MuiSvgIcon-root": {
    width: "0.875em",
    height: "0.875em",
  },
}));
