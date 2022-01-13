import React, { useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import "./productDetail.css"
import Rating from "@mui/material/Rating"
import StarIcon from "@mui/icons-material/Star"
import NavBar from "../../navBar/NavBar"
import { NavLink, useParams } from "react-router-dom"
import { ProductData } from "../../../db"
import { useDispatch } from "react-redux"
import { addItem, delItem } from "../../../redux/action"

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart")
  const proid = useParams()
  const proDetail = ProductData.filter(x => x.id == proid.id)
  const prod = proDetail[0]
  console.log(prod)
  const dispatch = useDispatch()
  const handleCart = prod => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(prod))
      setCartBtn("Remove from Cart")
    } else {
      dispatch(delItem(prod))
      setCartBtn("Add to Cart")
    }
  }
  return (
    <>
      <NavBar />
      <div className="productDetail_main">
        <div>
          <Carousel infiniteLoop>
            {prod.images.map(e => (
              <div className="product_detail_image">
                <img src={e} alt="" />
              </div>
            ))}
          </Carousel>
        </div>
        <div>
          <div>
            <h1 className="productDetail_heading">{prod.description}</h1>
            <Rating
              name="text-feedback"
              value={prod.rating}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <div style={{ display: "flex", margin: "5px 0px 10px 0px" }}>
              <span className="productDetail_save1 ">₹</span>
              <span className="productDetail_save2 ">{prod.discount}</span>
            </div>
            <div>
              <span className="productdetail_save31">M.R.P: </span>
              <span className="productdetail_save3"> ₹{prod.price}</span>
            </div>
            <div>
              <p>Inclusive of all taxes</p>
            </div>
          </div>
        </div>
        <div className="productDetail_card">
          <div style={{ display: "flex", margin: "5px 0px 10px 0px" }}>
            <span className="productDetail_save1 ">₹</span>
            <span className="productDetail_save2 ">{prod.discount}</span>
          </div>
          <p className="productDetail_stock">In Stock</p>
          <p>
            Sold and fulfilled by <span>Home furniture</span>
          </p>
          <div style={{ display: "flex" }}>
            <p style={{ paddingRight: "20px" }}>Quantity:</p>
            <select name="" style={{ height: "20px", marginTop: "13px" }}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="productDetail_buttons">
            <button
              className="productDetail_button1"
              onClick={() => handleCart(prod)}
            >
              {cartBtn}
            </button>
            <button className="productDetail_button1 productDetail_button2">
              <NavLink to="/checkout">Buy Now</NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
