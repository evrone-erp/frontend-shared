import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import type { BaseProgressBarProps } from './BaseProgressBar';
import { BaseProgressBar } from './BaseProgressBar';

export default {
  title: 'UI/BaseProgressBar',
  component: BaseProgressBar,
} as Meta<typeof BaseProgressBar>;

function Template(props: BaseProgressBarProps) {
  return <BaseProgressBar {...props} />;
}

export const Main: StoryFn<BaseProgressBarProps> = Template.bind({});
Main.args = {
  totalValue: 1360,
  valueSegments: [{ name: 'segment', value: 716, color: 'element-2' }],
};
export const WithGap: StoryFn<BaseProgressBarProps> = Template.bind({});
WithGap.args = {
  totalValue: 888,
  valueSegments: [
    { name: 'segment', value: 483, color: 'element-2' },
    { name: 'segment', value: 202, color: 'good-1' },
    { name: 'segment', value: 204, color: 'good-2' },
  ],
  gap: 0.5,
};
