import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { BaseCheckBox, BaseCheckBoxProps } from './BaseCheckBox';

export default {
  title: 'UI/BaseCheckBox',
  component: BaseCheckBox,
  argTypes: { onChange: { action: 'changed' } },
} as ComponentMeta<typeof BaseCheckBox>;

function Template(props: BaseCheckBoxProps): JSX.Element {
  return <BaseCheckBox {...props} />;
}

export const Primary: Story = Template.bind({});
Primary.args = {
  label: 'Hello Checkbox',
};
