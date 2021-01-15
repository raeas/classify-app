import React from 'react';
import './BookshelfCategory.css';
import STORE from '../dummy-store'


function BookshelfCategory(props) {
  console.log(props)
  const books = STORE.books
  const classes = STORE.classes
  const subclasses = STORE.subclasses
  return (
    <div className='Bookshelf__catetory'>
      <h2>BookshelfCategory Component</h2>
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
    </div>
  );
}

export default BookshelfCategory;