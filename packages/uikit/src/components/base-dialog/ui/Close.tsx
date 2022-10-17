import React, { memo } from 'react';
import { DialogProps } from '@mui/material';

import { Sx, mergeSx } from 'design-system';

import { BaseCloseButton } from 'components/base-close-button';

type CloseProps = {
  onClose?: DialogProps['onClose'];
  sx?: Sx;
};

const rootSx = {
  justifySelf: 'flex-end',
  color: 'element-1',
  width: 22,
  height: 22,
};

export const Close = memo(({ onClose, sx }: CloseProps) => {
  if (!onClose) return null;

  return (
    <BaseCloseButton
      className="BaseDialog__close"
      sx={mergeSx(rootSx, sx)}
      onClick={() => onClose({}, 'escapeKeyDown')}
    />
  );
});
