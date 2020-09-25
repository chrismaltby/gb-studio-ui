import React from "react";
import { ThemeProvider } from "styled-components";
import lightTheme from "../src/theme/lightTheme";
import GlobalStyle from "../src/globalStyle";

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
