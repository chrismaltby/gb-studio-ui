import React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import lightTheme from "../src/theme/lightTheme";
import { Default as Button } from "../stories/Button.stories";

describe("Button", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ThemeProvider theme={lightTheme}>
      <Button />
      </ThemeProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
