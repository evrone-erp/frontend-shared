import type { ElementType, PropsWithChildren } from 'react';
import React from 'react';
import classNames from 'classnames';
import { Box } from '@mui/material';

import type { Sx } from 'design-system';
import { mergeSx } from 'design-system';

import { BaseLoader } from 'components/base-loader';

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

const loaderWrapperSx = {
  position: 'absolute',
  inset: 0,
  backgroundColor: 'inherit',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 'inherit',
};

export type BasePlateProps = {
  sx?: Sx;
  className?: string;
  pressable?: boolean;
  onClick?: () => void;
  component?: ElementType;
  loading?: boolean;
};

export function BasePlate({
  sx,
  className,
  children,
  pressable,
  onClick,
  component,
  loading,
}: PropsWithChildren<BasePlateProps>) {
  return (
    <Box
      onClick={onClick}
      sx={mergeSx(commonSx, sx, pressable && pressableSx)}
      className={classNames('BasePlate__root', className)}
      component={component}
    >
      {children}
      {loading && (
        <Box className="BasePlate__loading" sx={loaderWrapperSx}>
          <BaseLoader />
        </Box>
      )}
    </Box>
  );
}
