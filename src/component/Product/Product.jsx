import React, { useEffect } from "react"
import "./product.css"
import Rating from "@mui/material/Rating"
import StarIcon from "@mui/icons-material/Star"

import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import axios from "axios"
import { getProducts } from "../../reduxs/actions/productActions"

import Pagination1 from "../pagination/Pagination"

const Product = () => {
  const products = useSelector(state => state.allProducts.products)

  const [currentPage, setCurrentPage] = React.useState(1)
  const [postsPerPage] = React.useState(15)
  const prod = "shoes"
  const dispatch = useDispatch()
  const getProduct = async () => {
    const response = await axios
      .get(
        `https://serpapi.com/search.json?engine=walmart&query=${prod}&api_key=adf094f424eaf9d4a30af607e33833c06f551834dc546131c8125fff0876d7e9`
      )
      .catch(err => {
        console.log("ERRE", err)
      })
    // console.log(response.data.organic_results)
    dispatch(getProducts(response.data.organic_results))
  }

  useEffect(() => {
    getProduct()
  }, [])
  console.log("products", products)
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <>
      <div className="grid_boxing">
        {currentPosts.map(product => {
          return (
            <Link to={`/product/${product.product_id}`}>
              <div className="product_container" key={product.product_id}>
                <img
                  className="product_image"
                  src={product.thumbnail}
                  alt="item.title"
                />
                <div style={{ padding: "10px" }}>
                  <p className="product_p">{product.description}</p>
                  <Rating
                    name="text-feedback"
                    value={product.rating}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <div className="product_price">
                    <span className="product_save1">$</span>
                    <span className="product_save2">
                      {product.primary_offer.min_price}
                    </span>
                    <span className="product_save3">
                      ${product.primary_offer.offer_price}
                    </span>
                  </div>

                  <p className="product_span">
                    <span>{product.fulfillment_badges}</span>
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      <Pagination1
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />
    </>
  )
}

export default Product
