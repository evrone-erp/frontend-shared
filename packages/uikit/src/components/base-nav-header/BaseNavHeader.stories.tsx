import { ComponentMeta, Story } from "@storybook/react";
import { BaseTextButton } from "components/base-text-button";
import { ThemeProvider } from "design-system";
import React from "react";
import { BaseNavHeader, BaseNavHeaderProps } from "./BaseNavHeader";

export default {
  title: "UI/BaseNavHeader",
  component: BaseNavHeader,
} as ComponentMeta<typeof BaseNavHeader>;

const Template = (props: BaseNavHeaderProps): JSX.Element => (
  <ThemeProvider>
    <BaseNavHeader {...props} />
  </ThemeProvider>
)

export const UnauthorizedMode: Story<BaseNavHeaderProps> = Template.bind({});

export const AuthorizedMode: Story<BaseNavHeaderProps> = Template.bind({});
AuthorizedMode.args = {
  logo: <span>Logo</span>,
  mainMenu: [
    <BaseTextButton key="Account" color="5" hoverColor="6">
      Account
    </BaseTextButton>,
    <BaseTextButton key="Logout" color="orange-l">
      Logout
    </BaseTextButton>,
  ],
  subMenu: [
    <BaseTextButton key="Feedback" color="5" hoverColor="6">
      Feedback
    </BaseTextButton>,
    <BaseTextButton key="bug-report" color="orange-l">
      Bug report
    </BaseTextButton>,
  ],
  userName: "alexander",
};
