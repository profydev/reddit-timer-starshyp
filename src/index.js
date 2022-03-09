import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import WebFont from 'webfontloader';
import App from './App';

WebFont.load({
  google: {
    families: ['Bitter:300,400,500,700', 'Montserrat:300,400,500,700'],
  },
});

//  prettier-ignore
// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
