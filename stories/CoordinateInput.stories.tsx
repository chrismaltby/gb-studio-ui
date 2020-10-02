import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  CoordinateInput,
  CoordinateInputProps,
} from "../src/form/CoordinateInput";
import { darkThemeDecorator } from "./helpers";

export default {
  title: "Components/Form Fields/CoordinateInput",
  component: CoordinateInput,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<CoordinateInputProps> = (args: any) => (
  <CoordinateInput {...args} />
);

export const X = Template.bind({});
X.args = {
  name: "x",
  coordinate: "x",
  value: 5,
};

export const XDark = Template.bind({});
XDark.args = X.args;
XDark.decorators = [darkThemeDecorator];

export const Y = Template.bind({});
Y.args = {
  name: "y",
  coordinate: "y",
  value: 5,
};

export const W = Template.bind({});
W.args = {
  name: "width",
  coordinate: "w",
  value: 5,
};

export const H = Template.bind({});
H.args = {
  name: "height",
  coordinate: "h",
  value: 5,
};
