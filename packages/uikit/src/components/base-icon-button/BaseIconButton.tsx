import type { ReactNode } from 'react';
import React from 'react';
import { IconButton } from '@mui/material';

import type { ColorName, Sx } from 'design-system';
import { mergeSx } from 'design-system';
import type { IconType } from 'components/base-icon';
import { BaseIcon } from 'components/base-icon';

export type BaseIconButtonProps = {
  sx?: Sx;
  className?: string;
  type?: IconType;
  color?: ColorName;
  size?: number;
  disabled?: boolean;
  visibleIndent?: number;
  paddingPx?: number;
  onClick?: () => void;
  children?: ReactNode;
};
export function BaseIconButton({
  type,
  sx,
  className,
  size = 24,
  color = 'element-2',
  visibleIndent = 0,
  paddingPx = 0,
  disabled,
  onClick,
  children,
}: BaseIconButtonProps) {
  return (
    <IconButton
      sx={mergeSx(
        {
          color,
          width: size + visibleIndent * 2,
          height: size + visibleIndent * 2,
          margin: `-${visibleIndent}px`,
          padding: `${visibleIndent + paddingPx}px`,
        },
        sx,
      )}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {type && <BaseIcon type={type} size="100%" />}
      {children}
    </IconButton>
  );
}
