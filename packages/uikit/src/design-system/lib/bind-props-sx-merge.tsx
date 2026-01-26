import classNames from 'classnames';
import { createBindProps } from '@evrone-erp/react-std';

import type { Sx } from 'design-system/types';

import { mergeSx } from './merge-sx';

export const bindPropsSxMerge = createBindProps<{
  sx?: Sx;
  className?: string;
}>((props1, props2) => {
  const sx = props1.sx || props2.sx ? mergeSx(props1.sx, props2.sx) : undefined;
  const className = props1.className || props2.className ? classNames(props1.className, props2.className) : undefined;
  return { ...props1, ...props2, className, sx };
});
