import React from 'react';
import { ColorName, Sx } from 'design-system';

import { ProgressSegment } from './types';
import { ProgressSegmentComponent } from './view/ProgressSegment';
import { ProgressWrapper } from './view/ProgressWrapper';

export type BaseProgressBarProps = {
  sx?: Sx;
  className?: string;
  background?: ColorName | 'transparent';
  valueSegments: ProgressSegment[];
  totalValue: number;
  gap?: number;
};

const sumSegments = (sum: number, segment: ProgressSegment) => sum + segment.value;

export function BaseProgressBar({
  sx,
  className,
  valueSegments,
  totalValue,
  gap = 0,
  background = 'bg-0',
}: BaseProgressBarProps) {
  const valuesSum = valueSegments.reduce(sumSegments, 0);
  const restSegmentValue = totalValue - valuesSum;
  const segmentValues = valueSegments.map((v) => v.value);

  if (restSegmentValue > 0) {
    segmentValues.push(restSegmentValue);
  }

  return (
    <ProgressWrapper background={background} gap={gap} sx={sx} className={className} values={segmentValues}>
      {valueSegments.map((segment) => (
        <ProgressSegmentComponent key={segment.name} color={segment.color} tooltip={segment.tooltip} />
      ))}
      {restSegmentValue > 0 && <ProgressSegmentComponent color="transparent" />}
    </ProgressWrapper>
  );
}
