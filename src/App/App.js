import React, { Component } from 'react'
import { BroswerRouter } from 'react-router-dom'
import BookshelfMain from '../BookshelfMain/BookshelfMain'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './App.css';
import STORE from '../dummy-store'
import BookshelfCategory from '../BookshelfCategory/BookshelfCategory'
import AddBook from '../AddBook/AddBook'
import SearchBox from '../SearchBox/SearchBox'


class App extends Component {
  state = {
    books: STORE.books,
    classes: STORE.classes,
    subclasses: STORE.classes.subclasses
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <SearchBox />
        <AddBook           
          classes={this.state.classes}
          subclasses={this.state.subclasses}/>
        <BookshelfCategory 
          books={this.state.books}
          classes={this.state.classes}
          subclasses={this.state.subclasses}/>
        <BookshelfMain />
        <Footer />
      </div>
    );
  }
}

export default App;
