import React, { useEffect, useState } from "react"
import NavBar from "../../navBar/NavBar"
import Checkbox from "@material-ui/core/Checkbox"
import "./cart.css"

import { useDispatch, useSelector } from "react-redux"
import { delItem } from "../../../redux/action"
import { NavLink } from "react-router-dom"
import Footer from "../../navBar/footer/Footer"

const Cart = () => {
  const state = useSelector(state => state.addItems)
  const [cartTotal, setCartTotal] = useState(0)
  const [cartitem, setCartitems] = useState(0)
  useEffect(() => {
    setCartTotal(state.reduce((a, c) => a + c.discount * c.quantity, 0))
    setCartitems(state.reduce((a, c) => a + Number(c.quantity), 0))
  }, [])
  const dispatch = useDispatch()
  const handleClosed = item => {
    dispatch(delItem(item))
  }
  const cartItems = cartItem => {
    return (
      <div className="cart_image_box" key={cartItem.id}>
        <div className="cart_image_box1">
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          <img className="cart_main_image" src={cartItem.img} alt="" />
        </div>
        <div className="cart_sec_det">
          <div className="cart_cover">
            <h2 className="cart_des_naming">
              {cartItem.description.split(" ").splice(0, 19).join(" ")}
            </h2>
            <h2 className="cart_pricin">
              ₹{cartItem.discount * cartItem.quantity}
            </h2>
          </div>
          <p className="cart_p_tag">Eligible for free Shipping</p>
          <img
            src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
            alt=""
          />
          <div className="cart_flexing_bottom">
            <div>
              <select
                name=""
                style={{
                  height: "20px",
                  marginTop: "13px",
                  marginRight: "20px",
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <p className="cart_div_wrap" onClick={() => handleClosed(cartItem)}>
              Delete
            </p>
            <p className="cart_div_wrap">Save for later</p>
            <p className="cart_div_wrap">See more like this</p>
          </div>
        </div>
      </div>
    )
  }
  const emptyCart = () => {
    return (
      <>
        <div>
          <h1>Your Amazon Cart is empty.</h1>
          <h3>Check your Saved for later items below or continue shopping</h3>
        </div>
      </>
    )
  }
  console.log(state)

  return (
    <>
      <NavBar />

      <div className="cart_main">
        <div className="cart_first_container">
          <h1 className="cart_first_tag">Shopping Cart</h1>
          <div className="cart_deselect">
            <p className="cart_deselect_P">Deselect all items</p>
            <p className="cart_deselect_P2">Price</p>
          </div>
          {state.length !== 0 && state.map(cartItems)}
          {state.length === 0 && emptyCart()}
          <div className="cart_subTot">
            <p>
              Subtotal ({cartitem} items): ₹ {cartTotal}
            </p>
          </div>
        </div>
      </div>
      <div className="cart_second_container">
        <div className="cart_second_container_first">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
            alt=""
          />
        </div>
        <p className="cart_p_select_tag">
          Your order iseligible for Free Delivery. Select this oprion at
          checkout. Details
        </p>
        <h2>
          Subtotal ({cartitem} items): ₹ {cartTotal}
        </h2>
        <div className="gift_section_cart">
          <input type="checkbox" />
          <p>This order contains a gift</p>
        </div>
        <NavLink to="/address">
          <button className="pay_button_cart">Proceed to Buy</button>
        </NavLink>
      </div>
      <Footer />
    </>
  )
}

export default Cart
