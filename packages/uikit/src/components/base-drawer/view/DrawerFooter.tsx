import { Box } from '@mui/material';

import { bindPropsSxMerge } from 'design-system';

export const DrawerFooter = bindPropsSxMerge(Box, {
  className: 'BaseDrawer-footer',
  sx: { p: 5 },
});
