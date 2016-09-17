import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import cytoscape from 'cytoscape';
import { conf } from './conf';
import './Graph.css';

const fadeTime = 500;

class Graph extends Component{
  componentDidMount() {
    conf.container = this.refs.cyelement;
    this.cy = cytoscape(conf);
    this.updateJson();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.json.elements.nodes.length == nextProps.json.elements.nodes.length
     && this.props.json.elements.edges.length == nextProps.json.elements.edges.length) return;

    var elem = ReactDOM.findDOMNode(this);
    window.requestAnimationFrame(function() {
      elem.style.transition = `opacity ${fadeTime}ms`;
      elem.style.opacity = 0;
    });
    setTimeout(function() { this.updateJson() }.bind(this), fadeTime);
  }

  updateJson() {
    this.cy.json(this.props.json);
    this.cy.layout({ name: 'preset' });
    this.cy.on('tap', 'node', function(){ window.open(this.data('github_url')) });

    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      elem.style.transition = `opacity ${fadeTime}ms`;
      elem.style.opacity = 1;
    });
  }

  componentWillUnmount() {
    this.cy.destroy();
  }

  render() {
    return <div className="Graph" ref="cyelement" />
  }
}

export default Graph;
