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

function AddToCartButton(props) {
    if (props.stock === 0) {
        return (<button type="button" disabled>Out of Stock</button>);
    }
    return (<button type="button" onClick={props.addToCart()}>Add To Cart</button>);

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
    let cartItemsArray = cartItemsString ? JSON.parse(cartItemsString) : [product];
    cartItemsArray.map((item) =>
    {
        if (item._id == product._id && item.quantity < product.stock) {
            item.quantity++
        }
    });

    localStorage.setItem('shoppingCart', JSON.stringify(cartItemsArray));
    console.log(product._id);
  }

    if (errorLoading) {
        return <h1>Error, couldn't find product</h1>;
    }
    else if (isLoading) {
        return <h1>Loading</h1>;
    }
    return (
        <div>
            <ul>
                <li><img src={"http://localhost:5000/images/" + product._id + ".jpeg"} alt={product.name + "image"} /></li>
                <li><h3>{product.name}</h3></li>
                <li>Stock: {product.stock}</li>
                <li> £{(product.price / 100).toFixed(2)}</li>
            </ul>
            <AddToCartButton stock={product.stock} addToCart={(e) => handleAddToCart}></AddToCartButton>

        </div>
    );
}

export default Product;
