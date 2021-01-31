import React, { Component } from 'react';
import Accordion from '../Accordion/Accordion'
import './UpdateBook.css';
import config from '../config';
import AppContext from '../AppContext';

//"Make a component containing a form for editing the item"

class UpdateBook extends Component {

  static propTypes = {

  }

  static contextType = AppContext

  state = {
      id: '',
      title: '',
      authorFirst: '',
      authorLast: '',
      description: '',
      category_id: '',
      subcategory_id: ''
  }

  componentDidMount() {
    const { bookId } = this.props.match.params
    console.log(bookId)
    fetch(config.API_ENDPOINT + 'books/' + `${bookId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }, 
      // body: JSON.stringify(book),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(responseData => {
        this.setState({
          id: responseData.id,
          title: responseData.title,
          authorFirst: responseData.author_first,
          authorLast: responseData.author_last,
          description: responseData.description,
          category_id: responseData.category_id,
          subcategory_id: responseData.subcategory_id
        })
      })
      .catch(error => {
        console.log({error})
      })

  }

  handleSubmit = (e) => {
    e.preventDefault()
    const updatedBook = {
      title: e.target['title'].value,
      author_first: e.target['author-first'].value,
      author_last: e.target['author-last'].value,
      description: e.target['title'].value,
      category_id:  this.state.category,
      subcategory_id: this.state.subcategory
    }

    fetch(config.API_ENDPOINT + 'books/' + `${this.context.books.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }, 
      body: JSON.stringify(updatedBook),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(book => {
        this.props.history.push(`/`)
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
    const { title, authorFirst, authorLast, description, category, subcategory} = this.state
    return (
      <div className='EditBookForm'>
        <h2>Edit Book</h2>
          <form onSubmit={this.handleSubmit}>
            <div className='field'>
              <label htmlFor='title-input'>
                Title:
              </label>
              <input
                value={title}
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
                value={authorFirst}
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
                value={authorLast}
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
                value={description}              
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

export default UpdateBook;
