import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { TextField } from "../src/form/TextField";
import { darkThemeDecorator } from "./helpers";

export default {
  title: "Components/Form Fields/TextField",
  component: TextField,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

const Template: Story = (args: any) => <TextField {...args} />;

export const Text = Template.bind({});
Text.args = {
  name: "name",
  label: "Name",
  value: "Project Name",
};
