import { Box } from '@mui/material';
import type { ReactNode } from 'react';
import React from 'react';

type TabsRowProps = {
  currentTabOffset: number;
  gap: number;
  children?: ReactNode;
};

export function TabsRow({ gap, currentTabOffset, children }: TabsRowProps) {
  return (
    <Box
      className="BaseTabs-row"
      sx={{
        flexShrink: '0',
        position: 'relative',
        top: 0,
        left: '50%',
        display: 'grid',
        gridAutoFlow: 'column',
        gap,
        transition: 'transform 0.5s',
      }}
      style={{
        transform: `translateX(-${currentTabOffset}px)`,
      }}
    >
      {children}
    </Box>
  );
}
