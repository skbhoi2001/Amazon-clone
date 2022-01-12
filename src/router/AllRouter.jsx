import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { LandingPage } from "../components/landingPage/LandingPage"
export const AllRouter = () => {
import Product from "../component/Product/Product"
const AllRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/product" exact component={Product} />
        </Switch>
      </Router>
    </>
  )
}

export default AllRouter
