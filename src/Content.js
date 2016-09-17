import React, { Component } from 'react';
import Graph from './Graph';
import './Content.css';

class Content extends Component {
  constructor(props) {
    super(props)

    this.ruby   = require('./ruby.json');
    this.python = require('./python.json');

    this.state = { json: this.ruby };
  }

  componentDidMount() {
  }

  handleClickRuby = (e) => {
    this.setState({ json: this.ruby });
  }

  handleClickPython = (e) => {
    this.setState({ json: this.python });
  }

  render() {
    return (
      <div className="Content">
        <Graph json={this.state.json} />
        <button onClick={this.handleClickRuby}>ruby</button>
        <button onClick={this.handleClickPython}>python</button>
      </div>
    );
  }
}

export default Content;
