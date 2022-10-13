import React from 'react';

import { ConcreteIconProps } from 'components/base-icon/types/concrete-icon-props';
import { IconRoot } from 'components/base-icon/view/IconRoot';

export function CloseSmIcon(props: ConcreteIconProps) {
  return (
    <IconRoot {...props} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.46967 1.53033L5.46967 6.53033L6.53033 5.46967L1.53033 0.46967L0.46967 1.53033ZM5.46967 6.53033L10.4697 11.5303L11.5303 10.4697L6.53033 5.46967L5.46967 6.53033ZM1.53033 11.5303L6.53033 6.53033L5.46967 5.46967L0.46967 10.4697L1.53033 11.5303ZM6.53033 6.53033L11.5303 1.53033L10.4697 0.46967L5.46967 5.46967L6.53033 6.53033Z"
        fill="currentColor"
      />
    </IconRoot>
  );
}
