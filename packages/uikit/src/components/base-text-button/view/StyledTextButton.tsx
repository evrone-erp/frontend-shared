import { ButtonBase, ButtonBaseProps, styled } from '@mui/material';
import { ColorName } from 'design-system';

export type StyledTextButtonProps = Omit<ButtonBaseProps, 'css'> & {
  css?: ButtonBaseProps['css'];
  color?: ColorName;
  hoverColor?: ColorName;
};

export const StyledTextButton = styled(ButtonBase, {
  shouldForwardProp: (p) => p !== 'hoverColor',
})<StyledTextButtonProps>(({ theme, color = theme.palette['element-2'], hoverColor }) => ({
  color,
  padding: 0,
  borderRadius: 1,
  ...theme.typography.text,
  '& .MuiTouchRipple-root': {
    left: -5,
    right: -5,
  },
  '&.Mui-disabled': {
    color: theme.palette['element-1'],
    cursor: 'not-allowed',
  },
  '&:hover': {
    color: hoverColor ?? color,
  },
}));
