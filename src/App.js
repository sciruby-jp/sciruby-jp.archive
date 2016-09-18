import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import Header  from './Header';
import Graph   from './Graph';
import Content from './Content';
import Footer  from './Footer';
import './App.css';
import rubyJson   from './ruby.json';
import pythonJson from './python.json';
import rubyImg    from './ruby.png';
import pythonImg  from './python.png';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { imgUrl: '', json: rubyJson }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    const scroll = e.srcElement.body.scrollTop;
    var imgUrl, json;
    if (scroll <= 500) {
      imgUrl = rubyImg;
      json   = rubyJson;
    } else {
      imgUrl = pythonImg;
      json   = pythonJson;
    }

    this.setState({ imgUrl: imgUrl, json: json })
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
