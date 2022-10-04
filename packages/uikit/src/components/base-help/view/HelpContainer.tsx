import { Box } from '@mui/material';
import { bindPropsSxMerge } from 'design-system';

export const HelpContainer = bindPropsSxMerge(Box, {
  sx: {
    borderRadius: 5,
    padding: 5,
    position: 'relative',
    backgroundColor: '3',
    display: 'grid',
    gap: 2,
  },
});
