import React, { ReactNode, ElementType } from 'react';
import classNames from 'classnames';

import { Box } from '@mui/material';
import { mergeSx, Sx } from 'design-system';

const commonSx = {
  borderRadius: 5,
  p: 5,
  transition: 'all 0.2s',
  bgcolor: 'bg-1',
  textAlign: 'start',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
};
const pressableSx = {
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'bg-2',
  },
  '&:active': {
    opacity: 0.8,
  },
};

export type BasePlateProps = {
  sx?: Sx;
  className?: string;
  children?: ReactNode;
  pressable?: boolean;
  onClick?: () => void;
  component?: ElementType;
};

export function BasePlate({ sx, className, children, pressable, onClick, component }: BasePlateProps) {
  return (
    <Box
      onClick={onClick}
      sx={mergeSx(commonSx, sx, pressable && pressableSx)}
      className={classNames('BasePlate__root', className)}
      component={component}
    >
      {children}
    </Box>
  );
}
