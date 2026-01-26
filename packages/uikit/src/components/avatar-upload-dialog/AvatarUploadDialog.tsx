import React from 'react';
import { Typography } from '@mui/material';

import type { Sx } from 'design-system/types';

import type { TAvatarEditorProps } from 'components/avatar-editor/AvatarEditor';
import type { AvatarUploadProps } from 'components/avatar-upload/AvatarUpload';
import { BaseDialog, BaseDialogPosition } from 'components/base-dialog';
import { AvatarUpload } from 'components/avatar-upload';

export type AvatarUploadDialogProps = {
  sx?: Sx;
  className?: string;
  value?: string;
  size?: number;
  onSave: (url: string) => void;
  onClose: () => void;
  isOpen?: boolean;
  locales?: Partial<{ header: string }> & TAvatarEditorProps['locales'] & AvatarUploadProps['locales'];
};

const DEFAULT_TEXTS = {
  header: 'Header',
};

export function AvatarUploadDialog({
  sx,
  className,
  size = 370,
  value = '',
  isOpen = false,
  onClose,
  onSave,
  locales,
}: AvatarUploadDialogProps) {
  const texts = locales ? { ...DEFAULT_TEXTS, ...locales } : DEFAULT_TEXTS;

  return (
    <BaseDialog
      sx={sx}
      position={BaseDialogPosition.left}
      className={className}
      open={isOpen}
      onClose={onClose}
      header={<Typography>{texts.header}</Typography>}
    >
      <AvatarUpload sx={{ width: 'auto' }} onSave={onSave} size={size} value={value} locales={texts} />
    </BaseDialog>
  );
}
