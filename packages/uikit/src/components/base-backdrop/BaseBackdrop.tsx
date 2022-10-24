import React from 'react';
import Backdrop, { BackdropProps } from '@mui/material/Backdrop';
import { mergeSx } from 'design-system';

const rootSx = {
  bgcolor: 'bg-0',
};

export const BaseBackdrop = React.memo(({ children, sx, onClick, open }: BackdropProps) => (
  <Backdrop open={open} onClick={onClick} className="BaseBackdrop__root" sx={mergeSx(rootSx, sx)}>
    {children}
  </Backdrop>
));

export { BackdropProps as BaseBackdropProps };
