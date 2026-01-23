import React from 'react';

import type { ConcreteIconProps } from 'components/base-icon/types/concrete-icon-props';
import { IconRoot } from 'components/base-icon/view/IconRoot';

export function ArrowLeftIcon(props: ConcreteIconProps) {
  return (
    <IconRoot {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.487 20.5471L4.48704 13.0471L3.90341 12.5L4.48704 11.9528L12.487 4.45282L13.513 5.54712L6.89658 11.75H22V13.25H6.89658L13.513 19.4528L12.487 20.5471Z"
        fill="currentcolor"
      />
    </IconRoot>
  );
}
