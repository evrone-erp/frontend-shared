import { styled } from '@mui/material';

export const StyledIconContainer = styled('div')(({ theme: { spacing } }) => ({
  display: 'inline-flex',
  marginLeft: spacing(2),
  alignItems: 'center',
}));
