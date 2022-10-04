import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { BaseProgressBar, BaseProgressBarProps } from './BaseProgressBar';

export default {
  title: 'UI/BaseProgressBar',
  component: BaseProgressBar,
} as ComponentMeta<typeof BaseProgressBar>;

function Template(props: Partial<BaseProgressBarProps>) {
  return <BaseProgressBar totalValue={100} valueSegments={[]} {...props} />;
}

export const Main: Story = Template.bind({});
Main.args = {
  totalValue: 1360,
  valueSegments: [{ value: 716, color: 'element-2' }],
};
export const WithGap: Story = Template.bind({});
WithGap.args = {
  totalValue: 888,
  valueSegments: [
    { value: 483, color: 'element-2' },
    { value: 202, color: 'good-1' },
    { value: 204, color: 'good-2' },
  ],
  gap: 0.5,
};
