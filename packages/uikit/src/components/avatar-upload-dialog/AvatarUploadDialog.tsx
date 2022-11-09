import React, { useCallback, useState } from 'react';
import { BaseButton } from 'components/base-button';
import { Sx } from 'design-system/types';
import { BaseDialog, BaseDialogPosition } from 'components/base-dialog';
import { Box, Typography } from '@mui/material';
import { BaseAvatar } from 'components/base-avatar';
import { useDropzone } from 'react-dropzone';
import { AvatarEditor } from 'components/avatar-editor';
import { BasePlate } from 'components/base-plate';
import { useFileUrl } from './lib/use-file-url';

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
  const [preview, setPreview] = useState(value);
  const [file, setFile] = useState<File>();
  const onDrop = useCallback((files: File[]) => setFile(files[0]), [setFile]);
  const { getInputProps, getRootProps } = useDropzone({ onDrop });
  const src = useFileUrl(file);

  return (
    <BaseDialog
      sx={sx}
      position={BaseDialogPosition.left}
      className={className}
      open={isOpen}
      onClose={onClose}
      header={<Typography>Header</Typography>}
    >
      <BasePlate>
        <AvatarEditor src={src || value} size={size} setPreview={setPreview} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            pl: '6px',
          }}
        >
          <Typography sx={{ marginTop: '10px' }} variant="text">
            Preview avatar
          </Typography>
          <BaseAvatar sx={{ marginBottom: '10px' }} placeholder=" " value={preview} size={65} />
        </Box>
        <div {...getRootProps()}>
          <input accept="image/*" {...getInputProps()} />
          <BaseButton variant="text">Update...</BaseButton>
        </div>
        <BaseButton
          sx={{ marginTop: 'auto', alignSelf: 'flex-start' }}
          variant="text"
          icon="plus"
          onClick={() => onSave(preview)}
        >
          Save
        </BaseButton>
      </BasePlate>
    </BaseDialog>
  );
}
