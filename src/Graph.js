import React, {Component} from 'react';
import cytoscape from 'cytoscape';
import { conf } from './conf';

class Graph extends Component{
  componentDidMount() {
    conf.container = this.refs.cyelement;
    this.cy = cytoscape(conf);
	this.cy.layout({
        name: 'random',

        fit: true, // whether to fit to viewport
        padding: 30, // fit padding
        boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
        animate: false, // whether to transition the node positions
        animationDuration: 500, // duration of animation in ms if enabled
        animationEasing: undefined, // easing of animation if enabled
        ready: undefined, // callback on layoutready
        stop: undefined // callback on layoutstop
  	})
    this.cy.json(this.props.cyjs);
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
