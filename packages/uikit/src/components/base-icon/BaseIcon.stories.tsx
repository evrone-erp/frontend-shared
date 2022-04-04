import React, { PropsWithChildren } from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { BaseIcon, BaseIconProps } from "./BaseIcon";

export default {
  title: "UI/BaseIcon",
  component: BaseIcon,
} as ComponentMeta<typeof BaseIcon>;

function Template(props: PropsWithChildren<Partial<BaseIconProps>>) {
  return <BaseIcon type="plus" {...props} />;
}

export const InText: Story = Template.bind({});
InText.args = {
  type: "plus",
};
InText.decorators = [
  (StoryComponent) => (
    <div style={{ color: "lightskyblue", fontSize: "24px" }}>
      Hello icon <StoryComponent />
    </div>
  ),
];

export const Plus: Story = Template.bind({});
Plus.args = {
  type: "plus",
  size: 60,
  color: "6",
};

export const Choice: Story = Template.bind({});
Choice.args = {
  type: "choice",
  size: 60,
  color: "6",
};
export const Date: Story = Template.bind({});
Date.args = {
  type: "date",
  size: 60,
  color: "6",
};
