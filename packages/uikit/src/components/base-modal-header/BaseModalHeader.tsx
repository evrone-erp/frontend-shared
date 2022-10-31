import React, { memo, ReactNode, useCallback } from 'react';
import { Typography, Box, DialogProps } from '@mui/material';

import { Sx, mergeSx } from 'design-system';
import { BaseCloseButton } from 'components/base-close-button';

import { styles } from './BaseModalHeader.styles';

type BaseModalHeaderProps = {
  header?: ReactNode;
  sx?: Sx;
  onClose?: DialogProps['onClose'];
};

export const BaseModalHeader = memo(({ header, onClose, sx }: BaseModalHeaderProps) => {
  const handleClose = useCallback(() => {
    onClose?.({}, 'escapeKeyDown');
  }, [onClose]);

  return (
    <Box className="BaseModalHeader__root" sx={mergeSx(styles.header, sx)}>
      <Box className="BaseModalHeader__header">
        {typeof header === 'string' ? (
          <Typography className="BaseModalHeader__header-text" sx={styles.headerText}>
            {header}
          </Typography>
        ) : (
          header
        )}
      </Box>
      <BaseCloseButton className="BaseModalHeader__close" sx={styles.close} onClick={handleClose} />
    </Box>
  );
});
