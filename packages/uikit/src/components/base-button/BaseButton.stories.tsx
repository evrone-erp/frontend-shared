import React, { PropsWithChildren } from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { BaseButton, BaseButtonProps } from "./BaseButton";

export default {
  title: "UI/BaseButton",
  component: BaseButton,
} as ComponentMeta<typeof BaseButton>;

function Template(props: PropsWithChildren<BaseButtonProps>): JSX.Element {
  return <BaseButton {...props} />;
}

export const Primary: Story = Template.bind({});
Primary.args = {
  children: "Hello!",
  variant: "primary",
};
export const PrimaryDisabled: Story = Template.bind({});
PrimaryDisabled.args = {
  children: "Hello!",
  variant: "primary",
  disabled: true,
};

export const Secondary: Story = Template.bind({});
Secondary.args = {
  children: "Hello!",
  variant: "secondary",
};

export const SecondaryDisabled: Story = Template.bind({});
SecondaryDisabled.args = {
  children: "Hello!",
  variant: "secondary",
  disabled: true,
};

export const WithIcon: Story = Template.bind({});
WithIcon.args = {
  children: "Join",
  icon: "choice",
};

export const RoundButton: Story = Template.bind({});
RoundButton.args = {
  icon: "plus",
  isRound: true,
};
