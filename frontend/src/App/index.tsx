import React from "react";
import FaleMaisPage from "./pages/FaleMaisPage";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global/style";
import { theme } from "./global/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FaleMaisPage />
    </ThemeProvider>
  );
}

export default App;
