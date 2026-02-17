import type { PropsWithChildren, Ref } from 'react';
import React, { forwardRef } from 'react';

import type { BaseTextFieldProps } from './types';
import { PasswordField } from './fields-by-type/PasswordField';
import { SelectField } from './fields-by-type/SelectField';
import { CommonTextField } from './fields-by-type/CommonTextField';
import { PhoneField } from './fields-by-type/PhoneField';
import { convertCustomPropsToLibProps } from './lib/convertCustomPropsToLibProps';

const BaseTextFieldComponent = forwardRef(
  (props: PropsWithChildren<BaseTextFieldProps>, ref: Ref<HTMLDivElement>): React.ReactElement => {
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
  },
);

export const BaseTextField = BaseTextFieldComponent as React.ForwardRefExoticComponent<
  PropsWithChildren<BaseTextFieldProps> & React.RefAttributes<HTMLDivElement>
>;
