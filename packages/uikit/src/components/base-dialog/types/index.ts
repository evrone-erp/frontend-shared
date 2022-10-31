import { ReactNode } from 'react';
import { DialogProps } from '@mui/material';

export enum BaseDialogPosition {
  left = 'left',
  right = 'right',
  center = 'center',
}
export interface BaseDialogProps extends DialogProps {
  children: ReactNode;
  header?: ReactNode;
  position?: BaseDialogPosition;
}
