import React, { useRef, useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { SplitPane } from "react-collapse-pane";
import { SplitPaneTest, SplitPaneTestProps } from "./components/SplitPaneTest";

export default {
  title: "Components/SplitPane",
  component: SplitPane,
} as Meta;

const Template: Story<SplitPaneTestProps> = (args: any) => (
  <SplitPaneTest {...args} />
);

export const NavigatorSidebar = Template.bind({});
NavigatorSidebar.args = {
  width: 400,
  height: 500,
};
