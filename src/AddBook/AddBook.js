import React, { Component } from 'react';
import Accordion from '../Accordion/Accordion'
import './AddBook.css';
import config from '../config';
import AppContext from '../AppContext';
import { Link } from 'react-router-dom';

class AddBook extends Component {

  static contextType = AppContext

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author_first: '',
      author_last: '',
      description: '',
      category_id: '',
      subcategory_id: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const book = {
      title: e.target['title'].value,
      author_first: e.target['author_first'].value,
      author_last: e.target['author_last'].value,
      description: e.target['description'].value,
      category_id: this.state.category_id,
      subcategory_id: this.state.subcategory_id
    }
    fetch(`${config.API_BASE_URL}/books`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      },
      body: JSON.stringify(book),
    })
      .then(res => {
        if (!res.ok)
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
                this.context.addBook(bookshelf)
              })
            this.props.history.push(`/bookshelf`)
          })
      })
      .catch(error => {
        console.log({ error })
      })
  }

  addCategory = (category_id) => {
    this.setState({ category_id })
  }

  addSubcategory = (subcategory_id) => {
    this.setState({ subcategory_id })
  }

  render() {
    return (
      <div className='AddBookForm'>
        <h2>Add a Book</h2>
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
            />
            <Accordion
              addCategory={this.addCategory}
              addSubcategory={this.addSubcategory} />
            <input type="submit" value="Submit" />
          </div>
        </form>
        <button><Link to='/'>Cancel</Link></button>
      </div>
    )
  }
}

export default AddBook;
