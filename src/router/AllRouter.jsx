import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Cart from "../Components/productPage/cart/Cart"
import CheckOutPage from "../Components/productPage/checkoutPage/CheckOutPage"
import PaymentDetail from "../Components/productPage/checkoutPage/payment/PaymentDetail"
import PlacedSuccessPage from "../Components/productPage/checkoutPage/placedSuccessPage/PlacedSuccessPage"
import ReviewPage from "../Components/productPage/checkoutPage/reviewPage/ReviewPage"
import { Products } from "../Components/productPage/product/Product"
import ProductDetail from "../Components/productPage/productDetail/ProductDetail"
import { Signup } from "../Components/navBar/signupPage/Signup"
import Login from "../Components/navBar/loginPage/loginpage"
import { LandingPage } from "../Components/landingPage/LandingPage"
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
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  )
}
export default AllRouter
