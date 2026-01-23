import type { GridProps, Theme } from '@mui/material';
import { Grid } from '@mui/material';
import type { PropsWithChildren } from 'react';
import React from 'react';

const COLUMNS_COUNT = 12;

export type BaseGridProps = Omit<GridProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> &
  Partial<Record<Theme['breakpoints']['keys'][0], number>>;

export const BaseGrid = ({ container, ...props }: PropsWithChildren<BaseGridProps>) => (
  <Grid
    columns={COLUMNS_COUNT}
    spacing={
      container
        ? {
            mob: 2.5,
            desk: 3.5,
          }
        : undefined
    }
    container={container}
    {...props}
  />
);
