import React from 'react';

import { ConcreteIconProps } from 'components/base-icon/types/concrete-icon-props';
import { IconRoot } from 'components/base-icon/view/IconRoot';

export function PlusIcon(props: ConcreteIconProps) {
  return (
    <IconRoot {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="1.5" />
    </IconRoot>
  );
}
