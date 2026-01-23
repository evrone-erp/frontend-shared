import type { ReactNode } from 'react';
import type { ColorName } from 'design-system';

export type ProgressSegment = {
  name: string;
  value: number;
  color: ColorName;
  tooltip?: ReactNode;
};
