import React, { PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import { mergeSx } from 'design-system';

const rootSx = {
  display: {
    mob: 'none',
    tab: 'flex',
  },
  mt: {
    mob: 3,
    tab: 0,
  },
  alignItems: 'center',
  justifyContent: 'flex-end',
  opacity: 0,
  transition: 'opacity 200ms ease',
  pointerEvents: 'none',
  flex: 1,
  gridArea: 'menu',
};

const openSx = {
  display: {
    mob: 'flex',
  },
  opacity: 1,
  pointerEvents: 'auto',
};

export const Menu = ({ children, open }: PropsWithChildren<{ open: boolean }>) => (
  <Box className="BaseNavHeader__menu" sx={mergeSx(rootSx, open && openSx)}>
    {children}
  </Box>
);
