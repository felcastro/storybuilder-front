export const baseTheme = {
  colors: {
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
  },
  boxShadows: {
    sm: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
    base: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
    md: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
  },
  borderRadius: {
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
  },
  typography: {
    fonts: {
      primary: "Roboto",
      secondary: "Montserrat",
    },
  },
  fontSizes: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  },
};

export const lightTheme = {
  bg: "white",
  color: "black",
  borderColor: baseTheme.colors.gray[100],
};

export const darkTheme = {
  bg: baseTheme.colors.gray[900],
  color: "white",
  borderColor: baseTheme.colors.gray[800],
};
