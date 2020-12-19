import React, { useEffect, useState } from "react";
import axios from 'axios';

function BuyNowButton(props) {
  return (
    <button type="button" onClick={props.buyNow()}>Buy Now</button>
  )
}

function ShoppingCart() {
    let total = 0;
    let shoppingCart = localStorage.getItem('shoppingCart') ? JSON.parse(localStorage.getItem('shoppingCart')) : [];

  function buy(e) {
    e.preventDefault();
    axios.post("http://localhost:5000/buy", shoppingCart)
      .then((res) => {
        localStorage.setItem('shoppingCart', []);
        // Send them to successful page
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
    if (!shoppingCart.length) {
      return <p>Shopping cart empty</p>
    }else{
      shoppingCart.map(item => { total += item.price * item.quantity })
      
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

      return (
        <div className="ShoppingCart">
          <h2> Shopping Cart</h2>

          <div className ="products">
            <h1>Total: £{(total / 100).toFixed(2)}</h1>
            {shoppingCart.map((productCart, idx)=> (
              <div className="product" key={idx}>
              <ul>
                <li><img src={"http://localhost:5000/images/" + productCart._id + ".jpeg"} alt={productCart.name + "image"} /></li>
                <li>{productCart.name}</li>
                <li>Quantity: {productCart.quantity}</li>
                <li>£{(productCart.price / 100).toFixed(2)}</li>
              </ul>
              </div>
            ))}
          </div>
          <BuyNowButton buyNow={(e) => buy}/>
        </div> 
      );
    } 
  }

export default ShoppingCart;

    // function NotSure() {
    //     // let [shoppingCart, setQuant] = useState(shoppingCart)

    //     let result = shoppingCart.map(productCart=> {
    //                       if (productCart._id === productCart._id) {
    //                         productCart.quantity++ 
    //                       }else{
    //                         productCart.quantity = 1;
    //                       }
    //                   })
    //     console.log(result);
        

    // }
    // NotSure();




// let url = "http://localhost:5000/";
// const [product, setResponseData] = useState({});
// const [isLoading, setIsLoading] = useState(true);
// const [errorLoading, setHasErrorLoading] = useState(false);

// useEffect(() => {
//   axios({
//       "method": "GET",
//       "url": url,
//       "headers": {
//           "content-type": "application/json",
//       }
//   })
//       .then((product) => {
//           console.log(product.data)
//           setResponseData(product.data);
//           setIsLoading(false);
//       })
//       .catch((error) => {
//           console.log(error)
//           setHasErrorLoading(true);
//       })
// }, [product.data])