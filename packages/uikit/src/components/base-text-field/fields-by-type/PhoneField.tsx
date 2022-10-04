import { TextFieldProps } from '@mui/material';
import React from 'react';
import NumberFormat from 'react-number-format';
import { PhoneFieldProps } from 'components/base-text-field/types';
import { StyledMuiTextField } from 'components/base-text-field/view/StyledMuiTextField';

export const PhoneField: React.FC<PhoneFieldProps> = (props) => (
  <NumberFormat<TextFieldProps> {...props} customInput={StyledMuiTextField} format="+# ### ### ## ##" />
);
