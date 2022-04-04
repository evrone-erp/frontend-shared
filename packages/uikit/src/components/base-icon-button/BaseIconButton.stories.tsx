import React from "react";
import { Box } from "@mui/material";
import { ComponentMeta, Story } from "@storybook/react";
import { BaseIconButton, BaseIconButtonProps } from "./BaseIconButton";

export default {
  title: "UI/BaseIconButton",
  component: BaseIconButton,
  decorators: [
    (StoryComponent) => (
      <Box border="1px solid lightskyblue">
        <StoryComponent />
      </Box>
    ),
  ],
} as ComponentMeta<typeof BaseIconButton>;

function Template(props: Partial<BaseIconButtonProps>) {
  return <BaseIconButton {...props} />;
}

export const Primary: Story = Template.bind({});
Primary.args = {
  type: "delete",
  size: 60,
  color: "orange-l",
};

export const WithVisibleIndent: Story = Template.bind({});
WithVisibleIndent.args = {
  type: "delete",
  size: 60,
  color: "orange-l",
  visibleIndent: 20,
};

export const CustomContent: Story = Template.bind({});
CustomContent.args = {
  children: (
    <Box
      sx={{
        typography: "caption",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        backgroundColor: "blue-d",
        color: "core",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      3
    </Box>
  ),
  size: 24,
  visibleIndent: 5,
};
