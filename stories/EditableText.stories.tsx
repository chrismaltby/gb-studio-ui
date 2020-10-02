import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { EditableText } from "../src/form/EditableText";
import { darkThemeDecorator } from "./helpers";

export default {
  title: "Components/Form Fields/EditableText",
  component: EditableText,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

const Template: Story = (args: any) => <EditableText {...args} />;

export const Text = Template.bind({});
Text.args = {
  value: "Hello World",
};
