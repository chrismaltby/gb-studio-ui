import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button, ButtonProps } from "../src/buttons/Button";
import { darkThemeDecorator } from "./helpers";
import { FolderIcon } from "../src/icons/Icons";

export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args: any) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const DefaultDark = Template.bind({});
DefaultDark.args = Default.args
DefaultDark.decorators = [darkThemeDecorator];

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: <FolderIcon />,
};

export const WithIconDark = Template.bind({});
WithIconDark.args = WithIcon.args;
WithIconDark.decorators = [darkThemeDecorator];

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "large",
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Button",
};
export const LargeDark = Template.bind({});
LargeDark.args = Large.args;
LargeDark.decorators = [darkThemeDecorator];

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Button",
};

export const SmallDark = Template.bind({});
SmallDark.args = Small.args;
SmallDark.decorators = [darkThemeDecorator];

export const Transparent = Template.bind({});
Transparent.args = {
  variant: "transparent",
  children: "Button",
};
