import React from 'react';

import { IconRoot } from 'components/base-icon/view/IconRoot';
import type { ConcreteIconProps } from 'components/base-icon/types/concrete-icon-props';

export function DeleteIcon(props: ConcreteIconProps) {
  return (
    <IconRoot {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M9.75 6C9.75 5.86193 9.86193 5.75 10 5.75H12H14C14.1381 5.75 14.25 5.86193 14.25 6V7.25H12H9.75V6.5V6ZM8.25 7.25V6.5V6C8.25 5.0335 9.0335 4.25 10 4.25H12H14C14.9665 4.25 15.75 5.0335 15.75 6V7.25H16H18C18.4142 7.25 18.75 7.58579 18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H17.7323C17.744 8.83165 17.75 8.91512 17.75 9V18C17.75 18.9665 16.9665 19.75 16 19.75H8C7.0335 19.75 6.25 18.9665 6.25 18V13.5V9C6.25 8.91512 6.25604 8.83165 6.26772 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H8H8.25ZM9 8.75H8C7.86193 8.75 7.75 8.86193 7.75 9V13.5V18C7.75 18.1381 7.86193 18.25 8 18.25H16C16.1381 18.25 16.25 18.1381 16.25 18V9C16.25 8.86193 16.1381 8.75 16 8.75H15H12H9Z"
      />
    </IconRoot>
  );
}
