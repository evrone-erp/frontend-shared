import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { repeat } from 'lodash';
import { BaseLink } from 'components/base-link/BaseLink';
import type { BaseHelpProps } from './BaseHelp';
import { BaseHelp } from './BaseHelp';

export default {
  title: 'UI/BaseHelp',
  component: BaseHelp,
} as Meta<typeof BaseHelp>;

function Template(props: Partial<BaseHelpProps>) {
  return <BaseHelp {...props} />;
}

export const Main: StoryFn<BaseHelpProps> = Template.bind({});
Main.args = {
  title: 'Benefits formula',
  withClose: true,
  text: 'Start sum + 10 000 ₽ × Years at Evrone',
};

export const WithLink: StoryFn<BaseHelpProps> = Template.bind({});
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

export const LongText: StoryFn<BaseHelpProps> = Template.bind({});
LongText.args = {
  text: repeat('Start sum + 10 000 ₽ × Years at Evrone ', 20),
};
