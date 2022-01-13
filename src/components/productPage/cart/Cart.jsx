import React from "react"
import NavBar from "../../navBar/NavBar"
import "./cart.css"
const Cart = () => {
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
          <div className="cart_image_box">
            <div className="cart_image_box1">
              <input className="cart_checkbox" type="checkbox" />
              <img
                src="https://m.media-amazon.com/images/I/71dYN2wamsS._AC_AA180_.jpg"
                alt=""
              />
            </div>
            <div className="cart_sec_det">
              <div className="cart_cover">
                <h2 className="cart_des_naming">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis quos officiis recusandae, fugit quisquam asperiores?
                  Expedita alias, sint odit hic dolores iste sunt enim
                  dignissimos eius recusandae quas minima in!
                </h2>
                <h2 className="cart_pricin">₹899</h2>
              </div>
              <p className="cart_p_tag">Eligible for free Shipping</p>
              <img
                src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
                alt=""
              />
              <div className="cart_flexing_bottom">
                <div></div>
                <p className="cart_div_wrap">Delete</p>
                <p className="cart_div_wrap">Save for later</p>
                <p className="cart_div_wrap">See more like this</p>
              </div>
            </div>
          </div>
          <div className="cart_subTot">
            <p>Subtotal (2 items): ₹ 1,2222</p>
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
          <h2>Subtotal (2 items): ₹1,6333</h2>
          <div className="gift_section_cart">
            <input type="checkbox" />
            <p>This order contains a gift</p>
          </div>
          <button className="pay_button_cart">Proceed to Buy</button>
        </div>
      </div>
    </>
  )
}

export default Cart
