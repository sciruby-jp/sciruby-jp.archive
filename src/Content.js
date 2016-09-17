import React, { Component } from 'react';
import Graph from './Graph';
import './Content.css';

class Content extends Component {
  constructor(props) {
    super(props)

    this.ruby   = require('./ruby.json');
    this.python = require('./python.json');

    this.state = { json: this.python };
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
        <div>
        <h3><span>SciRuby</span>へようこそ</h3>
        </div>
        <Graph json={this.state.json} />
        <button onClick={this.handleClickRuby}>ruby</button>
        <button onClick={this.handleClickPython}>python</button>
      </div>
    );
  }
}

export default Content;
