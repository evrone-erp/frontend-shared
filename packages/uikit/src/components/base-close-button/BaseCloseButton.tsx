import { bindPropsSxMerge } from 'design-system';
import { BaseIconButton } from 'components/base-icon-button';

export const BaseCloseButton = bindPropsSxMerge(BaseIconButton, {
  type: 'close-sm',
  className: 'BaseCloseButton__root',
} as const);
