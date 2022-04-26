import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import { BaseButton } from "../base-button";
import { BaseLink } from "../base-link";
import { BasePlate, BasePlateProps } from "./BasePlate";
import { BasePlateHeader } from "./BasePlateHeader";
import { BasePlateFooter } from "./BasePlateFooter";
import { BaseTextButton } from "components/base-text-button";
import { BaseCheckBox } from "components/base-check-box";
import { Box } from "@mui/material";

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

export const WithHeaderAndFooter: Story = Template.bind({});
WithHeaderAndFooter.args = {
  children: (
    <>
      <BasePlateHeader
        title="Account manager"
        subTitle="Middle+"
        link={<BaseLink href="#">How to lvlup</BaseLink>}
      />
      <Box component="p" typography="title-2">Important information. Absolutly.</Box>
      <BasePlateFooter
        primaryAction={<BaseTextButton onClick={() => alert('Krasavchik.')}>Click here!</BaseTextButton>}
        secondaryAction={
          <BaseCheckBox label="Is true?" sx={{ marginRight: 0 }} />
        }
      />
    </>
  ),
};
