import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { Button } from "../src/buttons/Button";
import { Toolbar, ToolbarProps } from "../src/toolbar/Toolbar";
import { FixedSpacer, FlexGrow } from "../src/spacing/Spacing";
import { DropdownButton } from "../src/buttons/DropdownButton";
import { MenuItem, MenuAccelerator } from "../src/menu/Menu";
import { ZoomButton } from "../src/buttons/ZoomButton";
import { ExportIcon, FolderIcon, PlayIcon } from "../src/icons/Icons";
import { SearchInput } from "../src/form/SearchInput";
import { darkThemeDecorator } from "./helpers";

export default {
  title: "Components/Toolbar",
  component: Toolbar,
} as Meta;

const Template: Story<ToolbarProps> = (args: any) => <Toolbar {...args} />;

export const AppToolbar = Template.bind({});
AppToolbar.args = {
  children: (
    <>
      <DropdownButton
        label={<span style={{ textAlign: "left", minWidth: 120 }}>World</span>}
      >
        <MenuItem style={{ minWidth: 150 }} onClick={action("world")}>
          World <MenuAccelerator>⌘1</MenuAccelerator>
        </MenuItem>
        <MenuItem onClick={action("assets")}>Assets <MenuAccelerator>⌘2</MenuAccelerator></MenuItem>
        <MenuItem onClick={action("build")}>Build & Run <MenuAccelerator>⌘3</MenuAccelerator></MenuItem>
        <MenuItem onClick={action("settings")}>Settings <MenuAccelerator>⌘4</MenuAccelerator></MenuItem>
      </DropdownButton>
      <ZoomButton zoom={100} />
      <FlexGrow />
      Title
      <FlexGrow />
      <SearchInput placeholder="Search..." />
      <Button onClick={action("open_folder")}>
        <FolderIcon />
      </Button>
      <DropdownButton
        label={<ExportIcon />}
        showArrow={false}
        menuDirection="right"
      >
        <MenuItem onClick={action("export_rom")}>Export ROM</MenuItem>
        <MenuItem onClick={action("export_web")}>Export WEB</MenuItem>
      </DropdownButton>
      <FixedSpacer width={10} />
      <Button onClick={action("play")}>
        <PlayIcon />
      </Button>
    </>
  ),
};

export const AppToolbarDark = Template.bind({});
AppToolbarDark.args = AppToolbar.args;
AppToolbarDark.decorators = [darkThemeDecorator];

export const Plain = Template.bind({});
Plain.args = {};

export const WithButtons = Template.bind({});
WithButtons.args = {
  children: (
    <>
      <Button>Button</Button>
      <Button size="small">Button</Button>
      <FlexGrow />
      <Button size="small">Button</Button>
      <Button>Button</Button>
    </>
  ),
};
