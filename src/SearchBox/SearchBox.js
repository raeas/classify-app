import React, { Component } from 'react'
import './SearchBox.css';

class SearchBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  //Update the state object key "searchTerm" value with the term that is the value of form input// 
  handleChange(value){
    console.log("handling changing input values", value)
    this.setState(
      {searchTerm: value}
    )
  }

  //When the form is submmitted run handleSearchUpdate() call back function
  handleSubmit(event){
    event.preventDefault();
    console.log("handling form submission")
    this.props.handleSearch(this.state.searchTerm)
  }

  render() {
    return (
      <div className="search-box">
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            Search:
          </label>
          <input 
            type="text"
            name="searchTerm"
            id="searchTerm"
            placeholder="Search Term"
            value={this.state.searchTerm}
            onChange={event => this.handleChange(event.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchBox;