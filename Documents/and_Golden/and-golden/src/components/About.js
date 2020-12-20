import React from "react";
import {Container} from "react-bootstrap";

function About() {
    return (
      <Container className="p-5">
          <h2>About Us</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <h4>Join Us</h4>
          <p>Careers at Golden Shoe!</p>
          <h4>Gift Wrapping</h4>
          <p>Providing gift-wrapping services</p>
      </Container>
    )
  }

export default About;