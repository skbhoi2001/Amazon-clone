import React from "react"
import "./search.css"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import SearchIcon from "@mui/icons-material/Search"
const SearchField = () => {
  return (
    <div className="search_main">
      <div className="seach_first">
        <p>All</p>
        <ArrowDropDownIcon className="search_img" />
      </div>
      <div className="search_input">
        <input type="text" />
      </div>
      <div className="search_icon_main">
        <SearchIcon className="search_icon" />
      </div>
    </div>
  )
}

export default SearchField
