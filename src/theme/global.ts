import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<any>`
    html,
    body {
        height: 100%;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 16px;
    }

    body {
        background-color: ${({ theme }) => theme.main.bg};
        color: ${({ theme }) => theme.main.color};
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

    * {
        box-sizing: border-box;
    }
`;
