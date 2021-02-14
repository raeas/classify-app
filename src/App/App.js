import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BookshelfMain from '../BookshelfMain/BookshelfMain'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './App.css';
import config from '../config'
import AddBook from '../AddBook/AddBook'
import UpdateBook from '../UpdateBook/UpdateBook'
import About from '../About/About'
import Home from '../Home/Home'
import AppContext from '../AppContext'

class App extends Component {
  state = {
    books: [],
    categories: [],
    subcategories: [],
    bookshelf:  [],
    newBookshelf: []
  }

  async componentDidMount() {
    let booksRes = await fetch(`${config.API_BASE_URL}/books`, 
      {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
    let books = await booksRes.json()
    let categoriesRes = await fetch(`${config.API_BASE_URL}/categories`, 
      {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
    let categories = await categoriesRes.json()
    let subcategoriesRes = await fetch(`${config.API_BASE_URL}/subcategories`, 
    {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    }
  })
    let subcategories = await subcategoriesRes.json()
    let bookshelfRes = await fetch(`${config.API_BASE_URL}/bookshelf`,
    {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    }
  })
    let bookshelf = await bookshelfRes.json()
    this.setState({books, categories, subcategories, bookshelf})
  }

  addBook = (newBookshelf) => {
    this.setState({
      bookshelf: newBookshelf
    })
  }

  onDeleteBook = bookId => {
    const newBookshelf = this.state.bookshelf.filter(book =>
      book.id !== bookId
    )
    this.setState({
      bookshelf: newBookshelf
    })
  }

  render() {
    const value = {
      books: this.state.books,
      categories: this.state.categories,
      subcategories: this.state.subcategories,
      bookshelf: this.state.bookshelf,
      addBook: this.addBook,
      onDeleteBook: this.onDeleteBook,
    }
    return (
      <AppContext.Provider value={value}>
        <div className='App'>
          <Header />
          <main>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/bookshelf' component={BookshelfMain} />
            <Route path='/add-book' component={AddBook} />
            <Route path='/update-book/:bookId' component={UpdateBook} /> 
          </main>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
