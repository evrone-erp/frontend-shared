import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { BasePlate, BasePlateHeader } from 'components/base-plate';

import type { BaseGridProps } from './BaseGrid';
import { BaseGrid } from './BaseGrid';

export default {
  title: 'UI/BaseGrid',
  component: BaseGrid,
} as Meta<typeof BaseGrid>;

function Template({ children, ...props }: BaseGridProps): JSX.Element {
  return (
    <BaseGrid container {...props}>
      {children}
    </BaseGrid>
  );
}

export const Main: StoryFn<BaseGridProps> = Template.bind({});
Main.args = {
  children: (
    <>
      <BaseGrid item mob={12} tab={8} lap={6} desk={4}>
        <BasePlate>
          <BasePlateHeader title="Grid Item" />
          <span>mob - 12, tab - 8, lap - 6, desk - 4</span>
        </BasePlate>
      </BaseGrid>
      <BaseGrid item mob={12} tab={8} lap={6} desk={4}>
        <BasePlate>
          <BasePlateHeader title="Grid Item" />
          <span>mob - 12, tab - 8, lap - 6, desk - 4</span>
        </BasePlate>
      </BaseGrid>
      <BaseGrid item mob={12} tab={8} lap={6} desk={4}>
        <BasePlate>
          <BasePlateHeader title="Grid Item" />
          <span>mob - 12, tab - 8, lap - 6, desk - 4</span>
        </BasePlate>
      </BaseGrid>
      <BaseGrid item mob={12} tab={8} lap={6} desk={4}>
        <BasePlate>
          <BasePlateHeader title="Grid Item" />
          <span>mob - 12, tab - 8, lap - 6, desk - 4</span>
        </BasePlate>
      </BaseGrid>
      <BaseGrid item mob={12} tab={8} lap={6} desk={4}>
        <BasePlate>
          <BasePlateHeader title="Grid Item" />
          <span>mob - 12, tab - 8, lap - 6, desk - 4</span>
        </BasePlate>
      </BaseGrid>
    </>
  ),
};
