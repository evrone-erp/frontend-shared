import React, { forwardRef, ReactNode } from "react";

import { BaseComponentProps } from "design-system/types";
import {
  StyledTextButton,
  StyledTextButtonProps,
} from "./view/StyledTextButton";

export type BaseTextButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
} & BaseComponentProps &
  StyledTextButtonProps;

export const BaseTextButton = forwardRef<
  HTMLButtonElement,
  BaseTextButtonProps
>(({ children, ...restProps }, ref) => (
  <StyledTextButton ref={ref} {...restProps}>
    {children}
  </StyledTextButton>
));

BaseTextButton.displayName = "BaseTextButton";
