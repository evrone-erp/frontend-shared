// necessary for exporting of mui overrides outside of this package.  (https://github.com/mui/material-ui/issues/31097)
import './mui-module-overrides';
import type { Sx } from './types';

export { mergeSx } from './lib/merge-sx';
export { addSxProp } from './lib/add-sx-prop';
export { bindPropsSxMerge } from './lib/bind-props-sx-merge';
export * from './theme';
export { Baseline } from './Baseline';
export type { Breakpoint, Sx, ThemeKey, ColorName, TypographyName } from './types';

export type BaseComponentProps = {
  sx?: Sx;
  className?: string;
};
