import React, { Component } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBox extends Component {
  render() {
   // console.log(this.props.searchTerm)
    return (
      <div className="SearchBox">
        <label htmlFor="search">Search: </label>
        <input id="searchTerm" placeholder="Search term"/>
        <button 
            value = "submit" 
            //onClick={e => this.props.updateSearchTerm(e.target.previousElementSibling.value)}>
            onClick={() => {
                this.props.updateSearchTerm(
                  document.getElementById("searchTerm").value
                );
               // this.props.handleSubmit();
              }}
        >
            Submit
        </button>
      </div>   
    );
  }
}

export default SearchBox;