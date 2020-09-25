import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { Menu, MenuAccelerator, MenuDivider, MenuItem, MenuProps } from "../src/menu/Menu";
import { darkThemeDecorator } from "./helpers";

export default {
  title: "Components/Menu",
  component: Menu,
} as Meta;

const Template: Story<MenuProps> = (args: any) => <Menu {...args} theme={undefined} />;

export const WithItems = Template.bind({});
WithItems.args = {
  children: <>
    <MenuItem>First</MenuItem>
    <MenuItem>Second</MenuItem>
    <MenuItem>Third</MenuItem>
  </>,
};

export const WithItemsDark = Template.bind({});
WithItemsDark.args = WithItems.args;
WithItemsDark.decorators = [darkThemeDecorator];

export const WithDividers = Template.bind({});
WithDividers.args = {
  children: <>
    <MenuItem>First</MenuItem>
    <MenuDivider />
    <MenuItem>Second</MenuItem>
    <MenuDivider />
    <MenuItem>Third</MenuItem>
  </>,
};

export const WithDividersDark = Template.bind({});
WithDividersDark.args = WithDividers.args;
WithDividersDark.decorators = [darkThemeDecorator];

export const WithAccelerators = Template.bind({})
WithAccelerators.args = {
  children: <>
    <MenuItem>First <MenuAccelerator>⌘1</MenuAccelerator></MenuItem>
    <MenuItem>Second <MenuAccelerator>⌘2</MenuAccelerator></MenuItem>
    <MenuItem>Third <MenuAccelerator>⌘3</MenuAccelerator></MenuItem>
  </>,
};

export const WithAcceleratorsDark = Template.bind({})
WithAcceleratorsDark.args = {
  children: <>
    <MenuItem>First <MenuAccelerator>⌘1</MenuAccelerator></MenuItem>
    <MenuItem>Second <MenuAccelerator>⌘2</MenuAccelerator></MenuItem>
    <MenuItem>Third <MenuAccelerator>⌘3</MenuAccelerator></MenuItem>
  </>,
};
WithAcceleratorsDark.decorators = [darkThemeDecorator];
