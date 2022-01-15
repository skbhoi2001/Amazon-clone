import React, { useState } from "react"

import "./product.css"
import Rating from "@mui/material/Rating"

import { ProductData } from "../../../db"
import ProductEach from "../productEach/ProductEach"

import NavBar from "../../navBar/NavBar"
import Pagination1 from "../pagination/Pagination"

export const Products = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = React.useState(10)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = ProductData.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => setCurrentPage(pageNumber)
  console.log(paginate)
  const [selectedProd, setSelectedProd] = useState(currentPosts)
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
      <NavBar />

      <div className="product_main">
        <div className="product_filter">
          <h2 className="product_h2 borderBottom">Filters</h2>
          <div>
            <h2 className="product_h2">price</h2>
            <div className="product_pricing">
              <p className="product_p" onClick={() => handleProductall()}>
                All Prices
              </p>
              <p className="product_p" onClick={() => handlePrice(0, 1000)}>
                Under ₹1000
              </p>
              <p className="product_p" onClick={() => handlePrice(1000, 3000)}>
                ₹1,000-₹3,000
              </p>
              <p className="product_p" onClick={() => handlePrice(3000, 6000)}>
                ₹3,000-₹6,000
              </p>
              <p
                className="product_p"
                onClick={() => handlePrice(6000, 199000)}
              >
                ₹6,000 above
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
              <ProductEach
                data={prod}
                key={prod.id}
                postsPerPage={postsPerPage}
                totalPosts={ProductData.length}
                paginate={paginate}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
