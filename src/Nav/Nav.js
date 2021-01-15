import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';


function Nav() {
  return (
      <div className='Nav'>
        <Link to='/'>
          Home
        </Link>
        <Link to='/about'>
          About
        </Link>
        <Link to='/bookshelf'>
          Bookshelf
        </Link>
      </div>
  );
}

export default Nav;