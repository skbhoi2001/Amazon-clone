import React from "react"
import NavBar from "../navBar/NavBar"
import './components/landingPage/landing/Component1/Component1.css';
import ImageSlider from './components/landingPage/landing/Component1/ImageSlider';
import { SliderData } from './components/landingPage/landing/Component1/SliderData';
import { FetchRequest } from './components/landingPage/landing/TodaysDeal/FetchRequest';
export const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <ImageSlider slides={SliderData}/>
    <FetchRequest/>
    </div>
  )
}
