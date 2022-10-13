import React from 'react';
import { Box, CircularProgress, alpha } from '@mui/material';

type LoaderProps = { isLoading?: boolean };

export function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) return null;
  return (
    <Box
      className="BaseFileField-loader"
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: (theme) => alpha(theme.palette['bg-0'], 0.2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress size={40} />
    </Box>
  );
}
