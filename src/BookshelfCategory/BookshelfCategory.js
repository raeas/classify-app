import React from 'react';
import './BookshelfCategory.css';
import STORE from '../dummy-store'


function BookshelfCategory(props) {
  console.log(props)
  const books = STORE.books
  // const categories = STORE.categories
  // const subcategories = STORE.subcategories
  return (
    <div className='Bookshelf__category'>
      <h2>BookshelfCategory Component</h2>
      {
        books.map(book => (
          <li key={book.id} style={{listStyle:'none'}}>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.categoryId}</p>
            <p>{book.subcategoryId}</p>
          </li>
        )
        )
      }
    </div>
  );
}

export default BookshelfCategory;