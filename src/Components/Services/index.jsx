import React, { Component } from 'react';
import Banner from '../Banner';

export default class Welcome extends Component {
  render() {
  	const image_1 = require('../../photos/data_analysis.jpg');
  	const image_2 = require('../../photos/scrum.jpg');
  	console.log(image_1 + ", typeof = " + (typeof image_1));
    return (
      <div>
       	<Banner image={ image_1 } title='data man'/>
       	<Banner image={ image_2 } title='scrum stuff'/>
      </div>
    );
  }
}


