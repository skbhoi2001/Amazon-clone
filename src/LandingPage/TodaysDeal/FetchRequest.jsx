import axios from "axios"
import React from "react"
import { useEffect } from "react"
import "./TodaysDeal.css"
export const FetchRequest = () => {
  const [state, setState] = React.useState([])
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://serpapi.com/search.json?engine=walmart&query=electronic&api_key=adf094f424eaf9d4a30af607e33833c06f551834dc546131c8125fff0876d7e9`
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
  return (
    <div className="container">
      {state.map(item => (
        <div>
          {/* <div>{item}</div> */}
          <img src={item.thumbnail} alt="image" />
          <div>{item.primary_offer.offer_price}</div>
        </div>
      ))}
    </div>
  )
}
