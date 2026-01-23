import type { ReactNode } from 'react';
import React from 'react';
import { Box, keyframes } from '@mui/material';
import type { ColorName } from 'design-system';
import { BaseTooltip } from 'components/base-tooltip';

const growAnimation = keyframes({
  '0%': {
    origin: 'left',
    transform: 'scaleX(0.0001)',
  },
  '100%': {
    transform: 'scaleX(1)',
  },
});

type ProgressSegmentComponentProps = {
  color: ColorName | 'transparent';
  tooltip?: ReactNode;
};

export function ProgressSegmentComponent({ color, tooltip }: ProgressSegmentComponentProps) {
  const renderSegment = (
    <Box
      className="BaseProgressBar-segment"
      sx={{
        backgroundColor: color,
        transformOrigin: 'left',
        animation: `${growAnimation} 600ms`,
        transition: 'transform 200ms ease',
        '&:hover': {
          transform: 'scaleY(1.5)',
        },
      }}
    />
  );

  if (tooltip) return <BaseTooltip title={tooltip}>{renderSegment}</BaseTooltip>;

  return renderSegment;
}
