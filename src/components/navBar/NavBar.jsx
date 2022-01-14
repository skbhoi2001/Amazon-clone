import React from "react"
import "./navbar.css"
import { NavLink } from "react-router-dom"
// material
import LocationOnIcon from "@mui/icons-material/LocationOn"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import SearchField from "./searchField/SearchField"
import { useSelector } from "react-redux"

const NavBar = () => {
  const state = useSelector(state => state.addItems)

  return (
    <>
      <div className="navbar_main">
        <NavLink to={"/"}>
          <div className="navbar_img ">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt=""
            />
          </div>
        </NavLink>
        <span className="navbar_in">.in</span>
        <div className="navbar_address">
          <LocationOnIcon className="navbar_location" />

          <div className="navbar_deli">
            <h4>Deliver to Swetha</h4>
            <h3>Bengaluru 562130</h3>
          </div>
        </div>
        <div className="navbar_search">
          <SearchField />
        </div>
        <div className="navabar_flag_border">
          <img className="navbar_flag" src="./flag.png" alt="" />
        </div>
        <NavLink to={`/signup`}>
          <div className="navbar_deliacc account">
            <h4>Hello, Swetha</h4>
            <h3>Account & Lists</h3>
          </div>
        </NavLink>
        <NavLink to={`/cart`}>
          <div className="navbar_hover">
            <div>
              <ShoppingCartIcon className="navbar_cart" />
            </div>
            <div className="nav_top">
              <span className="navbar_cart1">{state.length}</span>
              <span className="navbar_cart1 cart2">Cart</span>
            </div>
          </div>
        </NavLink>
      </div>
      <div className="main_second_navbar">
        <div className="display_Navbar_bottom">
          <NavLink to={`/products`}>
            <p style={{ color: "white" }} className="p_hovering">
              All
            </p>{" "}
          </NavLink>
          <p className="p_hovering">Fresh</p>
          <p className="p_hovering">Amazon Pay</p>
          <p className="p_hovering">Gift Cards</p>
          <p className="p_hovering">Buy Again</p>
          <p className="p_hovering">Health,Household & Personal Care</p>
          <p className="p_hovering">Home Improvement</p>
          <p className="p_hovering">AmazonBasics</p>
        </div>
        <div>
          <img
            className="img_logo "
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/JANART22/T1/SWM_400x39_2days._CB648813239_.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default NavBar
