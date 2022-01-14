import Slider from "react-slick"
import axios from "axios"
import React from "react"
import { useEffect } from "react"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./landingTop.css"
export const MostSeller = () => {
  const [state, setState] = React.useState([])
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://serpapi.com/search.json?engine=walmart&query=jeans&api_key=adf094f424eaf9d4a30af607e33833c06f551834dc546131c8125fff0876d7e9`
      )
      console.log(response.data.organic_results)
      setState(response.data.organic_results)
    } catch (error) {
      console.log("err")
    }
  }
  useEffect(() => {
    getData()
  }, [])

  let settings = {
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 5,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  }
  return (
    <>
      <div className="container" style={{ backgroundColor: "white" }}>
        <h1 style={{ marginTop: "15px" }}>Most Seller</h1>
        <Slider {...settings}>
          {state.map(item => (
            <div className="out">
              <img src={item.thumbnail} alt="image" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}
