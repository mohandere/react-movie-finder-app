import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Movie App</Navbar.Brand>
      <Navbar.Toggle aria-controls="primary-navigation" />
      <Navbar.Collapse id="primary-navigation">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/explore">
            Explore
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
