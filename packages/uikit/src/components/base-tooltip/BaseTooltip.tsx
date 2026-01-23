import React, { memo } from 'react';
import type { TooltipProps } from '@mui/material';
import { Tooltip } from '@mui/material';

export type BaseTooltipProps = TooltipProps;

const componentsProps = {
  tooltip: {
    sx: {
      bgcolor: 'bg-0',
      color: 'element-2',
      typography: 'text',
      '&.MuiTooltip-tooltip.MuiTooltip-tooltipPlacementTop': {
        mb: 2,
      },
    },
  },
};

export const BaseTooltip = memo(({ children, placement = 'top', ...props }: TooltipProps) => (
  <Tooltip componentsProps={componentsProps} placement={placement} {...props}>
    {children}
  </Tooltip>
));
