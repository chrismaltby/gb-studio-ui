import { ThemeInterface } from "./ThemeInterface";

const lightTheme: ThemeInterface = {
  typography: {
    fontSize: "13px",
  },
  colors: {
    highlight: "#c92c61",
    text: "#3b3a3b",
    secondaryText: "#999999",
    toolbar: {
      background: "#e8e7e8",
      gradientBottom: "#d1d0d1",
      border: "#abaaab",
      inactiveBackground: "#f6f6f6",
      inactiveBorder: "#d1d1d1",
    },
    button: {
      background: "#fefdfe",
      gradientBottom: "#f1f1f1",
      border: "#c5c5c5",
      borderTop: "#c5c5c5",
      activeBackground: "#eaeaea",
      text: "#3b3a3b",

      toolbar: {
        border: "#9f9e9e",
        borderTop: "#9f9e9e",
        // shadow: "#c5c5c5",
      },
      nestedBackground: "#cccccc",
      nestedActiveBackground: "#bbbbbb",
    },
    menu: {
      background: "#ffffff",
      hoverBackground: "#e8e7e8",
      activeBackground: "#e0e0e0",
      divider: "#d1d0d1",
    },
    input: {
      background: "#ffffff",
      hoverBackground: "#fafafa",
      activeBackground: "#ffffff",
      text: "#3b3a3b",
      border: "#d4d4d4",
    },
  },
  borderRadius: 4,
};

export default lightTheme;
