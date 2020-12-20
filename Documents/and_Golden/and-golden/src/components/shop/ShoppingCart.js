import React, { useState, useEffect } from "react";
import axios from 'axios';
// import Success from './Success';
import {
  Redirect
} from "react-router-dom";
import{Button, Container, Card, CardDeck, Row, Col} from "react-bootstrap";

function BuyNowButton(props) {
  return (
    <Button onClick={props.buyNow()}>Buy Now</Button>
  )
}

function ShoppingCart() {
    let total = 0;
    let shoppingCart = localStorage.getItem('shoppingCart') ? JSON.parse(localStorage.getItem('shoppingCart')) : [];

    const [redirect, setRedirect] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorLoading, setHasErrorLoading] = useState(false);

    function buy(e) {
      e.preventDefault();
      axios.post("http://localhost:5000/buy", shoppingCart)
        .then((res) => {
          localStorage.setItem('shoppingCart', []);
          setRedirect("/success");
        })
        .catch((error) => {
          console.error(error)
        })
    }

    // if (errorLoading) {
    //   return <h1>Error, couldn't find product</h1>;
    // }
    // else if (isLoading) {
    //     return <h1>Loading</h1>;
    // }
    if (redirect) {
      return <Redirect to={redirect} />
    }
    else if (!shoppingCart.length) {
      return (<p>Shopping cart empty</p>)
    }
    else{
      shoppingCart.map(item => { total += item.price * item.quantity })


      return (
        <Container className="p-5 mb-4">
          <h2> Shopping Cart</h2>
          <Row lg={4}>
          {shoppingCart.map((productCart, idx) => (
            <Col lg={4} key={idx}>
            <Card>
            <div className="product">
            <Card.Img src={"http://localhost:5000/images/" + productCart._id + ".jpeg"} alt={productCart.name + "image"} />
            <Card.Body>
                <Card.Title>
                  {productCart.name}
                  <Card.Text>£{(productCart.price / 100).toFixed(2)}</Card.Text>
                </Card.Title>
                <ul className="list-unstyled mb-2 text-muted text-uppercase small">
                  <li>Quantity: {productCart.quantity}</li>
                </ul>
            </Card.Body>
            </div>
            </Card>
            </Col>
          )
          )}
          </Row>
          <Row className="float-right">
            <h5>Total: £{(total / 100).toFixed(2)}</h5>
                <BuyNowButton buyNow={(e) => buy}></BuyNowButton>
          </Row>
  
        </Container> 
      );
    } 
  }

export default ShoppingCart;

      // let shopArr = shoppingCart.map(function(productCart){
      //   return productCart._id;
      // })
      // console.log(shopArr);

      // let isDuplicate = shopArr.some(function(product, idx) {
      //   return shopArr.indexOf(product) !== idx;
      // })

      // console.log(isDuplicate);

      // if(isDuplicate === true) {
      //   shoppingCart.map(function(productCart){
      //     return productCart.quantity++;
      //   })
      // }

      // console.log(shoppingCart);
