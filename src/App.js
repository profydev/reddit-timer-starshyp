import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/GlobalStyle';
import theme from './assets/theme';
import Header from './components/header';
//  prettier-ignore

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
