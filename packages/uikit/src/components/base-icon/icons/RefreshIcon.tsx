import React from 'react';

import type { ConcreteIconProps } from 'components/base-icon/types/concrete-icon-props';
import { IconRoot } from 'components/base-icon/view/IconRoot';

export function RefreshIcon(props: ConcreteIconProps) {
  return (
    <IconRoot {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 20c-2.234 0-4.125-.773-5.676-2.324C4.774 16.125 4 14.234 4 12s.773-4.125 2.324-5.676C7.875 4.774 9.766 4 12 4c1.148 0 2.25.238 3.3.71A7.641 7.641 0 0 1 18 6.75V4h2v7h-7V9h4.2a5.798 5.798 0 0 0-2.188-2.2A5.913 5.913 0 0 0 12 6c-1.668 0-3.082.582-4.25 1.75C6.582 8.918 6 10.332 6 12c0 1.668.582 3.082 1.75 4.25C8.918 17.418 10.332 18 12 18a5.861 5.861 0 0 0 3.477-1.102A5.787 5.787 0 0 0 17.648 14h2.102a7.89 7.89 0 0 1-2.852 4.324C15.465 19.441 13.832 20 12 20Zm0 0" />
    </IconRoot>
  );
}
