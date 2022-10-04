import { styled, Link, LinkProps } from '@mui/material';

export const StyledLink = styled(Link)<LinkProps>(({ theme: { transitions } }) => ({
  typography: 'text',
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'pointer',
  transitionProperty: 'opacity',
  transitionTimingFunction: transitions.easing.easeInOut,
  transitionDuration: `${transitions.duration.shortest}ms`,

  '&:not(:hover)': {
    opacity: 0.6,
  },
}));
