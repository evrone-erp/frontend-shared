import type { ReactNode } from 'react';
import React from 'react';
import { Box } from '@mui/material';

import type { BaseComponentProps } from 'design-system/types';
import { mergeSx } from 'design-system';

export type GroupProps = {
  children?: ReactNode;
} & BaseComponentProps;

const rootSx = {
  display: 'flex',
  py: {
    mob: 3,
    tab: 0,
  },
  gap: {
    mob: 0,
    tab: 5,
  },
  alignItems: 'center',
  justifyContent: {
    mob: 'space-between',
    tab: 'flex-end',
  },
  '& + &': {
    borderTopColor: 'element-1',
    borderTopWidth: 1,
    borderTopStyle: {
      mob: 'solid',
      tab: 'none',
    },
  },
  '& > *': {
    flex: {
      mob: 1,
      tab: 'auto',
    },
    '&:first-of-type': {
      justifyContent: {
        mob: 'flex-start',
        tab: 'auto',
      },
    },
    '&:last-of-type': {
      justifyContent: {
        mob: 'flex-end',
        tab: 'auto',
      },
    },
  },
};

export const Group = ({ children, sx }: GroupProps) => (
  <Box className="BaseNavHeader__group" sx={mergeSx(rootSx, sx)}>
    {children}
  </Box>
);
