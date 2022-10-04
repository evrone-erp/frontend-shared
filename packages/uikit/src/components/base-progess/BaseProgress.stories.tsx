import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { BaseProgressBar } from 'components/base-progress-bar';
import { BaseProgress, BaseProgressProps } from './BaseProgress';

export default {
  title: 'UI/BaseProgress',
  component: BaseProgress,
} as ComponentMeta<typeof BaseProgress>;

function Template(props: Partial<BaseProgressProps>) {
  return <BaseProgress title="Title" progressBar={<div />} {...props} />;
}

export const Payout: Story = Template.bind({});
Payout.args = {
  title: '142 000 ₽',
  subtitle: 'preliminary calculation',
  startBarText: '0',
  endBarText: '142 000',
  progressBar: (
    <BaseProgressBar
      totalValue={888}
      valueSegments={[
        { value: 483, color: 'element-2' },
        { value: 202, color: 'good-1' },
        { value: 204, color: 'good-2' },
      ]}
      gap={0.5}
    />
  ),
};
export const Benefit: Story = Template.bind({});
Benefit.args = {
  title: '42 000 ₽',
  startBarText: '0',
  endBarText: '70 000',
  progressBar: <BaseProgressBar totalValue={1360} valueSegments={[{ value: 716, color: 'element-2' }]} />,
};
export const ActiveTitle: Story = Template.bind({});
ActiveTitle.args = {
  title: '42 000 ₽',
  startBarText: '0',
  endBarText: '70 000',
  activeTitle: true,
  progressBar: <BaseProgressBar totalValue={1360} valueSegments={[{ value: 716, color: 'element-2' }]} />,
};
