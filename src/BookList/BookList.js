import React, { Component } from 'react';
import Book from '../Book/Book'


class BookList extends Component {
    render() {
        console.log(this.props)
        const booklist = this.props.items
          ? this.props.items.map((book, key) => <Book {...book} key={key} />)
          : null; 
        //  console.log(this.props.items)
        return (
          <div className="BookList">
            {booklist}
          </div>
        );
      }
    }

export default BookList;