import React from "react"
import NavBar from "../../../navBar/NavBar"
import "./placedSucccess.css"
const PlacedSuccessPage = () => {
  return (
    <>
      <NavBar />
      <div className="successPage_main">
        <div className="successPage_main_container">
          <div>
            <h3 className="green_heading">Order placed, thank you!</h3>
            <p>Confirmation will be sent to your email.</p>

            <h4 className="success_aligningitems">
              Shipping to{" "}
              <span>
                <h4>Swetha V,</h4>
              </span>
              #25
              <span>
                <h4>
                  Basaveshvar layoput , kadabgere cross, BENGALURU ,
                  KARNATAKE,562130
                </h4>
              </span>{" "}
            </h4>
            <hr />
            <div className="success_align_flexing_items">
              <div className="success_align_flexing_items_padding">
                <h4 className="Color_green">Thursday, 20 Jan</h4>
                <p className="Pading12">Delivery date</p>
              </div>
              <div className="displaying_flecxing_imagwes">
                <img
                  className="img_success_widthing"
                  src="https://m.media-amazon.com/images/I/61KuMWWVwLL._AC_AA160_.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <img
              className="img_success_page"
              src="https://m.media-amazon.com/images/G/01/aa/ich/TYPIMAGE2._CB669772659_.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PlacedSuccessPage
