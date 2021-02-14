import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'



function Home() {
  return (
    <div className='Home'>
      <h1>Welcome to the Classify App!</h1>
      <p>The Classify App allows you to add your books to a bookshelf and classify them with the Dewey Decimal Classification System.</p>
      <p>To add a book, click "Get Started."</p>
      <button><Link to='/add-book' className='text-link'>Get Started</Link></button>
    </div>
  );
}

export default Home;