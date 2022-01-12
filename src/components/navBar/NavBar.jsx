import React from "react"
import "./navbar.css"
// material
import LocationOnIcon from "@mui/icons-material/LocationOn"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import SearchField from "./searchField/SearchField"

const NavBar = () => {
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
            src="https://o.remove.bg/downloads/0e20bc18-82a9-4f0e-a0e3-f5a7b8f33553/kisspng-flag-of-india-national-flag-flag-of-the-united-sta-indian-flag-5ac111a1c091b6.6743178115226024017888-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="navbar_deliacc account">
          <h4>Hello, Swetha</h4>
          <h3>Account & Lists</h3>
        </div>
        <div className="navbar_hover">
          <div>
            <ShoppingCartIcon className="navbar_cart" />
          </div>
          <div className="nav_top">
            <span className="navbar_cart1">0</span>
            <span className="navbar_cart1 cart2">Cart</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
