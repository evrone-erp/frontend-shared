import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import type { BaseLinkProps } from './BaseLink';
import { BaseLink } from './BaseLink';

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
