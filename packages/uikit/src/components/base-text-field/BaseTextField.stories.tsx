import { ComponentMeta, Story } from "@storybook/react";
import React, { useState } from "react";
import { BaseTextField, BaseTextFieldProps } from "./BaseTextField";

export default {
  title: "UI/BaseTextField",
  component: BaseTextField,
} as ComponentMeta<typeof BaseTextField>;

function Template({ onChange, ...props }: BaseTextFieldProps): JSX.Element {
  const [value, setValue] = useState<string>("");
  return (
    <BaseTextField
      {...props}
      value={value}
      onChange={(v) => {
        onChange?.(v);
        setValue(v);
      }}
    />
  );
}

export const Base: Story = Template.bind({});
Base.args = {
  label: "Label",
};

export const Multiline: Story = Template.bind({});
Multiline.args = {
  label: "Multiline",
  multiline: true,
};

export const WithError: Story = Template.bind({});
WithError.args = {
  label: "Label",
  error: "Error text",
};

export const Phone: Story = Template.bind({});
Phone.args = {
  label: "Phone number",
  type: "phone",
};

export const Select: Story = Template.bind({});
Select.args = {
  label: "Label",
  options: [
    { label: "Value 1", value: "1" },
    { label: "Value 2", value: "2" },
  ],
  type: "select",
  sx: {
    minWidth: 200,
  },
};
