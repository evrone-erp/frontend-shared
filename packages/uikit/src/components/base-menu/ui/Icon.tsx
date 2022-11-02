import React, { memo } from 'react';
import cn from 'classnames';

import { mergeSx } from 'design-system';
import { BaseIcon, BaseIconProps } from 'components/base-icon';

type IconProps = Omit<BaseIconProps, 'type'>;

const rootSx = {
  width: 12,
  height: 12,
  '&.BaseMenu__icon': {
    right: 6,
    top: 'calc(50% - 6px)',
    color: 'inherit',
  },
};

export const Icon = memo(({ sx, className, ...props }: IconProps) => (
  <BaseIcon type="chevron" className={cn(className, 'BaseMenu__icon')} sx={mergeSx(sx, rootSx)} {...props} />
));
