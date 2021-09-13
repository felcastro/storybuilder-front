import { createContext, useContext, useEffect, useState } from "react";
import {
  DefaultTheme,
  ThemeProvider as StyleThemeProvider,
} from "styled-components";
import {
  GlobalStyle,
  baseTheme,
  lightTheme,
  darkTheme,
  ColorMode,
} from "../../theme";

const ThemeContext = createContext({
  theme: {
    ...baseTheme,
    main: darkTheme,
    mode: <T, U>(lightValue: T, darkValue: U) =>
      darkValue ? darkValue : lightValue,
  },
  colorMode: "dark" as ColorMode,
  toggleColorMode: () => {},
});

interface ThemeContextType {
  theme: DefaultTheme;
  colorMode: ColorMode;
  toggleColorMode: () => void;
}

type ThemeProviderType = (props: React.PropsWithChildren<{}>) => JSX.Element;

export const ThemeProvider: ThemeProviderType = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>("dark");

  const setColorModeState = (colorMode: ColorMode) => {
    localStorage.setItem("colorMode", colorMode);
    setColorMode(colorMode);
  };

  const toggleColorMode = () => {
    colorMode === "light"
      ? setColorModeState("dark")
      : setColorModeState("light");
  };

  useEffect(() => {
    const localColorMode = localStorage.getItem("colorMode");

    if (localColorMode === "light" || localColorMode === "dark") {
      setColorMode(localColorMode);
    } else {
      setColorModeState("dark");
    }
  }, []);

  const theme: DefaultTheme = {
    mode: <T, U>(lightValue: T, darkValue: U) =>
      colorMode === "light" ? lightValue : darkValue,
    ...baseTheme,
    main: colorMode === "light" ? lightTheme : darkTheme,
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colorMode,
        toggleColorMode,
      }}
    >
      <StyleThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        {children}
      </StyleThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => useContext(ThemeContext);
