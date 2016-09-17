import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import Header  from './Header';
import Graph   from './Graph';
import Content from './Content';
import Footer  from './Footer';
import './App.css';
import rubyImg from './ruby.png';
import pythonImg from './python.png';

class App extends Component {
  constructor(props) {
    super(props)

    this.ruby   = require('./ruby.json');
    this.python = require('./python.json');

    this.state = { imgUrl: '', json: this.ruby }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    const scroll = e.srcElement.body.scrollTop;
    if (scroll < 200) {
      this.setState({ imgUrl: '', json: this.ruby });
    } else if (scroll >= 200 && scroll <= 500) {
      this.setState({ imgUrl: rubyImg, json: this.ruby });
    } else {
      this.setState({ imgUrl: pythonImg, json: this.python });
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <StickyContainer>
          <Sticky>
            <Graph json={this.state.json} />
          </Sticky>
          <Content imgUrl={this.state.imgUrl}/>
        </StickyContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
