import React, { Component } from 'react';
import './style.css';

export default class Footer extends Component {
  render() {
    return (
    	<footer>&copy;{new Date().getFullYear()}</footer>
    );
  }
}