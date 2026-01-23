import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { BaseButtonProps } from './BaseButton';
import { BaseButton } from './BaseButton';

export default {
  title: 'UI/BaseButton',
  component: BaseButton,
} as Meta<typeof BaseButton>;

function Template(props: BaseButtonProps) {
  return <BaseButton {...props} />;
}

export const Text: StoryFn<BaseButtonProps> = Template.bind({});
Text.args = {
  children: 'Hello!',
  variant: 'text',
};
export const TextDisabled: StoryFn<BaseButtonProps> = Template.bind({});
TextDisabled.args = {
  children: 'Hello!',
  variant: 'text',
  disabled: true,
};

export const Outlined: StoryFn<BaseButtonProps> = Template.bind({});
Outlined.args = {
  children: 'Hello!',
  variant: 'outlined',
};

export const OutlinedDisabled: StoryFn<BaseButtonProps> = Template.bind({});
OutlinedDisabled.args = {
  children: 'Hello!',
  variant: 'outlined',
  disabled: true,
};

export const WithIcon: StoryFn<BaseButtonProps> = Template.bind({});
WithIcon.args = {
  children: 'Join',
  icon: 'choice',
};

export const RoundButton: StoryFn<BaseButtonProps> = Template.bind({});
RoundButton.args = {
  icon: 'plus',
  isRound: true,
};
