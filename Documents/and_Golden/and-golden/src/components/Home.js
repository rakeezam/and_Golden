import React from "react";
import {Image, Row, Col, Container } from 'react-bootstrap';
// import tboots1 from './assets/images/tboots1.png'
// import {} from './public/images'
// import {tboots1} from '../images'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    // const imagePath = "process.env.PUBLIC_URL + '/assets/images/";
    
    return (
      <Container className="p-lg-3 p-md-2 p-2" >
        <Row className="justify-content-center p-3">
          <h2>Find yourself the perfect pair of shoes hihggg</h2>
        </Row>
        <Row md={12} lg= {12}>
          <Col xs={6} md={4}>
            <Image src={process.env.PUBLIC_URL + "/images/tboots1.jpeg"} alt ="black-boots" thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src={process.env.PUBLIC_URL + "/images/tbootsgirl2.jpeg" } alt ="black-boots" thumbnail />
          </Col>
          <Col md={4} className = 'd-md-block d-none'>
            <Image src={process.env.PUBLIC_URL + "/images/tboots3.jpeg"} alt ="black-boots" thumbnail />
          </Col>
        </Row>
      </Container>
    )
}
export default Home;

// <Image src={process.env.PUBLIC_URL + '/image/tboots1.png'} alt ="so so" thumbnail />