import { Button, ButtonProps, styled } from '@mui/material';

export type StyledButtonProps = ButtonProps & { isRound?: boolean };

export const StyledButton = styled(Button, {
  shouldForwardProp: (p) => p !== 'isRound',
})<StyledButtonProps>(
  ({ theme, variant }) => {
    if (variant === 'contained') {
      return {
        backgroundColor: theme.palette['element-0'],
        '&:hover': {
          backgroundColor: theme.palette['element-1'],
        },
        '&.Mui-disabled': {
          backgroundColor: theme.palette['bg-1'],
        },
      };
    }
    if (variant === 'outlined') {
      return {
        borderWidth: 1,
        borderColor: theme.palette['element-1'],
        '&:hover': {
          borderColor: theme.palette['element-1'],
          backgroundColor: theme.palette['element-0'],
        },
      };
    }
    return {};
  },
  ({ theme, isRound }) => ({
    padding: isRound ? 12 : [8, 20],
    minWidth: isRound ? '0' : '64px',
    borderRadius: isRound ? '100%' : 12,
    textTransform: 'none',
    color: theme.palette['element-2'],
    '&.Mui-disabled': {
      color: theme.palette['element-1'],
    },
    ...theme.typography.text,
  }),
  ({ isRound }) => ({
    '& .BaseIcon': {
      marginLeft: isRound ? 0 : 10,
      marginRight: isRound ? 0 : -8,
    },
  }),
);
