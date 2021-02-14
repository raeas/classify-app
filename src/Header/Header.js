import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav'


function Header() {
  return (
    <header className='App__header'>
      <h1>The Dewey Classify App</h1>
      <nav>
        <Nav />
      </nav>
    </header>
  );
}

export default Header;

