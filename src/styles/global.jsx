import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.neutral.White};
    color: ${({ theme }) => theme.colors.neutral.Black};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: 1.2;
    font-weight: 600;
  }

  button {
    cursor: pointer;
    border: none;
    padding: 0;
    background: none;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  /* Estilos de foco para acessibilidade */
  button:focus-visible,
  a:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary.primary};
    outline-offset: 2px;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }
`;