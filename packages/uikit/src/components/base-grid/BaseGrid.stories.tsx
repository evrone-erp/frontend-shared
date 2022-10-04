import { ComponentMeta, Story } from '@storybook/react';
import React, { PropsWithChildren } from 'react';
import { BasePlate, BasePlateHeader } from 'components/base-plate';
import { BaseGrid, BaseGridProps } from './BaseGrid';

export default {
  title: 'UI/BaseGrid',
  component: BaseGrid,
} as ComponentMeta<typeof BaseGrid>;

function Template({ children, ...props }: PropsWithChildren<BaseGridProps>): JSX.Element {
  return (
    <BaseGrid container {...props}>
      {children}
    </BaseGrid>
  );
}

export const Main: Story<PropsWithChildren<BaseGridProps>> = Template.bind({});
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
