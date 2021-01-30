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
      authorFirst: '',
      authorLast: '',
      description: '',
      categoryId: '',
      category: '',
      subcategoryId: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addCategory = this.addCategory.bind(this)
    this.addSubcategory = this.addSubcategory.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newBook = {
      title: e.target['title'].value,
      author_first: e.target['author-first'].value,
      author_last: e.target['author-last'].value,
      description: e.target['title'].value,
      category_id:  this.state.category,
      subcategory_id: this.state.subcategory
    }
    //this will be a POST not setState() using API
    // this.setState()
    fetch(config.API_ENDPOINT + 'books', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }, 
      body: JSON.stringify(newBook),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(book => {
        // this.context.addBook(book)
        this.props.history.push(`/bookshelf`)
      })
      .catch(error => {
        console.log({error})
      })
    // this.props.history.push('/bookshelf')
  }

  addCategory = (category) => {
    console.log('category ', category)
    this.setState({category:category})
  }

  addSubcategory = (subcategory) => {
    console.log('subcategory ', subcategory)
    this.setState({subcategory})
  }

  render() {
    // console.log('state from app comp: ', this.state)
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
                name='author-first'
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
                name='author-last'
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
