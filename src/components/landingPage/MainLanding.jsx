import React from "react"
import { FetchRequest } from "./landingTop/FetchRequest"
import { SliderData } from "./landingTop/landingdata"
import ImageSlider from "./landingTop/LandingTopBar"
import { MoreItemFetch } from "./landingTop/MoreItem"
import { MoreItemSection1 } from "./landingTop/MoreItemSection1"
import { MostSeller } from "./landingTop/MostSeller"
import NavBar from "../navBar/NavBar"
const MainLanding = () => {
  return (
    <>
      <NavBar />
      <div style={{ backgroundColor: "#EAEDED" }}>
        <ImageSlider slides={SliderData} />
        <div style={{ paddingTop: "460px" }}>
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
