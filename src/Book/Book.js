import React, { Component } from 'react';


class Book extends Component {
  render() {
      console.log(this.props)
    return (
        <div className Book>
            <img src = {this.props.items.volumeInfo.imageLinks.thumbnail}></img>
        </div>
    );
  }
}

export default Book;