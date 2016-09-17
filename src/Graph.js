import React, {Component} from 'react';
import cytoscape from 'cytoscape';
import { conf } from './conf';

class Graph extends Component{
  componentDidMount() {
    conf.container = this.refs.cyelement;
    this.cy = cytoscape(conf);
    this.cy.json(this.props.cyjs);
    this.cy.layout({name: "circle"});
  }

  componentDidUpdate() {
    this.cy.json(this.props.cyjs);
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
