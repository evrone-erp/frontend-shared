import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { repeat } from 'lodash';
import { BaseLink } from 'components/base-link/BaseLink';
import { BaseHelp, BaseHelpProps } from './BaseHelp';

export default {
  title: 'UI/BaseHelp',
  component: BaseHelp,
} as ComponentMeta<typeof BaseHelp>;

function Template(props: Partial<BaseHelpProps>) {
  return <BaseHelp {...props} />;
}

export const Main: Story = Template.bind({});
Main.args = {
  title: 'Benefits formula',
  withClose: true,
  text: 'Start sum + 10 000 ₽ × Years at Evrone',
};

export const WithLink: Story = Template.bind({});
WithLink.args = {
  title: (
    <>
      Есть вопросы?
      <BaseLink sx={{ ml: 2.5 }} href="#">
        Обратитесь к Ивану Иванову
      </BaseLink>
    </>
  ),
};

export const LongText: Story = Template.bind({});
LongText.args = {
  text: repeat('Start sum + 10 000 ₽ × Years at Evrone ', 20),
};
