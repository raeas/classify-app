import React from 'react';
import ReactDOM from 'react-dom';
import BookshelfMain from './BookshelfMain';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookshelfMain />, div);
  ReactDOM.unmountComponentAtNode(div);
});