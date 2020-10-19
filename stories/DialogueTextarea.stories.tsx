import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { DialogueTextarea } from "../src/form/DialogueTextarea";
import { darkThemeDecorator } from "./helpers";

export default {
  title: "Components/Form Fields/DialogueTextarea",
  component: DialogueTextarea,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta;

const Template: Story = (args: any) => <DialogueTextarea {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: "text",
  value: "Hello World",
};
