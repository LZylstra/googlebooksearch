import React, { Component } from 'react';


class FilterOptions extends Component {
  render() {
    return (
        <div className="FilterOptions">
            <label htmlFor="Print Type:">Print Type: </label>
            <select>
                <option value = "all">All</option>
                <option value = "books">Books</option>
                <option value = "magazines">Magazines</option>
            </select>
            <label htmlFor="Book Type:">Book Type: </label>
            <select>
                <option value = "full">Full</option>
                <option value = "partial">Partial</option>
                <option value = "free-ebooks">Free ebooks</option>
                <option value = "paid-ebooks">Paid ebooks</option>
                <option value = "ebooks">All ebooks</option>
            </select>
        </div>
    );
  }
}

export default FilterOptions;