import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/GlobalStyle';
import theme from './assets/theme';
import Home from './pages/Home';
import Search from './pages/Search';
import Header from './components/header';
import Footer from './components/footer';
//  prettier-ignore

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:term" element={<Search />} />
            <Route path="/terms" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
