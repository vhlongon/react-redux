import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <BookList />
      </div>
    );
  }
}
