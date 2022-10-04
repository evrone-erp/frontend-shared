import React from 'react';

import { useTheme } from '@mui/material';
import { ConcreteIconProps } from 'components/base-icon/types/concrete-icon-props';
import { IconRoot } from 'components/base-icon/view/IconRoot';

export function EvroneIcon({ bgColor = 'bg-0', ...props }: ConcreteIconProps) {
  const theme = useTheme();
  return (
    <IconRoot {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11.8" fill="currentColor" />
      <path
        d="M18.7862 12.89C19.0722 8.21 16.3682 4.7 12.0782 4.7C8.1002 4.7 5.2142 7.69 5.2142 11.902C5.2142 15.932 7.7882 19.338 12.2862 19.338C15.8742 19.338 18.0062 17.05 18.6302 14.814H15.5882C15.0422 16.14 13.7942 16.764 12.1562 16.764C10.3882 16.764 8.5682 15.49 8.3602 12.89H18.7862ZM12.0782 7.118C13.8982 7.118 15.5622 8.444 15.6402 10.628H8.3602C8.6462 8.002 10.6222 7.118 12.0782 7.118Z"
        fill={theme.palette[bgColor]}
      />
    </IconRoot>
  );
}
