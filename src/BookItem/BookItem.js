import React from 'react';
import './BookItem.css';
import AppContext from '../AppContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react';

function BookItem() {
  const context = useContext(AppContext)
  const bookshelf = context.bookshelf
  const book = context.books
  return (
    <div className='BookItem'>
      {
          context.bookshelf.map(book => ( 
            <li key={book.id} style={{listStyle:'none'}}>
              <p>Title: {book.title}</p>
              <p>Author Last Name: {book.author_last}</p>
              <p>Author First Name: {book.author_first}</p>
              <p>Description: {book.description}</p>
              <p>Category: {book.category}</p>
              <p>Subcategory: {book.subcategory}</p>
              {/* Link to updateBook form */}
              <button><Link to={`/edit-book/${book.id}`}>Update Book</Link></button>
              <button>Delete Book</button>
              <hr />
            </li>
          )
          )
        }
      
    </div>
  );
}

export default BookItem;