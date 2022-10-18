import React, { memo, ReactNode } from 'react';
import { Typography, Box } from '@mui/material';

type CloseProps = {
  header?: ReactNode;
};

const headerSx = { typography: 'title' };

export const Header = memo(({ header }: CloseProps) => (
  <Box className="BaseDialog__header">
    {typeof header === 'string' ? <Typography sx={headerSx}>{header}</Typography> : header}
  </Box>
));
