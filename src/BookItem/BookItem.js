import React from 'react';
import './BookItem.css';
import AppContext from '../AppContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import config from '../config';

function BookItem() {

  const context = useContext(AppContext)

  function deleteBook(bookId) {
    fetch(`${config.API_BASE_URL}/books/${bookId}`, {
    // fetch(`https://rocky-reaches-94023.herokuapp.com/api/books/${bookId}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${config.API_KEY}`
      },
      body: JSON.stringify(bookId),
    })
    .then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
    })
    .catch(error => {
      console.error(error)
    })
  }
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
              <button><Link to={`/update-book/${book.id}`}>Update Book</Link></button>
              <button onClick={() => {
                deleteBook(book.id)
                context.onDeleteBook(book.id)
              }}>Delete Book</button>
              <hr />
            </li>
          )
          )
        }
      
    </div>
  );
}

export default BookItem;