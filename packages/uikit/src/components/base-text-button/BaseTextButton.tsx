import React, { forwardRef, ReactNode } from 'react';
import { CircularProgress } from '@mui/material';

import { BaseComponentProps } from 'design-system/types';
import { BaseIcon, IconType } from 'components/base-icon';
import { StyledTextButton, StyledTextButtonProps } from './view/StyledTextButton';
import { StyledIconContainer } from './view/StyledIconContainer';

export type BaseTextButtonProps = {
  children?: ReactNode;
  iconType?: IconType;
  isLoading?: boolean;
  onClick?: () => void;
} & BaseComponentProps &
  StyledTextButtonProps;

export const BaseTextButton = forwardRef<HTMLButtonElement, BaseTextButtonProps>(
  ({ children, isLoading, iconType, ...restProps }, ref) => (
    <StyledTextButton ref={ref} {...restProps}>
      {children}

      {iconType && (
        <StyledIconContainer>
          <BaseIcon type={iconType} />
        </StyledIconContainer>
      )}

      {isLoading && (
        <StyledIconContainer>
          <CircularProgress size="20px" />
        </StyledIconContainer>
      )}
    </StyledTextButton>
  ),
);

BaseTextButton.displayName = 'BaseTextButton';
