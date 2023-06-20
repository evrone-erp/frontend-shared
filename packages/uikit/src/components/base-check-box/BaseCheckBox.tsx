import React from 'react';
import { Sx } from 'design-system';

import { StyledMuiCheckbox, StyledMuiCheckboxProps } from './view/StyledMuiCheckbox';
import { StyledMuiFormControlLabel } from './view/StyledMuiFormControlLabel';

export type BaseCheckBoxProps = Pick<StyledMuiCheckboxProps, 'name' | 'className' | 'onChange' | 'disabled'> & {
  sx?: Sx;
  label?: string;
  value?: boolean;
};

export function BaseCheckBox({ className, name, sx, label = '', onChange, value, disabled }: BaseCheckBoxProps) {
  return (
    <StyledMuiFormControlLabel
      label={label}
      checked={value}
      name={name}
      sx={sx}
      className={className}
      control={<StyledMuiCheckbox size="small" onChange={onChange} />}
      disabled={disabled}
    />
  );
}
