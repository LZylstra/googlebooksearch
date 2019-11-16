import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import BookList from './BookList/BookList'
import { all } from 'q';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      printType: "all",
      bookType: "full",
      searchTerm: null,
      books: {}
    };
  }

  updatePrintType = (type) => {
    this.setState({
      printType: type
    })
  }
  updateBookType = (type) =>{
    this.setState({
      bookType: type
    })
  }

  updateSearchTerm = (term) =>{
   // e.preventDefault();
    this.setState({
      searchTerm: term
    })
    
    this.handleSubmit();
  }
  

 handleSubmit() {
  const searchUrl = 'https://www.googleapis.com/books/v1/volumes';
  let queryString = `q=${this.state.searchTerm}&filter=${this.state.bookType}&printType=${this.state.printType}`
  let url = searchUrl + "?" + queryString;
    const options = {
      method: 'GET',
      headers: {
        "key": "AIzaSyA4wPI4tqr4v83Z0sT0SMtLDrZhlmVSArU",
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res.json();
      })
      //.then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          books: data
        });
      }
      )
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

    }
render(){
 // console.log("Current ", this.state.books)
  return (
    <main className='App'>
      <h1>Google Book Search</h1>
      <SearchBar
        searchTerm = {this.state.searchTerm}
        updateBookType = {this.updateBookType}
        updatePrintType = {this.updatePrintType}
        updateSearchTerm = {this.updateSearchTerm}
        handleSubmit = {this.handleSubmit}
      />
      <BookList
        book={this.state.books}
      />
    </main>
  );
}
}

export default App;