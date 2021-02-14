import React from 'react';
import ReactDOM from 'react-dom';
import UpdateBook from './UpdateBook';

it('renders AddBook without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UpdateBook />, div);
  ReactDOM.unmountComponentAtNode(div);
});