import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

function Nav() {
  return (
      <div className='Nav'>
        <ul className='Nav__menu'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/add-book'>Add Book</Link></li>
          <li><Link to='/bookshelf'>Bookshelf</Link></li>
        </ul>
      </div>
  );
}

export default Nav;