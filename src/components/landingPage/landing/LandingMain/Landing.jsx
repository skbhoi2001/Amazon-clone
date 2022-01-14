import React from "react"
import ImageSlider from "../Component1/ImageSlider"
import { SliderData } from "../Component1/SliderData"
import { MoreItemFetch } from "../MoreItemSection/MoreItemFetch"
import { MoreItemSection1 } from "../MoreItemSection1/MoreItemSection1"
import { MostSeller } from "../MostSeller/MostSeller"
import { FetchRequest } from "../TodaysDeal/FetchRequest"

const Landing = () => {
  return (
    <div style={{ backgroundColor: "#EAEDED" }}>
      {/* <ImageSlider slides={SliderData} />
      <div style={{ paddingTop: "460px" }}>
        <FetchRequest />
        <MoreItemFetch />
        <MoreItemSection1 />
        <MostSeller />
      </div> */}
    </div>
  )
}

export default Landing
