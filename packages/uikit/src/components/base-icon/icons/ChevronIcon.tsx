import React from 'react';

import { ConcreteIconProps } from 'components/base-icon/types/concrete-icon-props';
import { IconRoot } from 'components/base-icon/view/IconRoot';

export function ChevronIcon(props: ConcreteIconProps) {
  return (
    <IconRoot {...props} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 7L6 2L11 7" stroke="currentColor" strokeOpacity="0.64" strokeWidth="2" />
    </IconRoot>
  );
}
