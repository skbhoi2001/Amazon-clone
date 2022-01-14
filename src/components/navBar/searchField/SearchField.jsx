import React, { useState } from "react"
import "./search.css"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import SearchIcon from "@mui/icons-material/Search"
import { ProductData } from "../../../db"
import { NavLink } from "react-router-dom"
const SearchField = () => {
  const [searc, setSearch] = useState([])
  const handleSearch = e => {
    const search = ProductData.filter(a =>
      a.description.toLowerCase().includes(e.target.value)
    )
    setSearch(search)
  }
  console.log(searc)
  return (
    <>
      <div className="search_main">
        <div className="seach_first">
          <p>All</p>
          <ArrowDropDownIcon className="search_img" />
        </div>
        <div className="search_input">
          <input
            className="inputing"
            type="text"
            onChange={e => handleSearch(e)}
          />
        </div>
        <div className="search_icon_main">
          <SearchIcon className="search_icon" />
        </div>
      </div>
      <div className="dropDown_search">
        {searc.map(item => {
          return (
            <NavLink to={`/products/${item.id}`}>
              <div className="item_listShow">{item.title} </div>
            </NavLink>
          )
        })}
      </div>
    </>
  )
}

export default SearchField
