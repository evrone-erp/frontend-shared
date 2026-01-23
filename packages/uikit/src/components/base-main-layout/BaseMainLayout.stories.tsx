import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { BasePlate, BasePlateHeader } from 'components/base-plate';
import { BaseGrid } from 'components/base-grid/BaseGrid';
import { BaseNavHeader } from 'components/base-nav-header';
import type { BaseMainLayoutProps } from './BaseMainLayout';
import { BaseMainLayout } from './BaseMainLayout';

export default {
  title: 'UI/BaseMainLayout',
  component: BaseMainLayout,
} as Meta<typeof BaseMainLayout>;

function Template({ children, ...props }: BaseMainLayoutProps) {
  return <BaseMainLayout {...props}>{children}</BaseMainLayout>;
}

export const Main: StoryFn<BaseMainLayoutProps> = Template.bind({});
Main.args = {
  header: <BaseNavHeader position="sticky" />,
  children: (
    <BaseGrid container>
      <BaseGrid item tab={6}>
        <BasePlate>
          <BasePlateHeader title="Plate title" />
          <span>some content</span>
        </BasePlate>
      </BaseGrid>
      <BaseGrid item tab={6}>
        <BasePlate>
          <BasePlateHeader title="Plate title" />
          <span>some content</span>
        </BasePlate>
      </BaseGrid>
      <BaseGrid item tab={6}>
        <BasePlate>
          <BasePlateHeader title="Plate title" />
          <span>some content</span>
        </BasePlate>
      </BaseGrid>
      <BaseGrid item tab={6}>
        <BasePlate>
          <BasePlateHeader title="Plate title" />
          <span>some content</span>
        </BasePlate>
      </BaseGrid>
    </BaseGrid>
  ),
};
