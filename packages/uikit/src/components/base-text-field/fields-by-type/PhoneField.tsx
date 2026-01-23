import type { TextFieldProps } from '@mui/material';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { PatternFormat } from 'react-number-format';
import type { PhoneFieldProps } from 'components/base-text-field/types';
import { StyledMuiTextField } from 'components/base-text-field/view/StyledMuiTextField';

export const PhoneField = (props: PropsWithChildren<PhoneFieldProps>) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <PatternFormat<TextFieldProps> {...props} customInput={StyledMuiTextField} format="+# ### ### ## ##" />
);
