import React, { useState, useEffect, useLocalStorage } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams,
    Link
} from "react-router-dom";
import {Container, Row, Col, Button, Image} from 'react-bootstrap';

function AddToCartButton(props) {
    if (props.stock <= 0) {
        return (<Button disabled>Out of Stock</Button>);
    }
    return (<Button onClick={props.addToCart()}>Add To Cart</Button>);

}

function Product() {
    let { id } = useParams();
    let url = "http://localhost:5000/" + id;
    const [product, setResponseData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errorLoading, setHasErrorLoading] = useState(false);

    useEffect(() => {
        axios({
            "method": "GET",
            "url": url,
            "headers": {
                "content-type": "application/json",
            }
        })
            .then((product) => {
                setResponseData(product.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setHasErrorLoading(true);
            })
    }, [product.data])
    
    function handleAddToCart(e) {
        e.preventDefault();
        let cartItemsString = localStorage.getItem('shoppingCart');
        let cartItemsArray = cartItemsString ? JSON.parse(cartItemsString) : [];
        let found = false;
        
        cartItemsArray.map((item) => 
        {
            if (item._id == product._id) {
                found = true;
                if(item.quantity < product.stock)
                    item.quantity++;
                return;
            }
        });
        if(!found){
            product.quantity++;
            cartItemsArray.push(product);
        }

        localStorage.setItem('shoppingCart', JSON.stringify(cartItemsArray));
    }

    if (errorLoading) {
        return <h1>Error, couldn't find product</h1>;
    }
    else if (isLoading) {
        return <h1>Loading</h1>;
    }
    return (
        <Container>
            <Row>
                <Col lg={6} mg={6}>
                    <Image className="img-fluid"src={"http://localhost:5000/images/" + product._id + ".jpeg"} alt={product.name + "image"} />
                </Col>
                <Col className="p-5">
                    <h5>{product.name}</h5>
                    <p className="mb-2 text-muted text-uppercase small">{product.category}</p>
                    <p>{product.description}</p>
                    <p className="mb-2 text-muted text-uppercase small">Stock Available: {product.stock}</p>
                    <p>£{(product.price / 100).toFixed(2)}</p>
                    <AddToCartButton stock={product.stock} addToCart={(e) => handleAddToCart}></AddToCartButton>
                </Col>
                <div>

                    

                </div>
            </Row>
        </Container>
    );
}

export default Product;

// <ul>
// <li><img src={"http://localhost:5000/images/" + product._id + ".jpeg"} alt={product.name + "image"} /></li>
// <li><h3>{product.name}</h3></li>
// <li>Stock: {product.stock}</li>
// <li> £{(product.price / 100).toFixed(2)}</li>
// </ul>
