import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { FlatList } from "../src/lists/FlatList";
import { ThemeProvider } from "styled-components";
import lightTheme from "../src/theme/lightTheme";
import GlobalStyle from "../src/globalStyle";
import { VariableRow } from "../src/lists/VariableRow";

const items = [
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

for (var i = 6; i < 1000; i++) {
  items.push({
    id: String(i),
    name: "Variable " + i,
  });
}

export default {
  title: "Components/FlatList",
  component: FlatList,
} as Meta;

export const Default = () => {
  const [selectedId, setSelectedId] = useState("");

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <FlatList
        selectedId={selectedId}
        items={items}
        setSelectedId={setSelectedId}
        theme={undefined}
        width={300}
        height={300}        
      />
    </ThemeProvider>
  );
};

export const Multiple = () => {
  const [selectedId, setSelectedId] = useState("");
  const [selectedId2, setSelectedId2] = useState("");

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <FlatList
        selectedId={selectedId}
        items={items}
        setSelectedId={setSelectedId}
        theme={undefined}
        width={300}
        height={300}
      >
        {({ selected, item }) => <VariableRow item={item} />}
      </FlatList>
      <hr />
      <FlatList
        selectedId={selectedId2}
        items={items}
        setSelectedId={setSelectedId2}
        theme={undefined}
        width={300}
        height={300}        
      />
    </ThemeProvider>
  );
};
