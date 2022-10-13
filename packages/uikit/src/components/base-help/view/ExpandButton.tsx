import React from 'react';
import { Box, alpha, ButtonBase } from '@mui/material';

type ExpandButtonProps = { onClick: () => void };

export function ExpandButton({ onClick }: ExpandButtonProps) {
  return (
    <Box
      sx={{
        position: 'absolute',
        right: '0',
        bottom: '0',
        pl: 1,
        display: 'flex',
      }}
    >
      <Box
        sx={{
          width: 20,
          background: (theme) =>
            `linear-gradient(90deg, ${alpha(theme.palette['bg-1'], 0)} 0%, ${theme.palette['bg-1']} 100%)`,
        }}
      />
      <ButtonBase
        onClick={onClick}
        sx={{
          typography: 'text',
          color: 'element-2',
          py: 0,
          pl: 2,
          backgroundColor: 'bg-1',
        }}
      >
        Развернуть
      </ButtonBase>
    </Box>
  );
}
