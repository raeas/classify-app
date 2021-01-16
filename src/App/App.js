import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BookshelfMain from '../BookshelfMain/BookshelfMain'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './App.css';
import STORE from '../dummy-store'
import BookshelfCategory from '../BookshelfCategory/BookshelfCategory'
import AddBook from '../AddBook/AddBook'
import SearchBox from '../SearchBox/SearchBox'
import Nav from '../Nav/Nav'
import About from '../About/About'
import Home from '../Home/Home'


class App extends Component {
  state = {
    books: STORE.books,
    classes: STORE.classes,
    subclasses: STORE.classes.subclasses
  }

  render() {
    return (
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
        {/* <SearchBox />
        <AddBook           
          classes={this.state.classes}
          subclasses={this.state.subclasses}/>
        <BookshelfCategory 
          books={this.state.books}
          classes={this.state.classes}
          subclasses={this.state.subclasses}/>
        <BookshelfMain 
          books={this.state.books}
          classes={this.state.classes}
          subclasses={this.state.subclasses}
        /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
