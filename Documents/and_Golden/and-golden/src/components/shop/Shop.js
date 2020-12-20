import React, { useState, useEffect } from "react"; //, { useEffect, useState }
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link
} from "react-router-dom";
// import Product from './Product';
import axios from 'axios';
import { Container, Row, Col, Card, CardDeck, CardImg } from "react-bootstrap";

function Shop() {
  const [products, setResponseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorLoading, setHasErrorLoading] = useState(false);


  useEffect(() => {
    axios({
      "method": "GET",
      "url": "http://localhost:5000/",
      "headers": {
        "content-type": "application/json",
      }
    })
      .then((products) => {
        setResponseData(products.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error)
        setHasErrorLoading(true);
      })
  }, [products.data])

  if (errorLoading) {
    return <h1>Error, couldn't find product</h1>;
  }
  else if (isLoading) {
      return <h1>Loading</h1>;
  }

  return (
    <Container className="p-4">
        <CardDeck>
          {products.map((product, idx) => (
            <Card md={6}>
            <div className="product" key={idx}>
            <Card.Img src={"http://localhost:5000/images/" + product._id + ".jpeg"} alt={product.name + "image"} />
            <Card.Body>
                <Card.Title>
                  <Link to={"/product/" + product._id}>{product.name}</Link> 
                  <Card.Text>£{(product.price / 100).toFixed(2)}</Card.Text>
                </Card.Title>
                <ul className="list-unstyled">
                  <li>Stock: {product.stock}</li>
                  <li>£{(product.price / 100).toFixed(2)}</li>
                </ul>
            </Card.Body>
            </div>
            </Card>

          )
          )}
        </CardDeck>
    </Container>
  )
}
export { Shop };
