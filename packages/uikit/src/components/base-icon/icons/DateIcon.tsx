import React from 'react';

import { IconRoot } from 'components/base-icon/view/IconRoot';
import { ConcreteIconProps } from 'components/base-icon/types/concrete-icon-props';

export function DateIcon(props: ConcreteIconProps) {
  return (
    <IconRoot {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-2-inside-1_324_1393" fill="white">
        <rect x="5" y="6" width="14" height="14" rx="1" />
      </mask>
      <rect
        x="5"
        y="6"
        width="14"
        height="14"
        rx="1"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
        mask="url(#path-2-inside-1_324_1393)"
      />
      <rect x="5" y="6" width="14" height="4" rx="1" fill="currentColor" />
      <rect x="5" y="6" width="14" height="4" rx="1" stroke="currentColor" />
      <path d="M12 11V12.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 11V12.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 4V6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 11V12.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 4V6" stroke="currentColor" strokeWidth="1.5" />
    </IconRoot>
  );
}
