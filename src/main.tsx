import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi-devtools';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);
