import React, {Component} from 'react';
import cytoscape from 'cytoscape';
import { conf } from './conf';
var ruby = require('./ruby.cyjs');

class Graph extends Component{
  componentDidMount(){
    conf.container = this.refs.cyelement;
    let cy = cytoscape(conf);
    this.cy = cy;
    cy.json(ruby);
  }

  shouldComponentUpdate(){
    return false;
  }

  componentWillReceiveProps(nextProps){
    this.cy.json(nextProps);
  }

  componentWillUnmount(){
    this.cy.destroy();
  }

  render(){
    let cyStyle = {
      height: '500px',
      display: 'block'
    };

    return <div style={cyStyle} ref="cyelement" />
  }
}

export default Graph;