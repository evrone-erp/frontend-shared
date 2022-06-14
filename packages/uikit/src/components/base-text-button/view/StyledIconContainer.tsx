import { styled } from "@mui/material";

export const StyledIconContainer = styled("div")(
  ({ theme: { spacing } }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    marginLeft: spacing(2),
  })
);
