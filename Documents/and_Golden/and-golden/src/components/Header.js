import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import {Nav,  Navbar, NavDropdown, Carousel } from 'react-bootstrap';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import FormControl from 'react-bootstrap/FormControl';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

function SiteHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/"><h1>Golden Shoe</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
          <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/shopping-cart">Shopping Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
  }

export default SiteHeader;