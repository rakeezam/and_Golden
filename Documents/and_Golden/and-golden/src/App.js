import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Link
} from "react-router-dom";
import './App.css';
import SiteHeader from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import {Shop} from './components/shop/Shop';
import Contact from './components/Contact';
import Error from './components/Error';
import Product from "./components/shop/Product";
import ShoppingCart from "./components/shop/ShoppingCart";
import Container from "react-bootstrap/Container";
import Success from "./components/shop/Success";


function App() {

    return (
      <Router>
        <SiteHeader />
        <Container>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/shop">
                <Shop />
              </Route>
              <Route path="/contact-us">
                <Contact />
              </Route>
              <Route path="/product/:id">
                <Product />
              </Route>
              <Route path="/shopping-cart">
                <ShoppingCart />
              </Route>
              <Route path="/success">
                <Success />
              </Route>
              <Route component={Error} />
            </Switch>
          </div>
        </Container>
        <Footer/>
      </Router>
    );
}


export default App;



// function Header() {
//   return (
//     <nav>
//       <h1>Golden Shoes</h1>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/shop">Shop</Link>
//         </li>
//         <li>
//           <Link to="/contact-us">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//     )
// }

//What worked for export class extends
    // state = {
    //     products:[]
    // };

    // componentDidMount() {
    //   Axios.get("http://localhost:5000/")
    //     .then(res=>{
    //       console.log(res);
    //       this.setState({products:res.data})
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //   })

    // }