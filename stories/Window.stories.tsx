import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import { Button } from "../src/buttons/Button";
import { Toolbar } from "../src/toolbar/Toolbar";
import { FixedSpacer, FlexGrow } from "../src/spacing/Spacing";
import { DropdownButton } from "../src/buttons/DropdownButton";
import { MenuAccelerator, MenuItem } from "../src/menu/Menu";
import { ZoomButton } from "../src/buttons/ZoomButton";
import { ExportIcon, FolderIcon, PlayIcon } from "../src/icons/Icons";
import { SearchInput } from "../src/form/SearchInput";
import { SplitPane } from "react-collapse-pane";
import AutoSizer from "react-virtualized-auto-sizer";
import { SplitPaneTest } from "./components/SplitPaneTest";
import { ActorEditor } from "./Form.stories";

export default {
  title: "Example/Window",
  component: Toolbar,
} as Meta;

export const Window = () => (
  <div
    style={{
      borderRadius: 4,
      overflow: "hidden",
      width: 1000,
      height: 500,
      background: "#fafafa",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Toolbar>
      <DropdownButton
        label={<span style={{ textAlign: "left", minWidth: 137 }}>World</span>}
      >
        <MenuItem style={{ minWidth: 150 }} onClick={action("world")}>
          World <MenuAccelerator>⌘1</MenuAccelerator>
        </MenuItem>
        <MenuItem onClick={action("assets")}>
          Assets <MenuAccelerator>⌘2</MenuAccelerator>
        </MenuItem>
        <MenuItem onClick={action("build")}>
          Build & Run <MenuAccelerator>⌘3</MenuAccelerator>
        </MenuItem>
        <MenuItem onClick={action("settings")}>
          Settings <MenuAccelerator>⌘4</MenuAccelerator>
        </MenuItem>
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
    </Toolbar>
    <div style={{ flexGrow: 1, background: "#ddd", position: "relative" }}>
      <SplitPane
        split="vertical"
        initialSizes={[180, 540, 280]}
        minSizes={[180, 100, 240]}
        resizerOptions={{
          css: {
            WebkitColumnWidth: "1px",
            background: "rgba(0, 0, 0, 0.1)",
            transition: "none",
          },
          hoverCss: {
            width: "3px",
            background: "rgba(0, 0, 0, 0.2)",
          },
          grabberSize: "1rem",
        }}
      >
        <div style={{ height: "100%" }}>
          <AutoSizer>
            {({ width, height }) => (
              <SplitPaneTest width={width} height={height} />
            )}
          </AutoSizer>
        </div>
        <div></div>
        <div style={{ backgroundColor: "#fafafa", height: "100%" }}>
          <ActorEditor />
        </div>
      </SplitPane>
    </div>
  </div>
);
