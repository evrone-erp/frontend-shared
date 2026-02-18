import React from 'react';
import type { BackdropProps } from '@mui/material/Backdrop';
import Backdrop from '@mui/material/Backdrop';

import { mergeSx } from 'design-system';

const rootSx = {
  bgcolor: 'bg-0',
};

export const BaseBackdrop = React.memo(({ children, sx, onClick, open }: BackdropProps) => (
  <Backdrop open={open} onClick={onClick} className="BaseBackdrop__root" sx={mergeSx(rootSx, sx)}>
    {children}
  </Backdrop>
));

export type { BackdropProps as BaseBackdropProps };
