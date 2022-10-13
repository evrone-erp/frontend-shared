import React from 'react';

import { ComponentMeta, Story } from '@storybook/react';
import { BaseLink, BaseLinkProps } from './BaseLink';

export default {
  title: 'UI/BaseLink',
  component: BaseLink,
} as ComponentMeta<typeof BaseLink>;

function Template(props: Partial<BaseLinkProps>) {
  return <BaseLink href="#" {...props} />;
}

export const Main: Story = Template.bind({});
Main.args = {
  children: 'Обратитесь к Ивану Иванову',
};
