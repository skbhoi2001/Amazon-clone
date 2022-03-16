import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Cart from "../components/productPage/cart/Cart"
import CheckOutPage from "../components/productPage/checkoutPage/CheckOutPage"
import PaymentDetail from "../components/productPage/checkoutPage/payment/PaymentDetail"
import PlacedSuccessPage from "../components/productPage/checkoutPage/placedSuccessPage/PlacedSuccessPage"
import ReviewPage from "../components/productPage/checkoutPage/reviewPage/ReviewPage"
import { Products } from "../components/productPage/product/Product"
import ProductDetail from "../components/productPage/productDetail/ProductDetail"
import { Signup } from "../components/navBar/signupPage/Signup"
import Login from "../components/navBar/loginPage/loginpage"
import { LandingPage } from "../components/landingPage/LandingPage"
import Account from "../components/Account/Account"
import Address from "../components/Address/Address"

//import AddressMain from "../Components/Address/AddressMain"

import AddAddress from "../components/Address/AddAddress"
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
          <Route exact path="/account" component={Account} />
          <Route exact path="/address" component={Address} />
          <Route exact path="/addAddress" component={AddAddress} />
        </Switch>
      </Router>
    </>
  )
}
export default AllRouter
