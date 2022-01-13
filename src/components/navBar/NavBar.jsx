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
        <div className="navbar_img ">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </div>
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
          <img
            className="navbar_flag"
            src="https://o.remove.bg/downloads/e3b2970e-cde2-408e-994d-8ca772b1e1ac/flag-of-india-national-flag-flag-of-the-united-states-indian-flag-thumbnail-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="navbar_deliacc account">
          <h4>Hello, Swetha</h4>
          <h3>Account & Lists</h3>
        </div>
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
      <NavLink to={`/products`}>
        <div>products</div>
      </NavLink>
    </>
  )
}

export default NavBar
