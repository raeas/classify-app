import React from 'react';
import { Link } from 'react-router-dom'
import './About.css';


function About() {
  return (
    <div className='About'>
      <h1>About Dewey Classify App</h1>
      <p>The Dewey Classify App let's users become the librarian of their own library.</p>
      <p>Users can enter their books into the app and create a virtual bookshelf by classifying their books with a simplified Dewey Decimal Classification system.</p> 
      <p>Users can choose how they want to classify their books and can then browse them in shelf order by the classification scheme.</p>
      <h2>How to:</h2>
      <ol>
        <li>From the home page, click "Get Started." Or click "Add Book" in the Header.</li>
        <li>Enter the Title, Author (optional), and Description (optional) of you book.</li>
        <li>Decide which Category you'd like your book to fall under. Click on the Category name to expand a list of Subcategories.</li>
        <li>Select the most applicable Subcategory. You may only select one Subcategory. It's not always easy to decide! This is a challange faced by librarians when classifying books.</li>
        <li>If you want to reclassify your book, you can always click "Edit". Or, if you'd like to remove a book from the bookshelf, click "Delete."</li>
        <li>To view the bookshelf, click on "Bookself" in the Header.</li>
      </ol>
      <button><Link to='/add-book' className='text-link'>Get Started</Link></button>

    </div>
  );
}

export default About;
