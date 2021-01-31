import React from 'react';
import './BookshelfMain.css';
// import STORE from '../dummy-store';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import AppContext from '../AppContext'
import BookItem from '../BookItem/BookItem';

function BookshelfMain(props) {

  const context = useContext(AppContext)
  const bookshelf = context.bookshelf
  const book = context.books

  return (
    <>
      <div className='Bookshelf__main'>
        <h2>Bookshelf</h2>
        <BookItem />
        {
          // context.bookshelf.map(bookshelf => ( 
          //   <li key={bookshelf.id} style={{listStyle:'none'}}>
          //     <p>Title: {bookshelf.title}</p>
          //     <p>Author Last Name: {bookshelf.author_last}</p>
          //     <p>Author First Name: {bookshelf.author_first}</p>
          //     <p>Description: {bookshelf.description}</p>
          //     <p>Category: {bookshelf.category}</p>
          //     <p>Subcategory: {bookshelf.subcategory}</p>
          //     {/* Link to updateBook form */}
          //     <button><Link to={`/edit-book/${bookshelf.id}`}>Update Book</Link></button>
          //     <button>Delete Book</button>
          //     <hr />
          //   </li>
          // )
          // )
        }
      </div>
      <div className='Add__book'> 
        <button><Link to='/add-book' className='text-link'>Add Book</Link></button>
      </div>
    </>
  );
}

export default BookshelfMain;