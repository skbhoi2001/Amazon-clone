import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Product from "../component/Product/Product"
import ProductDetail from "../component/productDetail/ProductDetail"

const AllRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/product" exact component={Product} />
          <Route path="/product/:product_id" component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </>
  )
}

export default AllRouter
