import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BaseProgressBar } from 'components/base-progress-bar';
import { BaseProgress, BaseProgressProps } from './BaseProgress';

export default {
  title: 'UI/BaseProgress',
  component: BaseProgress,
} as Meta<typeof BaseProgress>;

function Template(props: BaseProgressProps) {
  return <BaseProgress {...props} />;
}

export const Payout: StoryFn<BaseProgressProps> = Template.bind({});
Payout.args = {
  title: '142 000 ₽',
  subtitle: 'preliminary calculation',
  startBarText: '0',
  endBarText: '142 000',
  progressBar: (
    <BaseProgressBar
      totalValue={888}
      valueSegments={[
        { value: 483, color: 'element-2', name: 'name' },
        { value: 202, color: 'good-1', name: 'name' },
        { value: 204, color: 'good-2', name: 'name' },
      ]}
      gap={0.5}
    />
  ),
};
export const Benefit: StoryFn<BaseProgressProps> = Template.bind({});
Benefit.args = {
  title: '42 000 ₽',
  startBarText: '0',
  endBarText: '70 000',
  progressBar: <BaseProgressBar totalValue={1360} valueSegments={[{ value: 716, color: 'element-2', name: 'name' }]} />,
};
export const ActiveTitle: StoryFn<BaseProgressProps> = Template.bind({});
ActiveTitle.args = {
  title: '42 000 ₽',
  startBarText: '0',
  endBarText: '70 000',
  activeTitle: true,
  progressBar: <BaseProgressBar totalValue={1360} valueSegments={[{ value: 716, color: 'element-2', name: 'name' }]} />,
};
