import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Select } from "../src/form/Select";
import { darkThemeDecorator } from "./helpers";

const options = [];

for (let i = 0; i < 5000; i++) {
  options.push({
    value: String(i),
    label: `Option ${i}`,
  });
}

export default {
  title: "Components/Form Fields/Select",
  component: Select,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

const Template: Story = (args: any) => <Select {...args} />;

export const SelectInput = Template.bind({});
SelectInput.args = {
  value: {
    value: "static",
    label: "Static",
  },
  options
};
