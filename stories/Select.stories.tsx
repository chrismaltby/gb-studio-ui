import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Select } from "../src/form/Select";
import { darkThemeDecorator } from "./helpers";

export default {
  title: "Components/Form Fields/Select",
  component: Select,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

const Template: Story = (args: any) => <Select {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: "text",
  value: "Hello World",
};

export const Number = Template.bind({});
Number.args = {
  type: "number",
  value: 42,
};
