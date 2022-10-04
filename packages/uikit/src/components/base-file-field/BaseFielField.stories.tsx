import { ComponentMeta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { BaseFileField, BaseFileFieldProps } from './BaseFileField';

export default {
  title: 'UI/BaseFileField',
  component: BaseFileField,
} as ComponentMeta<typeof BaseFileField>;

function Template(props: Partial<BaseFileFieldProps>): JSX.Element {
  const [files, setFiles] = useState<File[]>([]);
  return <BaseFileField {...props} value={files} onChange={setFiles} />;
}

export const Base: Story = Template.bind({});
Base.args = {
  label: 'Label',
};
