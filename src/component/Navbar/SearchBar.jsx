import { useCallback, useState } from "react"
import SearchIcon from "@material-ui/icons/Search"
import { InputBase } from "@material-ui/core"
import "./searchbar.css"
import { Link } from "react-router-dom"

export default function SearchBar({ onChanges }) {
  const [search, setSearch] = useState("")

  const debounce = func => {
    let timer
    return function (...args) {
      const context = this
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null
        func.apply(context, args)
      }, 500)
    }
  }

  // const handleChange = (e) => {
  //   const  product  = e.target.value;

  // };

  // const optimisedVersion = useCallback(debounce(handleChange), []);

  // const handleClick = ()=>{
  //     alert(optimisedVersion)

  // }
  const handleClick = () => {
    console.log(search)
    onChanges(search)
  }
  return (
    <div>
      <div style={{ border: "5px solid #7F7F79", height: "40px" }}>
        <InputBase
          type={"text"}
          name={search}
          onChange={e => setSearch(e.target.value)}
          className={"inputBox"}
          placeholder="Search..."
        />
        {/* <input
        type={"text"}
        name={"search"}
        className={"search"}
        onChange={optimisedVersion}
      /> */}

        <SearchIcon onClick={handleClick} className={"srcBtn"} />
      </div>
      {/* <div className={"searchItem"}>
        {search?.length > 0 && (
          <div className={"searchContent"}>
            {search?.map((el, i) => (
              <div key={i}>
                <Link to={`./${el.name}`}>{el.name}</Link>
              </div>
            ))}
          </div>
        )}
      </div> */}
    </div>
  )
}
