/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react"
import { SliderData } from "./SliderData"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import "./Component1.css"
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className="slider">
      <BsChevronLeft className="left-arrow" onClick={prevSlide} />
      <BsChevronRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </div>
        )
      })}
    </section>
  )
}

export default ImageSlider
