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
  isRound?: boolean;
  className?: string;
  sx?: SxProps<Theme>;
};

export function BaseButton({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  icon,
  isRound = false,
  className,
  sx,
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
