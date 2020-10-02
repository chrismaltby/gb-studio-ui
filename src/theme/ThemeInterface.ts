export interface ThemeInterface {
  typography: {
    fontSize: string;
  };
  colors: {
    highlight: string;
    text: string;
    secondaryText: string;
    toolbar: {
      background: string;
      gradientBottom: string;
      inactiveBackground: string;
      border: string;
      inactiveBorder: string;
    };
    button: {
      background: string;
      gradientBottom: string;
      border: string;
      borderTop: string;
      activeBackground: string;
      text: string;
      toolbar: {
        border: string;
        borderTop: string;
      };
      nestedBackground: string;
      nestedActiveBackground: string;
    };
    menu: {
      background: string;
      hoverBackground: string;
      activeBackground: string;
      divider: string;
    };
    input: {
      background: string;
      hoverBackground: string;
      activeBackground: string;
      text: string;
      border: string;
    };
  };
  borderRadius: number;
}

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
