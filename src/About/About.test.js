import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import About from './About';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><About /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});