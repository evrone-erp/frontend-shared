import React, { memo, useMemo } from 'react';
import { Dialog, Box } from '@mui/material';

import { mergeSx } from 'design-system';
import { BaseModalHeader } from 'components/base-modal-header';

import type { BaseDialogProps } from './types';
import { BaseDialogPosition } from './types';
import { Transition } from './ui/Transition';
import { styles } from './BaseDialog.styles';

const paperProps = {
  className: 'BaseDialog__paper',
  sx: styles.paper,
};

const backdropProps = {
  className: 'BaseDialog__backdrop',
  sx: styles.backdrop,
};

const positionSx = {
  [BaseDialogPosition.left]: {
    justifyContent: 'flex-start',
  },
  [BaseDialogPosition.right]: {
    justifyContent: 'flex-end',
  },
  [BaseDialogPosition.center]: {
    justifyContent: 'center',
  },
};

export const BaseDialog = memo(({ children, open, sx, onClose, header, position }: BaseDialogProps) => {
  const transitionSx = useMemo(() => {
    const positionIsValid = position && position in BaseDialogPosition;
    return {
      '& .BaseDialog__transition': positionIsValid ? positionSx[position] : positionSx.center,
    };
  }, [position]);

  return (
    <Dialog
      className="BaseDialog__root"
      sx={mergeSx(transitionSx, styles.root, sx)}
      open={open}
      TransitionComponent={Transition}
      PaperProps={paperProps}
      BackdropProps={backdropProps}
      maxWidth="mob"
    >
      <BaseModalHeader header={header} onClose={onClose} />
      <Box sx={styles.content} className="BaseDialog__content">
        {children}
      </Box>
    </Dialog>
  );
});
