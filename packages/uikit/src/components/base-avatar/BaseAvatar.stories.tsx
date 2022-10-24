import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { BasePlate } from 'components/base-plate';
import { BaseAvatar, BaseAvatarProps } from './BaseAvatar';

export default {
  title: 'UI/BaseAvatar',
  component: BaseAvatar,
} as ComponentMeta<typeof BaseAvatar>;

function Template(props: Partial<BaseAvatarProps>) {
  return (
    <BasePlate>
      <BaseAvatar {...props} />
    </BasePlate>
  );
}

export const Main: Story = Template.bind({});
Main.args = {};

export const Loader: Story = Template.bind({});
Loader.args = {
  isLoading: true,
};
