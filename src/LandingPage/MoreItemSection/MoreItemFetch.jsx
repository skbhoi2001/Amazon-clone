
import  Slider  from "react-slick";
import axios from "axios";
import React from "react"
import { useEffect } from "react"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../TodaysDeal/TodaysDeal.css"
export const MoreItemFetch = ()=>{
    const [state,setState] = React.useState([])
    const getData = async ()=>{
        try {
            const response = await axios.get(`https://serpapi.com/search.json?engine=walmart&query=vitamins&api_key=553a91d893834e300d0fd9775fb2c67c180c04ebabdca991027c948cc595cce2`)
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
      };
    return(
        <>
      
        <div className="container" style={{backgroundColor:"white"}}>
              <h1>More Item To Explore</h1>
            <Slider {...settings}>
        
           {
               
               state.map((item)=>(
                   
                  
                   <div  className="out"> 
                        <img src={item.thumbnail} alt="image" />
                        <div style={{paddingTop:"20px"}}> ${item.primary_offer.offer_price}</div>
                    </div>
                   
                ))
           } 
           </Slider>
           
        </div>
        </>
        
    )
}


