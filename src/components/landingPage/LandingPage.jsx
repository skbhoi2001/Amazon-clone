import React from "react"
import Footer from "../navBar/footer/Footer"
import NavBar from "../navBar/NavBar"

import MainLanding from "./MainLanding"

export const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <MainLanding />
      <Footer />
    </div>
  )
}
