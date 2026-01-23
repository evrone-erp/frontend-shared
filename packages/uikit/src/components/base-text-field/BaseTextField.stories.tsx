import type { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { BaseTextField } from './BaseTextField';
import type { BaseTextFieldProps } from './types';

export default {
  title: 'UI/BaseTextField',
  component: BaseTextField,
} as Meta<typeof BaseTextField>;

function Template({ onChange, ...props }: BaseTextFieldProps): JSX.Element {
  const [value, setValue] = useState<string>('');
  return (
    <BaseTextField
      {...props}
      value={value}
      onChange={(v) => {
        onChange?.(v);
        setValue(v);
      }}
    />
  );
}

type TextFieldStory = StoryFn<BaseTextFieldProps>;

export const Base: TextFieldStory = Template.bind({});
Base.args = {
  label: 'Label',
  type: 'text',
};

export const Multiline: TextFieldStory = Template.bind({});
Multiline.args = {
  label: 'Multiline',
  multiline: true,
};

export const WithError: TextFieldStory = Template.bind({});
WithError.args = {
  label: 'Label',
  error: 'Error text',
};

export const Phone: TextFieldStory = Template.bind({});
Phone.args = {
  label: 'Phone number',
  type: 'tel',
};

export const FullWidthPassword: TextFieldStory = Template.bind({});
FullWidthPassword.args = {
  label: 'Password',
  type: 'password',
  fullWidth: true,
};

export const Select: TextFieldStory = Template.bind({});
Select.args = {
  label: 'Label',
  options: [
    { label: 'Value 1', value: '1' },
    { label: 'Value 2', value: '2' },
  ],
  type: 'select',
  sx: {
    minWidth: 200,
  },
};
