import React from 'react';

import { ConcreteIconProps } from 'components/base-icon/types/concrete-icon-props';
import { IconRoot } from 'components/base-icon/view/IconRoot';

export function VacationIcon(props: ConcreteIconProps) {
  return (
    <IconRoot {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="1" y1="21.2" x2="22" y2="21.2" stroke="none" strokeOpacity="0.64" strokeWidth="1.6" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.0898 14.6419L3.92941 14.4336L2.70279 15.4471L8.70349 17.7132L21.3786 7.23992C21.8302 6.86674 21.8938 6.1981 21.5206 5.74647C21.1474 5.29485 20.4788 5.23125 20.0272 5.60443L16.5517 8.47615L4.39538 8.54427L3.3732 9.38889L12.2586 12.0236L9.0898 14.6419Z"
        fill="none"
        fillOpacity="0.64"
      />
      <path
        d="M19.9635 5.52734L16.5155 8.37635L4.39482 8.44427L4.35917 8.44447L4.33169 8.46718L3.3095 9.3118L3.16477 9.43139L3.34477 9.48476L12.0501 12.0661L9.0556 14.5404L3.93345 14.3337L3.89521 14.3321L3.86572 14.3565L2.6391 15.37L2.50626 15.4798L2.66747 15.5407L8.66816 17.8068L8.72245 17.8273L8.76719 17.7903L21.4422 7.31701C21.9364 6.90865 22.006 6.17698 21.5977 5.68278C21.1893 5.18857 20.4577 5.11898 19.9635 5.52734Z"
        stroke="none"
        strokeOpacity="0.64"
        strokeWidth="0.2"
      />
    </IconRoot>
  );
}
