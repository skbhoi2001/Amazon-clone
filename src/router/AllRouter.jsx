import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { LandingPage } from "../components/landingPage/LandingPage"
import Cart from "../components/productPage/cart/Cart"
import CheckOutPage from "../components/productPage/checkoutPage/CheckOutPage"
import PaymentDetail from "../components/productPage/checkoutPage/payment/PaymentDetail"
import PlacedSuccessPage from "../components/productPage/checkoutPage/placedSuccessPage/PlacedSuccessPage"
import ReviewPage from "../components/productPage/checkoutPage/reviewPage/ReviewPage"
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
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route exact path="/next" component={PaymentDetail} />
          <Route exact path="/next2" component={ReviewPage} />
          <Route exact path="/placed" component={PlacedSuccessPage} />
        </Switch>
      </Router>
    </>
  )
}
export default AllRouter
