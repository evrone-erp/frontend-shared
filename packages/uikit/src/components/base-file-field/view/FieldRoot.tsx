import { Box } from '@mui/material';

import { bindPropsSxMerge } from 'design-system';

export const FieldRoot = bindPropsSxMerge(Box, {
  sx: { position: 'relative' },
});
