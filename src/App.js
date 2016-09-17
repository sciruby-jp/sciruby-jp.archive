import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import Header  from './Header';
import Graph   from './Graph';
import Content from './Content';
import Footer  from './Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.ruby   = require('./ruby.json');
    this.python = require('./python.json');

    this.state = { json: this.ruby };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <StickyContainer>
          <Sticky>
            <Graph json={this.state.json} />
          </Sticky>
          <Content />
        </StickyContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
