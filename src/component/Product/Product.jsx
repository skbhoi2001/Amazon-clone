import React from "react"
import "./product.css"
import Rating from "@mui/material/Rating"
import StarIcon from "@mui/icons-material/Star"
const Product = () => {
  const value = 4
  return (
    <div>
      <div className="product_container">
        <img
          className="product_image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYDTaA-oYogfMDYcmuikmTeu-NrRmB2JvECljLl6XeYJ5FvMhUXgAUkaunT1TL6ocNbE&usqp=CAU"
          alt="item.title"
        />
        <div style={{ padding: "10px" }}>
          <p className="product_p">
            Wooden Sheesham Teak Wood Sofa Set 3 Seater | furniture Living Room
          </p>
          <Rating
            name="text-feedback"
            value={value}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <div className="product_price">
            <span className="product_save1">₹</span>{" "}
            <span className="product_save2"> 21,999 </span>
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
    </div>
  )
}

export default Product
