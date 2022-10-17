import React, { ReactNode, memo } from 'react';
import { Dialog, DialogProps, Box } from '@mui/material';

import { BasePlate } from 'components/base-plate';

import { Transition } from './ui/Transition';
import { Close } from './ui/Close';
import { Header } from './ui/Header';

interface BaseDialogProps extends DialogProps {
  children: ReactNode;
  header?: ReactNode;
}

const headerSx = {
  bgcolor: 'transparent',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 64,
  gap: 16,
};

const cardSx = {
  bgcolor: 'bg-1',
  p: 5,
};

const paperProps = {
  className: 'BaseDialog__paper',
  sx: {
    bgcolor: 'transparent',
    backgroundImage: 'none',
    boxShadow: 'none',
    width: 460,
    maxWidth: 460,
    p: 0,
    m: 2.5,
  },
};

const backdropProps = {
  className: 'BaseDialog__backdrop',
  sx: {
    bgcolor: 'bg-0',
    // To show header
    top: {
      mob: 32,
      tab: 56,
    },
  },
};

export const BaseDialog = memo(({ children, open, sx, onClose, header }: BaseDialogProps) => (
  <Dialog
    className="BaseDialog__root"
    sx={sx}
    open={open}
    TransitionComponent={Transition}
    PaperProps={paperProps}
    BackdropProps={backdropProps}
    maxWidth="mob"
  >
    <Box className="BaseDialog__header-wrapper" sx={headerSx}>
      <Header header={header} />
      <Close onClose={onClose} />
    </Box>
    <BasePlate sx={cardSx} className="BaseDialog__plate">
      {children}
    </BasePlate>
  </Dialog>
));
