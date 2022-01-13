import React from "react"
import { LandingPage } from "../landingPage/LandingPage"
import "./product.css"
import Rating from "@mui/material/Rating"
import ProductEach from "./productEach/ProductEach"
export const Product = () => {
  return (
    <>
      <LandingPage />
      <div className="product_heading"></div>
      <div className="product_main">
        <div className="product_filter">
          <h2 className="product_h2 borderBottom">Filters</h2>
          <div>
            <h2 className="product_h2">price</h2>
            <div className="product_pricing">
              <p className="product_p">All Prices</p>
              <p className="product_p">Under ₹500</p>
              <p className="product_p">₹500-₹1,000</p>
              <p className="product_p">₹1,000-₹2,000</p>
            </div>
          </div>
          <div className="borderTop">
            <h2 className="product_h2 ">Categories</h2>
            <div className="product_pricing">
              <p className="product_p">Laptop</p>
              <p className="product_p">Footware</p>
              <p className="product_p">Bottom</p>
              <p className="product_p">Tops</p>
              <p className="product_p">Attire</p>
              <p className="product_p">Camers</p>
              <p className="product_p">SmartPhones</p>
            </div>
          </div>
          <div className="borderTop">
            <h2 className="product_h2 ">Customer Reviews</h2>
            <div className="product_pricing">
              <p className="product_p">
                <Rating name="read-only" max={4} value={4} readOnly /> &up
              </p>
              <p className="product_p">
                <Rating name="read-only" max={3} value={3} readOnly /> &up
              </p>
              <p className="product_p">
                <Rating name="read-only" max={2} value={2} readOnly /> &up
              </p>
              <p className="product_p">
                <Rating name="read-only" max={1} value={1} readOnly /> &up
              </p>
            </div>
          </div>
        </div>

        <div className="product_show">
          <p>
            Price and other deatils may vary based on product size and color
          </p>
          <ProductEach />
        </div>
      </div>
    </>
  )
}
