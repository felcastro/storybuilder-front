import "styled-components";

type SpaceProps = Record<number, string>;

interface SizeProps {
  "3xs": string;
  "2xs": string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

type ColorScheme = "gray" | "primary" | "red";

interface ColorSchemeProps {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

interface ColorProps extends Record<ColorScheme, ColorSchemeProps> {
  white: string;
  black: string;
}

interface BoxShadowProps {
  sm: string;
  md: string;
  lg: string;
}

interface BorderRadiusProps {
  sm: string;
  md: string;
  lg: string;
}

interface FontSizeProps {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

interface BreakpointProps {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

interface ZIndicesProps {
  modal: number;
}

export interface BaseThemeProps {
  spaces: SpaceProps;
  sizes: SizeProps;
  colors: ColorProps;
  boxShadows: BoxShadowProps;
  borderRadius: BorderRadiusProps;
  fontSizes: FontSizeProps;
  breakpoints: BreakpointProps;
  zIndices: ZIndicesProps;
}

export interface ColorModeThemeProps {
  background: string;
  foreground: string;
  borderColor: string;
}

export type ColorMode = "light" | "dark";

declare module "styled-components" {
  export interface DefaultTheme extends BaseThemeProps {
    mode: <T, U>(lightValue: T, darkValue: U) => T | U;
    main: ColorModeThemeProps;
  }
}
