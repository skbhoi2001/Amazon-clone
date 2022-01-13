import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { LandingPage } from "../components/landingPage/LandingPage"
import Cart from "../components/productPage/cart/Cart"
import { Products } from "../components/productPage/product/Product"

import ProductDetail from "../components/productPage/productDetail/ProductDetail"

function AllRouter() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/products/:id" component={ProductDetail} />
        </Switch>
      </Router>
    </>
  )
}
export default AllRouter
