import React, { Component } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__controls">
          <SearchBox
            searchTerm = {this.props.searchTerm}
            updateSearchTerm = {this.props.updateSearchTerm}
            handleSubmit = {this.props.handleSubmit}
          />
          <FilterOptions
            updateBookType = {this.updateBookType}
            updatePrintType = {this.updatePrintType}     
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;