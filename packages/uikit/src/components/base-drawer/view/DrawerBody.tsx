import { Box } from '@mui/material';

import { bindPropsSxMerge } from 'design-system';

export const DrawerBody = bindPropsSxMerge(Box, {
  className: 'BaseDrawer-body',
  sx: {
    flexGrow: 1,
    position: 'relative',
    overflow: 'auto',
    p: 5,
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    scrollbarWidth: 'none',
  },
});
