import React, { forwardRef, Ref, ReactElement } from 'react';
import { TransitionProps as MuiTransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';

type TransitionProps = MuiTransitionProps & { children: ReactElement };

const StyledSlide = styled(Slide)<TransitionProps>(() => ({
  alignItems: 'flex-end',
}));

export const Transition = forwardRef((props: TransitionProps, ref: Ref<unknown>) => (
  <StyledSlide direction="up" className="BaseDialog__transition" ref={ref} {...props} />
));
