import { HEADER_HEIGHT } from 'constants/layout';

export const styles = {
  content: {
    bgcolor: 'transparent',
    p: 0,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    '& .BasePlate__root + .BasePlate__root': {
      mt: 3,
    },
  },
  paper: {
    bgcolor: 'transparent',
    backgroundImage: 'none',
    boxShadow: 'none',
    overflow: 'hidden',
    width: {
      mob: '100vw',
      tab: '50vw',
    },
    maxWidth: {
      mob: '100vw',
      tab: '50vw',
    },
    p: 0,
    m: 2.5,
  },
  backdrop: {
    bgcolor: 'bg-0',
    top: HEADER_HEIGHT,
  },
  root: {
    top: HEADER_HEIGHT,
  },
};
