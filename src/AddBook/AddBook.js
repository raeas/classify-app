import React, { Component } from 'react';
import Accordion from '../Accordion/Accordion'
import './AddBook.css';
import config from '../config'
import AppContext from '../AppContext'

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
      // category: '',
      subcategory_id: '',
      // subcategory: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addCategory = this.addCategory.bind(this)
    this.addSubcategory = this.addSubcategory.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const book = {
      title: e.target['title'].value,
      author_first: e.target['author_first'].value,
      author_last: e.target['author_last'].value,
      description: e.target['description'].value,
      category_id:  this.state.category_id,
      subcategory_id: this.state.subcategory_id
    }
    fetch(config.API_ENDPOINT + 'books', {
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
          return res.json()
      })
      // What is this doing... how so I get it to refresh the bookshelf???
      .then(book => {
        console.log('Add book ', book)
        // book.title = '',
        this.context.addBook(book)
        this.props.history.push(`/bookshelf`)
      })
      .catch(error => {
        console.log({error})
      })
    this.props.history.push('/bookshelf')
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
      </div>
    )
  }
}


export default AddBook;
