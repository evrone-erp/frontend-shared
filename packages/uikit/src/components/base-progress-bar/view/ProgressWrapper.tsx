import type { ReactNode } from 'react';
import React from 'react';
import { Box } from '@mui/material';
import classNames from 'classnames';

import type { ColorName, Sx } from 'design-system';
import { mergeSx } from 'design-system';

type ProgressWrapperProps = {
  sx?: Sx;
  className?: string;
  values: number[];
  background: ColorName | 'transparent';
  gap: number;
  children?: ReactNode;
};

export function ProgressWrapper({ gap, background, children, className, sx, values }: ProgressWrapperProps) {
  return (
    <Box
      sx={mergeSx(
        {
          display: 'grid',
          columnGap: gap,
          backgroundColor: background,
          height: 4,
          gridTemplateColumns: values.map((v) => `${v}fr`).join(' '),
        },
        sx,
      )}
      className={classNames(className, 'BaseProgressBar-root')}
    >
      {children}
    </Box>
  );
}
