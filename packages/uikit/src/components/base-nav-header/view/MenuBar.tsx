import { Box } from '@mui/material';
import type { ReactNode } from 'react';
import React from 'react';

const rootSx = {
  display: 'flex',
  gap: {
    mob: 0,
    tab: 20,
  },
  justifyContent: {
    mob: 'center',
    tab: 'flex-end',
  },
  alignItems: 'stretch',
  flex: 1,
  flexDirection: {
    mob: 'column',
    tab: 'row',
  },
};

export const MenuBar = ({ children }: { children?: ReactNode | undefined }) => (
  <Box className="BaseNavHeader__menu-bar" sx={rootSx}>
    {children}
  </Box>
);
