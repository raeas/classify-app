import React, { Component } from 'react';
import './BookshelfMain.css';
import { Link } from 'react-router-dom'
import BookItem from '../BookItem/BookItem';
import AppContext from '../AppContext';

class BookshelfMain extends Component {

  static contextType = AppContext

  state = {
    books: this.context.books
}

  render() {
    return (
      <>
        <div className='Bookshelf__main'>
          <h2>Bookshelf</h2>
          <BookItem />
        </div>
        <div className='Add__book'> 
          <button><Link to='/add-book' className='text-link'>Add Book</Link></button>
        </div>
      </>
    );
  }

}



export default BookshelfMain;