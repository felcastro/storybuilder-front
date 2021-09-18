import {
  BaseThemeProps,
  BorderRadiusProps,
  BoxShadowProps,
  BreakpointProps,
  ColorModeThemeProps,
  ColorProps,
  FontSizeProps,
  ZIndicesProps,
} from "./";

const spaces = {
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
};

const colors: ColorProps = {
  primary: {
    50: "#E5F3FF",
    100: "#B8DEFF",
    200: "#8AC8FF",
    300: "#5CB3FF",
    400: "#2E9EFF",
    500: "#0088FF",
    600: "#006DCC",
    700: "#005299",
    800: "#003666",
    900: "#001B33",
  },
  gray: {
    50: "#F2F2F2",
    100: "#DBDBDB",
    200: "#C4C4C4",
    300: "#ADADAD",
    400: "#969696",
    500: "#808080",
    600: "#666666",
    700: "#4D4D4D",
    800: "#333333",
    900: "#1A1A1A",
  },
  red: {
    50: "#FEE7E7",
    100: "#FBBBBB",
    200: "#F99090",
    300: "#F76464",
    400: "#F43939",
    500: "#F20D0D",
    600: "#C20A0A",
    700: "#910808",
    800: "#610505",
    900: "#300303"
  },
  white: "#ffffff",
  black: "#000000",
};

const boxShadows: BoxShadowProps = {
  sm: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
  md: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
  lg: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
};

const borderRadius: BorderRadiusProps = {
  sm: "0.125rem",
  md: "0.25rem",
  lg: "0.375rem",
};

const fontSizes: FontSizeProps = {
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
};

const breakpoints: BreakpointProps = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
};

const zIndices: ZIndicesProps = {
  modal: 1400,
};

export const baseTheme: BaseThemeProps = {
  spaces,
  colors,
  boxShadows,
  borderRadius,
  fontSizes,
  breakpoints,
  zIndices,
};

export const lightTheme: ColorModeThemeProps = {
  background: "white",
  foreground: baseTheme.colors.gray[800],
  borderColor: baseTheme.colors.gray[100],
};

export const darkTheme: ColorModeThemeProps = {
  background: baseTheme.colors.gray[900],
  foreground: baseTheme.colors.gray[50],
  borderColor: baseTheme.colors.gray[800],
};
