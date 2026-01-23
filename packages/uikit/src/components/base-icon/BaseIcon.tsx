import React from 'react';

import type { ColorName, Sx } from 'design-system';
import cn from 'classnames';

import type { IconType } from './icons';
import { icons } from './icons';

export type BaseIconProps = {
  type: IconType;
  size?: number | string;
  color?: ColorName;
  className?: string;
  sx?: Sx;
};

export function BaseIcon({ type, color, size, className, sx }: BaseIconProps) {
  const IconByType = icons[type];
  return <IconByType className={cn('BaseIcon', className)} color={color} size={size} sx={sx} />;
}
