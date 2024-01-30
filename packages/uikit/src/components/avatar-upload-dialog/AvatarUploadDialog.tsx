import React from 'react';
import { Sx } from 'design-system/types';
import { BaseDialog, BaseDialogPosition } from 'components/base-dialog';
import { Typography } from '@mui/material';
import { AvatarUpload } from 'components/avatar-upload';

export type AvatarUploadDialogProps = {
  sx?: Sx;
  className?: string;
  value?: string;
  size?: number;
  onSave: (url: string) => void;
  onClose: () => void;
  isOpen?: boolean;
};

export function AvatarUploadDialog({
  sx,
  className,
  size = 370,
  value = '',
  isOpen = false,
  onClose,
  onSave,
}: AvatarUploadDialogProps) {
  return (
    <BaseDialog
      sx={sx}
      position={BaseDialogPosition.left}
      className={className}
      open={isOpen}
      onClose={onClose}
      header={<Typography>Header</Typography>}
    >
      <AvatarUpload sx={{ width: 'auto' }} onSave={onSave} size={size} value={value} />
    </BaseDialog>
  );
}
