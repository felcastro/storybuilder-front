import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as StyleThemeProvider } from "styled-components";
import { GlobalStyle, baseTheme, lightTheme, darkTheme } from "../../theme";

type ThemeContextType = Record<string, any>;
type ThemeProviderType = (props: React.PropsWithChildren<{}>) => JSX.Element;

const ThemeContext = createContext({});

export const ThemeProvider: ThemeProviderType = ({ children }) => {
  const [colorMode, setColorMode] = useState("dark");

  const setColorModeState = (colorMode: string) => {
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
    localColorMode && setColorMode(localColorMode);
  }, []);

  const theme = {
    colorMode,
    mode: (a: any, b: any) => (colorMode === "light" ? a : b),
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
        <GlobalStyle />
        {children}
      </StyleThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => useContext(ThemeContext);
