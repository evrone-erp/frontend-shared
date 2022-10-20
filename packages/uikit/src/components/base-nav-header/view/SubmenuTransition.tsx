import React, { forwardRef, Ref, ReactElement } from 'react';
import { TransitionProps as MuiTransitionProps } from '@mui/material/transitions';
import Fade from '@mui/material/Fade';

type SubmenuTransitionProps = MuiTransitionProps & { children: ReactElement };

export const SubmenuTransition = forwardRef((props: SubmenuTransitionProps, ref: Ref<unknown>) => (
  <Fade className="BaseNavHeader__submenu-transition" ref={ref} {...props} />
));
