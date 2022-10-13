import React from 'react';
import { alpha, Box } from '@mui/material';

type ScrollBorderGradientProps = { variant: 'top' | 'bottom' };

export function ScrollBorderGradient({ variant }: ScrollBorderGradientProps) {
  return (
    <Box position="relative" className="BaseDrawer-gradient">
      <Box
        sx={{
          position: 'absolute',
          height: 20,
          left: 0,
          right: 0,
          top: variant === 'top' ? 0 : -20,
          zIndex: 2,
          background: (theme) =>
            `linear-gradient(${variant === 'top' ? 0 : 180}deg, ${alpha(theme.palette['bg-0'], 0)} 0%, ${
              theme.palette['bg-0']
            } 100%)`,
        }}
      />
    </Box>
  );
}
