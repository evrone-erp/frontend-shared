import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { BaseProgressBar } from "../base-progress-bar";
import { BaseProgress, BaseProgressProps } from "./BaseProgress";

export default {
  title: "UI/BaseProgress",
  component: BaseProgress,
} as ComponentMeta<typeof BaseProgress>;

function Template(props: Partial<BaseProgressProps>) {
  return <BaseProgress title="Title" progressBar={<div />} {...props} />;
}

export const Payout: Story = Template.bind({});
Payout.args = {
  title: "142 000 ₽",
  subTitle: "preliminary calculation",
  startBarText: "0",
  endBarText: "142 000",
  progressBar: (
    <BaseProgressBar
      totalValue={888}
      valueSegments={[
        { value: 483, color: "6" },
        { value: 202, color: "orange-d" },
        { value: 204, color: "blue-d" },
      ]}
      gap={0.5}
    />
  ),
};
export const Benefit: Story = Template.bind({});
Benefit.args = {
  title: "42 000 ₽",
  startBarText: "0",
  endBarText: "70 000",
  progressBar: (
    <BaseProgressBar
      totalValue={1360}
      valueSegments={[{ value: 716, color: "6" }]}
    />
  ),
};
export const ActiveTitle: Story = Template.bind({});
ActiveTitle.args = {
  title: "42 000 ₽",
  startBarText: "0",
  endBarText: "70 000",
  activeTitle: true,
  progressBar: (
    <BaseProgressBar
      totalValue={1360}
      valueSegments={[{ value: 716, color: "6" }]}
    />
  ),
};
