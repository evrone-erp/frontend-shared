import React, { forwardRef } from 'react';
import classNames from 'classnames';
import type { AppBarProps } from '@mui/material';
import { AppBar, Box } from '@mui/material';
import { mergeSx } from 'design-system';

type RootProps = {
  open: boolean;
} & AppBarProps;

const headerSx = { p: 0, bgcolor: 'bg-0' };

const rootSx = {
  py: 3,
  px: {
    mob: 1,
    tab: 4,
  },
  display: 'grid',
  alignItems: 'center',
  gap: {
    mob: 0,
    tab: 21,
  },
  bgcolor: 'bg-0',
  gridTemplateColumns: 'auto 1fr auto',
  gridTemplateRows: 'auto',
  gridTemplateAreas: {
    mob: `
      "logo avatar"
    `,
    tab: `
      "logo menu avatar"
    `,
  },
};

const openSx = {
  gridTemplateRows: {
    mob: 'auto auto',
    tab: 'auto',
  },
  gridTemplateAreas: {
    mob: `
      "logo avatar"
      "menu menu"
    `,
    tab: `
      "logo menu avatar"
    `,
  },
};

export const Root = forwardRef<HTMLDivElement, RootProps>(({ sx, className, position, children, open }, ref) => (
  <AppBar
    ref={ref}
    position={position}
    component="header"
    elevation={0}
    sx={headerSx}
    className={classNames('BaseNavHeader__root', className)}
  >
    <Box sx={mergeSx(rootSx, open && openSx, sx)}>{children}</Box>
  </AppBar>
));
