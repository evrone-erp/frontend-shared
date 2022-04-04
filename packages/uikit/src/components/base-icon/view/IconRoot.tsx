import { styled } from "@mui/material";
import { ConcreteIconProps } from "../types/concrete-icon-props";

export const IconRoot = styled("svg")<ConcreteIconProps>(
  ({ color, size, theme }) => ({
    display: "inline-block",
    verticalAlign: "text-bottom",
    color: color ? theme.palette[color] : "currentColor",
    height: size ?? "1.125em",
    width: size ?? "1.125em",
  })
);
