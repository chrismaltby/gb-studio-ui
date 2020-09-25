import React, { useState } from "react";
import styled from "styled-components";
import AutoSizer from "react-virtualized-auto-sizer";
import { FlatList } from "../../src/lists/FlatList";
import { SplitPaneHeader } from "../../src/splitpane/SplitPaneHeader";
import { SplitPane } from "react-collapse-pane";
import { VariableRow } from "../../src/lists/VariableRow";
import { CollapsibleRow } from "../../src/lists/CollapsibleRow";

export interface SplitPaneTestProps {
  width: number;
  height: number;
}

const COLLAPSED_SIZE = 30;
const OPENED_SIZE = 130;

const scenes = [
  {
    id: "scene1",
    name: "Logo",
  },
  {
    id: "scene2",
    name: "Title Screen",
  },
  {
    id: "scene3",
    name: "Path To Sample Town",
  },
  {
    id: "scene4",
    name: "Sample Town",
  },
];

const variables = [
  {
    id: "1",
    name: "Quest 1",
  },
  {
    id: "2",
    name: "Quest 2",
  },
  {
    id: "3",
    name: "Quest 3",
  },
  {
    id: "4",
    name: "Quest 4",
  },
  {
    id: "5",
    name: "Quest 5",
  },
];

for (var i = 6; i < 100; i++) {
  variables.push({
    id: String(i),
    name: "Variable " + i,
  });
}

export const SplitPaneTest: React.FC<SplitPaneTestProps> = ({
  width,
  height,
}) => {
  const [selectedId, setSelectedId] = useState("");
  const [splitSizes, setSplitSizes] = useState([
    height - OPENED_SIZE - COLLAPSED_SIZE - COLLAPSED_SIZE,
    COLLAPSED_SIZE,
    COLLAPSED_SIZE,
    OPENED_SIZE,
  ]);
  const [counter, setCounter] = useState(0);

  const onSaveSizes = (sizes: number[]) => {
    setSplitSizes(sizes);
  };

  const resetSizes = (newSizes: number[]) => {
    const numCollapsed = newSizes.filter((size) => size === COLLAPSED_SIZE)
      .length;
    if (numCollapsed === newSizes.length) {
      setSplitSizes([
        COLLAPSED_SIZE,
        COLLAPSED_SIZE,
        COLLAPSED_SIZE,
        height - 3 * COLLAPSED_SIZE,
      ]);
    } else {
      setSplitSizes(newSizes);
    }
    setCounter((counter) => counter + 1);
  };

  const onTogglePane = (index: number) => () => {
    const previousPanelHeight = splitSizes[index];
    const shouldCollapse = previousPanelHeight !== COLLAPSED_SIZE;
    const collapsedPanels = splitSizes.map((size) => size === COLLAPSED_SIZE);
    const lastUncollapsedIndex = collapsedPanels.lastIndexOf(false);
    const firstUncollapsedIndex = collapsedPanels.indexOf(false);

    if (shouldCollapse) {
      if (index === firstUncollapsedIndex && index === splitSizes.length - 1) {
        // Collapse last when only uncollapsed, open first
        const newSizes = splitSizes.map((size, i) => {
          if (i === index) {
            return COLLAPSED_SIZE;
          } else if (i === 0) {
            return size + previousPanelHeight - COLLAPSED_SIZE;
          }
          return size;
        });
        resetSizes(newSizes);
      } else if (
        index === firstUncollapsedIndex ||
        index < lastUncollapsedIndex
      ) {
        // Collapse upwards
        const newSizes = splitSizes.map((size, i) => {
          if (i === index) {
            return COLLAPSED_SIZE;
          } else if (i === lastUncollapsedIndex) {
            return size + previousPanelHeight - COLLAPSED_SIZE;
          }
          return size;
        });
        resetSizes(newSizes);
      } else {
        // Collapse downwards
        const previousUncollapsed = collapsedPanels
          .slice(0, index)
          .lastIndexOf(false);

        const newSizes = splitSizes.map((size, i) => {
          if (i === index) {
            return COLLAPSED_SIZE;
          } else if (i === previousUncollapsed) {
            return size + previousPanelHeight - COLLAPSED_SIZE;
          }
          return size;
        });
        resetSizes(newSizes);
      }
    } else {
      const maxPanelHeight = Math.max(...splitSizes);
      const maxPanelIndex = splitSizes.indexOf(maxPanelHeight);
      const newSizes = splitSizes.map((size, i) => {
        if (i === index) {
          return OPENED_SIZE;
        } else if (i === maxPanelIndex) {
          return size - OPENED_SIZE + COLLAPSED_SIZE;
        } else {
          return size;
        }
      });
      resetSizes(newSizes);
    }
  };

  return (
    <div
      style={{
        background: "#fafafa",
        width,
        height,
        position: "relative",
      }}
    >
      <SplitPane
        key={counter}
        split="horizontal"
        initialSizes={splitSizes}
        minSizes={30}
        hooks={{
          onSaveSizes,
        }}
        resizerOptions={{
          css: {
            height: "1px",
            background: "rgba(0, 0, 0, 0.1)",
          },
          hoverCss: {
            height: "3px",
            background: "rgba(0, 0, 0, 0.2)",
          },
          grabberSize: "1rem",
        }}
      >
        <div style={{ height: "100%" }}>
          <SplitPaneHeader
            onToggle={onTogglePane(0)}
            collapsed={splitSizes[0] === COLLAPSED_SIZE}
          >
            Scenes
          </SplitPaneHeader>
          <AutoSizer>
            {({ width, height }) => (
              <FlatList
                selectedId={selectedId}
                items={scenes}
                setSelectedId={setSelectedId}
                width={width}
                height={height - 30}
              >
                {({ selected, item }) => <CollapsibleRow item={item} />}
              </FlatList>
            )}
          </AutoSizer>
        </div>
        <div style={{ height: "100%" }}>
          <SplitPaneHeader
            onToggle={onTogglePane(1)}
            collapsed={splitSizes[1] === COLLAPSED_SIZE}
          >
            Functions
          </SplitPaneHeader>
        </div>
        <div style={{ height: "100%" }}>
          <SplitPaneHeader
            onToggle={onTogglePane(2)}
            collapsed={splitSizes[2] === COLLAPSED_SIZE}
          >
            Prefabs
          </SplitPaneHeader>
        </div>
        <div style={{ height: "100%" }}>
          <SplitPaneHeader
            onToggle={onTogglePane(3)}
            collapsed={splitSizes[3] === COLLAPSED_SIZE}
          >
            Variables
          </SplitPaneHeader>
          <AutoSizer>
            {({ width, height }) => (
              <FlatList
                selectedId={selectedId}
                items={variables}
                setSelectedId={setSelectedId}
                width={width}
                height={height - 30}
              >
                {({ selected, item }) => <VariableRow item={item} />}
              </FlatList>
            )}
          </AutoSizer>
        </div>
      </SplitPane>
    </div>
  );
};
