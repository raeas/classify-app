import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BookshelfMain from '../BookshelfMain/BookshelfMain'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './App.css';
import config from '../config'
import AddBook from '../AddBook/AddBook'
import UpdateBook from '../UpdateBook/UpdateBook'
import Nav from '../Nav/Nav'
import About from '../About/About'
import Home from '../Home/Home'
import AppContext from '../AppContext'

class App extends Component {
  state = {
    books: [],
    categories: [],
    subcategories: [],
    bookshelf:  [],
    newBookshelf: [] //needed to refresh bookshelf on add and deletes.
  }

  async componentDidMount() {
    let booksRes = await fetch(`${config.API_BASE_URL}/books`, 
    // let booksRes = await fetch(`https://rocky-reaches-94023.herokuapp.com/api/books`,
      {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
    let books = await booksRes.json()
    let categoriesRes = await fetch(`${config.API_BASE_URL}/categories`, 
    // let categoriesRes = await fetch(`https://rocky-reaches-94023.herokuapp.com/api/categories`, 
      {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
    let categories = await categoriesRes.json()
    let subcategoriesRes = await fetch(`${config.API_BASE_URL}/subcategories`, 
    // let subcategoriesRes = await fetch(`https://rocky-reaches-94023.herokuapp.com/api/subcategories`, 
    {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    }
  })
    let subcategories = await subcategoriesRes.json()
    let bookshelfRes = await fetch(`${config.API_BASE_URL}/bookshelf`,
    // let bookshelfRes = await fetch(`https://rocky-reaches-94023.herokuapp.com/api/bookshelf`, 
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
    }, () => console.log('add book set state ', this.state.books))
  }

  // updateBook = (updatedBook) => {
  //   const newBookshelf = this.state.bookshelf.filter(book => 
  //     book.id !== updatedBook.id
  //     )
  //   this.setState({
  //     bookshelf: [...newBookshelf, updatedBook]
  //   }, ( )=> console.log('updateBook ', this.state.bookshelf))
  // }

  onDeleteBook = bookId => {
    const newBookshelf = this.state.bookshelf.filter(book =>
      book.id !== bookId
    )
    this.setState({
      bookshelf: newBookshelf
    })
  }

  // handleCancelClick = () => {
  //   this.setState(prevState)
  // }

  render() {
    const value = {
      books: this.state.books,
      categories: this.state.categories,
      subcategories: this.state.subcategories,
      bookshelf: this.state.bookshelf,
      addBook: this.addBook,
      //1 add update method to context
      updateBook: this.updateBook,
      onDeleteBook: this.onDeleteBook,
      // handleCancelClick: this.handleCancelClick
    }
    return (
      <AppContext.Provider value={value}>
        <div className='App'>
          <nav>
            <Nav />
          </nav>
          <header>
            <Header />
          </header>
          <main>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/bookshelf' component={BookshelfMain} />
            <Route path='/add-book' component={AddBook} />
            {/* 2. add route for editing item  inside other components, use Link comp to link to this route (Bookshelf where Edit button is) */}
            <Route path='/update-book/:bookId' component={UpdateBook} /> 
          </main>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
