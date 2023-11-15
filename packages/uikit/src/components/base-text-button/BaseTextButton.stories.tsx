import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BaseTextButton, BaseTextButtonProps } from './BaseTextButton';

export default {
  title: 'UI/BaseTextButton',
  component: BaseTextButton,
} as Meta<typeof BaseTextButton>;

function Template(props: BaseTextButtonProps) {
  return <BaseTextButton {...props} />;
}

export const Main: StoryFn<BaseTextButtonProps> = Template.bind({});
Main.args = {
  children: 'Кликнуть',
};

export const Disabled: StoryFn<BaseTextButtonProps> = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Не кликнуть =(',
};

export const Loading: StoryFn<BaseTextButtonProps> = Template.bind({});
Loading.args = {
  children: 'Submit',
  isLoading: true,
};

export const WithIcon: StoryFn<BaseTextButtonProps> = Template.bind({});
WithIcon.args = {
  children: 'Locked',
  iconType: 'lock',
};
