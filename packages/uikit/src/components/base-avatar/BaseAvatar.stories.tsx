import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { BasePlate } from 'components/base-plate';
import type { BaseAvatarProps } from './BaseAvatar';
import { BaseAvatar } from './BaseAvatar';

export default {
  title: 'UI/BaseAvatar',
  component: BaseAvatar,
} as Meta<typeof BaseAvatar>;

function Template(props: BaseAvatarProps) {
  return (
    <BasePlate>
      <BaseAvatar {...props} />
    </BasePlate>
  );
}

export const Main: StoryFn<BaseAvatarProps> = Template.bind({});
Main.args = {};

export const Loader: StoryFn<BaseAvatarProps> = Template.bind({});
Loader.args = {
  isLoading: true,
};
