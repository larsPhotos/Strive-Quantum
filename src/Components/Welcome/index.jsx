import React, { Component } from 'react';
import Banner from '../Banner';

export default class Welcome extends Component {
  render() {
  	const image_2 = require('../../photos/scrum.jpg');

    return (
      <div>
      	<h1>welcome section</h1>
        <p>
        	
        </p>
       	<Banner image={ image_2 } title='scrum stuff'/>
        
      </div>
    );
  }
}

