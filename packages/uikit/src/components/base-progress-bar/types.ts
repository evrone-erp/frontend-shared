import { ReactNode } from 'react';
import { ColorName } from 'design-system';

export type ProgressSegment = {
  name: string;
  value: number;
  color: ColorName;
  tooltip?: ReactNode;
};
