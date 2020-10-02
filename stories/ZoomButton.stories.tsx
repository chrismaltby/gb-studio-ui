import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  ZoomButton,
  ZoomButtonProps,
} from "../src/buttons/ZoomButton";
import { darkThemeDecorator } from "./helpers";

export default {
  title: "Components/ZoomButton",
  component: ZoomButton,
  argTypes: {
    onZoomIn: { action: "zoomIn" },
    onZoomOut: { action: "zoomOut" },
    onZoomReset: { action: "reset" },
  },
} as Meta;

const Template: Story<ZoomButtonProps> = (args: any) => <ZoomButton {...args} />

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [darkThemeDecorator];

export const Small = Template.bind({});
Small.args = {
  size: "small"
}