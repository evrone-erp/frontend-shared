import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { BaseTextButton, BaseTextButtonProps } from "./BaseTextButton";

export default {
  title: "UI/BaseTextButton",
  component: BaseTextButton,
} as ComponentMeta<typeof BaseTextButton>;

function Template(props: Partial<BaseTextButtonProps>) {
  return <BaseTextButton {...props} />;
}

export const Main: Story = Template.bind({});
Main.args = {
  children: "Кликнуть",
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  disabled: true,
  children: "Не кликнуть =(",
};

export const Loading: Story = Template.bind({});
Loading.args = {
  children: "Submit",
  isLoading: true,
};

export const WithIcon: Story = Template.bind({});
WithIcon.args = {
  children: "Submit",
  iconType: 'lock',
};
