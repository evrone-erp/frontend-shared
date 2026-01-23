import { Typography } from '@mui/material';
import type { ReactNode } from 'react';
import React from 'react';

type TitleContentProps = {
  children?: ReactNode;
  withClose?: boolean;
};

export function TitleContent({ children, withClose }: TitleContentProps) {
  if (!children) return null;
  return (
    <Typography variant="text" color="element-2" component="p" className="BaseHelp__title" pr={withClose ? 7 : 0}>
      {children}
    </Typography>
  );
}
