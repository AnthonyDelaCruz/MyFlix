import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        background-color: #000;
        color: #fff;
    }
    .divider {
        border-bottom: 8px solid #222
    }
`;

export default GlobalStyle;
