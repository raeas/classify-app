import React, { Component } from 'react';
import './SearchResults.css';
import Result from '../Result/Result'


class SearchResults extends Component {
  render() {
    // const results = this.props.results.map((result, i) => <Result { ...result } key={i}/>);
    return (
      <div className="results-list">
        <Result />
      </div>
    );
  }
}

export default SearchResults;