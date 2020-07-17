import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: none;
  }

  body {
    font-size: ${({ theme }) => theme.fontSize};
    background: ${({ theme }) => theme.color.background};
    background: blue;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    font-size: ${({ theme }) => theme.fontSize};
  }

  button {
    cursor: pointer;
  }

`;
