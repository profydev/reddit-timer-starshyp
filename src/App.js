import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/GlobalStyle';
import theme from './assets/theme';
import Home from './pages/Home';
import Search from './pages/Search';
//  prettier-ignore

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>Reddit Timer</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
