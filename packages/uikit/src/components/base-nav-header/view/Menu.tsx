import { Box } from '@mui/material';
import React from 'react';

export const Menu: React.FC<{ isOpened: boolean }> = ({ children, isOpened }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      mr: 15,
      opacity: isOpened ? 1 : 0,
      transition: 'opacity 200ms ease',
    }}
  >
    {children}
  </Box>
);
