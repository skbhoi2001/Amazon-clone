import React, { useState } from "react"

import "./product.css"
import Rating from "@mui/material/Rating"

import { ProductData } from "../../../db"
import ProductEach from "../productEach/ProductEach"
import { LandingPage } from "../../landingPage/LandingPage"
export const Products = () => {
  const [selectedProd, setSelectedProd] = useState(ProductData)
  // product
  const handleProduct = prod => {
    console.log(prod)
    let res = ProductData.filter(a => a.product == prod)
    setSelectedProd(res)
  }
  const handleProductall = () => {
    setSelectedProd(ProductData)
  }
  // price

  const handlePrice = (p1, p2) => {
    console.log(p1)
    console.log(ProductData)
    let pri = ProductData.filter(a => a.discount > p1).filter(
      a => a.discount <= p2
    )
    setSelectedProd(pri)
    console.log(pri)
  }
  // rating
  const handleRatings = value => {
    let rat = ProductData.filter(a => a.rating > value)
    setSelectedProd(rat)
  }
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
              <p className="product_p" onClick={() => handleProductall()}>
                All Prices
              </p>
              <p className="product_p" onClick={() => handlePrice(0, 500)}>
                Under ₹500
              </p>
              <p className="product_p" onClick={() => handlePrice(500, 1000)}>
                ₹500-₹1,000
              </p>
              <p className="product_p" onClick={() => handlePrice(1000, 2000)}>
                ₹1,000-₹2,000
              </p>
            </div>
          </div>
          <div className="borderTop">
            <h2 className="product_h2 ">Categories</h2>
            <div className="product_pricing">
              <p className="product_p" onClick={() => handleProductall()}>
                All
              </p>
              <p className="product_p" onClick={() => handleProduct("laptop")}>
                Laptop
              </p>
              <p
                className="product_p"
                onClick={() => handleProduct("footware")}
              >
                Footware
              </p>
              <p className="product_p" onClick={() => handleProduct("bottom")}>
                Bottom
              </p>
              <p className="product_p" onClick={() => handleProduct("tops")}>
                Tops
              </p>
              <p className="product_p" onClick={() => handleProduct("attire")}>
                Attire
              </p>
              <p className="product_p" onClick={() => handleProduct("camera")}>
                Cameras
              </p>
              <p
                className="product_p"
                onClick={() => handleProduct("smartphone")}
              >
                SmartPhones
              </p>
            </div>
          </div>
          <div className="borderTop">
            <h2 className="product_h2 ">Customer Reviews</h2>
            <div className="product_pricing">
              <p className="product_p" onClick={() => handleRatings(4)}>
                <Rating name="read-only" max={4} value={4} readOnly /> &up
              </p>
              <p className="product_p" onClick={() => handleRatings(3)}>
                <Rating name="read-only" max={3} value={3} readOnly /> &up
              </p>
              <p className="product_p" onClick={() => handleRatings(2)}>
                <Rating name="read-only" max={2} value={2} readOnly /> &up
              </p>
              <p className="product_p" onClick={() => handleRatings(1)}>
                <Rating name="read-only" max={1} value={1} readOnly /> &up
              </p>
            </div>
          </div>
        </div>

        <div className="product_show">
          <p>
            Price and other deatils may vary based on product size and color
          </p>
          <div className="grid_boxing">
            {selectedProd.map(prod => (
              <ProductEach data={prod} key={prod.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
