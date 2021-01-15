import React from 'react';
import ReactDOM from 'react-dom';
import { BroswerRouter, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

