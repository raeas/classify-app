import React, { Component } from 'react';
import Accordion from '../Accordion/Accordion'
import './AddBook.css';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      description: '',
      category: '',
      subcategory: ''
    }
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.addCategory = this.addCategory.bind(this)
  }

  handleChange = () => {
    console.log('handleChange')
    this.setState()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSumbit')
    //this will be a POST not setState() using API
    this.setState()
    this.props.history.push('/bookshelf')
  }

  addCategory = (category) => {
    console.log('category ', category)
    this.setState({category:category})
  }

  addSubcategory = (subcategory) => {
    console.log('subcategory ', subcategory)
    this.setState({subcategory:subcategory})
  }

  render() {
    return (
      <div className='AddBookForm'>
        <h2>AddBook Component</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Title:
            </label>
            <input
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
              />
            <label>
              Author:
            </label>
            <input
              name='author'
              value={this.state.author}
              onChange={this.handleChange}
              />
            <label>
              Description:
            </label>
            <input
              name='description'
              value={this.state.description}
              onChange={this.handleChange}
              />
              <Accordion 
                addCategory={this.addCategory} 
                addSubcategory={this.addSubcategory} />
            <input type="submit" value="Submit" />
          </form>
      </div>
    )
  }
}



export default AddBook;
