import React, { memo, ReactNode } from 'react';
import Box from '@mui/material/Box';

import { Sx, mergeSx } from 'design-system';

interface BaseTabPanelProps {
  children?: ReactNode;
  value: string;
  currentValue: string;
  sx?: Sx;
}

const rootSx = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};

const hiddenSx = {
  display: 'none',
};

export const BaseTabPanel = memo(({ children, value, currentValue, sx }: BaseTabPanelProps) => {
  const isCurrentValue = value === currentValue;

  return (
    <Box role="tabpanel" sx={mergeSx(rootSx, sx, !isCurrentValue && hiddenSx)} className="BaseTabPanel__root">
      {isCurrentValue && children}
    </Box>
  );
});
