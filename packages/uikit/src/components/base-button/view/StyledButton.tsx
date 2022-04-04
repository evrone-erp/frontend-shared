import { Button, ButtonProps, styled } from "@mui/material";

type StyledButtonProps = ButtonProps & { isRound?: boolean };

export const StyledButton = styled(Button, {
  shouldForwardProp: (p) => p !== "isRound",
})<StyledButtonProps>(
  ({ theme, variant }) => {
    if (variant === "contained") {
      return {
        backgroundColor: theme.palette["3"],
        "&:hover": {
          backgroundColor: theme.palette["4"],
        },
        "&.Mui-disabled": {
          backgroundColor: theme.palette["2"],
        },
      };
    }
    if (variant === "outlined") {
      return {
        borderWidth: 1,
        borderColor: theme.palette["4"],
        "&:hover": {
          borderColor: theme.palette["4"],
          backgroundColor: theme.palette["3"],
        },
      };
    }
    return {};
  },
  ({ theme, isRound }) => ({
    padding: isRound ? 12 : [8, 20],
    minWidth: isRound ? "0" : "64px",
    borderRadius: isRound ? "100%" : 12,
    textTransform: "none",
    color: theme.palette["6"],
    "&.Mui-disabled": {
      color: theme.palette["4"],
    },
    ...theme.typography.text,
  }),
  ({ isRound }) => ({
    "& .BaseIcon": {
      marginLeft: isRound ? 0 : 10,
      marginRight: isRound ? 0 : -8,
    },
  })
);
