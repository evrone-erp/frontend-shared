import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { BaseProgressBar, BaseProgressBarProps } from "./BaseProgressBar";

export default {
  title: "UI/BaseProgressBar",
  component: BaseProgressBar,
} as ComponentMeta<typeof BaseProgressBar>;

function Template(props: Partial<BaseProgressBarProps>) {
  return <BaseProgressBar totalValue={100} valueSegments={[]} {...props} />;
}

export const Main: Story = Template.bind({});
Main.args = {
  totalValue: 1360,
  valueSegments: [{ value: 716, color: "6" }],
};
export const WithGap: Story = Template.bind({});
WithGap.args = {
  totalValue: 888,
  valueSegments: [
    { value: 483, color: "6" },
    { value: 202, color: "orange-d" },
    { value: 204, color: "blue-d" },
  ],
  gap: 0.5,
};
