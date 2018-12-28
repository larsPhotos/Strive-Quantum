import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './style.css';

export default class Footer extends Component {
  render() {
    return (
    	<Navbar color="dark" expand="md" className="copyright">
			<NavbarBrand>&copy;{new Date().getFullYear()}</NavbarBrand>
    	</Navbar>
    );
  }
}