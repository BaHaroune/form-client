import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename={`https://baharoune.github.io/form-client/`}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

