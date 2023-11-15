import React from 'react';

import { Meta, StoryFn } from '@storybook/react';
import { BaseLink, BaseLinkProps } from './BaseLink';

export default {
  title: 'UI/BaseLink',
  component: BaseLink,
} as Meta<typeof BaseLink>;

function Template(props: BaseLinkProps) {
  return <BaseLink {...props} href="#" />;
}

export const Main: StoryFn<BaseLinkProps> = Template.bind({});
Main.args = {
  children: 'Обратитесь к Ивану Иванову',
};
