import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import type { BaseCheckBoxProps } from './BaseCheckBox';
import { BaseCheckBox } from './BaseCheckBox';

export default {
  title: 'UI/BaseCheckBox',
  component: BaseCheckBox,
  argTypes: { onChange: { action: 'changed' } },
} as Meta<typeof BaseCheckBox>;

function Template(props: BaseCheckBoxProps): JSX.Element {
  return <BaseCheckBox {...props} />;
}

export const Primary: StoryFn = Template.bind({});
Primary.args = {
  label: 'Hello Checkbox',
};
