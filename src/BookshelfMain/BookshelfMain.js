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


// componentDidMount() {
//   console.log(this.state.bookshelf)
//   const { bookId } = this.props.match.params
//   let bookshelf = this.context.bookshelf.find(book => book.id === parseInt(bookId)) || {book_id: '', title: '', author_first: '', author_last: '', description: '', category_id: '', subcategory_id: ''}
//   console.log('compDidMount ', bookshelf)
//   this.setState({
//     bookshelf: bookshelf
//     // book_id: book.id,
//     // title: book.title,
//     // author_first: book.author_first,
//     // author_last: book.author_last,
//     // description: book.description,
//     // category_id: book.category_id,
//     // subcategory_id: book.subcategory_id
//   })
// }


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