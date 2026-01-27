import React from 'react';

import type { ConcreteIconProps } from 'components/base-icon/types/concrete-icon-props';
import { IconRoot } from 'components/base-icon/view/IconRoot';

export function CloseIcon(props: ConcreteIconProps) {
  return (
    <IconRoot {...props} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.46967 3.53033L10.4697 11.5303L11.5303 10.4697L3.53033 2.46967L2.46967 3.53033ZM10.4697 11.5303L18.4697 19.5303L19.5303 18.4697L11.5303 10.4697L10.4697 11.5303ZM3.53033 19.5303L11.5303 11.5303L10.4697 10.4697L2.46967 18.4697L3.53033 19.5303ZM11.5303 11.5303L19.5303 3.53033L18.4697 2.46967L10.4697 10.4697L11.5303 11.5303Z"
        fill="currentColor"
      />
    </IconRoot>
  );
}
