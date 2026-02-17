import type { PropsWithChildren } from 'react';
import React from 'react';
import { PatternFormat } from 'react-number-format';

import type { PhoneFieldProps } from 'components/base-text-field/types';
import { StyledMuiTextField } from 'components/base-text-field/view/StyledMuiTextField';

const PhoneFormatInput = PatternFormat as React.ComponentType<
  PhoneFieldProps & { customInput: typeof StyledMuiTextField; format: string }
>;

export const PhoneField = (props: PropsWithChildren<PhoneFieldProps>): React.ReactElement => (
  <PhoneFormatInput {...props} customInput={StyledMuiTextField} format="+# ### ### ## ##" />
);
