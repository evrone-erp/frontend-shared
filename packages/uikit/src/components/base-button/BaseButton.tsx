import React from 'react';

import { BaseIcon, IconType } from 'components/base-icon';
import { StyledIconContainer } from 'components/base-text-button/view/StyledIconContainer';
import { CircularProgress, SxProps, Theme } from '@mui/material';

import { StyledButton, StyledButtonProps } from './view/StyledButton';

export type BaseButtonProps = StyledButtonProps & {
  icon?: IconType;
  sx?: SxProps<Theme>;
  isLoading?: boolean;
};

const iconSizes = {
  small: 20,
  medium: 24,
  large: 30,
};

export function BaseButton({
  children,
  icon,
  onClick,
  disabled = false,
  variant = 'contained',
  isRound = false,
  size = 'medium',
  isLoading = false,
  ...restButtonProps
}: BaseButtonProps): JSX.Element {
  const iconSize = iconSizes[size];

  return (
    <StyledButton
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      isRound={isRound}
      disableElevation
      size={size}
      {...restButtonProps}
    >
      {!isRound && children}
      {icon && <BaseIcon type={icon} size={iconSize} />}
      {isLoading && (
        <StyledIconContainer>
          <CircularProgress size="20px" />
        </StyledIconContainer>
      )}
    </StyledButton>
  );
}
