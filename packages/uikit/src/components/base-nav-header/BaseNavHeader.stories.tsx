import { ComponentMeta, Story } from "@storybook/react";
import { BaseTextButton } from "components/base-text-button";
import { ThemeTypeProvider } from "design-system";
import React from "react";
import { BaseNavHeader, BaseNavHeaderProps } from "./BaseNavHeader";
import { CookiesProvider } from "@evrone-erp/react-std";

export default {
  title: "UI/BaseNavHeader",
  component: BaseNavHeader,
} as ComponentMeta<typeof BaseNavHeader>;

function Template(props: BaseNavHeaderProps): JSX.Element {
  return (
    <CookiesProvider serverCookies={undefined}>
      <ThemeTypeProvider>
        <BaseNavHeader {...props} />
      </ThemeTypeProvider>
    </CookiesProvider>
  );
}

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
