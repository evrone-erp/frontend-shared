import React, { ReactNode } from 'react';

import { BaseIcon, IconType } from 'components/base-icon';
import { SxProps, Theme, ButtonProps } from '@mui/material';

import { StyledButton } from './view/StyledButton';

export type BaseButtonProps = {
  onClick?: () => void;
  children?: ReactNode;
  disabled?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
  icon?: IconType;
  className?: string;
  sx?: SxProps<Theme>;
  isRound?: boolean;
  size?: ButtonProps['size'];
};

const iconSizes = {
  small: 20,
  medium: 24,
  large: 30,
};

export function BaseButton({
  children,
  icon,
  className,
  sx,
  disabled = false,
  variant = 'contained',
  isRound = false,
  onClick,
  size = 'medium',
}: BaseButtonProps): JSX.Element {
  const iconSize = iconSizes[size];

  return (
    <StyledButton
      className={className}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      isRound={isRound}
      disableElevation
      sx={sx}
      size={size}
    >
      {!isRound && children}
      {icon && <BaseIcon type={icon} size={iconSize} />}
    </StyledButton>
  );
}
