import React from "react"
import { NavLink } from "react-router-dom"
import "./reviewpage.css"
const ReviewPage = () => {
  return (
    <div className="buynow_main ">
      <nav>
        <img
          className="buynow_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/confirm-banner._CB485949149_.gif"
          alt="gif"
        />
      </nav>
      <div className="buynow_main2">
        <h1 className="checout_headin">Review your order</h1>
        <p>
          By placing your order, you agree to Amazon's{" "}
          <span>privacy notice</span> and <span>conditions of use</span>{" "}
        </p>
        <div className="review_detail_maina">
          <div className="review_detail_add">
            <h3 className="review_h3">Shipping address</h3>
            <p className="review_p">Swetha V</p>
            <p className="review_p">#15</p>
            <p className="review_p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus perferendis
            </p>
            <p className="review_p">india</p>
            <p className="review_p">Phone : 7892839931</p>
            <p className="review_pAdd">Add delivery instructions</p>
          </div>
          <div className="review_detail_add">
            <h3 className="review_h3">Payment method</h3>
            <p className="review_p">Pay on delivery (Cash/Card)</p>
          </div>
          <div className="review_detail_add">
            <h3 className="review_h3">Gift card, Voucher</h3>
            <input type="number" placeholder="Enter Code" />
            <button>Apply</button>
          </div>
        </div>
        <div className="review_detail_mainq">
          <h2>Delivery date:20 Jan 2022</h2>
          <div className="review_detail_main">
            <img
              className="review_detail_main_img"
              src="https://images-eu.ssl-images-amazon.com/images/I/61KuMWWVwLL._AC_AA150_.jpg"
              alt=""
            />
            <div className="review_main_cass">
              <p className="review_desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
                ad. Ex
              </p>
              <div className="review_desc_price_tag">
                <p className="padding_p_tag1">₹16999</p>
                <p className="padding_p1_tag2">₹598</p>
                <img
                  className="width_image padding_p_tag"
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
                  alt=""
                />
              </div>
              <p className="padding_quantity_selected">Quantity: 1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="OrderSummary_page">
        <NavLink to="/placed">
          <button className="OrderSummary_page_button">Place your order</button>
        </NavLink>
        <h3 className="OrderSummary_page_h3">Order Summary</h3>
        <div className="OrderSummary_page_proice">
          <div>
            <p>Items:</p>
            <p>Delivery:</p>
            <p>Total:</p>
          </div>
          <div>
            <p>₹597</p>
            <p>₹40</p>
            <p>₹637</p>
          </div>
        </div>
        <hr />
        <div className="OrderSummary_page_proice ">
          <p className="OrderSummary_page_Red_color">Order Total:</p>
          <p className="OrderSummary_page_Red_color">₹597</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewPage
