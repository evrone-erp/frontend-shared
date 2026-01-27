import type { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import type { BaseFileFieldProps } from './BaseFileField';
import { BaseFileField } from './BaseFileField';

export default {
  title: 'UI/BaseFileField',
  component: BaseFileField,
} as Meta<typeof BaseFileField>;

function Template(props: BaseFileFieldProps) {
  const [files, setFiles] = useState<File[]>([]);
  return <BaseFileField {...props} value={files} onChange={setFiles} />;
}

export const Base: StoryFn<BaseFileFieldProps> = Template.bind({});
Base.args = {
  label: 'Label',
};
