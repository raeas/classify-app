import React from 'react';
import './BookshelfMain.css';
import STORE from '../dummy-store';


function BookshelfMain(props) {
  console.log(props)
  const books = STORE.books
  const classes = STORE.classes
  const subclasses = STORE.subclasses
  return (
    <main className='Bookshelf__main'>
      <h2>This is BookshelfMain component.</h2>
      {
        books.map(book => (
          <li key={book.id} style={{listStyle:'none'}}>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.classId}</p>
            <p>{book.subclassId}</p>
          </li>
        )
        )
      }
    </main>
  );
}

export default BookshelfMain;