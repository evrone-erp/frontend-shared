import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BaseCheckBox, BaseCheckBoxProps } from './BaseCheckBox';

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
