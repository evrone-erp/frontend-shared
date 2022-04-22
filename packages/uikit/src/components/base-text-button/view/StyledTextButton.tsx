import { ButtonBase, styled } from "@mui/material";
import { ColorName } from "design-system";

export type StyledTextButtonProps = {
  color?: ColorName;
  hoverColor?: ColorName;
};

export const StyledTextButton = styled(ButtonBase)<StyledTextButtonProps>(
  ({ theme, color = theme.palette["6"], hoverColor }) => ({
    color,
    typography: "text",
    padding: 0,
    borderRadius: 1,
    "& .MuiTouchRipple-root": {
      left: -5,
      right: -5,
    },
    "&.Mui-disabled": {
      color: theme.palette["4"],
      cursor: 'not-allowed'
    },
    "&:hover": {
      color: hoverColor ?? color,
    },
  })
);
