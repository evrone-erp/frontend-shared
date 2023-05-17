import React from 'react';

import { ConcreteIconProps } from 'components/base-icon/types/concrete-icon-props';
import { IconRoot } from 'components/base-icon/view/IconRoot';

export function UnpaidIcon(props: ConcreteIconProps) {
  return (
    <IconRoot {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.34146 17.1724L4.14873 21.0535H6.0463L20.8978 3L19 3.00003L16.8399 5.62593C15.9129 4.52785 14.3696 3.88 12.4178 3.88C10.9872 3.88 9.6769 4.27933 8.71438 5.01762C7.74458 5.7615 7.13783 6.84483 7.13783 8.16001C7.13783 9.62596 7.71682 10.609 8.5922 11.2901C9.33272 11.8662 10.273 12.216 11.1907 12.4931L9.55629 14.48H6.77783V14.88C6.77783 15.7359 6.97317 16.5085 7.34146 17.1724ZM12.9925 10.3029L14.9872 7.87804C14.9076 7.53942 14.7326 7.22202 14.4523 6.96462C14.0524 6.59739 13.4023 6.32001 12.4178 6.32001C10.7365 6.32001 9.89783 7.19089 9.89783 8.08001C9.89783 8.44566 10.001 8.72361 10.1746 8.95344C10.3536 9.19062 10.6229 9.3963 10.9824 9.58325C11.5356 9.87094 12.2273 10.0799 12.9925 10.3029ZM12.6178 17.28C11.995 17.28 11.468 17.1681 11.0368 16.9778L9.35811 19.0404C10.2663 19.4872 11.3724 19.72 12.6178 19.72C14.1848 19.72 15.5795 19.3024 16.5917 18.4982C17.613 17.6866 18.2178 16.5009 18.2178 15.04C18.2178 13.5836 17.6387 12.595 16.7669 11.9014C16.444 11.6445 16.0831 11.4298 15.7024 11.2451L13.9851 13.3552C14.1201 13.4122 14.249 13.4724 14.3711 13.5368C14.7281 13.7254 14.9967 13.9365 15.1764 14.1845C15.3515 14.4261 15.4578 14.7241 15.4578 15.12C15.4578 15.7935 15.1774 16.3168 14.6997 16.6823C14.2118 17.0557 13.4945 17.28 12.6178 17.28ZM8.0963 10.1894C7.74594 9.66629 7.53786 9.0077 7.53786 8.16003C7.53786 5.80003 9.69786 4.28003 12.4179 4.28003C13.106 4.28003 13.7329 4.3637 14.292 4.51903C13.7329 4.36369 13.106 4.28 12.4178 4.28C9.69783 4.28 7.53783 5.80001 7.53783 8.16001C7.53783 9.00769 7.74593 9.66629 8.0963 10.1894Z"
        fill="currentColor"
      />
    </IconRoot>
  );
}
