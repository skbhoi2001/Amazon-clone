import React from "react"
import { FetchRequest } from "./landingTop/FetchRequest"
import { SliderData } from "./landingTop/landingdata"
import ImageSlider from "./landingTop/LandingTopBar"
import { MoreItemFetch } from "./landingTop/MoreItem"
import { MoreItemSection1 } from "./landingTop/MoreItemSection1"
import { MostSeller } from "./landingTop/MostSeller"
// import NavBar from "../navBar/NavBar"
const MainLanding = () => {
  return (
    <>
      {/* <NavBar /> */}
      <div style={{ backgroundColor: "#EAEDED" }}>
        <img
          className="img_landing_scrolling"
          src="https://m.media-amazon.com/images/I/51xAnXjaRkL._SX3000_.jpg"
          alt=""
        />
        {/* <ImageSlider slides={SliderData} /> */}
        <div className="margin_image_sliding_top">
          <FetchRequest />
          <MoreItemFetch />
          <MoreItemSection1 />
          <MostSeller />
        </div>
      </div>
    </>
  )
}

export default MainLanding
