import React from 'react';
import { Box, Typography } from '@mui/material';

import { Sx } from 'design-system';

export type BaseProgressProps = {
  sx?: Sx;
  className?: string;
  title: string;
  subtitle?: string;
  startBarText?: string;
  endBarText?: string;
  progressBar: JSX.Element;
  activeTitle?: boolean;
};

export function BaseProgress({
  sx,
  className,
  endBarText,
  startBarText,
  subtitle,
  title,
  progressBar,
  activeTitle = false,
}: BaseProgressProps) {
  return (
    <Box sx={sx} className={className}>
      <Box
        display="grid"
        gridAutoFlow="column"
        justifyContent="space-between"
        alignItems="center"
        gap={3}
        marginBottom={2.5}
      >
        <Typography typography="title" color={activeTitle ? 'element-2' : 'element-1'}>
          {title}
        </Typography>
        {subtitle && <Typography sx={{ typography: 'caption', color: 'element-0' }}>{subtitle}</Typography>}
      </Box>
      {progressBar}
      <Box display="flex" mt={1.5}>
        {startBarText && (
          <Typography typography="caption" color="element-0">
            {startBarText}
          </Typography>
        )}
        {endBarText && (
          <Typography ml="auto" typography="caption" color="element-0">
            {endBarText}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
