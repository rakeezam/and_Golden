import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
      <Container fluid className="bg-light p-lg-3 p-md-3 p-3">
        <Row>
          <Col xs={6} s={4} md={4} lg={3}>
            <h4>Help & Information</h4>
              <ul>
                <li>
                  <Link to="/contact-us">Contact</Link>
                </li>
                <li>
                  <Link to="/contact-us">Delivery</Link>
                </li>
                <li>
                  <Link to="/contact-us">Returns Process</Link>
                </li>
                <li>
                <Link to="/contact-us">Order Issues</Link>
                </li>
                <li>
                <Link to="/contact-us">Size Guide</Link>
                </li>
                <li>
                <Link to="/contact-us">Store Locator</Link>
                </li>
              </ul>
          </Col>
          <Col xs={6} s={4} md={4} lg={3}>
            <h4>About</h4>
              <ul>
                <li>
                  <Link to="/about">About Golden Shoes</Link>
                </li>
                <li>
                  <Link to="/about">Join Us</Link>
                </li>
                <li>
                <Link to="/about">Gift Wrapping</Link>
              </li>
              </ul>
          </Col>
          <Col xs={6} s={4} md={4} lg={3}>
            <h4>Legal</h4>
              <ul>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                <Link to="/">Documentation</Link>
              </li>
              </ul>
          </Col>
        </Row>
        <Row className="justify-content-center">
          Golden Shoe © All Rights Reserved 2020
         </Row>
        
      </Container>
   
  )
}

export default Footer;