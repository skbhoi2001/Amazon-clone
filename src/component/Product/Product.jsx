import React, { useEffect } from "react"
import "./product.css"
import Rating from "@mui/material/Rating"
import StarIcon from "@mui/icons-material/Star"
import { getProduct } from "../../redux/product/action"
import { useDispatch, useSelector } from "react-redux"
const Product = () => {
  const { products, isLoading, isError } = useSelector(state => state)
  console.log(products, isLoading, isError)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])

  return (
    <div className="grid_boxing">
      {products.map(product => {
        return (
          <div className="product_container">
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
                <span className="product_save1">₹</span>
                <span className="product_save2">
                  {" "}
                  {product.primary_offer.min_price}{" "}
                </span>
                <span className="product_save3">₹75,999</span>
                <span className="product_save4">Save ₹54,000(71%)</span>
              </div>

              <p className="product_span">
                <span>Get it </span>
                <span className="product_span1">
                  Friday, january 28 - Saturday, january 29
                </span>
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Product
