import React from "react"
import { NavLink } from "react-router-dom"

const ReviewPage = () => {
  return (
    <div>
      <button>
        <NavLink to="/placed">Place your order</NavLink>
      </button>
    </div>
  )
}

export default ReviewPage
