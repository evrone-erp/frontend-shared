import React, { memo } from 'react';
import Tabs, { TabsProps } from '@mui/material/Tabs';

import { mergeSx } from 'design-system';

const rootSx = {
  '& .MuiTabs-flexContainer': {
    gap: 5,
  },
  '& .MuiTabs-indicator': {
    display: 'none',
  },
};

export const BaseModalTabs = memo(({ children, value, onChange, sx }: TabsProps) => (
  <Tabs className="BaseModalTabs__root" value={value} onChange={onChange} sx={mergeSx(rootSx, sx)}>
    {children}
  </Tabs>
));
