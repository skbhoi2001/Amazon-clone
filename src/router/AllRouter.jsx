import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { LandingPage } from "../components/landingPage/LandingPage"
export const AllRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </Router>
    </>
  )
}
