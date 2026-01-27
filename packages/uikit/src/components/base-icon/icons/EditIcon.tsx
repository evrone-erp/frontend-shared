import React from 'react';

import { IconRoot } from 'components/base-icon/view/IconRoot';
import type { ConcreteIconProps } from 'components/base-icon/types/concrete-icon-props';

export function EditIcon(props: ConcreteIconProps) {
  return (
    <IconRoot {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M7.37021 16.2241L8.27586 17.1298L10.3738 16.5304L11.4293 15.4749L9.02514 13.0707L7.96962 14.1262L7.37021 16.2241ZM17.7932 9.11093L12.5607 14.3435L10.1565 11.9393L15.3891 6.70677L17.7932 9.11093ZM6.8016 13.0315L14.3991 5.43398C14.9459 4.88724 15.8323 4.88724 16.379 5.43398L19.066 8.12098C19.6128 8.66772 19.6128 9.55415 19.066 10.1009L11.4685 17.6984C11.3003 17.8666 11.0919 17.9892 10.8632 18.0546L6.40906 19.3272C5.65472 19.5427 4.95729 18.8453 5.17282 18.0909L6.44542 13.6368C6.51078 13.4081 6.63337 13.1997 6.8016 13.0315Z"
      />
    </IconRoot>
  );
}
