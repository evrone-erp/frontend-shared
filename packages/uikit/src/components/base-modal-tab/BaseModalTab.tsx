import React, { memo } from 'react';
import type { TabProps } from '@mui/material/Tab';
import Tab from '@mui/material/Tab';

import { mergeSx } from 'design-system';

const rootSx = {
  textTransform: 'none',
  typography: 'title',
  color: 'element-1',
  p: 0,
  minWidth: 0,
  '&.Mui-selected': {
    color: 'element-2',
  },
};

export const BaseModalTab = memo(({ sx, ...tabProps }: TabProps) => (
  <Tab className="BaseModalTab__root" sx={mergeSx(rootSx, sx)} {...tabProps} />
));
