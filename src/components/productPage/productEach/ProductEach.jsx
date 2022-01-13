import React from "react"

import Rating from "@mui/material/Rating"
import StarIcon from "@mui/icons-material/Star"
import "./productEach.css"
//import Pagination1 from "../pagination/Pagination"
const ProductEach = () => {
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
    <div className="grid_boxing">
      <div className="product_container">
        <img
          className="product_image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYDTaA-oYogfMDYcmuikmTeu-NrRmB2JvECljLl6XeYJ5FvMhUXgAUkaunT1TL6ocNbE&usqp=CAU"
          alt="item.title"
        />
        <div style={{ padding: "10px" }}>
          <p className="products_p1">aleshfilaugbliug</p>
          <Rating
            name="text-feedback"
            value={4}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <div className="products_price">
            <span className="product_save1">₹</span>
            <span className="product_save2">87532</span>
            <span className="product_save3">₹75,999</span>
          </div>

          <p className="product_span">
            <span>Get it </span>
            <span className="product_span1">
              Friday, january 28 - Saturday, january 29
            </span>
          </p>
        </div>
      </div>
      <div className="product_container">
        <img
          className="product_image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYDTaA-oYogfMDYcmuikmTeu-NrRmB2JvECljLl6XeYJ5FvMhUXgAUkaunT1TL6ocNbE&usqp=CAU"
          alt="item.title"
        />
        <div style={{ padding: "10px" }}>
          <p className="products_p1">aleshfilaugbliug</p>
          <Rating
            name="text-feedback"
            value={4}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <div className="products_price">
            <span className="product_save1">₹</span>
            <span className="product_save2">87532</span>
            <span className="product_save3">₹75,999</span>
          </div>

          <p className="product_span">
            <span>Get it </span>
            <span className="product_span1">
              Friday, january 28 - Saturday, january 29
            </span>
          </p>
        </div>
      </div>
      <div className="product_container">
        <img
          className="product_image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYDTaA-oYogfMDYcmuikmTeu-NrRmB2JvECljLl6XeYJ5FvMhUXgAUkaunT1TL6ocNbE&usqp=CAU"
          alt="item.title"
        />
        <div style={{ padding: "10px" }}>
          <p className="products_p1">aleshfilaugbliug</p>
          <Rating
            name="text-feedback"
            value={4}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <div className="products_price">
            <span className="product_save1">₹</span>
            <span className="product_save2">87532</span>
            <span className="product_save3">₹75,999</span>
          </div>

          <p className="product_span">
            <span>Get it </span>
            <span className="product_span1">
              Friday, january 28 - Saturday, january 29
            </span>
          </p>
        </div>
      </div>
      <div className="product_container">
        <img
          className="product_image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYDTaA-oYogfMDYcmuikmTeu-NrRmB2JvECljLl6XeYJ5FvMhUXgAUkaunT1TL6ocNbE&usqp=CAU"
          alt="item.title"
        />
        <div style={{ padding: "10px" }}>
          <p className="products_p1">aleshfilaugbliug</p>
          <Rating
            name="text-feedback"
            value={4}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <div className="products_price">
            <span className="product_save1">₹</span>
            <span className="product_save2">87532</span>
            <span className="product_save3">₹75,999</span>
          </div>

          <p className="product_span">
            <span>Get it </span>
            <span className="product_span1">
              Friday, january 28 - Saturday, january 29
            </span>
          </p>
        </div>
      </div>
      <div className="product_container">
        <img
          className="product_image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYDTaA-oYogfMDYcmuikmTeu-NrRmB2JvECljLl6XeYJ5FvMhUXgAUkaunT1TL6ocNbE&usqp=CAU"
          alt="item.title"
        />
        <div style={{ padding: "10px" }}>
          <p className="products_p1">aleshfilaugbliug</p>
          <Rating
            name="text-feedback"
            value={4}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <div className="products_price">
            <span className="product_save1">₹</span>
            <span className="product_save2">87532</span>
            <span className="product_save3">₹75,999</span>
          </div>

          <p className="product_span">
            <span>Get it </span>
            <span className="product_span1">
              Friday, january 28 - Saturday, january 29
            </span>
          </p>
        </div>
      </div>
      <div className="product_container">
        <img
          className="product_image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYDTaA-oYogfMDYcmuikmTeu-NrRmB2JvECljLl6XeYJ5FvMhUXgAUkaunT1TL6ocNbE&usqp=CAU"
          alt="item.title"
        />
        <div style={{ padding: "10px" }}>
          <p className="products_p1">aleshfilaugbliug</p>
          <Rating
            name="text-feedback"
            value={4}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <div className="products_price">
            <span className="product_save1">₹</span>
            <span className="product_save2">87532</span>
            <span className="product_save3">₹75,999</span>
          </div>

          <p className="product_span">
            <span>Get it </span>
            <span className="product_span1">
              Friday, january 28 - Saturday, january 29
            </span>
          </p>
        </div>
      </div>
      <div className="product_container">
        <img
          className="product_image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYDTaA-oYogfMDYcmuikmTeu-NrRmB2JvECljLl6XeYJ5FvMhUXgAUkaunT1TL6ocNbE&usqp=CAU"
          alt="item.title"
        />
        <div style={{ padding: "10px" }}>
          <p className="products_p1">aleshfilaugbliug</p>
          <Rating
            name="text-feedback"
            value={4}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <div className="products_price">
            <span className="product_save1">₹</span>
            <span className="product_save2">87532</span>
            <span className="product_save3">₹75,999</span>
          </div>

          <p className="product_span">
            <span>Get it </span>
            <span className="product_span1">
              Friday, january 28 - Saturday, january 29
            </span>
          </p>
        </div>
      </div>

      {/* <Pagination1
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={paginate}
      /> */}
    </div>
  )
}

export default ProductEach
