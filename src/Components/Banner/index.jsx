import React, { Component } from 'react';
import { Media } from 'reactstrap';

export default class Example extends Component {
  render() {
  	const { image, title } = this.props;
  	return (
    <Media>
      <Media left href="#">
        <Media object src={image} style={{maxWidth: '100vw', zIndex: '-1'}} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
        	{title}
        </Media>
      </Media>
    </Media>
  );
  }
};