import React from 'react';
import { Box, Typography } from '@mui/material';

import { BaseIcon } from 'components/base-icon';
import { BaseIconButton } from 'components/base-icon-button';

type FileLineProps = { name: string; onDelete: () => void };

export function FileLine({ onDelete, name }: FileLineProps) {
  return (
    <Box className="BaseFileField-fileLine" sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
      <BaseIcon type="file" color="element-2" sx={{ mr: 1.5 }} />
      <Typography>{name}</Typography>
      <BaseIconButton type="delete" color="element-1" sx={{ ml: 3 }} onClick={onDelete} />
    </Box>
  );
}
