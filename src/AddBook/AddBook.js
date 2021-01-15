import React, { Component } from 'react';
import './AddBook.css';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      category: ''
    }
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = () => {
    console.log('handleChange')
    this.setState()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSumbit')
    this.setState()
  }

  render() {
    return (
      <div className='AddBookForm'>
        <h2>AddBook Component</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
              />
            <input
              name='author'
              value={this.state.author}
              onChange={this.handleChange}
              />
            <input type="submit" value="Submit" />
          </form>
      </div>
    )
  }
}



export default AddBook;
