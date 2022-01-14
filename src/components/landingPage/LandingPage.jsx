import React from "react"
import NavBar from "../navBar/NavBar"

import "./landing/Component1/Component1.css"
import ImageSlider from "../landingPage/landing/Component1/ImageSlider"
import { SliderData } from "./landing/Component1/SliderData"
import { FetchRequest } from "./landing/TodaysDeal/FetchRequest"
export const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <ImageSlider slides={SliderData} />
      <FetchRequest />
    </div>
  )
}
