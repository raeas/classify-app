// make React available
import React from 'react';

import { BrowserRouter } from 'react-router-dom';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

// make the App component available
import About from './About';

// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<BrowserRouter><About /></BrowserRouter>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});