import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { BaseButton } from "../base-button";
import { BaseLink } from "../base-link";
import { BasePlate, BasePlateProps } from "./BasePlate";
import { BasePlateHeader } from "./BasePlateHeader";

export default {
  title: "UI/BasePlate",
  component: BasePlate,
  subcomponents: { BasePlateHeader },
  parameters: {
    controls: {
      exclude: ["className", "sx"],
    },
  },
} as ComponentMeta<typeof BasePlate>;

function Template(props: Partial<BasePlateProps>) {
  return <BasePlate {...props} />;
}

export const Main: Story = Template.bind({});
Main.args = {
  sx: {
    with: "100px",
    height: "100px",
  },
};

export const Pressable: Story = Template.bind({});
Pressable.args = {
  pressable: true,
  sx: {
    with: "100px",
    height: "100px",
  },
};

export const WithHeader1: Story = Template.bind({});
WithHeader1.args = {
  children: (
    <BasePlateHeader
      title="Payout"
      subTitle="2022 August"
      inlineSubtitle
      action={<BaseButton icon="plus">Add expense</BaseButton>}
    />
  ),
};

export const WithHeader2: Story = Template.bind({});
WithHeader2.args = {
  children: (
    <BasePlateHeader
      title="Account manager"
      subTitle="Middle+"
      link={<BaseLink href="#">How to lvlup</BaseLink>}
    />
  ),
};
