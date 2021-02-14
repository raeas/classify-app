import React, { Component } from 'react';
import Accordion from '../Accordion/Accordion'
import './UpdateBook.css';
import config from '../config';
import AppContext from '../AppContext';
import { Link } from 'react-router-dom';

class UpdateBook extends Component {

  static contextType = AppContext

  state = {
      book_id: '',
      title: '',
      author_first: '',
      author_last: '',
      description: '',
      category_id: '',
      subcategory_id: ''
  }

  componentDidMount() {
    const { bookId } = this.props.match.params
    let book = this.context.bookshelf.find(book => book.id === parseInt(bookId)) // || {book_id: '', title: '', author_first: '', author_last: '', description: '', category_id: '', subcategory_id: ''}
    console.log('book ', book)
    this.setState({
      book_id: book.id,
      title: book.title,
      author_first: book.author_first,
      author_last: book.author_last,
      description: book.description,
      category_id: book.category_id,
      subcategory_id: book.subcategory_id
    })
  }

  handleChange = e => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { bookId } = this.props.match.params
    const book = {
      title: this.state.title,
      author_first: this.state.author_first,
      author_last: this.state.author_last,
      description: this.state.description,
      category_id:  this.state.category_id,
      subcategory_id: this.state.subcategory_id,
    }

    fetch(`${config.API_BASE_URL}/books/${bookId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }, 
      body: JSON.stringify(book),
    })
    .then(res => {
      if(!res.ok)
      return res.json().then(error => {
        throw error
      })
      fetch(`${config.API_BASE_URL}/bookshelf`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
        },
      })
      .then(bookshelfRes => {
        bookshelfRes.json()
        .then(bookshelf => {
          console.log('Update book ', bookshelf)
          this.context.addBook(bookshelf)
        })
        this.props.history.push(`/bookshelf`)
      })
    })
      .catch(error => {
        console.log({error})
      })
  }

  addCategory = (category_id) => {
    console.log('category ', category_id)
    this.setState({category_id})
  }

  addSubcategory = (subcategory_id) => {
    console.log('subcategory ', subcategory_id)
    this.setState({subcategory_id})
  }

  render() {
    return (
      <div className='UpdateBookForm'>
        <h2>Update Book</h2>
          <form onSubmit={this.handleSubmit}>
            <div className='field'>
              <label htmlFor='title-input'>
                Title:
              </label>
              <input
                type='text'
                name='title'
                id='title-input'
                aria-label='Title of book'
                aria-required='true'
                value={this.state.title}
                onChange = {this.handleChange}
                />
            </div>
            <div className='field'>
              <label htmlFor='author-first-name-input'>
                Author First Name:
              </label>
              <input
                type='text'
                name='author_first'
                id='author-first-name-input'
                aria-label='first name of the author'
                aria-required='false'
                value={this.state.author_first}
                onChange = {this.handleChange}
              />
            </div>
            <div className='field'>
              <label htmlFor='author-last-name-input'>
                Author Last Name:
              </label>
              <input
                type='text'
                name='author_last'
                id='author-last-name-input'
                aria-label='Last name of the author'
                aria-required='false'
                value={this.state.author_last}
                onChange = {this.handleChange}
              />
            </div>
            <div className='field'>
              <label htmlFor='book-description'> 
                Description:
              </label>
              <input        
                type='text'
                name='description'
                id='book-description'
                aria-label='Description of book'
                aria-required='false'
                value={this.state.description}                      
                onChange = {this.handleChange}
              />
                <Accordion 
                  addCategory={this.addCategory} 
                  addSubcategory={this.addSubcategory} />
              <input type="submit" value="Submit" />
            </div>
          </form>
          <button><Link to='/bookshelf'>Cancel</Link></button>
      </div>
    )
  }
}

export default UpdateBook;
