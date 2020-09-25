import React from "react";
import { StoryFnReactReturnType } from "@storybook/react/dist/client/preview/types";
import { ThemeProvider } from "styled-components";
import darkTheme from "../src/theme/darkTheme";

export const darkThemeDecorator = (story: () => StoryFnReactReturnType) => (
  <ThemeProvider theme={darkTheme}>{story()}</ThemeProvider>
);
