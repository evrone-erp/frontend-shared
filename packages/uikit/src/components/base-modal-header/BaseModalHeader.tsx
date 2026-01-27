import type { ReactNode } from 'react';
import React, { memo, useCallback } from 'react';
import type { DialogProps } from '@mui/material';
import { Typography, Box } from '@mui/material';

import type { Sx } from 'design-system';
import { mergeSx } from 'design-system';

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
