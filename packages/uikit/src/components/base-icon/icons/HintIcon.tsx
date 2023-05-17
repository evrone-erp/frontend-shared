import React from 'react';

import { IconRoot } from 'components/base-icon/view/IconRoot';
import { ConcreteIconProps } from 'components/base-icon/types/concrete-icon-props';

export function HintIcon(props: ConcreteIconProps) {
  return (
    <IconRoot {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.332" cy="12" r="7.4" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M12.4739 7.88208C10.7689 7.88208 9.50391 8.90508 9.50391 10.5221H10.9999C11.0329 9.46608 11.6489 9.03708 12.4519 9.03708C13.0349 9.03708 13.6179 9.40008 13.6179 9.97208C13.6179 10.5441 13.1449 10.9071 12.4519 11.3141C11.6929 11.7541 11.2749 12.2931 11.2749 13.3711H12.7599C12.7599 12.5681 13.0789 12.3371 13.7939 11.9191C14.4209 11.5561 15.1469 10.9071 15.1469 9.89508C15.1469 8.52008 13.8159 7.88208 12.4739 7.88208ZM12.8259 16.0001V14.3501H11.1979V16.0001H12.8259Z"
        fill="currentColor"
      />
    </IconRoot>
  );
}
