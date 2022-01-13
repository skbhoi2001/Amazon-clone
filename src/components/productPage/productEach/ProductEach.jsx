import React from "react"

import Rating from "@mui/material/Rating"
import StarIcon from "@mui/icons-material/Star"
import "./productEach.css"
import { NavLink } from "react-router-dom"

//import Pagination1 from "../pagination/Pagination"
const ProductEach = ({ data }) => {
  //   const products = useSelector(state => state.allProducts.products)
  //   const [currentPage, setCurrentPage] = React.useState(1)
  //   const [postsPerPage] = React.useState(15)
  // Get current posts
  //const indexOfLastPost = currentPage * postsPerPage
  //const indexOfFirstPost = indexOfLastPost - postsPerPage
  //const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  //const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <>
      <NavLink to={`/products/${data.id}`}>
        <div className="product_container" key={data.id}>
          <img className="product_image" src={data.img} alt="item.title" />
          <div style={{ padding: "10px" }}>
            <p className="products_p1">{data.title}</p>
            <Rating
              name="text-feedback"
              value={data.rating}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <div className="products_price">
              <span className="product_save1">₹</span>
              <span className="product_save2">{data.discount}</span>
              <span className="product_save3">₹{data.price}</span>
            </div>

            <p className="product_span">
              <span>Get it </span>
              <span className="product_span1">
                Friday, january 28 - Saturday, january 29
              </span>
            </p>
          </div>
        </div>
      </NavLink>
      {/* <Pagination1
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      /> */}
    </>
  )
}

export default ProductEach
