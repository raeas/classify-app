import React from 'react';
import ReactDOM from 'react-dom';
import BookItem from './BookItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});