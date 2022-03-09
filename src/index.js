import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import WebFont from 'webfontloader';
import App from './App';

WebFont.load({
  google: {
    families: ['Bitter:300,400,500,700', 'Montserrat:300,400,500,700'],
  },
});

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('root'));
