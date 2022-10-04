import React from 'react';
import { Box, Typography } from '@mui/material';

type FieldLabelProps = {
  label?: string;
  button: JSX.Element;
};

export function FieldLabel({ label, button }: FieldLabelProps) {
  return (
    <Box className="BaseFileField-label" sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography sx={{ mr: 2 }}>{label}</Typography>
      {button}
    </Box>
  );
}
