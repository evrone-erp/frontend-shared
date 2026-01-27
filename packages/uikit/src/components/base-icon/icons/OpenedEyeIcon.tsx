import React from 'react';
import { useTheme } from '@mui/material';

import { IconRoot } from 'components/base-icon/view/IconRoot';
import type { ConcreteIconProps } from 'components/base-icon/types/concrete-icon-props';

export function OpenedEyeIcon({ bgColor = 'bg-0', ...props }: ConcreteIconProps) {
  const theme = useTheme();
  return (
    <IconRoot {...props} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g
        clipPath="url(#a)"
        stroke={theme.palette[bgColor]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.73 11.684c3.967-5.838 12.573-5.838 16.54 0l.215.316-.214.316c-3.968 5.838-12.574 5.838-16.542 0L3.515 12l.214-.316Z" />
        <circle cx="12" cy="12" r="4" />
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z" />
        </clipPath>
      </defs>
    </IconRoot>
  );
}
