import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BookshelfMain from '../BookshelfMain/BookshelfMain'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './App.css';
import config from '../config'
// import STORE from '../dummy-store'
// import BookshelfCategory from '../BookshelfCategory/BookshelfCategory'
import AddBook from '../AddBook/AddBook'
// import SearchBox from '../SearchBox/SearchBox'
import Nav from '../Nav/Nav'
import About from '../About/About'
import Home from '../Home/Home'
import AppContext from '../AppContext'

class App extends Component {
  state = {
    books: [],
    categories: [],
    subcategories: [],
    catsandsubcats:  []
  }

  async componentDidMount() {
    let booksRes = await fetch(config.API_ENDPOINT + 'books', 
      {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
    let books = await booksRes.json()
    let categoriesRes = await fetch(config.API_ENDPOINT + 'categories', 
      {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
    let categories = await categoriesRes.json()
    let subcategoriesRes = await fetch(config.API_ENDPOINT + 'subcategories', 
    {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    }
  })
    let subcategories = await subcategoriesRes.json()
    let catsAndSubcatsRes = await fetch(config.API_ENDPOINT + 'catsandsubcats', 
    {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${config.API_KEY}`
    }
  })
    let catsandsubcats = await catsAndSubcatsRes.json()
    this.setState({books, categories, subcategories, catsandsubcats})
  }

  render() {
    console.log(this.state)
    const value = {
      books: this.state.books,
      categories: this.state.categories,
      subcategories: this.state.subcategories,
      catsandsubcats: this.state.catsandsubcats
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
          </main>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
