import React from 'react';
import { Box, BoxProps } from '@mui/material';

type DropZoneProps = {
  rootProps: BoxProps;
  inputProps: JSX.IntrinsicElements['input'];
};

export function DropZone({ inputProps, rootProps }: DropZoneProps) {
  return (
    <Box
      {...rootProps}
      className="BaseFileField-dropzone"
      sx={{ pt: 2.5, pb: 5, typography: 'text', color: 'element-2' }}
    >
      <input {...inputProps} />
      Drag here or click “Add” to select from disk. Maximum size – 100 mb.
    </Box>
  );
}
