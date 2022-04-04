import React, { forwardRef, ReactNode, Ref } from "react";
import { ButtonBase } from "@mui/material";

import { ColorName, mergeSx, Sx } from "design-system";

export type BaseTextButtonProps = {
  sx?: Sx;
  className?: string;
  color?: ColorName;
  hoverColor?: ColorName;
  children?: ReactNode;
  onClick?: () => void;
};

export const BaseTextButton = forwardRef(
  (
    {
      sx,
      className,
      color = "6",
      children,
      onClick,
      hoverColor,
    }: BaseTextButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => (
    <ButtonBase
      ref={ref}
      sx={mergeSx(
        {
          color,
          typography: "text",
          padding: 0,
          borderRadius: 1,
          "& .MuiTouchRipple-root": {
            left: -5,
            right: -5,
          },
          "&:hover": {
            color: hoverColor ?? color,
          },
        },
        sx
      )}
      className={className}
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  )
);

BaseTextButton.displayName = "BaseTextButton";
