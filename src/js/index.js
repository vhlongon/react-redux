import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

import css from '../scss/styles.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}

ReactDOM.render(
  <App title='React Redux app' />,
  document.querySelector('.react-root')
);
