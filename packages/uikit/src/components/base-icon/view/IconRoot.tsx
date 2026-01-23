import { styled } from '@mui/material';
import type { ConcreteIconProps } from 'components/base-icon/types/concrete-icon-props';

export const IconRoot = styled('svg')<ConcreteIconProps>(({ color, size, theme }) => ({
  display: 'inline-block',
  verticalAlign: 'middle',
  color: color ? theme.palette[color] : 'currentColor',
  height: size ?? '1.125em',
  width: size ?? '1.125em',
}));
