import React, { ReactNode } from "react";

import { BaseIcon, IconType } from "components/base-icon";
import { SxProps, Theme } from "@mui/material";

import { StyledButton } from "./view/StyledButton";

export type BaseButtonProps = {
  onClick?: () => void;
  children?: ReactNode;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  icon?: IconType;
  className?: string;
  sx?: SxProps<Theme>;
  isRound?: boolean;
};

// `isLoading` and `isRound` cant'be together because of
// the problem with showing the spinner in the rounded view
export function BaseButton({
  children,
  icon,
  className,
  sx,
  disabled = false,
  variant = "primary",
  isRound = false,
  onClick,
}: BaseButtonProps): JSX.Element {
  return (
    <StyledButton
      className={className}
      variant={variant === "primary" ? "contained" : "outlined"}
      disabled={disabled}
      onClick={onClick}
      isRound={isRound}
      disableElevation
      sx={sx}
    >
      {!isRound && children}
      {icon && <BaseIcon type={icon} size="1.5em" />}
    </StyledButton>
  );
}
