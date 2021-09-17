import { createGlobalStyle, css } from "styled-components";

const variables = css`
  :root {
    --colors-primary-50: #e5f3ff;
    --colors-primary-100: #b8deff;
    --colors-primary-200: #8ac8ff;
    --colors-primary-300: #5cb3ff;
    --colors-primary-400: #2e9eff;
    --colors-primary-500: #0088ff;
    --colors-primary-600: #006dcc;
    --colors-primary-700: #005299;
    --colors-primary-800: #003666;
    --colors-primary-900: #001b33;

    --colors-gray-50: #f2f2f2;
    --colors-gray-100: #dbdbdb;
    --colors-gray-200: #c4c4c4;
    --colors-gray-300: #adadad;
    --colors-gray-400: #969696;
    --colors-gray-500: #808080;
    --colors-gray-600: #666666;
    --colors-gray-700: #4d4d4d;
    --colors-gray-800: #333333;
    --colors-gray-900: #1a1a1a;

    --colors-white: #fff;
    --colors-black: #000;

    --shadows-sm: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    --shadows-md: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    --shadows-lg: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    --radii-sm: 0.125rem;
    --radii-md: 0.25rem;
    --radii-lg: 0.375rem;

    --fontSizes-sm: 0.875rem;
    --fontSizes-md: 1rem;
    --fontSizes-lg: 1.125rem;
    --fontSizes-xl: 1.25rem;

    --breakpoints-sm: 30em;
    --breakpoints-md: 48em;
    --breakpoints-lg: 62em;
    --breakpoints-xl: 80em;
  }
`;

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        min-height: 100%;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 16px;
    }

    body {
        background-color: ${({ theme }) => theme.main.background};
        color: ${({ theme }) => theme.main.foreground};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul, ol {
        list-style-type: none;
        margin: 0px;
        padding: 0px;
    }

    input {
      color: inherit;
      line-height: inherit;
    }

    dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
      margin: 0;
    }

    * {
        box-sizing: border-box;
    }

    ${variables}
`;
