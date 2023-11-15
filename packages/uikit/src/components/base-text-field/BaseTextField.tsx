import React, { forwardRef, PropsWithChildren, Ref } from 'react';

import { BaseTextFieldProps } from './types';
import { PasswordField } from './fields-by-type/PasswordField';
import { SelectField } from './fields-by-type/SelectField';
import { CommonTextField } from './fields-by-type/CommonTextField';
import { PhoneField } from './fields-by-type/PhoneField';
import { convertCustomPropsToLibProps } from './lib/convertCustomPropsToLibProps';

export const BaseTextField = forwardRef((props: PropsWithChildren<BaseTextFieldProps>, ref: Ref<HTMLDivElement>) => {
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

  return <CommonTextField {...convertCustomPropsToLibProps(props)} ref={ref} />;
});
