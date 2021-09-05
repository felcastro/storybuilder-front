import { useTheme } from "../../contexts/ThemeProvider";

export const useColorModeValue = <T>(lightModeValue: T, darkModeValue: T) => {
  const { colorMode } = useTheme();

  return colorMode === "light" ? lightModeValue : darkModeValue;
};
