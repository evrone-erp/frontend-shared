import React, { forwardRef, ReactNode, Ref } from "react";

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

export const BaseTextButton = forwardRef(
  (
    { children, ...restProps }: BaseTextButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => (
    <StyledTextButton ref={ref} {...restProps}>
      {children}
    </StyledTextButton>
  )
);

BaseTextButton.displayName = "BaseTextButton";
