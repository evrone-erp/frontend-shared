import { ComponentMeta, Story } from '@storybook/react';
import { BaseTextButton } from 'components/base-text-button';
import { ThemeProvider } from 'design-system';
import React from 'react';
import { BaseNavHeader, BaseNavHeaderProps } from './BaseNavHeader';

export default {
  title: 'UI/BaseNavHeader',
  component: BaseNavHeader,
} as ComponentMeta<typeof BaseNavHeader>;

const Template = (props: BaseNavHeaderProps): JSX.Element => (
  <ThemeProvider>
    <BaseNavHeader {...props} />
  </ThemeProvider>
);

export const UnauthorizedMode: Story<BaseNavHeaderProps> = Template.bind({});

export const AuthorizedMode: Story<BaseNavHeaderProps> = Template.bind({});
AuthorizedMode.args = {
  logo: <span>Logo</span>,
  mainMenu: [
    <BaseTextButton key="Account" color="element-2" hoverColor="element-2">
      Account
    </BaseTextButton>,
    <BaseTextButton key="Logout" color="good-1">
      Logout
    </BaseTextButton>,
  ],
  subMenu: [
    <BaseTextButton key="Feedback" color="element-2" hoverColor="element-2">
      Feedback
    </BaseTextButton>,
    <BaseTextButton key="bug-report" color="good-1">
      Bug report
    </BaseTextButton>,
  ],
  userName: 'alexander',
};
