import { ThemeInterface } from "./ThemeInterface";

const darkheme: ThemeInterface = {
  typography: {
    fontSize: "13px",
  },
  colors: {
    highlight: "#c92c61",
    text: "#b7babb",
    secondaryText: "#777777",
    toolbar: {
      background: "#3e4142",
      gradientBottom: "#282a2a",
      border: "#000000",
      inactiveBackground: "#3e4142",
      inactiveBorder: "#000000",
    },
    button: {
      background: "#6a6d6e",
      gradientBottom: "#616364",
      border: "transparent",
      borderTop: "#9f9e9e",
      activeBackground: "#505252",
      text: "#fbfeff",
      toolbar: {
        border: "transparent",
        borderTop: "#9f9e9e",
        // shadow: "transparent",
      },
      nestedBackground: "#444444",
      nestedActiveBackground: "#555555",
    },
    menu: {
      background: "#000000",
      hoverBackground: "#282a2a",
      activeBackground: "#333333",
      divider: "#282a2a",
    },
    input: {
      background: "#000000",
      hoverBackground: "#222222",
      activeBackground: "#000000",
      text: "#b7babb",
      border: "#333333",
    },
  },
  borderRadius: 4,
};

export default darkheme;
