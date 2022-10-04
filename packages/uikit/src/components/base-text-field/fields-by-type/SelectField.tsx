import React from 'react';
import { SelectFieldProps } from 'components/base-text-field/types';
import { StyledMuiTextField } from 'components/base-text-field/view/StyledMuiTextField';
import { StyledMuiMenuItem } from 'components/base-text-field/view/StyledMuiMenuItem';

export const SelectField: React.FC<SelectFieldProps> = ({ options, ...commonProps }) => (
  <StyledMuiTextField {...commonProps} select>
    {options?.map((option: SelectFieldProps['options'][0]) =>
      typeof option === 'object' ? (
        <StyledMuiMenuItem key={option.value} value={option.value}>
          {option.label}
        </StyledMuiMenuItem>
      ) : (
        <StyledMuiMenuItem key={option} value={option}>
          {option}
        </StyledMuiMenuItem>
      ),
    )}
  </StyledMuiTextField>
);
