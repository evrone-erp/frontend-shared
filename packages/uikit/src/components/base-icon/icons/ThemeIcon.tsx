import React from 'react';
import { useTheme } from '@mui/material';

import type { ConcreteIconProps } from 'components/base-icon/types/concrete-icon-props';
import { IconRoot } from 'components/base-icon/view/IconRoot';

export function ThemeIcon({ bgColor = 'bg-0', ...props }: ConcreteIconProps) {
  const theme = useTheme();
  return (
    <IconRoot {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11.8" fill="currentColor" />
      <path d="M21 12C21 16.9706 16.9706 21 12 21V3C16.9706 3 21 7.02944 21 12Z" fill={theme.palette[bgColor]} />
    </IconRoot>
  );
}
