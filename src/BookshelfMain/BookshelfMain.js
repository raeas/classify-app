import React from 'react';
import './BookshelfMain.css';
import STORE from '../dummy-store';
import { Link } from 'react-router-dom'
// import { findCategory } from '../books-helpers';


function BookshelfMain(props) {
  console.log('store ', STORE)
  console.log(props)
  const books = STORE.books
  // const categories = STORE.categories
  // const subcategories = STORE.subcategories
  // const category = findCategory(books)
  // console.log(category)
  return (
    <>
      <div className='Bookshelf__main'>
        <h2>Bookshelf</h2>
        {
          books.map(book => ( 
            <li key={book.id} style={{listStyle:'none'}}>
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Category: {book.categoryId}</p>
              <p>Subcategory: {book.subcategoryId}</p>
              <button>Update</button>
              <button>Delete</button>
              <hr />
            </li>
          )
          )
        }
      </div>
      <div className='Add__book'> 
        <button><Link to='/add-book' className='text-link'>Add Book</Link></button>
      </div>
    </>
  );
}

export default BookshelfMain;