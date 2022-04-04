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
  children: "Раскрыть",
};
