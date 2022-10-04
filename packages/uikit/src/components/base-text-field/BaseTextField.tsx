import React from 'react';

import { BaseTextFieldProps } from './types';
import { PasswordField } from './fields-by-type/PasswordField';
import { SelectField } from './fields-by-type/SelectField';
import { CommonTextField } from './fields-by-type/CommonTextField';
import { PhoneField } from './fields-by-type/PhoneField';
import { convertCustomPropsToLibProps } from './lib/convertCustomPropsToLibProps';

export const BaseTextField: React.FC<BaseTextFieldProps> = (props: BaseTextFieldProps) => {
  const { type } = props;

  if (type === 'select') {
    return <SelectField {...convertCustomPropsToLibProps(props)} />;
  }

  if (type === 'tel') {
    return <PhoneField {...convertCustomPropsToLibProps(props)} />;
  }

  if (type === 'password') {
    return <PasswordField {...convertCustomPropsToLibProps(props)} />;
  }

  return <CommonTextField {...convertCustomPropsToLibProps(props)} />;
};
