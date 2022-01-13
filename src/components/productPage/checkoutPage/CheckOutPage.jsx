import React from "react"
import { NavLink } from "react-router-dom"
import "./checkout.css"
const CheckOutPage = () => {
  return (
    <>
      <div className="checkout_main">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/checkout-spc-address-banner._CB485947649_.gif"
          alt=""
        />
        <h1 className="checout_headin">Select a delivery address</h1>
        <p style={{ marginBottom: "30px" }}>
          Is the address you'd like to use displayed below? if so, click the
          corresponding "Delivery to this address" button .Or you can{" "}
          <span style={{ color: "blue" }}>enter a new delivery address.</span>
        </p>
        <hr />

        <div className="checkout_addres">
          <h3>Swetha V</h3>
          <p className="check_para">#15</p>
          <p className="check_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          </p>
          <p className="check_para"> India</p>
          <p className="check_para1">Add delivery instructions</p>
          <button className="check_btn">
            <NavLink to="/next">Delivery to this address</NavLink>
          </button>
        </div>
      </div>
    </>
  )
}

export default CheckOutPage
