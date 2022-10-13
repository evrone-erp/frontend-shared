import { styled, SwipeableDrawer } from '@mui/material';

export const StyledMuiDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    background: theme.palette['bg-0'],
    height: '85vh',
    borderTopLeftRadius: theme.spacing(5),
    borderTopRightRadius: theme.spacing(5),
    left: theme.spacing(5),
    right: theme.spacing(5),
    [theme.breakpoints.down('tab')]: {
      left: theme.spacing(2.5),
      right: theme.spacing(2.5),
    },
  },
}));
