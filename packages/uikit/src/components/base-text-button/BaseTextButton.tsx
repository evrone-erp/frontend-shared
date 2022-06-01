import React, { forwardRef, ReactNode } from "react";

import { BaseComponentProps } from "design-system/types";
import {
  StyledTextButton,
  StyledTextButtonProps,
} from "./view/StyledTextButton";
import { StyledCircularProgress } from "./view/StyledCircularProgress";

export type BaseTextButtonProps = {
  children?: ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
} & BaseComponentProps &
  StyledTextButtonProps;

export const BaseTextButton = forwardRef<
  HTMLButtonElement,
  BaseTextButtonProps
>(({ children, isLoading, ...restProps }, ref) => (
  <StyledTextButton ref={ref} {...restProps}>
    {children}
    {isLoading && <StyledCircularProgress size="20px" />}
  </StyledTextButton>
));

BaseTextButton.displayName = "BaseTextButton";
