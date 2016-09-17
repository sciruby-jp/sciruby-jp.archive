import React, { Component } from 'react';
import Graph from './Graph';
import './Content.css';

class Content extends Component {
  constructor(props) {
    super(props)

    this.ruby   = require('./ruby.cyjs');
    this.python = require('./python.cyjs');

    this.state = { cyjs: this.python };
  }

  componentDidMount() {
  }

  handleClickRuby = (e) => {
    this.setState({ cyjs: this.ruby });
  }

  handleClickPython = (e) => {
    this.setState({ cyjs: this.python });
  }

  render() {
    return (
      <div className="Content">
        <div>
        <h3><span>SciRuby</span>へようこそ</h3>
        </div>
        <Graph cyjs={this.state.cyjs} />
        <button onClick={this.handleClickRuby}>ruby</button>
        <button onClick={this.handleClickPython}>python</button>
      </div>
    );
  }
}

export default Content;
