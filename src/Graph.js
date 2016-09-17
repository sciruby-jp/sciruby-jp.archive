import React, {Component} from 'react';
import cytoscape from 'cytoscape';
import { conf } from './conf';
import './Graph.css';

class Graph extends Component{
  componentDidMount() {
    conf.container = this.refs.cyelement;
    this.cy = cytoscape(conf);
    this.cy.json(this.props.json);
    this.cy.layout({ name: 'preset' });
    this.cy.on('tap', 'node', function(){
        window.open(this.data('github_url'));
    });
  }

  componentDidUpdate() {
    this.cy.json(this.props.json);
    this.cy.layout({ name: 'preset' });
    this.cy.on('tap', 'node', function(){
        window.open(this.data('github_url'));
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
