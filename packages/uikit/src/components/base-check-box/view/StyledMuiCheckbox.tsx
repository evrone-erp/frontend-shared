import type { CheckboxProps } from '@mui/material';
import { styled, Checkbox } from '@mui/material';

export type StyledMuiCheckboxProps = CheckboxProps;

export const StyledMuiCheckbox = styled(Checkbox)(() => ({
  padding: 10,
  marginTop: -10,
  marginBottom: -10,
  '& .MuiSvgIcon-root': {
    width: '0.875em',
    height: '0.875em',
  },
}));
