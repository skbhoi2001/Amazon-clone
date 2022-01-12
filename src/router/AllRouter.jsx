import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Product from "../component/Product/Product"
const AllRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/product" exact component={Product} />
        </Switch>
      </Router>
    </>
  )
}

export default AllRouter
