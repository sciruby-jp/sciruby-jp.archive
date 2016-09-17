import React, {Component} from 'react';
import cytoscape from 'cytoscape';
import { conf } from './conf';
import './Graph.css';

class Graph extends Component{
  componentDidMount() {
    conf.container = this.refs.cyelement;
    this.cy = cytoscape(conf);
    this.cy.json(this.props.json);
    this.cy.layout({ name: 'circle' });
  }

  componentDidUpdate() {
    this.cy.json(this.props.json);
    this.cy.layout({ name: 'circle' });
  }

  componentWillUnmount() {
    this.cy.destroy();
  }

  render() {
    return <div className="Graph" ref="cyelement" />
  }
}

export default Graph;
