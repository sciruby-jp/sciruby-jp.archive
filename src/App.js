import React, { Component } from 'react';
import Graph from './Graph';
import './App.css';

class App extends Component {
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
      <div className="App">
        <button onClick={this.handleClickRuby}>ruby</button>
        <button onClick={this.handleClickPython}>python</button>
        <Graph cyjs={this.state.cyjs} />
      </div>
    );
  }
}

export default App;
