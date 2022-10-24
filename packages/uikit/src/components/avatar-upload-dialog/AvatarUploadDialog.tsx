import React, { useCallback, useState } from 'react';
import { BaseButton } from 'components/base-button';
import { Sx } from 'design-system/types';
import { BaseDialog } from 'components/base-dialog';
import { styled, Typography } from '@mui/material';
import { BaseAvatar } from 'components/base-avatar';
import { mergeSx } from 'design-system/lib/merge-sx';
import { useDropzone } from 'react-dropzone';
import { AvatarEditor } from 'components/avatar-editor';
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

const InnerContainer = styled('div')`
  height: 714px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

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
      sx={mergeSx(sx, { '& .BaseDialog__transition': { justifyContent: 'flex-start' } })}
      className={className}
      open={isOpen}
      onClose={onClose}
      header={<Typography>Header</Typography>}
    >
      <InnerContainer>
        <AvatarEditor src={src || value} size={size} setPreview={setPreview} />
        <BaseAvatar sx={{ margin: '20px 0' }} value={preview} size={65} />
        <div {...getRootProps()}>
          <input accept="image/*" {...getInputProps()} />
          <BaseButton sx={{ marginTop: '20px' }} variant="text">
            Update...
          </BaseButton>
        </div>
        <BaseButton sx={{ marginTop: 'auto' }} variant="text" icon="plus" onClick={() => onSave(preview)}>
          Save
        </BaseButton>
      </InnerContainer>
    </BaseDialog>
  );
}
