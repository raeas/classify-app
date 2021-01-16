import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'



function Home() {
  return (
    <>
      <h1>Home</h1>
      <button><Link to='/add-book' className='text-link'>Get Started</Link></button>
    </>
  );
}

export default Home;